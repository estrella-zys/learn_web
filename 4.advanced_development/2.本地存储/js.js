(function () {
    var eleForm = document.querySelector('#form');
    var eleTbody = document.querySelector('#result tbody');
    var eleStatus = document.getElementById('#status');
    var strTplList = document.getElementById('tplList').innerHTML;
    var logError = function (error) {
        eleStatus.style.display = 'block';
        eleStatus.innerHTML = '<span class="error">' + error + '</span>';
    }, logInfo = function (info) {
        eleStatus.style.display = 'block';
        eleStatus.innerHTML = '<span class="info">' + info + '</span>';
    };
    String.prototype.temp = function (obj) {
        return this.replace(/\$\w+\$/gi, function (matchs) {
            return obj[matchs.replace(/\$/g, "")] || '';
        });
    };
    var dbName = 'project';
    var version = 1;
    var db;
    var DBopenRequest = window.indexedDB.open(dbName, version);
    DBopenRequest.onerror = function (event) {
        logError("数据库打开失败");
    }

    DBopenRequest.onsuccess = function (event) {
        db = DBopenRequest.result;
        method.show();
    }

    DBopenRequest.onupgradeneeded = function (event) {
        var db = event.target.result;

        db.error = function (error) {
            logError("数据库打开失败");
        }

        objectStore = createIndex('id', 'id', {
            unique: true
        });

        objectStore.createIndex('name', 'name');
        objectStore.createIndex('begin', 'begin');
        objectStore.createIndex('end', 'end');
        objectStore.createIndex('person', 'person');
        objectStore.createIndex('remark', 'remark');
    }

    var method = {
        add: function (newItem) {
            var transaction = db.transaction([dbName], "readwrite");
            var objectStore = transaction.objectStore(dbName);
            objectStore.onsuccess = function (event) {
                method.show();
            }
        },
        edit: function (id, data) {
            var transaction = db.transaction([dbName], "readwrite");
            var objectStore = transaction.objectStore(dbName);
            var objectStoreRequest = objectStore.get(id);
            objectStoreRequest.onsuccess = function (event) {
                var myRecord = objectStoreRequest.result;
                for (key in data) {
                    if (typeof (myRecord[key]) != "undefined") {
                        myRecord[key] = data[key];
                    }
                }
                objectStore.put(myRecord);
            };
        },
        del: function (id) {
            var objectStore = db.transaction([dbName], "readwrite").objectStore(dbName);
            var objectStoreRequest = objectStore.delete(id);
            objectStoreRequest.onsuccess = function (event) {
                method.show();
            };
        },

        show: function () {
            var htmlProject = '';
            var objectStore = db.transaction(dbName).objectStore(dbName);
            objectStore.openCursor.onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    htmlProject += strTplList.temp(cursor.value);
                    cursor.continue();
                } else {
                    Info('');
                    eleTbody.innerHTML = htmlProjectList;

                    if (htmlProjectList == '') {
                        logInfo('暂无数据');
                    }
                }
            }
        }
    };

    eleForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var formData = {};

        [].slice.call(this.querySelectorAll('input,textarea')).forEach(function (ele) {
            if (ele.name) {
                formData[ele.name] = ele.value;
            }
        });

        method.add(formData);

        this.reset();
    });

    eleTbody.addEventListener('focusout', function (event) {
        var eleTd = event.target;

        var id = eleTd && eleTd.getAttribute('data-id');
        if (!id || !/td/.test(eleTd.tagName)) { return; }


        var data = {
            id: id * 1
        };

        [].slice.call(eleTd.parentElement.querySelectorAll('td[data-key]')).forEach(function (td) {
            var key = td.getAttribute('data-key');
            var value = td.innerText || td.textContent || '';

            data[key] = value;
        });


        method.edit(id, data);
    });

    eleTbody.addEventListener('click', function (event) {
        var eleBtn = event.target, id = '';
        if (eleBtn && eleBtn.classList.contains('jsListDel') && (id = eleBtn.getAttribute('data-id'))) {
            method.del(id * 1);
            event.preventDefault();
        }
    });
})();