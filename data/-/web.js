function require( path ){ return $node[ path ] };
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        let $nl_theme;
        (function ($nl_theme) {
            $nl_theme[$nl_theme["light"] = 0] = "light";
            $nl_theme[$nl_theme["dark"] = 1] = "dark";
        })($nl_theme = $$.$nl_theme || ($$.$nl_theme = {}));
        let $nl_line_style_type_enum;
        (function ($nl_line_style_type_enum) {
            $nl_line_style_type_enum[$nl_line_style_type_enum["solid"] = 0] = "solid";
            $nl_line_style_type_enum[$nl_line_style_type_enum["dashed"] = 1] = "dashed";
            $nl_line_style_type_enum[$nl_line_style_type_enum["dotted"] = 2] = "dotted";
            $nl_line_style_type_enum[$nl_line_style_type_enum["double"] = 3] = "double";
        })($nl_line_style_type_enum = $$.$nl_line_style_type_enum || ($$.$nl_line_style_type_enum = {}));
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//nl.js.map
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
        onmessage = function (event) {
            if (event.data.cmd == 'count') {
                const { cmd, tag } = event.data;
                open_idb((idb) => {
                    const transaction = idb.transaction(['adv'], 'readonly');
                    const start = Date.now();
                    const objectStore = transaction.objectStore('adv');
                    let count = 0;
                    const openCursor = objectStore.openCursor();
                    openCursor.onerror = function (event) {
                        console.error('openCursor');
                    };
                    openCursor.onsuccess = function (event) {
                        var cursor = event.target.result;
                        const size = 500;
                        if (cursor) {
                            count++;
                            cursor.continue();
                        }
                        else if (count >= size) {
                            postMessage({ cmd, tag, status: 'ok', count, timing: Date.now() - start });
                        }
                        else {
                            const bodyJson = {
                                aggregations: {
                                    avg_price_rub: true,
                                    avg_meter_price_rub: true,
                                },
                                fields: [
                                    "guid",
                                    'search_update_datetime',
                                    "w6_offer_id",
                                    'object_guid',
                                    "is_selected",
                                    "is_favorite",
                                    "is_hidden",
                                    "is_sended_to_viewboard",
                                    "is_liked_on_viewboard",
                                    "is_disliked_on_viewboard",
                                    "is_monitored",
                                    "user_note",
                                    "offer_pub_list",
                                    "deal_status_id",
                                    "user_deal_status_id",
                                    "winner_relevance",
                                    "free_mode_relevance",
                                    "photo_list",
                                    "photo_count",
                                    "video_count",
                                    "price_rub",
                                    'meter_price_rub',
                                    "price_usd",
                                    'meter_price_usd',
                                    "price_eur",
                                    'meter_price_eur',
                                    "pub_datetime",
                                    "first_pub_datetime",
                                    "media_id",
                                    "media_name",
                                    "agent_name",
                                    "broker.short_name",
                                    "broker.url",
                                    "external_url",
                                    "phone_list.is_black",
                                    "phone_list.black_note",
                                    "creation_datetime",
                                    "deal_type_id",
                                    "storey",
                                    "storeys_count",
                                    "walls_material_type_id",
                                    "total_square",
                                    "life_square",
                                    "kitchen_square",
                                    "security_type_id",
                                    "note",
                                    "owners_count",
                                    "ownership_type_id",
                                    "ownership_year",
                                    "balcony_type_id",
                                    "price_change_date",
                                    "price_change_type_id",
                                    "video_list",
                                    "built_year",
                                    "sale_type_name",
                                    "agency_bonus",
                                    "agency_bonus_type_id",
                                    "agency_bonus_currency_type_id",
                                    "total_room_count",
                                    "offer_room_count",
                                    "is_studio",
                                    "is_free_planning",
                                    "realty_type_id",
                                    "rooms_adjacency_type_id",
                                    "geo_cache_subway_station_name_1",
                                    "geo_subway_station_guid_1",
                                    "transport_access_1",
                                    "walking_access_1",
                                    "geo_cache_subway_station_name_2",
                                    "geo_subway_station_guid_2",
                                    "transport_access_2",
                                    "walking_access_2",
                                    "geo_cache_subway_station_name_3",
                                    "geo_subway_station_guid_3",
                                    "transport_access_3",
                                    "walking_access_3",
                                    "geo_cache_subway_station_name_4",
                                    "geo_subway_station_guid_4",
                                    "transport_access_4",
                                    "walking_access_4",
                                    'water_closet_type_id',
                                    'parking_type_id',
                                    'territory_type_id',
                                    'window_overlook_type_id',
                                    'apartment_condition_type_id',
                                    'elevator_type_id',
                                    'square_explication',
                                    'geo_cache_state_name',
                                    'geo_cache_region_name',
                                    "geo_cache_building_name",
                                    'geo_cache_town_name_2',
                                    'geo_cache_settlement_name',
                                    'geo_cache_estate_object_name',
                                    'geo_cache_micro_district_name',
                                    "geo_cache_street_name",
                                    'geo_cache_street_name_2',
                                    'is_construction_address',
                                    'geo_cache_housing_complex_name',
                                    'location',
                                    'building_batch_id',
                                    'habit_class_id',
                                ],
                                sort: [
                                    { winner_relevance: { order: "desc" } },
                                    { w6_offer_id: { order: "desc" } },
                                ],
                                from: 0,
                                size,
                                conditions: {
                                    published_days_ago: { days: 7 },
                                    realty_section: { code: ["flat"] },
                                    deal_type: { code: ["sale"] },
                                    area: { code: ["msk"] },
                                    is_deal_actual: true,
                                    use_strict_conditions: true,
                                },
                                mixins: { is_selected: true },
                                dsl_version: 2,
                            };
                            const body = JSON.stringify(bodyJson);
                            const start = Date.now();
                            const headersInit = [
                                ['Accept', 'application/json'],
                                ['Content-Type', 'application/json'],
                            ];
                            console.log(headersInit);
                            const headers = new Headers(headersInit);
                            fetch('https://mls.baza-winner.ru/v2/users/unauthenticated/items/_search.json?project_code=w7', {
                                method: 'POST',
                                headers,
                                body,
                                mode: 'cors',
                            })
                                .catch(error => postMessage({ cmd, tag, status: 'error', message: `${error}` }))
                                .then((response) => {
                                console.log({ fetch: Date.now() - start });
                                if (response.status != 200) {
                                    postMessage({ cmd, tag, status: 'error', message: response.statusText });
                                }
                                else {
                                    const start = Date.now();
                                    response.json()
                                        .catch((error) => postMessage({ cmd, tag, status: 'error', message: `${error}` }))
                                        .then((data) => {
                                        const count = data.advs.length;
                                        console.log({ count });
                                        const transaction = idb.transaction(['adv', 'user'], 'readwrite');
                                        transaction.oncomplete = (event) => {
                                            postMessage({ cmd, tag, status: 'ok', count, timing: Date.now() - start });
                                            console.log(event);
                                        };
                                        transaction.onabort = (event) => {
                                            postMessage({ cmd, tag, status: 'error', message: `${event}` });
                                            console.error(event);
                                        };
                                        const advStore = transaction.objectStore('adv');
                                        const userStore = transaction.objectStore('user');
                                        let success_qt = count;
                                        const object_guid = {};
                                        for (let i = 0; i < count; i++) {
                                            const adv = data.advs[i];
                                            const user = { user_id: 'anon', offer_id: adv.w6_offer_id };
                                            const flds = ['is_selected', 'is_favorite', 'is_hidden', 'is_sended_to_viewboard', 'is_liked_on_viewboard', 'is_disliked_on_viewboard', 'is_monitored', 'user_note'];
                                            for (let j = 0; j < flds.length; j++) {
                                                const fld = flds[i];
                                                user[fld] = adv[fld];
                                                delete adv[fld];
                                            }
                                            advStore.put(adv);
                                            userStore.put(user);
                                            object_guid[adv.object_guid] = (object_guid[adv.object_guid] || 0) + 1;
                                        }
                                    });
                                }
                            });
                        }
                    };
                });
            }
            else if (event.data.cmd == 'recs') {
                const { cmd, tag } = event.data;
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
                                postMessage(Object.assign(Object.assign({ cmd, tag, status: 'ok' }, response), { timing: Date.now() - start }));
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
                                        postMessage(Object.assign(Object.assign({ cmd, tag, status: 'ok' }, response), { timing: Date.now() - start }));
                                        return;
                                    }
                                }
                                idx++;
                                cursor.continue();
                            }
                            else {
                                postMessage(Object.assign(Object.assign({ cmd, tag, status: 'ok' }, response), { timing: Date.now() - start }));
                            }
                        };
                    }
                    else {
                        postMessage({ cmd, tag, status: 'warn', message: 'no .by_guid, neither .by_idx' });
                    }
                });
            }
            else if (event.data.cmd == 'card') {
                const { cmd, tag } = event.data;
                const request = event.data;
                open_idb((idb) => {
                    const response = {};
                    const transaction = idb.transaction('adv', 'readonly');
                    const start = Date.now();
                    const objectStore = transaction.objectStore('adv');
                    if (request.guid) {
                        const objectStoreRequest = objectStore.get(request.guid);
                        objectStoreRequest.onsuccess = function (event) {
                            response.item = objectStoreRequest.result;
                            postMessage(Object.assign(Object.assign({ cmd, tag, status: 'ok' }, response), { timing: Date.now() - start }));
                        };
                    }
                    else {
                        postMessage({ cmd, tag, status: 'warn', message: 'not found card' });
                    }
                });
            }
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//data.js.map

//# sourceMappingURL=web.js.map
