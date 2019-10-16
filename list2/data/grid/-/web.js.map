"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_stop = false;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//me.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        let isArray = Array.isArray;
        let keyList = Object.keys;
        let hasProp = Object.prototype.hasOwnProperty;
        function $me_equal(a, b) {
            if (a === b)
                return true;
            if (a && b && typeof a == 'object' && typeof b == 'object') {
                const arrA = isArray(a), arrB = isArray(b);
                if (arrA != arrB)
                    return false;
                if (arrA && arrB) {
                    const length = a.length;
                    if (length != b.length)
                        return false;
                    for (let i = length; i-- !== 0;)
                        if (!$me_equal(a[i], b[i])) {
                            return false;
                        }
                    return true;
                }
                const setA = a instanceof Set, setB = b instanceof Set;
                if (setA != setB)
                    return false;
                if (setA && setB) {
                    if (a.size != b.size)
                        return false;
                    let iter = a.keys();
                    let next = iter.next();
                    while (!next.done) {
                        if (!b.has(next.value))
                            return false;
                        next = iter.next();
                    }
                    iter = b.keys();
                    next = iter.next();
                    while (!next.done) {
                        if (!a.has(next.value))
                            return false;
                        next = iter.next();
                    }
                    return true;
                }
                const mapA = a instanceof Map, mapB = b instanceof Map;
                if (mapA != mapB)
                    return false;
                if (mapA && mapB)
                    return $me_equal([...a], [...b]);
                const dateA = a instanceof Date, dateB = b instanceof Date;
                if (dateA != dateB)
                    return false;
                if (dateA && dateB)
                    return a.getTime() == b.getTime();
                const regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
                if (regexpA != regexpB)
                    return false;
                if (regexpA && regexpB)
                    return a.toString() == b.toString();
                const keys = keyList(a);
                const length = keys.length;
                if (length !== keyList(b).length)
                    return false;
                for (let i = length; i-- !== 0;)
                    if (!hasProp.call(b, keys[i]))
                        return false;
                for (let i = length; i-- !== 0;) {
                    const key = keys[i];
                    if (!$me_equal(a[key], b[key]))
                        return false;
                }
                return true;
            }
            return a !== a && b !== b;
        }
        $$.$me_equal = $me_equal;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//equal.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_throw_silent = false;
        function $me_throw(msg, ...p) {
            if (!$$.$me_throw_silent)
                console.error.apply(console, [msg, ...p]);
            throw new Error(msg);
        }
        $$.$me_throw = $me_throw;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//throw.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const DB_NAME = 'bw';
        const DB_VERSION = 1;
        function open_idb(onsuccess) {
            const open = indexedDB.open(DB_NAME, DB_VERSION);
            open.onupgradeneeded = (event) => {
                const idb = event.target.result;
                const advStore = idb.createObjectStore('adv', {
                    keyPath: 'guid',
                });
                advStore.createIndex('w6_offer_id', 'w6_offer_id', { unique: true });
                advStore.createIndex('object_guid', 'object_guid', { unique: false });
                idb.createObjectStore('user', {
                    keyPath: ['user_id', 'offer_id'],
                });
            };
            open.onversionchange = (event) => {
                postMessage({ status: 'warn', message: `${event}` });
            };
            open.onerror = (event) => {
                postMessage({ status: 'error', message: `${event}` });
            };
            open.onsuccess = (event) => {
                onsuccess(event.target.result);
            };
        }
        const tags = new Map();
        function fetchUrl(mode) {
            return `https://mls.baza-winner.ru/v2/users/235201/orders/730323d6-5d1d-4e48-b894-30641a047f75/${mode ? 'snippets' : 'items'}/_search.json?project_code=w7`;
        }
        onmessage = function (event) {
            const parsed = event.data;
            const { cmd, tag, sent } = parsed;
            console.log({ cmd, tag }, { 'message took': Date.now() - sent });
            if (cmd == 'count') {
                const start = Date.now();
                const { params } = parsed;
                const bodyJson = {
                    aggregations: {
                        avg_price_rub: true,
                        avg_meter_price_rub: true,
                    },
                    from: 0,
                    size: 0,
                    conditions: params.conditions,
                    mixins: params.mixins,
                    dsl_version: 2,
                };
                const body = JSON.stringify(bodyJson);
                const headersInit = [
                    ['Accept', 'application/json'],
                    ['Content-Type', 'application/json'],
                    ['access_token', 'BwwE49boFbkbNTgMjLdb8tmbHOiwNVA0TAGUP5DUzLeD0pE74YOZqG0J3UryFvWD'],
                ];
                const headers = new Headers(headersInit);
                Promise.all([
                    fetch(fetchUrl(0), {
                        method: 'POST',
                        headers,
                        body,
                        mode: 'cors',
                    }),
                    fetch(fetchUrl(1), {
                        method: 'POST',
                        headers,
                        body,
                        mode: 'cors',
                    }),
                ])
                    .then((responses) => {
                    return Promise.all(responses.map(response => {
                        if (response.status != 200)
                            throw response.status;
                        return response.json();
                    }));
                })
                    .then((responses) => {
                    const counts = responses.map(response => response.meta.total);
                    const avg_price_rubs = responses.map(response => Math.round(response.aggregations.avg_price_rub.value));
                    const avg_meter_price_rubs = responses.map(response => Math.round(response.aggregations.avg_meter_price_rub.value));
                    console.log({
                        cmd,
                        tag,
                        counts,
                        avg_price_rubs,
                        avg_meter_price_rubs,
                    });
                    postMessage({
                        cmd,
                        tag,
                        status: 'ok',
                        counts,
                        avg_price_rubs,
                        avg_meter_price_rubs,
                        timing: Date.now() - start,
                        sent: Date.now(),
                    });
                    tags.set(tag, { params, counts, avg_price_rubs, avg_meter_price_rubs });
                })
                    .catch(error => postMessage({ cmd, tag, status: 'error', message: `${error}` }));
                return;
            }
            else if (event.data.cmd == 'by_idx') {
                const { mode, from, size, sort } = event.data;
                if (mode == 1) {
                    const tagInfo = tags.get(tag);
                    if (tagInfo && tagInfo.counts && tagInfo.counts[mode]) {
                        if (tagInfo.sort && !$$.$me_equal(tagInfo.sort, sort)) {
                            tagInfo.snippets = null;
                            tagInfo.items = null;
                        }
                        if (!tagInfo.snippets) {
                        }
                        else {
                            console.log('TODO');
                        }
                    }
                    else if (!(tagInfo && tagInfo.counts && tagInfo.counts[mode] == 0)) {
                        console.error(`count first`);
                    }
                    else {
                        console.error(`count == 0`);
                    }
                }
                else {
                    $$.$me_throw('TODO');
                }
                return;
                const request = event.data;
                open_idb((idb) => {
                    const response = {};
                    const transaction = idb.transaction('adv', 'readonly');
                    const start = Date.now();
                    const objectStore = transaction.objectStore('adv');
                    let idx = 0;
                    if (request.by_guid) {
                        response.by_guid = new Map();
                        const guidIter = request.by_guid.keys();
                        const nextGuid = () => {
                            const next = guidIter.next();
                            if (next.done) {
                                postMessage(Object.assign({ cmd, tag, status: 'ok' }, response, { timing: Date.now() - start }));
                            }
                            else {
                                let guidRequest = objectStore.get(next.value);
                                guidRequest.onsuccess = (event) => {
                                    const fld_values = event.target.result;
                                    const guid = next.value;
                                    const guid_request = request.by_guid.get(guid);
                                    const guid_response = new Map();
                                    guid_request.forEach((fld) => {
                                        const fld_value = fld_values[fld];
                                        if (fld_value !== void 0) {
                                            guid_response.set(fld, fld_value);
                                        }
                                    });
                                    if (guid_response.size) {
                                        response.by_guid.set(guid, guid_response);
                                    }
                                    nextGuid();
                                };
                                guidRequest.onerror = (event) => {
                                    console.error(event);
                                    nextGuid();
                                };
                            }
                        };
                        nextGuid();
                    }
                    else if (request.by_idx) {
                        response.by_idx = {};
                        const openCursor = objectStore.openCursor();
                        openCursor.onsuccess = function (event) {
                            var cursor = event.target.result;
                            if (cursor) {
                                const idx_request = request.by_idx[idx];
                                if (idx_request) {
                                    const idx_response = {};
                                    idx_request.forEach((fld) => {
                                        const fld_value = cursor.value[fld];
                                        if (fld_value !== void 0)
                                            idx_response[fld] = fld_value;
                                    });
                                    response.by_idx[idx] = idx_response;
                                    if (Object.keys(response.by_idx).length >= Object.keys(request.by_idx).length) {
                                        postMessage(Object.assign({ cmd, tag, status: 'ok' }, response, { timing: Date.now() - start }));
                                        return;
                                    }
                                }
                                idx++;
                                cursor.continue();
                            }
                            else {
                                postMessage(Object.assign({ cmd, tag, status: 'ok' }, response, { timing: Date.now() - start }));
                            }
                        };
                    }
                    else {
                        postMessage({ cmd, tag, status: 'warn', message: 'no .by_guid, neither .by_idx' });
                    }
                });
            }
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//data.js.map
//# sourceMappingURL=web.js.map