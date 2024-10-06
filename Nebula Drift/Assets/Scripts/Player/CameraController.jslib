mergeInto(LibraryManager.library, {
    SetLocalStorage: function (key, value) {
        localStorage.setItem(UTF8ToString(key), UTF8ToString(value));
    },
    GetLocalStorage: function (key) {
        var value = localStorage.getItem(UTF8ToString(key));
        if (value === null) {
            return 0;
        }
        return allocate(intArrayFromString(value), ALLOC_NORMAL);
    },
    RemoveLocalStorage: function (key) {
        localStorage.removeItem(UTF8ToString(key));
    },
    ClearLocalStorage: function () {
        localStorage.clear();
    },
});