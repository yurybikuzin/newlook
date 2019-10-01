"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $me_easing_value(initial, target, t, fn = $$.$me_easing.linear) {
            return initial + (target - initial) * fn(t);
        }
        $$.$me_easing_value = $me_easing_value;
        $$.$me_easing = {
            linear: (t) => t,
            easeInQuad: (t) => t * t,
            easeOutQuad: (t) => t * (2 - t),
            easeInOutQuad: (t) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
            easeInCubic: (t) => t * t * t,
            easeOutCubic: (t) => (--t) * t * t + 1,
            easeInOutCubic: (t) => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
            easeInQuart: (t) => t * t * t * t,
            easeOutQuart: (t) => 1 - (--t) * t * t * t,
            easeInOutQuart: (t) => t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
            easeInQuint: (t) => t * t * t * t * t,
            easeOutQuint: (t) => 1 + (--t) * t * t * t * t,
            easeInOutQuint: (t) => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//easing.js.map
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
        function $me_word_plural(count, word1, word2_4, word5more) {
            if (word5more === undefined) {
                word5more = word2_4;
            }
            let result = word5more;
            const decimal = Math.floor(count / 10) % 10;
            if (decimal != 1) {
                const unit = count % 10;
                if (unit == 1) {
                    result = word1;
                }
                else if (unit >= 2 && unit <= 4) {
                    result = word2_4;
                }
            }
            return result;
        }
        $$.$me_word_plural = $me_word_plural;
        $$.$me_throw_silent = false;
        function $me_throw(msg, ...p) {
            if (!$$.$me_throw_silent)
                console.error.apply(console, [msg, ...p]);
            throw new Error(msg);
        }
        $$.$me_throw = $me_throw;
        $$.$me_stop = false;
        let $me_theme;
        (function ($me_theme) {
            $me_theme[$me_theme["light"] = 0] = "light";
            $me_theme[$me_theme["dark"] = 1] = "dark";
        })($me_theme = $$.$me_theme || ($$.$me_theme = {}));
        function $me_vector_transform(v, dist, from) {
            const dx = v.to.x - v.from.x;
            const dy = v.to.y - v.from.y;
            const len = Math.hypot(dx, dy);
            if (!from)
                from = v.from;
            const result = {
                from,
                to: {
                    x: dx / len * dist + from.x,
                    y: dy / len * dist + from.y,
                },
            };
            return result;
        }
        $$.$me_vector_transform = $me_vector_transform;
        function $me_vector_revert(v) {
            const result = {
                from: v.to,
                to: v.from,
            };
            return result;
        }
        $$.$me_vector_revert = $me_vector_revert;
        $$.$me_rect = () => ({ left: 0, top: 0, right: 0, bottom: 0 });
        $$.$me_rect_width = (rect) => rect.right - rect.left;
        $$.$me_rect_height = (rect) => rect.bottom - rect.top;
        $$.$me_pos = () => ({ left: 0, top: 0 });
        $$.$me_point_in_rect = (x, y, rect, tolerance = 0) => rect.left - tolerance < x && x < rect.right + tolerance &&
            rect.top - tolerance < y && y < rect.bottom + tolerance;
        $$.$me_dist_to_rect = (x, y, rect) => $$.$me_point_in_rect(x, y, rect) ? 0 :
            Math.max(Math.min(Math.abs(rect.left - x), Math.abs(rect.right - x)), Math.min(Math.abs(rect.top - y), Math.abs(rect.bottom - y)));
        function $me_point_in_rect_offset(x, y, offsetRect, clientRect) {
            x -= clientRect.left;
            y -= clientRect.top;
            const result = offsetRect && clientRect &&
                offsetRect.left < x && x < offsetRect.right &&
                offsetRect.top < y && y < offsetRect.bottom &&
                true;
            return result;
        }
        $$.$me_point_in_rect_offset = $me_point_in_rect_offset;
        function $me_option_caption(id, options, val) {
            const isSelected = typeof val == 'string' ? val == id :
                val instanceof Set ? val.has(id) :
                    val instanceof Map ? val.has(id) :
                        false;
            const caption = typeof options[id].caption == 'function' ?
                options[id].caption({ val, isSelected }) :
                options[id].caption;
            return caption;
        }
        $$.$me_option_caption = $me_option_caption;
        function $me_option_caption_text(id, options, val) {
            const caption = $me_option_caption(id, options, val);
            const result = typeof caption == 'string' ? caption :
                !caption || typeof caption.text != 'string' ? id :
                    caption.text;
            return result;
        }
        $$.$me_option_caption_text = $me_option_caption_text;
        $$.$me_enum_names = (val) => {
            if (_enum_names_cache.has(val))
                return _enum_names_cache.get(val);
            const result = Object.keys(val).filter(key => typeof val[key] == 'number');
            _enum_names_cache.set(val, result);
            return result;
        };
        const _enum_names_cache = new Map();
        $$.$me_enum_values = (val) => {
            if (_enum_values_cache.has(val))
                return _enum_values_cache.get(val);
            const result = Object.keys(val).reduce((result, key) => {
                const n = +key;
                if (Number.isFinite(n))
                    result.push(n);
                return result;
            }, Array());
            _enum_values_cache.set(val, result);
            return result;
        };
        const _enum_values_cache = new Map();
        $$.$me_enum_pairs = (val) => {
            if (_enum_pairs_cache.has(val))
                return _enum_pairs_cache.get(val);
            const result = $$.$me_enum_values(val).map(value => [value, val[value]]);
            _enum_pairs_cache.set(val, result);
            return result;
        };
        const _enum_pairs_cache = new Map();
        let $me_rect_corners_enum;
        (function ($me_rect_corners_enum) {
            $me_rect_corners_enum[$me_rect_corners_enum["leftTop"] = 0] = "leftTop";
            $me_rect_corners_enum[$me_rect_corners_enum["rightTop"] = 1] = "rightTop";
            $me_rect_corners_enum[$me_rect_corners_enum["leftBottom"] = 2] = "leftBottom";
            $me_rect_corners_enum[$me_rect_corners_enum["rightBottom"] = 3] = "rightBottom";
        })($me_rect_corners_enum = $$.$me_rect_corners_enum || ($$.$me_rect_corners_enum = {}));
        let $me_rect_sides_enum;
        (function ($me_rect_sides_enum) {
            $me_rect_sides_enum[$me_rect_sides_enum["left"] = 0] = "left";
            $me_rect_sides_enum[$me_rect_sides_enum["top"] = 1] = "top";
            $me_rect_sides_enum[$me_rect_sides_enum["right"] = 2] = "right";
            $me_rect_sides_enum[$me_rect_sides_enum["bottom"] = 3] = "bottom";
        })($me_rect_sides_enum = $$.$me_rect_sides_enum || ($$.$me_rect_sides_enum = {}));
        let $me_align;
        (function ($me_align) {
            $me_align[$me_align["left"] = 0] = "left";
            $me_align[$me_align["top"] = 0] = "top";
            $me_align[$me_align["right"] = 1] = "right";
            $me_align[$me_align["bottom"] = 1] = "bottom";
            $me_align[$me_align["center"] = 2] = "center";
        })($me_align = $$.$me_align || ($$.$me_align = {}));
        function $me_align_correction(align, correction) {
            return (align == $me_align.left ? 0 : correction() / align);
        }
        $$.$me_align_correction = $me_align_correction;
        let $me_line_style_type_enum;
        (function ($me_line_style_type_enum) {
            $me_line_style_type_enum[$me_line_style_type_enum["solid"] = 0] = "solid";
            $me_line_style_type_enum[$me_line_style_type_enum["dashed"] = 1] = "dashed";
            $me_line_style_type_enum[$me_line_style_type_enum["dotted"] = 2] = "dotted";
            $me_line_style_type_enum[$me_line_style_type_enum["double"] = 3] = "double";
        })($me_line_style_type_enum = $$.$me_line_style_type_enum || ($$.$me_line_style_type_enum = {}));
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//me.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $me_atom2_async(p, add = true) {
            if ($$.$me_stop)
                return;
            if (p !== void 0) {
                add_to_queue(p, $$._me_atom2_async_raf_queue, add ? null :
                    (pa, pb) => pa.fn ===
                        pb.fn);
            }
            else if (_raf == null) {
                _raf = requestAnimationFrame(t => {
                    _raf = null;
                    if ($$.$me_stop)
                        return;
                    const start_raf = performance.now();
                    const deadline = start_raf + 60000;
                    for (const { fn } of $$._me_atom2_async_raf_queue)
                        fn(t);
                    {
                        const stat = new Map();
                        const len = _me_atom2_async_ric_queue.length;
                        let i = 0;
                        $$.$me_atom2.update_count = 0;
                        $$.$me_atom2.compute_count = 0;
                        $$.$me_atom2.pure_compute_count = 0;
                        $$.$me_atom2.update_timing = 0;
                        $$.$me_atom2.compute_timing = 0;
                        $$.$me_atom2.pure_compute_timing = 0;
                        const start_ric = performance.now();
                        for (; performance.now() < deadline && i < len; i++) {
                            const { fn, name } = _me_atom2_async_ric_queue[i];
                            const start_fn = performance.now();
                            const [count, pre] = fn(deadline, start_fn, t);
                            $me_atom2_async_stat_update(stat, name, count, pre, performance.now() - start_fn);
                            if (count)
                                i = -1;
                        }
                        if (i < len)
                            $me_atom2_async();
                        $me_atom2_async_stat_show(stat, start_ric, 'IDLE_CALLBACK');
                    }
                });
            }
        }
        $$.$me_atom2_async = $me_atom2_async;
        let _raf;
        $$._me_atom2_async_raf_queue = Array();
        function $me_atom2_async_stat_update(stat, name, count, pre, timing) {
            if (!(count || timing > 1 || pre > 1))
                return;
            const has = stat.has(name);
            const si = has ? stat.get(name) : { count: 0, pre: 0, timing: 0 };
            si.pre += pre;
            si.count += count;
            si.timing += timing;
            if (!has)
                stat.set(name, si);
        }
        $$.$me_atom2_async_stat_update = $me_atom2_async_stat_update;
        function $me_atom2_async_stat_show(stat, start, name) {
            if (!stat.size)
                return;
            const atom_stat = $$.a.root().by_path_s('/.#stat');
            if (typeof atom_stat === 'string')
                return;
            const thresholds = atom_stat.value();
            if (!thresholds)
                return;
            const timing = +(performance.now() - start).toFixed(1);
            if (timing < thresholds[0])
                return;
            const result = [{ name, timing }];
            if (thresholds.length >= 3 && timing > thresholds[2]) {
                console.error({ name, timing });
            }
            else if (thresholds.length >= 2 && timing > thresholds[1]) {
                console.warn({ name, timing });
            }
            for (const [name, si] of stat) {
                const item = {
                    name,
                    timing: +si.timing.toFixed(1),
                };
                const pre = +si.pre.toFixed(1);
                if (pre)
                    item.timing = `${item.timing} (-${pre} => ${(item.timing - pre).toFixed(1)})`;
                if (si.count) {
                    item.count = si.count;
                    item.per = (si.timing - si.pre) / si.count;
                }
                result.push(item);
            }
            console.table(result);
            console.log({
                count: `${$$.$me_atom2.update_count}/${$$.$me_atom2.compute_count}/${$$.$me_atom2.pure_compute_count}`,
                timing: `${Math.round($$.$me_atom2.update_timing)}/${Math.round($$.$me_atom2.compute_timing)}/${Math.round($$.$me_atom2.pure_compute_timing)}`
            });
        }
        $$.$me_atom2_async_stat_show = $me_atom2_async_stat_show;
        function add_to_queue(p, queue, equal) {
            if (equal) {
                const len = queue.length;
                for (let i = len - 1; i >= 0; i--)
                    if (equal(p, queue[i]))
                        queue.splice(i, 1);
            }
            else {
                let i = p.order != null ? 0 : queue.length;
                if (p.order != null)
                    while (i < queue.length &&
                        queue[i].order != null &&
                        p.order >= queue[i++].order) { }
                queue.splice(i, 0, p);
            }
        }
        function $me_atom2_async_ric(p) {
            if (p !== void 0) {
                add_to_queue(p, _me_atom2_async_ric_queue);
            }
            else {
                $me_atom2_async();
            }
        }
        $$.$me_atom2_async_ric = $me_atom2_async_ric;
        let _me_atom2_async_ric_queue = Array();
        function $me_atom2_async_multi_origin(pp) {
            const _default = pp.default;
            const _raf_order = pp.raf_order;
            let _value;
            let _need_flush = false;
            let _prev;
            const _flush = () => {
                if (!_need_flush)
                    return;
                pp.flush(_value.val, _prev, _value);
                _prev = _value.val;
                _need_flush = false;
            };
            if (_raf_order != null)
                $me_atom2_async({ fn: _flush, order: _raf_order });
            const result = function (p) {
                if ((p !== void 0) && (_value == null || ($$.$me_equal(p.origin, _value.origin) ?
                    !$$.$me_equal(p.val, _value.val) :
                    !$$.$me_equal(p.val, _default)))) {
                    _value = { origin: p.origin, val: p.val };
                    _need_flush = true;
                    if (_raf_order == null && p.immediatly === false)
                        $$.$me_throw('immediatly can not be false whilst raf_order is not set');
                    if (_raf_order == null || p.immediatly) {
                        _flush();
                    }
                    else {
                        $me_atom2_async();
                    }
                }
                return _value ? _value.val : _default;
            };
            return result;
        }
        $$.$me_atom2_async_multi_origin = $me_atom2_async_multi_origin;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//async.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $me_atom2_path {
            constructor(p) {
                this.ent = p.ent;
                const isRoot = p.ent === $$.$me_atom2_entity_enum.root;
                this.tail = isRoot ? '' : p.tail;
                this.path = isRoot ? null : p.path;
            }
            get 'toString()'() {
                return this.toString();
            }
            static fromString(s, pos = 0, keys) {
                let idx_key = 0;
                const err = (msg) => `${msg} in '${s}' at pos ${pos}`;
                let path;
                let ent;
                while (pos < s.length) {
                    const ent_prev = ent;
                    let ch = s.slice(pos, pos + 1);
                    ent = $$.$me_atom2_path_ent2prefix.indexOf(ch);
                    const expected = ent_prev == $$.$me_atom2_entity_enum.prop && (ent === $$.$me_atom2_entity_enum.control ||
                        ent === $$.$me_atom2_entity_enum.elem) ? `"${$$.$me_atom2_path_ent2prefix[$$.$me_atom2_entity_enum.prop]}"` :
                        ent < 0 ||
                            ent === $$.$me_atom2_entity_enum.root && pos ||
                            ent === $$.$me_atom2_entity_enum.key ? $$.$me_atom2_path_ent2prefix
                            .filter((val, idx) => idx > $$.$me_atom2_entity_enum.key)
                            .reduce((result, val, idx, arr) => result +
                            (!idx ? '' :
                                idx < arr.length - 1 ? `, ` :
                                    ` or `) +
                            `"${val}"`, '') :
                            '';
                    if (expected)
                        return err(`${expected} is expected instead of "${ch}"`);
                    pos++;
                    let pos_next = indexOf(s, pos, ...$$.$me_atom2_path_ent2prefix, ']');
                    let tail = s.slice(pos, pos_next);
                    if (!tail && ent !== $$.$me_atom2_entity_enum.root) {
                        if (ent === $$.$me_atom2_entity_enum.prop && ((ch = s.slice(pos_next, pos_next + 1)) == $$.$me_atom2_path_ent2prefix[$$.$me_atom2_entity_enum.control] ||
                            ch == $$.$me_atom2_path_ent2prefix[$$.$me_atom2_entity_enum.elem])) {
                            tail = s.slice(pos, pos_next = indexOf(s, pos_next + 1, ...$$.$me_atom2_path_ent2prefix, ']'));
                        }
                        else {
                            return err(`${$$.$me_atom2_entity_enum[ent]} name must not be empty`);
                        }
                    }
                    pos = pos_next;
                    path = new $me_atom2_path({ ent, tail, path });
                    if (pos < s.length) {
                        ch = s.slice(pos, pos + 1);
                        if (ch === ']') {
                            return err(`"]" without preceding "[" found`);
                        }
                        else
                            while (ch === '[') {
                                const pos_next = indexOf(s, pos + 1, ']');
                                if (pos_next === s.length)
                                    return err(`not found "]" for "["`);
                                let tail;
                                if (pos_next - pos >= 2) {
                                    tail = s.slice(pos + 1, pos_next);
                                }
                                else {
                                    if (!keys)
                                        return err(`keys must be provided`);
                                    if (idx_key >= keys.key.length)
                                        return err(`keys[${idx_key}] must be provided`);
                                    tail = keys.key[idx_key++];
                                }
                                const ent = $$.$me_atom2_entity_enum.key;
                                path = new $me_atom2_path({ ent, tail, path });
                                pos = pos_next + 1;
                                if (pos >= s.length)
                                    break;
                                ch = s.slice(pos, pos + 1);
                            }
                    }
                }
                return path;
            }
            toString(...paths) {
                paths.push(this);
                const arr = Array();
                for (let path of paths.reverse()) {
                    arr.push(path);
                    while (path = path.path)
                        arr.push(path);
                }
                const result = arr
                    .reverse()
                    .reduce((result, item, idx) => result +
                    $$.$me_atom2_path_ent2prefix[item.ent] +
                    item.tail +
                    ent2suffix[item.ent] +
                    '', '');
                return result;
            }
        }
        $$.$me_atom2_path = $me_atom2_path;
        $$.$me_atom2_path_ent2prefix = ['/', '[', '.', '^', '@'];
        const ent2suffix = ['', ']', '', '', ''];
        $$.$me_atom2_path_ch_parent = '<';
        function indexOf(s, from, ...ch_seek_for) {
            const len = s.length;
            const len_ch_seek_for = ch_seek_for.length;
            for (let i = from; i < len; i++) {
                const ch = s.slice(i, i + 1);
                for (let j = 0; j < len_ch_seek_for; j++)
                    if (ch === ch_seek_for[j])
                        return i;
            }
            return len;
        }
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//path.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        let $me_atom2_entity_enum;
        (function ($me_atom2_entity_enum) {
            $me_atom2_entity_enum[$me_atom2_entity_enum["root"] = 0] = "root";
            $me_atom2_entity_enum[$me_atom2_entity_enum["key"] = 1] = "key";
            $me_atom2_entity_enum[$me_atom2_entity_enum["prop"] = 2] = "prop";
            $me_atom2_entity_enum[$me_atom2_entity_enum["control"] = 3] = "control";
            $me_atom2_entity_enum[$me_atom2_entity_enum["elem"] = 4] = "elem";
        })($me_atom2_entity_enum = $$.$me_atom2_entity_enum || ($$.$me_atom2_entity_enum = {}));
        $$.$me_atom2_entity_saved = 0;
        $$.$me_atom2_entity_saved_stat = {};
        class $me_atom2_entity {
            constructor(p) {
                const pp = { ent: p.ent };
                const isRoot = p.ent === $me_atom2_entity_enum.root;
                if (isRoot) {
                    this._active = true;
                }
                else {
                    this._active = true;
                    pp.tail = p.tail;
                    pp.path = p.parent && p.parent.path || $me_atom2_entity.root().path;
                }
                this.path = new $$.$me_atom2_path(pp);
                if (!isRoot) {
                    const parent = this.parent();
                    const enitites = parent._entities || (parent._entities = {});
                    const ent_name = $me_atom2_entity_enum[p.ent];
                    const enitites_of_type = enitites[ent_name] || (enitites[ent_name] = {});
                    if (enitites_of_type[p.tail])
                        $$.$me_throw(`${parent.path} already has ${ent_name} '${p.tail}'`);
                    enitites_of_type[p.tail] = this;
                    this._active = parent._active;
                }
                $me_atom2_entity._to_activate.add(this);
                this.met(this.path.ent, this.path.tail);
            }
            static root() {
                if (!$me_atom2_entity._root)
                    $me_atom2_entity._root = new $me_atom2_entity({ ent: $me_atom2_entity_enum.root });
                return $me_atom2_entity._root;
            }
            static by_path_s(s) {
                return $me_atom2_entity.root().by_path_s(s);
            }
            static by_path(path) {
                return $me_atom2_entity.root().by_path(path);
            }
            _on_active() {
            }
            destroy() {
                if (this.path.ent === $me_atom2_entity_enum.root)
                    $$.$me_throw(`can not destroy root`);
                this._active = false;
                $me_atom2_entity._to_activate.delete(this);
                if (this._entities) {
                    for (const ent_name in this._entities) {
                        const enitites_of_type = this._entities[ent_name];
                        for (const name in enitites_of_type)
                            enitites_of_type[name].destroy();
                    }
                }
                const ent_name = $me_atom2_entity_enum[this.path.ent];
                const parent = this.parent();
                if (parent) {
                    if (parent._entities[ent_name]) {
                        delete parent._entities[ent_name][this.path.tail];
                    }
                    else {
                        $$.$me_throw(this.name(), parent.name(), parent._entities, this._descendant(0).name());
                    }
                }
                else {
                    $$.$me_throw(this.name());
                }
            }
            by_path_s(s, keys) {
                let parent = this;
                let n = 0;
                let ch = s.slice(0, 1);
                if (ch === $$.$me_atom2_path_ent2prefix[$me_atom2_entity_enum.root]) {
                    parent = $me_atom2_entity.root();
                    n = 1;
                }
                else if (ch === $$.$me_atom2_path_ch_parent) {
                    while (true) {
                        n++;
                        ch = s.slice(n, n + 1);
                        if (n >= s.length || ch !== $$.$me_atom2_path_ch_parent)
                            break;
                    }
                    parent = this._descendant(n - 1, true);
                    if (typeof parent === 'string')
                        $$.$me_throw(`${s}: ${parent}`);
                }
                const path = $$.$me_atom2_path.fromString(s, n, keys);
                if (typeof path === 'string')
                    $$.$me_throw(`${s}: ${path}`);
                const result = parent.by_path(path) || path.toString(parent.path);
                return result;
            }
            by_path(path) {
                let result = null;
                if (!path) {
                    result = this;
                }
                else if (path.ent === $me_atom2_entity_enum.root) {
                    result = $me_atom2_entity.root();
                }
                else {
                    const entity_parent = !path.path ? this : this.by_path(path.path);
                    if (entity_parent) {
                        const enitites = entity_parent._entities;
                        if (enitites) {
                            const ent_name = $me_atom2_entity_enum[path.ent];
                            const enitites_of_type = enitites[ent_name];
                            result = enitites_of_type && enitites_of_type[path.tail];
                        }
                    }
                }
                return result;
            }
            static static_active(val) {
                if (void 0 !== val) {
                    $me_atom2_entity._static_active = val;
                    if (val) {
                        $$.$me_atom2_async();
                    }
                }
                return $me_atom2_entity._static_active;
            }
            active(val) {
                return this._active && $me_atom2_entity.static_active();
            }
            parent(skip_keys = false) {
                const ret = this._descendant(0, skip_keys);
                if (!ret)
                    $$.$me_throw('no parent', this);
                if (typeof ret == 'string')
                    $$.$me_throw(ret, this);
                return ret;
            }
            name() {
                return this.path.toString();
            }
            props(props, pp) {
                const prop_defined = {};
                if (props) {
                    const src = Array.isArray(props) ?
                        props :
                        [props];
                    let idx = 0;
                    const len = src.length;
                    for (const props of src) {
                        if (props)
                            for (const tail in props)
                                if (props[tail])
                                    if (void 0 === prop_defined[tail]) {
                                        const prop_def = props[tail];
                                        const p = {
                                            parent: this,
                                            tail,
                                        };
                                        let def_atom;
                                        if (pp && pp.def)
                                            def_atom = pp.def({ tail, idx, len, prop_defined, prop_def, p });
                                        if (def_atom === null)
                                            continue;
                                        if (def_atom === void 0)
                                            def_atom = $$.$me_atom2_prop_def_prepare(prop_def, p);
                                        if (false) {
                                            const pp = def_atom;
                                            if (!pp.fn_apply && Array.isArray(pp.masters)) {
                                                const masters = pp.masters;
                                                const len = masters.length;
                                                if (len == 1) {
                                                    const master = pp.masters[0];
                                                    if (master.indexOf('[') === -1) {
                                                        let conforms = master.startsWith('/');
                                                        let atom;
                                                        if (conforms) {
                                                            atom = $me_atom2_entity.root().by_path_s(master);
                                                            conforms = atom instanceof $$.$me_atom2;
                                                        }
                                                        else if (master.startsWith('.') && !pp.fn_compute) {
                                                            atom = pp.parent.by_path_s(master);
                                                            conforms = (atom instanceof $$.$me_atom2 && atom.path.path !== pp.parent.path);
                                                        }
                                                        if (conforms) {
                                                            if (!pp.parent._entities)
                                                                pp.parent._entities = {};
                                                            if (!pp.parent._entities.prop)
                                                                pp.parent._entities.prop = {};
                                                            pp.parent._entities.prop[pp.tail] = atom;
                                                            prop_defined[tail] = idx;
                                                            $$.$me_atom2_entity_saved++;
                                                            if (!$$.$me_atom2_entity_saved_stat[tail])
                                                                $$.$me_atom2_entity_saved_stat[tail] = 0;
                                                            $$.$me_atom2_entity_saved_stat[tail]++;
                                                            continue;
                                                        }
                                                    }
                                                }
                                                else if (len > 0) {
                                                    let b = false;
                                                    for (const master of masters) {
                                                        let conforms = master.startsWith('/');
                                                        let atom;
                                                        if (conforms) {
                                                            atom = $me_atom2_entity.root().by_path_s(master);
                                                            conforms = atom instanceof $$.$me_atom2;
                                                        }
                                                        else if (master.startsWith('.') && !pp.fn_compute) {
                                                            atom = pp.parent.by_path_s(master);
                                                            conforms = (atom instanceof $$.$me_atom2 && atom.path.path !== pp.parent.path);
                                                        }
                                                        if (!(b = conforms))
                                                            break;
                                                    }
                                                    if (b)
                                                        console.warn(pp);
                                                }
                                            }
                                        }
                                        $$.$me_atom2.to_def.push(def_atom);
                                        this.wait($me_atom2_entity_enum.prop, tail);
                                        prop_defined[tail] = idx;
                                    }
                                    else if (pp && pp.dup) {
                                        pp.dup({ tail, idx, len, prop_defined, src });
                                    }
                        idx++;
                    }
                }
                return prop_defined;
            }
            get 'parent()'() {
                return this.parent();
            }
            get 'name()'() {
                return this.name();
            }
            _descendant(level, skip_keys = false) {
                let path = this.path;
                let i = level + 1;
                for (; i > 0 && path.ent !== $me_atom2_entity_enum.root; i--) {
                    if (!skip_keys || path.ent !== $me_atom2_entity_enum.key) {
                        path = path.path;
                    }
                    else {
                        while (path.ent === $me_atom2_entity_enum.key)
                            path = path.path;
                        path = path.path;
                    }
                }
                if (i > 0)
                    return `'${this.path}'._descendant(${!level ? '' : level}) is out of range (no parent above root)`;
                const result = $me_atom2_entity.root().by_path(path);
                if (result == null)
                    return `entity '${path}' not found`;
                return result;
            }
            wait(ent, tail) {
                if (!this._waiting_for)
                    this._waiting_for = new Map();
                if (!this._waiting_for.has(ent))
                    this._waiting_for.set(ent, new Set());
                this._waiting_for.get(ent).add(tail);
                if (this.path.ent !== $me_atom2_entity_enum.root)
                    this.parent().wait(this.path.ent, this.path.tail);
                $$.$me_atom2.static_active(false);
            }
            met(ent, tail) {
                if (this._waiting_for) {
                    if (this._waiting_for.has(ent)) {
                        const ss = this._waiting_for.get(ent);
                        ss.delete(tail);
                        if (!ss.size)
                            this._waiting_for.delete(ent);
                        if (!this._waiting_for.size)
                            this._waiting_for = null;
                    }
                }
                if (!this._waiting_for) {
                    if (this.path.ent !== $me_atom2_entity_enum.root)
                        this.parent().met(this.path.ent, this.path.tail);
                    $$.$me_atom2.static_active(true);
                    $$.$me_atom2_async();
                }
            }
            static activate_entities() {
                const root = $me_atom2_entity.root();
                let count = 0;
                if ($me_atom2_entity.static_active() && $me_atom2_entity._to_activate.size) {
                    for (const entity of $me_atom2_entity._to_activate) {
                        if (entity._waiting_for)
                            continue;
                        if (entity._active) {
                            entity._on_active();
                            count++;
                        }
                        $me_atom2_entity._to_activate.delete(entity);
                    }
                }
                return count;
            }
        }
        $me_atom2_entity._to_activate = new Set();
        $$.$me_atom2_entity = $me_atom2_entity;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//entity.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_atom2_prop_masters = (masters, fn_compute) => ({ masters, fn_compute });
        function $me_atom2_prop(masters, fn_compute, fn_apply) {
            if (!masters)
                $$.$me_throw('!masters');
            const result = Array.isArray(masters) ||
                typeof masters.fn_compute === 'function' ?
                {
                    masters,
                    fn_compute,
                    fn_apply
                } :
                Object.assign({}, masters, { fn_compute,
                    fn_apply });
            return result;
        }
        $$.$me_atom2_prop = $me_atom2_prop;
        $$.$me_atom2_prop_abstract = () => $me_atom2_prop([], () => null, ({ atom }) => { $$.$me_throw(`ABSTRACT: ${atom.name()}`); });
        function $me_atom2_prop_def_prepare(prop_def, p) {
            if (!prop_def)
                $$.$me_throw(`prop_def is null`);
            const pp = typeof prop_def === 'string' ? {
                masters: [prop_def],
            } :
                typeof prop_def === 'function' ? {
                    masters: [],
                    fn_compute: prop_def,
                } : Object.assign({}, prop_def, { masters: Array.isArray(prop_def.masters) ?
                        [...prop_def.masters] :
                        prop_def.masters });
            if (pp.masters) {
                const len = pp.masters.length;
                for (let i = 0; i < len; i++)
                    if (!pp.masters[i])
                        console.error(p.tail, pp.masters, i);
            }
            if (pp.fn_apply && p.fn_apply)
                $$.$me_throw(`fn_apply collision for ${p.tail}`, p.fn_apply, pp.fn_apply);
            pp.fn_apply = pp.fn_apply || p.fn_apply;
            return Object.assign({}, p, pp);
        }
        $$.$me_atom2_prop_def_prepare = $me_atom2_prop_def_prepare;
        $$.$me_atom2_prop_compute_fn_or = (initial) => initial === void 0 ? compute_fn_or :
            (p) => compute_fn_and(p, initial);
        const compute_fn_or = (p, initial) => p.masters.reduce((result, val) => result || val, initial === void 0 ? false : initial);
        $$.$me_atom2_prop_compute_fn_and = (initial) => initial === void 0 ? compute_fn_and :
            (p) => compute_fn_and(p, initial);
        const compute_fn_and = (p, initial) => p.masters.reduce((result, val) => result && val, initial === void 0 ? true : initial);
        $$.$me_atom2_prop_compute_fn_mul = (initial) => initial === void 0 ? compute_fn_mul :
            (p) => compute_fn_mul(p, initial);
        const compute_fn_mul = (p, initial) => p.masters.reduce((result, val) => result * val, initial === void 0 ? 1 : initial);
        $$.$me_atom2_prop_compute_fn_sum = (initial) => initial === void 0 ? compute_fn_sum :
            (p) => compute_fn_sum(p, initial);
        const compute_fn_sum = (p, initial) => p.masters.reduce((result, val) => result + val, initial === void 0 ? 0 : initial);
        $$.$me_atom2_prop_compute_fn_diff = (initial) => initial === void 0 ? compute_fn_diff :
            (p) => compute_fn_diff(p, initial);
        const compute_fn_diff = (p, initial) => p.masters.reduce((result, val, idx) => result + (!idx ? val : -val), initial === void 0 ? 0 : initial);
        $$.$me_atom2_prop_keys = (masters, strip_null = false) => $me_atom2_prop(masters, ({ masters }) => Object.keys(masters[0]).filter((key) => !strip_null || masters[0][key] != null));
        $$.$me_atom2_prop_bind = (master) => $me_atom2_prop([master], null, ({ val }) => { $$.a(master, val, true); });
        $$.$me_atom2_prop_either = (masters, ifTrue, ifFalse) => $me_atom2_prop(masters, ({ atom, prev, key, len, masters }) => !len ?
            $$.$me_throw(`non empty masters must be specified for ${atom.name()}`) :
            masters[0] ?
                ifTrue({ atom, prev, key, len: len - 1, masters: masters.slice(1) }) :
                ifFalse({ atom, prev, key, len: len - 1, masters: masters.slice(1) }));
        function $me_atom2_prop_same_def(prop_def, props) {
            const result = {};
            for (const prop of props)
                result[prop] = prop_def;
            return result;
        }
        $$.$me_atom2_prop_same_def = $me_atom2_prop_same_def;
        function $me_atom2_prop_same_fn_compute(fn_compute, props, fn_apply_props) {
            const result = {};
            for (const prop in props)
                result[prop] = $me_atom2_prop(props[prop], fn_compute, fn_apply_props && fn_apply_props[prop]);
            return result;
        }
        $$.$me_atom2_prop_same_fn_compute = $me_atom2_prop_same_fn_compute;
        function $me_atom2_prop_cascade(prop_def, prop, cascade_def) {
            const result = {};
            cascade_helper(result, prop_def, prop, cascade_def);
            return result;
        }
        $$.$me_atom2_prop_cascade = $me_atom2_prop_cascade;
        function cascade_helper(result, prop_def, prop, cascade_def) {
            result[prop] = prop_def;
            if (typeof cascade_def === 'string') {
                result[cascade_def] = '.' + prop;
            }
            else if (Array.isArray(cascade_def)) {
                const arr = cascade_def;
                for (let i = 0; i < arr.length; i++) {
                    const item = arr[i];
                    if (typeof item === 'string') {
                        result[item] = '.' + prop;
                    }
                    else if (Array.isArray(item)) {
                        const item_as_arr = item;
                        if (!item_as_arr.length)
                            $$.$me_throw(`arr[${i}] is empty Array`, arr);
                        if (typeof item_as_arr[0] != 'string')
                            $$.$me_throw(`arr[${i}][0] is not string`, arr);
                        if (item_as_arr.length == 1) {
                            result[item_as_arr[0]] = '.' + prop;
                        }
                        else {
                            if (item_as_arr.length > 2)
                                $$.$me_throw(`arr[${i}] is too long Array: length (${item_as_arr.length}) > 2`, arr);
                            if (typeof item_as_arr[1] != 'string' && !Array.isArray(item_as_arr[1]))
                                $$.$me_throw(`arr[${i}][1] is nor string, neither Array, but ${item_as_arr[1]}`, arr);
                            cascade_helper(result, '.' + prop, item_as_arr[0], item_as_arr[1]);
                        }
                    }
                }
            }
            else
                $$.$me_throw('cascade_def is nor string, neither Array', cascade_def);
        }
        $$.$me_atom2_prop_store = (p) => {
            const atom = $me_atom2_prop(!p.condition ? [] : p.condition, ({ atom, masters, prev, len }) => {
                let val = null;
                const name = atom.name();
                if (len && !masters[0]) {
                    val = masters[1] || prev || null;
                    sessionStorage.removeItem(name);
                }
                else {
                    const s = sessionStorage.getItem(name);
                    if (s)
                        try {
                            val = !p.fromJSON ? JSON.parse(s) : p.fromJSON(JSON.parse(s));
                        }
                        catch (e) {
                            console.error({ name }, e);
                        }
                }
                return val;
            }, ({ val, atom }) => {
                val = p.valid(val);
                let need_remove = false;
                const dflt = p.default();
                if (val == null) {
                    val = dflt;
                    need_remove = true;
                }
                else if (p.is_equal ? p.is_equal(val, dflt) : $$.$me_equal(val, dflt)) {
                    need_remove = true;
                }
                const name = atom.name();
                if (need_remove) {
                    sessionStorage.removeItem(name);
                }
                else {
                    sessionStorage.setItem(name, JSON.stringify(!p.toJSON ? val : p.toJSON(val)));
                }
                return val;
            });
            return atom;
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//prop.js.map
;
"use strict";
//control.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const accel_scrollAccu_threshold = 30;
        class $me_atom2_wheel_synth_class {
            constructor() {
                this.scrollAccuX = 0;
                this.scrollAccuY = 0;
                this.lastDeltaX = 0;
                this.lastDeltaY = 0;
                this.accelX = 0;
                this.accelY = 0;
            }
            cancel() {
                this.mode = null;
            }
            endHelper() {
                if (this.mode != $$.$me_atom2_wheel_synth_mode.move) {
                    this.cancel();
                }
                else {
                    this.accel_k = 1;
                    this.mode = $$.$me_atom2_wheel_synth_mode.end;
                    $$.$me_atom2_async();
                }
            }
            raf(t) {
                return (this.mode == $$.$me_atom2_wheel_synth_mode.move ||
                    this.mode == $$.$me_atom2_wheel_synth_mode.init ||
                    false ?
                    this.rafMove(t) :
                    this.mode == $$.$me_atom2_wheel_synth_mode.end ?
                        this.rafEnd(t) :
                        null);
            }
            rafMoveHeler(t) {
                const timeCurr = performance.now();
                const accel_threshold = $$.a('/.#wheelTouchAccelThreshold');
                if (Math.abs(this.scrollAccuX) < accel_threshold) {
                    this.accelX = 0;
                }
                else if (this.timePrevX != null &&
                    Math.abs(this.scrollAccuX) >= accel_scrollAccu_threshold &&
                    timeCurr != this.timePrevX &&
                    true) {
                    this.tPrev = t;
                    this.accelX = this.scrollAccuX / (timeCurr - this.timePrevX);
                    this.timePrevX = timeCurr;
                }
                if (Math.abs(this.scrollAccuY) < accel_threshold) {
                    this.accelY = 0;
                }
                else if (this.timePrevY != null &&
                    Math.abs(this.scrollAccuY) >= accel_scrollAccu_threshold &&
                    timeCurr != this.timePrevY &&
                    true) {
                    this.tPrev = t;
                    this.accelY = this.scrollAccuY / (timeCurr - this.timePrevY);
                    this.timePrevY = timeCurr;
                }
                const result = {
                    mode: this.mode,
                    _deltaX: this.scrollAccuX,
                    _deltaY: this.scrollAccuY,
                };
                this.scrollAccuX = 0;
                this.scrollAccuY = 0;
                return result;
            }
        }
        $$.$me_atom2_wheel_synth_class = $me_atom2_wheel_synth_class;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//wheel_synth.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $me_atom2_wheel_touch_class extends $$.$me_atom2_wheel_synth_class {
            start(event) {
                this.mode = $$.$me_atom2_wheel_synth_mode.justStarted;
                this._start = event;
                this._last = event;
                this.clientX0 = event.touches[0].clientX;
                this.clientY0 = event.touches[0].clientY;
                if (event.touches.length > 1) {
                    this.clientX1 = event.touches[1].clientX;
                    this.clientY1 = event.touches[1].clientY;
                    if (event.touches.length > 2) {
                        this.clientX2 = event.touches[2].clientX;
                        this.clientY2 = event.touches[2].clientY;
                    }
                }
                this.scrollAccuX = 0;
                this.lastDeltaX = 0;
                this.accelX = 0;
                this.scrollAccuY = 0;
                this.lastDeltaY = 0;
                this.accelY = 0;
                this.timePrevX = null;
                this.timePrevY = null;
            }
            move(event) {
                this._last = event;
                this._end = event;
                const deltaX = event.touches.length == 1 ?
                    this.clientX0 - event.touches[0].clientX :
                    event.touches.length == 2 ?
                        Math.sign(this.clientX0 - event.touches[0].clientX) *
                            Math.max(Math.abs(this.clientX0 - event.touches[0].clientX), Math.abs(this.clientX1 - event.touches[1].clientX)) :
                        event.touches.length == 3 ?
                            Math.max(Math.abs(this.clientX0 - event.touches[0].clientX), Math.abs(this.clientX1 - event.touches[1].clientX), Math.abs(this.clientX2 - event.touches[2].clientX)) :
                            0;
                const deltaY = event.touches.length == 1 ?
                    this.clientY0 - event.touches[0].clientY :
                    event.touches.length == 2 ?
                        Math.sign(this.clientY0 - event.touches[0].clientY) *
                            Math.max(Math.abs(this.clientY0 - event.touches[0].clientY), Math.abs(this.clientY1 - event.touches[1].clientY)) :
                        event.touches.length == 3 ?
                            Math.sign(this.clientY0 - event.touches[0].clientY) *
                                Math.max(Math.abs(this.clientY0 - event.touches[0].clientY), Math.abs(this.clientY1 - event.touches[1].clientY), Math.abs(this.clientY2 - event.touches[2].clientY)) :
                            0;
                this.clientX0 = event.touches[0].clientX;
                this.clientY0 = event.touches[0].clientY;
                if (event.touches.length > 1) {
                    this.clientX1 = event.touches[1].clientX;
                    this.clientY1 = event.touches[1].clientY;
                    if (event.touches.length > 2) {
                        this.clientX2 = event.touches[2].clientX;
                        this.clientY2 = event.touches[2].clientY;
                    }
                }
                if (deltaX) {
                    if (Math.sign(this.lastDeltaX) != Math.sign(deltaX)) {
                        this.scrollAccuX = deltaX;
                        this.timePrevX = performance.now();
                    }
                    else {
                        if (this.timePrevX == null)
                            this.timePrevX = performance.now();
                        this.scrollAccuX += deltaX;
                    }
                }
                if (deltaY) {
                    if (Math.sign(this.lastDeltaY) != Math.sign(deltaY)) {
                        this.scrollAccuY = deltaY;
                        this.timePrevY = performance.now();
                    }
                    else {
                        if (this.timePrevY == null)
                            this.timePrevY = performance.now();
                        this.scrollAccuY += deltaY;
                    }
                }
                this.lastDeltaX = deltaX;
                this.lastDeltaY = deltaY;
                if (deltaX || deltaY) {
                    if (this.mode == $$.$me_atom2_wheel_synth_mode.justStarted) {
                        this.mode = $$.$me_atom2_wheel_synth_mode.init;
                    }
                    $$.$me_atom2_async();
                }
            }
            end(event) {
                this._end = event;
                this.endHelper();
            }
            rafMove(t) {
                return Object.assign({ start: this._start, last: this._last, end: this._end }, this.rafMoveHeler(t));
            }
            rafEndHelper(t) {
                const tDelta = t - this.tPrev;
                const scrollAccuX = this.accelX * tDelta;
                const scrollAccuY = this.accelY * tDelta;
                const result = {
                    mode: this.mode,
                    _deltaX: scrollAccuX,
                    _deltaY: scrollAccuY,
                };
                if (!(Math.abs(scrollAccuX) >= 1 ||
                    Math.abs(scrollAccuY) >= 1)) {
                    result.mode = this.mode = $$.$me_atom2_wheel_synth_mode.fini;
                }
                else {
                    this.accelX = this.accelX * this.accel_k;
                    this.accelY = this.accelY * this.accel_k;
                    this.accel_k = this.accel_k * $$.a('/.#wheelTouchAccelFactor');
                    this.tPrev = t;
                    $$.$me_atom2_async();
                }
                return result;
            }
            rafEnd(t) {
                return Object.assign({ start: this._start, last: this._last, end: this._end }, this.rafEndHelper(t));
            }
        }
        $$.$me_atom2_wheel_touch_class = $me_atom2_wheel_touch_class;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//wheel_touch.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $me_atom2_wheel_drag_class extends $$.$me_atom2_wheel_synth_class {
            start(event) {
                this.mode = $$.$me_atom2_wheel_synth_mode.justStarted;
                this._start = event;
                this._last = event;
                this.scrollAccuX = 0;
                this.clientX = event.clientX;
                this.lastDeltaX = 0;
                this.accelX = 0;
                this.scrollAccuY = 0;
                this.clientY = event.clientY;
                this.lastDeltaY = 0;
                this.accelY = 0;
                this.timePrevX = null;
                this.timePrevY = null;
            }
            move(event) {
                this._last = event;
                this._end = event;
                const deltaX = this.clientX - event.clientX;
                if (deltaX)
                    if (Math.sign(this.lastDeltaX) != Math.sign(deltaX)) {
                        this.scrollAccuX = deltaX;
                        this.timePrevX = performance.now();
                    }
                    else {
                        if (this.timePrevX == null)
                            this.timePrevX = performance.now();
                        this.scrollAccuX += deltaX;
                    }
                this.clientX = event.clientX;
                this.lastDeltaX = deltaX;
                const deltaY = this.clientY - event.clientY;
                if (deltaY)
                    if (Math.sign(this.lastDeltaY) != Math.sign(deltaY)) {
                        this.scrollAccuY = deltaY;
                        this.timePrevY = performance.now();
                    }
                    else {
                        if (this.timePrevY == null)
                            this.timePrevY = performance.now();
                        this.scrollAccuY += deltaY;
                    }
                this.clientY = event.clientY;
                this.lastDeltaY = deltaY;
                if (deltaX || deltaY) {
                    if (this.mode == $$.$me_atom2_wheel_synth_mode.justStarted) {
                        this.mode = $$.$me_atom2_wheel_synth_mode.init;
                    }
                    $$.$me_atom2_async();
                }
            }
            end(event) {
                this._end = event;
                this.endHelper();
            }
            rafMove(t) {
                const timeCurr = performance.now();
                const accel_threshold = $$.a('/.#wheelTouchAccelThreshold');
                if (Math.abs(this.scrollAccuX) < accel_threshold) {
                    this.accelX = 0;
                }
                else if (this.timePrevX != null) {
                    this.tPrev = t;
                    this.accelX = this.scrollAccuX / (timeCurr - this.timePrevX);
                    this.timePrevX = timeCurr;
                }
                if (Math.abs(this.scrollAccuY) < accel_threshold) {
                    this.accelY = 0;
                }
                else if (this.timePrevY != null) {
                    this.tPrev = t;
                    this.accelY = this.scrollAccuY / (timeCurr - this.timePrevY);
                    this.timePrevY = timeCurr;
                }
                const result = {
                    mode: this.mode,
                    start: this._start,
                    last: this._last,
                    end: this._end,
                    _deltaX: this.scrollAccuX,
                    _deltaY: this.scrollAccuY,
                };
                this.scrollAccuX = 0;
                this.scrollAccuY = 0;
                return result;
            }
            rafEnd(t) {
                const tDelta = t - this.tPrev;
                const scrollAccuX = this.accelX * tDelta;
                const scrollAccuY = this.accelY * tDelta;
                const result = {
                    start: this._start,
                    last: this._last,
                    end: this._end,
                    _deltaX: scrollAccuX,
                    _deltaY: scrollAccuY,
                };
                if (!(Math.abs(scrollAccuX) >= 1 ||
                    Math.abs(scrollAccuY) >= 1)) {
                    result.mode = this.mode = $$.$me_atom2_wheel_synth_mode.fini;
                }
                else {
                    this.accelX = this.accelX * this.accel_k;
                    this.accelY = this.accelY * this.accel_k;
                    this.accel_k = this.accel_k * $$.a('/.#wheelTouchAccelFactor');
                    this.tPrev = t;
                    $$.$me_atom2_async();
                }
                return result;
            }
        }
        $$.$me_atom2_wheel_drag_class = $me_atom2_wheel_drag_class;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//wheel_drag.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $me_atom2_ec extends $$.$me_atom2_entity {
            constructor(p) {
                if (!p.key) {
                    super(p);
                }
                else {
                    let { ent, tail, parent } = p;
                    parent = parent.by_path(new $$.$me_atom2_path({ ent, tail }))
                        || new $$.$me_atom2_entity({ ent, tail, parent });
                    const key = typeof p.key === 'string' ? [p.key] : p.key;
                    const i_last = p.keys.length - 2;
                    ent = $$.$me_atom2_entity_enum.key;
                    for (let i = 0; i <= i_last; i++) {
                        tail = key[i];
                        parent = parent.by_path(new $$.$me_atom2_path({ ent, tail }))
                            || new $$.$me_atom2_entity({ ent, tail, parent });
                    }
                    super({
                        ent: $$.$me_atom2_entity_enum.key,
                        tail: key[i_last + 1],
                        parent,
                    });
                }
                this.cnf = p.cnf;
            }
            get 'wait_for_child()'() {
                if (!this._wait_for_child)
                    return null;
                const result = {};
                for (const name_entity of this._wait_for_child) {
                    const entity = $$.$me_atom2_entity.root().by_path_s(name_entity);
                    result[name_entity] = typeof entity == 'string' ? entity : entity['wait_for_child()'];
                }
                return result;
            }
            _wait_for_child_do(name) {
                if (!this._wait_for_child)
                    this._wait_for_child = new Set();
                this._wait_for_child.add(name);
            }
            _wait_for_child_did(name = '') {
                if (name && this._wait_for_child) {
                    this._wait_for_child.delete(name);
                    if (!this._wait_for_child.size)
                        this._wait_for_child = null;
                }
                if (!this._wait_for_child) {
                    this._wait_for_child_did_helper();
                    $me_atom2_ec.almost_ready.add(this);
                }
            }
            _isReady(val) {
                const prop_isReady = this._entities.prop['#_isReady'];
                if (!prop_isReady) {
                    console.error(this.name() + ' has no .#_isReady, but expected');
                    $$.$me_stop = true;
                    $$.$me_throw('here');
                    return;
                    return false;
                }
                return prop_isReady.value(val);
            }
            _wait_for_child_did_helper() {
            }
            _on_active() {
                if (!this._active_did) {
                    this._wait_for_child_did();
                    this._active_did = true;
                }
                $$.$me_atom2_event_handlers = null;
                if ($$.$me_atom2_event_mousemove_last && !$$.$me_atom2_event_mousemove_to_process) {
                    $$.$me_atom2_event_mousemove_to_process = $$.$me_atom2_event_mousemove_last;
                    $$.$me_atom2_async();
                }
            }
            destroy() {
                this.fini();
                super.destroy();
            }
            init() {
                if (this._init_did)
                    return;
                const prev = $$.a.curr;
                $$.a.curr = this;
                this._cnf_init(this.cnf);
                $$.a.curr = prev;
                this._init_did = true;
            }
            fini() {
                if (!this._init_did)
                    return;
                const prev = $$.a.curr;
                $$.a.curr = this;
                this._cnf_fini(this.cnf);
                $$.a.curr = prev;
            }
            dispatch(dispatch_name, dispatch_arg) {
                const prev = $$.a.curr;
                $$.a.curr = this;
                const result = this._cnf_dispatch(this.cnf, dispatch_name, dispatch_arg);
                $$.a.curr = prev;
                return result;
            }
            _cnf_dispatch(cnf, dispatch_name, dispatch_arg) {
                return !cnf ? false : (cnf.dispatch && cnf.dispatch(dispatch_name, dispatch_arg) ||
                    this._cnf_dispatch(cnf.base, dispatch_name, dispatch_arg));
            }
            _cnf_init(cnf) {
                if (!cnf)
                    return;
                this._cnf_init(cnf.base);
                if (cnf.init)
                    cnf.init(this);
            }
            _cnf_fini(cnf) {
                if (!cnf)
                    return;
                if (cnf.fini)
                    cnf.fini(this);
                this._cnf_fini(cnf.base);
            }
            cnf_item(name) {
                return this._cnf_item(name, this.cnf);
            }
            invalidateClientRect() {
                const prop_clientRect = this._entities.prop['#clientRect'];
                if (!prop_clientRect) {
                    console.error(this.name() + ' has no _entities.#clientRect, but expected');
                    $$.$me_stop = true;
                    $$.$me_throw('here');
                    return;
                }
                if (prop_clientRect.state() === $$.$me_atom2_state_enum.valid)
                    prop_clientRect.set_state($$.$me_atom2_state_enum.need_check);
                for (const ec_kind of ['elem', 'control']) {
                    const entities_of_kind = this._entities[ec_kind];
                    if (!entities_of_kind)
                        continue;
                    for (const tail in entities_of_kind)
                        this.invalidateClientRectHelper(entities_of_kind[tail]);
                }
            }
            invalidateClientRectHelper(entity) {
                if (!entity._entities) {
                    console.error(entity.name() + ' has now _entities.key, but expected');
                    $$.$me_stop = true;
                    $$.$me_throw('here');
                    return;
                }
                if (!entity._entities.key) {
                    entity.invalidateClientRect();
                }
                else {
                    for (const tail in entity._entities.key)
                        this.invalidateClientRectHelper(entity._entities.key[tail]);
                }
            }
            _mk_controls(level = 0) {
                const prev = $$.a.curr;
                $$.a.curr = this;
                const cnf_control = this.cnf_items('control');
                for (const tail in cnf_control) {
                    const prop_def = cnf_control[tail];
                    const fn_apply = ({ prev, val, len_key, key, keys, key_enum }) => {
                        let path_abs = new $$.$me_atom2_path({ ent: $$.$me_atom2_entity_enum.control, tail, path: this.path });
                        let path = new $$.$me_atom2_path({ ent: $$.$me_atom2_entity_enum.control, tail });
                        if (key) {
                            const ent = $$.$me_atom2_entity_enum.key;
                            for (const tail of (typeof key === 'string' ? [key] : key)) {
                                path = new $$.$me_atom2_path({ ent, tail, path });
                                path_abs = new $$.$me_atom2_path({ ent, tail, path: path_abs });
                            }
                        }
                        if (prev && val && (prev === val || prev.type == val.type))
                            return;
                        const control = this.by_path(path);
                        if (control instanceof $me_atom2_control)
                            control.destroy();
                        if (val) {
                            $me_atom2_control.to_def.push({
                                cnf: val,
                                parent: this,
                                tail,
                                len_key,
                                key,
                                keys,
                                key_enum,
                                level: level + 1,
                            });
                            $$.$me_atom2_async();
                        }
                        if (!this._isReady()) {
                            if (val) {
                                this._wait_for_child_do(path_abs.toString());
                            }
                            else {
                                this._wait_for_child_did(path_abs.toString());
                            }
                            if (key)
                                this._wait_for_child_did(this.name() + '^' + tail);
                        }
                    };
                    $$.$me_atom2.to_def.push($$.$me_atom2_prop_def_prepare(prop_def, {
                        parent: this,
                        tail: '^' + tail,
                        fn_apply,
                    }));
                    this._wait_for_child_do(this.name() + '^' + tail);
                    $$.$me_atom2_async();
                }
                $$.a.curr = prev;
                return cnf_control;
            }
            _cnf_item(name, cnf) {
                return (!cnf ? null :
                    cnf[name] !== void 0 ? cnf[name] :
                        this._cnf_item(name, cnf.base));
            }
            cnf_items(name) {
                const result = {};
                this._cnf_items(name, this.cnf, result);
                return result;
            }
            _cnf_items(name, cnf, result) {
                if (!cnf)
                    return;
                if (cnf[name])
                    for (const k in cnf[name])
                        if (result[k] === void 0 && cnf[name][k] != null)
                            result[k] = cnf[name][k];
                this._cnf_items(name, cnf.base, result);
            }
            _prepare(name, ent, dflt, cnf, level, skip_root_defaults) {
                if (level === void 0) {
                    cnf = this.cnf;
                    level = 0;
                }
                if (cnf) {
                    if (level) {
                    }
                    else {
                        if (cnf[name])
                            $$.$me_throw(`terminal control can not have .${name}`);
                    }
                    skip_root_defaults = skip_root_defaults || cnf.skip_root_defaults;
                }
                const result = level ?
                    this._prepare_helper(name, ent, dflt, cnf, level, skip_root_defaults) :
                    this._prepare(name, ent, dflt, cnf.base, level + 1, skip_root_defaults || cnf && cnf.base && cnf.base.skip_root_defaults);
                if (cnf && cnf.skip_root_defaults === false &&
                    cnf.base && cnf.base.skip_root_defaults === true) {
                    const { defaults, defaults_relative } = this._prepare_helper(name, ent, {}, null, 0, false);
                    for (const prop in defaults)
                        if (!result.defaults[prop])
                            result.defaults[prop] = defaults[prop];
                    for (const prop in defaults_relative)
                        if (!result.defaults_relative[prop])
                            result.defaults_relative[prop] = defaults_relative[prop];
                }
                return result;
            }
            _prepare_helper(name, ent, dflt, cnf, level, skip_root_defaults) {
                let type;
                if (!cnf) {
                    type = '$me';
                    if (skip_root_defaults) {
                        return {
                            defaults: {},
                            defaults_relative: {},
                        };
                    }
                }
                else {
                    if (!$me_atom2_ec._cnf_cache.has(cnf)) {
                        const name = cnf.type || ($me_atom2_ec._cnf_cache.size + '');
                        $me_atom2_ec._cnf_cache.set(cnf, name);
                    }
                    type = $me_atom2_ec._cnf_cache.get(cnf);
                }
                const cacheKey = $$.$me_atom2_path_ent2prefix[ent] + type + ':' + name;
                if (!$me_atom2_ec._prepare_cache[cacheKey]) {
                    const result = cnf ?
                        this._prepare(name, ent, dflt, cnf.base, level + 1, skip_root_defaults || cnf && cnf.base && cnf.base.skip_root_defaults) :
                        {
                            defaults: {},
                            defaults_relative: {},
                        };
                    const props = !cnf ? dflt : cnf[name] ? cnf[name] : {};
                    const prop_default = {};
                    const prop_default_relative = {};
                    for (const prop in props) {
                        const prop_def = props[prop];
                        if (typeof prop_def === 'string' && !prop_def.startsWith('/') ||
                            prop_def && Array.isArray(prop_def.masters) && prop_def.masters.filter((s) => !s.startsWith('/')).length) {
                            prop_default_relative[prop] = prop_def;
                        }
                        else {
                            prop_default[prop] = prop_def;
                        }
                    }
                    {
                        const src = result.defaults;
                        for (const prop in result.defaults)
                            if (!prop_default[prop] && !prop_default_relative[prop])
                                prop_default[prop] = src[prop];
                    }
                    {
                        const src = result.defaults_relative;
                        for (const prop in src)
                            if (!prop_default[prop] && !prop_default_relative[prop])
                                prop_default_relative[prop] = src[prop];
                    }
                    {
                        const result = {
                            defaults: {},
                            defaults_relative: prop_default_relative,
                        };
                        const parent = new $$.$me_atom2({
                            tail: cacheKey,
                            fn_compute: () => result,
                        });
                        for (const tail in prop_default) {
                            const atom = new $$.$me_atom2($$.$me_atom2_prop_def_prepare(prop_default[tail], { tail, parent }));
                            result.defaults[tail] = atom.name();
                        }
                        $me_atom2_ec._prepare_cache[cacheKey] = result;
                    }
                }
                const result = $me_atom2_ec._prepare_cache[cacheKey];
                return {
                    defaults: Object.assign({}, result.defaults),
                    defaults_relative: Object.assign({}, result.defaults_relative),
                };
            }
        }
        $me_atom2_ec.prop_default = Object.assign({}, $$.$me_atom2_prop_cascade(() => $$.$me_align.left, '#align', ['#alignHor', '#alignVer']), { '#ofsHor': () => 0, '#ofsVer': () => 0, '#width': '<.#width', '#height': '<.#height' });
        $me_atom2_ec._to_init = Array();
        $me_atom2_ec.almost_ready = new Set();
        $me_atom2_ec._cnf_cache = new Map();
        $me_atom2_ec._prepare_cache = {};
        $$.$me_atom2_ec = $me_atom2_ec;
        $$.$me_atom2_ec_body_cursor = $$.$me_atom2_async_multi_origin({
            name: 'cursor',
            default: null,
            raf_order: 100,
            flush: (cursor) => {
                if (cursor == null)
                    cursor = 'default';
                if (document.body.style.cursor != cursor)
                    document.body.style.cursor = cursor;
            },
        });
        let $me_atom2_control_render_state_enum;
        (function ($me_atom2_control_render_state_enum) {
            $me_atom2_control_render_state_enum[$me_atom2_control_render_state_enum["cleaned"] = 0] = "cleaned";
            $me_atom2_control_render_state_enum[$me_atom2_control_render_state_enum["rendered"] = 1] = "rendered";
        })($me_atom2_control_render_state_enum = $$.$me_atom2_control_render_state_enum || ($$.$me_atom2_control_render_state_enum = {}));
        class $me_atom2_control extends $me_atom2_ec {
            constructor(p) {
                super(Object.assign({}, p, { ent: $$.$me_atom2_entity_enum.control }));
                this._mk_controls(this.level = p.level || 1);
                this._mk_props('<'.repeat(this.level));
            }
            static pixelRatio() {
                return $$.$me_atom2_entity.root()._entities.prop['#pixelRatio'].value();
            }
            _wait_for_child_did_helper() {
                const parent = this.parent(true);
                if (parent)
                    parent._wait_for_child_did(this.name());
            }
            destroy() {
                if (this.level > 1) {
                    $me_atom2_control._to_render.add(this.parent(true).path);
                    $$.$me_atom2_async();
                }
                else {
                    $me_atom2_control.clean([this]);
                }
                super.destroy();
            }
            _mk_props(s_level) {
                const { defaults, defaults_relative } = this._prepare('prop_default', $$.$me_atom2_entity_enum.control, $me_atom2_control.prop_default || {});
                const prop_render = this.props([
                    this.cnf_items('prop'),
                    defaults,
                    defaults_relative,
                    {
                        '#hidden': () => false,
                        '#zIndex': '<.#zIndex',
                    },
                    {
                        '#_isReady': () => false,
                        '#isReady': $$.$me_atom2_prop(['<.#isReady', '.#_isReady'], $$.$me_atom2_prop_compute_fn_and(), ({ val }) => {
                            if (val)
                                $me_atom2_ec._to_init.push(this.path);
                        }),
                        '#visible': $$.$me_atom2_prop(['.#hidden', '<.#visible'], ({ masters: [hidden, visible] }) => !hidden && visible, ({ val }) => {
                            if (val) {
                                $me_atom2_control._to_render.add(this.path);
                            }
                            else if (this.level > 1) {
                                $me_atom2_control._to_render.add(this.parent(true).path);
                            }
                            else {
                                $me_atom2_control._to_clean.add(this.path);
                            }
                            $$.$me_atom2_async();
                        }),
                        '#ctxSize': s_level + '.#ctxSize',
                        '#ctx': s_level + '.#ctx',
                        '#left': $$.$me_atom2_prop(['.#alignHor', '<.#width', '.#width', '.#ofsHor'].concat(s_level.length < 2 ? [] : ['<.#left']), ({ masters: [alignHor, width_parent, width, ofsHor, left_parent] }) => {
                            left_parent = left_parent || 0;
                            const result = alignHor === $$.$me_align.left ? left_parent + ofsHor :
                                alignHor === $$.$me_align.right ? left_parent + width_parent - width - ofsHor :
                                    left_parent + (width_parent - width) / 2 + ofsHor;
                            return result;
                        }),
                        '#top': $$.$me_atom2_prop(['.#alignVer', '<.#height', '.#height', '.#ofsVer'].concat(s_level.length < 2 ? [] : ['<.#top']), ({ masters: [alignVer, height_parent, height, ofsVer, top_parent] }) => {
                            top_parent = top_parent || 0;
                            const result = alignVer === $$.$me_align.top ? top_parent + ofsVer :
                                alignVer === $$.$me_align.bottom ? top_parent + height_parent - ofsVer :
                                    top_parent + (height_parent - height) / 2 + ofsVer;
                            return result;
                        }),
                    },
                ], {
                    def: ({ tail, prop_def, prop_defined, p, idx, len }) => {
                        if (tail == '#cursor') {
                            console.error(`${this.name()}: prop "#cursor" must be defined in "prop_non_render" section`);
                            return null;
                        }
                    },
                    dup: ({ tail, prop_defined, idx, len }) => {
                        if (idx === len - 1)
                            $$.$me_throw(`${this.name()}: .${tail} reserved for internal use` + (tail !== '#visible' ? '' : ', use .#hidden instead'));
                    }
                });
                {
                    const { defaults, defaults_relative } = this._prepare('prop_non_render_default', $$.$me_atom2_entity_enum.control, $me_atom2_control.prop_non_render_default || {});
                    const prop_non_render = this.props([
                        this.cnf_items('prop_non_render'),
                        defaults,
                        defaults_relative,
                        {
                            '#isHover': () => false,
                        },
                        {
                            '#_cursor': $$.$me_atom2_prop(['.#isHover', '.#cursor'], ({ masters: [isHover, cursor] }) => !isHover ? null : cursor, ({ atom, val }) => {
                                $$.$me_atom2_ec_body_cursor({ origin: atom.path, val: val });
                            }),
                        },
                    ], {
                        def: ({ tail, prop_def, prop_defined, p, idx, len }) => {
                            if (idx === len - 2 && tail == '#isHover') {
                                if (prop_defined['#cursor'] === void 0)
                                    return null;
                            }
                            else if (idx === len - 1 && tail == '#_cursor') {
                                if (prop_defined['#cursor'] === void 0)
                                    return null;
                            }
                        },
                        dup: ({ tail, prop_defined, idx, len }) => {
                            if (idx === len - 1)
                                $$.$me_throw(`${this.name()}: .${tail} reserved for internal use` + (tail !== '#visible' ? '' : ', use .#hidden instead'));
                        }
                    });
                }
                for (const prop of ['#width', '#height', '#alignHor', '#alignVer', '#ofsHor', '#ofsVer'])
                    if (prop_render[prop] === void 0)
                        $$.$me_throw(`${this.name()}: requires .${prop} to be defined`);
                this.props({
                    '#render': $$.$me_atom2_prop(Object.keys(prop_render).map((s) => '.' + s), ({ masters }) => !(this.active() && $$.a('.#visible') && $$.a('.#isReady')) ? null : masters, ({ val, prev, atom }) => {
                        if (!val)
                            return;
                        $me_atom2_control._to_render.add(this.path);
                        $$.$me_atom2_async();
                    }),
                    '#offsetRect': () => $$.$me_rect(),
                    '#clientRect': $$.$me_atom2_prop([s_level + '.#clientRect', '.#offsetRect'], ({ masters: [clientRect, offsetRect] }) => {
                        return {
                            left: clientRect.left + offsetRect.left,
                            top: clientRect.top + offsetRect.top,
                            right: clientRect.left + offsetRect.right,
                            bottom: clientRect.top + offsetRect.bottom,
                        };
                    }, prop_render['#isHover'] === void 0 ? null :
                        ({ val, atom }) => {
                            if ($$.$me_atom2_event_mousemove_last && !$$.$me_atom2_event_mousemove_to_process) {
                                $$.$me_atom2_event_mousemove_to_process = $$.$me_atom2_event_mousemove_last;
                                $$.$me_atom2_async();
                            }
                        }),
                });
            }
            static font_prepare(ctx, pixelRatio, prefix = '') {
                const ctxFontSize = Math.round($me_atom2_control.font_size(pixelRatio, prefix));
                ctx.font = $me_atom2_control._fontWeight(prefix) + ' ' + ctxFontSize + 'px ' + $me_atom2_control._fontFamily(prefix);
                ctx.textAlign = 'left';
                ctx.textBaseline = 'bottom';
                return ctxFontSize;
            }
            static font_size(pixelRatio, prefix = '') {
                const prop = $$.a.curr.by_path_s($me_atom2_control._fontProp('fontSize', prefix));
                if (typeof prop === 'string')
                    $$.$me_throw(prop);
                const result = prop.value() * pixelRatio;
                return result;
            }
            static _fontProp(prop, prefix) {
                const result = '.' + (!prefix ? prop : prefix + prop.slice(0, 1).toUpperCase() + prop.slice(1));
                return result;
            }
            static _fontFamily(prefix = '') {
                const prop = $$.a.curr.by_path_s($me_atom2_control._fontProp('fontFamily', prefix));
                return !prefix || typeof prop !== 'string' ? prop.value() : $$.a('.fontFamily');
            }
            static _fontWeight(prefix = '') {
                const prop = $$.a.curr.by_path_s($me_atom2_control._fontProp('fontWeight', prefix));
                return !prefix || typeof prop !== 'string' ? prop.value() : $$.a('.fontWeight');
            }
            static clean(controls, force = false) {
                let count = 0;
                for (let control of controls) {
                    if (control.render_state !== $me_atom2_control_render_state_enum.rendered)
                        continue;
                    count++;
                    const ctxRect = control._ctxRect();
                    const p = {
                        ctx: control._entities.prop['#ctx'].value(),
                        ctxRect,
                    };
                    if (p.ctx) {
                        const prev = $$.a.curr;
                        $$.a.curr = control;
                        if (!control._clean_helper(p, control.cnf))
                            p.ctx.clearRect(p.ctxRect.left, p.ctxRect.top, p.ctxRect.right - p.ctxRect.left + 1, p.ctxRect.bottom - p.ctxRect.top + 1);
                        $$.a.curr = prev;
                    }
                    control.render_state = $me_atom2_control_render_state_enum.cleaned;
                    let controls;
                    if ($me_atom2_control._fill_controls_cache.has(control)) {
                        controls = $me_atom2_control._fill_controls_cache.get(control);
                    }
                    else {
                        controls = [];
                        const entities_control = control._entities.control;
                        $me_atom2_control._fill_controls(controls, control._entities.control);
                        $me_atom2_control._fill_controls_cache.set(control, controls);
                    }
                    if (controls.length)
                        $me_atom2_control.clean($me_atom2_control.zIndex_sort(controls), force);
                }
                return count;
            }
            _ctxRect() {
                const prop = this._entities.prop;
                const prop_offsetRect = prop['#offsetRect'];
                const offsetRect = prop_offsetRect.value();
                const pixelRatio = $me_atom2_control.pixelRatio();
                return {
                    left: offsetRect.left * pixelRatio,
                    top: offsetRect.top * pixelRatio,
                    right: offsetRect.right * pixelRatio,
                    bottom: offsetRect.bottom * pixelRatio,
                };
            }
            _clean_helper(p, cnf) {
                let result = false;
                if (cnf) {
                    if (cnf.clean)
                        result = cnf.clean(p);
                    result = this._clean_helper(p, cnf.base) || result;
                }
                return result;
            }
            static fill_controls_cache_clear() {
                $me_atom2_control._fill_controls_cache.clear();
            }
            static _fill_controls(controls, entities_of_type) {
                for (const tail in entities_of_type) {
                    const entity = entities_of_type[tail];
                    if (!entity._entities.key) {
                        controls.push(entity);
                    }
                    else {
                        $me_atom2_control._fill_controls(controls, entity._entities.key);
                    }
                }
            }
            static render(controls, pixelRatio) {
                if (pixelRatio === void 0)
                    pixelRatio = $me_atom2_control.pixelRatio();
                let count = 0;
                for (let control of controls) {
                    if (control.render_state === $me_atom2_control_render_state_enum.rendered) {
                        continue;
                    }
                    count++;
                    const prop = control._entities.prop;
                    const prop_offsetRect = prop['#offsetRect'];
                    const prop_width = prop['#width'];
                    const prop_heght = prop['#height'];
                    const prop_left = prop['#left'];
                    const prop_top = prop['#top'];
                    const ctxWidth = Math.round(prop_width.value() * pixelRatio);
                    const ctxHeight = Math.round(prop_heght.value() * pixelRatio);
                    const left = Math.round(prop_left.value() * pixelRatio);
                    const top = Math.round(prop_top.value() * pixelRatio);
                    const right = left + ctxWidth;
                    const bottom = top + ctxHeight;
                    const ctxRect = { left, top, right, bottom };
                    prop_offsetRect.value({
                        left: left / pixelRatio,
                        top: top / pixelRatio,
                        right: right / pixelRatio,
                        bottom: bottom / pixelRatio,
                    });
                    const p = {
                        self: control,
                        ctx: control._entities.prop['#ctx'].value(),
                        ctxSize: control._entities.prop['#ctxSize'].value(),
                        pixelRatio,
                        ctxRect,
                        ctxWidth,
                        ctxHeight,
                    };
                    {
                        const prev = $$.a.curr;
                        $$.a.curr = control;
                        control._render_helper(p, control.cnf);
                        if (typeof $$.a.curr.by_path_s('.#border') !== 'string') {
                            p.ctx.strokeStyle = $$.a('.#border');
                            p.ctx.strokeRect(p.ctxRect.left, p.ctxRect.top, p.ctxRect.right - p.ctxRect.left, p.ctxRect.bottom - p.ctxRect.top);
                        }
                        $$.a.curr = prev;
                    }
                    let controls;
                    if ($me_atom2_control._fill_controls_cache.has(control)) {
                        controls = $me_atom2_control._fill_controls_cache.get(control);
                    }
                    else {
                        controls = [];
                        const entities_control = control._entities.control;
                        $me_atom2_control._fill_controls(controls, control._entities.control);
                        $me_atom2_control._fill_controls_cache.set(control, controls);
                    }
                    if (controls.length)
                        $me_atom2_control.render($me_atom2_control.zIndex_sort(controls), pixelRatio);
                    control.render_state = $me_atom2_control_render_state_enum.rendered;
                }
                return count;
            }
            _render_helper(p, cnf) {
                if (!cnf)
                    return;
                this._render_helper(p, cnf.base);
                if (cnf.render)
                    cnf.render(p);
            }
            static zIndex_sort(ss, to_render = false) {
                return (Array.isArray(ss) ? ss :
                    [...ss].map(path => $$.$me_atom2_entity.root().by_path(path)))
                    .filter(control => control && control.active &&
                    (() => {
                        if (!control._entities.prop)
                            $$.$me_throw(control.name());
                        return true;
                    })() &&
                    (!to_render || control._entities.prop['#visible'].value()));
            }
        }
        $me_atom2_control.to_def = Array();
        $me_atom2_control._to_render = new Set();
        $me_atom2_control._to_clean = new Set();
        $me_atom2_control.prop_non_render_default = {};
        $me_atom2_control._fill_controls_cache = new Map();
        $$.$me_atom2_control = $me_atom2_control;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ec.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $me_atom2_elem extends $$.$me_atom2_ec {
            constructor(p) {
                super(Object.assign({}, p, { ent: $$.$me_atom2_entity_enum.elem }));
                this.skipStyle = false;
                const cnf_control = this._mk_controls();
                const has_control = !!Object.keys(cnf_control).length;
                this.node = this._mk_node(has_control);
                const cnf_elem = this._mk_elems();
                const has_parent = !!p.parent;
                this._mk_props(has_control, !!cnf_elem, has_parent);
                this._mk_sad(has_parent);
            }
            elem_parent() {
                const parent = this._descendant(0, true);
                return parent && parent.path.ent !== $$.$me_atom2_entity_enum.root ? parent : null;
            }
            _wait_for_child_did_helper() {
                const parent = this.elem_parent();
                if (parent)
                    parent._add_child_to_reorder(this.path);
            }
            destroy() {
                if (this.node) {
                    if (this.node == document.body) {
                        this.node.id = '';
                    }
                    else {
                        const parent = this.node.parentElement;
                        if (parent) {
                            if (!$me_atom2_elem._to_remove.has(parent))
                                $me_atom2_elem._to_remove.set(parent, new Set());
                            $me_atom2_elem._to_remove.get(parent).add(this.node);
                        }
                    }
                }
                super.destroy();
            }
            static remove_children() {
                let count = 0;
                for (const [parent, children] of $me_atom2_elem._to_remove)
                    for (const child of children) {
                        parent.removeChild(child);
                        count++;
                    }
                $me_atom2_elem._to_remove.clear();
                return count;
            }
            _mk_node(has_control) {
                const prev = $$.a.curr;
                $$.a.curr = this;
                const cnf_node = this.cnf_item('node') || (has_control ? 'canvas' : 'div');
                const result = cnf_node instanceof HTMLElement ?
                    cnf_node :
                    typeof cnf_node == 'string' ?
                        document.createElement(cnf_node) :
                        document.createElementNS(cnf_node.ns, cnf_node.tag);
                if (has_control && result.tagName != 'CANVAS')
                    $$.$me_throw(`${this.name()}: cnf.node (${cnf_node}) must be 'canvas' whilst using cnf.control`);
                result.id = this.name();
                $$.a.curr = prev;
                return result;
            }
            _mk_elems() {
                const prev = $$.a.curr;
                $$.a.curr = this;
                const cnf_elem = this.cnf_items('elem');
                for (const tail in cnf_elem) {
                    const prop_def = cnf_elem[tail];
                    if (!prop_def)
                        continue;
                    const fn_apply = ({ prev, val, len_key, key, keys, key_enum, atom }) => {
                        let path_abs = new $$.$me_atom2_path({ ent: $$.$me_atom2_entity_enum.elem, tail, path: this.path });
                        let path = new $$.$me_atom2_path({ ent: $$.$me_atom2_entity_enum.elem, tail });
                        if (key) {
                            const ent = $$.$me_atom2_entity_enum.key;
                            for (const tail of (typeof key === 'string' ? [key] : key)) {
                                path = new $$.$me_atom2_path({ ent, tail, path });
                                path_abs = new $$.$me_atom2_path({ ent, tail, path: path_abs });
                            }
                        }
                        if (prev && val && (prev === val || prev.type == val.type))
                            return;
                        const elem = this.by_path(path);
                        if (elem instanceof $me_atom2_elem)
                            elem.destroy();
                        if (val) {
                            $me_atom2_elem.to_def.push({
                                cnf: val,
                                parent: this,
                                tail,
                                len_key,
                                key,
                                keys,
                                key_enum,
                            });
                            $$.$me_atom2_async();
                        }
                        if (!this._isReady()) {
                            if (val) {
                                this._wait_for_child_do(path_abs.toString());
                            }
                            else {
                                this._wait_for_child_did(path_abs.toString());
                            }
                            if (key)
                                this._wait_for_child_did(this.name() + '@' + tail);
                        }
                    };
                    const fn_key_idx_changed = pp => {
                        let path = new $$.$me_atom2_path({ ent: $$.$me_atom2_entity_enum.elem, tail, path: this.path });
                        for (const tail of pp.key) {
                            path = new $$.$me_atom2_path({ ent: $$.$me_atom2_entity_enum.key, tail, path });
                        }
                        const elem = $me_atom2_elem.by_path(path);
                        if (elem)
                            this._add_child_to_reorder(elem.path);
                        if ($$.$me_debug)
                            console.log(elem.path.toString());
                    };
                    $$.$me_atom2.to_def.push($$.$me_atom2_prop_def_prepare(prop_def, {
                        parent: this,
                        tail: '@' + tail,
                        fn_apply,
                        fn_key_idx_changed,
                    }));
                    this._wait_for_child_do(this.name() + '@' + tail);
                    $$.$me_atom2_async();
                }
                $$.a.curr = prev;
                return cnf_elem;
            }
            fn_compute_order() {
                const cnf_elem = this.parent().cnf_items('elem');
                return Object.keys(cnf_elem);
            }
            fn_apply_order(p) {
                if (!p.val || p.prev && $$.$me_equal(p.val, p.prev))
                    return;
                const elem = this.parent();
                for (const child of elem.node.children)
                    elem._add_child_to_reorder($$.$me_atom2_path.fromString(child.id));
            }
            fn_compute_visible(p) {
                const [hidden, visible] = p.masters;
                return !hidden && (!this.parent().elem_parent() || visible);
            }
            fn_compute_ctxSize(p) {
                const [pixelRatio, width, height] = p.masters;
                return {
                    pixelRatio,
                    width: pixelRatio * width,
                    height: pixelRatio * height,
                };
            }
            fn_apply_ctxSize(p) {
                if (p.val)
                    this.parent().dom({
                        width: p.val.width,
                        height: p.val.height
                    });
            }
            fn_compute_left(p) {
                const [alignHor, width_parent, width, ofsHor] = p.masters;
                const result = alignHor === $$.$me_align.left ? ofsHor :
                    alignHor === $$.$me_align.right ? width_parent - width - ofsHor :
                        Math.floor((width_parent - width) / 2) + ofsHor;
                return result;
            }
            fn_apply_left(p) {
                if (p.val != null)
                    p.atom.parent().style({ left: p.val });
            }
            fn_compute_clientRect(p) {
                const elem = p.atom.parent();
                const { left, top, right, bottom } = elem.node.getBoundingClientRect();
                const result = { left, top, right, bottom };
                return result;
            }
            fn_apply_clientRect(p) {
                const elem = this.parent();
                if (p.val == null)
                    return;
                if (elem.node.style.width == 'auto') {
                    const atom_prop = elem._entities.prop['#width'];
                    elem.skipStyle = true;
                    atom_prop.value(Math.round(p.val.right - p.val.left));
                    elem.skipStyle = false;
                }
                if (elem.node.style.height == 'auto') {
                    const atom_prop = elem._entities.prop['#height'];
                    elem.skipStyle = true;
                    atom_prop.value(Math.round(p.val.bottom - p.val.top));
                    elem.skipStyle = false;
                }
                if ($$.$me_atom2_event_mousemove_last && !$$.$me_atom2_event_mousemove_to_process) {
                    $$.$me_atom2_event_mousemove_to_process = $$.$me_atom2_event_mousemove_last;
                    $$.$me_atom2_async();
                }
            }
            fn_apply_top(p) {
                if (p.val != null)
                    this.parent().style({ top: p.val });
            }
            fn_apply_width(p) {
                this.parent().style({ width: p.val == null ? 'auto' : p.val });
            }
            fn_apply_height(p) {
                this.parent().style({ height: p.val == null ? 'auto' : p.val });
            }
            fn_apply_zIndex(p) {
                if (p.prev != null)
                    $$.$me_atom2_event_handlers = null;
            }
            fn_compute_style_visible(p) {
                const [visible] = p.masters;
                return visible ? 'visible' : 'hidden';
            }
            fn_compute_style(p) {
                return p.atom.parent().cnf_items('style');
            }
            fn_compute_attr(p) {
                return p.atom.parent().cnf_items('attr');
            }
            fn_compute_dom(p) {
                return p.atom.parent().cnf_items('dom');
            }
            static fn_apply(src, tail) {
                if (!$me_atom2_elem._fn_apply_cache[src])
                    $me_atom2_elem._fn_apply_cache[src] = {};
                if (!$me_atom2_elem._fn_apply_cache[src][tail])
                    $me_atom2_elem._fn_apply_cache[src][tail] = function (p) {
                        p.atom._descendant(1)[src]({ [tail]: p.val });
                    };
                return $me_atom2_elem._fn_apply_cache[src][tail];
            }
            _mk_props(has_control, has_elem, has_parent) {
                const prev = $$.a.curr;
                $$.a.curr = this;
                const { defaults, defaults_relative } = this._prepare('prop_default', $$.$me_atom2_entity_enum.elem, $me_atom2_elem.prop_default || {});
                const prop_defined = this.props([
                    this.cnf_items('prop'),
                    defaults,
                    defaults_relative,
                    Object.assign({ '#hidden': $$.$me_atom2.fn_compute_false, '#zIndex': has_parent ? '<.#zIndex' : $$.$me_atom2.fn_compute_zero }, (!has_elem ? {} : {
                        '#order': this.fn_compute_order,
                    }), { '#isHover': () => false }),
                    Object.assign({ '#_isReady': () => false, '#isReady': $$.$me_atom2_prop(['<.#isReady', '.#_isReady'], $$.$me_atom2_prop_compute_fn_and(), ({ val }) => {
                            if (val)
                                $$.$me_atom2_ec._to_init.push(this.path);
                        }), '#_cursor': $$.$me_atom2_prop(['.#isHover', '.#cursor'], ({ masters: [isHover, cursor] }) => !isHover ? null : cursor, ({ atom, val }) => {
                            $$.$me_atom2_ec_body_cursor({ origin: atom.path, val: val });
                        }), '#visible': $$.$me_atom2_prop(['.#hidden'].concat(!has_parent ? [] : ['<.#visible']), this.fn_compute_visible), '#clientRect': $$.$me_atom2_prop(['.#isReady'], this.fn_compute_clientRect, this.fn_apply_clientRect) }, (!has_control ? {} : {
                        '#ctx': () => this.node.getContext('2d'),
                        '#ctxSize': $$.$me_atom2_prop(['/.#pixelRatio', '.#width', '.#height'], this.fn_compute_ctxSize, this.fn_apply_ctxSize),
                    }), { '#left': $$.$me_atom2_prop(['.#alignHor', '<.#width', '.#width', '.#ofsHor'], this.fn_compute_left, this.fn_apply_left), '#top': $$.$me_atom2_prop(['.#alignVer',
                            '<.#height', '.#height', '.#ofsVer'], this.fn_compute_left, this.fn_apply_top) }),
                ], {
                    def: ({ tail, prop_def, prop_defined, p, idx, len }) => {
                        if (this.cnf.skip_root_defaults && (tail.startsWith('#') && !(tail == '#_isReady' ||
                            tail == '#isReady' ||
                            tail == '#clientRect' ||
                            tail == '#order' ||
                            false)))
                            return null;
                        if (tail == '#order') {
                            p.fn_apply = this.fn_apply_order;
                            return $$.$me_atom2_prop_def_prepare(prop_def, p);
                        }
                        else if (tail == '#width') {
                            p.fn_apply = this.fn_apply_width;
                            return $$.$me_atom2_prop_def_prepare(prop_def, p);
                        }
                        else if (tail == '#height') {
                            p.fn_apply = this.fn_apply_height;
                            return $$.$me_atom2_prop_def_prepare(prop_def, p);
                        }
                        else if (tail == '#zIndex') {
                            p.fn_apply = this.fn_apply_zIndex;
                            return $$.$me_atom2_prop_def_prepare(prop_def, p);
                        }
                        else if (idx === len - 2 && tail == '#isHover') {
                            if (prop_defined['#cursor'] === void 0)
                                return null;
                        }
                        else if (idx === len - 1 && tail == '#_cursor') {
                            if (prop_defined['#cursor'] === void 0)
                                return null;
                        }
                    },
                    dup: ({ tail, prop_defined, idx, len }) => {
                        if (idx === len - 1)
                            $$.$me_throw(`${this.name()}: .${tail} reserved for internal use` + (tail !== '#visible' ? '' : ', use .#hidden instead'));
                    }
                });
                if (!this.cnf.skip_root_defaults)
                    for (const prop of ['#width', '#height', '#alignHor', '#alignVer', '#ofsHor', '#ofsVer'])
                        if (prop_defined[prop] === void 0)
                            $$.$me_throw(`${this.name()}: requires .${prop} to be defined`);
                $$.a.curr = prev;
            }
            _mk_sad(has_parent) {
                const prev = $$.a.curr;
                $$.a.curr = this;
                for (const src of ['style', 'attr', 'dom']) {
                    $$.$me_atom2.to_def.push({
                        tail: src,
                        parent: this,
                        masters: null,
                        fn_compute: src === 'style' ? this.fn_compute_style : src === 'attr' ? this.fn_compute_attr : this.fn_compute_dom,
                        fn_apply: src === 'style' ? this.fn_apply_style : src === 'attr' ? this.fn_apply_attr : this.fn_apply_dom,
                    });
                    this.wait($$.$me_atom2_entity_enum.prop, src);
                }
                $$.a.curr = prev;
            }
            fn_apply_style(p) {
                this.parent().sad_apply('style', p);
            }
            fn_apply_attr(p) {
                this.parent().sad_apply('attr', p);
            }
            fn_apply_dom(p) {
                this.parent().sad_apply('dom', p);
            }
            sad_apply(src, p) {
                const parent = p.atom;
                const val = p.val;
                const prop_defined = {};
                if (src === 'style') {
                    const tail = 'visibility';
                    $$.$me_atom2.to_def.push({
                        tail,
                        parent,
                        masters: ['.#visible'],
                        fn_apply: $me_atom2_elem.fn_apply(src, tail)
                    });
                }
                let idx_curr = 0;
                const { defaults, defaults_relative } = this._prepare(src + '_default', $$.$me_atom2_entity_enum.elem, $me_atom2_elem[src + '_default'] || {});
                for (const props of [val, defaults, defaults_relative]) {
                    if (src === 'style') {
                        const reserved = {
                            visibility: '.#hidden',
                            left: '.#alignHor + .#ofsHor',
                            top: '.#alignVer + .#ofsVer',
                            width: '.#width',
                            height: '.#height',
                        };
                        for (const tail in reserved)
                            if (props[tail])
                                $$.$me_throw(`${this.name()}: .style.${tail} is reserved for internal use, use ${reserved[tail]} instead`);
                    }
                    for (const tail in props)
                        if (props[tail])
                            if (src === 'style' && tail === 'visibility') {
                                $$.$me_throw(`${this.name()}: .style.visibility is reserved for internal use, use .#hidden instead`);
                            }
                            else if (prop_defined[tail] === void 0) {
                                $$.$me_atom2.to_def.push($$.$me_atom2_prop_def_prepare(props[tail], {
                                    tail,
                                    parent,
                                    fn_apply: $me_atom2_elem.fn_apply(src, tail),
                                }));
                                parent.wait($$.$me_atom2_entity_enum.prop, tail);
                                if (src === 'style')
                                    prop_defined[tail] = idx_curr;
                            }
                    idx_curr++;
                }
            }
            style(p, immediatly = false) {
                this._lazy_prop_set('s', p, immediatly);
            }
            dom(p, immediatly = false) {
                this._lazy_prop_set('d', p, immediatly);
            }
            attr(p, immediatly = false) {
                this._lazy_prop_set('a', p, immediatly);
            }
            static _lazy_prop_clientRect(t, prop) {
                if (!$me_atom2_elem._lazy_prop_clientRect_cache) {
                    $me_atom2_elem._lazy_prop_clientRect_cache = {};
                    for (const prop of ['width', 'height', 'left', 'top', 'transform', 'position', 'fontSize'])
                        $me_atom2_elem._lazy_prop_clientRect_cache['s' + prop] = true;
                }
                return !!$me_atom2_elem._lazy_prop_clientRect_cache[t + prop];
            }
            _lazy_prop_set(t, props, immediatly = false) {
                if (this.skipStyle)
                    return;
                if (immediatly) {
                    for (const prop in props)
                        $me_atom2_elem._lazy_prop_apply_helper(this.node, t, prop, props[prop]);
                }
                else {
                    for (let prop in props) {
                        if (t == 's' && prop == 'zoom')
                            $$.$me_throw(`${this.name()}: using .style.zoom is prohibited due to https://stackoverflow.com/questions/44277435/css-zoom-property-not-working-with-boundingclientrectangle`);
                        this._lazy_prop_set_helper($me_atom2_elem._lazy_prop_clientRect(t, prop) ?
                            $me_atom2_elem._lazy_prop_to_apply_clientRect :
                            $me_atom2_elem._lazy_prop_to_apply, t, prop, props[prop]);
                    }
                    $$.$me_atom2_async();
                }
            }
            _lazy_prop_set_helper(lazy_prop_to_apply, t, prop, val) {
                if (!lazy_prop_to_apply.has(this.path))
                    lazy_prop_to_apply.set(this.path, new Map());
                const o = lazy_prop_to_apply.get(this.path);
                o[t + prop] = val;
            }
            static lazy_prop_apply_did() {
                const result = !$me_atom2_elem._lazy_prop_to_apply.size &&
                    !$me_atom2_elem._lazy_prop_to_apply_clientRect;
                return result;
            }
            static lazy_prop_apply_all() {
                let count = 0;
                count += $me_atom2_elem._lazy_prop_apply($me_atom2_elem._lazy_prop_to_apply);
                count += $me_atom2_elem._lazy_prop_apply($me_atom2_elem._lazy_prop_to_apply_clientRect);
                return count;
            }
            static _lazy_prop_apply(lazy_prop_to_apply) {
                let count = 0;
                if (lazy_prop_to_apply.size) {
                    for (const [path, elem_props] of lazy_prop_to_apply) {
                        const elem = $me_atom2_elem.by_path(path);
                        if (elem) {
                            const node = elem.node;
                            for (const prop in elem_props) {
                                $me_atom2_elem._lazy_prop_apply_helper(node, prop.slice(0, 1), prop.slice(1), elem_props[prop]);
                                count++;
                            }
                            if ((lazy_prop_to_apply === $me_atom2_elem._lazy_prop_to_apply_clientRect) ||
                                (elem.node.style.width == 'auto' || elem.node.style.height == 'auto') && (elem_props['sfontSize'] !== void 0 ||
                                    elem_props['dinnerText'] !== void 0 ||
                                    elem_props['dinnerHTML'] !== void 0 ||
                                    false)) {
                                elem.invalidateClientRect();
                            }
                            lazy_prop_to_apply.delete(path);
                        }
                    }
                }
                return count;
            }
            static _lazy_prop_apply_helper(node, t, prop, val) {
                if (t == 'd') {
                    node[prop] = val;
                }
                else if (t == 'a') {
                    node.setAttribute(prop, val);
                }
                else {
                    if (Number.isFinite(val)) {
                        if (prop === 'opacity' || prop === 'fontWeight') {
                            val += '';
                        }
                        else if ($me_atom2_elem._lazy_prop_style_px(prop)) {
                            val += 'px';
                        }
                    }
                    else if (typeof val === 'boolean') {
                        if (prop === 'visibility') {
                            val = val ? 'visible' : 'hidden';
                        }
                    }
                    if (typeof val != 'string')
                        $$.$me_throw(`prop: ${prop}, val: ${val}`, { prop, val, node });
                    node.style[prop] = val;
                }
            }
            static _lazy_prop_style_px(prop) {
                if (!$me_atom2_elem._lazy_prop_style_px_cache) {
                    $me_atom2_elem._lazy_prop_style_px_cache = {};
                    const pxStyleProps = ['width', 'height', 'fontSize', 'lineHeight', 'maxWidth', 'borderRadius', 'borderWidth', 'borderTopLeftRadius', 'borderBottomLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderRightWidth', 'borderLeftWidth', 'borderTopWidth', 'borderBottomWidth'];
                    const sides = ['left', 'top', 'right', 'bottom'];
                    pxStyleProps.push(...sides);
                    pxStyleProps.push('margin');
                    pxStyleProps.push('padding');
                    sides.forEach(side => {
                        side = side.charAt(0).toUpperCase() + side.slice(1);
                        pxStyleProps.push('margin' + side);
                        pxStyleProps.push('padding' + side);
                    });
                    for (let i of pxStyleProps)
                        $me_atom2_elem._lazy_prop_style_px_cache[i] = true;
                }
                return !!$me_atom2_elem._lazy_prop_style_px_cache[prop];
            }
            _add_child_to_reorder(path_child) {
                const id = this.node.id;
                if (!$me_atom2_elem.children_to_add.has(this.path))
                    $me_atom2_elem.children_to_add.set(this.path, new Set());
                $me_atom2_elem.children_to_add.get(this.path).add(path_child);
                $$.$me_atom2_async();
            }
            static reorder_children() {
                let count = 0;
                for (const [path_parent, paths] of $me_atom2_elem.children_to_add) {
                    const parent = $$.$me_atom2_entity.root().by_path(path_parent);
                    if (!(parent instanceof $me_atom2_elem))
                        continue;
                    const node_parent = parent.node;
                    if (node_parent) {
                        const sb = {};
                        for (const path of paths)
                            sb[path.toString()] = true;
                        for (const child of [...node_parent.children])
                            if (sb[child.id]) {
                                node_parent.removeChild(child);
                                count++;
                            }
                        const order = parent._entities.prop['#order'].value();
                        const key_enum_store = {};
                        for (const path of paths) {
                            const elem = $me_atom2_elem.by_path(path);
                            if (elem) {
                                elem._add_as_child(node_parent, order, key_enum_store);
                                count++;
                                if (!parent._isReady())
                                    parent._wait_for_child_did(elem.name());
                            }
                        }
                    }
                    $me_atom2_elem.children_to_add.delete(path_parent);
                }
                return count;
            }
            _add_as_child(node_parent, order, key_enum_store) {
                const node_child = this.node;
                const id = node_child.id;
                const name_elem = $me_atom2_elem._elem_name(id);
                const name_strip = $me_atom2_elem._parse(name_elem)[0];
                const idx_curr = $me_atom2_elem._indexOf(order, name_elem, name_strip, key_enum_store, id);
                if (idx_curr < 0 || idx_curr >= order.length || node_parent.children.length === 0) {
                    node_parent.appendChild(node_child);
                }
                else {
                    const children = node_parent.children;
                    let node_after;
                    let i_min = 0;
                    let i_max = children.length - 1;
                    let i_mid;
                    let child;
                    let idx;
                    {
                        child = children[i_min];
                        idx = $me_atom2_elem._indexOf(order, $me_atom2_elem._elem_name(child.id), name_strip, key_enum_store, id);
                        if (idx > idx_curr) {
                            node_after = child;
                        }
                        else {
                            if (i_max != i_min) {
                                child = children[i_max];
                                idx = $me_atom2_elem._indexOf(order, $me_atom2_elem._elem_name(child.id), name_strip, key_enum_store, id);
                            }
                            if (idx > idx_curr) {
                                node_after = child;
                                while (i_max - i_min >= 2) {
                                    const i_mid = Math.floor((i_max + i_min) / 2);
                                    child = children[i_mid];
                                    idx = $me_atom2_elem._indexOf(order, $me_atom2_elem._elem_name(child.id), name_strip, key_enum_store, id);
                                    if (idx < idx_curr) {
                                        i_min = i_mid;
                                    }
                                    else {
                                        i_max = i_mid;
                                        node_after = child;
                                    }
                                }
                            }
                        }
                    }
                    if (null == node_after) {
                        node_parent.appendChild(node_child);
                    }
                    else {
                        node_parent.insertBefore(node_child, node_after);
                    }
                }
            }
            static _indexOf(order, s, name_strip, key_enum_store, id) {
                let result = order.indexOf(s);
                if (result < 0) {
                    result = order.length;
                    if (s.indexOf('[') > 0) {
                        const len = order.length;
                        const parsed_s = $me_atom2_elem._parse(s);
                        const matches = {};
                        LOOP: for (let i = 0; i < len; i++) {
                            const parsed_so = $me_atom2_elem._parse(order[i]);
                            if (parsed_s[0] != parsed_so[0])
                                continue;
                            const j_max = Math.min(parsed_s.length, parsed_so.length) - 1;
                            matches[i] = [];
                            for (let j = 1; j <= j_max; j++) {
                                if (parsed_s[j] == parsed_so[j]) {
                                    matches[i].push(j);
                                }
                                else if (parsed_so[j]) {
                                    delete matches[i];
                                    continue LOOP;
                                }
                            }
                        }
                        const best = Object.keys(matches)
                            .map((i) => ({ idx_curr: +i, matches: matches[i] }))
                            .sort((ia, ib) => ib.matches.length - ia.matches.length)
                            .reduce((result, item, idx_curr) => {
                            if (!idx_curr) {
                                result = item;
                            }
                            else if (result.matches.length === item.matches.length) {
                                const len = result.matches.length;
                                for (let i = 0; i < len; i++) {
                                    if (result[i] <= item[i])
                                        continue;
                                    result = item;
                                    break;
                                }
                            }
                            return result;
                        }, null);
                        if (best) {
                            result = best.idx_curr;
                            const parsed_so = $me_atom2_elem._parse(order[best.idx_curr]);
                            if (name_strip == parsed_so[0]) {
                                const key_enum = $me_atom2_elem._get_key_enum(key_enum_store, name_strip, id);
                                if (key_enum) {
                                    const len = key_enum.length;
                                    let ord = 0, n = 1;
                                    for (let i = 0; i < len; i++)
                                        if (best.matches.indexOf(i + 1) < 0) {
                                            ord = ord * key_enum[i].length + key_enum[i].indexOf(parsed_s[i + 1]);
                                            n = n * key_enum[i].length;
                                        }
                                    result += ord / n;
                                }
                            }
                        }
                    }
                }
                return result;
            }
            static _get_key_enum(key_enum_store, name_strip, id) {
                let result = key_enum_store[name_strip];
                if (result === void 0) {
                    let path = $$.$me_atom2_path.fromString(id);
                    while (path.ent === $$.$me_atom2_entity_enum.key)
                        path = path.path;
                    const elem_parent = $$.$me_atom2_entity.by_path(path.path);
                    const atom = elem_parent.by_path(new $$.$me_atom2_path({ ent: $$.$me_atom2_entity_enum.prop, tail: '@' + path.tail }));
                    result = key_enum_store[name_strip] = atom.key_enum();
                }
                return result;
            }
            static _parse(s) {
                let pos_s = s.length - 1;
                let i;
                let result = [];
                while ((i = s.lastIndexOf('[', pos_s)) > 0) {
                    result.unshift(s.slice(i + 1, pos_s));
                    pos_s = i - 1;
                }
                result.unshift(s.slice(0, pos_s + 1));
                return result;
            }
            static _elem_name(elem_id) {
                return elem_id.slice(elem_id.lastIndexOf('@') + 1);
            }
        }
        $me_atom2_elem.to_def = Array();
        $me_atom2_elem.style_default = {
            position: () => 'absolute',
        };
        $me_atom2_elem._to_remove = new Map();
        $me_atom2_elem._fn_apply_cache = {};
        $me_atom2_elem._lazy_prop_to_apply = new Map();
        $me_atom2_elem._lazy_prop_to_apply_clientRect = new Map();
        $me_atom2_elem.children_to_add = new Map();
        $$.$me_atom2_elem = $me_atom2_elem;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//elem.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const event_names = [
            'touchstart',
            'touchmove',
            'touchend',
            'mousedown',
            'mousemove',
            'mouseup',
            'pinchInit',
            'pinch',
            'pinchFini',
            'wheel',
            'wheelTouchInit',
            'wheelTouch',
            'wheelTouchFini',
            'wheelDragInit',
            'wheelDrag',
            'wheelDragFini',
            'click',
            'tap',
            'clickOrTap',
            'clickOrTapOutside',
            'clickOutside',
            'tapOutside',
        ];
        let $me_atom2_wheel_synth_mode;
        (function ($me_atom2_wheel_synth_mode) {
            $me_atom2_wheel_synth_mode[$me_atom2_wheel_synth_mode["justStarted"] = 0] = "justStarted";
            $me_atom2_wheel_synth_mode[$me_atom2_wheel_synth_mode["init"] = 1] = "init";
            $me_atom2_wheel_synth_mode[$me_atom2_wheel_synth_mode["move"] = 2] = "move";
            $me_atom2_wheel_synth_mode[$me_atom2_wheel_synth_mode["end"] = 3] = "end";
            $me_atom2_wheel_synth_mode[$me_atom2_wheel_synth_mode["fini"] = 4] = "fini";
        })($me_atom2_wheel_synth_mode = $$.$me_atom2_wheel_synth_mode || ($$.$me_atom2_wheel_synth_mode = {}));
        $$.$me_atom2_event_wheel_y_is = (event) => Math.abs(event._deltaX) < Math.abs(event._deltaY);
        $$.$me_atom2_event_wheel_x_is = (event) => Math.abs(event._deltaX) > Math.abs(event._deltaY);
        let startClick;
        let startTap;
        let hoverCurr;
        let hoverPrev;
        function _event_add(ec, name_event, events) {
            let name_atom, fn;
            if (events) {
                const event_def = events[name_event];
                fn = typeof event_def === 'function' ?
                    event_def :
                    event_def.fn;
            }
            let s;
            if (!ec._entities)
                $$.$me_throw(ec.name(), ec.active());
            if (!ec._entities.prop)
                $$.$me_throw(ec.name(), ec.active(), ec._entities);
            if (!ec._entities.prop['#zIndex'])
                $$.$me_throw(ec.name(), ec.active(), ec._entities.prop);
            const zIndex = ec._entities.prop['#zIndex'].value();
            if (name_event === 'hover') {
                _do_event_add(ec, 'mousemove', zIndex, { name: 'hover' });
            }
            else if (name_event === 'tap' || name_event === 'clickOrTap' && isTouch()) {
                _do_event_add(ec, 'touchstart', zIndex, { name: 'tapBegin' });
                _do_event_add(ec, 'touchmove', zIndex, { name: 'tapTrack' });
                _do_event_add(ec, 'touchend', zIndex, { name: 'tapDid', fn });
            }
            else if (name_event === 'tapOutside' || name_event === 'clickOrTapOutside' && isTouch()) {
                _do_event_add(ec, 'touchstart', zIndex, { name: 'tapOutside', fn });
            }
            else if (name_event === 'click' || name_event === 'clickOrTap' && !isTouch()) {
                _do_event_add(ec, 'mousedown', zIndex, { name: 'clickBegin' });
                _do_event_add(ec, 'mouseup', zIndex, { name: 'clickDid', fn });
            }
            else if (name_event === 'clickOutside' || name_event === 'clickOrTapOutside') {
                _do_event_add(ec, 'mousedown', zIndex, { name: 'clickOutside', fn });
            }
            else
                _do_event_add(ec, name_event, zIndex, fn);
        }
        function _do_event_add(ec, name_event, zIndex, fn) {
            if (!$$.$me_atom2_event_handlers.has(name_event))
                $$.$me_atom2_event_handlers.set(name_event, []);
            const queue = $$.$me_atom2_event_handlers.get(name_event);
            let i = 0;
            while (i < queue.length && queue[i].zIndex > zIndex)
                i++;
            if (i == queue.length || queue[i].zIndex != zIndex)
                queue.splice(i, 0, {
                    zIndex,
                    handlers: new Map(),
                });
            const handlers = queue[i].handlers;
            if (!handlers.has(ec.path))
                handlers.set(ec.path, []);
            handlers.get(ec.path).push(fn);
        }
        function _events_add_helper(ec, cnf) {
            if (!cnf)
                return;
            if (cnf.event)
                for (const name_event of event_names)
                    if (cnf.event[name_event])
                        _event_add(ec, name_event, cnf.event);
            if (cnf.base)
                _events_add_helper(ec, cnf.base);
        }
        function _events_add(ec) {
            if (ec._entities &&
                ec._entities.prop &&
                ec._entities.prop['#isHover']
                && !ec._entities.prop['#isHover'].masters)
                _event_add(ec, 'hover');
            _events_add_helper(ec, ec.cnf);
        }
        function _events_add_recursive(entity) {
            const entities = entity._entities;
            if (entities) {
                for (const ent of [$$.$me_atom2_entity_enum.key, $$.$me_atom2_entity_enum.elem, $$.$me_atom2_entity_enum.control]) {
                    const entities_of_type = entities[$$.$me_atom2_entity_enum[ent]];
                    if (!entities_of_type)
                        continue;
                    for (const tail in entities_of_type) {
                        const ec = entities_of_type[tail];
                        if (!ec.active())
                            continue;
                        _events_add(ec);
                        _events_add_recursive(ec);
                    }
                }
            }
        }
        function $me_atom2_event_process(name_event, event) {
            if (!event)
                return;
            if (!$$.$me_atom2_event_handlers) {
                $$.$me_atom2_event_handlers = new Map();
                _events_add_recursive($$.$me_atom2_entity.root());
            }
            if (!$$.$me_atom2_event_handlers.has(name_event))
                return;
            const queue = $$.$me_atom2_event_handlers.get(name_event);
            let done_event = false;
            let ec_proceed;
            QUEUE: for (const item of queue) {
                for (const [path, fn_array] of item.handlers) {
                    const ec = $$.$me_atom2_entity.root().by_path(path);
                    if (!ec)
                        continue;
                    if (!ec._entities.prop['#visible'].value())
                        continue;
                    const clientRect = ec._entities.prop['#clientRect'].value();
                    if (!clientRect)
                        continue;
                    const isInRect = (clientX, clientY) => $$.$me_point_in_rect(clientX, clientY, clientRect);
                    const distToRect = (clientX, clientY) => $$.$me_dist_to_rect(clientX, clientY, clientRect);
                    let done_ec = false;
                    let done_ec_special = false;
                    const prev = $$.a.curr;
                    $$.a.curr = ec;
                    let clickTolerance;
                    let touchTolerance;
                    let tapTolerance;
                    for (const item of fn_array)
                        if (typeof item == 'function') {
                            const fn = item;
                            if (done_ec = fn({ event, isInRect, distToRect }))
                                break;
                        }
                        else {
                            const name = item.name;
                            if (name == 'hover') {
                                if (isInRect(event.clientX, event.clientY)) {
                                    ec._entities.prop['#isHover'].value(true);
                                    if (!hoverCurr)
                                        hoverCurr = new Set();
                                    hoverCurr.add(path);
                                }
                            }
                            else if (name == 'clickOutside') {
                                done_ec_special =
                                    !isInRect(event.clientX, event.clientY) &&
                                        item.fn({
                                            isInRect,
                                            distToRect,
                                            event,
                                        });
                            }
                            else if (name == 'clickBegin') {
                                if (isInRect(event.clientX, event.clientY)) {
                                    if (!$$.$me_atom2_event_click)
                                        $$.$me_atom2_event_click = new Set();
                                    $$.$me_atom2_event_click.add(path);
                                    startClick = event;
                                }
                            }
                            else if (name == 'clickDid') {
                                if ($$.$me_atom2_event_click && $$.$me_atom2_event_click.has(path)) {
                                    if (clickTolerance === void 0)
                                        clickTolerance = $$.a('/.#clickTolerance');
                                    done_ec_special =
                                        Math.abs(startClick.clientX - event.clientX) <= clickTolerance &&
                                            Math.abs(startClick.clientY - event.clientY) <= clickTolerance &&
                                            item.fn({
                                                isInRect,
                                                distToRect,
                                                event: { start: startClick, end: event }
                                            });
                                }
                            }
                            else if (name == 'tapOutside') {
                                if (touchTolerance === void 0)
                                    touchTolerance = $$.a('/.#touchTolerance');
                                const dist = distToRect(event.touches[0].clientX, event.touches[0].clientY);
                                done_ec_special =
                                    (dist > touchTolerance) &&
                                        item.fn({
                                            isInRect,
                                            distToRect,
                                            event,
                                        });
                            }
                            else if (name == 'tapBegin') {
                                if (touchTolerance === void 0)
                                    touchTolerance = $$.a('/.#touchTolerance');
                                const dist = distToRect(event.touches[0].clientX, event.touches[0].clientY);
                                if (dist <= touchTolerance) {
                                    if (!$$.$me_atom2_event_tap) {
                                        $$.$me_atom2_event_tap = new Map();
                                    }
                                    else {
                                        const dist_eta = dist;
                                        for (const [path, dist] of $$.$me_atom2_event_tap)
                                            if (dist > dist_eta)
                                                $$.$me_atom2_event_tap.delete(path);
                                    }
                                    $$.$me_atom2_event_tap.set(ec.path, dist);
                                    startTap = event;
                                }
                            }
                            else if (name == 'tapTrack') {
                                if ($$.$me_atom2_event_tap && $$.$me_atom2_event_tap.size) {
                                    const event_curr = event;
                                    if (tapTolerance == void 0)
                                        tapTolerance = $$.a('/.#tapTolerance');
                                    if (Math.abs(event.touches[0].clientX - startTap.touches[0].clientX) > tapTolerance ||
                                        Math.abs(event.touches[0].clientY - startTap.touches[0].clientY) > tapTolerance)
                                        $$.$me_atom2_event_tap.clear();
                                }
                            }
                            else if (name == 'tapDid') {
                                if ($$.$me_atom2_event_tap && $$.$me_atom2_event_tap.has(path)) {
                                    const fn = item.fn;
                                    if (fn({
                                        isInRect,
                                        distToRect,
                                        event: { start: startTap, end: event },
                                    })) {
                                        const app = $$.a.get('/@app');
                                        app.dispatch('tapEffect', { ec, event: startTap });
                                        done_ec_special = true;
                                    }
                                }
                            }
                            else
                                $$.$me_throw(name);
                        }
                    $$.a.curr = prev;
                    done_event = done_event || done_ec || done_ec_special;
                    if (done_event) {
                        ec_proceed = ec;
                        break QUEUE;
                    }
                }
            }
            if (name_event == 'mousemove') {
                if (hoverCurr) {
                    if (hoverPrev && hoverPrev.size) {
                        for (const path of hoverPrev) {
                            if (hoverCurr.has(path))
                                continue;
                            const ec = $$.$me_atom2_entity.root().by_path(path);
                            if (!(ec instanceof $$.$me_atom2_ec))
                                continue;
                            ec._entities.prop['#isHover'].value(false);
                        }
                        hoverPrev.clear();
                    }
                    if (!hoverPrev)
                        hoverPrev = new Set();
                    for (const path of hoverCurr)
                        hoverPrev.add(path);
                    hoverCurr.clear();
                }
            }
            else if (name_event == 'mouseup') {
                $$.$me_atom2_event_click && $$.$me_atom2_event_click.clear();
            }
            else if (name_event == 'touchend') {
                $$.$me_atom2_event_tap && $$.$me_atom2_event_tap.clear();
            }
            if (event.preventDefault &&
                (ec_proceed instanceof $$.$me_atom2_elem) &&
                ec_proceed.node.tagName != 'INPUT') {
                event.preventDefault();
            }
        }
        $$.$me_atom2_event_process = $me_atom2_event_process;
        function $me_atom2_event_keyboard_process(name_event, event) {
        }
        $$.$me_atom2_event_keyboard_process = $me_atom2_event_keyboard_process;
        const isTouch = () => $$.$me_atom2_entity.root()._entities.prop['#isTouch'].value();
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//event.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $me_atom2 extends $$.$me_atom2_entity {
            constructor(p) {
                super(Object.assign({}, p, { ent: p.is_key ?
                        $$.$me_atom2_entity_enum.key :
                        $$.$me_atom2_entity_enum.prop }));
                this._descendant_level = p.descendant_level || 0;
                this._fn_key_idx_changed = p.fn_key_idx_changed;
                if (p.keys && p.keys.length) {
                    const self = this;
                    const pp = p;
                    this.fn_compute = pp.fn_compute;
                    const atom = new $me_atom2({
                        descendant_level: 1,
                        tail: '#keys',
                        parent: self,
                        masters: p.keys.slice(0, 1),
                        fn_compute: ({ masters: [key] }) => key,
                        fn_apply: ({ val, prev, atom }) => {
                            let ss_curr;
                            let ss_prev;
                            if (prev) {
                                ss_curr = new Set(val);
                                for (const tail of prev)
                                    if (!ss_curr.has(tail)) {
                                        const atom = this._entities && this._entities.key && this._entities.key[tail];
                                        if (atom) {
                                            atom.value(null);
                                            atom.destroy();
                                        }
                                    }
                            }
                            if (val) {
                                ss_prev = new Set(prev);
                                for (const tail of val)
                                    if (!ss_prev.has(tail))
                                        new $me_atom2(Object.assign({}, p, { descendant_level: 1, tail, is_key: true, keys: p.keys.slice(1), parent: self }));
                            }
                            if (val && !val.length && this.path.tail.startsWith('@')) {
                                const ec = this.parent();
                                if (ec instanceof $$.$me_atom2_ec) {
                                    ec._wait_for_child_did(ec.name() + this.path.tail);
                                }
                                else {
                                    console.error(ec);
                                }
                            }
                            if (prev && val) {
                                for (const tail of ss_curr) {
                                    if (ss_prev.has(tail)) {
                                        const idx_prev = prev.indexOf(tail);
                                        const idx_curr = val.indexOf(tail);
                                        if (idx_prev != idx_curr) {
                                            const atom = this._entities && this._entities.key && this._entities.key[tail];
                                            if (atom)
                                                atom._key_idx_changed({
                                                    key: [tail],
                                                    change: { idx_curr, idx_prev, i_key: 0 }
                                                });
                                        }
                                    }
                                }
                            }
                        }
                    });
                    this._key_gen = atom;
                }
                else {
                    this.fn_apply = p.fn_apply;
                    const pp = p;
                    this.fn_compute = pp.fn_compute;
                    if (pp.masters && (!Array.isArray(pp.masters) || pp.masters.length)) {
                        if (Array.isArray(pp.masters)) {
                            this.masters = pp.masters;
                        }
                        else {
                            const atom = new $me_atom2({
                                descendant_level: 1,
                                tail: '#masters',
                                parent: this,
                                masters: pp.masters.masters,
                                fn_compute: (p) => {
                                    const masters = pp.masters.fn_compute(p);
                                    if (!Array.isArray(masters))
                                        $$.$me_throw(`atom '${atom.name()}'.fn_compute() expected to return string[] instead of`, masters);
                                    return masters;
                                },
                                fn_apply: ({ val, prev }) => {
                                    if ($$.$me_equal(val, prev))
                                        return;
                                    if (Array.isArray(prev))
                                        this.unregister_as_slave(prev);
                                    this._masters_store = null;
                                },
                            });
                            atom.add_slave(this, '#masters');
                            this.masters = atom;
                        }
                    }
                }
                this.set_state($me_atom2_state_enum.invalid);
                const name = this.name();
                const sp = $me_atom2._waiting_for_atom_def[name];
                if (!sp)
                    return;
                for (const [path, master] of sp) {
                    const atom = $$.$me_atom2_entity.root().by_path(path);
                    if (typeof atom !== 'string')
                        this.add_slave(atom, master);
                }
                delete $me_atom2._waiting_for_atom_def[name];
            }
            state() { return this._state; }
            get 'fn_compute()'() {
                return this._compute();
            }
            get 'fn_apply()'() {
                return this._state === $me_atom2_state_enum.valid ? this._apply(this._value, true) : new Error(`this._state is ${this._state}`);
            }
            get 'update()'() {
                return this.update();
            }
            get 'masters()'() {
                const masters = this._masters();
                if (!masters.length)
                    return null;
                const result = {};
                for (const name_master of masters)
                    result[name_master] = this.by_path_s(name_master);
                return result;
            }
            get 'slaves()'() {
                if (!this._slaves)
                    return null;
                const result = {};
                for (const [atom_slave] of this._slaves)
                    result[atom_slave.name()] = atom_slave;
                return result;
            }
            get 'state()'() {
                return this.get_state_helper(this._state);
            }
            get_state_helper(state) {
                if (state instanceof Error)
                    return state;
                if (typeof state === 'number')
                    return $me_atom2_state_enum[state];
                if (state instanceof Set) {
                    const state_complex = state;
                    const result = {};
                    for (const s of state_complex) {
                        const ret = this.by_path_s(s);
                        const key = typeof ret == 'string' ? ret : ret.name();
                        const val = typeof ret == 'string' ? 'waiting_for' : ret['state()'];
                        result[key] = val;
                    }
                    return result;
                }
            }
            destroy() {
                if (this._slaves)
                    for (let [atom_slave] of this._slaves) {
                        this.rm_slave(atom_slave);
                    }
                this.unregister_as_slave(this._masters());
                super.destroy();
            }
            by_path_s(s, keys) {
                const descendant = this._descendant(this._descendant_level);
                if (typeof descendant === 'string')
                    $$.$me_throw(descendant);
                return descendant.by_path_s(s, keys || this._key_provider());
            }
            no_wait_for_master(name_master) {
                if (!(this._state instanceof Set))
                    return;
                const state_complex = this._state;
                state_complex.delete(name_master);
                if (state_complex.size)
                    return;
                this.set_state($me_atom2_state_enum.invalid);
            }
            add_slave(atom_slave, name_master) {
                if (!this._slaves)
                    this._slaves = new Map();
                this._slaves.set(atom_slave, name_master);
                atom_slave.no_wait_for_master(name_master);
                const store = atom_slave._masters_store || (atom_slave._masters_store = {});
                store[name_master] = this;
                atom_slave.set_state_slave(name_master, this._state instanceof Set ? this._state :
                    $me_atom2_state_enum.invalid);
            }
            rm_slave(atom_slave) {
                if (this._slaves && this._slaves.has(atom_slave)) {
                    const name_master = this._slaves.get(atom_slave);
                    atom_slave.set_state_slave(name_master, $me_atom2_state_enum.invalid);
                    if (atom_slave._masters_store)
                        delete atom_slave._masters_store[name_master];
                    this._slaves.delete(atom_slave);
                    if (!this._slaves.size)
                        this._slaves = null;
                }
            }
            unregister_as_slave(masters) {
                if (Array.isArray(masters))
                    for (const name_master of masters) {
                        const atom_master = this.by_path_s(name_master);
                        if (typeof atom_master !== 'string') {
                            atom_master.rm_slave(this);
                        }
                        else {
                            const ms = $me_atom2._waiting_for_atom_def;
                            let s = atom_master;
                            const ss = ms[s];
                            if (!ss)
                                continue;
                            ss.delete(this.path);
                            if (!ss.size)
                                delete ms[s];
                            this.no_wait_for_master(name_master);
                        }
                    }
            }
            value(val, force = false) {
                if (val === void 0 && this._state === $me_atom2_state_enum.valid)
                    return this._value;
                this.update(val, force);
                return (this._state !== $me_atom2_state_enum.valid ?
                    null :
                    this._value);
            }
            static is_valid_value(val) {
                return !(val == null || Number.isNaN(val));
            }
            update(val, force = false) {
                if (val === void 0 && !(this._state === $me_atom2_state_enum.invalid ||
                    this._state === $me_atom2_state_enum.need_check))
                    return;
                const true_set = val !== void 0;
                if (val === void 0) {
                    const start = performance.now();
                    const compute_result = this._compute();
                    $me_atom2.compute_timing += performance.now() - start;
                    $me_atom2.compute_count++;
                    if (!compute_result)
                        return;
                    const { ret, state } = compute_result;
                    if (state !== void 0) {
                        this.set_state(state);
                        return;
                    }
                    val = ret;
                }
                let just_set_anim = false;
                let next_value = null;
                let anim_to_fini;
                if (!(val instanceof $me_atom2_anim_class)) {
                    next_value = val;
                }
                else {
                    const anim = val._anim;
                    if ($me_atom2.is_valid_value(anim.to)) {
                        if (!$me_atom2.is_valid_value(anim.from)) {
                            const value = typeof this._state == 'number' ? this._value : null;
                            anim.from = $me_atom2.is_valid_value(value) ? value : anim.to;
                        }
                        if (just_set_anim = (anim.delay > 0 || !$$.$me_equal(anim.from, anim.to))) {
                            $me_atom2.anim_to_play.set(this.path, Object.assign({}, anim, { value: anim.from }));
                            $me_atom2.anim_active(anim, true);
                            $$.$me_atom2_async();
                        }
                        next_value = anim.delay > 0 ? void 0 : anim.from;
                        if (!just_set_anim)
                            anim_to_fini = anim;
                    }
                }
                if (next_value === void 0)
                    return;
                if (!just_set_anim)
                    $me_atom2.anim_stop(this.path);
                this.set_value(next_value, true_set, force);
                if (anim_to_fini)
                    $me_atom2.anim_fini(anim_to_fini, this.path);
            }
            set_value(next_value, true_set = true, force = false) {
                const prev_value = this._value;
                if (!true_set && !force &&
                    $$.$me_equal(next_value, prev_value)) {
                    if (this._state === $me_atom2_state_enum.need_check) {
                        this._state = $me_atom2_state_enum.valid;
                        $me_atom2.did_not_apply = true;
                        return;
                    }
                    else {
                        this._state = $me_atom2_state_enum.valid;
                        $me_atom2.did_not_apply = true;
                        return;
                    }
                }
                next_value = this._apply(next_value, force);
                if (true_set)
                    this._masters_store = null;
                const state = $me_atom2.is_valid_value(this._value = next_value) ? $me_atom2_state_enum.valid :
                    true_set && (this.fn_compute || this.masters) ? $me_atom2_state_enum.invalid :
                        `${this.name()} got ${next_value}`;
                if (state !== this._state ||
                    this._state === $me_atom2_state_enum.valid && (force || !$$.$me_equal(prev_value, next_value)))
                    this.set_state(state, $me_atom2_state_enum.need_check);
            }
            _compute() {
                return this.update_helper('compute', () => {
                    let master_values;
                    const fn_compute = this.fn_compute;
                    let masters;
                    if (this.masters) {
                        let ma;
                        masters = Array.isArray(this.masters) ? this.masters : (ma = this.masters).value();
                        let state;
                        if (ma && ma._state !== $me_atom2_state_enum.valid) {
                            state = new Set();
                            state.add(this.name() + '.#masters');
                            return { state };
                        }
                        let store = this._masters_store;
                        if (!store) {
                            for (const name_master of masters) {
                                const atom_master = this.by_path_s(name_master, this._key_provider());
                                if (atom_master instanceof $me_atom2) {
                                    atom_master.add_slave(this, name_master);
                                }
                                else {
                                    const name_atom_waiting_for = atom_master;
                                    const ms = $me_atom2._waiting_for_atom_def;
                                    const ss = ms[name_atom_waiting_for] || (ms[name_atom_waiting_for] = new Map());
                                    ss.set(this.path, name_master);
                                    if (!state)
                                        state =
                                            this._state instanceof Set ?
                                                this._state :
                                                new Set();
                                    state.add(name_master);
                                }
                            }
                            if (state) {
                                return { state };
                            }
                            store = this._masters_store;
                        }
                        master_values = [];
                        let not_ready = false;
                        for (const name_master of masters) {
                            const atom_master = store[name_master];
                            if (!atom_master) {
                                if (!state)
                                    state = new Set();
                                state.add(name_master);
                                continue;
                            }
                            let value = atom_master.value();
                            master_values.push(value);
                            if (atom_master._state !== $me_atom2_state_enum.valid) {
                                if (!state)
                                    state = new Set();
                                state.add(name_master);
                            }
                        }
                        if (state) {
                            return { state };
                        }
                        if (!fn_compute) {
                            return {
                                ret: (master_values.length == 1 ? master_values[0] : master_values)
                            };
                        }
                    }
                    if (!fn_compute) {
                        return { ret: void 0 };
                    }
                    const result = {};
                    const key_provider_ret = this._key_provider() || {};
                    try {
                        const start = performance.now();
                        result.ret = fn_compute.call(this, Object.assign({ atom: this, prev: this._value, len: !master_values ? 0 : master_values.length, masters: master_values }, key_provider_ret));
                        if (result.ret === void 0)
                            console.error(this.name(), 'compute returned void 0');
                        $me_atom2.pure_compute_timing += performance.now() - start;
                        $me_atom2.pure_compute_count++;
                    }
                    catch (e) {
                        console.error(e);
                        result.state = e;
                    }
                    return result;
                });
            }
            _apply(next_value, force = false) {
                const fn_apply = this.fn_apply;
                if (fn_apply && (force || !$$.$me_equal(next_value, this._value))) {
                    const prev = this._value;
                    this._value = next_value;
                    this.update_helper('apply', () => {
                        const keys = this._key_provider() || {};
                        const ret = fn_apply.call(this, Object.assign({ atom: this, prev, val: next_value }, keys));
                        if (ret !== void 0)
                            next_value = ret;
                        return null;
                    });
                }
                return next_value;
            }
            update_helper(update_kind, fn) {
                const ss = $me_atom2._update_atoms[update_kind];
                if (ss.has(this.path)) {
                    console.error(`Циклическая ${update_kind}-зависимость`, [this.path.toString()].concat([...$me_atom2._update_atoms[update_kind]]
                        .map(item => item[0].toString())
                        .reverse()));
                    return null;
                }
                ss.set(this.path, true);
                const prev = $$.a.curr;
                $$.a.curr = this;
                const ret = fn();
                $$.a.curr = prev;
                ss.delete(this.path);
                return ret;
            }
            _key_provider() {
                if (this.path.tail === '#masters' || this.path.tail === '#keys')
                    return this.parent()._key_provider();
                if (this.path.ent !== $$.$me_atom2_entity_enum.key)
                    return null;
                if (this._key_provider_cache)
                    return this._key_provider_cache;
                const result = { len_key: 0 };
                let atom = this;
                let key_enum;
                let key;
                let keys;
                while (atom.path.ent === $$.$me_atom2_entity_enum.key) {
                    result.len_key++;
                    if (!key)
                        key = Array();
                    if (!keys)
                        keys = Array();
                    if (!key_enum)
                        key_enum = Array();
                    key.unshift(atom.path.tail);
                    atom = atom.parent();
                    keys = atom._key_gen.masters.concat(keys);
                    const key_name = atom._key_gen.masters[0];
                    const masters_store = atom._key_gen._masters_store;
                    if (masters_store) {
                        const atom_master = masters_store[key_name];
                        if (atom_master) {
                            key_enum = [atom_master.value()].concat(key_enum);
                        }
                        else {
                        }
                    }
                    else {
                    }
                }
                if (result.len_key) {
                    result.key = key;
                    result.keys = keys;
                    result.key_enum = key_enum;
                }
                return (this._key_provider_cache = result);
            }
            set_state(val, state2spread) {
                this._state = val;
                if (this.fn_apply &&
                    (val === $me_atom2_state_enum.invalid || val === $me_atom2_state_enum.need_check)) {
                    if (this.path.tail != '#clientRect' || $$.$me_atom2_event_mousemove_last && !$$.$me_atom2_event_mousemove_to_process) {
                        $me_atom2.add_to_update(this);
                    }
                    else {
                        const entity = this.parent(true);
                        if (entity instanceof $$.$me_atom2_elem) {
                            const elem = entity;
                            if (elem.node.style.width == 'auto' ||
                                elem.node.style.height == 'auto' ||
                                (() => {
                                    const prop_width = $$.$me_atom2_entity.root().by_path($$.$me_atom2_path.fromString('.#width'));
                                    const prop_height = $$.$me_atom2_entity.root().by_path($$.$me_atom2_path.fromString('.#height'));
                                    return prop_width && prop_height && (prop_width.value() == null || prop_height.value() == null);
                                })) {
                                $me_atom2.add_to_update(this);
                            }
                            else {
                            }
                        }
                    }
                }
                $me_atom2.set_state_count++;
                if (!this._slaves)
                    return;
                $me_atom2._spread_atoms.set(this, val);
                for (let [atom_slave, name_master] of this._slaves) {
                    atom_slave.set_state_slave(name_master, state2spread !== void 0 ? state2spread : val);
                }
                $me_atom2._spread_atoms.delete(this);
            }
            set_state_slave(name_master, val) {
                if ($me_atom2._spread_atoms.has(this)) {
                    $$.$me_throw('Циклическая spread-зависомость', [[this.name(), val]].concat([...$me_atom2._spread_atoms].map(item => [item[0].name(), item[1]]).reverse()), ...[this].concat([...$me_atom2._spread_atoms].map(item => item[0]).reverse()));
                }
                if (this._state instanceof Set && typeof val == 'number') {
                    this.no_wait_for_master(name_master);
                }
                else if ((typeof this._state == 'string' || this._state instanceof Error) && typeof val == 'number') {
                    this.set_state($me_atom2_state_enum.invalid);
                }
                else if (val instanceof Set || typeof val == 'string' || val instanceof Error) {
                    if (!(this._state instanceof Set))
                        this._state = new Set();
                    this._state.add(name_master);
                }
                else if (this._state === $me_atom2_state_enum.valid &&
                    (val == $me_atom2_state_enum.need_check || val == $me_atom2_state_enum.invalid)) {
                    this.set_state($me_atom2_state_enum.need_check);
                }
            }
            _key_idx_changed(p) {
                if ($$.$me_debug)
                    console.log(this, p);
                if (this._entities && this._entities.key) {
                    const entities_key = this._entities.key;
                    for (const k in entities_key) {
                        entities_key[k]._key_idx_changed({
                            key: p.key.concat(k),
                            change: Object.assign({}, p.change, { i_key: p.change.i_key - 1 }),
                        });
                    }
                }
                else if (this._fn_key_idx_changed) {
                    let path = this.path;
                    let n = 0;
                    while (path.ent === $$.$me_atom2_entity_enum.key) {
                        n++;
                        path = path.path;
                    }
                    p.change.i_key = n - 1 + p.change.i_key;
                    this._key_idx_changed_helper(p, this.by_path(path), n, []);
                }
            }
            _key_idx_changed_helper(p, parent, n, key) {
                if (n <= p.key.length) {
                    this._fn_key_idx_changed({
                        key: key.concat(p.key),
                        change: p.change,
                    });
                }
                else {
                    const entities_key = parent._entities.key;
                    for (const k in entities_key) {
                        this._key_idx_changed_helper(p, entities_key[k], n - 1, key.concat(k));
                    }
                }
            }
            key_enum() {
                const result = [];
                let atom = this;
                while (atom._key_gen) {
                    const key_enum = atom._key_gen.value();
                    result.push(key_enum);
                    atom = atom._entities.key[key_enum[0]];
                }
                return result;
            }
            _on_active() {
                if (this.fn_apply && this._state === $me_atom2_state_enum.invalid) {
                    $me_atom2.add_to_update(this);
                }
            }
            _masters() {
                const masters = this.masters;
                return (Array.isArray(masters) ? masters :
                    masters instanceof $me_atom2 ? masters.value() :
                        []);
            }
            static add_to_update(atom) {
                const to_update = atom.path.tail == '#keys' ? $me_atom2.to_update_first :
                    atom.path.tail == '#masters' ? $me_atom2.to_update_second :
                        $me_atom2.to_update_third;
                to_update.add(atom);
                $$.$me_atom2_async();
            }
            static update_atoms(deadline, last_now) {
                const pre = performance.now() - last_now;
                let count = 0;
                const start = performance.now();
                while ($me_atom2.to_update_first.size ||
                    $me_atom2.to_update_second.size ||
                    $me_atom2.to_update_third.size) {
                    const to_update = $me_atom2.to_update_first.size ? $me_atom2.to_update_first :
                        $me_atom2.to_update_second.size ? $me_atom2.to_update_second :
                            $me_atom2.to_update_third;
                    for (const atom of to_update) {
                        to_update.delete(atom);
                        if (atom._active &&
                            atom._state != $me_atom2_state_enum.valid) {
                            atom.update();
                            count++;
                        }
                    }
                }
                return [count, pre];
            }
            static anim_start(anim, t) {
                if (anim.start == null)
                    anim.start = anim.progress == null ? t :
                        t - anim.delay - Math.min(1, anim.progress) * anim.duration;
            }
            static anim_active(anim, active) {
                if (!anim.path_active)
                    return;
                const atom_active = $$.$me_atom2_entity.root().by_path(anim.path_active);
                if (!atom_active)
                    return;
                atom_active.value(active);
            }
            static anim_stop(path) {
                if (!$me_atom2.anim_to_play.has(path))
                    return;
                const anim = $me_atom2.anim_to_play.get(path);
                $me_atom2.anim_to_play.delete(path);
                $me_atom2.anim_active(anim, false);
                $me_atom2.anim_fini(anim, path);
            }
            static anim_fini(anim, path) {
                if (anim.fini) {
                    const atom = $$.$me_atom2_entity.root().by_path(path);
                    if (atom instanceof $me_atom2) {
                        const prev = $$.a.curr;
                        $$.a.curr = atom;
                        anim.fini();
                        $$.a.curr = prev;
                    }
                }
            }
            static fn_compute_false() {
                return false;
            }
            static fn_compute_true() {
                return true;
            }
            static fn_compute_zero() {
                return 0;
            }
        }
        $me_atom2._update_atoms = {
            compute: new Map(),
            apply: new Map(),
        };
        $me_atom2._spread_atoms = new Map();
        $me_atom2.set_state_count = 0;
        $me_atom2._waiting_for_atom_def = {};
        $me_atom2.to_def = Array();
        $me_atom2.to_update_first = new Set();
        $me_atom2.to_update_second = new Set();
        $me_atom2.to_update_third = new Set();
        $me_atom2._update_order = ['#keys', '#masters', ''];
        $me_atom2._update_atoms_debug = false;
        $me_atom2.did_not_apply = false;
        $me_atom2.compute_timing = 0;
        $me_atom2.compute_count = 0;
        $me_atom2.update_timing = 0;
        $me_atom2.update_count = 0;
        $me_atom2.pure_compute_count = 0;
        $me_atom2.pure_compute_timing = 0;
        $me_atom2.anim_to_play = new Map();
        $$.$me_atom2 = $me_atom2;
        let $me_atom2_state_enum;
        (function ($me_atom2_state_enum) {
            $me_atom2_state_enum[$me_atom2_state_enum["invalid"] = 0] = "invalid";
            $me_atom2_state_enum[$me_atom2_state_enum["valid"] = 1] = "valid";
            $me_atom2_state_enum[$me_atom2_state_enum["need_check"] = 2] = "need_check";
        })($me_atom2_state_enum = $$.$me_atom2_state_enum || ($$.$me_atom2_state_enum = {}));
        function $me_atom2_anim(anim) {
            return new $me_atom2_anim_class(anim);
        }
        $$.$me_atom2_anim = $me_atom2_anim;
        class $me_atom2_anim_class {
            constructor(anim) {
                this._anim = Object.assign({}, anim, { delay: anim.delay || 0, duration: anim.duration || 200, easing: anim.easing || $$.$me_easing.easeInOutQuad });
            }
        }
        $$.$me_atom2_anim_class = $me_atom2_anim_class;
        $$.a = window.a = Object.assign((path_s, val, force) => {
            const relative_to = $$.a.curr || $$.$me_atom2_entity.root();
            const atom = relative_to.by_path_s(path_s);
            if (typeof atom === 'string')
                $$.$me_throw(`atom '${atom}' does not exist`);
            if (!(atom instanceof $me_atom2))
                $$.$me_throw(`entity '${atom}' is not $me_atom2`, atom);
            return atom.value(val, force);
        }, {
            root: () => $$.$me_atom2_entity.root(),
            get(path_s) {
                const relative_to = $$.a.curr || $$.$me_atom2_entity.root();
                return !path_s ? relative_to : relative_to.by_path_s(path_s);
            },
            dispatch(path, dispatch_name, dispatch_arg) {
                const entity = path instanceof $$.$me_atom2_path ? $$.$me_atom2_entity.root().by_path(path) :
                    path ? $$.a.get(path) :
                        $$.a.curr instanceof $$.$me_atom2_ec ? $$.a.curr :
                            $$.a.curr.parent(true);
                if (typeof entity == 'string')
                    $$.$me_throw(`${entity} does not exist`);
                if (!(entity instanceof $$.$me_atom2_ec))
                    $$.$me_throw(`${entity.name()} is not $me_atom2_ec`, entity);
                const ec = entity;
                if (!dispatch_name)
                    dispatch_name = $$.a.curr.name();
                const ret = ec.dispatch(dispatch_name, dispatch_arg);
                if (!ret)
                    $$.$me_throw(`failed dispatch("${dispatch_name}", ${dispatch_arg}) on ${ec.name()}`);
                return dispatch_arg;
            },
            update(path_s, fn, force) {
                const relative_to = $$.a.curr || $$.$me_atom2_entity.root();
                const atom = relative_to.by_path_s(path_s);
                if (typeof atom === 'string')
                    $$.$me_throw(`atom '${atom}' does not exist`);
                if (!(atom instanceof $me_atom2))
                    $$.$me_throw(`entity '${atom}' is not $me_atom2`, atom);
                const val = atom.value();
                const ret = fn(val);
                if (ret === void 0)
                    $$.$me_throw('update returned undefined for val', val);
                atom.value(ret, force);
                return ret;
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//atom2.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $me_atom2_ctx_rect(p) {
            ctx_rect_helper(p);
            if (!p.stroke ||
                (null == p.stroke.ctxWidth || typeof p.stroke.ctxWidth == 'number') &&
                    (null == p.stroke.style || typeof p.stroke.style == 'string')) {
                ctx_rect_rounded(p, p.stroke && p.stroke.ctxWidth || 0);
                fill_stroke(Object.assign({}, p, { stroke: p.stroke && { ctxWidth: p.stroke.ctxWidth, style: p.stroke.style } }));
            }
            else {
                if (!(p.fillStyle == 'transparent' || p.fillStyle == null)) {
                    ctx_rect_rounded(p);
                    fill(Object.assign({}, p));
                }
                const ctxStrokeStyleLeft = (typeof p.stroke.style == 'string' ? p.stroke.style : p.stroke.style.left) || 'transparent';
                const ctxStrokeWidthLeft = typeof p.stroke.ctxWidth == 'number' ? p.stroke.ctxWidth : p.stroke.ctxWidth.left || 0;
                const ctxStrokeStyleTop = (typeof p.stroke.style == 'string' ? p.stroke.style : p.stroke.style.top) || 'transparent';
                const ctxStrokeWidthTop = typeof p.stroke.ctxWidth == 'number' ? p.stroke.ctxWidth : p.stroke.ctxWidth.top || 0;
                const ctxStrokeStyleRight = (typeof p.stroke.style == 'string' ? p.stroke.style : p.stroke.style.right) || 'transparent';
                const ctxStrokeWidthRight = typeof p.stroke.ctxWidth == 'number' ? p.stroke.ctxWidth : p.stroke.ctxWidth.right || 0;
                const ctxStrokeStyleBottom = (typeof p.stroke.style == 'string' ? p.stroke.style : p.stroke.style.bottom) || 'transparent';
                const ctxStrokeWidthBottom = typeof p.stroke.ctxWidth == 'number' ? p.stroke.ctxWidth : p.stroke.ctxWidth.bottom || 0;
                let x, y;
                const ctxBorderRadiusLeftTop = !ctxStrokeWidthLeft || !ctxStrokeWidthTop || ctxStrokeStyleLeft == 'transparent' || ctxStrokeStyleTop == 'transparent' ? 0 :
                    p.ctxBorderRadius && (typeof p.ctxBorderRadius == 'number' ? p.ctxBorderRadius : p.ctxBorderRadius.leftTop) || 0;
                const ctxBorderRadiusRightTop = !ctxStrokeWidthRight || !ctxStrokeWidthTop || ctxStrokeStyleRight == 'transparent' || ctxStrokeStyleTop == 'transparent' ? 0 :
                    p.ctxBorderRadius && (typeof p.ctxBorderRadius == 'number' ? p.ctxBorderRadius : p.ctxBorderRadius.rightTop) || 0;
                const ctxBorderRadiusRightBottom = !ctxStrokeWidthRight || !ctxStrokeWidthBottom || ctxStrokeStyleRight == 'transparent' || ctxStrokeStyleBottom == 'transparent' ? 0 :
                    p.ctxBorderRadius && (typeof p.ctxBorderRadius == 'number' ? p.ctxBorderRadius : p.ctxBorderRadius.rightBottom) || 0;
                const ctxBorderRadiusLeftBottom = !ctxStrokeWidthLeft || !ctxStrokeWidthBottom || ctxStrokeStyleLeft == 'transparent' || ctxStrokeStyleBottom == 'transparent' ? 0 :
                    p.ctxBorderRadius && (typeof p.ctxBorderRadius == 'number' ? p.ctxBorderRadius : p.ctxBorderRadius.leftBottom) || 0;
                if (ctxStrokeWidthTop && ctxStrokeStyleTop != 'transparent') {
                    p.ctx.beginPath();
                    p.ctx.moveTo(Math.round(x = p.ctxLeft + (ctxStrokeStyleLeft == 'transparent' ? 0 : ctxStrokeWidthLeft / 2)), Math.round(y = p.ctxTop + ctxBorderRadiusLeftTop + ctxStrokeWidthTop / 2));
                    if (ctxStrokeWidthLeft == ctxStrokeWidthTop && ctxStrokeStyleLeft == ctxStrokeStyleTop) {
                        p.ctx.arc(Math.round(x += ctxBorderRadiusLeftTop), Math.round(y -= 0), Math.round(ctxBorderRadiusLeftTop), Math.PI, -Math.PI / 2, false);
                    }
                    else if (ctxStrokeWidthLeft && ctxStrokeStyleLeft != 'transparent') {
                        console.error({ ctxStrokeWidthLeft, ctxStrokeWidthTop, ctxStrokeStyleLeft, ctxStrokeStyleTop });
                    }
                    p.ctx.lineTo(Math.round(x += p.ctxWidth - ctxBorderRadiusLeftTop - ctxBorderRadiusRightTop - (ctxStrokeStyleLeft == 'transparent' ? 0 : ctxStrokeWidthLeft / 2) - (ctxStrokeStyleRight == 'transparent' ? 0 : ctxStrokeWidthRight / 2)), Math.round(y -= ctxBorderRadiusLeftTop));
                    if (ctxStrokeWidthRight != ctxStrokeWidthTop || ctxStrokeStyleRight != ctxStrokeStyleTop) {
                        stroke({ ctx: p.ctx, stroke: { style: ctxStrokeStyleTop, ctxWidth: ctxStrokeWidthTop } });
                        x = null;
                    }
                }
                if (ctxStrokeWidthRight && ctxStrokeStyleRight != 'transparent') {
                    if (x == null) {
                        p.ctx.beginPath();
                        p.ctx.moveTo(Math.round(x = p.ctxLeft + p.ctxWidth - ctxBorderRadiusLeftTop - ctxBorderRadiusRightTop - ctxStrokeWidthLeft / 2), Math.round(y = p.ctxTop + ctxStrokeWidthTop / 2));
                    }
                    if (ctxStrokeWidthTop == ctxStrokeWidthRight && ctxStrokeStyleTop == ctxStrokeStyleRight) {
                        p.ctx.arc(Math.round(x += 0), Math.round(y += ctxBorderRadiusRightTop), Math.round(ctxBorderRadiusRightTop), -Math.PI / 2, 0, false);
                    }
                    else if (ctxStrokeWidthTop && ctxStrokeStyleTop != 'transparent') {
                        console.error({ ctxStrokeWidthTop, ctxStrokeWidthRight, ctxStrokeStyleTop, ctxStrokeStyleRight });
                    }
                    p.ctx.lineTo(Math.round(x += ctxBorderRadiusRightTop), Math.round(y += p.ctxHeight - ctxBorderRadiusRightTop - ctxBorderRadiusRightBottom - ctxStrokeWidthTop / 2 - ctxStrokeWidthBottom / 2));
                    if (ctxStrokeWidthBottom != ctxStrokeWidthRight || ctxStrokeStyleBottom != ctxStrokeStyleRight) {
                        stroke({ ctx: p.ctx, stroke: { style: ctxStrokeStyleRight, ctxWidth: ctxStrokeWidthRight } });
                        x = null;
                    }
                }
                if (ctxStrokeWidthBottom && ctxStrokeStyleBottom != 'transparent') {
                    if (x == null) {
                        p.ctx.beginPath();
                        p.ctx.moveTo(Math.round(x = p.ctxLeft + p.ctxWidth - (ctxStrokeStyleRight == 'transparent' ? 0 : ctxStrokeWidthRight / 2)), Math.round(y = p.ctxTop + p.ctxHeight - ctxBorderRadiusRightBottom - ctxStrokeWidthBottom / 2));
                    }
                    if (ctxStrokeWidthRight == ctxStrokeWidthBottom && ctxStrokeStyleRight == ctxStrokeStyleBottom) {
                        p.ctx.arc(Math.round(x -= ctxBorderRadiusRightBottom), Math.round(y += 0), Math.round(ctxBorderRadiusRightBottom), 0, Math.PI / 2, false);
                    }
                    else if (ctxStrokeWidthRight && ctxStrokeStyleRight != 'transparent') {
                        console.error({ ctxStrokeWidthRight, ctxStrokeWidthBottom, ctxStrokeStyleRight, ctxStrokeStyleBottom });
                    }
                    p.ctx.lineTo(Math.round(x -= p.ctxWidth - ctxBorderRadiusLeftBottom - ctxBorderRadiusRightBottom - (ctxStrokeStyleRight == 'transparent' ? 0 : ctxStrokeWidthRight / 2) - (ctxStrokeStyleLeft == 'transparent' ? 0 : ctxStrokeWidthLeft / 2)), Math.round(y += ctxBorderRadiusRightBottom));
                    if (ctxStrokeWidthLeft != ctxStrokeWidthBottom || ctxStrokeStyleLeft != ctxStrokeStyleBottom) {
                        stroke({ ctx: p.ctx, stroke: { style: ctxStrokeStyleBottom, ctxWidth: ctxStrokeWidthBottom } });
                        x = null;
                    }
                }
                if (ctxStrokeWidthLeft && ctxStrokeStyleLeft != 'transparent') {
                    if (x == null) {
                        p.ctx.beginPath();
                        p.ctx.moveTo(Math.round(x = p.ctxLeft + ctxBorderRadiusLeftTop + ctxStrokeWidthLeft / 2), Math.round(y = p.ctxTop + p.ctxHeight - ctxBorderRadiusLeftTop - ctxStrokeWidthBottom / 2));
                    }
                    if (ctxStrokeWidthBottom == ctxStrokeWidthLeft && ctxStrokeStyleBottom == ctxStrokeStyleLeft) {
                        p.ctx.arc(Math.round(x -= 0), Math.round(y -= ctxBorderRadiusLeftBottom), Math.round(ctxBorderRadiusLeftBottom), Math.PI / 2, Math.PI, false);
                    }
                    else if (ctxStrokeWidthBottom && ctxStrokeStyleBottom != 'transparent') {
                        console.error({ ctxStrokeWidthLeft, ctxStrokeWidthTop, ctxStrokeStyleLeft, ctxStrokeStyleTop });
                    }
                    p.ctx.lineTo(Math.round(x -= ctxBorderRadiusLeftBottom), Math.round(y -= p.ctxHeight - ctxBorderRadiusLeftTop - ctxBorderRadiusLeftBottom - ctxStrokeWidthTop / 2 - ctxStrokeWidthBottom / 2));
                    stroke({ ctx: p.ctx, stroke: { style: ctxStrokeStyleLeft, ctxWidth: ctxStrokeWidthLeft } });
                }
            }
        }
        $$.$me_atom2_ctx_rect = $me_atom2_ctx_rect;
        function ctx_rect_rounded(p, ctxStrokeWidth = 0) {
            p.ctx.beginPath();
            if (!p.ctxBorderRadius) {
                p.ctx.rect(Math.round(p.ctxLeft + ctxStrokeWidth / 2), Math.round(p.ctxTop + ctxStrokeWidth / 2), Math.round(p.ctxWidth - ctxStrokeWidth), Math.round(p.ctxHeight - ctxStrokeWidth));
            }
            else {
                let x, y;
                const ctxBorderRadiusLeftTop = p.ctxBorderRadius && (typeof p.ctxBorderRadius == 'number' ? p.ctxBorderRadius : p.ctxBorderRadius.leftTop) || 0;
                const ctxBorderRadiusRightTop = p.ctxBorderRadius && (typeof p.ctxBorderRadius == 'number' ? p.ctxBorderRadius : p.ctxBorderRadius.rightTop) || 0;
                const ctxBorderRadiusRightBottom = p.ctxBorderRadius && (typeof p.ctxBorderRadius == 'number' ? p.ctxBorderRadius : p.ctxBorderRadius.rightBottom) || 0;
                const ctxBorderRadiusLeftBottom = p.ctxBorderRadius && (typeof p.ctxBorderRadius == 'number' ? p.ctxBorderRadius : p.ctxBorderRadius.leftBottom) || 0;
                p.ctx.moveTo(Math.round(x = p.ctxLeft + ctxStrokeWidth / 2), Math.round(y = p.ctxTop + ctxBorderRadiusLeftTop + ctxStrokeWidth / 2));
                p.ctx.arc(Math.round(x += ctxBorderRadiusLeftTop), Math.round(y -= 0), Math.round(ctxBorderRadiusLeftTop), Math.PI, -Math.PI / 2, false);
                p.ctx.lineTo(Math.round(x += p.ctxWidth - ctxBorderRadiusLeftTop - ctxBorderRadiusRightTop - ctxStrokeWidth), Math.round(y -= ctxBorderRadiusLeftTop));
                p.ctx.arc(Math.round(x += 0), Math.round(y += ctxBorderRadiusRightTop), Math.round(ctxBorderRadiusRightTop), -Math.PI / 2, 0, false);
                p.ctx.lineTo(Math.round(x += ctxBorderRadiusRightTop), Math.round(y += p.ctxHeight - ctxBorderRadiusRightTop - ctxBorderRadiusRightBottom - ctxStrokeWidth));
                p.ctx.arc(Math.round(x -= ctxBorderRadiusRightBottom), Math.round(y += 0), Math.round(ctxBorderRadiusRightBottom), 0, Math.PI / 2, false);
                p.ctx.lineTo(Math.round(x -= p.ctxWidth - ctxBorderRadiusLeftBottom - ctxBorderRadiusRightTop - ctxStrokeWidth), Math.round(y += ctxBorderRadiusRightBottom));
                p.ctx.arc(Math.round(x -= 0), Math.round(y -= ctxBorderRadiusLeftBottom), Math.round(ctxBorderRadiusLeftBottom), Math.PI / 2, Math.PI, false);
                p.ctx.closePath();
            }
        }
        function ctx_rect_helper(p) {
            if (void 0 === p.ctxLeft && p.ctxRect)
                p.ctxLeft = p.ctxRect.left;
            if (void 0 === p.ctxTop && p.ctxRect)
                p.ctxTop = p.ctxRect.top;
            if (void 0 === p.ctxWidth && p.ctxRect)
                p.ctxWidth = p.ctxRect.right - p.ctxRect.left;
            if (void 0 === p.ctxHeight && p.ctxRect)
                p.ctxHeight = p.ctxRect.bottom - p.ctxRect.top;
        }
        function $me_atom2_ctx_cross(p) {
            ctx_rect_helper(p);
            const ctxStrokeWidth = p.stroke && p.stroke.ctxWidth || 0;
            const ctxSemiLineWidth = ctxStrokeWidth / 2;
            const ctxLeft = p.ctxLeft + ctxSemiLineWidth;
            const ctxRight = p.ctxLeft + p.ctxWidth - ctxSemiLineWidth;
            const ctxTop = p.ctxTop + ctxSemiLineWidth;
            const ctxBottom = p.ctxTop + p.ctxHeight - ctxSemiLineWidth;
            p.ctx.beginPath();
            p.ctx.moveTo(ctxLeft, ctxTop);
            p.ctx.lineTo(ctxRight, ctxBottom);
            p.ctx.moveTo(ctxLeft, ctxBottom);
            p.ctx.lineTo(ctxRight, ctxTop);
            fill_stroke(p);
        }
        $$.$me_atom2_ctx_cross = $me_atom2_ctx_cross;
        function $me_atom2_ctxCenterOf(p) {
            ctx_rect_helper(p);
            return {
                ctxCenterX: p.ctxLeft + p.ctxWidth / 2,
                ctxCenterY: p.ctxTop + p.ctxHeight / 2,
            };
        }
        $$.$me_atom2_ctxCenterOf = $me_atom2_ctxCenterOf;
        function $me_atom2_ctxWidthOf(p) {
            ctx_rect_helper(p);
            return p.ctxWidth;
        }
        $$.$me_atom2_ctxWidthOf = $me_atom2_ctxWidthOf;
        function $me_atom2_ctxHeightOf(p) {
            ctx_rect_helper(p);
            return p.ctxHeight;
        }
        $$.$me_atom2_ctxHeightOf = $me_atom2_ctxHeightOf;
        function $me_atom2_ctx_circle(p) {
            const ctxStrokeWidth = p.stroke && p.stroke.ctxWidth || 0;
            const ctxSemiLineWidth = ctxStrokeWidth / 2;
            p.ctx.beginPath();
            p.ctx.arc(Math.round(p.ctxCenterX), Math.round(p.ctxCenterY), Math.round(p.ctxRadius - ctxSemiLineWidth), 0, 2 * Math.PI);
            p.ctx.closePath();
            fill_stroke(p);
        }
        $$.$me_atom2_ctx_circle = $me_atom2_ctx_circle;
        function fill_stroke(p) {
            fill(p);
            stroke(p);
        }
        function fill(p) {
            if (p.fillStyle && p.fillStyle != 'transparent') {
                p.ctx.fillStyle = p.fillStyle;
                p.ctx.fill();
            }
        }
        function stroke(p) {
            if (p.stroke && p.stroke.ctxWidth && p.stroke.style && p.stroke.style != 'transparent') {
                p.ctx.strokeStyle = p.stroke.style;
                p.ctx.lineWidth = p.stroke.ctxWidth;
                p.ctx.stroke();
            }
        }
        function $me_atom2_ctx_check(p) {
            let x, y;
            p.ctx.beginPath();
            p.ctx.moveTo(x = p.ctxLeft, y = p.ctxTop + p.ctxHeight * (1 - p.mu));
            p.ctx.lineTo(x += p.ctxWidth * p.lambda, y += p.ctxHeight * p.mu);
            p.ctx.lineTo(x += p.ctxWidth * (1 - p.lambda), y -= p.ctxHeight);
            stroke(p);
        }
        $$.$me_atom2_ctx_check = $me_atom2_ctx_check;
        function $me_atom2_ctx_buttom_line_draw(pp) {
            const { p, fn, name_atom } = pp;
            const val = (prop) => name_atom && name_atom[prop] ? name_atom[prop] :
                (name_atom && name_atom.prefix ? name_atom && name_atom.prefix : '.') + prop;
            const ctxLineWidth = $$.a(val('lineWidth')) * p.pixelRatio;
            const ctxLineY = p.ctxRect.bottom - ctxLineWidth / 2;
            p.ctx.beginPath();
            if (fn) {
                fn(ctxLineY);
            }
            else {
                p.ctx.moveTo(p.ctxRect.left, ctxLineY);
                p.ctx.lineTo(p.ctxRect.right, ctxLineY);
            }
            p.ctx.lineWidth = ctxLineWidth;
            p.ctx.strokeStyle = $$.a(val('colorLine'));
            p.ctx.stroke();
        }
        $$.$me_atom2_ctx_buttom_line_draw = $me_atom2_ctx_buttom_line_draw;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ctx.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        let $me_atom2_pinch_mode;
        (function ($me_atom2_pinch_mode) {
            $me_atom2_pinch_mode[$me_atom2_pinch_mode["justStarted"] = 0] = "justStarted";
            $me_atom2_pinch_mode[$me_atom2_pinch_mode["init"] = 1] = "init";
            $me_atom2_pinch_mode[$me_atom2_pinch_mode["move"] = 2] = "move";
            $me_atom2_pinch_mode[$me_atom2_pinch_mode["fini"] = 3] = "fini";
        })($me_atom2_pinch_mode = $$.$me_atom2_pinch_mode || ($$.$me_atom2_pinch_mode = {}));
        class $me_atom2_pinch_class {
            start(event) {
                this.mode = $me_atom2_pinch_mode.justStarted;
                this._start = event;
                this.clientX0 = event.touches[0].clientX;
                this.clientY0 = event.touches[0].clientY;
                this.clientX1 = event.touches[1].clientX;
                this.clientY1 = event.touches[1].clientY;
                this.distInitial = Math.hypot(this.clientX0 - this.clientX1, this.clientY0 - this.clientY1);
            }
            accum(event) {
                this.clientX0 = event.touches[0].clientX;
                this.clientY0 = event.touches[0].clientY;
                this.clientX1 = event.touches[1].clientX;
                this.clientY1 = event.touches[1].clientY;
            }
            move(event) {
                this._end = event;
                this.center = {
                    x: (this.clientX0 + this.clientX1) / 2,
                    y: (this.clientY0 + this.clientY1) / 2,
                };
                this.distCurrent = Math.hypot(this.clientX0 - this.clientX1, this.clientY0 - this.clientY1);
                this.clientX0 = event.touches[0].clientX;
                this.clientX1 = event.touches[1].clientX;
                this.clientY0 = event.touches[0].clientY;
                this.clientY1 = event.touches[1].clientY;
                if (this.mode == $me_atom2_pinch_mode.justStarted) {
                    this.mode = $me_atom2_pinch_mode.init;
                }
                $$.$me_atom2_async();
            }
            cancel() {
                this.mode = null;
            }
            end(event) {
                this.mode = $me_atom2_pinch_mode.fini;
                $$.$me_atom2_async();
            }
            raf(t) {
                if ($$.$me_atom2_pinch.mode == $me_atom2_pinch_mode.fini && this.distCurrent == null) {
                    this.distCurrent = this.distPrev;
                }
                const result = this.mode == null ||
                    this.distCurrent == null ||
                    false
                    ?
                        null :
                    {
                        start: this._start,
                        end: this._end,
                        distInitial: this.distInitial,
                        distCurrent: this.distCurrent,
                        scale: this.distCurrent / this.distInitial,
                        center: this.center,
                    };
                if (result)
                    this.distPrev = this.distCurrent;
                return result;
            }
        }
        $$.$me_atom2_pinch_class = $me_atom2_pinch_class;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pinch.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_atom2_async_raf = (t) => {
            const start = performance.now();
            const stat = new Map();
            if ($$.$me_atom2.anim_to_play.size) {
                $$.$me_atom2.set_state_count = 0;
                fill_stat(stat, 'anim', last_now => {
                    const pre = performance.now() - last_now;
                    const anim_to_play = new Array();
                    for (const [path, anim] of $$.$me_atom2.anim_to_play) {
                        if (anim.progress != null)
                            if (anim.progress >= 1) {
                                $$.$me_atom2.anim_stop(path);
                            }
                            else {
                                const atom = $$.$me_atom2.by_path(path);
                                if (!atom) {
                                    $$.$me_atom2.anim_stop(path);
                                }
                                else {
                                    anim_to_play.push([atom, anim]);
                                }
                            }
                    }
                    const [count, needReplay] = $me_atom2_async_anim(anim_to_play, t, start);
                    if (needReplay)
                        $$.$me_atom2_async();
                    return [count, pre];
                }, t);
            }
            for (const op in ops_event)
                fill_stat(stat, op, ops_event[op], t);
            $$.$me_atom2_async_stat_show(stat, start, 'ANIMATION_FRAME');
        };
        function $me_atom2_async_anim(anim_to_play, t, start) {
            let needReplay = false, count = 0;
            for (const [atom, anim] of anim_to_play) {
                count += 1;
                $$.$me_atom2.anim_start(anim, t);
                anim.progress = Math.min(1, (t - anim.start - anim.delay) / anim.duration);
                if (!anim.fn && typeof anim.to !== 'number')
                    $$.$me_throw('anim.fn must be specified');
                anim.value = anim.fn ?
                    anim.fn({ from: anim.from, to: anim.to, easing: anim.easing, progress: anim.progress }) :
                    anim.from + (anim.to - anim.from) * anim.easing(anim.progress);
                if ($$.$me_atom2.is_valid_value(anim.value)) {
                    atom.set_value(anim.value);
                }
                else {
                    console.error(`anim '${atom.name()}' got invalid value ${anim.value}`);
                }
                needReplay = true;
            }
            return [count, needReplay];
        }
        $$.$me_atom2_async_anim = $me_atom2_async_anim;
        const ops_event = {
            mousemove: (last_now) => {
                const pre = performance.now() - last_now;
                let count = 0;
                if ($$.$me_atom2_event_mousemove_to_process) {
                    $$.$me_atom2_event_process('mousemove', $$.$me_atom2_event_mousemove_to_process);
                    $$.$me_atom2_event_mousemove_to_process = null;
                    count = 1;
                }
                return [count, pre];
            },
            wheel: (last_now) => {
                const pre = performance.now() - last_now;
                let count = 0;
                if ($$.$me_atom2_event_wheel_to_process) {
                    $$.$me_atom2_event_process('wheel', $$.$me_atom2_event_wheel_to_process);
                    $$.$me_atom2_event_wheel_to_process = null;
                    count = 1;
                }
                return [count, pre];
            },
            pinch: (last_now, t) => {
                const pre = performance.now() - last_now;
                let count = 0;
                if ($$.$me_atom2_pinch && $$.$me_atom2_pinch.mode != null) {
                    const event_pinch_to_process = $$.$me_atom2_pinch.raf(t);
                    if (event_pinch_to_process) {
                        if ($$.$me_atom2_pinch.mode == $$.$me_atom2_pinch_mode.init) {
                            $$.$me_atom2_event_process('pinchInit', event_pinch_to_process);
                            $$.$me_atom2_pinch.mode = $$.$me_atom2_pinch_mode.move;
                        }
                        if ($$.$me_atom2_pinch.mode == $$.$me_atom2_pinch_mode.move) {
                            $$.$me_atom2_event_process('pinch', event_pinch_to_process);
                        }
                        if ($$.$me_atom2_pinch.mode == $$.$me_atom2_pinch_mode.fini) {
                            $$.$me_atom2_event_process('pinchFini', event_pinch_to_process);
                            $$.$me_atom2_pinch.mode = null;
                        }
                        count = 1;
                    }
                }
                return [count, pre];
            },
            wheelTouch: (last_now, t) => {
                const pre = performance.now() - last_now;
                let count = 0;
                if ($$.$me_atom2_wheel_touch && $$.$me_atom2_wheel_touch.mode != null) {
                    const event_wheel_touch_to_process = $$.$me_atom2_wheel_touch.raf(t);
                    if (event_wheel_touch_to_process) {
                        if ($$.$me_atom2_wheel_touch.mode == $$.$me_atom2_wheel_synth_mode.init) {
                            $$.$me_atom2_event_process('wheelTouchInit', event_wheel_touch_to_process);
                            $$.$me_atom2_wheel_touch.mode = $$.$me_atom2_wheel_synth_mode.move;
                        }
                        if ($$.$me_atom2_wheel_touch.mode == $$.$me_atom2_wheel_synth_mode.move || $$.$me_atom2_wheel_synth_mode.end) {
                            $$.$me_atom2_event_process('wheelTouch', event_wheel_touch_to_process);
                        }
                        if ($$.$me_atom2_wheel_touch.mode == $$.$me_atom2_wheel_synth_mode.fini) {
                            $$.$me_atom2_event_process('wheelTouchFini', event_wheel_touch_to_process);
                            $$.$me_atom2_wheel_touch.mode = null;
                        }
                        count = 1;
                    }
                }
                return [count, pre];
            },
            wheelDrag: (last_now, t) => {
                const pre = performance.now() - last_now;
                let count = 0;
                if ($$.$me_atom2_wheel_drag && $$.$me_atom2_wheel_drag.mode != null) {
                    const event_wheel_drag_to_process = $$.$me_atom2_wheel_drag.raf(t);
                    if (event_wheel_drag_to_process) {
                        if ($$.$me_atom2_wheel_drag.mode == $$.$me_atom2_wheel_synth_mode.init) {
                            $$.$me_atom2_event_process('wheelDragInit', event_wheel_drag_to_process);
                            $$.$me_atom2_wheel_drag.mode = $$.$me_atom2_wheel_synth_mode.move;
                        }
                        if ($$.$me_atom2_wheel_drag.mode == $$.$me_atom2_wheel_synth_mode.move || $$.$me_atom2_wheel_synth_mode.end) {
                            $$.$me_atom2_event_process('wheelDrag', event_wheel_drag_to_process);
                        }
                        if ($$.$me_atom2_wheel_drag.mode == $$.$me_atom2_wheel_synth_mode.fini) {
                            $$.$me_atom2_event_process('wheelDragFini', event_wheel_drag_to_process);
                            $$.$me_atom2_wheel_drag.mode = null;
                        }
                        count = 1;
                    }
                }
                return [count, pre];
            },
        };
        function fill_stat(stat, name, fn, t) {
            const start = performance.now();
            const [count, pre] = fn(start, t);
            $$.$me_atom2_async_stat_update(stat, name, count, pre, performance.now() - start);
        }
        $$.$me_atom2_async({ fn: $$.$me_atom2_async_raf, order: 0 });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//raf.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function init_ric() {
            const ops = {
                init_asyncComplete: (deadline, last_now) => {
                    if (!$$.$me_atom2_async_complete()) {
                        const root_entities = $$.$me_atom2_entity.root()._entities;
                        if (root_entities && root_entities.prop) {
                            for (const tail of ['#asyncComplete', '#asyncCompleteIncludingAnimate']) {
                                const atom = root_entities.prop[tail];
                                if (atom)
                                    atom.value(false);
                            }
                        }
                    }
                    return [0, 0];
                },
                remove_children: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    const count = $$.$me_atom2_elem.remove_children();
                    return [count, pre];
                },
                reorder_children: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    const count = $$.$me_atom2_elem.reorder_children();
                    return [count, pre];
                },
                def_atom: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    let count = 0;
                    while ($$.$me_atom2.to_def.length
                        && performance.now() < deadline) {
                        const def = $$.$me_atom2.to_def.shift();
                        if ($$.$me_atom2_entity.root().by_path(def.parent.path)) {
                            new $$.$me_atom2(def);
                            count++;
                        }
                    }
                    return [count, pre];
                },
                set_node_prop: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    const count = $$.$me_atom2_elem.lazy_prop_apply_all();
                    return [count, pre];
                },
                activate_entity: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    const count = $$.$me_atom2_entity.activate_entities();
                    return [count, pre];
                },
                upd_atom: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    const [count, pre2] = $$.$me_atom2.update_atoms(deadline, performance.now());
                    return [count, pre + pre2];
                },
                viewport: (deadline, last_now) => {
                    const root_entities = $$.$me_atom2_entity.root()._entities;
                    if (root_entities && root_entities.prop) {
                        for (const tail of ['#viewportChanged', '#viewportWidthChanged', '#viewportHeightChanged', '#pixelRatioChanged']) {
                            const atom = root_entities.prop[tail];
                            if (atom)
                                atom.value(false);
                        }
                    }
                    return [0, 0];
                },
                def_control: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    let count = 0;
                    while ($$.$me_atom2_control.to_def.length && performance.now() < deadline) {
                        const def = $$.$me_atom2_control.to_def.shift();
                        if ($$.$me_atom2_entity.root().by_path(def.parent.path)) {
                            new $$.$me_atom2_control(def);
                            count++;
                        }
                    }
                    return [count, pre];
                },
                def_elem: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    let count = 0;
                    while ($$.$me_atom2_elem.to_def.length && performance.now() < deadline) {
                        const def = $$.$me_atom2_elem.to_def.shift();
                        if ($$.$me_atom2_entity.root().by_path(def.parent.path)) {
                            new $$.$me_atom2_elem(def);
                            count++;
                        }
                    }
                    return [count, pre];
                },
                init_ec: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    let count = 0;
                    while ($$.$me_atom2_ec._to_init.length && performance.now() < deadline) {
                        const path = $$.$me_atom2_ec._to_init.shift();
                        const ec = $$.$me_atom2_entity.root().by_path(path);
                        if (!ec || !ec.active())
                            continue;
                        ec.init();
                        count++;
                    }
                    return [count, pre];
                },
                set_ready: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    for (const ec of $$.$me_atom2_ec.almost_ready)
                        ec._isReady(true);
                    const count = $$.$me_atom2_ec.almost_ready.size;
                    $$.$me_atom2_ec.almost_ready.clear();
                    return [count, pre];
                },
                render: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    let count = 0;
                    if ($$.$me_atom2_control._to_render.size)
                        for (const path of $$.$me_atom2_control._to_render) {
                            $$.$me_atom2_control._to_clean.add(path);
                        }
                    if ($$.$me_atom2_control._to_clean) {
                        $$.$me_atom2_control.clean($$.$me_atom2_control.zIndex_sort($$.$me_atom2_control._to_clean));
                        $$.$me_atom2_control._to_clean.clear();
                    }
                    if ($$.$me_atom2_control._to_render.size) {
                        count = $$.$me_atom2_control.render($$.$me_atom2_control.zIndex_sort($$.$me_atom2_control._to_render, true));
                        $$.$me_atom2_control._to_render.clear();
                    }
                    if ($$.$me_atom2_control._to_clean.size)
                        console.error($$.$me_atom2_control._to_clean.size);
                    $$.$me_atom2_control.fill_controls_cache_clear();
                    return [count, pre];
                },
                fini_asyncComplete: (deadline, last_now) => {
                    if ($$.$me_atom2_async_complete())
                        $$.a('/.#asyncComplete', true);
                    return [0, 0];
                },
                anim: (deadline, last_now, t) => {
                    const start = performance.now();
                    let needReplay = false;
                    const pre = performance.now() - last_now;
                    let count = 0;
                    const anim_to_play = new Array();
                    for (const [path, anim] of $$.$me_atom2.anim_to_play) {
                        if (anim.delay) {
                            $$.$me_atom2.anim_start(anim, t);
                            if ((t - anim.start) < anim.delay) {
                                needReplay = true;
                                continue;
                            }
                        }
                        if (anim.progress == null) {
                            const atom = $$.$me_atom2.by_path(path);
                            if (atom) {
                                anim_to_play.push([atom, anim]);
                            }
                            else {
                                $$.$me_atom2.anim_stop(path);
                            }
                        }
                    }
                    if (!$$.$me_atom2_async_complete()) {
                        needReplay = true;
                    }
                    else {
                        const [_count, _needReplay] = $$.$me_atom2_async_anim(anim_to_play, t, start);
                        count = _count;
                        needReplay = _needReplay;
                    }
                    if (needReplay)
                        $$.$me_atom2_async();
                    return [count, pre];
                },
                fini_asyncCompleteIncludingAnimate: (deadline, last_now) => {
                    if ($$.$me_atom2_async_complete(true))
                        $$.a('/.#asyncCompleteIncludingAnimate', true);
                    return [0, 0];
                },
            };
            for (const op in ops)
                $$.$me_atom2_async_ric({ name: op, fn: ops[op] });
        }
        init_ric();
        $$.$me_atom2_async_complete = (including_anim = false) => !($$.$me_atom2_elem.children_to_add.size ||
            $$.$me_atom2_elem.lazy_prop_apply_did() ||
            $$.$me_atom2_entity._to_activate.size ||
            $$.$me_atom2_control._to_clean.size ||
            $$.$me_atom2_control._to_render.size ||
            $$.$me_atom2.to_update_first.size ||
            $$.$me_atom2.to_update_second.size ||
            $$.$me_atom2.to_update_third.size ||
            $$.$me_atom2_control.to_def.length ||
            $$.$me_atom2_elem.to_def.length ||
            $$.$me_atom2.to_def.length ||
            $$.$me_atom2_ec._to_init.length ||
            including_anim && $$.$me_atom2.anim_to_play.size ||
            $$.$me_atom2_event_mousemove_to_process ||
            $$.$me_atom2_event_wheel_to_process ||
            false);
        const touchstart = (event) => {
            if (event.touches.length == 1) {
                if (!$$.$me_atom2_wheel_touch)
                    $$.$me_atom2_wheel_touch = new $$.$me_atom2_wheel_touch_class();
                $$.$me_atom2_wheel_touch.start(event);
            }
            else {
                touchAccu = {
                    clientX0: event.touches[0].clientX,
                    clientX1: event.touches[1].clientX,
                    clientY0: event.touches[0].clientY,
                    clientY1: event.touches[1].clientY,
                    deltaX0: 0,
                    deltaY0: 0,
                    deltaX1: 0,
                    deltaY1: 0,
                };
            }
            return $$.$me_atom2_event_process('touchstart', event);
        };
        let touchAccu;
        const touchAccu_threshold = 10;
        const touchmove = (event) => {
            event.preventDefault();
            if (event.touches.length == 1) {
                if ($$.$me_atom2_wheel_touch)
                    $$.$me_atom2_wheel_touch.move(event);
            }
            else {
                if (touchAccu) {
                    touchAccu.deltaX0 += event.touches[0].clientX - touchAccu.clientX0;
                    touchAccu.deltaX1 += event.touches[1].clientX - touchAccu.clientX1;
                    touchAccu.deltaY0 += event.touches[0].clientY - touchAccu.clientY0;
                    touchAccu.deltaY1 += event.touches[1].clientY - touchAccu.clientY1;
                    if ((Math.abs(touchAccu.deltaX0) < touchAccu_threshold ||
                        Math.abs(touchAccu.deltaX1) < touchAccu_threshold) &&
                        (Math.abs(touchAccu.deltaY0) < touchAccu_threshold ||
                            Math.abs(touchAccu.deltaY1) < touchAccu_threshold)) {
                        touchAccu.clientX0 = event.touches[0].clientX;
                        touchAccu.clientX1 = event.touches[1].clientX;
                        touchAccu.clientY0 = event.touches[0].clientY;
                        touchAccu.clientY1 = event.touches[1].clientY;
                    }
                    else {
                        if (Math.sign(touchAccu.deltaX0) *
                            Math.sign(touchAccu.deltaX1) +
                            Math.sign(touchAccu.deltaY0) *
                                Math.sign(touchAccu.deltaY1) +
                            0 >= 1) {
                            if (!$$.$me_atom2_wheel_touch)
                                $$.$me_atom2_wheel_touch = new $$.$me_atom2_wheel_touch_class();
                            $$.$me_atom2_wheel_touch.start(event);
                        }
                        else {
                            if (!$$.$me_atom2_pinch)
                                $$.$me_atom2_pinch = new $$.$me_atom2_pinch_class();
                            $$.$me_atom2_pinch.start(event);
                        }
                        touchAccu = null;
                    }
                }
                if (!touchAccu) {
                    if ($$.$me_atom2_pinch && $$.$me_atom2_pinch.mode != null) {
                        $$.$me_atom2_pinch.move(event);
                    }
                    else if ($$.$me_atom2_wheel_touch && $$.$me_atom2_wheel_touch.mode != null) {
                        $$.$me_atom2_wheel_touch.move(event);
                    }
                }
            }
            return $$.$me_atom2_event_process('touchmove', event);
        };
        const touchend = (event) => {
            if ($$.$me_atom2_wheel_touch && $$.$me_atom2_wheel_touch.mode != null)
                $$.$me_atom2_wheel_touch.end(event);
            if ($$.$me_atom2_pinch && $$.$me_atom2_pinch.mode != null)
                $$.$me_atom2_pinch.end(event);
            return $$.$me_atom2_event_process('touchend', event);
        };
        const mousedown = (event) => {
            if (!$$.$me_atom2_wheel_drag)
                $$.$me_atom2_wheel_drag = new $$.$me_atom2_wheel_drag_class();
            $$.$me_atom2_wheel_drag.start(event);
            $$.$me_atom2_event_process('mousedown', event);
        };
        const mousemove = (event) => {
            $$.$me_atom2_event_mousemove_last = $$.$me_atom2_event_mousemove_to_process = event;
            if ($$.$me_atom2_wheel_drag && event.buttons == 1)
                $$.$me_atom2_wheel_drag.move(event);
            $$.$me_atom2_async();
        };
        const mouseup = (event) => {
            if ($$.$me_atom2_wheel_drag)
                $$.$me_atom2_wheel_drag.end(event);
            $$.$me_atom2_event_process('mouseup', event);
        };
        const wheel = (event) => {
            if (!$$.$me_atom2_event_wheel_to_process) {
                $$.$me_atom2_event_wheel_to_process = event;
                $$.$me_atom2_event_wheel_to_process._deltaX = event.deltaX;
                $$.$me_atom2_event_wheel_to_process._deltaY = event.deltaY;
            }
            else {
                $$.$me_atom2_event_wheel_to_process._deltaX =
                    event.deltaX + (Math.sign($$.$me_atom2_event_wheel_to_process._deltaX) * Math.sign(event.deltaX) < 0 ?
                        0 :
                        $$.$me_atom2_event_wheel_to_process._deltaX);
                $$.$me_atom2_event_wheel_to_process._deltaY =
                    event.deltaY + (Math.sign($$.$me_atom2_event_wheel_to_process._deltaY) * Math.sign(event.deltaY) < 0 ?
                        0 :
                        $$.$me_atom2_event_wheel_to_process._deltaY);
            }
            $$.$me_atom2_async();
            event.preventDefault();
        };
        const keydown = (event) => $$.$me_atom2_event_keyboard_process('keydown', event);
        const keyup = (event) => $$.$me_atom2_event_keyboard_process('keyup', event);
        function _settingsInit() {
            let asyncCompleteStart;
            let asyncCompleteIncludingAnimateStart;
            window.addEventListener('resize', function () {
                const viewport = _viewport();
                $$.a('/.#viewportWidth', viewport.width);
                $$.a('/.#viewportHeight', viewport.height);
                $$.a('/.#pixelRatio', window.devicePixelRatio);
            });
            const viewport = _viewport();
            $$.$me_atom2_entity.root().props({
                '#ribbonEffectTimeout': () => 250,
                '#ribbonAbsorbTimeout': () => 150,
                '#wheelTouchAccelFactor': () => 0.98,
                '#wheelTouchAccelThreshold': () => 10,
                '#touchTolerance': () => 22,
                '#clickTolerance': () => 2,
                '#tapTolerance': () => 10,
                '#isTouch': $$.$me_atom2_prop([], () => 'ontouchstart' in window, ({ val, prev }) => {
                    if (prev != null && prev != val) {
                        if (prev) {
                            document.body.removeEventListener('touchstart', touchstart);
                            document.body.removeEventListener('touchmove', touchmove);
                            document.body.removeEventListener('touchend', touchend);
                        }
                        else {
                            document.body.removeEventListener('mousedown', mousedown);
                            document.body.removeEventListener('mouseup', mouseup);
                            document.body.removeEventListener('mousemove', mousemove);
                            document.body.removeEventListener('wheel', wheel);
                            document.body.removeEventListener('keydown', keydown);
                            document.body.removeEventListener('keyup', keyup);
                        }
                    }
                    if (prev !== val) {
                        if (val) {
                            document.body.addEventListener('touchstart', touchstart);
                            document.body.addEventListener('touchmove', touchmove, { passive: false });
                            document.body.addEventListener('touchend', touchend);
                        }
                        else {
                            document.body.addEventListener('mousedown', mousedown);
                            document.body.addEventListener('mouseup', mouseup);
                            document.body.addEventListener('mousemove', mousemove);
                            document.body.addEventListener('wheel', wheel, { passive: false });
                            document.body.addEventListener('keydown', keydown);
                            document.body.addEventListener('keyup', keyup);
                        }
                    }
                }),
                '#height': '.#viewportHeight',
                '#width': '.#viewportWidth',
                '#left': () => 0,
                '#top': () => 0,
                '#isReady': () => true,
                '#viewportChanged': () => false,
                '#viewportPortrait': () => false,
                '#viewportWidthChanged': () => false,
                '#viewportWidth': $$.$me_atom2_prop([], () => viewport.width, ({ prev, val }) => {
                    if (prev != val && prev != null) {
                        $$.a('/.#viewportWidthChanged', true);
                        $$.a('/.#viewportChanged', true);
                    }
                }),
                '#viewportHeightChanged': () => false,
                '#viewportHeight': $$.$me_atom2_prop([], () => viewport.height, ({ prev, val }) => {
                    if (prev != val && prev != null) {
                        $$.a('/.#viewportHeightChanged', true);
                        $$.a('/.#viewportChanged', true);
                    }
                }),
                '#pixelRatioChanged': () => false,
                '#pixelRatio': $$.$me_atom2_prop([], () => window.devicePixelRatio, ({ prev, val }) => {
                    if (prev != val && prev != null)
                        $$.a('/.#viewportHeightChanged', true);
                }),
                '#asyncCompleteShow': $$.$me_atom2_prop([], ({ atom }) => {
                    let val = null;
                    const name = atom.name();
                    const s = sessionStorage.getItem(name);
                    if (s)
                        try {
                            val = JSON.parse(s);
                        }
                        catch (e) {
                            console.error({ name }, e);
                        }
                    return !!val;
                }, ({ val, atom }) => {
                    const name = atom.name();
                    if (!val) {
                        sessionStorage.removeItem(name);
                    }
                    else {
                        sessionStorage.setItem(name, JSON.stringify(!!val));
                    }
                    return !!val;
                }),
                '#asyncComplete': $$.$me_atom2_prop([], () => false, ({ prev, val }) => {
                    if (!val) {
                        asyncCompleteStart = performance.now();
                    }
                    else if (!prev && $$.a('/.#asyncCompleteShow')) {
                        console.log('%casyncComplete', 'background: green; color: white', (performance.now() - asyncCompleteStart).toFixed(0) + 'ms');
                    }
                }),
                '#asyncCompleteIncludingAnimate': $$.$me_atom2_prop([], () => false, ({ prev, val }) => {
                    if (!val) {
                        asyncCompleteIncludingAnimateStart = performance.now();
                    }
                    else if (!prev && $$.a('/.#asyncCompleteShow')) {
                        console.log('%casyncCompleteIncludingAnimate', 'background: yellow; color: black', (performance.now() - asyncCompleteIncludingAnimateStart).toFixed(0) + 'ms');
                    }
                }),
                '#stat': $$.$me_atom2_prop([], ({ atom }) => {
                    let val = null;
                    const name = atom.name();
                    const s = sessionStorage.getItem(name);
                    if (s)
                        try {
                            val = JSON.parse(s);
                        }
                        catch (e) {
                            console.error({ name }, e);
                        }
                    return val;
                }, ({ val, atom }) => {
                    if (val != null)
                        if (Number.isFinite(+val)) {
                            val = [+val];
                        }
                        else if (Array.isArray(val)) {
                            val = val
                                .filter((item) => Number.isFinite(+item) && +item >= 0)
                                .map((item) => +item)
                                .sort((ia, ib) => ia - ib)
                                .slice(0, 3);
                            if (!val.length)
                                val = null;
                        }
                    const name = atom.name();
                    if (val == null) {
                        sessionStorage.removeItem(name);
                    }
                    else {
                        sessionStorage.setItem(name, JSON.stringify(val));
                    }
                    return val;
                }),
            });
        }
        function _viewport() {
            const result = {
                width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
            };
            return result;
        }
        _settingsInit();
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ric.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $nl_defaults_init() {
            $$.$me_atom2_entity.root().props({
                em: () => 16,
                pm: () => 32,
                colorText: $$.$me_atom2_prop(['.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#313745' : 'white'),
                fontFamily: () => '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                fontWeight: () => 400,
                theme: $$.$me_atom2_prop_store({
                    default: () => $$.$me_theme.light,
                    valid: (val) => val == $$.$me_theme.light || val == $$.$me_theme.dark ? val : null,
                }),
                colorButton: $$.$me_atom2_prop(['.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    '#0070a4' :
                    '#008ecf'),
                colorLink: $$.$me_atom2_prop(['.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    '#2b87db' :
                    '#53adff'),
            });
            $$.$me_atom2_ec.prop_default = Object.assign({}, $$.$me_atom2_ec.prop_default, { em: '/.em', pm: '/.pm', colorText: '/.colorText', fontFamily: '/.fontFamily', fontWeight: '/.fontWeight', fontSize: '.em', theme: '/.theme' });
            $$.$me_atom2_elem.style_default = Object.assign({}, $$.$me_atom2_elem.style_default, { color: '.colorText', fontFamily: '.fontFamily', fontWeight: '.fontWeight', fontSize: '.fontSize' });
        }
        $$.$nl_defaults_init = $nl_defaults_init;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//defaults.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_stylesheet = {
            prop: {
                styleSheetName: $$.$me_atom2_prop_abstract(),
                styleSheet: $$.$me_atom2_prop(['.className'], ({ masters: [className] }) => ''),
                styleSheetCommon: $$.$me_atom2_prop(['.styleSheet'], ({ masters: [styleSheet] }) => ''),
                instanceId: () => null,
                styleSheet_apply: $$.$me_atom2_prop(['.styleSheet', '.styleSheetName', '.instanceId'], null, styleSheet_apply_fn),
                styleSheetCommon_apply: $$.$me_atom2_prop(['.styleSheetCommon', '.styleSheetName'], null, styleSheet_apply_fn),
                className: $$.$me_atom2_prop(['.styleSheetName', '.instanceId'], ({ masters: [styleSheetName, instanceId] }) => styleSheetName + '-' + instanceId),
            },
            dom: {
                className: $$.$me_atom2_prop(['.styleSheetName', '.className'], ({ masters: [styleSheetName, className] }) => styleSheetName + ' ' + className),
            },
            init: (self) => {
                const styleSheetName = $$.a('.styleSheetName');
                if (!instances[styleSheetName])
                    instances[styleSheetName] = new Map();
                const ids = [...instances[styleSheetName]].map(([spinner, id]) => id).sort();
                let id;
                for (let i = 0; i < ids.length; i++)
                    if (i != ids[i]) {
                        id = i;
                        break;
                    }
                if (id === void 0)
                    id = ids.length;
                $$.a('.instanceId', id);
                instances[styleSheetName].set(self, id);
                const styleSheetCommon = $$.a('.styleSheetCommon');
                if (!styleSheetCommon)
                    return;
                const styleSheetCommonId = styleSheetId(styleSheetName);
                if (document.getElementById(styleSheetCommonId))
                    return;
                let sheet = document.createElement('style');
                sheet.id = styleSheetCommonId;
                sheet.innerHTML = styleSheetCommon;
                let head = document.head || document.getElementsByTagName('head')[0];
                head.appendChild(sheet);
            },
            fini: (self) => {
                const styleSheetName = $$.a('.styleSheetName');
                removeStyleSheet(styleSheetId(styleSheetName, $$.a('.instanceId')));
                instances[styleSheetName].delete(self);
                if (instances[styleSheetName].size)
                    return;
                instances[styleSheetName] = null;
                removeStyleSheet(styleSheetId(styleSheetName));
            },
        };
        function styleSheet_apply_fn(p) {
            const [innerHTML, styleSheetName, instanceId] = p.val;
            let sheet;
            const id = styleSheetId(styleSheetName, instanceId);
            if (!innerHTML) {
                removeStyleSheet(id);
            }
            else if (sheet = document.getElementById(id)) {
                if (sheet.innerHTML != innerHTML)
                    sheet.innerHTML = innerHTML;
            }
            else {
                sheet = document.createElement('style');
                sheet.id = id;
                sheet.innerHTML = innerHTML;
                let head = document.head || document.getElementsByTagName('head')[0];
                head.appendChild(sheet);
            }
        }
        function removeStyleSheet(styleSheetId) {
            let sheet = document.getElementById(styleSheetId);
            if (sheet && sheet.parentElement)
                sheet.parentElement.removeChild(sheet);
        }
        let instances = {};
        const styleSheetId = (styleSheetName, instanceId) => 'styleSheet-' + styleSheetName + (instanceId === void 0 ? '' : '-' + instanceId);
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//stylesheet.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const events = [
            'focus',
            'blur',
            'change',
            'keypress',
            'keydown',
            'keyup',
        ];
        $$.$nl_input = {
            base: $$.$me_stylesheet,
            node: 'input',
            dispatch: (dispatch_name, dispatch_arg) => {
                if (~events.indexOf(dispatch_name))
                    return true;
                return false;
            },
            prop: {
                styleSheetName: () => 'nl_input',
                className: '.styleSheetName',
                styleSheet: () => '',
                styleSheetCommon: $$.$me_atom2_prop(['.className', '/.theme'], ({ masters: [className, theme] }) => {
                    return (`
          .${className}::placeholder {
            color: ${theme == $$.$me_theme.light ? 'rgba(49,55,69,0.5)' : 'white'};
          }
          .${className} {
            border: solid 1px ${theme == $$.$me_theme.light ? '#bdc3d1' : '#d8dce3'};
            background: ${theme == $$.$me_theme.light ? '#fcfcfd' : '#666f7f'}
          }
          .${className}:focus {
            outline: none;
            border: 1px solid ${theme == $$.$me_theme.light ? '#313745' : 'white'};
          }
        `);
                }),
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                isFocused: $$.$me_atom2_prop([], () => false, ({ val }) => {
                    const node = $$.a.curr.parent().node;
                    node[val ? 'focus' : 'blur']();
                }),
                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
            },
            style: {
                borderRadius: () => 3,
                fontSize: '.fontSize',
                paddingLeft: () => 8,
                boxSizing: () => 'border-box',
                '-webkit-appearance': () => 'none',
            },
            attr: {
                placeholder: '.placeholder',
            },
            event: {
                clickOrTap: () => {
                    $$.a('.isFocused', $$.a.dispatch('', 'focus', { result: true }).result);
                    return true;
                },
                clickOrTapOutside: () => {
                    $$.a('.isFocused', !$$.a.dispatch('', 'blur', { result: true }).result);
                    return false;
                },
            },
            init: (self) => {
                const elem = self;
                elem.node.addEventListener('change', onChange.bind(self));
                elem.node.addEventListener('keypress', onKeyPress.bind(self));
                elem.node.addEventListener('keydown', onKeyDown.bind(self));
                elem.node.addEventListener('keyup', onKeyUp.bind(self));
            },
            fini: (self) => {
                const elem = self;
                elem.node.removeEventListener('change', self.onChange);
                elem.node.removeEventListener('keypress', self.onKeyPress);
                elem.node.removeEventListener('keydown', self.onKeyDown);
                elem.node.removeEventListener('keyup', self.onKeyUp);
            },
        };
        function onKeyEvent(entity, name, event) {
            const prev = $$.a.curr;
            $$.a.curr = entity;
            const { ctrlKey, metaKey, shiftKey, altKey, key, type, defaultPrevented } = event;
            if ($$.a.dispatch('', name, { ctrlKey, metaKey, shiftKey, altKey, key, type, defaultPrevented }).defaultPrevented)
                event.preventDefault();
            $$.a.curr = prev;
        }
        function onKeyUp(event) {
            onKeyEvent(this, 'keyup', event);
        }
        function onKeyDown(event) {
            onKeyEvent(this, 'keydown', event);
        }
        function onKeyPress(event) {
            onKeyEvent(this, 'keypress', event);
        }
        function onChange(event) {
            const prev = $$.a.curr;
            $$.a.curr = this;
            $$.a.dispatch('', 'change', event.target.value);
            $$.a.curr = prev;
        }
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//input.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_triangle = {
            prop: {
                direction: () => $$.$me_rect_sides_enum.bottom,
                size: '.em',
                color: '.colorText',
                k: () => 2 / Math.sqrt(3),
                '#height': $$.$me_atom2_prop(['.direction', '.size', '.k'], ({ masters: [direction, size, k] }) => direction == $$.$me_rect_sides_enum.bottom || direction == $$.$me_rect_sides_enum.top ?
                    size :
                    Math.round(size * k)),
                '#width': $$.$me_atom2_prop(['.direction', '.size', '.k'], ({ masters: [direction, size, k] }) => direction == $$.$me_rect_sides_enum.left || direction == $$.$me_rect_sides_enum.right ?
                    size :
                    Math.round(size * k)),
            },
            elem: {
                content: () => ({
                    prop: {
                        '#width': () => 0,
                        '#height': () => 0,
                    },
                    style: {
                        borderTop: $$.$me_atom2_prop(['<.direction', '<.#height', '<.color'], ({ masters: [direction, height, color] }) => direction == $$.$me_rect_sides_enum.top ? '' :
                            direction == $$.$me_rect_sides_enum.bottom ? `${height}px solid ${color}` :
                                `${height / 2}px solid transparent`),
                        borderLeft: $$.$me_atom2_prop(['<.direction', '<.#width', '<.color'], ({ masters: [direction, width, color] }) => direction == $$.$me_rect_sides_enum.left ? '' :
                            direction == $$.$me_rect_sides_enum.right ? `${width}px solid ${color}` :
                                `${width / 2}px solid transparent`),
                        borderRight: $$.$me_atom2_prop(['<.direction', '<.#width', '<.color'], ({ masters: [direction, width, color] }) => direction == $$.$me_rect_sides_enum.right ? '' :
                            direction == $$.$me_rect_sides_enum.left ? `${width}px solid ${color}` :
                                `${width / 2}px solid transparent`),
                        borderBottom: $$.$me_atom2_prop(['<.direction', '<.#height', '<.color'], ({ masters: [direction, height, color] }) => direction == $$.$me_rect_sides_enum.bottom ? '' :
                            direction == $$.$me_rect_sides_enum.top ? `${height}px solid ${color}` :
                                `${height / 2}px solid transparent`),
                    },
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//triangle.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_logo_color_blue = 'rgb(16,16,119)';
        $$.$nl_logo_color_cyan = 'rgb(0,214,202)';
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//colors.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const helper = {
            type: '$me_svg::helper',
            skip_root_defaults: true,
            prop: {
                content: $$.$me_atom2_prop_abstract(),
                _keys: $$.$me_atom2_prop_keys(['.content']),
            },
            elem: {
                item: $$.$me_atom2_prop({ keys: ['._keys'], masters: ['.content'] }, ({ key: [key], masters: [content] }) => ({
                    node: {
                        ns: 'http://www.w3.org/2000/svg',
                        tag: content[key].tag || 'path',
                    },
                    base: !content[key].sub ? null : helper,
                    skip_root_defaults: true,
                    prop: {
                        content: !content[key].sub ? null : () => content[key].sub,
                    },
                    attr: content[key].attr,
                })),
            },
        };
        $$.$me_svg = {
            type: '$me_svg',
            skip_root_defaults: false,
            base: helper,
            node: {
                ns: 'http://www.w3.org/2000/svg',
                tag: 'svg',
            },
            prop: {
                viewBox: $$.$me_atom2_prop_abstract(),
            },
            attr: {
                viewBox: '.viewBox',
                preserveAspectRatio: () => "xMidYMid",
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//svg.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_logo_icon = {
            base: $$.$me_svg,
            prop: {
                colorWinnerBlue: () => $$.$nl_logo_color_blue,
                colorWinnerCyan: () => $$.$nl_logo_color_cyan,
                viewBox: () => "0 0 487 442",
                content: () => [
                    {
                        attr: {
                            d: () => "M222.3 105.4c-3.3.9-7.5 2.5-9.4 3.5a48.6 48.6 0 0 0-15.2 14.7c-1.9 3.9-6.8 20-11.8 39.4a36240.2 36240.2 0 0 1-40.2 155c-7.4 29.5-14.4 49.5-17.3 49.5-1.9 0-4-2.8-6.3-8.5-2.5-5.8-6.7-22.8-34.8-140l-7.9-32.5-6-25-6-25.5c-2-8.3-4.6-17-5.7-19.2-4-8.3-11.9-10.4-38.7-10-16.9.2-17.4.3-19.3 2.6-1.3 1.6-1.9 3.9-1.9 7.5.1 5.9-.6 3 10.3 43.6A22792.6 22792.6 0 0 1 41 269l18 68c14.6 57.3 23 80.5 32.5 89.9 13.6 13.6 37.4 16.3 58 6.7a50.6 50.6 0 0 0 21.3-21.4c2.7-5.8 13.8-45.6 25.2-90.4C207 278 211.3 262 227.2 204c7.4-27 8-28.2 11.1-25.5 2 1.6 7 17.7 13.5 43l9 35 9 34.5 11 42 10.5 40c6.3 24.2 7.8 27.5 10.4 22.7 1.4-2.5 11-31.8 18.8-56.7 7.6-24.7 7.6-24.3 1.3-47-2.3-8.3-6.4-23.3-9-33.5l-21-80-3.6-14a305 305 0 0 0-11.5-39.2 44.5 44.5 0 0 0-14.7-15.5 55.8 55.8 0 0 0-39.7-4.4z",
                            fill: '<.colorWinnerBlue',
                        },
                    },
                    {
                        attr: {
                            d: () => "M302 108.5c-1.2.5-2.5 1.6-2.8 2.4-.5 1.4 3 15.3 10.3 40l3.8 13 38.3.4c36 .2 38.3.3 37.8 2l-8.5 29.2c-4.4 15-10.3 35.8-13 46a7149.1 7149.1 0 0 1-37 132c-12.6 42.2-15.6 56.3-13.2 60.8.6 1 3.1 2.8 5.5 3.7 3.8 1.5 7.6 1.6 28.7 1.2 26.8-.5 31.3-1.2 36-6 4.5-4.5 6.8-9.7 10.6-24.6 1.8-7.5 7-26.4 11.3-42.1 12-43.5 14.8-53.8 16.8-62.5a25909 25909 0 0 0 46-171.5 38.2 38.2 0 0 0 1.7-12.6c-.7-4.1-7-10-12.2-11.3-4.8-1.4-156.7-1.4-160-.1z",
                            fill: '<.colorWinnerCyan',
                        }
                    },
                    {
                        attr: {
                            d: () => "M434.3 2.9a41.9 41.9 0 0 0-32 33 30.2 30.2 0 0 0-.6 13.9 44.1 44.1 0 0 0 23.8 31.9c6.4 3 7.4 3.3 17.3 3.3 13.6 0 19.5-2.2 28.6-10.7A41.7 41.7 0 0 0 451 2.6a31.6 31.6 0 0 0-16.7.3z",
                            fill: '<.colorWinnerCyan',
                        },
                    },
                ],
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//icon.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_logo_word = {
            base: $$.$me_svg,
            prop: {
                colorWinnerBlue: () => $$.$nl_logo_color_blue,
                colorWinnerCyan: () => $$.$nl_logo_color_cyan,
                viewBox: () => "0 0 495 90",
                content: () => [
                    {
                        attr: {
                            d: () => "M35.5 69.3c-.2.8-1.9 1-2.1 0-5.2-19.6-10.7-41.2-15.7-61.2-2-7.2-.3-6.3-14.3-6.3-5.5 0-1.3 9.7 0 14.3l9.2 33.4c2.1 7.8 3.8 14.7 6.1 22.4 3.4 11.4 5.4 15.5 12.2 16.4 1.5.2 3.3.1 5.4.2 2 0 3.7-1 5.1-1.8 6.3-3.5 7-13.7 8.6-19.2L55 49l2.7-9.5L62.6 21c1-1.7 2.5-2.9 4.8 7.5l12 47.6c1.6 5.4 3.5 9 6.2 10.7 2.3 1.4 4.9 1.8 9 1.8 2.7 0 4.6-.8 6.3-2 3.9-2.7 6-8.6 7.2-13.6 2-7.6 4.2-14.5 6.1-22.4l9.3-33.4c4.5-16.7 5.6-15.4-7.8-15.4-4 0-4.4.8-6 5.8l-7 26.5c-1 3.8-7 32.8-8.8 35.3-.6.8-1.5.8-2 0-.8-1.2-1.6-3.6-2.6-7.5l-7.7-28.6-5.2-19C73.6 4.5 72.6 1.7 62.6 1.7c-10.7 0-11.7 10.6-14.3 20.6l-7.5 28c-1.6 6.7-3.3 13-5.3 19",
                            fill: '<.colorWinnerBlue',
                        },
                    },
                    {
                        attr: {
                            d: () => "M138.7 82.8c0 3.4.7 5.2 2.7 5.5 2 .2 6.2.2 9.4.1 2.2 0 2.8-2.8 2.9-4.1V26.8c.4-1.8-4-2-7.4-2-3.2 0-7.9.2-7.7 2-.1 3 .1 49.9.1 56",
                            fill: '<.colorWinnerBlue',
                        },
                    },
                    {
                        attr: {
                            d: () => "M146.1 1.8a7.4 7.4 0 1 1 0 14.8 7.4 7.4 0 0 1 0-14.8",
                            fill: '<.colorWinnerCyan',
                        },
                    },
                    {
                        attr: {
                            d: () => "M167.9 31.6v50.5c0 4.1.7 6.1 3 6.3h8.2c4 0 3.7-3 3.7-7V38.1c0-2 .8-2.7 2.5-2.9h13.2c9.4.4 13.5 3.2 13.5 19.9v29.5c0 2.4.7 3.6 3.3 3.8h7.7c3.4 0 4.2-1.2 4.1-3.9V54.8c-.2-9.7-1.3-18.8-4.4-23.2a13.4 13.4 0 0 0-6.7-5.4c-10.1-3.2-26.6-2.6-39.6-2.6-5 0-8.5 3-8.5 8",
                            fill: '<.colorWinnerBlue',
                        },
                    },
                    {
                        attr: {
                            d: () => "M239.8 20.2v65.3c.1 1.5 1.3 3 2.6 3h11.8c1 0 2.4-2 2.4-3V30.8c0-3-.2-8.4.6-7.7l33.4 51.6c6 9 7.4 13.3 15.7 13.8h4c6 0 10.6-5.3 10.6-11.4V4.2c0-2.1-4.3-2.5-8.4-2.4-4 0-8 .4-8 2.4v29.5c0 12.3.4 24.6.4 30 0 2.7 0 3-.6 2.8l-33.7-52.2c-.7-1.1-6-12.6-17.3-12.6-9.1 0-13.5 9.1-13.5 18.5",
                            fill: '<.colorWinnerBlue',
                        },
                    },
                    {
                        attr: {
                            d: () => "M337.3 18.9v56.6c0 8.5 3.7 13 12.2 13H401c4.2 0 4-1.3 4-7 0-5.8.2-8.1-4-8.1h-41.4c-6.8 0-6 .6-6-7.2v-9c0-6 1.9-5.2 5-5.3H394c9.3 0 10.3 0 10.3-7s-1.2-6.6-10.4-6.7h-34.5c-3.9 0-5.6.3-5.6-2.6V21.7c0-4.4.3-5 2.1-5h45c4.4 0 4.2-1.9 4.2-7.2 0-5.3.1-7.8-4-7.8h-51c-10 0-12.8 7.4-12.8 17.2",
                            fill: '<.colorWinnerBlue',
                        },
                    },
                    {
                        attr: {
                            d: () => "M418 16.2v68.5c0 2.2.6 3.4 2.7 3.7h5.1c2.4 0 4.1.1 5.4-.1 2-.4 2.7-1.8 2.7-3.6l.1-65.9c0-2.5 2-2.1 3.6-2.1h27.3c9 0 12.7 7.2 12.7 14.5.1 7.2-3.1 13.9-12.9 14H451c-4.6 0-7.8 2.7-7.6 7.8 0 1.8 1.4 4.5 3.8 7l12.4 12.3 15.5 15a5 5 0 0 0 3 1.2H492c1.2 0 2.8-.9.7-3l-5.1-5.3-23.2-21.8c-.8-1 1.3-.8 3.7-.8 3.5-.1 25.6-2.9 25.6-26.4 0-23.6-13-29.4-21.5-29.4h-41.2c-7.9 0-13 6.6-13 14.4",
                            fill: '<.colorWinnerBlue',
                        },
                    },
                ],
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//word.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_icon_back = {
            base: $$.$me_svg,
            prop: {
                color: '/.colorText',
                viewBox: () => "0 0 11 17",
                content: () => [
                    {
                        attr: {
                            d: () => "M4.52 8.5l6.062 6.061a1.429 1.429 0 1 1-2.02 2.02L.48 8.502 8.56.418a1.429 1.429 0 1 1 2.02 2.02L4.522 8.5z",
                            fill: '<.color',
                        },
                    },
                ],
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//back.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_cross = {
            type: '$me_cross',
            base: $$.$me_stylesheet,
            prop: {
                size: $$.$me_atom2_prop_abstract(),
                thick: $$.$me_atom2_prop_abstract(),
                color: $$.$me_atom2_prop_abstract(),
                opacity: () => 1,
                opacityHover: () => 1,
                '#width': '.size',
                '#height': '.size',
                styleSheetName: () => 'me_cross',
                styleSheetCommon: $$.$me_atom2_prop(['.styleSheetName'], ({ masters: [className] }) => `
        .${className}:before {
          transform: rotate(45deg);
        }
        .${className}:after {
          transform: rotate(-45deg);
        }
      `),
                styleSheet: $$.$me_atom2_prop(['.className', '.size', '.thick', '.color', '.opacity', '.opacityHover'], ({ masters: [className, size, thick, color, opacity, opacityHover], atom }) => `
        .${className} {
          opacity: ${opacity};
        }
        .${className}:hover {
          opacity: ${opacityHover};
        }
        .${className}:before, .${className}:after {
          position: absolute;
          left: ${(size - thick) / 2}px;
          content: '';
          height: ${size}px;
          width: ${thick}px;
          background-color: ${color};
        }
      `),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//cross.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_icon_phoneemail = {
            type: '$nl_icon_phoneemail',
            base: $$.$me_svg,
            prop: {
                color: '/.colorText',
                viewBox: () => "0 0 52 21",
                content: () => [
                    {
                        tag: 'g',
                        attr: { fill: () => 'none', fillRule: () => 'evenodd' },
                        sub: [
                            {
                                tag: 'g',
                                attr: { stroke: '<<.color' },
                                sub: [
                                    { attr: { d: () => 'M35.1 16.8 h14.3 L44.6 12 l-1.3 1.6 c-.4.4-.8.6-1.3.5-.3-.1-.5-.3-1-.9 L40 12 z' } },
                                    { attr: { d: () => "M49.5 6.2H35l6.6 7.7c.4.4 1 .4 1.4 0l6.5-7.7z" } },
                                    { attr: { d: () => "M34.6 16.8 v-10.5z" } },
                                    { attr: { d: () => "M49.8 16.8 v-10.5z" } },
                                ],
                            },
                            { attr: { stroke: '<<.color', 'stroke-linecap': () => 'square', d: () => "M27.7 5l-8 13" } },
                            {
                                tag: 'g',
                                attr: { transform: () => "translate(.4 1)" },
                                sub: [
                                    { tag: 'rect', attr: { width: () => "12.9", height: () => "19", x: () => ".5", y: () => ".5", stroke: '<<<.color', rx: () => "1" } },
                                    { attr: { fill: '<<<.color', d: () => "M0 14.5h14v1.2H0z" } },
                                    { tag: 'ellipse', attr: { cx: () => "7", cy: () => "17.3", stroke: '<<<.color', 'stroke-width': () => ".5", rx: () => "1", ry: () => "1" } },
                                ],
                            },
                        ],
                    },
                ],
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//phoneEmail.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_checkbox = {
            type: '$nl_checkbox',
            base: $$.$me_stylesheet,
            prop: {
                caption: $$.$me_atom2_prop_abstract(),
                checked: $$.$me_atom2_prop_abstract(),
                boxSize: () => 16,
                space: () => 8,
                fontSize: $$.$me_atom2_prop(['.boxSize'], $$.$me_atom2_prop_compute_fn_sum(-2)),
                colorText: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#313745' : '#ffffff'),
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                '#cursor': () => 'pointer',
                '#height': '.boxSize',
                styleSheetName: () => 'nl_checkbox',
                styleSheetCommon: $$.$me_atom2_prop(['.styleSheetName', '/.theme', '/.colorButton', '/.colorText'], ({ masters: [className, theme, colorButton, colorText] }) => `
        .${className} {
          user-select: none;
        }
        .${className}:hover > svg {
          transform: scale(1.2)
        }
        .${className}[checked=false] > svg {
          ${theme != $$.$me_theme.light ? '' : `border: solid 1px ${colorText};`}
          background-color: white;
          box-sizing: border-box;
        }
        .${className}[checked=true] > svg {
          background: ${theme == $$.$me_theme.light ? '#0070a4' : 'white'};
        }
        .${className}[checked=false] > svg > path {
          fill: transparent;
        }
        .${className}[checked=true] > svg > path {
          fill: ${theme == $$.$me_theme.light ? 'white' : 'black'};
        }
        .${className} > div {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `),
                styleSheet: $$.$me_atom2_prop(['.className', '.boxSize', '.colorText'], ({ masters: [className, boxSize, colorText] }) => `
        .${className} > svg {
          border-radius: ${Math.round(boxSize * 2 / 14)}px;
        }
        .${className} > div {
          color: colorText;
        }
      `),
            },
            event: {
                clickOrTap: () => {
                    $$.a('.checked', !$$.a('.checked'));
                    return true;
                },
            },
            attr: {
                checked: '.checked',
            },
            elem: {
                box: () => ({
                    base: $$.$me_svg,
                    prop: {
                        '#width': '<.boxSize',
                        '#height': '<.boxSize',
                        '#alignVer': () => $$.$me_align.center,
                        viewBox: () => "0 0 24 24",
                        content: () => [
                            {
                                attr: {
                                    d: () => "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                                },
                            },
                        ],
                    },
                }),
                caption: () => ({
                    prop: {
                        '#ofsHor': $$.$me_atom2_prop(['<@box.#width', '<.space'], $$.$me_atom2_prop_compute_fn_sum()),
                        '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor'], $$.$me_atom2_prop_compute_fn_diff()),
                        '#height': () => null,
                        '#alignVer': () => $$.$me_align.center,
                        fontSize: '<.fontSize',
                    },
                    dom: {
                        innerHTML: '<.caption',
                    },
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//checkbox.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_button = {
            type: '$nl_button',
            base: $$.$me_stylesheet,
            prop: {
                caption: $$.$me_atom2_prop_abstract(),
                target: $$.$me_atom2_prop_abstract(),
                source: () => null,
                cmd: () => null,
                '#width': () => 200,
                '#height': () => 40,
                '#cursor': () => 'pointer',
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                styleSheetName: () => 'nl_button',
                styleSheetCommon: $$.$me_atom2_prop(['.styleSheetName'], ({ masters: [className] }) => `
        .${className} {
          user-select: none;
        }
        .${className} > div {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `),
                colorBackground: '/.colorButton',
                colorText: () => 'white',
            },
            elem: {
                caption: () => ({
                    prop: {
                        '#width': () => null,
                        '#height': () => null,
                        '#align': () => $$.$me_align.center,
                        fontSize: '<.fontSize',
                        colorText: '<.colorText',
                    },
                    dom: {
                        innerText: '<.caption',
                    },
                }),
            },
            style: {
                background: '.colorBackground',
                borderRadius: $$.$me_atom2_prop(['.#height'], $$.$me_atom2_prop_compute_fn_mul(1 / 2)),
            },
            event: {
                clickOrTap: () => {
                    $$.a.dispatch($$.a('.target'), $$.a('.source'), $$.a('.cmd'));
                    return true;
                },
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_icon_eyeopen = {
            type: '$nl_icon_eyeOpen',
            base: $$.$me_svg,
            prop: {
                color: '/.colorText',
                viewBox: () => "0 0 26 19",
                content: () => [
                    {
                        tag: 'g',
                        attr: { fill: () => 'none', fillRule: () => 'evenodd', stroke: '<.color' },
                        sub: [
                            {
                                tag: 'g',
                                attr: { transform: () => "translate(9 6)" },
                                sub: [
                                    { tag: 'circle', attr: { cx: () => "4", cy: () => "4", r: () => "4" } },
                                    { attr: { d: () => "M4 2a2 2 0 0 0-2 2" } },
                                ],
                            },
                            { attr: { d: () => "M13 18c4.418 0 8.418-2.333 12-7-3.582-4.667-7.582-7-12-7S4.582 6.333 1 11c3.582 4.667 7.582 7 12 7zM1.168 4.689l2.106 2.224M25.277 4.692L23.166 6.91M19.93 1.444l-1.418 2.714M5.89 1.49l1.22 2.462M13 0v3" } },
                        ],
                    },
                ],
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//eyeOpen.js.map
;

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_icon_eyeclose = {
            type: '$nl_icon_eyeClose',
            base: $$.$me_svg,
            prop: {
                color: '/.colorText',
                viewBox: () => "0 0 26 11",
                content: () => [
                    {
                        tag: 'g',
                        attr: { fill: () => 'none', fillRule: () => 'evenodd', stroke: '<.color' },
                        sub: [
                            { attr: { d: () => "M13 7c4.418 0 8.418-2.333 12-7-3.582 4.667-7.582 7-12 7S4.582 4.667 1 0c3.582 4.667 7.582 7 12 7zM1.168 6.311l2.106-2.224M25.277 6.308L23.166 4.09M19.93 9.556l-1.418-2.714M5.89 9.51l1.22-2.462M13 11V8" } },
                        ],
                    },
                ],
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//eyeClose.js.map
;

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_login_input = {
            prop: {
                placeholder: $$.$me_atom2_prop_abstract(),
                value: $$.$me_atom2_prop_abstract(),
                icon_width: () => 0,
                icon: () => '',
                type: () => 'text',
                icon_wrapper_width: $$.$me_atom2_prop(['.icon_width', '.icon_margin_right'], ({ masters: [icon_width, icon_margin_right] }) => icon_width + 2 * icon_margin_right),
                fontSize: () => 18,
                icon_height: () => 18,
                icon_margin_right: () => 8,
                icon_isClickable: () => false,
                error: () => '',
                '#height': () => 45,
            },
            elem: {
                input: () => ({
                    base: $$.$nl_input,
                    prop: {
                        placeholder: '<.placeholder',
                    },
                    attr: {
                        type: '<.type',
                    },
                    style: {
                        fontSize: '<.fontSize',
                        border: $$.$me_atom2_prop(['<.error'], ({ masters: [error] }) => error ? 'solid 1px #ff3939' : ''),
                    },
                    dom: {
                        value: '<.value',
                    },
                    dispatch: (dispatch_name, dispatch_arg) => {
                        if (dispatch_name == 'change') {
                            $$.a('<.value', dispatch_arg);
                            return true;
                        }
                        else if (dispatch_name == 'keypress' ||
                            dispatch_name == 'keydown' && (dispatch_arg.key == 'Delete' ||
                                dispatch_arg.key == 'Backspace')) {
                            $$.a('<.error', '');
                            return true;
                        }
                        return false;
                    },
                }),
                icon_wrapper: $$.$me_atom2_prop(['.icon_width'], ({ masters: [icon_width] }) => !icon_width ? null :
                    {
                        prop: {
                            '#alignHor': () => $$.$me_align.right,
                            '#width': '<.icon_wrapper_width',
                            '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 2),
                            '#cursor': $$.$me_atom2_prop(['<.icon_isClickable'], ({ masters: [icon_isClickable] }) => !icon_isClickable ? null : 'pointer'),
                        },
                        elem: {
                            icon: $$.$me_atom2_prop(['<.icon'], ({ masters: [icon] }) => {
                                return !icon ? null : {
                                    type: icon.type,
                                    base: icon,
                                    prop: {
                                        '#alignHor': () => $$.$me_align.right,
                                        '#ofsHor': '<<.icon_margin_right',
                                        '#alignVer': () => $$.$me_align.center,
                                        '#width': '<<.icon_width',
                                        '#height': '<<.icon_height',
                                    },
                                };
                            }),
                        },
                        event: {
                            clickOrTap: () => {
                                if ($$.a('<.icon_isClickable')) {
                                    $$.a.dispatch('<', 'icon_click');
                                    return true;
                                }
                                return false;
                            },
                        },
                    }),
                error: $$.$me_atom2_prop(['.error'], ({ masters: [error] }) => !error ? null :
                    {
                        base: $nl_login_error,
                        prop: {
                            caption: '<.error',
                        },
                    }),
            },
        };
        const $nl_login_error = {
            prop: {
                caption: '<.error',
                paddingHor: () => 16,
                width: $$.$me_atom2_prop(['.triangle_width', '.paddingHor', '@caption.#width', '.paddingHor'], $$.$me_atom2_prop_compute_fn_sum()),
                triangle_width: () => 16,
                '#width': $$.$me_atom2_prop(['.width', '.triangle_width'], $$.$me_atom2_prop_compute_fn_diff()),
                colorBackground: () => '#ff3637',
                colorText: () => 'white',
                '#alignHor': () => $$.$me_align.right,
                '#ofsHor': $$.$me_atom2_prop(['.width'], ({ masters: [width] }) => -width - 4),
            },
            style: {
                background: '.colorBackground',
            },
            elem: {
                triangle: () => ({
                    base: $$.$me_triangle,
                    prop: {
                        '#ofsHor': $$.$me_atom2_prop(['.#width'], ({ masters: [width] }) => -width),
                        direction: () => $$.$me_rect_sides_enum.left,
                        size: '.em',
                        color: '<.colorBackground',
                    },
                }),
                caption: () => ({
                    prop: {
                        '#width': () => null,
                        '#height': () => null,
                        '#align': () => $$.$me_align.center,
                    },
                    dom: {
                        innerText: '<.caption',
                    },
                    style: {
                        color: '<.colorText',
                    },
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//input.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_login_tabs = {
            prop: {
                selected: $$.$me_atom2_prop_abstract(),
                def: () => ({
                    enter: {
                        condition: (selected) => selected != 'restore',
                        prop: {
                            '#width': () => 180,
                            caption: () => 'ВХОД',
                        },
                    },
                    register: {
                        condition: (selected) => selected != 'restore',
                        prop: {
                            '#width': $$.$me_atom2_prop(['<.#width', '<@tab[enter].#width'], ({ masters: [width, tab1_width] }) => width - tab1_width),
                            '#ofsHor': '<@tab[enter].#width',
                            caption: () => 'РЕГИСТРАЦИЯ',
                        },
                    },
                    restore: {
                        condition: (selected) => selected == 'restore',
                        prop: {
                            caption: () => 'ВОССТАНОВЛЕНИЕ ПАРОЛЯ',
                        },
                    },
                }),
                tab_ids: $$.$me_atom2_prop_keys(['.def']),
            },
            elem: {
                tab: $$.$me_atom2_prop({ keys: ['.tab_ids'], masters: ['.selected', '.def'] }, ({ key: [id], masters: [selected, def] }) => !def[id].condition(selected) ? null :
                    {
                        prop: Object.assign({}, def[id].prop, { isSelected: $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => selected == id), '#cursor': $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? 'default' : 'pointer') }),
                        event: {
                            clickOrTap: () => {
                                $$.a('<.selected', id);
                                return true;
                            },
                        },
                        elem: {
                            caption: () => ({
                                prop: {
                                    '#width': () => null,
                                    '#alignHor': () => $$.$me_align.center,
                                },
                                style: {
                                    fontSize: () => 24,
                                },
                                dom: {
                                    innerText: '<.caption',
                                }
                            })
                        },
                        style: {
                            borderBottom: $$.$me_atom2_prop(['.isSelected', '/.theme'], ({ masters: [isSelected, theme] }) => `3px solid rgba(${theme == $$.$me_theme.light ? '49,55,69' : '255,255,255'}, ${!isSelected ? .2 : theme == $$.$me_theme.light ? 1 : .5})`),
                            fontWeight: $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? 500 : 400)
                        },
                    }),
            }
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//tabs.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_login = {
            dispatch(dispatch_name, dispatch_arg) {
                if (dispatch_name == 'no_reg') {
                    $$.a('.login', '');
                    $$.a('.isShown', false);
                    return true;
                }
                if (dispatch_name == 'login') {
                    $$.a('.login', dispatch_arg);
                    $$.a('.isShown', false);
                    return true;
                }
                if (dispatch_name.endsWith("@login@container@button")) {
                    const selected = $$.a('.selected');
                    const login = $$.a('@container@login.value').trim();
                    if (!login) {
                        $$.a('@container@login.error', 'Введите телефон или E-mail');
                        return true;
                    }
                    let pass;
                    if (selected != 'restore') {
                        pass = $$.a('@container@pass.value');
                        if (!pass) {
                            $$.a('@container@pass.error', 'Введите пароль');
                            return true;
                        }
                    }
                    switch (selected) {
                        case 'enter': {
                            if (login != '98@baza-winner.ru') {
                                $$.a('@container@login.error', 'Несуществующий логин');
                                return true;
                            }
                            if (pass != '12345') {
                                $$.a('@container@pass.error', 'Неверный пароль');
                                return true;
                            }
                            $$.a.dispatch('', 'login', login);
                            return true;
                        }
                        case 'register': {
                            const pass_repeat = $$.a('@container@pass_repeat.value');
                            if (!pass_repeat) {
                                $$.a('@container@pass_repeat.error', 'Повторите пароль');
                                return true;
                            }
                            $$.a.dispatch('', 'login', login);
                            return true;
                        }
                        case 'restore': {
                            console.log('Инструкция отправлена на ' + login);
                            return true;
                        }
                    }
                }
                return false;
            },
            prop: {
                isShown: () => true,
                selected: $$.$me_atom2_prop_store({
                    default: () => 'enter',
                    valid: (val) => typeof val == 'string' && ~['enter', 'register', 'restore'].indexOf(val) ?
                        val :
                        null,
                }),
                login: $$.$me_atom2_prop_store({
                    default: () => '',
                    valid: (val) => typeof val == 'string' ?
                        val.trim() :
                        null,
                    condition: ['.stayLogged', '@container@login.value'],
                }),
                stayLogged: $$.$me_atom2_prop_store({
                    default: () => false,
                    valid: (val) => typeof val == 'boolean' ?
                        val :
                        null,
                }),
                '#width': '/.#viewportWidth',
                '#height': '/.#viewportHeight',
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 10),
                colorWinnerBlue: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    $$.$nl_logo_color_blue :
                    'white'),
                colorWinnerCyan: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    $$.$nl_logo_color_cyan :
                    'white'),
                isPassword: () => true,
            },
            style: {
                background: $$.$me_atom2_prop(['.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'white' : '#414c5f'),
            },
            elem: {
                container: () => ({
                    prop: {
                        '#width': () => 500,
                        '#height': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<.selected'], ({ masters: [selected] }) => ['.#ofsVer', '.#height'].map(s => (selected == 'enter' || selected == 'register' ?
                            '@no_reg_text' : '@button')
                            + s).concat('<.selected')), ({ masters: [ofsVer, height, selected] }) => ofsVer + height + (selected == 'register' ? 0 : selected == 'enter' ? 80 : 200) + 32),
                        '#alignHor': () => $$.$me_align.center,
                        on_change_viewportHeight: $$.$me_atom2_prop(['/.#viewportHeight'], null, ({ val }) => {
                            $$.a('.#ofsVer', null);
                        }),
                        '#ofsVer': $$.$me_atom2_prop(['/.#viewportHeight', '.#height'], ({ masters: [viewportHeight, height], prev }) => prev != null ? prev : (viewportHeight - height) / 2),
                        logo_icon_threshold: () => 800,
                    },
                    elem: {
                        logo_icon: $$.$me_atom2_prop(['/.#viewportHeight', '.logo_icon_threshold'], ({ masters: [viewportHeight, logo_icon_threshold] }) => viewportHeight < logo_icon_threshold ?
                            null :
                            {
                                base: $$.$nl_logo_icon,
                                prop: Object.assign({}, logo_props, { '#ofsVer': () => 56 }),
                            }),
                        logo_word: () => ({
                            base: $$.$nl_logo_word,
                            prop: Object.assign({}, logo_props, { '#ofsVer': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['/.#viewportHeight', '<.logo_icon_threshold'], ({ masters: [viewportHeight, logo_icon_threshold] }) => viewportHeight < logo_icon_threshold ? [] :
                                    ['.#ofsVer', '.#height'].map(s => '<@logo_icon' + s)), ({ len, masters: [ofsVer, height] }) => !len ? 56 : ofsVer + height + 15) }),
                        }),
                        tabs: () => ({
                            base: $$.$nl_login_tabs,
                            prop: {
                                '#height': () => 40,
                                '#ofsVer': $$.$me_atom2_prop(['.#ofsVer', '.#height'].map(s => '<@logo_word' + s), $$.$me_atom2_prop_compute_fn_sum(60)),
                                selected: $$.$me_atom2_prop_bind('<<.selected'),
                            },
                        }),
                        back_button: $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => selected != 'restore' ? null : {
                            base: $$.$nl_icon_back,
                            prop: {
                                '#width': () => 11,
                                '#height': () => 17,
                                '#ofsVer': $$.$me_atom2_prop(['<@tabs.#ofsVer'], $$.$me_atom2_prop_compute_fn_sum(7)),
                                '#cursor': () => 'pointer',
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                            },
                            event: {
                                clickOrTap: () => {
                                    $$.a('<<.selected', 'enter');
                                    return false;
                                },
                            }
                        }),
                        cross: () => ({
                            base: $$.$me_cross,
                            prop: {
                                size: () => 24,
                                thick: () => 3,
                                '#ofsVer': $$.$me_atom2_prop(['<@tabs.#ofsVer'], $$.$me_atom2_prop_compute_fn_sum(2)),
                                '#alignHor': () => $$.$me_align.right,
                                color: '/.colorText',
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 3),
                                '#cursor': () => 'pointer',
                            },
                            event: {
                                clickOrTap: () => {
                                    $$.a.dispatch('<<', 'no_reg');
                                    return true;
                                },
                            },
                        }),
                        login: () => ({
                            base: $$.$nl_login_input,
                            prop: {
                                placeholder: () => 'Введите телефон или E-mail',
                                '#ofsVer': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<<.selected'], ({ masters: [selected] }) => {
                                    const result = ['<<.selected'];
                                    if (selected == 'restore') {
                                        result.push('<@restore_text.#ofsVer', '<@restore_text.#height');
                                    }
                                    else {
                                        result.push('<@tabs.#ofsVer', '<@tabs.#height');
                                    }
                                    return result;
                                }), ({ masters: [selected, ofsVer, height] }) => ofsVer + height + (selected == 'enter' || selected == 'register' ? 40 : 32)),
                                icon_width: () => 52,
                                icon_height: () => 31,
                                icon_margin_right: () => 17,
                                icon_isClickable: () => false,
                                icon: () => $$.$nl_icon_phoneemail,
                                value: $$.$me_atom2_prop(['<<.login', '<<.stayLogged'], ({ masters: [login, stayLogged], prev }) => prev || login),
                            },
                        }),
                        pass: $$.$me_atom2_prop(['<.selected'], ({ masters: [page] }) => page == 'restore' ? null : {
                            base: input_pass,
                            prop: {
                                placeholder: () => 'Введите пароль',
                                '#ofsVer': $$.$me_atom2_prop(['.#ofsVer', '.#height'].map(s => '<@login' + s), $$.$me_atom2_prop_compute_fn_sum(32)),
                                value: () => '',
                            },
                        }),
                        pass_repeat: $$.$me_atom2_prop(['<.selected'], ({ masters: [page] }) => page != 'register' ? null : {
                            base: input_pass,
                            prop: {
                                placeholder: () => 'Повторите пароль',
                                '#ofsVer': $$.$me_atom2_prop(['<@pass.#ofsVer', '<@pass.#height'], $$.$me_atom2_prop_compute_fn_sum(32)),
                                value: () => '',
                            },
                        }),
                        check: $$.$me_atom2_prop(['<.selected'], ({ masters: [page] }) => page != 'enter' && page != 'register' ? null : {
                            base: $$.$nl_checkbox,
                            prop: {
                                '#width': () => 200,
                                boxSize: () => 18,
                                '#ofsVer': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<<.selected'], ({ masters: [selected] }) => ['.#ofsVer', '.#height'].map(s => (selected == 'enter' ? '<@pass' : '<@pass_repeat') + s)), $$.$me_atom2_prop_compute_fn_sum(32)),
                                caption: () => 'Оставаться в системе',
                                checked: $$.$me_atom2_prop_bind('<<.stayLogged'),
                            },
                        }),
                        forget_text: $$.$me_atom2_prop(['<.selected'], ({ masters: [page] }) => page != 'enter' && page != 'register' ? null : {
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsVer': $$.$me_atom2_prop(['<@check.#ofsVer', '<@check.#height', '.#height'], ({ masters: [ofsVer_target, height_target, height] }) => ofsVer_target + height_target / 2 - height / 2),
                                '#alignHor': () => $$.$me_align.right,
                                '#cursor': () => 'pointer',
                                colorText: '/.colorLink',
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                            },
                            dom: {
                                innerText: () => 'Забыли пароль?'
                            },
                            event: {
                                clickOrTap: () => {
                                    $$.a('<<.selected', 'restore');
                                    return true;
                                },
                            },
                        }),
                        button: () => ({
                            base: $$.$nl_button,
                            prop: {
                                '#width': '<.#width',
                                '#height': () => 45,
                                '#ofsVer': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<<.selected'], ({ masters: [selected] }) => selected == 'enter' || selected == 'register' ?
                                    ['<@check.#ofsVer', '<@check.#height'] :
                                    ['<@login.#ofsVer', '<@login.#height']), $$.$me_atom2_prop_compute_fn_sum(32)),
                                caption: $$.$me_atom2_prop(['<<.selected'], ({ masters: [selected] }) => selected == 'enter' ?
                                    'Войти' :
                                    selected == 'register' ?
                                        'Зарегистрироваться' :
                                        'Отправить'),
                                target: () => '<<',
                                em: () => 18,
                            },
                        }),
                        no_reg_text: $$.$me_atom2_prop(['<.selected'], ({ masters: [page] }) => page == 'restore' ? null : {
                            prop: {
                                '#width': () => 200,
                                '#height': () => 25,
                                '#ofsVer': $$.$me_atom2_prop(['<@button.#ofsVer', '<@button.#height'], $$.$me_atom2_prop_compute_fn_sum(32)),
                                '#alignHor': () => $$.$me_align.center,
                                '#cursor': () => 'pointer',
                                colorText: '/.colorLink',
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                            },
                            dom: {
                                innerText: () => 'Войти без регистрации'
                            },
                            event: {
                                clickOrTap: () => {
                                    $$.a.dispatch('<<', 'no_reg');
                                    return true;
                                },
                            },
                        }),
                        restore_text: $$.$me_atom2_prop(['<.selected'], ({ masters: [page] }) => page != 'restore' ? null : {
                            prop: {
                                '#height': () => null,
                                '#ofsVer': $$.$me_atom2_prop(['<@tabs.#ofsVer', '<@tabs.#height'], $$.$me_atom2_prop_compute_fn_sum(40)),
                                '#alignHor': () => $$.$me_align.center,
                                colorText: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#6a6c74' : '#d8dce3'),
                            },
                            style: {
                                textAlign: () => 'center',
                            },
                            dom: {
                                innerText: () => 'На вашу электронную почту будет отправлена инструкция по восстановлению пароля'
                            },
                        }),
                    }
                })
            },
        };
        const logo_props = {
            colorWinnerBlue: '<<.colorWinnerBlue',
            colorWinnerCyan: '<<.colorWinnerCyan',
            '#width': () => 220,
            '#height': () => null,
            '#alignHor': () => $$.$me_align.center,
        };
        const input_pass = {
            base: $$.$nl_login_input,
            dispatch(dispatch_name, dispatch_arg) {
                if (dispatch_name == 'icon_click') {
                    $$.a.update('.isPassword', val => !val);
                    return true;
                }
                return false;
            },
            prop: {
                type: $$.$me_atom2_prop(['.isPassword'], ({ masters: [isPassword] }) => !isPassword ? 'text' : 'password'),
                icon_width: () => 25,
                icon_height: $$.$me_atom2_prop(['.isPassword'], ({ masters: [isPassword] }) => isPassword ? 11 : 18),
                icon_margin_right: () => 30,
                icon_isClickable: () => true,
                icon: $$.$me_atom2_prop(['.isPassword'], ({ masters: [isPassword] }) => {
                    const result = isPassword ?
                        $$.$nl_icon_eyeopen :
                        $$.$nl_icon_eyeclose;
                    return result;
                }),
                isPassword: $$.$me_atom2_prop_bind('<<.isPassword'),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//login.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_panel = {
            style: {
                background: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'white' : '#464f63'),
                borderRadius: () => '2px',
                boxShadow: () => '0 4px 12px 0 rgba(132, 132, 132, 0.25)',
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//panel.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const newsUrl = 'https://baza-winner.ru/news/list.php?limit=2&category=W7';
        $$.$nl_main_workspace = {
            prop: {
                sections: () => ({
                    promo: {
                        caption: '[ NEW! ]',
                    },
                    news: {
                        caption: 'Новости',
                    },
                    orders: {
                        caption: 'Заказы',
                    },
                    alpha: {
                        caption: 'Альфа Банк',
                    },
                    absolut: {
                        caption: 'Абсолют Банк',
                    },
                    face: {
                        caption: 'Раскрытие лица',
                    },
                }),
                section_ids: $$.$me_atom2_prop_keys(['.sections']),
                selected: $$.$me_atom2_prop_store({
                    default: () => $$.a('.section_ids')[0],
                    valid: (val) => val == $$.a('.sections')[val] ? val : null,
                }),
            },
            elem: {
                promo: () => ({
                    base: $$.$nl_panel,
                    prop: {
                        '#ofsHor': '.em',
                        '#ofsVer': () => 54,
                        '#width': () => 619,
                        '#height': () => 87,
                    },
                    elem: {
                        title: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.em',
                                '#ofsVer': '.em',
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 18,
                                color: () => '#e34741',
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop(['<<.sections'], ({ masters: [sections] }) => $$.$me_option_caption_text('promo', sections).toUpperCase()),
                            },
                        }),
                        more: () => ({
                            prop: {
                                '#width': () => null,
                                '#ofsVer': '.em',
                                '#ofsHor': '.em',
                                '#alignHor': () => $$.$me_align.right,
                                '#cursor': () => 'pointer',
                                colorText: '/.colorLink',
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                                fontSize: () => 12,
                            },
                            dom: {
                                innerText: () => 'Подробнее'
                            },
                            event: {
                                clickOrTap: () => {
                                    return true;
                                },
                            },
                        }),
                        text: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.em',
                                '#ofsVer': () => 43,
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 11,
                            },
                            dom: {
                                innerHTML: () => '<b>СМА (Сравнительный Маркетинговый Анализ)</b> квартир в Москве и МО за 3 минуты в формате PDF. Анализ квартиры по 375 параметрам: БТИ, Росреестр, жкх, банки и т.д.',
                            },
                        }),
                    },
                }),
                news: () => ({
                    base: $$.$nl_panel,
                    prop: {
                        '#ofsHor': '.em',
                        '#ofsVer': $$.$me_atom2_prop(['<@promo.#ofsVer', '<@promo.#height', '.em'], ({ masters: [ofs, height, ofs2] }) => ofs + height + ofs2),
                        '#width': () => 619,
                        '#height': () => 300,
                        news_items: $$.$me_atom2_prop([], ({ atom }) => {
                            console.log('atom', atom);
                            const result = null;
                            fetch(newsUrl, {
                                method: 'get'
                            })
                                .then(response => response.json())
                                .then(jsonData => {
                                console.log(jsonData);
                                atom.value(jsonData);
                            })
                                .catch(err => {
                                console.error(err);
                            });
                            return result;
                        }),
                        news_item_ids: $$.$me_atom2_prop_keys(['.news_items']),
                        news_item: $$.$me_atom2_prop({ keys: ['.news_item_ids'], masters: ['.news_items'] }, ({ key: [id], masters: [items] }) => items[id]),
                    },
                    elem: {
                        title: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.em',
                                '#ofsVer': '.em',
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 18,
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop(['<<.sections'], ({ masters: [sections] }) => $$.$me_option_caption_text('news', sections).toUpperCase()),
                            },
                        }),
                        more: () => ({
                            prop: {
                                '#width': () => null,
                                '#height': () => null,
                                '#ofsVer': '.em',
                                '#ofsHor': '.em',
                                '#alignHor': () => $$.$me_align.right,
                                '#cursor': () => 'pointer',
                                colorText: '/.colorLink',
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                                fontSize: () => 12,
                            },
                            dom: {
                                innerText: () => 'Посмотреть все новости'
                            },
                            event: {
                                clickOrTap: () => {
                                    return true;
                                },
                            },
                        }),
                        news_cont: $$.$me_atom2_prop({ keys: ['.news_item_ids'] }, ({ key: [id] }) => ({
                            prop: {
                                id: () => id,
                                '#ofsVer': () => 46,
                            },
                            elem: {
                                item: () => ({
                                    base: news_item,
                                    prop: {
                                        '#ofsHor': '.em',
                                        '#width': $$.$me_atom2_prop(['<<.#width', '.em'], ({ masters: [width, ofs] }) => width - ofs * 2),
                                        '#ofsVer': $$.$me_atom2_prop(['<<.news_item_ids', '<.id', '.em'], ({ masters: [ids, id, ofs] }) => Math.round(ids.indexOf(id)) * (100 + ofs)),
                                        caption: $$.$me_atom2_prop(['<<.news_items'], ({ masters: [items] }) => items[id].title),
                                        imageUrl: $$.$me_atom2_prop(['<<.news_items'], ({ masters: [items] }) => items[id].image.thumb),
                                        text: $$.$me_atom2_prop(['<<.news_items'], ({ masters: [items] }) => items[id].description),
                                        url: $$.$me_atom2_prop(['<<.news_items'], ({ masters: [items] }) => items[id].link),
                                        date: $$.$me_atom2_prop(['<<.news_items'], ({ masters: [items] }) => items[id].pubDate),
                                    }
                                }),
                            }
                        })),
                    },
                }),
                orders: () => ({
                    base: $$.$nl_panel,
                    prop: {
                        '#ofsHor': '.em',
                        '#ofsVer': $$.$me_atom2_prop(['<@promo.#ofsVer', '<@promo.#height', '.em', '<@news.#height',], ({ masters: [ofs, height, ofs2, height2] }) => ofs + height + ofs2 + height2 + ofs2),
                        '#width': () => 619,
                        '#height': () => 135,
                    },
                    elem: {
                        title: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.em',
                                '#ofsVer': '.em',
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 18,
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop(['<<.sections'], ({ masters: [sections] }) => $$.$me_option_caption_text('orders', sections).toUpperCase()),
                            },
                        }),
                        more: () => ({
                            prop: {
                                '#width': () => null,
                                '#ofsVer': '.em',
                                '#ofsHor': '.em',
                                '#alignHor': () => $$.$me_align.right,
                                '#cursor': () => 'pointer',
                                colorText: '/.colorLink',
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                                fontSize: () => 12,
                            },
                            dom: {
                                innerText: () => 'Посмотреть все заказы'
                            },
                            event: {
                                clickOrTap: () => {
                                    return true;
                                },
                            },
                        }),
                    },
                }),
                alpha: () => ({
                    base: $$.$nl_panel,
                    prop: {
                        '#ofsVer': () => 54,
                        '#ofsHor': $$.$me_atom2_prop(['<@promo.#width', '.em'], ({ masters: [width, ofs] }) => ofs + width + ofs),
                        '#width': () => 179,
                        '#height': () => 142,
                    },
                    elem: {
                        svg: () => ({
                            prop: {
                                '#ofsVer': () => 12,
                                '#ofsHor': () => 19,
                            },
                            dom: {
                                innerHTML: () => `
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="78" height="17" viewBox="0 0 78 17">
                  <defs>
                      <path id="a" d="M0 15.91h76.666V.083H0z"/>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                      <path fill="#EF3124" d="M74.762 4.09l-2.656 2.8v-2.8h-1.922v7.07h1.922V8.185l2.843 2.977h2.483l-3.497-3.706 3.243-3.366zM67.011 6.727h-2.714V4.089h-1.965v7.072h1.965V8.372h2.714v2.789h1.965V4.089h-1.965z"/>
                      <g transform="translate(.724 .554)">
                          <path fill="#EF3124" d="M11.24 7.19c-.045 1.392-.224 1.67-1 1.67v1.75h.29c1.935 0 2.4-1.007 2.472-3.247l.078-2.478h1.815v5.725h1.893V3.15H11.37l-.131 4.04zM21.348 8.967h-1.222V7.072h1.222c.657 0 1.052.291 1.052.914 0 .676-.381.98-1.052.98m.145-3.55h-1.367V3.148h-1.893v7.46h3.286c2.064 0 2.8-1.35 2.8-2.623 0-1.643-1.025-2.57-2.826-2.57M30.485 8.98V4.766c1.051.146 1.709.94 1.709 2.107 0 1.166-.658 1.961-1.71 2.107zm-1.893 0c-1.052-.146-1.71-.941-1.71-2.107 0-1.166.658-1.961 1.71-2.107V8.98zm1.893-6.003V.207h-1.893v2.77c-2.17.185-3.629 1.736-3.629 3.896 0 2.173 1.46 3.724 3.629 3.91v2.809h1.893v-2.81c2.169-.172 3.628-1.736 3.628-3.91 0-2.172-1.46-3.723-3.628-3.895zM39.319 7.827c0 .861-.605 1.352-1.394 1.352-.683 0-1.222-.252-1.222-.994 0-.73.591-.848 1.104-.848h1.512v.49zm1.893.49V5.813c0-1.829-1.157-2.982-3.102-2.982-2.012 0-3.077 1.22-3.169 2.491h1.92c.065-.278.355-.755 1.249-.755.736 0 1.209.345 1.209 1.246h-1.88c-1.683 0-2.682.888-2.682 2.372 0 1.55 1.093 2.61 2.669 2.61 1.155 0 1.797-.55 2.077-.967.25.504.802.782 1.525.782h.657V8.887c-.342 0-.473-.159-.473-.57zM49.231 8.728h-2.024V6.025h2.024c1.052 0 1.643.49 1.643 1.351 0 .888-.591 1.352-1.643 1.352m.092-4.519h-2.116V2.102h4.903V.207h-6.888V10.61h4.101c2.274 0 3.576-1.14 3.576-3.234 0-1.974-1.302-3.167-3.576-3.167M58.25 7.827c0 .861-.605 1.352-1.394 1.352-.684 0-1.223-.252-1.223-.994 0-.73.592-.848 1.104-.848h1.512v.49zm1.892.49V5.813c0-1.829-1.157-2.982-3.102-2.982-2.011 0-3.076 1.22-3.168 2.491h1.919c.066-.278.355-.755 1.249-.755.736 0 1.21.345 1.21 1.246h-1.88c-1.683 0-2.682.888-2.682 2.372 0 1.55 1.093 2.61 2.668 2.61 1.156 0 1.797-.55 2.077-.967.25.504.802.782 1.525.782h.658V8.887c-.342 0-.474-.159-.474-.57z"/>
                          <mask id="b" fill="#fff">
                              <use xlink:href="#a"/>
                          </mask>
                          <path fill="#EF3124" d="M0 15.91h10.123v-2.12H0zM3.615 6.674l1.42-4.254h.052l1.341 4.254H3.615zm3.286-5.04C6.613.768 6.28.083 5.141.083 4 .082 3.645.764 3.341 1.635L.21 10.61h2.077l.723-2.134h3.997l.67 2.134h2.209L6.9 1.635z" mask="url(#b)"/>
                      </g>
                  </g>
              </svg>
            `
                            },
                        }),
                        title1: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': () => 20,
                                '#ofsVer': () => 41,
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 11,
                            },
                            dom: {
                                innerText: () => 'Публикация в Альфа Банк',
                            },
                        }),
                        title2: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': () => 20,
                                '#ofsVer': () => 59,
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 11,
                            },
                            dom: {
                                innerText: () => 'Дисконт на % ставку',
                            },
                        }),
                        title3: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': () => 20,
                                '#ofsVer': () => 76,
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 11,
                            },
                            dom: {
                                innerText: () => 'Поток заявок от клиентов',
                            },
                        }),
                        button: () => ({
                            base: $$.$nl_button,
                            prop: {
                                '#width': () => 140,
                                '#height': () => 24,
                                '#ofsVer': () => 101,
                                '#alignHor': () => $$.$me_align.center,
                                caption: () => 'Стать партнером',
                                target: () => '<',
                                fontSize: () => 12,
                            },
                            style: {
                                background: () => '#ef3124',
                                borderRadius: () => '4px',
                            },
                            event: {
                                clickOrTap: () => {
                                    return true;
                                },
                            }
                        }),
                    },
                }),
                absolut: () => ({
                    base: $$.$nl_panel,
                    prop: {
                        '#ofsVer': $$.$me_atom2_prop(['<@alpha.#ofsVer', '<@alpha.#height', '.em'], ({ masters: [ofs, height, ofs2] }) => ofs + height + ofs2),
                        '#ofsHor': $$.$me_atom2_prop(['<@promo.#width', '.em'], ({ masters: [width, ofs] }) => ofs + width + ofs),
                        '#width': () => 179,
                        '#height': () => 121,
                    },
                    elem: {
                        svg: () => ({
                            prop: {
                                '#ofsVer': () => 12,
                                '#ofsHor': () => 19,
                            },
                            dom: {
                                innerHTML: () => `
              <svg xmlns="http://www.w3.org/2000/svg" width="92" height="19" viewBox="0 0 92 19">
                  <g fill="none" fill-rule="evenodd">
                      <path fill="#E15D29" d="M3.314 12.527l1.826 1.787v-4.068c0-.79-.448-1.758-1.014-2.302L2.321 6.177v4.07c0 .78.45 1.757.993 2.28zm6.054 5.854l-3.18-3.045c-.63-.606-1.724-1.022-2.627-1.022H.912l3.175 3.041a3.793 3.793 0 0 0 2.536 1.026h2.745zM5.14 6.248c0-.881.415-1.813 1.067-2.44L9.367.753v2.55c0 .867-.431 1.92-1.062 2.527L5.14 8.889v-2.64z"/>
                      <path fill="#595A59" d="M53.229 12.5c0 .328-.27.59-.608.59l-1.765.003a.598.598 0 0 1-.608-.587v-2.352c0-.323.274-.585.608-.585l1.765-.005c.338 0 .608.262.608.585V12.5zm-.302-4.113l-2.32.006c-1.003 0-1.821.79-1.821 1.761v.412h-1.274V8.393h-1.518v5.875h1.518v-2.527h1.274v.765c0 .97.818 1.762 1.821 1.762l2.32-.005c1 0 1.82-.792 1.82-1.762v-2.352c0-.97-.82-1.762-1.82-1.762zm-12.278.006h3.867v5.875H43V9.57l-2.049-.001a.596.596 0 0 0-.606.585v2.352c0 .97-.817 1.762-1.822 1.762h-.487v-1.175h.184a.597.597 0 0 0 .606-.587v-2.352c0-.97.817-1.761 1.823-1.761zM12.324 11.33l1.387-3.76 1.42 3.76h-2.807zm.485-5.289l-3.441 8.227h1.872l.65-1.762h3.685l.668 1.762h1.81L14.61 6.041h-1.8zm42.492 2.352h5.357v1.176h-1.921v4.699h-1.515V9.569H55.3V8.393zm-32.359 4.113a.598.598 0 0 1-.607.587h-1.82a.596.596 0 0 1-.608-.587V10.153a.597.597 0 0 1 .607-.584h1.821c.334 0 .607.262.607.585v2.352zm-.303-4.113h-1.671c-.395 0-.76.123-1.06.33v-.92c0-.323.271-.585.606-.585h3.217V6.041H20.21c-1.003 0-1.82.791-1.82 1.762v4.703c0 .97.816 1.762 1.82 1.762h2.429c1.004 0 1.82-.792 1.82-1.762v-2.352c0-.97-.816-1.761-1.82-1.761zm13.281 4.113a.598.598 0 0 1-.607.587h-1.82a.597.597 0 0 1-.608-.587v-2.352c0-.323.272-.585.608-.585h1.82c.333 0 .607.262.607.585v2.352zm-.305-4.113h-2.428c-1.002 0-1.82.79-1.82 1.761v2.352c0 .97.818 1.762 1.82 1.762h2.428c1.006 0 1.823-.792 1.823-1.762v-2.352c0-.97-.817-1.761-1.823-1.761zm-8.642 1.761v2.352c0 .326.27.587.606.587h2.999v1.175h-3.304c-1.002 0-1.82-.792-1.82-1.762v-2.352c0-.97.818-1.761 1.82-1.761h3.304v1.176h-2.999a.596.596 0 0 0-.606.585zm41.336 1.696c0 .686-.575 1.243-1.284 1.243h-2.322v-3.02h2.322c.709 0 1.284.555 1.284 1.243v.534zm-.792-2.955h-2.814V7.217h4.674V6.04h-6.19v8.227h4.33c1.38 0 2.5-1.082 2.5-2.418v-.534c0-1.335-1.12-2.421-2.5-2.421zm20.107 2.846h-.553v2.527h-1.52V8.393h1.52v2.173h.555l2.006-2.173h1.707l-2.56 2.766 2.733 3.109h-1.9l-1.988-2.527zm-12.23 1.352h-2.43a.598.598 0 0 1-.61-.587v-.062c0-.326.272-.591.61-.591h2.43v1.24zm-.307-4.7h-3.822v1.176h3.518a.6.6 0 0 1 .611.585v.524h-2.736c-1.002 0-1.82.791-1.82 1.766v.062c0 .97.818 1.762 1.82 1.762h4.249v-4.114c0-.97-.816-1.761-1.82-1.761zm7.614 0h1.518v5.875H82.7v-2.527h-2.973v2.527h-1.52V8.393h1.52v2.173h2.973V8.393z"/>
                  </g>
              </svg>
            `
                            },
                        }),
                        title1: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': () => 20,
                                '#ofsVer': () => 42,
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 11,
                            },
                            dom: {
                                innerHTML: () => 'Дисконт 1% на ипотечную ставку',
                            },
                        }),
                        button: () => ({
                            base: $$.$nl_button,
                            prop: {
                                '#width': () => 140,
                                '#height': () => 24,
                                '#ofsVer': () => 80,
                                '#alignHor': () => $$.$me_align.center,
                                caption: () => 'Стать партнером',
                                target: () => '<',
                                fontSize: () => 12,
                            },
                            style: {
                                background: () => '#ff6600',
                                borderRadius: () => '4px',
                            },
                            event: {
                                clickOrTap: () => {
                                    return true;
                                },
                            }
                        }),
                    },
                }),
                face: () => ({
                    base: $$.$nl_panel,
                    prop: {
                        '#ofsVer': $$.$me_atom2_prop(['<@alpha.#ofsVer', '<@alpha.#height', '.em', '<@absolut.#height',], ({ masters: [ofs, height, ofs2, height2] }) => ofs + height + ofs2 + height2 + ofs2),
                        '#ofsHor': $$.$me_atom2_prop(['<@promo.#width', '.em'], ({ masters: [width, ofs] }) => ofs + width + ofs),
                        '#width': () => 179,
                        '#height': () => 161,
                    },
                    elem: {
                        title1: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': () => 20,
                                '#ofsVer': () => 14,
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 12,
                                fontWeight: () => 700,
                            },
                            dom: {
                                innerText: () => 'Уважаемый клиент!',
                            },
                        }),
                        title2: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': () => 20,
                                '#ofsVer': () => 36,
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 11,
                            },
                            dom: {
                                innerHTML: () => 'Для публикации в "зелёной зоне" Вам необходимо раскрыть своё лицо',
                            },
                        }),
                        title3: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': () => 20,
                                '#ofsVer': () => 83,
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 11,
                                fontStyle: () => 'italic',
                            },
                            dom: {
                                innerHTML: () => 'Публикация в "зелёной зоне" бесплатна',
                            },
                        }),
                        button: () => ({
                            base: $$.$nl_button,
                            prop: {
                                '#width': () => 140,
                                '#height': () => 24,
                                '#ofsVer': () => 121,
                                '#alignHor': () => $$.$me_align.center,
                                caption: () => 'Раскрыть лицо',
                                target: () => '<',
                                fontSize: () => 12,
                            },
                            style: {
                                borderRadius: () => '4px',
                            },
                            event: {
                                clickOrTap: () => {
                                    return true;
                                },
                            }
                        }),
                    },
                }),
            },
        };
        const news_item = {
            prop: {
                '#height': () => 100,
                caption: $$.$me_atom2_prop_abstract(),
                imageUrl: $$.$me_atom2_prop_abstract(),
                text: $$.$me_atom2_prop_abstract(),
                url: $$.$me_atom2_prop_abstract(),
                date: $$.$me_atom2_prop_abstract(),
            },
            elem: {
                image: () => ({
                    node: 'img',
                    prop: {
                        '#width': () => 130,
                        '#height': () => 97,
                        '#ofsHor': () => 0,
                        '#ofsVer': () => 0,
                    },
                    attr: {
                        src: '<.imageUrl',
                    },
                }),
                title: () => ({
                    prop: {
                        '#height': () => null,
                        '#width': () => null,
                        '#ofsVer': '<@icon1.#ofsVer',
                        '#ofsHor': $$.$me_atom2_prop(['<@image.#ofsHor', '<@image.#width', '.em'], ({ masters: [ofs_h, width, ofs] }) => ofs_h + width + ofs),
                    },
                    style: {
                        fontFamily: () => 'system-ui',
                        fontSize: () => 12,
                        fontWeight: () => 500,
                    },
                    dom: {
                        innerText: '<.caption',
                    },
                }),
                text: () => ({
                    prop: {
                        '#height': () => null,
                        '#width': $$.$me_atom2_prop(['<.#width', '<@image.#width', '.em'], ({ masters: [width, img_width, ofs] }) => width - img_width - ofs),
                        '#ofsVer': $$.$me_atom2_prop(['<@image.#ofsVer', '<@title.#height'], ({ masters: [ofs, height] }) => ofs + height + 10),
                        '#ofsHor': $$.$me_atom2_prop(['<@image.#ofsHor', '<@image.#width', '.em'], ({ masters: [ofs_h, width, ofs] }) => ofs_h + width + ofs),
                    },
                    style: {
                        fontFamily: () => 'system-ui',
                        fontSize: () => 12,
                        fontWeight: () => 400,
                    },
                    dom: {
                        innerText: '<.text',
                    },
                }),
                more: () => ({
                    prop: {
                        '#width': () => null,
                        '#ofsVer': $$.$me_atom2_prop(['<@image.#ofsVer'], ({ masters: [ofs] }) => ofs + 86),
                        '#ofsHor': $$.$me_atom2_prop(['<@image.#ofsHor', '<@image.#width', '.em'], ({ masters: [ofs_h, width, ofs] }) => ofs_h + width + ofs),
                        '#cursor': () => 'pointer',
                        colorText: '/.colorLink',
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                        fontSize: () => 12,
                    },
                    dom: {
                        innerText: () => 'Подробнее'
                    },
                    event: {
                        clickOrTap: () => {
                            console.log('link');
                            return true;
                        },
                    },
                }),
                date: () => ({
                    prop: {
                        '#width': () => null,
                        '#ofsVer': $$.$me_atom2_prop(['<@image.#ofsVer'], ({ masters: [ofs] }) => ofs + 86),
                        '#alignHor': () => $$.$me_align.right,
                        fontSize: () => 10,
                    },
                    dom: {
                        innerText: '<.date'
                    },
                    style: {
                        color: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#6a6c74' : '#d0d0d0'),
                    },
                }),
            }
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//workspace.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_search_tabs = {
            elem: {
                tab: $$.$me_atom2_prop({ keys: ['<.order_ids'] }, ({ key: [id] }) => ({
                    base: tab,
                    prop: {
                        id: () => id,
                    },
                    dom: {
                        innerText: id != 'new' ? `<<.order_title[${id}]` : (() => 'Новый заказ +'.toUpperCase()),
                    },
                })),
            },
        };
        const tab = {
            node: 'span',
            prop: {
                isSelected: $$.$me_atom2_prop(['<<.selected', '.id'], ({ masters: [selected, id] }) => selected == id),
                '#cursor': $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? 'default' : 'pointer'),
            },
            event: {
                clickOrTap: () => {
                    $$.a('<<.selected', $$.a('.id'));
                    return true;
                },
            },
            style: {
                position: () => 'relative',
                paddingLeft: () => 10,
                paddingRight: () => 10,
                paddingBottom: () => 5,
                borderBottom: $$.$me_atom2_prop(['.isSelected', '/.theme'], ({ masters: [isSelected, theme] }) => `3px solid rgba(${theme == $$.$me_theme.light ? '49,55,69' : '255,255,255'}, ${!isSelected ? .2 : theme == $$.$me_theme.light ? 1 : .5})`),
                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(18 / 16)),
                fontWeight: $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? 500 : 400)
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//tabs.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_search_new = {
            prop: {
                data: () => ({
                    Продажа: {
                        'Москва': {
                            Квартиры: {
                                'Вся база': 1000000,
                                'За сегодня': 1000,
                                'Новые': 1000,
                            },
                            Комнаты: {
                                'Вся база': 150000,
                                'За сегодня': 150,
                                'Новые': 150,
                            },
                            Загородная: {
                                'Вся база': 500000,
                                'За сегодня': 500,
                                'Новые': 500,
                            },
                            Коммерческая: {
                                'Вся база': 1000,
                                'За сегодня': 150,
                                'Новые': 150,
                            },
                            Гаражи: {
                                'Вся база': 15000,
                                'За сегодня': 15,
                                'Новые': 15,
                            },
                            Доли: {
                                'Вся база': 700,
                                'За сегодня': 70,
                                'Новые': 70,
                            },
                        },
                        'Московская область': {
                            Квартиры: {
                                'Вся база': 1000000,
                                'За сегодня': 1000,
                                'Новые': 1000,
                            },
                            Комнаты: {
                                'Вся база': 150000,
                                'За сегодня': 150,
                                'Новые': 150,
                            },
                            Коммерческая: {
                                'Вся база': 1000,
                                'За сегодня': 150,
                                'Новые': 150,
                            },
                            Гаражи: {
                                'Вся база': 15000,
                                'За сегодня': 15,
                                'Новые': 15,
                            },
                            Доли: {
                                'Вся база': 700,
                                'За сегодня': 70,
                                'Новые': 70,
                            },
                        },
                    },
                }),
                panel_names: $$.$me_atom2_prop_keys(['.data']),
                panel_data: $$.$me_atom2_prop({ keys: ['.panel_names'], masters: ['.data'] }, ({ key: [panel_name], masters: [data] }) => data[panel_name]),
                panel_left_first: '.em',
                panel_top_first: () => 0,
                panel_width: () => 536,
                panel_height: () => 580,
                panel_space_hor: '.em',
                panel_space_ver: '.em',
                panel_pos: $$.$me_atom2_prop({
                    keys: ['.panel_names'],
                    masters: $$.$me_atom2_prop_masters(['.panel_names'], ({ key: [panel_name], masters: [panel_names] }) => {
                        const idx = panel_names.indexOf(panel_name);
                        return !idx ?
                            ['.panel_left_first', '.panel_top_first'] :
                            [
                                '.panel_left_first',
                                '.panel_top_first',
                                '.#width',
                                `.panel_pos[${panel_names[idx - 1]}]`,
                                '.panel_width',
                                '.panel_height',
                                '.panel_space_hor',
                                '.panel_space_ver',
                            ];
                    }),
                }, ({ key: [panel_name], len, masters: [left, top, width, pos, panel_width, panel_height, space_hor, space_ver] }) => {
                    if (len <= 2) {
                        return { left, top };
                    }
                    else {
                        let result = {
                            left: pos.left + panel_width + space_hor,
                            top: pos.top,
                        };
                        if (result.left + panel_width + space_hor > width) {
                            result.left = left;
                            result.top += panel_height + space_ver;
                        }
                        return result;
                    }
                }),
            },
            elem: {
                panel: $$.$me_atom2_prop({ keys: ['.panel_names'] }, ({ key: [panel_name] }) => ({
                    base: $$.$nl_panel,
                    prop: {
                        colorBackground: () => 'white',
                        '#width': '<.panel_width',
                        '#height': '<.panel_height',
                        '#ofsHor': $$.$me_atom2_prop([`<.panel_pos[${panel_name}]`], ({ masters: [pos] }) => $$.$me_atom2_anim({ to: pos.left, duration: 800 })),
                        '#ofsVer': $$.$me_atom2_prop([`<.panel_pos[${panel_name}]`], ({ masters: [pos] }) => $$.$me_atom2_anim({ to: pos.top, duration: 800 })),
                        tables: `<.panel_data[${panel_name}]`,
                        table_keys: $$.$me_atom2_prop_keys(['.tables']),
                        table: $$.$me_atom2_prop({ keys: ['.table_keys'], masters: ['.tables'] }, ({ key: [table_key], masters: [tables] }) => tables[table_key]),
                        table_height: $$.$me_atom2_prop({ keys: ['.table_keys'], masters: ['.table_header_height', '.table_row_keys[]', '.table_row_height', '.table_row_space'] }, ({ masters: [header_height, table_row_key, row_height, row_space] }) => header_height + 2 * row_space + table_row_key.length * (row_height + row_space)),
                        table_row_height: () => 32,
                        table_header_height: () => 40,
                        table_ver_ofs: () => 69,
                        table_ver_space: '.em',
                        table_row_space: () => 1,
                        table_top: $$.$me_atom2_prop({
                            keys: ['.table_keys'],
                            masters: $$.$me_atom2_prop_masters(['.table_keys'], ({ key: [table_key], masters: [table_keys] }) => {
                                const idx = table_keys.indexOf(table_key);
                                return (!idx ? ['.table_ver_ofs'] :
                                    [
                                        `.table_top[${table_keys[idx - 1]}]`,
                                        `.table_height[${table_keys[idx - 1]}]`,
                                        '.table_ver_space',
                                    ]);
                            }),
                        }, $$.$me_atom2_prop_compute_fn_sum()),
                        table_row_keys: $$.$me_atom2_prop_keys({ keys: ['.table_keys'], masters: ['.table[]'] }),
                        table_row: $$.$me_atom2_prop({ keys: ['.table_keys', '.table_row_keys[]'], masters: ['.table[]'] }, ({ key: [table_key, table_row_key], masters: [table, key] }) => table[table_row_key]),
                        table_flds: () => ({
                            'Вся база': {
                                width: 66 + 2 * (26 - (33 - 24)),
                                opacity: 1,
                            },
                            'За сегодня': {
                                width: 83 + 2 * (33 - 24),
                                opacity: 0.7,
                            },
                            'Новые': {
                                width: 51 + 2 * 24,
                                opacity: 0.7,
                            },
                        }),
                        table_cell_keys: $$.$me_atom2_prop_keys(['.table_flds']),
                        table_fld: $$.$me_atom2_prop({ keys: ['.table_cell_keys'], masters: ['.table_flds'] }, ({ key: [key], masters: [table_flds] }) => table_flds[key]),
                        table_fld_width: $$.$me_atom2_prop({ keys: ['.table_cell_keys'], masters: ['.table_fld[]'] }, ({ key: [key], masters: [table_fld] }) => table_fld.width),
                        table_fld_opacity: $$.$me_atom2_prop({ keys: ['.table_cell_keys'], masters: ['.table_fld[]'] }, ({ key: [key], masters: [table_fld] }) => table_fld.opacity),
                        table_fld_width_sum: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.table_cell_keys'], ({ masters: [table_cell_keys] }) => table_cell_keys.map(key => `.table_fld_width[${key}]`)), p => p.masters.reduce((result, w) => result + w, 0)),
                        table_cell: $$.$me_atom2_prop({ keys: ['.table_keys', '.table_row_keys[]', '.table_cell_keys'], masters: ['.table_row[][]'] }, ({ key: [table_key, table_row_key, table_cell_key], masters: [row] }) => {
                            var x = (row[table_cell_key] + '').split('.');
                            var x1 = x[0];
                            var x2 = x.length > 1 ? '.' + x[1] : '';
                            var rgx = /(\d+)(\d{3})/;
                            while (rgx.test(x1))
                                x1 = x1.replace(rgx, '$1' + ' ' + '$2');
                            return x1 + x2;
                        }),
                    },
                    elem: {
                        header: () => ({
                            prop: {
                                '#ofsHor': () => 24,
                                '#ofsVer': () => 32,
                                '#width': () => null,
                                '#height': () => null,
                                em: $$.$me_atom2_prop(['/.em'], ({ masters: [em] }) => em / 16 * 18),
                                fontWeight: () => 500,
                            },
                            dom: {
                                innerText: () => panel_name.toUpperCase(),
                            },
                        }),
                        table: $$.$me_atom2_prop({ keys: ['.table_keys'] }, ({ key: [table_key] }) => ({
                            node: 'table',
                            prop: {
                                '#ofsVer': `<.table_top[${table_key}]`,
                                '#ofsHor': '.em',
                                '#height': `<.table_height[${table_key}]`,
                                '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor'], ({ masters: [width, ofsHor] }) => width - 2 * ofsHor),
                            },
                            style: {
                                borderCollapse: () => 'separate',
                                borderSpacing: $$.$me_atom2_prop(['<.table_row_space'], ({ masters: [table_row_space] }) => `0 ${table_row_space}px`),
                            },
                            elem: {
                                header: () => ({
                                    node: 'tr',
                                    prop: {
                                        '#height': '<<.table_header_height',
                                    },
                                    style: {
                                        position: () => 'relative',
                                        background: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#d8dce3' : '#6e7581'),
                                    },
                                    elem: {
                                        key: () => ({
                                            base: th,
                                            prop: {
                                                '#width': $$.$me_atom2_prop(['<.#width', '<<<.table_fld_width_sum'], ({ masters: [width, table_fld_width_sum] }) => width - table_fld_width_sum),
                                            },
                                            style: {
                                                textAlign: () => 'left',
                                                paddingLeft: () => 8,
                                            },
                                            dom: {
                                                innerText: () => table_key,
                                            },
                                        }),
                                        fld: $$.$me_atom2_prop({ keys: ['<<.table_cell_keys'] }, ({ key: [caption] }) => ({
                                            base: th,
                                            prop: {
                                                '#width': `<<<.table_fld_width[${caption}]`,
                                            },
                                            style: {
                                                textAlign: () => 'center',
                                            },
                                            dom: {
                                                innerText: () => caption,
                                            },
                                        })),
                                    },
                                }),
                                row: $$.$me_atom2_prop({ keys: [`<.table_row_keys[${table_key}]`] }, ({ key: [table_row_key] }) => ({
                                    node: 'tr',
                                    prop: {
                                        '#height': '<<.table_row_height',
                                        '#cursor': () => 'pointer',
                                    },
                                    event: {
                                        clickOrTap: () => {
                                            console.log(panel_name, table_key, table_row_key);
                                            return true;
                                        }
                                    },
                                    style: {
                                        position: () => 'relative',
                                        background: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#f0f1f4' : '#878f9b'),
                                    },
                                    elem: {
                                        key: () => ({
                                            base: td,
                                            prop: {
                                                '#width': $$.$me_atom2_prop(['<.#width', '<<<.table_fld_width_sum'], ({ masters: [width, table_fld_width_sum] }) => width - table_fld_width_sum),
                                            },
                                            style: {
                                                paddingLeft: () => 8,
                                                color: () => '#53adff',
                                                background: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'transparent' : 'rgb(70, 79, 99)'),
                                            },
                                            dom: {
                                                innerText: () => table_row_key,
                                            },
                                        }),
                                        fld: $$.$me_atom2_prop({ keys: ['<<.table_cell_keys'] }, ({ key: [col] }) => ({
                                            base: td,
                                            prop: {
                                                '#width': `<<<.table_fld_width[${col}]`,
                                            },
                                            style: {
                                                textAlign: () => 'center',
                                                color: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#6a6c74' : 'white'),
                                                opacity: `<<<.table_fld_opacity[${col}]`,
                                            },
                                            dom: {
                                                innerText: `<<<.table_cell[${table_key}][${table_row_key}][${col}]`,
                                            },
                                        })),
                                    },
                                }))
                            },
                        })),
                    },
                }))
            },
        };
        const td = {
            node: 'td',
            style: {
                position: () => 'relative',
                paddingLeft: () => 0,
                paddingTop: () => 0,
                paddingRight: () => 0,
                paddingBottom: () => 0,
            },
        };
        const th = {
            base: td,
            node: 'th',
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//new.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_search_panel = {
            base: $$.$nl_panel,
            prop: {
                '#ofsHor': '.em',
                '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor'], ({ masters: [width, ofsHor] }) => width - 2 * ofsHor),
            }
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//panel.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        let $nl_scheme_will_action_enum;
        (function ($nl_scheme_will_action_enum) {
            $nl_scheme_will_action_enum[$nl_scheme_will_action_enum["none"] = 0] = "none";
            $nl_scheme_will_action_enum[$nl_scheme_will_action_enum["select"] = 1] = "select";
            $nl_scheme_will_action_enum[$nl_scheme_will_action_enum["deselect"] = 2] = "deselect";
        })($nl_scheme_will_action_enum = $$.$nl_scheme_will_action_enum || ($$.$nl_scheme_will_action_enum = {}));
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scheme.js.map
;
"use strict";
//crumbs_pc.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_scheme_metro_crumbs_pad = {
            type: '$nl_scheme_metro_crumbs_pad',
            prop: {},
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//crumbs_pad.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_scheme_metro = {};
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//metro.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_panel = {
            type: '$me_panel',
            prop: Object.assign({}, $$.$me_atom2_prop_cascade(() => 0, 'borderRadius', [
                'borderRadiusLeftTop', 'borderRadiusRightTop',
                'borderRadiusLeftBottom', 'borderRadiusRightBottom',
            ]), $$.$me_atom2_prop_same_def(() => 'transparent', ['colorBackground']), $$.$me_atom2_prop_cascade(() => 0, 'padding', [
                ['paddingHor', ['paddingLeft', 'paddingRight']],
                ['paddingVer', ['paddingTop', 'paddingBottom']],
            ]), $$.$me_atom2_prop_cascade(() => 'transparent', 'colorBorder', [
                ['colorBorderHor', ['colorBorderLeft', 'colorBorderRight']],
                ['colorBorderVer', ['colorBorderTop', 'colorBorderBottom']],
            ]), $$.$me_atom2_prop_cascade(() => 0, 'borderWidth', [
                ['borderWidthHor', ['borderWidthLeft', 'borderWidthRight']],
                ['borderWidthVer', ['borderWidthTop', 'borderWidthBottom']],
            ])),
            render: p => {
                let borderHasWidth = false;
                let borderHasWidthSame = true;
                let borderHasColor = false;
                let borderHasColorSame = true;
                let prevWidth, prevColor;
                const colorBorder = {};
                const borderWidth = {};
                for (const s of ['Left', 'Top', 'Right', 'Bottom']) {
                    const side = s.toLowerCase();
                    const currWidth = borderWidth[side] = $$.a('.borderWidth' + s) * p.pixelRatio;
                    const currColor = colorBorder[side] = $$.a('.colorBorder' + s);
                    borderHasWidth = borderHasWidth || (currWidth > 0);
                    borderHasColor = borderHasColor || !!currColor;
                    if (null != prevWidth) {
                        borderHasWidthSame = borderHasWidthSame && (currWidth == prevWidth);
                        borderHasColorSame = borderHasColorSame && (currColor == prevColor);
                    }
                    prevWidth = currWidth;
                    prevColor = currColor;
                }
                let prevRadius;
                let borderHasRadius = false;
                let borderHasRadiusSame = true;
                for (const s of ['LeftTop', 'RightTop', 'LeftBottom', 'RightBottom']) {
                    const corner = s.toLowerCase();
                    const currRadius = borderWidth[corner] = $$.a('.borderRadius' + s) * p.pixelRatio;
                    borderHasRadius = borderHasRadius || currRadius > 0;
                    if (null != prevRadius)
                        borderHasRadiusSame = borderHasRadiusSame && (currRadius == prevRadius);
                    prevRadius = currRadius;
                }
                const colorBackground = $$.a('.colorBackground');
                if (borderHasWidth && borderHasColor || colorBackground && colorBackground != 'transparent') {
                    $$.$me_atom2_ctx_rect({
                        ctx: p.ctx,
                        ctxTop: p.ctxRect.top,
                        ctxLeft: p.ctxRect.left,
                        ctxWidth: p.ctxRect.right - p.ctxRect.left,
                        ctxHeight: p.ctxRect.bottom - p.ctxRect.top,
                        ctxBorderRadius: !borderHasRadius ? null : borderHasRadiusSame ? prevRadius : {
                            leftTop: p.pixelRatio * $$.a('.borderRadiusLeftTop'),
                            rightTop: p.pixelRatio * $$.a('.borderRadiusRightTop'),
                            rightBottom: p.pixelRatio * $$.a('.borderRadiusRightBottom'),
                            leftBottom: p.pixelRatio * $$.a('.borderRadiusLeftBottom'),
                        },
                        fillStyle: colorBackground == 'transparent' ? null : colorBackground,
                        stroke: !borderHasWidth || !borderHasColor ? null : {
                            style: borderHasColorSame ? prevColor : colorBorder,
                            ctxWidth: borderHasWidthSame ? prevWidth : borderWidth,
                        }
                    });
                }
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//panel.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $me_label_text_n_ctxLeft(ctx, text, period, pixelRatio, width, left, paddingLeft, paddingRight) {
            const ctxContentWidth = Math.max(0, width - paddingLeft - paddingRight) * pixelRatio;
            $$.$me_atom2_control.font_prepare(ctx, pixelRatio);
            let ctxTextWidth = ctx.measureText(text).width;
            let ctxLeft = pixelRatio * (left + paddingLeft);
            if (ctxTextWidth > ctxContentWidth) {
                const ctxPeriodWidth = ctx.measureText(period).width;
                if (ctxContentWidth < ctxPeriodWidth) {
                    console.error($$.a.curr.name(), { ctxContentWidth, ctxPeriodWidth });
                    return { text, ctxLeft };
                }
                let len = text.length, wi = ctxTextWidth, s;
                while (len && wi > ctxContentWidth - ctxPeriodWidth)
                    wi = ctx.measureText(s = text.slice(0, --len)).width;
                ctxTextWidth = wi + ctxPeriodWidth;
                text = s + period;
            }
            ctxLeft += $$.$me_align_correction($$.a('.alignHor'), () => Math.max(0, ctxContentWidth - ctxTextWidth));
            return { text, ctxLeft };
        }
        $$.$me_label_text_n_ctxLeft = $me_label_text_n_ctxLeft;
        $$.$me_label = {
            type: '$me_label',
            base: $$.$me_panel,
            prop: Object.assign({ text: $$.$me_atom2_prop_abstract(), period: () => '...' }, $$.$me_atom2_prop_cascade(() => $$.$me_align.left, 'align', ['alignHor', 'alignVer']), $$.$me_atom2_prop_cascade(() => $$.$me_align.left, 'ofs', ['ofsHor', 'ofsVer']), { _text_n_ctxLeft: $$.$me_atom2_prop([
                    '.#ctx', '.text', '.period', '/.#pixelRatio', '.#width', '.#left', '.paddingLeft', '.paddingRight'
                ], ({ masters: [ctx, text, period, pixelRatio, width, left, paddingLeft, paddingRight] }) => $me_label_text_n_ctxLeft(ctx, text, period, pixelRatio, width, left, paddingLeft, paddingRight)), _ctxLeft: $$.$me_atom2_prop(['._text_n_ctxLeft'], ({ masters: [val] }) => val.ctxLeft), _text: $$.$me_atom2_prop(['._text_n_ctxLeft'], ({ masters: [val] }) => val.text), _textWidth: $$.$me_atom2_prop(['.#ctx', '.text', '/.#pixelRatio', '.fontSize', '.fontWeight', '.fontFamily'], ({ masters: [ctx, text, pixelRatio] }) => {
                    $$.$me_atom2_control.font_prepare(ctx, pixelRatio);
                    const result = Math.ceil(ctx.measureText(text).width / pixelRatio);
                    return result;
                }) }, $$.$me_atom2_prop_same_fn_compute($$.$me_atom2_prop_compute_fn_sum(), {
                '#width': ['._textWidth', '.paddingLeft', '.paddingRight'],
                '#height': ['.fontSize', '.paddingTop', '.paddingBottom'],
            })),
            render: p => {
                let { ctxWidth, ctxHeight } = p;
                const ctxFontSize = $$.$me_atom2_control.font_prepare(p.ctx, p.pixelRatio);
                const paddingLeft = $$.a('.paddingLeft');
                const paddingRight = $$.a('.paddingRight');
                const ctxPaddingLeft = Math.round(p.pixelRatio * paddingLeft);
                const ctxPaddingRight = Math.round(p.pixelRatio * paddingRight);
                const ctxPaddingTop = Math.round(p.pixelRatio * $$.a('.paddingTop'));
                const ctxPaddingBottom = Math.round(p.pixelRatio * $$.a('.paddingBottom'));
                ctxHeight -= ctxPaddingTop + ctxPaddingBottom;
                if (ctxHeight < ctxFontSize - 1) {
                    console.error({ ctxHeight, ctxFontSize });
                    return;
                }
                const align = $$.a('.alignVer');
                const ctxOfs = $$.a('.ofsVer') * p.pixelRatio;
                const ctxCorrection = align == $$.$me_align.bottom ? ctxOfs :
                    align == $$.$me_align.top ? ctxHeight - ctxFontSize - ctxOfs :
                        (ctxHeight - ctxFontSize) / 2 - ctxOfs;
                const bottom = p.ctxRect.bottom - ctxPaddingBottom - ctxCorrection;
                p.ctx.fillStyle = $$.a('.colorText');
                let text = $$.a('._text') + '';
                const ctxLeft = $$.a('._ctxLeft');
                ctxWidth -= ctxLeft - $$.a('.#left') * p.pixelRatio;
                while (p.ctx.measureText(text).width > ctxWidth)
                    text = text.slice(0, -1);
                p.ctx.fillText(text, ctxLeft, bottom);
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//label.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_select = {
            prop: {
                options: $$.$me_atom2_prop_abstract(),
                value: $$.$me_atom2_prop_abstract(),
                colorBorder: $$.$me_atom2_prop_abstract(),
                colorBorderSelected: $$.$me_atom2_prop_abstract(),
                colorText: $$.$me_atom2_prop_abstract(),
                colorTextSelected: $$.$me_atom2_prop_abstract(),
                colorBackground: $$.$me_atom2_prop_abstract(),
                colorBackgroundSelected: $$.$me_atom2_prop_abstract(),
                borderRadius: $$.$me_atom2_prop_abstract(),
                borderWidth: $$.$me_atom2_prop_abstract(),
                paddingHor: $$.$me_atom2_prop_abstract(),
                '#width': $$.$me_atom2_prop_abstract(),
                '#height': $$.$me_atom2_prop_abstract(),
                option_width_min: $$.$me_atom2_prop_abstract(),
                fontFamily: $$.$me_atom2_prop_abstract(),
                fontWeight: $$.$me_atom2_prop_abstract(),
                fontWeightSelected: $$.$me_atom2_prop_abstract(),
                fontSize: $$.$me_atom2_prop_abstract(),
                alignVer: () => $$.$me_align.center,
                ofsVer: () => 0,
                no_adjust: () => false,
                option_ids: $$.$me_atom2_prop_keys(['.options']),
                _option_width: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.option_ids'], ({ masters: [option_ids] }) => {
                    const result = ['.no_adjust', '.option_ids', '.options', '.value', '.#width', '.option_width_min'];
                    for (const id of option_ids)
                        result.push(`^option[${id}]._textWidth`, `^option[${id}].paddingLeft`, `^option[${id}].paddingRight`);
                    return result;
                }), ({ masters, prev }) => {
                    const [no_adjust, option_ids, options, value, width_total, option_width_min] = masters;
                    if (no_adjust && prev)
                        return prev;
                    const masters_base = 6;
                    const width = {};
                    let width_sum = 0;
                    let width_excess_base = 0;
                    const ids = [];
                    let w;
                    for (let i = 0; i < option_ids.length; i++) {
                        const id = option_ids[i];
                        const caption = $$.$me_option_caption(id, options, value);
                        const isSpecifiedWidth = typeof caption != 'string' &&
                            caption &&
                            typeof caption.width == 'number';
                        const w = width[id] =
                            isSpecifiedWidth ?
                                caption.width :
                                Math.max(option_width_min, masters[masters_base + i * 3] + masters[masters_base + 1 + i * 3] + masters[masters_base + 2 + i * 3]);
                        width_sum += w;
                        if (!isSpecifiedWidth) {
                            width_excess_base += w;
                            ids.push(id);
                        }
                    }
                    const width_excess = width_total - width_sum;
                    for (const id of ids)
                        width[id] *= (1 + width_excess / width_excess_base);
                    return width;
                }),
                option_width: $$.$me_atom2_prop({ keys: ['.option_ids'], masters: ['._option_width'] }, ({ key: [id], masters: [width] }) => width[id]),
                option_left: $$.$me_atom2_prop({
                    keys: ['.option_ids'],
                    masters: $$.$me_atom2_prop_masters(['.option_ids'], ({ key: [id], masters: [ids] }) => {
                        const idx = ids.indexOf(id);
                        const result = [];
                        if (!idx)
                            return result;
                        for (let i = 0; i < idx; i++)
                            result.push(`.option_width[${ids[i]}]`);
                        return result;
                    }),
                }, $$.$me_atom2_prop_compute_fn_sum()),
                idx_selected: $$.$me_atom2_prop(['.option_ids', '.value'], ({ masters: [ids, id] }) => typeof id == 'string' ? [ids.indexOf(id)].filter(idx => ~idx) :
                    id instanceof Set ? [...id].map((id) => ids.indexOf(id)).filter(idx => ~idx) :
                        []),
            },
            event: {},
            control: {
                option: $$.$me_atom2_prop({ keys: ['.option_ids'] }, ({ key: [id] }) => ({
                    base: $$.$me_label,
                    prop: {
                        fontSize: '<.fontSize',
                        fontWeight: $$.$me_atom2_prop(['.isSelected', '<.fontWeightSelected', '<.fontWeight'], ({ masters: [isSelected, fontWeightSelected, fontWeight] }) => isSelected ? fontWeightSelected : fontWeight),
                        fontFamily: '<.fontFamily',
                        isSelected: $$.$me_atom2_prop(['<.value'], ({ masters: [value] }) => value instanceof Set ? value.has(id) : value == id),
                        paddingHor: '<.paddingHor',
                        text: $$.$me_atom2_prop(['<.options', '<.value'], ({ masters: [options, value] }) => $$.$me_option_caption_text(id, options, value)),
                        alignHor: () => $$.$me_align.center,
                        alignVer: '<.alignVer',
                        ofsVer: '<.ofsVer',
                        '#width': $$.$me_atom2_prop([`<.option_width[${id}]`], ({ masters: [to] }) => $$.$me_atom2_anim({ to })),
                        '#height': '<.#height',
                        '#ofsHor': $$.$me_atom2_prop([`<.option_left[${id}]`], ({ masters: [to] }) => $$.$me_atom2_anim({ to })),
                        idx: $$.$me_atom2_prop(['<.option_ids'], ({ masters: [ids] }) => ids.indexOf(id)),
                        _ctxLeft: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<.no_adjust'], ({ masters: [no_adjust] }) => no_adjust ?
                            ['._text_n_ctxLeft'] :
                            ['.#ctx', '.text', '.period', '/.#pixelRatio', `<.option_width[${id}]`, `<.option_left[${id}]`, '.paddingLeft', '.paddingRight']), ({ len, masters }) => {
                            if (len == 1) {
                                return masters[0].ctxLeft;
                            }
                            else {
                                const [ctx, text, period, pixelRatio, width, left, paddingLeft, paddingRight] = masters;
                                return $$.$me_atom2_anim({ to: $$.$me_label_text_n_ctxLeft(ctx, text, period, pixelRatio, width, left, paddingLeft, paddingRight).ctxLeft
                                });
                            }
                        }),
                        borderWidthVer: '<.borderWidth',
                        colorBorderVer: $$.$me_atom2_prop(['.isSelected', '<.colorBorder', '<.colorBorderSelected'], ({ masters: [isSelected, colorBorder, colorBorderSelected] }) => isSelected ? colorBorderSelected : colorBorder),
                        borderLeft: $$.$me_atom2_prop(['<.idx_selected', '<.option_ids', '<.colorBorder', '<.colorBorderSelected', '<.borderWidth'], ({ masters: [idx_selected, option_ids, colorBorder, colorBorderSelected, borderWidth] }) => {
                            const idx = option_ids.indexOf(id);
                            const result = ~idx_selected.indexOf(idx) ?
                                (~idx_selected.indexOf(idx - 1) ? { width: borderWidth, color: 'transparent' } : { width: borderWidth, color: colorBorderSelected }) :
                                !idx ? { width: borderWidth, color: colorBorder } :
                                    !idx ? { width: borderWidth, color: colorBorder } : { width: borderWidth, color: 'transparent' };
                            return result;
                        }),
                        colorBorderLeft: $$.$me_atom2_prop(['.borderLeft'], ({ masters: [border] }) => border.color || 'transparent'),
                        borderWidthLeft: $$.$me_atom2_prop(['.borderLeft'], ({ masters: [border] }) => border.width || 0),
                        borderRight: $$.$me_atom2_prop(['<.idx_selected', '<.option_ids', '<.colorBorder', '<.colorBorderSelected', '<.borderWidth'], ({ masters: [idx_selected, option_ids, colorBorder, colorBorderSelected, borderWidth] }) => {
                            const idx = option_ids.indexOf(id);
                            const result = ~idx_selected.indexOf(idx) ? { width: borderWidth, color: colorBorderSelected } :
                                idx == option_ids.length - 1 || !~idx_selected.indexOf(idx + 1) ? { width: borderWidth, color: colorBorder } :
                                    { width: borderWidth, color: 'transparent' };
                            return result;
                        }),
                        colorBorderRight: $$.$me_atom2_prop(['.borderRight'], ({ masters: [border] }) => border.color || 'transparent'),
                        borderWidthRight: $$.$me_atom2_prop(['.borderRight'], ({ masters: [border] }) => border.width || 0),
                        borderRadiusLeftTop: $$.$me_atom2_prop(['.idx', '<.borderRadius'], ({ masters: [idx, borderRadius] }) => idx ? 0 : borderRadius),
                        borderRadiusLeftBottom: $$.$me_atom2_prop(['.idx', '<.borderRadius'], ({ masters: [idx, borderRadius] }) => idx ? 0 : borderRadius),
                        borderRadiusRightTop: $$.$me_atom2_prop(['.idx', '<.option_ids', '<.borderRadius'], ({ masters: [idx, option_ids, borderRadius] }) => idx != option_ids.length - 1 ? 0 : borderRadius),
                        borderRadiusRightBottom: $$.$me_atom2_prop(['.idx', '<.option_ids', '<.borderRadius'], ({ masters: [idx, option_ids, borderRadius] }) => idx != option_ids.length - 1 ? 0 : borderRadius),
                        colorBackground: $$.$me_atom2_prop(['.isSelected', '<.colorBackgroundSelected', '<.colorBackground'], ({ masters: [isSelected, colorBackgroundSelected, colorBackground] }) => isSelected ? colorBackgroundSelected : colorBackground),
                        colorText: $$.$me_atom2_prop(['.isSelected', '<.colorTextSelected', '<.colorText'], ({ masters: [isSelected, colorTextSelected, colorText] }) => isSelected ? colorTextSelected : colorText),
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                    },
                    prop_non_render: {
                        '#cursor': $$.$me_atom2_prop(['<.value'], ({ masters: [value] }) => value instanceof Set || value != id ? 'pointer' : null),
                    },
                    event: {
                        clickOrTap: () => {
                            let value = $$.a('<.value');
                            if (typeof value == 'string' && value == id)
                                return false;
                            if (value instanceof Set) {
                                if (value.has(id)) {
                                    value.delete(id);
                                }
                                else {
                                    value.add(id);
                                }
                            }
                            else
                                value = id;
                            $$.a('<.value', value, true);
                            return true;
                        },
                    },
                })),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//select.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_switch = {
            base: $$.$me_select,
            prop: {
                options: $$.$me_atom2_prop_abstract(),
                value: $$.$me_atom2_prop_abstract(),
                colorBorder: () => 'transparent',
                colorBorderSelected: () => 'transparent',
                colorBackground: () => 'transparent',
                colorBackgroundSelected: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    '#0070a4' :
                    '#0facf4'),
                borderRadius: () => 0,
                borderWidth: () => 0,
                paddingHor: () => 0,
                option_ids: $$.$me_atom2_prop_keys(['.options']),
                option_width_min: () => 40,
                colorText: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    '#0070a4' :
                    'white'),
                colorTextSelected: () => 'white',
                fontFamily: '/.fontFamily',
                fontWeight: '/.fontWeight',
                fontWeightSelected: () => 500,
                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                alignVer: () => $$.$me_align.bottom,
                ofsVer: $$.$me_atom2_prop_abstract(),
                no_adjust: () => true,
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//switch.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_select = {
            base: $$.$me_select,
            prop: {
                options: $$.$me_atom2_prop_abstract(),
                value: $$.$me_atom2_prop(['.option_ids'], ({ masters: [ids] }) => ids[0]),
                colorBorder: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    '#bdc3d1' :
                    '#d8dce3'),
                colorBorderSelected: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    '#008ecf' :
                    '#008ecf'),
                colorBackground: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    'white' :
                    '#878f9b'),
                colorBackgroundSelected: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    '#f0f1f4' :
                    '#747B89'),
                borderRadius: () => 4,
                borderWidth: () => 1,
                paddingHor: () => 0,
                option_ids: $$.$me_atom2_prop_keys(['.options']),
                '#width': () => 440,
                '#height': () => 32,
                option_width_min: () => 40,
                colorText: $$.$me_atom2_prop(['/.theme', '/.colorText'], ({ masters: [theme, colorText] }) => theme == $$.$me_theme.light ?
                    '#0070a4' :
                    colorText),
                colorTextSelected: '/.colorText',
                fontFamily: '/.fontFamily',
                fontWeight: '/.fontWeight',
                fontWeightSelected: '.fontWeight',
                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//select.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        let instances;
        $$.$me_dropdown = {
            dispatch: (dispatch_name, dispatch_arg) => {
                if (dispatch_name == 'hide' && $$.a('.instance') != null) {
                    $$.a('.instance', null);
                    return true;
                }
                else if (dispatch_name == 'show' && $$.a('.instance') == null) {
                    if (!instances)
                        instances = new Map();
                    const ids = [...instances].map(([spinner, id]) => id).sort();
                    let id;
                    for (let i = 0; i < ids.length; i++)
                        if (i != ids[i]) {
                            id = i;
                            break;
                        }
                    if (id === void 0)
                        id = ids.length;
                    const prop_dropdownTarget = $$.a.get('.#clientRect');
                    const prop_clientRect = $$.a.get('.dropdownTargetClientRect');
                    const isTouch = $$.a('.isTouch');
                    const prop_isDropdown = $$.a.get('.isDropdown');
                    const prop_zIndex = $$.a.get('.#zIndex');
                    const cnf = $$.a.dispatch('', 'dropdown', {
                        id,
                        prop_clientRect,
                        prop_isDropdown,
                        prop_zIndex,
                        isTouch,
                        result: null,
                    }).result;
                    if (!cnf)
                        $$.$me_throw($$.a.curr.name());
                    if (!cnf.prop)
                        cnf.prop = {};
                    if (!cnf.prop['#ofsHor'])
                        cnf.prop['#ofsHor'] = !isTouch ?
                            $$.$me_atom2_prop([prop_clientRect.name()], ({ masters: [clientRect] }) => clientRect.left) :
                            $$.$me_atom2_prop(['.#width', '/.#viewportWidth'], ({ masters: [width, viewportWidth] }) => (viewportWidth - width) / 2);
                    if (!cnf.prop['#ofsVer'])
                        cnf.prop['#ofsVer'] = !isTouch ?
                            $$.$me_atom2_prop([prop_clientRect.name()], ({ masters: [clientRect] }) => clientRect.bottom)
                            : $$.$me_atom2_prop(['.#height', '/.#viewportHeight'], ({ masters: [width, viewportWidth] }) => (viewportWidth - width) / 2);
                    if (!cnf.prop['#zIndex'])
                        cnf.prop['#zIndex'] = $$.$me_atom2_prop([prop_zIndex.name()], ({ masters: [zIndex] }) => zIndex + 10);
                    const dropdown = new $$.$me_atom2_elem({
                        tail: 'me_dropdown' + id,
                        parent: $$.a.get('/@app'),
                        cnf,
                    });
                    $$.a('.instance', dropdown);
                    return true;
                }
                return false;
            },
            prop: {
                instance: $$.$me_atom2_prop([], () => null, ({ val, prev }) => {
                    if (!val && prev) {
                        instances.delete(prev);
                        prev.destroy();
                    }
                }),
                isTouch: '/.#isTouch',
                dropdownTarget: () => '',
                dropdownTargetClientRect: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.dropdownTarget'], ({ masters: [target] }) => [target + '.#clientRect'])),
                isDropdown: $$.$me_atom2_prop(['.#visible'], () => false, ({ val, prev }) => {
                    if (val) {
                        $$.a.dispatch('', 'show');
                    }
                    else if (prev) {
                        $$.a.dispatch('', 'hide');
                    }
                }),
            },
            event: {
                clickOrTap: () => {
                    $$.a('.isDropdown', !$$.a('.isDropdown'));
                    return true;
                },
                clickOrTapOutside: () => {
                    $$.a('.isDropdown', false);
                    return false;
                },
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dropdown.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $me_ribbon_effect(p) {
            const flush = () => {
                delete effect_timers[p.id];
                locks[p.id] = true;
                if (p.init)
                    p.init();
                const prop_adjust = $$.a.get(p.adjust);
                let prop_from;
                if (typeof p.from != 'number')
                    prop_from = $$.a.get(p.from);
                let prop_to;
                if (typeof p.to != 'number')
                    prop_to = $$.a.get(p.to);
                if (prop_adjust instanceof $$.$me_atom2 &&
                    (typeof p.from == 'number' || prop_from instanceof $$.$me_atom2) &&
                    (typeof p.to == 'number' || prop_to instanceof $$.$me_atom2)) {
                    prop_adjust.value($$.$me_atom2_anim({
                        from: !prop_from ? p.from : prop_from.value(),
                        to: !prop_to ? p.to : prop_to.value(),
                        fini: p.fini,
                    }));
                }
                if (absorber_timers[p.id] === void 0)
                    delete locks[p.id];
            };
            const timer = absorber_timers[p.id];
            if (timer != null)
                clearTimeout(timer);
            absorber_timers[p.id] = setTimeout(() => {
                delete absorber_timers[p.id];
                if (effect_timers[p.id]) {
                    flush();
                }
                else {
                    delete locks[p.id];
                }
            }, $$.a('/.#ribbonAbsorbTimeout'));
            if (locks[p.id] !== void 0)
                return;
            const prop_adjust = $$.a.get(p.adjust);
            p.adjust = prop_adjust.name();
            let prop_from;
            if (typeof p.from != 'number') {
                prop_from = $$.a.get(p.from);
                p.from = prop_from.name();
            }
            let prop_to;
            if (typeof p.to != 'number') {
                prop_to = $$.a.get(p.to);
                p.to = prop_to.name();
            }
            if (p.init)
                p.init();
            const val = $me_ribbon_val({
                from: !prop_from ? p.from : prop_from.value(),
                to: !prop_to ? p.to : prop_to.value(),
                delta: p.delta,
                fromBack: p.fromBack,
            });
            if (!Number.isInteger(val))
                console.error({ val });
            prop_adjust.value(val);
            if (p.fini)
                p.fini();
            if (effect_timers[p.id] == null)
                effect_timers[p.id] = setTimeout(flush, $$.a('/.#ribbonEffectTimeout'));
        }
        $$.$me_ribbon_effect = $me_ribbon_effect;
        const effect_timers = {};
        const absorber_timers = {};
        const locks = {};
        function $me_ribbon_val(p) {
            if (p.to === void 0)
                p.to = p.from;
            const k = 1 + Math.sqrt((p.from - p.delta - p.to) * (p.fromBack ? 1 : -1));
            const result = Math.round(p.from - p.delta / k);
            return result;
        }
        $$.$me_ribbon_val = $me_ribbon_val;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ribbon.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const min_max = (prefix, min = 'min', max = 'max') => [prefix + '_' + min, prefix + '_' + max];
        $$.$me_atom2_list_row_height_source_fn_apply = ({ key: [row_i], val, prev, atom }) => {
            if (val == null || val < 0 ||
                +row_i >= $$.a('.row_count') ||
                $$.$me_list_row_i_out_of_range_is(+row_i, $$.a('.row_i_min'), $$.a('.row_i_max')))
                return;
            set_row_height($$.a(`.rec_idx[${row_i}]`), $$.a('._provider'), $$.a('.provider_tag'), val);
            if (prev == null || prev < 0)
                return;
            const delta = prev - val;
            if (!delta)
                return;
            if (delta < 0) {
                const top = $$.a(`.row_top[${row_i}]`);
                const delta_bottom = top + val - $$.a('.height_actual');
                if (delta_bottom > 0) {
                    const delta_top = top - $$.a('.header_height');
                    if (delta_top > 0) {
                        const delta = Math.min(delta_bottom, delta_top);
                        const row_i_min = $$.a('.row_i_min');
                        const top = $$.a(`.row_top[${row_i_min}]`);
                        $$.a('.visible_top', top - delta);
                        $$.a(`.row_top[${row_i_min}]`, $$.$me_atom2_anim({ to: top - delta }));
                    }
                }
            }
            else {
                const val = $$.a('.visible_top');
                const idx_max = $$.a('.rec_idx_max');
                const i = $$.a('.row_i_min');
                const idx = $$.a('.visible_idx_min');
                const len = $$.a('.row_count');
                const _provider = $$.a('._provider');
                const provider_tag = $$.a('.provider_tag');
                const height = $$.a('.height_actual') + delta;
                const header_height = $$.a('.header_height');
                const p = { val, idx_max, i, idx, len, _provider, provider_tag, height, header_height };
                const rec_idx = $$.a(`.rec_idx[${row_i}]`);
                const row_height = (idx, _provider, provider_tag) => idx == rec_idx ? prev : get_row_height(idx, _provider, provider_tag);
                compute_visible_helper(p, true, row_height);
                set_visible(p, true);
                if (p.idx == idx_max) {
                    const ofs = height - p.val;
                    if (ofs > 0) {
                        p.idx = idx;
                        p.val = val + row_height(p.idx, p._provider, p.provider_tag);
                        p.i = i;
                        p.header_height = header_height - ofs;
                        compute_visible_helper(p, false, row_height);
                        set_visible(p, false);
                        $$.a(`.row_top[${p.i}]`, $$.$me_atom2_anim({ to: $$.a(`.row_top[${p.i}]`) + ofs }));
                    }
                }
            }
        };
        $$.$me_list = {
            dispatch: (dispatch_name, dispatch_arg) => {
                if (dispatch_name == 'row_height_default') {
                    dispatch_arg.val = $$.a('.row_height_min');
                    return true;
                }
                else if (dispatch_name == 'get_row_height') {
                    const row_heights = $$.a('.row_heights');
                    dispatch_arg.val =
                        row_heights.has(dispatch_arg.idx) ?
                            row_heights.get(dispatch_arg.idx) :
                            $$.a.dispatch('', 'row_height_default', { idx: dispatch_arg.idx, val: 0 }).val;
                    return true;
                }
                else if (dispatch_name == 'set_row_height') {
                    const row_heights = $$.a('.row_heights');
                    if (dispatch_arg.val != $$.a.dispatch('', 'row_height_default', { idx: dispatch_arg.idx, val: 0 }).val) {
                        row_heights.set(dispatch_arg.idx, dispatch_arg.val);
                    }
                    else if (row_heights.has(dispatch_arg.idx)) {
                        row_heights.delete(dispatch_arg.idx);
                    }
                    return true;
                }
                else if (dispatch_name == 'set_view') {
                    const val = dispatch_arg || {};
                    const elem = $$.a.curr;
                    {
                        const prop_row_height_source = elem._entities.prop['row_height_source'];
                        const key = prop_row_height_source._entities.key;
                        if (key)
                            for (const k in key) {
                                const atom = key[k];
                                atom.value(null);
                            }
                    }
                    {
                        const prop_row_height_source = elem._entities.prop['row_height'];
                        const key = prop_row_height_source._entities.key;
                        if (key)
                            for (const k in key) {
                                const atom = key[k];
                                atom.value(null);
                            }
                    }
                    $$.a('.provider_tag', val.id);
                    $$.a('.row_i_min', val.row_i_min || 0);
                    $$.a('.row_i_max', ($$.a('.row_i_min') + $$.a('.row_count') - 1) % $$.a('.row_count'));
                    $$.a('.visible_idx_min', val.visible_idx_min || 0);
                    $$.a('.visible_top', val.visible_top || $$.a('.header_height'));
                    return true;
                }
                else if (dispatch_name == 'iterate_rows') {
                    const row_count = $$.a('.row_count');
                    if (row_count) {
                        const row_i_max = $$.a('.row_i_max');
                        if (row_i_max >= 0) {
                            let row_i = $$.a('.row_i_min');
                            while (dispatch_arg(row_i) !== false && row_i != row_i_max)
                                row_i = next_i(1, row_i, row_count);
                        }
                    }
                    return true;
                }
                return false;
            },
            prop: Object.assign({ header_height: $$.$me_atom2_prop_abstract(), row_height_min: $$.$me_atom2_prop_abstract(), rec_count: $$.$me_atom2_prop_abstract(), provider_tag: $$.$me_atom2_prop_abstract(), header_content: $$.$me_atom2_prop_abstract(), row_content: $$.$me_atom2_prop_abstract(), hidden_curtain: () => false, height_curtain: () => 40, width_curtain: '.#width', curtain_kind: () => 'black', curtain: () => ['top', 'bottom'], curtainVisible: $$.$me_atom2_prop({
                    keys: ['.curtain'],
                    masters: $$.$me_atom2_prop_masters([], ({ key: [curtain] }) => {
                        if (curtain == 'top') {
                            return ['.visible_idx_min', '.visible_top', '.header_height'];
                        }
                        else {
                            return ['.visible_idx_max', '.rec_idx_max', '.visible_bottom', '.#height'];
                        }
                    }),
                }, ({ key: [curtain], masters }) => {
                    if (curtain == 'top') {
                        const [visible_idx_min, visible_top, header_height] = masters;
                        return visible_idx_min || visible_top < header_height;
                    }
                    else {
                        const [visible_idx_max, rec_idx_max, visible_bottom, height] = masters;
                        return visible_idx_max < rec_idx_max || visible_bottom > height;
                    }
                }), _provider: () => $$.a.curr.parent(true).path, rec_idx_delta: () => 1, rec_idx_max: $$.$me_atom2_prop(['._rec_count'], ({ masters: [rec_count] }) => rec_count - 1), row_count: $$.$me_atom2_prop(['.#height', '.row_height_min', '.header_height', '.rec_count'], ({ masters: [height, row_height_min, header_height, rec_count] }) => rec_count < 0 ? 0 :
                    2 + Math.min(rec_count, Math.ceil(Math.max(0, height - header_height) / row_height_min)), ({ prev, val }) => {
                    const result = prev != null && prev > val ? prev : val;
                    return result;
                }), _rec_count: $$.$me_atom2_prop(['.rec_count'], null, ({ val, prev, atom }) => {
                    if (val == null || prev == null)
                        return;
                    for (let i = 0; i < $$.a('.row_count'); i++) {
                        $$.a(`.row_height_source[${i}]`, null);
                        $$.a(`.row_height[${i}]`, null);
                    }
                }), row_i: $$.$me_atom2_prop(['.row_count'], ({ masters: [row_count] }) => [...Array(row_count).keys()].map(i => i + '')), row_i_min: () => 0, row_i_max: () => -1 }, $$.$me_atom2_prop_same_def(() => 0, [
                ...min_max('visible_idx'),
                ...min_max('visible', 'top', 'bottom')
            ]), { row_hidden: $$.$me_atom2_prop({ keys: ['.row_i'], masters: ['.row_i_min', '.row_i_max'] }, ({ key: [row_i], masters: [row_i_min, row_i_max] }) => $$.$me_list_row_i_out_of_range_is(+row_i, row_i_min, row_i_max)), rec_idx: $$.$me_atom2_prop({
                    keys: ['.row_i'],
                    masters: $$.$me_atom2_prop_masters(['.row_i_min', '.row_i_max', '.row_count'], ({ key: [row_i], masters: [row_i_min, row_i_max, row_count] }) => {
                        const key = +row_i;
                        const result = (() => {
                            if ($$.$me_list_row_i_out_of_range_is(key, row_i_min, row_i_max))
                                return [];
                            if (key == row_i_min)
                                return ['.visible_idx_min'];
                            if (!row_count)
                                return [];
                            const i = next_i(-1, key, row_count);
                            return [`.rec_idx[${i}]`, '.rec_idx_delta'];
                        })();
                        return result;
                    }),
                }, ({ len, masters }) => !len ? null : masters.reduce((sum, val) => sum + val, 0), ({ key: [row_i], val }) => {
                    $$.a(`.row_height_source[${row_i}]`, null);
                    $$.a(`.row_height[${row_i}]`, null);
                }), row_top: $$.$me_atom2_prop({
                    keys: ['.row_i'],
                    masters: $$.$me_atom2_prop_masters(['.row_i_min', '.row_i_max', '.row_count'], ({ key: [row_i], masters: [row_i_min, row_i_max, row_count] }) => {
                        const key = +row_i;
                        const result = (() => {
                            if ($$.$me_list_row_i_out_of_range_is(key, row_i_min, row_i_max))
                                return [];
                            if (key == row_i_min)
                                return ['.visible_top'];
                            if (!row_count)
                                return [];
                            const i = next_i(-1, key, row_count);
                            return [`.row_top[${i}]`, `.row_height[${i}]`];
                        })();
                        return result;
                    }),
                }, ({ len, masters }) => !len ? null : masters.reduce((sum, val) => sum + val, 0)), row_heights_store: () => new Map(), row_heights: $$.$me_atom2_prop(['.provider_tag', '.row_heights_store'], ({ masters: [tag, holder] }) => holder[tag] || (holder[tag] = new Map())), row_height_source: $$.$me_atom2_prop({
                    keys: ['.row_i'],
                    masters: $$.$me_atom2_prop_masters(['._rec_count', '.row_i_min', '.row_i_max'], ({ key: [row_i], masters: [rec_count, row_i_min, row_i_max] }) => rec_count <= 0 || $$.$me_list_row_i_out_of_range_is(+row_i, row_i_min, row_i_max) ? [] :
                        [`.rec_idx[${row_i}]`, '._provider', '.provider_tag']),
                }, ({ len, masters: [rec_idx, _provider, provider_tag] }) => {
                    const result = !len || !_provider || !provider_tag ? -1 : get_row_height(rec_idx, _provider, provider_tag, true);
                    return result;
                }, $$.$me_atom2_list_row_height_source_fn_apply), row_height: $$.$me_atom2_prop({ keys: ['.row_i'], masters: ['.row_height_source[]', '.row_i_min', '.row_i_max'] }, ({ key: [row_i], masters: [to, row_i_min, row_i_max], prev }) => {
                    const result = $$.$me_list_row_i_out_of_range_is(+row_i, row_i_min, row_i_max) ? null :
                        to < 0 ? null :
                            prev == null || prev == to ? to :
                                $$.$me_atom2_anim({
                                    to,
                                    fini: () => adjust_rows($$.a('.visible_top')),
                                });
                    return result;
                }, ({ val }) => val == null ? null : Math.round(val)), adjust_rows: $$.$me_atom2_prop(['.height_actual', '._rec_count'], null, ({ val, atom }) => {
                    adjust_rows($$.a('.visible_top'));
                }), adjust_top: $$.$me_atom2_prop([], () => null, ({ val }) => {
                    if (val == null)
                        return;
                    adjust_rows(val, true);
                }), adjust_bottom: $$.$me_atom2_prop([], () => null, ({ val }) => {
                    if (val == null)
                        return;
                    adjust_rows(val);
                }), adjust_height_actual: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['._rec_count', '.row_i_max'], ({ masters: [rec_count, row_i_max] }) => {
                    if (!rec_count || row_i_max < 0)
                        return ['.#height'];
                    const result = ['.#height'];
                    if (row_i_max == rec_count - 1) {
                        result.push('.header_height');
                        for (let i = 0; i <= row_i_max; i++)
                            result.push(`.row_height[${i}]`);
                    }
                    return result;
                }), ({ len, masters, prev }) => {
                    if (!len)
                        return 0;
                    const [height] = masters;
                    if (len == 1)
                        return height;
                    let result = 0;
                    for (let i = 1; i < len; i++) {
                        if (masters[i] == null)
                            return prev;
                        result += masters[i];
                        if (result > height)
                            return height;
                    }
                    return result;
                }, ({ val, atom }) => {
                    $$.a('.height_actual', val);
                }), height_actual: '.#height', disabledScroll: $$.$me_atom2_prop(['.visible_idx_min', '.visible_idx_max', '.visible_top', '.visible_bottom', '.rec_count', '.header_height', '.#height'], ({ masters: [visible_idx_min, visible_idx_max, visible_top, visible_bottom, rec_count, header_height, height] }) => !visible_idx_min && visible_idx_max == rec_count - 1 && visible_top >= header_height && visible_bottom <= height), '#order': () => ['row', 'header'] }),
            elem: {
                header: $$.$me_atom2_prop(['.header_content'], ({ masters: [header_content] }) => !header_content ? null : {
                    prop: {
                        '#height': '<.header_height',
                    },
                    elem: {
                        content: () => header_content
                    },
                }),
                row: $$.$me_atom2_prop({ keys: ['.row_i'] }, ({ key: [row_i] }) => ({
                    prop: {
                        '#ofsVer': `<.row_top[${row_i}]`,
                        '#height': `<.row_height[${row_i}]`,
                        '#hidden': `<.row_hidden[${row_i}]`,
                    },
                    elem: {
                        content: `<.row_content[${row_i}]`,
                    },
                })),
                curtain: $$.$me_atom2_prop({ keys: ['.curtain'], masters: ['.hidden_curtain', '.curtainVisible[]'] }, ({ key: [curtain], masters: [hidden_curtain, curtainVisible] }) => hidden_curtain || !curtainVisible ? null : {
                    prop: {
                        '#height': '<.height_curtain',
                        '#width': '<.width_curtain',
                        '#alignVer': () => $$.$me_align[curtain],
                    },
                    style: {
                        background: $$.$me_atom2_prop(['<.curtain_kind'], ({ masters: [kind] }) => kind == 'black' ?
                            `linear-gradient(${curtain == 'bottom' ? 0 : 180}deg, rgba(0,0,0,.24) 0%, rgba(0,0,0,.1) 33%, rgba(0,0,0,0) 100%)` :
                            `linear-gradient(${curtain == 'bottom' ? 0 : 180}deg, rgba(255,255,255,.9) 0%, rgba(255,255,255,.5) 50%, rgba(255,255,255,0) 100%)`),
                        pointerEvents: () => 'none',
                    },
                }),
            },
            style: {
                overflow: () => 'hidden',
            },
            event: {
                wheel: p => !$$.a('.disabledScroll') &&
                    p.isInRect(p.event.clientX, p.event.clientY) &&
                    $$.$me_atom2_event_wheel_y_is(p.event) &&
                    wheel(p.event._deltaY),
                wheelDrag: p => !$$.a('.disabledScroll') &&
                    p.isInRect(p.event.start.clientX, p.event.start.clientY) &&
                    $$.$me_atom2_event_wheel_y_is(p.event) &&
                    wheel(p.event._deltaY),
                wheelTouch: p => !$$.a('.disabledScroll') &&
                    p.isInRect(p.event.start.touches[0].clientX, p.event.start.touches[0].clientY) &&
                    $$.$me_atom2_event_wheel_y_is(p.event) &&
                    wheel(p.event._deltaY),
            },
        };
        function wheel(deltaY) {
            const fromBottom = deltaY < 0;
            if (fromBottom ?
                $$.a('.visible_idx_min') > 0 || $$.a('.visible_top') < $$.a('.header_height') :
                $$.a('.visible_idx_max') < $$.a('.rec_idx_max') || $$.a('.visible_bottom') > $$.a('.height_actual')) {
                $$.a(fromBottom ? '.adjust_top' : '.adjust_bottom', $$.a(fromBottom ? '.visible_bottom' : '.visible_top') - deltaY);
            }
            else {
                $$.$me_ribbon_effect({
                    id: $$.a.curr.name(),
                    init: () => { skip_limit = true; },
                    fini: () => { skip_limit = false; },
                    adjust: fromBottom ? '.adjust_bottom' : '.adjust_top',
                    from: fromBottom ? '.visible_top' : '.visible_bottom',
                    to: fromBottom ? '.header_height' : '.height_actual',
                    delta: deltaY,
                    fromBack: fromBottom,
                });
            }
            return true;
        }
        let skip_limit = false;
        $$.$me_list_row_i_out_of_range_is = (key, row_i_min, row_i_max) => row_i_max < 0 ||
            row_i_max >= row_i_min && (key < row_i_min || key > row_i_max) ||
            row_i_max < row_i_min && key > row_i_max && key < row_i_min;
        const next_i = (inc, i, len) => {
            if (!len)
                $$.$me_throw('len == 0');
            return (i + len + inc % len) % len;
        };
        const get_row_height = (idx, _provider, provider_tag, non_cache = false) => {
            let result;
            if (!non_cache) {
                const visible_idx_min = $$.a('.visible_idx_min');
                const visible_idx_max = $$.a('.visible_idx_max');
                if (visible_idx_min != null && visible_idx_max != null && visible_idx_min <= idx && idx <= visible_idx_max) {
                    const i = next_i(idx - visible_idx_min, $$.a('.row_i_min'), $$.a('.row_count'));
                    result = $$.a(`.row_height[${i}]`);
                }
            }
            if (result == null) {
                const dispatch_arg = { idx, tag: provider_tag };
                $$.a.dispatch(_provider, 'get_row_height', dispatch_arg);
                result = dispatch_arg.val;
            }
            return Math.round(result);
        };
        const set_row_height = (idx, _provider, provider_tag, val) => {
            $$.a.dispatch(_provider, 'set_row_height', { idx, val, tag: provider_tag });
        };
        function adjust_rows(val, fromBottom = false, row_height) {
            if (!row_height)
                row_height = get_row_height;
            if ($$.a('._rec_count') <= 0) {
                $$.a('.row_i_max', -1);
            }
            else {
                const p = {
                    val,
                    idx_max: $$.a('.rec_idx_max'),
                    i: $$.a(fromBottom ? '.row_i_max' : '.row_i_min'),
                    idx: $$.a(fromBottom ? '.visible_idx_max' : '.visible_idx_min'),
                    len: $$.a('.row_count'),
                    _provider: $$.a('._provider'),
                    provider_tag: $$.a('.provider_tag'),
                    height: $$.a('.height_actual'),
                    header_height: $$.a('.header_height'),
                };
                compute_visible(p, !fromBottom, row_height);
                set_visible(p, !fromBottom);
                compute_visible(p, fromBottom, row_height);
                set_visible(p, fromBottom);
            }
        }
        function compute_visible(p, bottom = false, row_height) {
            if (!row_height)
                row_height = get_row_height;
            compute_visible_helper(p, bottom, row_height);
            if (!skip_limit) {
                if (!bottom ?
                    p.val > p.header_height :
                    (p.val < p.height) && p.i != $$.a('.rec_count') - 1) {
                    const from = bottom ? p.height : p.header_height;
                    p.val = $$.$me_ribbon_val({
                        from,
                        delta: from - p.val,
                        fromBack: !bottom,
                    });
                }
            }
            return p;
        }
        function compute_visible_helper(p, bottom, row_height) {
            let did_step = false;
            if (bottom) {
                for (; ((p.val += row_height(p.idx, p._provider, p.provider_tag)) < p.height || !did_step) && p.idx < p.idx_max; p.idx++) {
                    p.i = next_i(+1, p.i, p.len);
                    did_step = true;
                }
            }
            else {
                for (; ((p.val -= row_height(p.idx, p._provider, p.provider_tag)) > p.header_height || !did_step) && p.idx; p.idx--) {
                    p.i = next_i(-1, p.i, p.len);
                    did_step = true;
                }
            }
            return p;
        }
        function set_visible(p, bottom = false) {
            $$.a(bottom ? '.row_i_max' : '.row_i_min', p.i);
            $$.a(bottom ? '.visible_idx_max' : '.visible_idx_min', p.idx);
            $$.a(bottom ? '.visible_bottom' : '.visible_top', p.val);
        }
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_triangle = {
            base: $$.$me_triangle,
            prop: {
                '#alignHor': () => $$.$me_align.right,
                '#ofsHor': () => 9,
                '#alignVer': () => $$.$me_align.center,
                size: () => 7,
                color: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#444956' : 'white'),
                k: () => 9 / 7,
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//triangle.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_picker = {
            base: $$.$me_dropdown,
            dispatch: (dispatch_name, dispatch_arg) => {
                if (dispatch_name == 'dropdown') {
                    const { prop_isDropdown, prop_clientRect, isTouch } = dispatch_arg;
                    const prop_itemMarginTopFirst = $$.a.get('.itemMarginTopFirst');
                    const prop_itemMarginBottomLast = $$.a.get('.itemMarginBottomLast');
                    const prop_itemMarginVer = $$.a.get('.itemMarginVer');
                    const prop_options = $$.a.get('.options');
                    const prop_option_ids = $$.a.get('.option_ids');
                    const prop_value = $$.a.get('.value');
                    const prop_itemFontSize = $$.a.get('.itemFontSize');
                    const prop_row_height_min = $$.a.get('.row_height_min');
                    const prop_dropdownWidth = $$.a.get('.dropdownWidth');
                    const prop_dropdownHeight = $$.a.get('.dropdownHeight');
                    const prop_theme = $$.a.get('/.theme');
                    dispatch_arg.result = {
                        base: $$.$me_list,
                        dispatch: (dispatch_name, dispatch_arg) => {
                            if (dispatch_name == 'row_height_default') {
                                const idx = dispatch_arg.idx;
                                dispatch_arg.val = $$.a('.row_height_min') + (0 < idx && idx < $$.a('.rec_count') - 1 ? 0 :
                                    (!idx ? prop_itemMarginTopFirst.value() : prop_itemMarginBottomLast.value()) - prop_itemMarginVer.value());
                                return true;
                            }
                            return false;
                        },
                        prop: {
                            '#width': prop_dropdownWidth.name(),
                            '#height': prop_dropdownHeight.name(),
                            rec_count: $$.$me_atom2_prop([prop_option_ids.name()], ({ masters: [ids] }) => ids.length),
                            row_height_min: prop_row_height_min.name(),
                            curtain_kind: $$.$me_atom2_prop([prop_theme.name()], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'white' : 'black'),
                            header_height: () => 0,
                            provider_tag: $$.$me_atom2_prop([], ({ atom }) => atom.name()),
                            rec_idx_selected: $$.$me_atom2_prop([prop_value.name(), prop_option_ids.name()], ({ masters: [value, ids] }) => (typeof value == 'string' ?
                                [ids.indexOf(value)] :
                                value instanceof Set ?
                                    [...value].map((id) => ids.indexOf(id)) :
                                    value instanceof Map ?
                                        [...value].map(([id]) => ids.indexOf(id)) :
                                        []).filter((idx) => ~idx)),
                            row_i_selected: $$.$me_atom2_prop(['.rec_idx_selected', '.row_i_min', '.row_i_max', '.row_count', '.visible_idx_min', '.visible_idx_max'], ({ masters: [idx, row_i_min, row_i_max, row_count, visible_idx_min, visible_idx_max] }) => {
                                return idx.map((idx) => {
                                    if (idx < 0)
                                        return -1;
                                    if (row_i_max < 0)
                                        return -1;
                                    if (!(visible_idx_min <= idx && idx <= visible_idx_max))
                                        return -1;
                                    return (row_i_min + (idx - visible_idx_min)) % row_count;
                                }).filter((idx) => ~idx);
                            }),
                            header_content: () => ({}),
                            row_content: $$.$me_atom2_prop({ keys: ['.row_i'] }, ({ key: [row_i] }) => ({
                                prop: {
                                    isTouch: () => isTouch,
                                    row_i: () => row_i,
                                    rec_idx: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<<.row_i_min', '<<.row_i_max'], ({ masters: [row_i_min, row_i_max] }) => $$.$me_list_row_i_out_of_range_is(+row_i, row_i_min, row_i_max) ? [] : [`<<.rec_idx[${row_i}]`]), ({ len, masters: [rec_idx] }) => !len ? -1 : rec_idx),
                                    id: $$.$me_atom2_prop([prop_option_ids.name(), `.rec_idx`, '<<.rec_count'], ({ masters: [ids, idx, rec_count] }) => {
                                        return !~idx || idx >= rec_count ? '' : ids[idx];
                                    }),
                                    isSelected: $$.$me_atom2_prop(['<<.row_i_selected'], ({ masters: [row_i_selected] }) => !!~row_i_selected.indexOf(+row_i)),
                                    rec_count: '<<.rec_count',
                                    '#cursor': () => 'pointer',
                                    '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                                    row_cursor_src: $$.$me_atom2_prop(['.isTouch', '.#isHover', '.row_i'], ({ masters: [isTouch, isHover, row_i] }) => isTouch || !isHover ? '' : row_i, ({ atom, val }) => {
                                        $$.$nl_picker_cursor({ origin: atom, val: val });
                                    }),
                                },
                                event: {
                                    clickOrTap: () => {
                                        const value = prop_value.value();
                                        const id = $$.a('.id');
                                        if (value instanceof Set) {
                                            const ss = value;
                                            if (ss.has(id)) {
                                                ss.delete(id);
                                            }
                                            else {
                                                ss.add(id);
                                            }
                                            prop_value.value(ss, true);
                                        }
                                        else if (value instanceof Map) {
                                            const ss = value;
                                            if (ss.has(id)) {
                                                ss.delete(id);
                                            }
                                            else {
                                                ss.set(id, null);
                                            }
                                            prop_value.value(ss, true);
                                        }
                                        else {
                                            prop_value.value(id);
                                            prop_isDropdown.value(false);
                                        }
                                        return true;
                                    },
                                },
                                style: {
                                    background: () => 'transparent',
                                },
                                control: {
                                    label: () => ({
                                        base: $$.$me_label,
                                        prop: {
                                            fontSize: prop_itemFontSize.name(),
                                            '#width': '<.#width',
                                            '#height': '<.#height',
                                            alignVer: () => $$.$me_align.center,
                                            alignHor: $$.$me_atom2_prop(['<.isTouch'], ({ masters: [isTouch] }) => isTouch ? $$.$me_align.center : $$.$me_align.left),
                                            paddingLeft: $$.$me_atom2_prop([prop_value.name(), '<.isTouch', prop_itemFontSize.name()], ({ masters: [value, isTouch, fontSize] }) => isTouch ? 0 :
                                                !(value instanceof Set || value instanceof Map) ? 8 :
                                                    2 * fontSize),
                                            '#ofsVer': $$.$me_atom2_prop([
                                                `<.rec_idx`,
                                                '<.rec_count',
                                                prop_itemMarginTopFirst.name(),
                                                prop_itemMarginBottomLast.name(),
                                                prop_itemMarginVer.name(),
                                            ], ({ len, masters: [rec_idx, rec_count, itemMarginTopFirst, itemMarginBottomLast, itemMarginVer] }) => {
                                                if (!~rec_idx)
                                                    return 0;
                                                const result = (!rec_idx ? +(itemMarginTopFirst - itemMarginVer) / 2 :
                                                    rec_idx == rec_count - 1 ? -(itemMarginBottomLast - itemMarginVer) / 2 :
                                                        0);
                                                return result;
                                            }),
                                            paddingRight: () => 8,
                                            text: $$.$me_atom2_prop([`<.rec_idx`, prop_options.name()], ({ masters: [rec_idx, options] }) => {
                                                if (!~rec_idx)
                                                    return '';
                                                const id = Object.keys(options)[rec_idx];
                                                return options[id].caption || id;
                                            }),
                                            isSelected: '<.isSelected',
                                        },
                                        render: p => {
                                            const value = prop_value.value();
                                            if (!((value instanceof Set || value instanceof Map) &&
                                                $$.a('.isSelected')))
                                                return;
                                            const fontSize = $$.a('.fontSize');
                                            const h = fontSize * .9;
                                            const w = h * 1.2;
                                            const ctxHeight = h * p.pixelRatio;
                                            const ctxWidth = w * p.pixelRatio;
                                            const lineWidth = 1;
                                            const rec_idx = $$.a(`<.rec_idx`);
                                            const rec_count = $$.a('<.rec_count');
                                            const itemMarginTopFirst = prop_itemMarginTopFirst.value();
                                            const itemMarginBottomLast = prop_itemMarginBottomLast.value();
                                            const itemMarginVer = prop_itemMarginVer.value();
                                            const ofsVer = ($$.a('.#height') - h) / 2;
                                            const ofsHor = $$.a('<.isTouch') ? 20 : (2 * fontSize - w) / 2;
                                            $$.$me_atom2_ctx_check({
                                                ctx: p.ctx,
                                                ctxLeft: p.ctxRect.left + ofsHor * p.pixelRatio,
                                                ctxTop: p.ctxRect.top + ofsVer * p.pixelRatio,
                                                ctxWidth,
                                                ctxHeight,
                                                stroke: {
                                                    style: $$.a('.colorText'),
                                                    ctxWidth: lineWidth * p.pixelRatio,
                                                },
                                                lambda: 0.38,
                                                mu: 0.6,
                                            });
                                        },
                                    })
                                },
                            })),
                            row_cursor: () => '',
                            '#order': () => ['row', 'cursor'],
                        },
                        elem: {
                            header: () => null,
                            cursor: isTouch ?
                                $$.$me_atom2_prop([prop_value.name(), '.row_i_selected', '.rec_idx_selected'], ({ masters: [value, row_i_selected, rec_idx_selected] }) => value instanceof Set || value instanceof Map || row_i_selected.length != 1 ? null :
                                    {
                                        prop: {
                                            '#height': '<.row_height_min',
                                            '#ofsVer': rec_idx_selected[0] ?
                                                `<.row_top[${row_i_selected[0]}]` :
                                                $$.$me_atom2_prop([`<.row_top[${row_i_selected[0]}]`, prop_itemMarginTopFirst.name()], $$.$me_atom2_prop_compute_fn_sum()),
                                        },
                                        style: {
                                            borderTop: () => '1px solid #D5D5D3',
                                            borderBottom: () => '1px solid #D5D5D3',
                                            boxSizing: () => 'border-box',
                                        },
                                    }) :
                                () => ({
                                    prop: {
                                        '#hidden': $$.$me_atom2_prop(['<.row_cursor'], ({ masters: [row_i] }) => !row_i),
                                        '#ofsHor': () => 3,
                                        '#ofsVer': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<.row_cursor'], ({ masters: [row_i] }) => !row_i ? [] : [`<.row_top[${row_i}]`, `<.rec_idx[${row_i}]`]), ({ len, masters: [top, rec_idx] }) => !len ? null : rec_idx ? top : 3),
                                        '#height': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<.row_cursor'], ({ masters: [row_i] }) => !row_i ? [] : [`<.row_height[${row_i}]`, `<.rec_idx[${row_i}]`, '<.rec_count']), ({ len, masters: [val, rec_idx, rec_count] }) => !len ? null : !rec_idx ? val - 3 : rec_idx < rec_count - 1 ? val : val - 6),
                                        '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor'], ({ masters: [width, ofsHor] }) => width - 2 * ofsHor - 2),
                                    },
                                    style: {
                                        boxShadow: () => '0 1px 6px 0 rgba(0, 0, 0, 0.5)',
                                        pointerEvents: () => 'none',
                                    },
                                }),
                        },
                        style: {
                            background: $$.$me_atom2_prop([prop_theme.name()], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#fcfcfd' : '#878f9b'),
                            boxShadow: () => '0 8px 12px 0 rgba(0, 0, 0, 0.5)',
                        },
                        event: {
                            mousedown: p => p.isInRect(p.event.clientX, p.event.clientY),
                            touchstart: p => p.isInRect(p.event.touches[0].clientX, p.event.touches[0].clientY),
                        },
                    };
                    return true;
                }
                return false;
            },
            prop: {
                options: $$.$me_atom2_prop_abstract(),
                value: $$.$me_atom2_prop(['.option_ids'], ({ masters: [ids] }) => ids[0]),
                dropdownCountMax: $$.$me_atom2_prop(['.isTouch'], ({ masters: [isTouch] }) => isTouch ? 9 : Infinity),
                none: () => 'ничего не выбрано',
                option_ids: $$.$me_atom2_prop_keys(['.options']),
                '#cursor': () => 'pointer',
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                dropdownWidth: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.isTouch'], ({ masters: [isTouch] }) => isTouch ? [] : ['.dropdownTargetClientRect']), ({ len, masters: [clientRect] }) => !len ? 374 : clientRect.right - clientRect.left),
                dropdownHeight: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.isTouch'], ({ masters: [isTouch] }) => (isTouch ?
                    ['.row_height_min'] :
                    ['/.#viewportHeight', '.dropdownTargetClientRect', '.row_height_min'])
                    .concat([
                    '.option_ids',
                    '.dropdownCountMax',
                    '.itemMarginTopFirst',
                    '.itemMarginBottomLast',
                    '.itemMarginVer',
                ])), ({ len, masters }) => {
                    if (len <= 7) {
                        const [row_height_min, option_ids, maxDropdownCount, itemMarginTopFirst, itemMarginBottomLast, itemMarginVer] = masters;
                        const rec_count = option_ids.length;
                        const max = maxDropdownCount;
                        const result = rec_count > max ?
                            max * row_height_min :
                            rec_count * row_height_min + itemMarginTopFirst + itemMarginBottomLast - 2 * itemMarginVer;
                        return result;
                    }
                    else {
                        const minMargin = 10;
                        const [viewportHeight, clientRect, row_height_min, option_ids, maxDropdownCount, itemMarginTopFirst, itemMarginBottomLast, itemMarginVer] = masters;
                        const correction = (itemMarginTopFirst - itemMarginVer) + (itemMarginBottomLast - itemMarginVer);
                        const result = Math.max(0, Math.min(option_ids.length, maxDropdownCount, Math.floor((viewportHeight - clientRect.bottom - correction - minMargin) / row_height_min))) * row_height_min + correction;
                        return result;
                    }
                }),
                itemFontSize: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.isTouch'], ({ masters: [isTouch] }) => ['.isTouch', isTouch ? '.row_height_min' : '.em']), ({ masters: [isTouch, val] }) => val * (isTouch ? 22 / 38 : 14 / 16)),
                itemMarginTopFirst: $$.$me_atom2_prop(['.isTouch'], ({ masters: [isTouch] }) => isTouch ? 16 : 4),
                itemMarginBottomLast: $$.$me_atom2_prop(['.isTouch'], ({ masters: [isTouch] }) => isTouch ? 16 : 4),
                itemMarginVer: () => 0,
                row_height_min: $$.$me_atom2_prop(['.isTouch'], ({ masters: [isTouch] }) => isTouch ? 38 : 24),
            },
            style: {
                borderRadius: () => 3,
                border: $$.$me_atom2_prop(['.isDropdown', '/.theme'], ({ masters: [isDropdown, theme] }) => (!isDropdown ?
                    (theme == $$.$me_theme.light ? 'solid 1px #bdc3d1' : 'solid 1px #d8dce3') :
                    (theme == $$.$me_theme.light ? 'solid 1px #313745' : 'solid 1px white'))),
                boxSizing: () => 'border-box',
                background: $$.$me_atom2_prop(['.isDropdown', '/.theme'], ({ masters: [isDropdown, theme] }) => (!isDropdown ?
                    (theme == $$.$me_theme.light ? '#fcfcfd' : '#878f9b') :
                    (theme == $$.$me_theme.light ? '#fcfcfd' : '#666f7f'))),
                userSelect: () => 'none',
            },
            elem: {
                triangle: () => $$.$nl_triangle,
                text: () => ({
                    prop: {
                        '#ofsHor': () => 8,
                        '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor', '.#ofsHor', '<@triangle.#width', '<@triangle.#ofsHor'], $$.$me_atom2_prop_compute_fn_diff()),
                    },
                    control: {
                        label: () => ({
                            base: $$.$me_label,
                            prop: {
                                '#height': '<.#height',
                                '#width': '<.#width',
                                text: $$.$me_atom2_prop(['<<.value', '<<.options', '<<.option_ids', '<<.none', '.#width', '/.#pixelRatio', '.#ctx'], ({ masters: [value, options, option_ids, none, width, pixelRatio, ctx] }) => {
                                    $$.$me_atom2_control.font_prepare(ctx, pixelRatio);
                                    const ctxWidth = width * pixelRatio;
                                    let result = none;
                                    const ids = typeof value == 'string' ? [value] :
                                        value instanceof Set ? [...value].sort((valA, valB) => option_ids.indexOf(valA) - option_ids.indexOf(valB)) :
                                            value instanceof Map ? [...value].map(([id, _]) => id) :
                                                [];
                                    if (ids.length) {
                                        let i = 0;
                                        result = $$.$me_option_caption_text(ids[i], options);
                                        while (i + 1 < ids.length && ctx.measureText(result + ' и еще ' + (ids.length - (i + 1))).width < ctxWidth) {
                                            let text = result + ', ' + $$.$me_option_caption_text(ids[i + 1], options);
                                            if (ctx.measureText(text + (ids.length <= i + 2 ? '' : ' и еще ' + (ids.length - (i + 2)))).width >= ctxWidth) {
                                                break;
                                            }
                                            else {
                                                result = text;
                                                i++;
                                            }
                                        }
                                        if (i + 1 < ids.length)
                                            result += ' и еще ' + (ids.length - (i + 1));
                                    }
                                    return result;
                                }),
                                fontSize: '<<.fontSize',
                                alignVer: () => $$.$me_align.center,
                            },
                        }),
                    },
                }),
            },
        };
        $$.$nl_picker_cursor = $$.$me_atom2_async_multi_origin({
            default: '',
            raf_order: 100,
            flush: (row_i, prev, _value) => {
                _value.origin.by_path_s('<<.row_cursor').value(row_i);
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//picker.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        let $nl_calendar_mode;
        (function ($nl_calendar_mode) {
            $nl_calendar_mode[$nl_calendar_mode["day"] = 0] = "day";
            $nl_calendar_mode[$nl_calendar_mode["month"] = 1] = "month";
        })($nl_calendar_mode = $$.$nl_calendar_mode || ($$.$nl_calendar_mode = {}));
        $$.$nl_calendar = {
            dispatch: (dispatch_name, dispatch_arg) => {
                if (dispatch_name == 'isValid') {
                    dispatch_arg.result = dispatch_arg.val <= new Date();
                    return true;
                }
                else if (dispatch_name == 'clickOrTapOutside') {
                    return true;
                }
                else if (dispatch_name == 'didSelect') {
                    return true;
                }
                return false;
            },
            prop: {
                value: () => new Date(),
                k: () => 1,
                day_size: $$.$me_atom2_prop(['.k'], ({ masters: [k] }) => Math.round(k * 32)),
                month_height: $$.$me_atom2_prop(['.k'], ({ masters: [k] }) => Math.round(k * 32)),
                header_height: $$.$me_atom2_prop(['.k'], ({ masters: [k] }) => Math.round(k * 33)),
                content_day_header_height: $$.$me_atom2_prop(['.k'], ({ masters: [k] }) => Math.round(k * 24)),
                arrow_size: $$.$me_atom2_prop(['.k'], ({ masters: [k] }) => Math.round(k * 11)),
                arrow_ofsHor: $$.$me_atom2_prop(['.k'], ({ masters: [k] }) => Math.round(k * 11)),
                theme: '/.theme',
                header_background_color: $$.$me_atom2_prop(['.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#0070a4' : '#008ecf'),
                header_text_color: $$.$me_atom2_prop(['.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'white' : 'white'),
                content_header_text_color: $$.$me_atom2_prop(['.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#313745' : '#d8dce3'),
                content_header_background_color: $$.$me_atom2_prop(['.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#d8dce3' : '#878f9b'),
                content_background_color: $$.$me_atom2_prop(['.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'white' : '#464f63'),
                content_selected_background_color: $$.$me_atom2_prop(['.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#f0f1f4' : '#878f9b'),
                content_selected_background_border: $$.$me_atom2_prop(['.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'solid 1px #008ecf' : 'solid 1px #008ecf'),
                content_text_color: $$.$me_atom2_prop(['.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#313745' : 'white'),
                content_invalid_text_color: $$.$me_atom2_prop(['.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#b2b7bf' : '#b2b7bf'),
                '#height': $$.$me_atom2_prop(['@header.#height', '.content_height_max'], $$.$me_atom2_prop_compute_fn_sum()),
                mode: () => $nl_calendar_mode.day,
                weekdays: () => ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                months: () => ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                '#width': $$.$me_atom2_prop(['.weekdays', '.day_size'], ({ masters: [weekdays, day_size] }) => weekdays.length * day_size),
                content_height_max: $$.$me_atom2_prop(['.day_size', '.content_day_header_height', '.month_height'], ({ masters: [day_size, content_day_header_height, month_height] }) => Math.max(day_size * 6 + content_day_header_height, month_height * 6)),
            },
            style: {
                userSelect: () => 'none',
            },
            elem: {
                area: $$.$me_atom2_prop(['.mode'], ({ masters: [mode] }) => ({
                    type: $nl_calendar_mode[mode],
                    base: area,
                })),
                header: () => ({
                    base: header,
                    prop,
                }),
                content: $$.$me_atom2_prop(['.mode'], ({ masters: [mode] }) => ({
                    type: $nl_calendar_mode[mode],
                    base: mode == $nl_calendar_mode.day ? content_day : content_month,
                    prop,
                })),
            },
        };
        function new_month_year(value, mode, inc = 1) {
            const month = value.getMonth();
            const year = value.getFullYear();
            const year_new = mode == $nl_calendar_mode.month ?
                year + inc :
                year + (inc < 0 && !month || inc > 0 && month == 11 ? inc : 0);
            const month_new = mode == $nl_calendar_mode.month ?
                month :
                (month + 12 + inc) % 12;
            return [month_new, year_new];
        }
        const prop = {
            '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1)
        };
        const header = {
            prop: {
                '#height': '<.header_height',
                arrow: () => ['left', 'right'],
            },
            style: {
                background: '<.header_background_color',
            },
            elem: {
                arrow: $$.$me_atom2_prop({ keys: ['.arrow'], masters: ['<.mode', '<.value'] }, ({ key: [id], masters: [mode, value] }) => id == 'right' && (() => {
                    const [month_new, year_new] = new_month_year(value, mode);
                    let val = new Date(year_new, month_new, 1);
                    const result = !$$.a.dispatch('<', 'isValid', { val, result: false }).result;
                    return result;
                })() ? null :
                    {
                        prop: {
                            '#alignHor': () => $$.$me_align[id],
                            '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                            '#width': $$.$me_atom2_prop(['<<.arrow_size', '<<.arrow_ofsHor'], ({ masters: [size, ofsHor] }) => size + 2 * ofsHor),
                            '#cursor': () => 'pointer',
                        },
                        elem: {
                            triangle: () => ({
                                base: $$.$me_triangle,
                                prop: {
                                    '#alignVer': () => $$.$me_align.center,
                                    '#ofsHor': '<<<.arrow_ofsHor',
                                    color: '<<<.header_text_color',
                                    direction: () => $$.$me_rect_sides_enum[id],
                                    size: '<<<.arrow_size',
                                },
                            }),
                        },
                        event: {
                            clickOrTap: () => {
                                const value = $$.a('<<.value');
                                const [month_new, year_new] = new_month_year(value, $$.a('<<.mode'), $$.a('@triangle.direction') - 1);
                                const day = value.getDate();
                                let day_new = Math.min(day, month_day_count([month_new, year_new]));
                                let val = new Date(year_new, month_new, day_new);
                                while (!$$.a.dispatch('<<', 'isValid', { val, result: false }).result)
                                    val = new Date(year_new, month_new, --day_new);
                                $$.a('<<.value', val);
                                return true;
                            },
                        },
                    }),
                caption: () => ({
                    prop: {
                        '#ofsHor': $$.$me_atom2_prop(['<<.arrow_ofsHor', '<<.arrow_size'], ({ masters: [arrow_ofsHor, arrow_width] }) => 2 * arrow_ofsHor + arrow_width),
                        '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor'], ({ masters: [width, ofsHor] }) => width - 2 * ofsHor),
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                        '#cursor': () => 'pointer',
                    },
                    event: {
                        clickOrTap: () => {
                            $$.a('<<.mode', $$.a('<<.mode') == $nl_calendar_mode.month ?
                                $nl_calendar_mode.day :
                                $nl_calendar_mode.month);
                            return true;
                        },
                    },
                    elem: {
                        label: () => ({
                            prop: {
                                '#width': () => null,
                                '#height': () => null,
                                '#align': () => $$.$me_align.center,
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<<<.mode'], ({ masters: [mode] }) => {
                                    const result = ['<<<.value'];
                                    if (mode == $nl_calendar_mode.day)
                                        result.push('<<<.months');
                                    return result;
                                }), ({ len, masters: [value, months] }) => (len < 2 ? '' : months[value.getMonth()] + ' ') + value.getFullYear()),
                            },
                            style: {
                                color: '<<<.header_text_color',
                                fontSize: $$.$me_atom2_prop(['<<<.k', '/.em'], ({ masters: [k, em] }) => Math.round(k * em)),
                            },
                        }),
                    },
                }),
            },
        };
        const area = {
            prop: {
                '#height': $$.$me_atom2_prop(['<@header.#height', '<@content.#height'], $$.$me_atom2_prop_compute_fn_sum()),
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
            },
            style: {
                background: '<.content_background_color',
                boxShadow: () => '0 8px 12px 0 rgba(0, 0, 0, 0.5)',
            },
            event: {
                clickOrTap: () => true,
            },
        };
        const content_month = {
            prop: {
                '#ofsVer': '<@header.#height',
                '#height': $$.$me_atom2_prop(['.month_height'], $$.$me_atom2_prop_compute_fn_mul(6)),
                months: '<.months',
                month_height: '<.month_height',
                month_top: $$.$me_atom2_prop({ keys: ['.months'], masters: ['.months', '.month_height'] }, ({ key: [month], masters: [months, month_height] }) => Math.floor(months.indexOf(month) / 2) * month_height),
                month_left: $$.$me_atom2_prop({ keys: ['.months'], masters: ['.months', '.#width'] }, ({ key: [month], masters: [months, width] }) => months.indexOf(month) % 2 * width / 2),
            },
            elem: {
                month: $$.$me_atom2_prop({ keys: ['.months'] }, ({ key: [month] }) => ({
                    prop: {
                        '#width': $$.$me_atom2_prop(['<.#width'], $$.$me_atom2_prop_compute_fn_mul(1 / 2)),
                        '#height': '<.month_height',
                        '#ofsHor': `<.month_left[${month}]`,
                        '#ofsVer': `<.month_top[${month}]`,
                        isSelected: $$.$me_atom2_prop(['<<.value', '<.months'], ({ masters: [value, months] }) => months[value.getMonth()] == month),
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                        isValid: $$.$me_atom2_prop(['<<.value', '<.months'], ({ masters: [value, months] }) => {
                            const value_new = new Date(value.getFullYear(), months.indexOf(month), 1);
                            const result = $$.a.dispatch('<<', 'isValid', { val: value_new, result: false }).result;
                            return result;
                        }),
                        '#cursor': $$.$me_atom2_prop(['.isValid'], ({ masters: [isValid] }) => !isValid ? null : 'pointer'),
                        content_selected_background_color: '<<.content_selected_background_color',
                        content_selected_background_border: '<<.content_selected_background_border',
                    },
                    style: Object.assign({}, style_selected),
                    event: {
                        clickOrTap: () => {
                            if (!$$.a('.#cursor'))
                                return false;
                            const value = $$.a('<<.value');
                            const year = value.getFullYear();
                            const month_new = $$.a('<.months').indexOf(month);
                            const day_new = Math.min(value.getDate(), month_day_count([month_new, year]));
                            const value_new = new Date(year, month_new, day_new);
                            $$.a('<<.value', value_new);
                            $$.a('<<.mode', $nl_calendar_mode.day);
                            return true;
                        },
                    },
                    elem: {
                        label: () => ({
                            prop: {
                                '#width': () => null,
                                '#height': () => null,
                                '#align': () => $$.$me_align.center,
                            },
                            dom: {
                                innerText: () => month,
                            },
                            style: {
                                color: $$.$me_atom2_prop(['<.isValid', '<<<.content_text_color', '<<<.content_invalid_text_color'], ({ masters: [isValid, validColor, invalidColor] }) => isValid ? validColor : invalidColor),
                                fontSize: $$.$me_atom2_prop(['<<<.k', '/.em'], ({ masters: [k, em] }) => Math.round(k * em)),
                            },
                        }),
                    },
                })),
            },
        };
        const content_day = {
            prop: {
                day_size: '<.day_size',
                '#height': $$.$me_atom2_prop(['@header.#height', '@content.#height'], $$.$me_atom2_prop_compute_fn_sum()),
                '#ofsVer': '<@header.#height',
                weekdays: '<.weekdays',
                weekday_left: $$.$me_atom2_prop({
                    keys: ['.weekdays'],
                    masters: $$.$me_atom2_prop_masters(['.weekdays'], ({ key: [weekday], masters: [weekdays] }) => {
                        const idx = weekdays.indexOf(weekday);
                        return !idx ? [] : [`.weekday_left[${weekdays[idx - 1]}]`, `.day_size`];
                    }),
                }, $$.$me_atom2_prop_compute_fn_sum()),
                days: $$.$me_atom2_prop(['<.value'], ({ masters: [value] }) => {
                    const weekday = (value.getDay() + 6) % 7;
                    const dayOfMonth = value.getDate() - 1;
                    const i_min = -(weekday + 7 - dayOfMonth % 7) % 7;
                    let i_max = dayOfMonth + 6 - weekday;
                    const day_count = month_day_count(value);
                    while (i_max < day_count - 1)
                        i_max += 7;
                    const result = [];
                    for (let i = i_min; i <= i_max; i++) {
                        result.push(i + '');
                    }
                    return result;
                }),
                day_caption: $$.$me_atom2_prop({ keys: ['.days'], masters: ['<.value'] }, ({ key: [day], masters: [value] }) => {
                    let result = +day + 1;
                    if (result <= 0) {
                        result = month_day_count([(value.getMonth() + 11) % 12, value.getFullYear() - (value.getMonth() ? 0 : 1)]) + result;
                    }
                    else {
                        const day_count = month_day_count(value);
                        if (result > day_count)
                            result = result - day_count;
                    }
                    return result;
                }),
                day_top: $$.$me_atom2_prop({ keys: ['.days'], masters: ['.days', '.day_size'] }, ({ key: [day], masters: [days, day_size] }) => {
                    return Math.floor(days.indexOf(day) / 7) * day_size;
                }),
                day_left: $$.$me_atom2_prop({ keys: ['.days'], masters: ['.days', '.day_size'] }, ({ key: [day], masters: [days, day_size] }) => {
                    return days.indexOf(day) % 7 * day_size;
                }),
            },
            elem: {
                header: () => ({
                    prop: {
                        '#height': '<<.content_day_header_height',
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                        '#cursor': () => 'default',
                    },
                    style: {
                        background: '<<.content_header_background_color',
                    },
                    elem: {
                        weekday: $$.$me_atom2_prop({ keys: ['<.weekdays'] }, ({ key: [weekday] }) => ({
                            prop: {
                                '#width': `<<.day_size`,
                                '#ofsHor': `<<.weekday_left[${weekday}]`,
                            },
                            elem: {
                                label: () => ({
                                    prop: {
                                        '#width': () => null,
                                        '#height': () => null,
                                        '#align': () => $$.$me_align.center,
                                    },
                                    style: {
                                        fontSize: $$.$me_atom2_prop(['<<<<.k', '/.em'], ({ masters: [k, em] }) => Math.round(k * em)),
                                        color: '<<<<.content_header_text_color',
                                    },
                                    dom: {
                                        innerText: () => weekday,
                                    },
                                }),
                            },
                        })),
                    },
                }),
                content: () => ({
                    prop: {
                        '#ofsVer': '<@header.#height',
                        '#height': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<.days'], ({ masters: [days] }) => [`<.day_top[${days[days.length - 1]}]`, '<.day_size']), $$.$me_atom2_prop_compute_fn_sum()),
                    },
                    elem: {
                        day: $$.$me_atom2_prop({ keys: ['<.days'] }, ({ key: [day] }) => ({
                            prop: {
                                '#width': `<<.day_size`,
                                '#height': `<<.day_size`,
                                '#ofsHor': `<<.day_left[${day}]`,
                                '#ofsVer': `<<.day_top[${day}]`,
                                isSelected: $$.$me_atom2_prop(['<<<.value'], ({ masters: [value] }) => value.getDate() == +day + 1),
                                isAvail: $$.$me_atom2_prop(['<<<.value'], ({ masters: [value] }) => +day >= 0 && +day < month_day_count(value)),
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                                '#cursor': $$.$me_atom2_prop(['.isAvail', '.isValid'], ({ masters: [isAvail, isValid] }) => !(isAvail && isValid) ? null : 'pointer'),
                                isValid: $$.$me_atom2_prop(['<<<.value'], ({ masters: [value] }) => {
                                    const value_new = new Date(value.getFullYear(), value.getMonth(), +day + 1);
                                    const result = $$.a.dispatch('<<<', 'isValid', { val: value_new, result: false }).result;
                                    return result;
                                }),
                                content_selected_background_color: '<<<.content_selected_background_color',
                                content_selected_background_border: '<<<.content_selected_background_border',
                            },
                            style: Object.assign({}, style_selected),
                            event: {
                                clickOrTap: () => {
                                    if (!$$.a('.#cursor'))
                                        return false;
                                    if (!$$.a('.isSelected')) {
                                        const value = $$.a('<<<.value');
                                        const value_new = new Date(value.getFullYear(), value.getMonth(), +day + 1);
                                        $$.a('<<<.value', value_new);
                                    }
                                    $$.a.dispatch('<<<', 'didSelect');
                                    return true;
                                },
                            },
                            elem: {
                                label: $$.$me_atom2_prop(['.isAvail'], ({ masters: [isAvail] }) => !isAvail ? null : {
                                    prop: {
                                        '#width': () => null,
                                        '#height': () => null,
                                        '#align': () => $$.$me_align.center,
                                    },
                                    style: {
                                        color: $$.$me_atom2_prop(['<.isValid', '<<<<.content_text_color', '<<<<.content_invalid_text_color'], ({ masters: [isValid, validColor, invalidColor] }) => isValid ? validColor : invalidColor),
                                        fontSize: $$.$me_atom2_prop(['<<<<.k', '/.em'], ({ masters: [k, em] }) => Math.round(k * em)),
                                    },
                                    dom: {
                                        innerText: `<<<.day_caption[${day}]`,
                                    },
                                }),
                            },
                        })),
                    },
                }),
            },
        };
        const style_selected = {
            background: $$.$me_atom2_prop(['.isSelected', '.content_selected_background_color'], ({ masters: [isSelected, color] }) => isSelected ? color : 'transparent'),
            border: $$.$me_atom2_prop(['.isSelected', '.content_selected_background_border'], ({ masters: [isSelected, border] }) => isSelected ? border : 'none'),
            boxSizing: () => 'border-box',
        };
        const month_day_count = (value) => {
            const [month, year] = value instanceof Date ?
                [value.getMonth(), value.getFullYear()] :
                value;
            const result = month != 1 ?
                [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] :
                year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ?
                    29 :
                    28;
            return result;
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//calendar.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function today() {
            const now = new Date();
            return new Date(now.getFullYear(), now.getMonth(), now.getDate());
        }
        function asString(val) {
            const result = val == Infinity ? 'За все время' :
                val == 0 ? 'Сегодня' :
                    val + ' ' + $$.$me_word_plural(val, 'день', 'дня', 'дней');
            return result;
        }
        $$.$nl_pickerdate = {
            prop: {
                value: () => 6,
                theme: '/.theme',
                input_width: $$.$me_atom2_prop(['.value'], ({ masters: [value] }) => value == Infinity ? 150 : 100),
                buttonDropdown_width: () => 40,
                text_margin: () => 16,
                icon_size: $$.$me_atom2_prop(['.#height'], $$.$me_atom2_prop_compute_fn_mul(28 / 32)),
                icon_filter: $$.$me_atom2_prop(['.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    'invert(65%) sepia(17%) saturate(1025%) hue-rotate(158deg) brightness(84%) contrast(87%)' :
                    'invert(46%) sepia(87%) saturate(371%) hue-rotate(162deg) brightness(93%) contrast(84%)'),
                isTouch: '/.#isTouch',
            },
            style: {
                userSelect: () => 'none',
            },
            elem: {
                input: () => ({
                    base: $$.$nl_input,
                    dispatch(dispatch_name, dispatch_arg) {
                        if (dispatch_name == 'change') {
                            $$.a('<.value', dispatch_arg == '' ? Infinity : Number.parseInt(dispatch_arg, 10));
                            return true;
                        }
                        return false;
                    },
                    prop: {
                        '#width': '<.input_width',
                    },
                    dom: {
                        value: $$.$me_atom2_prop(['<.value', '.isFocused'], ({ masters: [value, isFocused] }) => {
                            const result = value;
                            return (!isFocused ? asString(result) :
                                result == Infinity ? '' :
                                    result + '');
                        }),
                    },
                }),
                buttonDropdown: () => ({
                    base: $$.$nl_picker,
                    prop: {
                        '#ofsHor': $$.$me_atom2_prop(['<.input_width', '<.buttonDropdown_width'], $$.$me_atom2_prop_compute_fn_diff()),
                        '#width': '<.buttonDropdown_width',
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 2),
                        '#cursor': () => 'pointer',
                        options: $$.$me_atom2_prop(['<.value'], ({ masters: [value] }) => {
                            const vals = [0, 1, 2, 3, 7, 14, 30, 50, 120, 180, Infinity];
                            const idx = vals.findIndex((val) => value >= val);
                            if (vals[idx] != value)
                                vals.splice(idx, 0, value);
                            const result = {};
                            for (const val of vals) {
                                result[val + ''] = { caption: asString(val) };
                            }
                            return result;
                        }),
                        value: $$.$me_atom2_prop(['<.value'], ({ masters: [value] }) => value + '', ({ val }) => {
                            $$.a('<.value', val == (Infinity + '') ? Infinity : +val);
                        }),
                        dropdownTarget: () => '<@input',
                        isTouch: '<.isTouch',
                    },
                    style: {
                        background: () => 'transparent',
                        border: () => 'none',
                    },
                    event: {
                        clickOrTap: () => {
                            $$.a('<@input.isFocused', false);
                            console.log($$.a('<@input.isFocused'));
                            return true;
                        },
                    },
                    elem: {
                        triangle: () => ({
                            base: $$.$nl_triangle,
                            prop: {
                                '#ofsVer': () => 2,
                            },
                        }),
                        text: () => null,
                    },
                }),
                text: $$.$me_atom2_prop(['.value'], ({ masters: [value] }) => value == Infinity ? null :
                    {
                        prop: {
                            '#ofsHor': $$.$me_atom2_prop(['<.input_width', '<.text_margin'], $$.$me_atom2_prop_compute_fn_sum()),
                            '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor', '<.text_margin', '<@buttonCalendar.#width'], $$.$me_atom2_prop_compute_fn_diff()),
                        },
                        style: {
                            whiteSpace: () => 'nowrap',
                            overflow: () => 'hidden',
                            textOverflow: () => 'ellipsis',
                        },
                        elem: {
                            label: () => ({
                                prop: {
                                    '#width': () => null,
                                    '#height': () => null,
                                    '#align': () => $$.$me_align.center,
                                },
                                style: {
                                    fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                                },
                                dom: {
                                    innerText: $$.$me_atom2_prop(['<<.value'], ({ masters: [value] }) => {
                                        const dt = value == Infinity ? null : new Date(today().getTime() - value * 86400000);
                                        const result = 'с ' +
                                            dt.getDate() +
                                            ' ' +
                                            ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'][dt.getMonth()] +
                                            ' ' +
                                            dt.getFullYear();
                                        return result;
                                    }),
                                },
                            }),
                        },
                    }),
                buttonCalendar: $$.$me_atom2_prop(['.value'], ({ masters: [value] }) => value == Infinity ? null :
                    {
                        base: $$.$me_dropdown,
                        dispatch: (dispatch_name, dispatch_arg) => {
                            if (dispatch_name == 'dropdown') {
                                const { prop_isDropdown, prop_clientRect, isTouch } = dispatch_arg;
                                const prop_value = $$.a.get('<.value');
                                dispatch_arg.result = {
                                    base: $$.$nl_calendar,
                                    dispatch: (dispatch_name, dispatch_arg) => {
                                        if (dispatch_name == 'didSelect') {
                                            prop_isDropdown.value(false);
                                            return true;
                                        }
                                        return false;
                                    },
                                    prop: {
                                        value: $$.$me_atom2_prop([prop_value.name()], ({ masters: [value] }) => value == Infinity ? null : new Date(today().getTime() - value * 86400000), ({ val }) => {
                                            const value = Math.ceil((today().getTime() - val.getTime()) / 86400000);
                                            prop_value.value(value);
                                        }),
                                        k: () => isTouch ? 2 : 1,
                                        '#ofsHor': !isTouch ?
                                            $$.$me_atom2_prop([prop_clientRect.name(), '.#width'], ({ masters: [clientRect, width] }) => clientRect.right - width) :
                                            $$.$me_atom2_prop(['.#width', '/.#viewportWidth'], ({ masters: [width, viewportWidth] }) => (viewportWidth - width) / 2),
                                        marginVer: () => 4,
                                        '#ofsVer': !isTouch ?
                                            $$.$me_atom2_prop([prop_clientRect.name(), '/.#viewportHeight', '.#height', '.marginVer'], ({ masters: [clientRect, viewportHeight, height, marginVer] }) => clientRect.bottom + marginVer + height <= viewportHeight ?
                                                clientRect.bottom + marginVer :
                                                Math.max(0, viewportHeight - height - marginVer)) :
                                            $$.$me_atom2_prop(['.#height', '/.#viewportHeight'], ({ masters: [width, viewportWidth] }) => (viewportWidth - width) / 2),
                                    },
                                };
                                return true;
                            }
                            return false;
                        },
                        node: 'img',
                        prop: {
                            '#height': '<.icon_size',
                            '#width': '<.icon_size',
                            '#alignVer': () => $$.$me_align.center,
                            '#alignHor': () => $$.$me_align.right,
                            '#cursor': () => 'pointer',
                            isTouch: '<.isTouch',
                            '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                        },
                        style: {
                            filter: '<.icon_filter',
                        },
                        attr: {
                            src: () => 'assets/icons-8-today@2x.png'
                        },
                    }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pickerdate.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_scheme_mo = {
            dispatch(dispatch_name, dispatch_arg) {
                if (dispatch_name == 'close_scheme') {
                    console.log('eeeeeeeeee');
                    $$.a('.isShown', false);
                    return true;
                }
            },
            prop: {
                isShown: () => true,
                '#width': '/.#viewportWidth',
                '#height': '/.#viewportHeight',
                '#ofsHor': () => 0,
                '#ofsVer': () => 0,
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
            },
            style: {
                background: $$.$me_atom2_prop(['.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'white' : '#414c5f'),
                border: () => '1px solid red',
            },
            elem: {
                cross: () => ({
                    base: $$.$me_cross,
                    prop: {
                        size: () => 24,
                        thick: () => 3,
                        '#ofsVer': $$.$me_atom2_prop(['<@tabs.#ofsVer'], $$.$me_atom2_prop_compute_fn_sum(2)),
                        '#alignHor': () => $$.$me_align.right,
                        color: '/.colorText',
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 900),
                        '#cursor': () => 'pointer',
                    },
                    event: {
                        clickOrTap: () => {
                            console.log('zzz');
                            $$.a.dispatch('<<', 'close_scheme');
                            return true;
                        },
                    },
                }),
                svg: () => ({
                    prop: {
                        '#ofsVer': () => 40,
                    },
                    event: {
                        clickOrTap: () => {
                            console.log('zzz');
                            $$.a.dispatch('<', 'close_scheme');
                            return true;
                        },
                    },
                    dom: {
                        innerHTML: () => `
<svg id="scheme" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="100%" viewBox="0 0 25220 23850">
    <style>
      .all {
        stroke: var(--bw-geo-scheme-mo-border-color, lightgray);
        stroke-width: 150;
        stroke-linejoin: bevel;
        fill: none;
      }
      .county text {
        font-family: var(--bw-theme-primary-font-family);
        font-size: calc(var(--bw-theme-primary-font-size) * 29);
        fill: gray;
        stroke: none;
        letter-spacing: .1;
        -webkit-user-select: none;
        cursor: pointer;
      }
      .county.go text { font-size: 360px; fill:#000; }
      .county path {
        fill: white;
        stroke: #ccc0a3;
        stroke-width: 20;
        stroke-linejoin:bevel;
        cursor: pointer;
      }
      .county:hover text {
        fill: var(--bw-theme-primary-text-color);
      }
      .county:hover path {
        fill: #ffe6e6;
      }
      .county.selected text {
        fill: var(--bw-theme-primary-text-color)
      }
      .county.selected path {
        fill: #ff8282;
      }
      .county.will-be-deselected:hover text {
        fill: var(--bw-theme-primary-text-color);
      }
      .county.will-be-deselected:hover path {
        fill: #94c0e6
      }

      .town text {font-family:arial,sans-serif;font-size:300px;-webkit-user-select:none;cursor:pointer;fill:#0b0080!important}
      .town circle {fill:#FFFFFF;stroke:#000000;stroke-width:26px;cursor:pointer}
      .town.selected circle, .town.small.selected circle {fill:#777777}

    </style>
    <path class="all" d="m12780 1l-135 175-135-45-20 90-505 196-80 231 245 160-215 70 85 211-185 120-225 446-115-211-500 155-40 155-280-110-170 240-45-5-80-195 35-30h35l25-120-145 15-20 120-185 10-45-95-320 110 25 70-190 60 535 496-100 55 10 100-140 45 170 135-25 80-205 95 115 221-70 120 135 115-270 431-50-35-75-50-30 110-500-85 90-151-410-95-70-120-35 90-395-170 55 190-800 456 75 236-275-196-105 166-240-5-5 241-470-15-65-115-365 336-345 105-105 211-160-25v20 90l-470-115-100 291-120-35-50 456-130-5-10-160 70-30-120-146-460-25-25 65-415-15-35-125-105 50-35-75 135-50-235-35v-55l-65-10-180 145-170-5-15-205-70 25-165-201 40-120-175-30 20-90-160 55-35-206h-90l-390 411h-140l-115-75 60-65-85-105h-175l-30 120 160 145-135 5-60 406 315-10 80-145 95 35 40 15-130 266-70-90-40 446 120 70-180 60 135 196-115 5 180 246-215 170-265-85-15 50-455 130 45 190 195 100-75 100 70 60-330 286 100 100-165 90 25 186 160-25 110 100-125 90 40 50-75 186-115-65-60 125-40 90-165-65 30 135-110 191-110-20-270 476 275 306 35 185 125-65-105 135 175 266 20 130 215 291-35 155 235 40 15 65 30 135-55 50 90 226-180-45-20 115 85 246 80 55-90 296 125 50 25 211 165 65 40 326-135 10 25 130-115 45-25-100-215 20-25 241 275 226-175 90 55 146-45 75 30 45-145 75-10 135 120 85-50 150 130 65-165 141 40 165-100 30 20 346-80 181-95 15 235 200-75 95 135 211 195 25 15 75 25 141 75 5 95 85 65-30 190 75 85-70 245-35-70-85 190-70 125 70 90-150-60-60 50-145 280 15 140 100 230-125 50 105 130-155 255 336 125-5-30 120 145 105 205-50 60-85 85 15 75 166 140-110 100 35 85 170 155 50-20-60 110-70 5 105 310 85 80 241 95 45 165-190 355 40 80 191 230-156-70-30 75-165 130-125-25-50 60-246 175 50 15-95-15-30-50-140 85 10 35-165 130-80 80 145 125-20-5-70 220-25h5l60 80 120-135-40-90 285-145 50-115 120 45-90 110 95 135 30 40-110 25 30 155-65 95 115 160 145-140 240 160 320-65 165 231-30 130 110 120-60 145 115 30 10 5 215-226-70-80 420-105 147-298 321-142-266-63 5-197-321-381-238-226-45-128-10-113-75-45 44-89-78-25-33-91-54-65 8-206 57 13 25-374 546 3 34 103 141 53 30 327 109 78 179-148 97-7 12 70 198 100 224 36-268-262 223-25-88-126 93-101-63-106 30-309-56-175-125-248 67-56 82 60 11-100 208 44 61-128 94-36 43 19 26 22 117-132-32-71 190-77 200 38 57-146 48 43 48-24 4-103 126 8 25-85 58 71 69-88 24 65 49-42-113-212-189 208-115-34 72-99 45 55 1-98 137-140-83-218-4-376-118 136-18-19-57 32-33-18 52-69-95-77-35-159h146l-15 40 71 17 126 52 61-152-43 19 3-44 73-184-133 81-116-47-33-251 198-112 8 122 94 6 41-168-115-41-2-32-29-73-38-48 17-165 11-88-153-51-27-39 116-23-6-32-82-81 60-60 185 83 72-69 123 43-126 95 40 114-83 31-24 73 44 102 60 188 96 21 77-29 115-5 337-233-73-287 86-46-45-54 217-43-65 98 57 28-53 87 3 199 118 9 319 124 231 6 702 616 9 164 23 570 212-39-8 49-91 46 21 121 201-16 35-43 143 98 107 107-91 25 14 57-12 52 69 26-15 151-204-45-45-102 49-53-126-115-123 70-105-29 63 118-31 129-99-69 22 273-338 381-380 266-168 71-333-43-5 126-54 352 61 186-128 112-55 122-88-10 37 123-124 78 45 146-198-74 14-198-175-60-45-107-179 201-118-57 4 248 213 33 14 109 158 25 64 359-124-23-164 107 77 88-154 160 63 193-170-15 8 89 55 22 60 103-56 403-246 121-607-33 27-135-371 172 19 606-115 28-6 96-240 34 5 50-215 25-5 296 105-20 105 45 15 90 105-20-45 175 45 145-200 55 90 115-10 95 85 85 35-15 165 236-95 80 210 211-15 60-70-25 55 100 20 100 115 130-80 110-60 140 35 45-40 80 40 30-45 90 185 150 100-15 65 75 100-65 100 45-80 105 185 75 5-130 5-75 120 105 50-80 110 110 15-140 75-15 25 135 80-50 105 35 150-40 10 55 40-10 80 170 75-25 75 130-30 115 90 35-20 60 175 20 60 181-25 65-25 50 5 85 90 50 25-130 280 50 280 215 65-65 120 10 220-231-35-50 15-140 85-10 10-135h-60l-5-161 80-45-80-145-95-50 560-95 235-75 130-5 110 85 95 20 5 70 70 55-50 281 185 110-15 45 140 115 20 256-95-10 15 95 240 155 200-70 105 286 155-125 215 10 25 150 190 145 165-145 165 251 140-55 35 30 160 140 155-130h205l75 175 180 371-300 201 10 175-100-55 75 155-165-70-200 145 135 240-70 296 160 90 50 130 100 10 65 105 30 55-100 65 170 160 215-5-110 471 55 431 565 160 65 130 90 45 260-125 30-155-85-20 35-521 335-120-25-105 225 10 80-175 180 216 15-176 5-25 340-145-55-286-115 10-130 10-190-171-225 35-50-346 90-50-40-150 75-105 200-35-30-110-230 60-25-180 195-90-85-130 100-35-35-100-25-100 130-150 60 120 395-180 50 201 100 85 175-321 335 25 95-110 120 165 45-140 100 20 45-161 135 196 250-25 110-316-135-80 55-65-35-160 40-166 295-40 10 80 190 60-50-95 220-175-295-40 90-80-15-90 145-85-30-50 95-195 75-150 130-100-135-161 320-291-5-336 310-331 25-130h405l25-60-85-151 125 80 20-296 60 10 160 15 105 170 405-10-20-226 245 221 275-947-140-25-55-95-50-95-285 210h-170l355-667 10-15 750-190 225 70 305-356 505-180 125-376 110-55-5-10-135-160 140-110-130-451-155-176 45-386 200 35 10-356v-5l-120-45-30-195-570 25-20-516 45 15 95 35 60-236-220-271 55-180-190-261-95-10-210-316-100 30-250-371 130-351-105-291-400-35-90 100-5-135-285-5-100 251-80 10 20 211-190 20-130-156-225 120-360 15 5 391h-170l-90-25 10-246-225 5 35-70-335 125-20 5-180-35-15-276-160-271 240-215-60-50-335 216-750-85-375-531 150-216-35-60-75 170-145-75v-90l195-30-185-70-335 165-260-125-285 286-125-211-420-371-160-60-315 60-160 45-140-215 235-135-15-10-140-60 10-286-195-60-55-150-50-165 15-166-90-75 30-246-120-226 145-301-345 85-75-190-160-165 15-110-80-85 95-100-20-20 85-85 40-210-135-70 90-341-100-105 220-40-40-160-320-55 155-341-70-180-285 40 20-221-225-115 230-200-240 15-105-110 60-135 385-286-20-180-165-100 90-200-125-85-75-491 90-206-110-210 35-186-315-251v261l-180-85h-365l-120 90-195-10-30 100-80-10 15-150h-285l-70-857-295-195-165 100-140-266-130 30-45-75-135 25-72-200h-160l25-161-255-95z m-3957 14317l25 9-15 37 48 16-30 65-19-8-9 7-5 24-22 18-26-26 13-24 12 5 18-27 6-51-8-10 11-34z"/>
    <g bw:code="ru-mo-taldomskiy-r-n" class="county"><path d="m10505 1885l170-240 280 110 40-156 500-155 115 211 225-447 185-120-85-210 215-71-245-160 80-231 505-195 20-90 135 45 135-176 255 96-25 160h160l75 196 135-26 45 76 130-30 140 265 165-100 295 196 70 857h285l-15 150 80 10-20 85-160 156 110 250-175 166-200-231-310 160-145 16-210 215-230-40-250 140-25 196 195 296-110 200-270 160-255 391-275-80-185-145-30-120-715 255-135-431-745-947-305-221 275-160 35-151 90-15z"/><path d="m10080 1584l45 96 185-10 20-121 145-15-25 121h-35l-35 30 80 195 45 5 25 110-90 15-35 151-275 160-536-496 190-60-25-70z"/><text x="10600" y="2420">Талдомский</text></g>
    <g bw:code="ru-mo-sergievo-posadskiy-r-n" class="county"><path d="m13235 2627l230 40 210-215 145-16 310-160 200 231 175-166-110-250 160-156 20-85 30-100 196 10 120-90h365l180 85v-261l315 251-35 185 110 211-90 205 75 491 125 86-90 200 165 100 20 181-385 286-60 135 105 110 240-15-230 201 225 115-20 221 285-41 70 181-155 341 320 55 40 160-220 40 100 106-90 340 135 71-40 210-85 85-1115 968h-215l-40-45-486 50-75-75-45-161-120 65-500-285-385 65-85 35-5-130 85-46-50-300-240-25 220-126-120-310 140-131-15-165 210-316-100-195 100-201 170-145-145-246-155-40 30-75-85-121 20-150-70-195-60-20 20-116-135-110 110-200-195-296 25-196z"/><text x="13600" y="3300">Сергиево-Посадский</text></g>
    <g bw:code="ru-mo-dmitrovskiy-r-n" class="county"><path d="m9344 4963l155-30-110-86 35-160-285-276 205-200 95-196 255-5 140-115-60-95-180-55 30-111 75 51 50 35 271-431-136-116 71-120-116-221 206-95 25-80-171-135 141-45-10-101 100-55 305 221 745 947 135 431 715-255 30 120 185 145 275 80 255-391 270-160 135 110-20 116 60 20 70 195-20 150 85 121-30 75 155 40 145 246-170 145-100 201 100 195-210 316 15 165-140 131 120 310-220 126 240 25 50 300-85 46-95-25-175 220-230 216 85 165-65 241-180 10-290-251-230-30-260 95 35 105-60 15 90 121-45 160 75 55-120 151-20 115-45-10-240 296-75-45-90-86-35 50-110-60 20 101-320-76-45 45-190-250 10-166 170-85-145-175-100 15-65-346 205-321-75-110-90-45-125-246-450 30-15-135 135-140-70-146-231-85-5-105-370-421v-86l-20-145 60-60-80-10z"/><text x="9800" y="5320">Дмитровский</text></g>
    <g bw:code="ru-mo-klinskiy-r-n" class="county"><path d="m5469 4908v-91-20l160 25 105-210 345-105 365-336 65 115 470 15 5-240 240 5 105-166 275 196-75-236 800-456-55-191 395 171 35-90 70 120 410 95-90 151 500 85 180 55 60 95-140 115-255 5-95 196-205 200 285 276-35 160 110 86-155 30 5 75 80 10-60 60 20 145-130 16 105 250-265 5 230 171-20 115-235-100-230 50v150l-180-10 30 150-115 146-15 250-260 31-35 70-280 105 30 140-70 86 55 40-125 110 185 150-130 341-25-80-85 25-70-65-70 50 80 55-40 90-245-90 55 216-135-20-45 75-185-65-430 130-140-90-80 115-530 15-70-421 125-401-440-236 25-180-290 10-170-311 210-35-185-215 85-141h-221l-130-255-200-191 50-456 120 35 100-291z"/><text x="5600" y="6000">Клинский</text></g>
    <g bw:code="ru-mo-lotoshinskiy-r-n" class="county"><path d="m1638 5945l115-5-135-195 180-60-120-71 40-446 70 91 130-266-40-15-95-35-80 145-315 10 60-406 135-5-160-145 30-121h175l85 106-60 65 115 75h140l390-411h90l35 206 160-56-20 91 175 30-40 120 165 200 70-25 15 206 170 5 180-145 65 10v55l235 35-135 50 35 75 105-50 35 125 415 15 25-65 460 25 120 146-70 30 10 160 130 5 200 191-195 30-15 556-275-65-70 220 75 191-440 75-25 115-560-55-595 256 30 336-170 90-40-90 65-96-140-50-120 131-160-251-325 50-40-60 95-185-20-31-105 21-125-46 115-115-160-130-100 30 10 30-85 50-180-225-5-76-45-75 15-50 265 85 215-170z"/><text x="1400" y="6020">Лотошинский</text></g>
    <g bw:code="ru-mo-shahovskoy-r-n" class="county"><path d="m878 7735l125-91-110-100-160 25-25-185 165-90-100-101 330-285-70-61 75-100-195-100-45-191 455-130 45 75 5 76 180 225 85-50-10-30 100-30 160 130-115 115 125 46 105-21 20 31-95 185 40 60 325-50 160 251 120-131 140 50-65 96 40 90 170-90 65 135-160 110-155 502h325l-145 155 75 316 195 65-35 261-160 140 80 205-390 361 115 301-215 191-265-36-65 211h-130l-80 85-220 45-85 191-175-30-75 50-135-60 45-191-310-15-15-65-235-40 35-156-215-290-20-131-175-265 105-136-125 66-36-186-275-306 270-476 111 20 110-190-30-136 165 66 40-91 60-125 115 65 75-185z"/><text x="300" y="9000">Шаховской</text></g>
    <g bw:code="ru-mo-mojayskiy-r-n" class="county"><path d="m1433 10562l175 30 85-191 220-45 80-85h130l65-211 265 36-70 160 190 386-245 180 250-35 10 106 490-41 70 171 125 35 45-176 185-70 110-5-15 231 145 100 390-160 300 235-85 176 200-40-45 175 170 80-70 141 155 25 65 346 140-126 191 271 115-90 365 631-80 111-245-26 75 201-376 205 70 86-45 95-215 30-355 336-50 296 85-146 125 40-80 346-300 115-110-115-375 80-20 336-95 10 125 286-60 85-205 50-145-105 30-120-125 5-255-336-130 155-50-105-230 125-140-100-280-15-50 145 60 61-90 150-125-70-190 70 70 85-245 35-85 70-190-75-65 30-95-85-75-5-25-140-15-75-195-26-135-210 75-95-235-201 95-15 80-180-20-346 100-30-40-166 165-140-130-65 50-151-120-85 10-135 145-75-30-45 45-76-55-145 175-90-275-226 25-240 215-20 25 100 115-45-25-131 135-10-40-325-165-66-25-210-125-50 90-296-80-55-85-246 20-115 180 45-90-225 55-51-30-135 310 15-45 191 135 60z"/><text x="1500" y="13020">Можайский</text></g>
    <g bw:code="ru-mo-ruzskiy-r-n" class="county"><path d="m3593 10336l140 291 140-421 325-80 35-106 520-60 55-326 90 331 85-20-10-250 356-256-231-75 176-106-95-150 360-225-15-101-185-75 75-165 440 60-25-105 85 10 35 376 145-86-40-165 390 56-35 139h55l60 256-15 160 150-10 300 487-340 110 130 105-130 150-130-5 15 281 165-80 20 150 110 71 20-91 90 40 140 156-75 50 45 195-65 131 280 391-120 95-15 271 170 145-260 100-225 246-410 70-150 140 55 131-90 100 205 65 160 196-5 210 155 201-285 100 15 291-170-41-350 131-60-181-285 201-100-181-356-20-80-170 45-95-70-86 376-205-75-201 245 26 80-111-365-631-115 90-191-271-140 126-65-346-155-25 70-141-170-80 45-175-200 40 85-176-300-235-390 160-145-100 15-231-110 5 115-90-50-85-255-130z"/><text x="4700" y="11000">Рузский</text></g>
    <g bw:code="ru-mo-naro-fominskiy-r-n" class="county"><path d="m9778 12031l-109 80-265 50-155 155 10-115-470 60-105 145-315 25 5 180-205 171-440 75v95l-240-125-65 125-40-145-215-15-15 261-345-361-255 241-5 211 155 200-285 100 15 291-170-40-350 130-60-180-285 200-100-180-355-20-80-171-215 30-355 336-50 296 85-146 125 40-80 346-300 115-110-115-375 80-20 336-95 10 125 286 85 15 75 166 140-110 100 35 85 171 155 50-20-60 110-70 5 105 310 85 80 241 95 45 165-190 355 40 80 191 230-155-70-30 75-165 130-125-25-50 60-246 175 50 15-95-15-30-50-140 85 10 35-165 130-80 80 145 125-20-5-70 220-25h5l60 80 120-135-40-90 285-145 50-115 120 45-90 110 95 135 30 40-110 25 30 155-65 95 115 160 145-140 240 160 320-65 165 231-30 130 110 120-60 145 115 30 10 5 215-226-70-80 420-105 120-276 335-161-230-55 1-217-110-77-229-290-245-238-31-125-4-105-82-36 46-94-91-23-20-109-69-50 13-213 43 4 30-372 560 7 36 118 151 34 11 328 126 73 85-68 75-68 79-5 33 76 215 87 211 48-272-258 219-36-85-133 85-95-56-107 22-340-38-145-126-225z"/><text x="4600" y="14180">Наро-Фоминский</text></g>
    <g bw:code="ru-mo-odintsovskiy-r-n" class="county"><path d="m6189 12672l90-100-55-130 150-140 410-70 225-246 260-100-170-145 15-271 120-95-280-391 65-130-45-196 75-50-140-155 120-145 275 125 5-191 115 30 225-326 430 40 95 110 380-35 120 175 235-70 151 257 70 76-30 94-111 25-113 54 19 124 109-34 48-97 30 12-18 106 164 7 151 113 61-47 66 60 122 24 39-84 22 9 41 26 137-24 10-42 57-50-171-137-77 92 186 22 13 36-202-13-74 37-119-46 37-60c11 9-125-29-186-49l1-52-203-104 571 81 16 11 201 170 43-30 135 10 105 95 185-196 265 100v-186l195-55 50 25 35-40 35 25 125-160-5 371 82 248-141 151 9 101-52-85-73 122 133 44 191-223 58 99 40 110-40 30-30-50-65 85-74-111-6 116-65-5-65-5-20 115-25 35-55-65-65 165-200-50-180 80 30 85-120 125-30-40-5 20-35-30-90 40-60 135-210-45-15 95-85-60-160 155-55-211-275 65 100 75-25 35-95-40-50 105 135 20-155 155 10-115-470 60-105 145-315 25 5 180-205 170-440 75v95l-240-125-65 125-40-145-215-15-15 261-345-361-255 241-160-196z"/><path d="m9439 12040l-100-75 275-65 55 211-265 50-135-20 50-106 95 40z"/><text x="7500" y="11180">Одинцовский</text></g>
    <g bw:code="ru-mo-volokolamskiy-r-n" class="county"><path d="m2863 9038l160-140 35-261-195-65-75-316 145-155h-325l155-502 160-110-65-135-30-336 595-256 560 55 25-115 440-75-75-191 70-220 275 65 15-556 195-30 130 255h221l-85 141 185 215-210 35 170 311 290-10-25 180 440 236-125 401 70 421-115 105-125-190-175 80 30 321 115 80 5 130 65-30 40 121 25 105-440-60-75 165 185 75 15 101-360 225 95 150-176 106 231 75-356 256 10 250-85 20-90-331-55 326-520 60-35 106-325 80-140 421-140-291-280 171 255 130 50 85-115 90-185 70-45 176-125-35-70-171-490 41-10-106-250 35 245-180-190-386 70-160 215-191-115-301 390-361z"/><text x="3000" y="7500">Волоколамский</text></g>
    <g bw:code="ru-mo-istrinskiy-r-n" class="county"><path d="m5604 8196l-30-321 175-80 125 190 115-105 530-15 80-115 140 90 430-130 185 65 45-75 135 20-55-216 245 90 40-90-80-55 70-50 70 65 36 85 184 141 160-26 250 396v126l755 145 85 296 290-80-25 371 130 30 65 200 75-20-55 110 105-50 86 126-91 45 86 105 145 45 30 160-165 216 95 110-40 171-111 15-20 180-240 120 75 81-20 20-305 5-335-151-160-270-235 70-120-176-380 36-95-111-430-40-225 326-115-30-5 190-275-125-120 145-90-40-20 91-110-71-20-150-165 80-15-281 130 5 130-150-130-105 340-110-300-487-150 10 15-160 230 5v-281l-90-15-30-110-90-45-60 80 10 60-30 50h-55l35-140-390-55 40 165-145 86-35-376-85-10-40-121-65 30-5-130z"/><path d="m6634 8682l30 110 90 15v281l-230-5-60-256 30-50-10-60 60-80z"/><text x="6700" y="9000">Истринский</text></g>
    <g bw:code="ru-mo-solnechnogorskiy-r-n" class="county"><path d="m7879 7028l125-110-55-40 70-86-30-140 280-105 35-70 260-31 15-250 115-146-30-150 180 10v-150l230-50 235 100 20-115-230-171 265-5-105-250 130-16v86l370 421 5 105 231 85 70 146-135 140 15 135 450-30 125 246 90 45 75 110-205 321 65 346 100-15 145 175-170 85-10 166 190 250 45-45 320 76-20-101 110 60 35-50 90 86 10 65-90 55 10 120 65 30-55 70 160 46-5 85h-75v-30l-55-15-40 90-80-5-40 65-125 105-60 25-120-70-180 80-5-65h-120l15-170h-60l40-45-350-246-135 80-60-75-111 25 131 216-70 45 40 160-30 75 200 15 165 121-40-211 65-100 130 40 15 80-110 30 85 221 55-166 105 81-75 15 45 95 160-15-5 95 45-5-10-135 80 40-55 175-160-95-70 115 20 86 45 25-45 80 65 55-170-30v70l-115-20 75-60-130-15-235-161-155 76-86-126-105 50 55-110-75 20-65-200-130-30 25-371-290 80-85-296-755-145v-126l-250-396-160 26-185-141-35-85 85-25 25 80 130-341z"/><text x="7200" y="7500">Солнечногорский</text></g>
    <g bw:code="ru-mo-schelkovskiy-r-n" class="county"><path d="m13825 9294l-75-26 70-75-95-125 115-75 5-65h120l5 45 45 5 15-60-50-81-65-5 25-50 80 5 25 40 35-20 15-150-30-15-90-110 50-10 95 70 100-10-70-211 145-110-75-90 220 10 140-141 110 146 76-75 125 10 65 120 70-226-135-190 195-45 95-176 255-235 85-5 145-131 45-130 735-616 75 190 345-85-145 301 120 225-30 246 90 75-15 165 50 166-160 95 115 5 65 120-110 45-130-105-100 50 15-150-70-60-75 70-20-25 20-130-215-66 115 86-65 50 115 85 15 80-155-65 30 95-120-10-90 15 135 115-75-5-135 181-490-145-20 180 205 40 15 221-145 80-30-115-135 100 110 150-145-15 25 206-160 5-10 50 130 95-10 100 95 231-5 170-155-15 15-80-70-85-75 5-10 215-65 5-80-70-35 151 115 10 185 55 30-50 40 35-75 100 15 135-300 45-100-105-15 80-181-30-155 60-75-135-190-150-125 80-85-65 25-25-10-81-155-5-135-115 75-40 30-205-45-51z"/><text x="15600" y="7600">Щёлковский</text></g>
    <g bw:code="ru-mo-krasnoarmeysk-gor-okrug" class="county"><path d="m14725 7705l-110-146 75-110 146 95 75-100-181-135 146-86-15-50 65-45 35 25 215-175 5-5 1115-968 20 20-95 101 80 85-15 110 160 166-735 616-45 130-145 131-85 5-255 235-95 176-195 45h-60l45-151-45-30z"/><text x="15200" y="6750">Красноармейск</text></g>
    <g bw:code="ru-mo-pushkinskiy-r-n" class="county"><path d="m13130 6467l95 25 5 130 85-35 385-65 500 285 120-65 45 161 75 75 486-50 40 45h215l-5 5-215 175-35-25-65 45 15 50-146 86 181 135-75 100-146-95-75 110 110 146 106-61 45 30-45 151h60l135 190-70 226-65-120-125-10-76 75-110-146-140 141-220-10 75 90-145 110 70 211-100 10-95-70-50 10 90 110-90 25-145-130h-130l-85 165 5 45 50 50 60 10 5-50 110 100-40 41-265-26-50 36-75-31-35 31 25 60h-80v15l-5 10-120-151-65-30-45-85 30-85 50 5-50-75 15-15 50 10 40-75h-10l-25-36 30-15-10-5 10-10 10 5 10-20-5-30v-5l50-35-565-486 25-35-115-65 65-311 90-20 5-95-45-20 65-241-85-165 230-216z"/><path d="m13620 8747l-5-45 85-165h130l145 130 90-25 30 15-15 150-35 20-25-40-80-5-25 50-70 25-110-100-5 50-60-10z"/><text x="12600" y="7300">Пушкинский</text></g>
    <g bw:code="ru-mo-shaturskiy-r-n" class="county"><path d="m21312 11975l185-431 335-491-180-331h170l-5-391 360-15 225-120 130 155 190-20-20-210 80-10 100-251 285 5 5 135 90-100 400 35 105 291-130 351 250 371 100-30 210 315 95 10 191 261-55 180 220 271-60 236-95-35-45-15 20 516 570-25 30 195 120 45v5l-10 356-200-35-45 386 155 176 130 451-140 110 135 160 5 10-110 56-125 376-505 180-306 356-225-70-750 190-10 15-355 667h170l285-211 50 96 55 95 140 25-275 947-245-220 20 225-405 10-105-170-160-15 125-321 100 20 180-135-85-211 125-260 135-171-240-180 15-121-100-55-150-416-300 20-85 55-150-60-15-160-315 15-90-161 120-115-75-95v-341l100-5 210-190-55-121 135-25-35-240 190-20-5-156 185-5 5-265-140-106-40-210 90-60-1075-15-85-91 50-190-80-45-100-371 250 30 295-246z"/><text x="22300" y="14480">Шатурский</text></g>
    <g bw:code="ru-mo-egorevskiy-r-n" class="county"><path d="m19371 13344l-100-206 85-70 45-211 466 20 60 96 145-96 30-255 430 45 475-60 80 45-50 190 85 91 1075 15-90 60 40 210 140 106-5 265-185 5 5 156-190 20 35 240-135 25 55 121-210 190-100 5v341l75 95-120 115 90 161 315-15 15 160 150 60 85-55 300-20 150 416 100 55-15 121 240 180-135 171-125 260 85 211-180 135-100-20-125 321-60-10-20 295-125-80-315-265 5-291-155-5 5-150-210-437-640-15-280-25-225-105-95 130-220-55 30-140-225-55-115-381-671 235-195-441 265-210-245 50-135-120-45-161 135-135-235-55 210-70 110-186-180-40 40-261-120-250 170 10 230-136-5-365z"/><text x="19300" y="14000">Егорьевский</text></g>
    <g bw:code="ru-mo-luhovitskiy-r-n" class="county"><path d="m18986 17484l25-206-320-356 55-215 320 271 440 105 106-241-116-120 371-476 515 210 465-371 640 15 210 437-5 150 155 5-5 291 315 265 85 151-25 60h-405l-25 130-310 331 5 336-320 291 135 160-130 100-75 151-95 195 30 50-145 85 15 91-90 80 295 40-220 175 50 96-190-61-10-80-295 40-40 166-75 70-140-55 125-30 140-291-210 15-30-80 120-65-40-311-105 50-165-150-80-201-300 105-181-230-595-30-145-261-215 105 80-270-300 40-30-100-130-116 90-70-170-10 115-216-70-170-60-431 140 5 315 366z"/><text x="18500" y="18000">Луховицкий</text></g>
    <g bw:code="ru-mo-zarayskiy-r-n" class="county"><path d="m18071 18932l-95-421 255 15 5-225-235-130 250-25 30 100 300-40-80 270 215-105 145 261 595 30 181 230 300-105 80 201 165 150 105-50 40 311-120 65 30 80 210-15-140 291-125 30 140 55 75-70 35 160-55 65 135 80-110 316-250 25-135-195-45 160-100-20-45 141-120-166-95 110-336-25-175 321-100-85-50-201-395 181-60-120-130 150 25 100-305 85-25-260-305-236-235 75-85-125-265 95-175-175 180-351-215-130-60-286 615-556 340 165 5-276z"/><text x="17500" y="20000">Зарайский</text></g>
    <g bw:code="ru-mo-serebryano-prudskiy-r-n" class="county"><path d="m16191 22000l70-296-135-240 200-146 165 71-75-156 100 55-10-175 300-201-180-371 250-70 30-145 90-35 175 175 265-95 85 125 235-75 305 236 25 260 305-85 35 100-100 36 85 130-195 90 25 181 230-61 30 111-200 35-75 105 40 150-90 50 50 346 225-35 190 171 130-10 115-10 55 285-340 146-5 25-15 175-180-215-80 175-225-10 25 105-335 121-35 521 85 20-30 155-260 126-90-45-65-131-565-160-55-431 110-471-215 5-170-161 100-65-30-55-65-105-100-10-50-131z"/><text x="16700" y="22020">Серебряно-Прудский</text></g>
    <g bw:code="ru-mo-stupinskiy-r-n" class="county"><path d="m12905 16627l-95-306-10-190-10-146 55-120 285 115-10 65 280 146 50-111-65-150 130-20 15-95 125 140 140-35 140-100-55-206-85 40-40-185 70-105-80-51 55-160 175 80-75 70 115 176 320-251 140 25 190-180 110-30 21-115 125-66 235 30 250-60 50 50 190-55-10 181 75 55 295-151 230 26 60 225 140 15 85 50 15 96-35 140-155-40-25 175 95 25 120 186-15 120-150-45-190 230 110 101 50-116 75 91-135 185 100-15 25 145 90-50-25 226-70-40-105 185 75 60-60 231-140 40-30 100-240-15-50 246-110 15 55 361 400 155-10 206-240 70-165 220-135-90-110 95-225-115-215 75-80 146-266 215-185-120-180-35-265 20-95-20-110-85-130 5-40-216-425-180-145-296 115-160-165-51 30-215-235-30 35-156-215-85-25-195 255-55-440-316z"/><text x="13300" y="17000">Ступинский</text></g>
    <g bw:code="ru-mo-kashirskiy-r-n" class="county"><path d="m15016 18627l80-146 215-75 225 115 110-95 135 90 95 36 220-81 360 40-95 151 190 381-120 120 325 5-105 346 250 10 60 286 215 130-180 351-90 35-30 145-250 70-75-175h-205l-155 130-160-140-35-30-140 55-165-251-165 146-190-146-25-150-215-10-155 125-105-285-201 70-240-156-15-95 95 10-20-255-140-116 15-45-185-110 50-281-70-55-5-70 265-20 180 35 185 120z"/><text x="14100" y="19600">Каширский</text></g>
    <g bw:code="ru-mo-ozerskiy-r-n" class="county"><path d="m15796 17865l-55-361 110-15 50-246 240 15 30-100 140-40 130 155 305-15 330 141 105-60 105 225 255 45-100 146 400-21 185 101 60-271 70 170-115 216 170 10-90 70 130 116-250 25 235 130-5 225-255-15 95 421-210-75-5 276-340-165-615 556-250-10 105-346-325-5 120-120-190-381 95-151-360-40-220 81-95-36 165-220 240-70 10-206z"/><text x="16000" y="18500">Озерский</text></g>
    <g bw:code="ru-mo-kolomenskiy-r-n" class="county"><path d="m16471 16682l25-226-90 50-25-145-100 15 135-185-75-91-50 116-110-101 190-230 150 45 15-120-120-186-95-25 25-175 155 40 35-140 110-6-15-70 325 126-65-116 110-50 185 141 330-236 65 105 510-35 135-200 395 120 115-135 135 120 245-50-265 210 195 441 671-235 115 381 225 55-30 140 220 55 95-130 225 105 280 25-465 371-515-210-371 476 116 120-106 241-440-105-320-271 5-150-295 85-295-301-135 5-135-205-175-36 25 126-70 60 270 662 280-241 75 220 175 86 40-171 180 75 320 356-25 206-505 20-315-366-140-5 60 431-60 271-185-101-400 21 100-146-255-45-105-225-105 60-330-141-305 15-130-155 60-231-75-60 105-185z"/><path d="m17891 16141l135 205 135-5 295 301 295-85-5 150-55 215-180-75-40 171-175-86-75-220-280 241-270-662 70-60-25-126z"/><text x="16500" y="16180">Коломенский</text></g>
    <g bw:code="ru-mo-orehovo-zuevskiy-r-n" class="county"><path d="m17161 12020l230-100 355 15 90-40 315 40 180-266-50-45 125 5 60-40-5-150-250-231 95-20 85-215-215-111 15-140 120-20-15-316h-95v-115l-85-20-125-251 195-70-10-115 125-10 5-30 180 5-50-70 105-36-55-130 40-35 50-50-160-236 285-285 260 125 335-165 185 70-195 30v90l145 75 75-170 35 60-150 215 376 532 750 85 335-216 60 51-240 215 160 271 15 275 180 36 20-5 335-126-35 70 225-5-10 246 90 25 180 331-335 491-185 431 140 45-295 246-250-30 100 371-475 60-430-45-30 255-145 96-60-96-466-20-45 211-85 70 100 206-325-25 5 365-230 136-170-10-50-5 20-126-395-35-60-461-240 55-165-125 130-160v-211l-440 125 25-155-115-110 75-126-120-115 30-40 100 75 25-115z"/><text x="17450" y="12400">Орехово-Зуевский</text></g>
    <g bw:code="ru-mo-pavlovo-posadskiy-r-n" class="county">
      <path d="m16761 10968l150-81-220-240-10-50 210-10-10-50 35-171-5-185 445-171-15-140 105-85-55-221 95-396 150-60-270-135 30-331 315-60 160 60 420 371 125 210 160 236-50 50-155-205-220-61-165 5 15 386-45 10 15 136 335-5-5 30-125 10 10 115-195 70 125 251 85 20v115h95l15 316-120 20-15 140 215 111-85 215-95 20 250 231 5 150-60 40-125-5 50 45-180 266-315-40-90 40-355-15-50-60-85 15-135 60-60-336-400-150-10-60 30-10v-321h150z"/>
      <text x="17700" y="9000">Павлово-Посадский</text>
    </g>
    <g bw:code="ru-mo-voskresenskiy-r-n" class="county"><path d="m16831 14436l-270-220 135-236 110-15-40-185-350 75-10-196-125-95 15-165-250-111 95-145 10-225 280 60 90-436 255-176 540-5 120 115-75 126 115 110-25 155 440-125v211l-130 160 165 125 240-55 60 461 395 35-20 126 50 5 120 250-40 261 180 40-110 186-210 70 235 55-135 135 45 161-115 135-395-120-135 200-510 35-65-105-330 236-185-141-110 50 65 116-325-126 15 70-110 6-15-96-85-50 250-150-5-276 135-135z"/><text x="16800" y="14620">Воскресенский</text></g>
    <g bw:code="ru-mo-ramenskiy-r-n" class="county"><path d="m14045 12897l-100-175-45 50-30-205 65-161 145 45-10-120 55-35 115 5-30-100-50-10v-121l-75-70 115-75 15-80-80 15-120-80 45-80 185 120 140-25-10-106 105-75-20-90 65 10 65-100 50 5 40-110-110-106 10-70 75-10v-25l146-80 75 70 145-15 250 85-5 171 90-10 145-86 135 20v76h190l55-66 305-70 90-75 95 115 220 61 60 75 10 60 400 150 60 336 135-60 85-15 50 60-230 100 310 261-25 115-100-75-30 40-540 5-255 176-90 436-280-60-10 225-95 145 250 111-15 165 125 95 10 196 350-75 40 185-110 15-135 236 270 220-15 181-135 135 5 276-250 150-140-15-60-225-230-26-295 151-75-55 10-181-190 55-50-50-250 60-235-30-125 66-25-136 65-115-91-10 15-105-125-61-45 116-195 40 15-90-105-25-105-126 55-55 40 50 50-100 80 20 105-140-60-146-135-120-65 55-110-306-80-50-45 60-160-135 185-115-110-361-155 55-110-271 65 30 50 61 90-86 70 111z"/><text x="14500" y="14100">Раменский</text></g>
    <g bw:code="ru-mo-lyuberetskiy-r-n" class="county">
      <path d="m13555 11213l-5-5 30-25-65-65 25-20 75 65 80-90 35-5c-2 20 38-15 47-1 14 21 10 23 20 51 4 11 24-26 31-11 5 10 18 37 19 59 1 21 39-26 41-23l-70 105 17 48 6 46 220 42-2-170-83-48 83-27-81-72 111 9-20-36 33-19-55 1-8-37-55-5 11-48 35-5 110 70 55 100 135-80 30 60 220 75-10 70 110 105-40 110-50-5-65 100-65-10 20 90-105 75 10 105-140 25-185-120-45 80 120 80 80-15-15 80-115 75 75 70v120l50 10 30 100-115-5-80-50-110 35-40-45-100-301-175 50 50-135-75-110 25-35-20-20 150 10v-85l-55-140-145-120 25-120-20-15z"/><path d="m13470 11659l130 25 20 21-25 35 75 110-50 135-25 40-80-35 80-40-90-100-125 5-50 60-85-15-5-80-20-20 65-65 130-166 45 30z"/><path d="m13550 11349l145 120 55 140v85l-150-10-130-25-10-60-45-30 40-40-10-160-35-131z"/>
      <text x="12000" y="11320">Люберецкий</text>
    </g>
    <g bw:code="ru-mo-serpuhovskiy-r-n" class="county"><path d="m10820 16872l225-155 240 100 85-175 100 100 300 100 45 381 235-155-20 235 290-220 220 5 105 110 95 20 215 85-35 156 235 30-30 215 165 51-115 160 145 296 425 180 40 216-235 75-560 95 95 50 80 146-80 45 5 160h60l-10 135-85 10-15 141 35 50-220 230-120-10-65 66-280-216-280-50-25 130-90-50-5-85 25-50 25-65-60-181-175-20 20-60-90-35 30-115-75-131-75 25-80-170-40 10-10-55-150 40-105-35-80 50-25-135-75 15-15 140-110-110-50 80-120-105-5 75-5 130-185-75 80-105-100-45-100 65-65-75 100-61-30-40 40-105 95-55-95-115 10-101-315 31-20-76 80-110-115-130-20-101-55-100 70 25 15-60-211-210 96-81-166-235-35 15-85-85 10-96-90-115 200-55 506 120 55 136 140-276z"/><path d="m10580 18331l-95 55-40 105 30 40-100 61-100 15-185-151 45-90-40-30 40-80-35-45 60-141 20 76 315-31-10 101z"/><text x="9600" y="18300">Серпуховский</text></g>
    <g bw:code="ru-mo-chehovskiy-r-n" class="county"><path d="m10070 15218l375-195-30 140 580 35 625-275 205-251 160 286 110-141 85 126 50-236 145 50-10-246 195 46 65 50-160 235 40 81 95-46 115 206-165 40 145 406-250 80 130 65-215 271 80 211 50-46 310 21 10 190 95 306-375 25 440 316-255 55 25 195-95-20-105-110-220-5-290 220 20-235-235 155-45-381-300-100-100-100-85 175-240-100-225 155-265-160-140 276-55-136-506-120-45-145 45-176-105 20-15-90-105-45-105 20 5-296 215-25-5-50 226-15-15-95 165-40z"/><text x="9800" y="16500">Чеховский</text></g>
    <g bw:code="ru-mo-podolskiy-r-n" class="county"><path d="m11215 13324l15-165 80 50 114-149 117-58 31 147 185 68-56 94 30 97 183 48-190-45-115 216 60 30 110-40 200 150-35 80 150-35-10-90 145 35 55-60-100-221 120-75-95-65 70-65-105-40-45-115 10-90 35-75 110 30 30-196 230 45 215-135 70 206-145 291-150 75 15 85-155 246 90 75-160 35-35 150 80 100 325 70 15 346 75 170-60 50-85-110-80 75-195-45 10 246-145-50-50 236-85-125-110 140-160-286-205 251-360 162 60-410 34-18-71-94-75 4 8-65-10-55 40 17 58 34 33-33 54 5 26-42-16-56-99-113 84-57 9-60 92-44-82-68 80-100 36 5 40-32-4 41 25 37 43-50 57 55-68-416-147-21-8-88-51-29-190-16-5-91z"/><path d="m12175 13228l105 40-70 66 95 65-120 75 100 220-55 61-145-35 10 90-150 35 35-80-200-151-110 40-60-30 115-215 190 45 25-35-45-111 110-80-55-110 95-5 45-130 45 25 5 15-10 90z"/><path d="m12140 13960l115 130-15 36-55-21-145 81-110-45-25 135-150-40 55-35-105-55 20-111-50-20 15-55 90 55 25-105 95 110 30-120 75-30z"/><text x="9800" y="14480">Подольский</text></g>
    <g bw:code="ru-mo-myitischinskiy-r-n" class="county"><path d="m11775 8296l-95-80 75-35 20-95 135-91 10-35-120 10-5 40-50-15-5-140 20-115 120-151-75-55 45-160-90-121 60-15-35-105 260-95 230 30 290 251 180-10 45 20-5 95-90 20-65 311 115 65-25 35 565 486-50 35v5l-35 20 10 20-25 30 5 5 25 36h10l-40 75-50-10-15 15 50 75-50-5-30 85 45 85 65 30 120 151v15l-60 55-65 180 15 96 230-45 105 70-105 160-180 15 5 45-135 10v136l-370-331-75-10-50-5h-135l-335-131-120 10-15 5 30-40-5-165 25-15 15-5 10-45-30-20v-65l65 5-5-51-30-25-155 41 20 85h-35l-25-101-35-5 65-85-55-75 20-75-150-130-165 105-15-65-100 30 5-85 305-56 20-50z"/><path d="m11745 7995l50 15 5-40 120-10-10 35-135 91-20 95-75 35 95 80 30 80-20 50-305 56-160-46 55-70-65-30-10-120 90-55-10-65 75 45 240-296 45 10z"/><text x="10500" y="8220">Мытищинский</text></g>
    <g bw:code="ru-mo-leninskiy-r-n" class="county"><path d="m12265 12897l-25-105-60-70-30-15 20-135 30-201 80-35-45-115 345 40 120-40 360-261 160-160 20 20 5 80 85 15 50-60 125-5 90 100-80 40 80 35v81l115 155 75 20 45 65 105 60-65 161 30 205 45-50 100 175-85 76-70-111-90 86-50-61v-80l-105-55-30-95-130 195-110-125 25 256-320-86-40 101-210-101-70-205-215 135-230-45-30 196-110-30-35 75-5-15v-15l20-80 35 25z"/><path d="m13935 12281l110-35 80 50-55 35 10 120-145-45-105-60-45-65-75-20-115-155v-81l25-40 175-50 100 301z"/><text x="11800" y="12550">Ленинский</text></g>
    <g bw:code="ru-mo-krasnogorskiy-r-n" class="county"><path d="m9654 10481l240-120 20-180 110-15 40-170-95-110 165-216-30-160-145-45-85-105 90-45 155-75 235 160 130 15-75 60 115 20v-70l170 30-65-55 45-80 60 60 30-65 65 175 125 105 45-120 60 40 60-20 35 75h115l35 35-40 40-30 100-80 15-20-30 15-30-5-70-65 20-30-10-105 90 15 35-40 90 80 5-45 25 20 35 10 75 45 45v-60l30 65 80-80 90 10-57 145-13 31 5-15-35-20-20 45h-95l-80 45-155-2 39 150 103 80-17 43-50 25-195 55v186l-265-100-185 196-105-95-135-10-35 43-182-144-42-50 20-20z"/><text x="9400" y="10100" style="display:none">Красногорский</text></g>
    <g bw:code="ru-mo-himki-gor-okrug" class="county go"><path d="m10695 8747l5 65 180-80 120 70 69-34 39-38 62-53 57-69 73-6 42-75 57 4-12 67 126 22 19 29 58 4-6 122-10 90 75-70 45 20-60 140 65 105-40 241 100 20 15 55-175 125h-125l-95 60-80-30-50-191-45-5-10-110 65-5-25-75 65-10-25-110 120-115-90-35-55 45-180-70-25 20 15 20-25 20-30-25-35 30 65 95-40 30-20-30-50 40 65 75 35-45 115 75-55 75 30 25-40 125 60 35-15 75-60 20-60-40-45 120-125-105-65-175-30 65-60-60-45-25-20-85 70-115 160 95 55-175-80-40 10 135-45 5 5-95-160 15-45-95 75-15-105-80-55 165-85-221 110-30 55-10h120z"/><path d="m11590 8602l165-105 150 130-20 75 55 75-65 85 35 5 25 101-70 25 75 290-40 6-125 90-15-55-100-20 40-241-65-105 60-141-45-20-75 70 10-90-65-30 5-20 15-35 50 5-5-40z"/><text x="10700" y="9300">Химки</text></g>
    <g bw:code="ru-mo-noginskiy-r-n" class="county"><path d="m15006 10055l300-45-15-135 75-100-40-35-10-156 155 15 5-170-95-231 10-100-130-95 10-50 160-5-25-206 145 15-110-150 135-100 30 115 145-80 55 115h180l85-100 150 40 5-151 270 20 20-280-195-50 205-196 60 65-100-165 75-70 70 60-15 150 100-50 130 105 110-45-65-120-115-5 160-95 55 150 195 60-10 286 140 60 15 10-235 135 140 216 160-45-30 331 270 135-150 60-95 396 55 221-105 85 15 140-445 171 5 185-35 171-90-306-130-50 25-65-125-91-245 55 25 41-205 235 45 231 220-10 80 105 125-30 10-55h65l10 50 220 240-150 81 70 90h-150v321l-30 10-60-75-220-61-95-115-90 75-305 70-55 66h-190v-76l-135-20-145 86-90 10 5-171-250-85 20-80-185-20-85-196-56 10-20-55 80-45 161 75 45-75-175-95-5-80-271-76 75-150-50-246 155-60 181 30 15-80z"/><path d="m14996 9725l35-151 80 70 65-5 10-215 75-5 70 85-15 80 10 156-30 50-185-55z"/><text x="15000" y="9700">Ногинский</text></g>
    <g bw:code="ru-mo-elektrostal-gor-okrug" class="county go"><path d="m16401 10577l-220 10-45-231 205-235-25-41 245-55 125 91-25 65 130 50 90 306 10 50-210 10h-65l-10 55-125 30z"/><text x="15800" y="10500">Электросталь</text></g>
    <g bw:code="ru-mo-elektrogorsk-gor-okrug" class="county go"><path d="m17986 9248l165-5 220 61 155 205-40 35 55 130-105 36 50 70-180-5-335 5-15-136 45-10z"/><text x="17700" y="9620">Электрогорск</text></g>
    <g bw:code="ru-mo-chernogolovka-gor-okrug" class="county go"><path d="m16041 8246l135-181 75 5-135-115 90-15 120 10-30-95 155 65-15-80-115-85 65-50-115-86 215 66-20 130 20 25 100 165-60-65-205 196 195 50-20 280-270-20-5 151-150-40-85 100h-180l-55-115-15-221-205-40 20-180z"/><text x="16100" y="8420">Черноголовка</text></g>
    <g bw:code="ru-mo-korolev-gor-okrug" class="county go"><path d="m13440 9294l-230 45-15-95 65-180 60-55 5-25v-15h80l-25-60 35-30 75 30 50-35 265 25 40-40 70-25 65 5 50 80-15 60-45-5-5-45h-120l-5 65-115 75 95 125-70 75 75 25 40-25 45 50-30 206-75 40-35-30-330 120-85 5-90-75-5-45 180-15 105-160z"/><text x="13100" y="9380">Королёв</text></g>
    <g bw:code="ru-mo-domodedovo-gor-okrug" class="county">
      <path d="m12710 14371l-15-346-325-70-80-100 35-151 160-35-90-75 155-245-15-86 150-75 145-291 210 101 40-101 320 86-25-256 110 125 130-195 30 95 105 55v80l-65-30 110 271 155-55 110 361-185 115 160 135 45-60 80 50 110 306 65-55 135 120 60 146-105 140-80-20-50 100-40-50-55 55 105 126 105 25-15 90 195-40 45-116 125 61-15 105 91 10-65 115 25 136-21 115-110 30-190 180-140-25-320 251-115-176 75-70-175-80-55 160 80 51-70 105 40 185 85-40 55 206-140 100-140 35-125-140-15 95-130 20 65 150-50 111-280-146 10-65-285-115-55 120 10 146-310-21-50 46-80-211 215-271-130-65 250-80-145-406 165-40-115-206-95 46-40-81 160-235-65-50 80-76 85 111 60-50z"/>
      <text x="13500" y="15000" text-anchor="middle">Домодедовский ГО</text>
    </g>
    <g bw:code="ru-mo-balashiha-gor-okrug" class="county go"><path d="m13265 9584l90 75 85-5 330-120 35 30 135 115 155 5 10 80-25 25 85 65 125-80 190 150 75 135 50 246-75 150 270 75 5 80 12 7 12 4 157 81-50 78-162-72-78 43 20 55 55-10 85 196 185 20-20 80-145 15-75-70-145 80v25l-75 10-220-75-30-60-135 80-55-100-110-70-35 5-150-80-35 50-200 15-20-95-5-25 100-25h15l-15-90 5-65-25-10-20-55 40-15-10-35-90-35 5-75-120 45-8-179-5-114 4-12 143-84 15-40 35 41 74 10-8 53-64-10-77 89-71-34-50-9-27-144-300-276v-135z"/><text x="12800" y="10100">Балашиха</text></g>


    <g class="town" bw:code="ru-mo-klin-g"><circle r="200" cx="6500" cy="5200"/><text x="6800" y="5300">Клин</text></g>
    <g class="town" bw:code="ru-mo-taldom-g"><circle r="200" cx="12000" cy="1700"/><text x="12300" y="1800">Талдом</text></g>
    <g class="town" bw:code="ru-mo-solnechnogorsk-g"><circle r="200" cx="9000" cy="6500"/><text x="9300" y="6600">Солнечногорск</text></g>
    <g class="town" bw:code="ru-mo-dmitrov-g"><circle r="200" cx="11000" cy="4500"/><text x="11300" y="4600">Дмитров</text></g>
    <g class="town" bw:code="ru-mo-sergiev-posad-g"><circle r="200" cx="14700" cy="5400"/><text x="15000" y="5500">Сергиев Посад</text></g>
    <g class="town" bw:code="ru-mo-lotoshino-pos"><circle r="200" cx="2000" cy="5300"/><text x="2300" y="5400">Лотошино</text></g>
    <g class="town" bw:code="ru-mo-volokolamsk-g"><circle r="200" cx="3500" cy="8200"/><text x="3800" y="8300">Волоколамск</text></g>
    <g class="town" bw:code="ru-mo-shahovskaya-pos"><circle r="200" cx="1000" cy="8200"/><text x="1300" y="8300">Шаховская</text></g>
    <g class="town" bw:code="ru-mo-istra-g"><circle r="200" cx="7500" cy="9600"/><text x="7800" y="9700">Истра</text></g>
    <g class="town" bw:code="ru-mo-ruza-g"><circle r="200" cx="5300" cy="11500"/><text x="5600" y="11600">Руза</text></g>
    <g class="town" bw:code="ru-mo-mojaysk-g"><circle r="200" cx="2000" cy="13500"/><text x="2300" y="13600">Можайск</text></g>
    <g class="town" bw:code="ru-mo-naro-fominsk-g"><circle r="200" cx="5300" cy="15000"/><text x="5600" y="15100">Наро-Фоминск</text></g>
    <g class="town" bw:code="ru-mo-chehov-g"><circle r="200" cx="11100" cy="15700"/><text x="11400" y="15800">Чехов</text></g>
    <g class="town" bw:code="ru-mo-serpuhov-g"><circle r="200" cx="10500" cy="17500"/><text x="10800" y="17600">Серпухов</text></g>
    <g class="town" bw:code="ru-mo-odintsovo-g" transform="translate(11000,11100)"><circle r="200"/><text text-anchor="middle" x="0" y="450">Одинцово</text></g>
    <g class="town" bw:code="ru-mo-krasnogorsk-g"><circle r="200" cx="10800" cy="10200"/><text x="11100" y="10300">Красногорск</text></g>
    <g class="town" bw:code="ru-mo-vidnoe-g"><circle r="200" cx="13000" cy="12800"/><text x="13300" y="12900">Видное</text></g>
    <g class="town" bw:code="ru-mo-stupino-g"><circle r="200" cx="14200" cy="17500"/><text x="14500" y="17600">Ступино</text></g>
    <g class="town" bw:code="ru-mo-kashira-g"><circle r="200" cx="15000" cy="20000"/><text x="15300" y="20100">Кашира</text></g>
    <g class="town" bw:code="ru-mo-ozeryi-g"><circle r="200" cx="16700" cy="18000"/><text x="17000" y="18100">Озеры</text></g>
    <g class="town" bw:code="ru-mo-zaraysk-g"><circle r="200" cx="19000" cy="20300"/><text x="19300" y="20400">Зарайск</text></g>
    <g class="town" bw:code="ru-mo-luhovitsyi-g"><circle r="200" cx="20000" cy="18400"/><text x="20300" y="18500">Луховицы</text></g>
    <g class="town" bw:code="ru-mo-kolomna-g"><circle r="200" cx="18000" cy="16600"/><text x="18300" y="16700">Коломна</text></g>
    <g class="town" bw:code="ru-mo-voskresensk-g"><circle r="200" cx="17000" cy="14000"/><text x="17300" y="14100">Воскресенск</text></g>
    <g class="town" bw:code="ru-mo-ramenskoe-g"><circle r="200" cx="15200" cy="13000"/><text x="15500" y="13100">Раменское</text></g>
    <g class="town" bw:code="ru-mo-egorevsk-g"><circle r="200" cx="20000" cy="15000"/><text x="20300" y="15100">Егорьевск</text></g>
    <g class="town" bw:code="ru-mo-shatura-g"><circle r="200" cx="23000" cy="13000"/><text x="23300" y="13100">Шатура</text></g>
    <g class="town" bw:code="ru-mo-roshal-g"><circle r="200" cx="22500" cy="12000"/><text x="22800" y="12100">Рошаль</text></g>
    <g class="town" bw:code="ru-mo-orehovo-zuevo-g"><circle r="200" cx="19000" cy="10400"/><text x="19300" y="10500">Орехово-Зуево</text></g>
    <g class="town" bw:code="ru-mo-likino-dulevo-gor-okrug"><circle r="200" cx="18900" cy="11000"/><text x="19200" y="11100">Ликино-Дулёво</text></g>
    <g class="town" bw:code="ru-mo-noginsk-g"><circle r="200" cx="16000" cy="10000"/><text x="16300" y="10100">Ногинск</text></g>
    <g class="town" bw:code="ru-mo-schelkovo-g"><circle r="200" cx="14700" cy="9000"/><text x="15000" y="9100">Щелково</text></g>
    <g class="town" bw:code="ru-mo-pushkino-g"><circle r="200" cx="13300" cy="7600"/><text x="13600" y="7700">Пушкино</text></g>
    <g class="town" bw:code="ru-mo-serebryanyie-prudyi-pos"><circle r="200" cx="17500" cy="22700"/><text x="17800" y="22800">Серебряные Пруды</text></g>
    <g class="town" bw:code="ru-mo-domodedovo-g" transform="translate(13500,14300)"><circle r="200"/><text x="300" y="100">Домодедово</text></g>
    <g class="town" bw:code="ru-mo-podolsk-g" transform="translate(12000,13800)"><circle r="200"/><text x="300" y="100">Подольск</text></g>
    <g class="town" bw:code="ru-mo-pavlovskiy-posad-g" transform="translate(17700,10000)"><circle r="200"/><text x="300" y="100">Павловский Посад</text></g>
    <g class="town" bw:code="ru-mo-myitischi-g" transform="translate(12600,9300)"><circle r="200"/><text x="0" y="450" text-anchor="middle">Мытищи</text></g>
    <g class="town" bw:code="ru-mo-lyubertsyi-g" transform="translate(13700,11550)"><circle r="200"/><text text-anchor="end" x="-300" y="100" text-anchor="middle">Люберцы</text></g>

    <g class="town small" bw:code="ru-mo-kurovskoe-g"><circle r="130" cx="18800" cy="11600"/><text x="19000" y="11700">Куровское</text></g>
    <g class="town small" bw:code="ru-mo-zvenigorod-g"><circle r="130" cx="9000" cy="10700"/><text x="9200" y="10800">Звенигород</text></g>
    <g class="town small" bw:code="ru-mo-kubinka-g"><circle r="130" cx="7500" cy="12400"/><text x="7700" y="12500">Кубинка</text></g>
    <g class="town small" bw:code="ru-mo-golitsyino-g"><circle r="130" cx="8000" cy="11700"/><text x="8200" y="11800">Голицыно</text></g>
    <g class="town small" bw:code="ru-mo-krasnoznamensk-g"><circle r="130" cx="9500" cy="12000"/><text x="9700" y="12100">Краснознаменск</text></g>
    <g class="town small" bw:code="ru-mo-aprelevka-g"><circle r="130" cx="9700" cy="12400"/><text x="9900" y="12500">Апрелевка</text></g>
    <g class="town small" bw:code="ru-mo-vyisokovsk-g"><circle r="130" cx="6000" cy="6300"/><text x="6200" y="6400">Высоковск</text></g>
    <g class="town small" bw:code="ru-mo-dedovsk-g"><circle r="130" cx="9400" cy="9500"/><text x="9600" y="9600">Дедовск</text></g>
    <g class="town small" bw:code="ru-mo-nahabino-pgt"><circle r="130" cx="10300" cy="9800"/><text x="10500" y="9900">Нахабино</text></g>
    <g class="town small" bw:code="ru-mo-dolgoprudnyiy-gor-okrug"><circle r="130" cx="11800" cy="8900"/><text x="12000" y="9000">Долгопрудный</text></g>
    <g class="town small" bw:code="ru-mo-lobnya-gor-okrug"><circle r="130" cx="11700" cy="8500"/><text x="11900" y="8600">Лобня</text></g>
    <g class="town small" bw:code="ru-mo-yahroma-g"><circle r="130" cx="11000" cy="5700"/><text x="11200" y="5800">Яхрома</text></g>
    <g class="town small" bw:code="ru-mo-dubna-g"><circle r="130" cx="10000" cy="1800"/><text x="10200" y="1900">Дубна</text></g>
    <g class="town small" bw:code="ru-mo-krasnozavodsk-g"><circle r="130" cx="15000" cy="4500"/><text x="15200" y="4600">Краснозаводск</text></g>
    <g class="town small" bw:code="ru-mo-fryazino-g"><circle r="130" cx="15000" cy="8500"/><text x="15200" y="8600">Фрязино</text></g>
    <g class="town small" bw:code="ru-mo-reutov-g"><circle r="130" cx="13500" cy="10400"/><text x="13700" y="10500">Реутов</text></g>
    <g class="town small" bw:code="ru-mo-balashiha-mkr-jeleznodorojnyiy"><circle r="130" cx="13900" cy="10700"/><text x="14100" y="10800">Железнодорожный</text></g>
    <g class="town small" bw:code="ru-mo-elektrougli-g"><circle r="130" cx="15600" cy="11000"/><text x="15800" y="11100">Электроугли</text></g>
    <g class="town small" bw:code="ru-mo-dzerjinskiy-gor-okrug" transform="translate(13400,11820)"><circle r="130"/><text text-anchor="end" x="-200" y="65">Дзержинский</text></g>
    <g class="town small" bw:code="ru-mo-lyitkarino-gor-okrug" transform="translate(13800,12100)"><circle r="130"/><text text-anchor="end" x="-200" y="65">Лыткарино</text></g>
    <g class="town small" bw:code="ru-mo-malahovka-pos"><circle r="130" cx="14300" cy="11500"/><text x="14550" y="11500">Малаховка</text></g>
    <g class="town small" bw:code="ru-mo-jukovskiy-gor-okrug"><circle r="130" cx="14800" cy="12600"/><text x="15000" y="12700">Жуковский</text></g>
    <g class="town small" bw:code="ru-mo-bronnitsyi-gor-okrug"><circle r="130" cx="15200" cy="13500"/><text x="15400" y="13600">Бронницы</text></g>
    <g class="town small" bw:code="ru-mo-hotkovo-g" transform="translate(14400,6000)"><circle r="130"/><text x="200" y="85">Хотьково</text></g>
    <g class="town small" bw:code="ru-mo-puschino-g" transform="translate(10800,17850)"><circle r="130"/><text x="200" y="85">Пущино</text></g>
  </svg>`
                    }
                })
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mo.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_scheme_selector = {
            prop: {
                '#height': () => 30,
                items: () => ({
                    metro: {
                        icon: 'assets/icons-8-marker.png',
                        caption: 'Метро',
                    },
                    railway: {
                        icon: 'assets/icons-8-marker.png',
                        caption: 'Ж/Д',
                    },
                    msk: {
                        icon: 'assets/icons-8-marker.png',
                        caption: 'Районы',
                    },
                    mo: {
                        icon: 'assets/icons-8-marker.png',
                        caption: 'Подмосковье',
                    },
                    map: {
                        icon: 'assets/icons-8-marker.png',
                        caption: 'Карта',
                    },
                }),
                icon_width: () => 12,
                icon_height: () => 18,
                icon_margin_right: () => 8,
                item_space: () => 20,
                fontSize: () => 14,
                item_ids: $$.$me_atom2_prop_keys(['.items']),
                item: $$.$me_atom2_prop({ keys: ['.item_ids'], masters: ['.items'] }, ({ key: [id], masters: [items] }) => items[id]),
                item_width: $$.$me_atom2_prop({
                    keys: ['.item_ids'],
                    masters: $$.$me_atom2_prop_masters([], ({ key: [id] }) => [`@tab[${id}].#width`]),
                }, $$.$me_atom2_prop_compute_fn_sum(), ({ key: [id], val }) => console.log(id, val)),
                item_left: $$.$me_atom2_prop({
                    keys: ['.item_ids'],
                    masters: $$.$me_atom2_prop_masters(['.item_ids'], ({ key: [id], masters: [item_ids] }) => {
                        const idx = item_ids.indexOf(id);
                        if (!idx)
                            return [];
                        id = item_ids[idx - 1];
                        return [`.item_left[${id}]`, `.item_width[${id}]`, '.item_space'];
                    }),
                }, $$.$me_atom2_prop_compute_fn_sum()),
            },
            elem: {
                separator: $$.$me_atom2_prop({ keys: ['.item_ids'], masters: ['.item_ids'] }, ({ key: [id], masters: [item_ids] }) => !item_ids.indexOf(id) ? null : {
                    prop: {
                        colorText: () => '#9699a1',
                        '#height': () => null,
                        '#width': () => null,
                        '#alignVer': () => $$.$me_align.center,
                        '#ofsHor': $$.$me_atom2_prop([`<.item_left[${id}]`, '<.item_space'], ({ masters: [left, space] }) => left - (Math.round(space / 2)) - 2),
                        fontSize: $$.$me_atom2_prop([`<.fontSize`], ({ masters: [size] }) => size + 2),
                    },
                    dom: {
                        innerText: () => '/',
                    },
                }),
                tab: $$.$me_atom2_prop({ keys: ['.item_ids'] }, ({ key: [id] }) => ({
                    dispatch(dispatch_name, dispatch_arg) {
                        if (dispatch_name == 'close_scheme') {
                            console.log('eeeeeeeeee');
                            $$.a('.isShown', false);
                            return true;
                        }
                    },
                    prop: {
                        id: () => id,
                        isShown: () => false,
                        '#ofsHor': `<.item_left[${id}]`,
                        '#height': '<.#height',
                        '#width': $$.$me_atom2_prop(['@icon.#width', '@text.#width', '<.icon_margin_right'], $$.$me_atom2_prop_compute_fn_sum()),
                        '#cursor': () => 'pointer',
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                    },
                    elem: {
                        icon: () => ({
                            node: 'img',
                            prop: {
                                '#width': '<<.icon_width',
                                '#height': '<<.icon_height',
                                '#ofsHor': () => 0,
                                '#alignVer': () => $$.$me_align.center,
                            },
                            attr: {
                                src: $$.$me_atom2_prop(['<<.items'], ({ masters: [items] }) => items[id].icon),
                            },
                            style: {
                                filter: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '' : 'brightness(0%) invert(100%) sepia(89%) saturate(0%) hue-rotate(253deg) brightness(112%) contrast(100%)'),
                            },
                        }),
                        text: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#alignVer': () => $$.$me_align.center,
                                '#alignHor': () => $$.$me_align.right,
                                fontSize: '<<.fontSize',
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop(['<<.items'], ({ masters: [items] }) => $$.$me_option_caption_text(id, items)),
                            },
                            style: {
                                whiteSpace: () => 'nowrap',
                                color: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#0070a4' : 'white'),
                            }
                        }),
                        scheme: $$.$me_atom2_prop(['.isShown', '.id'], ({ masters: [isShown, id] }) => (!isShown) ? null : {
                            base: $$.$nl_scheme_mo,
                            prop: {
                                isShown: $$.$me_atom2_prop_bind('<.isShown'),
                            },
                        }),
                    },
                    event: {
                        clickOrTap: () => {
                            console.log('clicked on ', $$.a('.id'));
                            $$.a.update('.isShown', val => !val);
                            return true;
                        },
                    },
                })),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//selector.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_plus = {
            base: $$.$me_stylesheet,
            prop: {
                size: $$.$me_atom2_prop_abstract(),
                thick: $$.$me_atom2_prop_abstract(),
                color: $$.$me_atom2_prop_abstract(),
                opacity: () => 1,
                opacityHover: () => 1,
                '#width': '.size',
                '#height': '.size',
                styleSheetName: () => 'plus',
                styleSheetCommon: $$.$me_atom2_prop(['.styleSheetName'], ({ masters: [className] }) => `
        .${className}:before {
          transform: rotate(0deg);
        }
        .${className}:after {
          transform: rotate(90deg);
        }
      `),
                styleSheet: $$.$me_atom2_prop(['.className', '.size', '.thick', '.color', '.opacity', '.opacityHover'], ({ masters: [className, size, thick, color, opacity, opacityHover], atom }) => `
        .${className} {
          opacity: ${opacity};
        }
        .${className}:hover {
          opacity: ${opacityHover};
        }
        .${className}:before, .${className}:after {
          position: absolute;
          left: ${(size - thick) / 2}px;
          content: ' ';
          height: ${size}px;
          width: ${thick}px;
          background-color: ${color};
        }
      `),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//plus.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_search_panel_param_options = {
            ОтСтанции: {
                '': { caption: 'не важно' },
                '2п': { caption: 'до 2 мин пешком' },
                '5п': { caption: 'до 5 мин пешком' },
                '7п': { caption: 'до 7 мин пешком' },
                '10п': { caption: 'до 10 мин пешком' },
                '12п': { caption: 'до 12 мин пешком' },
                '15п': { caption: 'до 15 мин пешком' },
                '5т': { caption: 'до 5 мин транспортом' },
            },
            rmqt: {
                'free': { caption: 'Св.планировка' },
                'studio': { caption: 'Студия' },
                'rmqt1': { caption: '1-комн.' },
                'rmqt2': { caption: '2-комн.' },
                'rmqt3': { caption: '3-комн.' },
                'rmqt4': { caption: '4-комн.' },
                'rmqt5': { caption: '5-комн.' },
                'rmqt6': { caption: '6+ комн.' },
            },
            remont: {
                'требуется капитальный ремонт': {},
                'без отделки': {},
                'требуется ремонт': {},
                'среднее состояние': {},
                'хорошее состояние': {},
                'отличное состояние': {},
                'евроремонт': {},
                'дизайнерский ремонт': {},
                'первичная отделка': {},
            },
            lavatory: {
                '0': { caption: 'может быть совмещенным' },
                '1': { caption: 'только раздельный' },
                '2': { caption: 'не менее 2-х' },
                '3': { caption: 'не менее 3-х' },
                '4': { caption: 'не менее 4-х' },
            },
            balcony: {
                '0': { caption: 'можно без балкона' },
                '1': { caption: 'нужен балкон' },
                '2': { caption: 'нужна лоджия' },
                '3': { caption: 'не менее 2-х балконов/лоджий' },
                '4': { caption: 'не менее 3-х балконов/лоджий' },
                '5': { caption: 'не менее 4-х балконов/лоджий' },
            },
            КлассЖилья: {
                'эконом': {},
                'комфорт': {},
                'бизнес': {},
                'элитный': {},
            },
            ТипДома: {
                'панельный': {},
                'блочный': {},
                'монолитный': {},
                'монолитно-кирпичный': {},
                'кирпичный': {},
                'деревянный': {},
                'шлакоблоки/шлакобетон': {},
                'железобетон': {},
                'сталинский': {},
            },
            СерияДома: {
                '02/98-НМ': {},
                '1385 АР-3': {},
                '1605/12': {},
                '1605/9': {},
                '1605/Б': {},
                '17/2004-АС': {},
                '1МГ-600': {},
                '1МГ-601': {},
                '2-71/358': {},
                '2548-01-АР': {},
                '2548-02-АР': {},
                '32/2005-АС': {},
                '349/01': {},
                '355/24': {},
                '7040-01': {},
                'I-303': {},
                'I-335': {},
                'I-447': {},
                'I-510': {},
                'I-511': {},
                'I-513': {},
                'I-515': {},
                'I605-АМ': {},
                'II-04': {},
                'II-05': {},
                'II-08': {},
                'II-18': {},
                'II-18-01-МН': {},
                'II-18-31/12': {},
                'II-29': {},
                'II-32': {},
                'II-49': {},
                'II-57': {},
                'II-68-02': {},
                'II-68-03': {},
                'II-89-01-МН': {},
                'III/17': {},
                'VI-23': {},
                'VII-51': {},
                'VII-58': {},
                'А-41K': {},
                'башня Вулыха': {},
                'Бекерон': {},
                'БОД-1': {},
                'В-2000': {},
                'В-2002': {},
                'В-2005': {},
                'ГМС-1': {},
                'ГМС-3': {},
                'И-1168 А3': {},
                'И-1168 А4': {},
                'И-1233': {},
                'И-1254': {},
                'И-1262А': {},
                'И-1429': {},
                'И-1430': {},
                'И-1459-132': {},
                'И-1491-17': {},
                'И-1501': {},
                'И-155': {},
                'И-155МК': {},
                'И-155Н': {},
                'И-1602': {},
                'И-1677': {},
                'И-1723': {},
                'И-1724': {},
                'И-1731': {},
                'И-1782/1': {},
                'И-1812/1': {},
                'И-1834': {},
                'И-1836': {},
                'И-1838': {},
                'И-1839': {},
                'И-1849': {},
                'И-1932': {},
                'И-208': {},
                'И-209А': {},
                'И-2342': {},
                'И-241': {},
                'И-491А': {},
                'И-515-5М': {},
                'И-515/9ш': {},
                'И-522': {},
                'И-522А': {},
                'И-679': {},
                'И-700': {},
                'И-700А': {},
                'И-760А': {},
                'И-79-99': {},
                'И-99-47/405': {},
                'И-99-47/406': {},
                'индивидуальный проект': {},
                'ИП-46С': {},
                'ИШ3/12': {},
                'К-7': {},
                'КМС-101': {},
                'Колос': {},
                'КОПЭ': {},
                'КОПЭ-М-ПАРУС': {},
                'КТЖС': {},
                'КТЖС-11/22': {},
                '1МГ-300': {},
                'МОНОЛИТ': {},
                'МЭС-84': {},
                'НП-46с': {},
                'П-06': {},
                'П-111': {},
                'П-111М': {},
                'П-111МО': {},
                'П-12-31/12': {},
                'II-14': {},
                'П-14/35': {},
                'П-18/22': {},
                'П-20': {},
                'П-21': {},
                'П-22': {},
                'П-23': {},
                'П-28': {},
                'П-29': {},
                'П-3': {},
                'П-3/16': {},
                'П-3/17': {},
                'П-3/22': {},
                'П-30': {},
                'П-31': {},
                'П-32': {},
                'П-321-60': {},
                'II-34': {},
                'II-35': {},
                'П-37': {},
                'II-38': {},
                'П-39': {},
                'П-3М': {},
                'П-4': {},
                'П-40': {},
                'П-41': {},
                'П-42': {},
                'П-43': {},
                'П-44': {},
                'П-44К': {},
                'П-44М': {},
                'П-44Т': {},
                'П-44ТМ': {},
                'П-45': {},
                'П-46': {},
                'П-46М': {},
                'П-47': {},
                'П-49 Д': {},
                'П-50': {},
                'П-53': {},
                'П-55': {},
                'П-55М': {},
                'II-29-41/37': {},
                'II-66': {},
                'II-67': {},
                'II-68': {},
                'ПД-4': {},
                'ПД-4/12': {},
                'Пд4-1/12Н1': {},
                'ПД4-1/8Н1': {},
                'ПЗМ-1/14': {},
                'ПЗМ-1/16': {},
                'ПЗМ-2/16': {},
                'ПЗМ-3/16': {},
                'ПП-70': {},
                'Призма': {},
                'РД-90': {},
                'С-111М': {},
                'С-220': {},
                'С-222': {},
                'ТИП-441': {},
                'ЦВП-4570-II-63': {},
                'Юбилейный': {},
                'II-02': {},
                'II-01': {},
                'II-18-01/08': {},
                'II-18-01/09': {},
                '1605-АМ/9': {},
                '1605-АМ/12': {},
                'II-49П': {},
                'II-49Д': {},
                'II-03': {},
                'II-18-01/12': {},
                'II-18-02/12': {},
                'II-18/12': {},
                'II-20': {},
                '1605-АМ/5': {},
                'И-III-3': {},
                'II-28': {},
                'II-68-02/16М': {},
                'КПД-4570': {},
                'II-68-01': {},
                '1-515/9': {},
                'К4/16': {},
                'И-155Б': {},
                '1-515/5': {},
                'II-18-01/12А': {},
                'СМ-1 ': {},
                'П-44ТМ/25': {},
                'И-701': {},
                'И-155-с': {},
                'Айсберг': {},
                'II-14/35': {},
                'И-99-47/407': {},
                'П-101': {},
                '1-300': {},
                'II-18-01/09К': {},
                'И-1900': {},
                'М-10': {},
                'МПСМ': {},
                'ИП-46М': {},
                'П-30М': {},
                'II-07': {},
                'ПБ-01': {},
                'И-1414': {},
                'И-2111': {},
                '1605-АМЛ/5': {},
                '1-447С-26': {},
                '1-447С-1': {},
                '1-447С-36': {},
                '1-447С-2': {},
                '1-447С-5': {},
                '1-446': {},
                'ПБ-02': {},
                'КПД-4572А': {},
                'II-68-04': {},
                '124-124-1': {},
                '1605-А': {},
                '1-439': {},
                'Мм1-3': {},
                'И-1168': {},
                'СМ-06': {},
                'СМ-03': {},
                '1-419': {},
                '1-203': {},
                'ЭС-24': {},
                '8966': {},
                '1-126': {},
                '1-225': {},
                '1-402': {},
                '16/2188': {},
                'Т-1': {},
                'Т-3': {},
                '1-233': {},
                '1-260': {},
                'К-8-49': {},
                '1-255': {},
                'КС-8-50': {},
                'Д-23': {},
                'Д-25Н1': {},
                'ПП-83': {},
                'К2/16': {},
                'К7/16': {},
                'К8/16': {},
                '1-464А': {},
                'КОПЭ-87': {},
                'П-121М': {},
                '121-041': {},
                '121-042': {},
                '121-043': {},
                'II-29-208': {},
                'II-29-3': {},
                'II-29-9': {},
                'II-29-160': {},
                'ПД-1': {},
                'И-02/98-НМ': {},
                '1-467': {},
                'ЭЖРЧС': {},
                'П-3МК': {},
                'II-18-02/09': {},
                'ПД-3': {},
                'И-580': {},
                'II-18-03/12': {},
                'К-14': {},
                'И-700Н': {},
                'Юникон': {},
                '111-121': {},
                '1-211': {},
                'II-68-01/22': {},
                'Лебедь': {},
                'И-99-47': {},
            },
            Источник: {
                winner: {
                    caption: 'WinNER',
                },
                winnerPro: {
                    caption: 'WinNER PRO',
                },
                sob: {
                    caption: 'Sob.ru',
                },
                avito: {
                    caption: 'Avito.ru',
                },
                cian: {
                    caption: 'Cian.ru',
                },
                irr: {
                    caption: 'Irr.ru',
                },
                other: {
                    caption: 'Прочие',
                },
                yandex: {
                    caption: 'Яндекс',
                },
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//options.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const row_height = 30;
        const row_space = 20;
        const prop_common = (def, p) => ({
            '#hidden': def.hidden,
            row: def.row,
            '#ofsVer': $$.$me_atom2_prop(['.row', '<.row_height', '<.row_space'], ({ masters: [row, row_height, row_space] }) => 8 + row * (row_height + row_space) + (p && p.ofsVer || 0)),
            '#height': '<.row_height',
            col_space: def.col_space || (() => 16),
            col_count: def.col_count || (() => 1),
            col_span: def.col_span || (() => 1),
            col: def.col,
            '#width': !def.col_count ? '<.row_width' : $$.$me_atom2_prop(['<.row_width', '.col_space', '.col_count', '.col_span'], ({ masters: [width, col_space, col_count, col_span] }) => Math.round((width - col_space * (col_count - 1)) / col_count) * col_span + col_space * (col_span - 1)),
            '#ofsHor': !def.col_count || !def.col ? '<.row_left' : $$.$me_atom2_prop(['<.row_left', '<.row_width', '.col_space', '.col_count', '.col'], ({ masters: [left, width, col_space, col_count, col] }) => left + col * (Math.round((width - col_space * (col_count - 1)) / col_count) + col_space)),
        });
        function crumb_pickermulti(result, params, fld_name, fld_caption = '') {
            let size;
            if (params[fld_name] && (size = params[fld_name].size)) {
                const id = [...params[fld_name]].map(([value]) => value)[0];
                const caption = (!fld_caption ? '' : fld_caption + ': ') +
                    $$.$me_option_caption_text(id, $$.$nl_search_panel_param_options[fld_name]) +
                    (size == 1 ? '' : ' и ещё ' + (size - 1));
                result[fld_name] = { caption };
            }
        }
        function crumb_picker(result, params, fld_name, fld_caption = '') {
            let size;
            if (params[fld_name] && Object.keys($$.$nl_search_panel_param_options[fld_name]).indexOf(params[fld_name])) {
                const caption = (!fld_caption ? '' : fld_caption + ': ') +
                    $$.$nl_search_panel_param_options[fld_name][params[fld_name]].caption;
                result[fld_name] = { caption };
            }
        }
        function crumb_select(result, params, fld_name, values, captions) {
            if (values.length < 2)
                $$.$me_throw('values.length < 2', values);
            if (values.length != captions.length)
                $$.$me_throw('values.length != captions.length', values, captions);
            if (params[fld_name] && params[fld_name] != values[0]) {
                let caption = captions[captions.length - 1];
                for (let i = 1; i < values.length; i++)
                    if (params[fld_name] == values[i]) {
                        caption = captions[i - 1];
                        break;
                    }
                result[fld_name] = { caption };
            }
        }
        function crumb_diap(result, params, fld_name, suffix, fld_caption = '') {
            if (params[fld_name] && (params[fld_name].min || params[fld_name].max)) {
                if (suffix)
                    suffix = ' ' + suffix;
                const caption = (!fld_caption ? '' : fld_caption + ': ') +
                    (params[fld_name].min && params[fld_name].max ? (params[fld_name].min == params[fld_name].max ?
                        params[fld_name].min + suffix :
                        params[fld_name].min + '-' + params[fld_name].max + suffix) :
                        params[fld_name].min ?
                            'от ' + params[fld_name].min + suffix :
                            'до ' + params[fld_name].min + suffix);
                result[fld_name] = { caption };
            }
        }
        let scheme_metro;
        $$.$nl_search_panel_param = {
            base: $$.$nl_search_panel,
            prop: {
                ofsHor: () => 0,
                header_height: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.crumb_ids'], ({ masters: [crumb_ids] }) => {
                    const result = ['@mode_switcher.#height', '.crumb_ofsVer'];
                    if (crumb_ids.length)
                        result.push(`.crumb_pos[${crumb_ids[crumb_ids.length - 1]}]`, '.crumb_height');
                    return result;
                }), ({ len, masters: [mode_switcher_height, crumb_ofsVer, crumb_pos, crumb_height] }) => {
                    const result = Math.max(mode_switcher_height + crumb_ofsVer, len == 2 ? 0 : crumb_pos.top + crumb_height + crumb_ofsVer);
                    return result;
                }),
                footer_height: '@found.#height',
                crumb_height: () => 24,
                crumb_ofsHor: () => 16,
                crumb_ofsVer: () => 16,
                crumb_spaceHor: () => 8,
                crumb_spaceVer: () => 8,
                crumb_paddingHor: () => 8,
                crumbs: $$.$me_atom2_prop(['.order'], ({ masters: [order] }) => {
                    const params = order.params;
                    const result = {
                        'раздел': { caption: 'Купить квартиру' },
                    };
                    {
                        let caption;
                        if (params['Область'] && params['Область'] == 'only') {
                            caption = 'в Моск.области';
                        }
                        else {
                            caption =
                                params['НоваяМосква'] && params['НоваяМосква'] == 'only' ? 'в Новой Москве' :
                                    params['НоваяМосква'] && params['НоваяМосква'] == 'exclude' ? 'в Москве (кроме Новой)' :
                                        'в Москве';
                            if (!params['Область'] || params['Область'] != 'exclude')
                                caption += ' и области';
                        }
                        result['Область'] = { caption };
                    }
                    crumb_picker(result, params, 'ОтСтанции');
                    crumb_select(result, params, 'apart', ['no_matter', 'only'], ['только апартаменты', 'кроме апартаментов']);
                    crumb_pickermulti(result, params, 'rmqt');
                    crumb_select(result, params, 'plan', ['no_matter', 'only'], ['изолированные комнаты', 'только смежные комнаты']);
                    crumb_diap(result, params, 'total_sq', 'м²', 'общая');
                    crumb_diap(result, params, 'life_sq', 'м²', 'жилая');
                    crumb_diap(result, params, 'kitchen_sq', 'м²', 'кухня');
                    crumb_pickermulti(result, params, 'remont', 'ремонт');
                    crumb_picker(result, params, 'lavatory', 'санузел');
                    crumb_picker(result, params, 'balcony');
                    crumb_select(result, params, 'okna', ['0', '1'], ['окна только во двор', 'окна только на улицу']);
                    crumb_select(result, params, 'Ипотека', ['include', 'only'], ['по ипотеке', 'продажа по ипотеке невозможна']);
                    crumb_select(result, params, 'ТипСделки', ['0', '1'], ['прямая продажа', 'только с альтернативой']);
                    crumb_diap(result, params, 'price', '₽', 'цена');
                    crumb_diap(result, params, 'price_per_sq', '₽', 'за м²');
                    crumb_select(result, params, 'ДинамикаЦены', ['0', '1'], ['понижение цены', 'повышение цены']);
                    crumb_select(result, params, 'БонусАгенту', ['0', '1'], ['с бонусом агенту', 'без бонуса агенту']);
                    crumb_diap(result, params, 'Этаж', '', 'этаж');
                    crumb_select(result, params, 'ПервыйЭтаж', ['include', 'exclude'], ['кроме первого этажа', 'только первый этаж']);
                    crumb_select(result, params, 'ПоследнийЭтаж', ['include', 'exclude'], ['кроме последнего этажа', 'только последний этаж']);
                    crumb_diap(result, params, 'Этажность', '', 'этажность');
                    crumb_select(result, params, 'Лифт', ['no_matter', 'exists'], ['с лифтом', 'лифт: пасс. + груз.']);
                    crumb_pickermulti(result, params, 'КлассЖилья', 'класс жилья');
                    crumb_pickermulti(result, params, 'ТипДома', 'тип дома');
                    crumb_pickermulti(result, params, 'СерияДома', 'серия дома');
                    crumb_diap(result, params, 'ГодПостройки', '', 'год постройки');
                    crumb_select(result, params, 'ПодСнос', ['include', 'exclude'], ['кроме домов под снос', 'только в доме под снос']);
                    crumb_select(result, params, 'Новостройки', ['include', 'exclude'], ['кроме новостроек', 'только в новостройке']);
                    crumb_select(result, params, 'Территория', ['no_matter', 'fenced'], ['огороженная территория', 'охраняемая территория']);
                    crumb_select(result, params, 'Парковка', ['no_matter', 'exists', 'guarded'], ['с парковкой', 'охраняемая парковка', 'подземная парковка']);
                    {
                        const deep = params['deep'] == null ? 7 : params['deep'];
                        const caption = 'глубина поиска: ' + (!deep ? 'сегодня' :
                            deep == Infinity ? 'за все время' :
                                deep + ' ' + $$.$me_word_plural(deep, 'день', 'дня', 'дней'));
                        result['deep'] = { caption };
                    }
                    crumb_select(result, params, 'ТолькоНовые', ['include', 'only'], ['только новые (впервые опубликованные)', 'кроме новых (впервые опубликованных)']);
                    crumb_pickermulti(result, params, 'Источник', 'источники');
                    crumb_select(result, params, 'sold', ['include', 'except'], ['кроме снятых с продажи', 'только снятые с продажи']);
                    crumb_select(result, params, 'photo', ['include', 'except'], ['с фото', 'без фото']);
                    crumb_select(result, params, 'video', ['include', 'except'], ['с видео', 'без видео']);
                    return result;
                }),
                crumb_ids: $$.$me_atom2_prop_keys(['.crumbs']),
                crumb_fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                crumb_fontFamily: '.fontFamily',
                crumb_fontWeight: () => 400,
                ctx: () => document.createElement('CANVAS').getContext('2d'),
                ctx_prepared: $$.$me_atom2_prop(['.ctx', '.crumb_fontFamily', '.crumb_fontSize', '.crumb_fontWeight', '/.#pixelRatio'], ({ masters: [ctx, fontFamily, fontSize, fontWeight, pixelRatio] }) => {
                    const ctxFontSize = pixelRatio * fontSize;
                    ctx.font = fontWeight + ' ' + ctxFontSize + 'px ' + fontFamily;
                    return ctx;
                }),
                crumb_pos: $$.$me_atom2_prop({
                    keys: ['.crumb_ids'],
                    masters: $$.$me_atom2_prop_masters(['.crumb_ids'], ({ key: [id], masters: [ids] }) => {
                        const idx = ids.indexOf(id);
                        const result = ['.ctx_prepared', '/.#pixelRatio', '.crumbs', '.crumb_ids', '.crumb_ofsHor', '.crumb_ofsVer', '.crumb_paddingHor'];
                        if (idx) {
                            result.push('.#width', '@mode_switcher.#width', '@mode_switcher.#height', '.crumb_spaceHor', '.crumb_spaceVer', `.crumb_pos[${ids[idx - 1]}]`, `.crumb_width[${ids[idx - 1]}]`, '.crumb_height');
                        }
                        return result;
                    }),
                }, ({ key: [id], masters: [ctx, pixelRatio, crumbs, crumb_ids, crumb_ofsHor, crumb_ofsVer, crumb_paddingHor, width, mode_switcher_width, mode_switcher_height, crumb_spaceHor, crumb_spaceVer, crumb_pos_prev, crumb_width_prev, crumb_height] }) => {
                    let result;
                    const idx = crumb_ids.indexOf(id);
                    let crumb_width = Math.ceil(ctx.measureText(crumbs[id].caption).width / pixelRatio) + 2 * crumb_paddingHor;
                    if (!idx) {
                        result = {
                            left: crumb_ofsHor,
                            top: crumb_ofsVer,
                            width: crumb_width,
                        };
                    }
                    else {
                        const limitHor = crumb_pos_prev.top >= mode_switcher_height + crumb_spaceVer / 2 ?
                            width - crumb_spaceHor :
                            width - mode_switcher_width - crumb_spaceHor;
                        if (crumb_pos_prev.left + crumb_width_prev + crumb_spaceHor + crumb_width + crumb_spaceHor > limitHor) {
                            result = {
                                left: crumb_ofsHor,
                                top: crumb_pos_prev.top + crumb_height + crumb_spaceVer,
                                width: crumb_width,
                            };
                        }
                        else {
                            result = {
                                left: crumb_pos_prev.left + crumb_width_prev + crumb_spaceHor,
                                top: crumb_pos_prev.top,
                                width: crumb_width,
                            };
                        }
                    }
                    return result;
                }),
                crumb_left: $$.$me_atom2_prop({
                    keys: ['.crumb_ids'],
                    masters: ['.crumb_pos[]'],
                }, ({ key: [id], masters: [crumb_pos] }) => crumb_pos.left),
                crumb_top: $$.$me_atom2_prop({
                    keys: ['.crumb_ids'],
                    masters: ['.crumb_pos[]'],
                }, ({ masters: [crumb_pos] }) => crumb_pos.top),
                crumb_width: $$.$me_atom2_prop({
                    keys: ['.crumb_ids'],
                    masters: ['.crumb_pos[]'],
                }, ({ masters: [crumb_pos] }) => crumb_pos.width),
                tab_selected: $$.$me_atom2_prop_store({
                    default: () => $$.a('.tab_ids')[0],
                    valid: (val) => typeof val == 'string' && ~$$.a('.tab_ids').indexOf(val) ? val : null,
                }),
                tab_ids: $$.$me_atom2_prop_keys(['.tabs'], true),
                tabs: () => ({
                    Местоположение: {
                        icon: 'icons-8-place-marker',
                        params: {
                            Область: {
                                row: () => 0,
                                type: 'select',
                                options: () => ({
                                    include: { caption: ({ isSelected }) => isSelected ? 'Включая Московскую область' : {
                                            text: 'Включая',
                                            width: 90,
                                        } },
                                    only: { caption: ({ isSelected }) => isSelected ? 'Только Московская область' : {
                                            text: 'Только',
                                            width: 90,
                                        } },
                                    exclude: { caption: ({ isSelected }) => isSelected ? 'Кроме Московской области' : {
                                            text: 'Кроме',
                                            width: 90,
                                        } },
                                })
                            },
                            НоваяМосква: {
                                hidden: $$.$me_atom2_prop(['<<.order'], ({ masters: [order] }) => order.params['Область'] == 'only'),
                                row: () => 1,
                                type: 'select',
                                options: () => ({
                                    include: { caption: ({ isSelected }) => isSelected ? 'Включая Новую Москву' : {
                                            text: 'Включая',
                                            width: 90,
                                        } },
                                    only: { caption: ({ isSelected }) => isSelected ? 'Только Новая Москва' : {
                                            text: 'Только',
                                            width: 90,
                                        } },
                                    exclude: { caption: ({ isSelected }) => isSelected ? 'Кроме Новой Москвы' : {
                                            text: 'Кроме',
                                            width: 90,
                                        } },
                                }),
                            },
                            Адрес: {
                                type: 'address',
                                row: () => 2,
                            },
                            ОтСтанции: {
                                row: () => 3,
                                label: $$.$me_atom2_prop(['<<<.order'], ({ masters: [order] }) => order.params['Область'] == 'only' ? 'От станции' : 'От метро'),
                                label_width: $$.$me_atom2_prop(['<<<.order'], ({ masters: [order] }) => order.params['Область'] == 'only' ? 90 : 70),
                                type: 'picker',
                                options: () => $$.$nl_search_panel_param_options['ОтСтанции'],
                                col_count: $$.$me_atom2_prop(['<<.order'], ({ masters: [order] }) => order.params['Область'] == 'only' ? 1 : 3),
                                col: $$.$me_atom2_prop(['<<.order'], ({ masters: [order] }) => order.params['Область'] == 'only' ? 0 : 1),
                                col_span: $$.$me_atom2_prop(['<<.order'], ({ masters: [order] }) => order.params['Область'] == 'only' ? 1 : 2),
                            },
                            СхемаМетро: {
                                hidden: $$.$me_atom2_prop(['<<.order'], ({ masters: [order] }) => order.params['Область'] == 'only'),
                                row: () => 3,
                                type: 'button',
                                caption: () => 'Схема метро',
                                target: () => '',
                                cmd: () => 'open',
                                dispatch: (dispatch_name, dispatch_arg) => {
                                    const id = 'СхемаМетро';
                                    if (dispatch_arg == 'open') {
                                        const atom_order = $$.a.get('<<.order');
                                        const order = atom_order.value();
                                        const value = order.params[id] || new Map();
                                        const zIndex = $$.a('.#zIndex') + 20;
                                        scheme_metro = new $$.$me_atom2_elem({
                                            tail: 'me_dropdown' + id,
                                            parent: $$.a.get('/@app'),
                                            cnf: {
                                                base: $$.$nl_scheme_metro,
                                                prop: {
                                                    scale: '.scale_initial',
                                                    ofsHor: '.ofsHor_initial',
                                                    ofsVer: '.ofsVer_initial',
                                                    selected: () => value,
                                                    src: () => '',
                                                    '#zIndex': () => zIndex,
                                                },
                                                dispatch: (dispatch_name, dispatch_arg) => {
                                                    if (dispatch_name == 'open') {
                                                        $$.a('.scale', $$.a('.scale_initial'));
                                                        $$.a('.ofsHor', $$.a('.ofsHor_initial'));
                                                        $$.a('.ofsVer', $$.a('.ofsVer_initial'));
                                                        $$.a('.src', dispatch_arg.src);
                                                        $$.a('.selected', dispatch_arg.val);
                                                        return true;
                                                    }
                                                    else if (dispatch_name == 'close') {
                                                        order.params[id] = $$.a('.selected');
                                                        atom_order.value(order);
                                                        scheme_metro.destroy();
                                                        return true;
                                                    }
                                                    return false;
                                                },
                                            },
                                        });
                                        return true;
                                    }
                                    else if (dispatch_name == 'close') {
                                        const order = $$.a('<<.order');
                                        if (!order.params)
                                            order.params = {};
                                        order.params[id] = dispatch_arg;
                                        return true;
                                    }
                                    return false;
                                },
                                col_count: () => 3,
                                col_span: () => 1,
                                col: () => 0,
                            },
                        },
                    },
                    'Квартира: основные': {
                        icon: 'icons-8-key',
                        params: {
                            apart: {
                                row: () => 0,
                                type: 'select',
                                options: () => ({
                                    no_matter: {
                                        caption: ({ isSelected }) => isSelected ? {
                                            width: 250,
                                            text: 'Можно апартаменты',
                                        } : {
                                            width: 90,
                                            text: 'Не важно',
                                        },
                                    },
                                    except: { caption: ({ isSelected }) => isSelected ? 'Кроме апартаментов' : 'Кроме' },
                                    only: { caption: ({ isSelected }) => isSelected ? {
                                            width: 210,
                                            text: 'Только апартаменты',
                                        } : {
                                            width: 60,
                                            text: '...',
                                        } }
                                }),
                            },
                            rmqt: {
                                row: () => 1,
                                type: 'pickermulti',
                                label: () => 'Квартира',
                                label_width: () => 90,
                                none: () => 'с любым количеством комнат',
                                options: () => $$.$nl_search_panel_param_options['rmqt'],
                            },
                            plan: {
                                row: () => 2,
                                type: 'select',
                                options: () => ({
                                    no_matter: {
                                        caption: ({ isSelected }) => isSelected ? {
                                            width: 250,
                                            text: 'Можно со смежными комнатами',
                                        } : {
                                            width: 90,
                                            text: 'Не важно',
                                        },
                                    },
                                    only: { caption: ({ isSelected }) => isSelected ? 'Только изолированные комнаты' : 'Изолированные' },
                                    except: { caption: ({ isSelected }) => isSelected ? {
                                            width: 210,
                                            text: 'Только смежные комнаты',
                                        } : {
                                            width: 60,
                                            text: '...',
                                        } }
                                }),
                            },
                            total_sq: {
                                row: () => 3,
                                type: 'diap',
                                label: () => 'Площадь',
                                label_width: () => 90,
                                diap_space: () => 16,
                            },
                            life_sq: {
                                row: () => 4,
                                type: 'diap',
                                label: () => 'Жилая',
                                label_width: () => 90,
                                diap_space: () => 16,
                            },
                            kitchen_sq: {
                                row: () => 5,
                                type: 'diap',
                                label: () => 'Кухня',
                                label_width: () => 90,
                                diap_space: () => 16,
                            },
                        },
                    },
                    'Квартира: ещё': {
                        icon: 'icons-8-key',
                        params: {
                            remont: {
                                row: () => 0,
                                type: 'pickermulti',
                                label: () => 'Ремонт',
                                label_width: () => 90,
                                none: () => 'не важен',
                                options: () => $$.$nl_search_panel_param_options['remont'],
                            },
                            lavatory: {
                                row: () => 1,
                                type: 'picker',
                                label: () => 'Санузел',
                                label_width: () => 90,
                                options: () => $$.$nl_search_panel_param_options['lavatory'],
                            },
                            balcony: {
                                row: () => 2,
                                type: 'picker',
                                label: () => 'Балкон',
                                label_width: () => 90,
                                options: () => $$.$nl_search_panel_param_options['balcony'],
                            },
                            okna: {
                                row: () => 3,
                                type: 'select',
                                options: () => ({
                                    '0': { caption: ({ isSelected }) => isSelected ? {
                                            width: 250,
                                            text: 'Не важно, куда выходят окна'
                                        } : {
                                            width: 90,
                                            text: 'Не важно',
                                        } },
                                    '1': { caption: ({ isSelected }) => isSelected ? 'Окна только во двор' : 'Во двор' },
                                    '2': { caption: ({ isSelected }) => isSelected ? {
                                            width: 210,
                                            text: 'Окна только на улицу',
                                        } : 'На улицу' },
                                }),
                            },
                        },
                    },
                    'Цена и условия': {
                        icon: 'icons-8-money',
                        params: {
                            'Ипотека': {
                                row: () => 0,
                                type: 'select',
                                options: () => ({
                                    include: { caption: {
                                            width: 85,
                                            text: 'Не важно'
                                        } },
                                    only: { caption: ({ val }) => val != 'except' ?
                                            'Возможна продажа по ипотеке' : {
                                            text: 'Возможна',
                                            width: 90,
                                        }
                                    },
                                    except: { caption: ({ isSelected }) => isSelected ? 'Продажа по ипотеке невозможна' : {
                                            text: '...',
                                            width: 60,
                                        }
                                    },
                                }),
                            },
                            'ТипСделки': {
                                row: () => 1,
                                type: 'select',
                                options: () => ({
                                    '0': { caption: ({ isSelected }) => isSelected ? {
                                            width: 250,
                                            text: 'Можно с альтернативой',
                                        } : {
                                            text: 'Не важно',
                                            width: 85,
                                        } },
                                    '1': { caption: ({ isSelected, val }) => isSelected ? 'Только прямая продажа' : {
                                            text: 'Кроме',
                                            width: val == '0' ? null : 90,
                                        } },
                                    '2': { caption: ({ isSelected }) => isSelected ? 'Только с альтернативой' : {
                                            text: '...',
                                            width: 60,
                                        } },
                                }),
                            },
                            price: {
                                row: () => 2,
                                type: 'diap',
                                label: () => 'Цена',
                                label_width: () => 85,
                                diap_space: () => 16,
                            },
                            price_per_sq: {
                                row: () => 3,
                                type: 'diap',
                                label: () => 'Цена за м²',
                                label_width: () => 85,
                                diap_space: () => 16,
                            },
                            'ДинамикаЦены': {
                                row: () => 4,
                                type: 'select',
                                options: () => ({
                                    '0': { caption: ({ isSelected }) => ({ text: 'Все', width: 85 }) },
                                    '1': { caption: ({ isSelected, val }) => val != '2' ? 'Понижение цены' : 'Понижение' },
                                    '2': { caption: ({ isSelected }) => isSelected ? {
                                            width: 176,
                                            text: 'Повышение цены',
                                        } : {
                                            width: 162,
                                            text: 'Повышение'
                                        } },
                                }),
                            },
                            'БонусАгенту': {
                                row: () => 5,
                                type: 'select',
                                options: () => ({
                                    '0': { caption: ({ isSelected }) => ({ text: 'Все', width: 85 }) },
                                    '1': { caption: ({ isSelected, val }) => val != '2' ? 'Только с бонусом агенту' : 'С бонусом' },
                                    '2': { caption: ({ isSelected }) => isSelected ? {
                                            width: 176,
                                            text: 'Без бонуса агенту',
                                        } : {
                                            width: 162,
                                            text: 'Без бонуса',
                                        } },
                                }),
                            },
                        },
                    },
                    'Этаж/Этажность': {
                        icon: 'level',
                        params: {
                            Этаж: {
                                row: () => 0,
                                type: 'diap',
                                label: () => 'Этаж',
                                label_width: () => 85,
                                diap_space: () => 16,
                            },
                            ПервыйЭтаж: {
                                row: () => 1,
                                type: 'select',
                                options: () => ({
                                    include: { caption: ({ isSelected }) => isSelected ? {
                                            width: 210,
                                            text: 'Можно первый этаж',
                                        } : {
                                            text: 'Можно',
                                            width: 85,
                                        } },
                                    exclude: { caption: ({ isSelected, val }) => isSelected ? 'Кроме первого этажа' : 'Кроме' },
                                    only: { caption: ({ isSelected }) => isSelected ? {
                                            width: 181,
                                            text: 'Только первый этаж',
                                        } : {
                                            text: 'Только',
                                            width: 110,
                                        } },
                                }),
                            },
                            ПоследнийЭтаж: {
                                row: () => 2,
                                type: 'select',
                                options: () => ({
                                    include: { caption: ({ isSelected }) => isSelected ? {
                                            text: 'Можно последний этаж',
                                            width: 210,
                                        } : {
                                            text: 'Можно',
                                            width: 85,
                                        } },
                                    exclude: { caption: ({ isSelected, val }) => isSelected ? 'Кроме последнего этажа' : 'Кроме' },
                                    only: { caption: ({ isSelected }) => isSelected ? {
                                            width: 181,
                                            text: 'Только последний этаж',
                                        } : {
                                            text: 'Только',
                                            width: 110,
                                        } },
                                }),
                            },
                            Этажность: {
                                row: () => 3,
                                type: 'diap',
                                label: () => 'Этажность',
                                label_width: () => 85,
                                diap_space: () => 16,
                            },
                            Лифт: {
                                row: () => 4,
                                type: 'select',
                                options: () => ({
                                    no_matter: { caption: ({ isSelected }) => isSelected ? {
                                            width: 210,
                                            text: 'Можно без лифта'
                                        } : {
                                            text: 'Не важно',
                                            width: 85,
                                        } },
                                    exists: { caption: ({ isSelected, val }) => val != 'only' ? {
                                            text: 'С лифтом',
                                        } : {
                                            text: 'Есть',
                                            width: 85,
                                        }
                                    },
                                    only: { caption: ({ isSelected }) => isSelected ? 'С пассажирским и грузовым лифтом' : {
                                            text: 'Пасс. + груз.',
                                            width: 110,
                                        } },
                                }),
                            },
                        },
                    },
                    Дом: {
                        icon: 'icons-8-building',
                        params: {
                            КлассЖилья: {
                                row: () => 0,
                                type: 'pickermulti',
                                label: () => 'Класс жилья',
                                label_width: () => 110,
                                none: () => 'не важен',
                                options: () => $$.$nl_search_panel_param_options['КлассЖилья'],
                            },
                            ТипДома: {
                                row: () => 1,
                                type: 'pickermulti',
                                label: () => 'Тип дома',
                                label_width: () => 110,
                                none: () => 'не важен',
                                options: () => $$.$nl_search_panel_param_options['ТипДома'],
                            },
                            СерияДома: {
                                row: () => 2,
                                type: 'pickermulti',
                                label: () => 'Серия дома',
                                label_width: () => 110,
                                none: () => 'не важна',
                                options: () => $$.$nl_search_panel_param_options['СерияДома'],
                            },
                            ГодПостройки: {
                                row: () => 3,
                                type: 'diap',
                                label: () => 'Год постройки',
                                label_width: () => 110,
                                diap_space: () => 16,
                            },
                            ПодСнос: {
                                row: () => 4,
                                type: 'select',
                                options: () => ({
                                    include: { caption: ({ isSelected }) => isSelected ? 'Можно в доме под снос' : {
                                            text: 'Можно',
                                            width: 100,
                                        } },
                                    exclude: { caption: ({ isSelected }) => isSelected ? 'Кроме домов под снос' : {
                                            text: 'Кроме',
                                            width: 100,
                                        } },
                                    only: { caption: ({ isSelected }) => isSelected ? 'Только в доме под снос' : {
                                            text: 'Только',
                                            width: 100,
                                        } },
                                }),
                            },
                            Новостройки: {
                                row: () => 5,
                                type: 'select',
                                options: () => ({
                                    include: { caption: ({ isSelected }) => isSelected ? 'Можно в новостройке' : {
                                            text: 'Можно',
                                            width: 100,
                                        } },
                                    exclude: { caption: ({ isSelected }) => isSelected ? 'Кроме новостроек' : {
                                            text: 'Кроме',
                                            width: 100,
                                        } },
                                    only: { caption: ({ isSelected }) => isSelected ? 'Только в новостройке' : {
                                            text: 'Только',
                                            width: 100,
                                        } },
                                }),
                            },
                        },
                    },
                    Инфраструктура: {
                        icon: 'icons-8-city-square',
                        params: {
                            Территория: {
                                row: () => 0,
                                type: 'select',
                                options: () => ({
                                    no_matter: { caption: { text: 'Не важно', width: 75 } },
                                    fenced: { caption: ({ val }) => val != 'guarded' ? 'Только огороженная территория' : 'Огороженная' },
                                    guarded: { caption: ({ isSelected }) => isSelected ? 'Только охраняемая территория' : 'Охраняемая' },
                                })
                            },
                            Парковка: {
                                row: () => 1,
                                type: 'select',
                                options: () => ({
                                    no_matter: { caption: { text: 'Не важно', width: 75 } },
                                    exists: { caption: ({ val }) => val == 'no_matter' || val == 'exists' ? 'Только с парковкой' : {
                                            text: 'Есть',
                                            width: 40,
                                        } },
                                    guarded: { caption: ({ isSelected }) => isSelected ? 'Только охраняемая парковка' : 'Охраняемая' },
                                    underground: { caption: ({ isSelected }) => isSelected ? 'Только подземная парковка' : 'Подземная' },
                                })
                            },
                        },
                    },
                    Объявление: {
                        icon: 'icons-8-create-new-3',
                        params: {
                            deep: {
                                row: () => 0,
                                label_width: () => 135,
                                label: () => 'Глубина поиска',
                                type: 'pickerdate',
                            },
                            ТолькоНовые: {
                                row: () => 1,
                                type: 'select',
                                options: () => ({
                                    include: { caption: { text: 'Все', width: 60 } },
                                    only: { caption: ({ isSelected, val }) => val != 'except' ? 'Только новые (впервые опубликованные)' : {
                                            width: 80,
                                            text: 'Только',
                                        } },
                                    except: { caption: ({ isSelected }) => isSelected ? 'Кроме новых (впервые опубликованных)' : {
                                            width: 75,
                                            text: 'Кроме',
                                        } },
                                })
                            },
                            Источник: {
                                type: 'pickermulti',
                                row: () => 2,
                                label: () => 'Источники',
                                label_width: () => 100,
                                none: () => 'все',
                                options: () => $$.$nl_search_panel_param_options['Источник'],
                            },
                            sold: {
                                row: () => 3,
                                type: 'select',
                                options: () => ({
                                    include: { caption: ({ isSelected }) => isSelected ? 'Включая снятые с продажи' : {
                                            width: 60,
                                            text: 'Все',
                                        } },
                                    except: { caption: ({ isSelected, val }) => isSelected ? 'Кроме снятых с продажи' : {
                                            text: 'Кроме',
                                        } },
                                    only: { caption: ({ isSelected }) => isSelected ? {
                                            width: 250,
                                            text: 'Только снятые с продажи',
                                        } : {
                                            width: 75,
                                            text: 'Только',
                                        } },
                                })
                            },
                            photo: {
                                row: () => 4,
                                type: 'select',
                                col_count: () => 2,
                                col: () => 0,
                                options: () => ({
                                    include: { caption: ({ isSelected }) => ({
                                            width: 60,
                                            text: 'Все',
                                        }) },
                                    except: { caption: ({ isSelected, val }) => 'С фото',
                                    },
                                    only: { caption: ({ isSelected }) => isSelected ? {
                                            text: 'Без фото',
                                        } : {
                                            width: 44,
                                            text: '...',
                                        } },
                                })
                            },
                            video: {
                                row: () => 4,
                                col_count: () => 2,
                                col: () => 1,
                                type: 'select',
                                options: () => ({
                                    include: { caption: ({ isSelected }) => ({
                                            width: 60,
                                            text: 'Все',
                                        }) },
                                    except: { caption: ({ isSelected, val }) => 'С видео' },
                                    only: { caption: ({ isSelected }) => isSelected ? {
                                            text: 'Без видео',
                                        } : {
                                            width: 44,
                                            text: '...',
                                        } },
                                })
                            },
                        },
                    },
                }),
            },
            elem: {
                mode_switcher: () => ({
                    base: $$.$nl_switch,
                    prop: {
                        '#width': () => 124 + 32,
                        '#height': () => 44,
                        ofsVer: () => 8,
                        '#alignHor': () => $$.$me_align.right,
                        options: '<<.param_modes',
                        value: $$.$me_atom2_prop(['<<.param_mode'], null, ({ val }) => { $$.a('<<.param_mode', val); }),
                        no_adjust: () => true,
                    },
                }),
                crumb: $$.$me_atom2_prop({ keys: ['.crumb_ids'], masters: ['.crumbs'] }, ({ key: [id], masters: [crumbs] }) => ({
                    type: crumbs[id].caption,
                    prop: {
                        '#ofsHor': `<.crumb_left[${id}]`,
                        '#ofsVer': `<.crumb_top[${id}]`,
                        '#width': `<.crumb_width[${id}]`,
                        '#height': '<.crumb_height',
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                        '#cursor': id == 'раздел' ? null : () => 'pointer',
                    },
                    style: {
                        border: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                            'solid 1px #bdc3d1' :
                            'solid 1px #d8dce3'),
                        background: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#fcfcfd' : '#878f9b'),
                        borderRadius: () => 3,
                    },
                    control: {
                        label: () => ({
                            base: $$.$me_label,
                            prop: {
                                '#width': '<.#width',
                                '#height': '<.#height',
                                text: () => crumbs[id].caption,
                                fontSize: '<<.crumb_fontSize',
                                paddingHor: '<<.crumb_paddingHor',
                                alignVer: () => $$.$me_align.center,
                            },
                        }),
                    },
                    event: {
                        clickOrTap: () => {
                            let found;
                            if (id == 'Область') {
                                found = 'Местоположение';
                            }
                            else {
                                const tabs = $$.a('<.tabs');
                                const tab_ids = Object.keys(tabs);
                                for (let i = 0; i < tab_ids.length; i++) {
                                    const tab_id = tab_ids[i];
                                    if (tabs[tab_id].params[id]) {
                                        found = tab_id;
                                        break;
                                    }
                                }
                            }
                            if (found) {
                                $$.a('<.tab_selected', found);
                                $$.a('<<.param_mode', 'ПОЛНЫЙ');
                            }
                            return true;
                        },
                    },
                })),
                tabs: $$.$me_atom2_prop(['<.param_mode'], ({ masters: [param_mode] }) => param_mode == 'СЖАТЫЙ' ? null : {
                    prop: {
                        '#ofsVer': '<.header_height',
                        '#height': $$.$me_atom2_prop(['<.#height', '<@found.#height', '.#ofsVer'], $$.$me_atom2_prop_compute_fn_diff()),
                        options: '<.tabs',
                        option_ids: '<.tab_ids',
                        option_height: () => 44,
                        option_fontSize: $$.$me_atom2_prop(['.em'], ({ masters: [em] }) => em / 16 * 14),
                        option_iconSize: $$.$me_atom2_prop(['.em'], ({ masters: [em] }) => 22),
                        option_label_ofsHor: $$.$me_atom2_prop(['.em'], ({ masters: [em] }) => 16 + 16 + 22),
                        option_width: () => 210,
                        option_top: $$.$me_atom2_prop({ keys: ['.option_ids'], masters: ['.option_ids', '.option_height'] }, ({ key: [id], masters: [ids, height] }) => ids.indexOf(id) * height),
                        value: $$.$me_atom2_prop_bind('<.tab_selected'),
                        params: $$.$me_atom2_prop(['.value', '.options'], ({ masters: [value, options] }) => options[value].params || {}),
                        param_ids: $$.$me_atom2_prop_keys(['.params'], true),
                        row_height: () => row_height,
                        row_space: () => row_space,
                        row_left: $$.$me_atom2_prop(['.option_width', '.marginHor'], $$.$me_atom2_prop_compute_fn_sum()),
                        row_width: () => 428,
                        marginHor: () => 32,
                        '#order': () => ['option', 'separator', 'param'],
                    },
                    elem: {
                        separator: () => ({
                            prop: {
                                '#width': '<.option_width',
                            },
                            style: {
                                borderRight: () => '1px solid #bdc3d1',
                            },
                        }),
                        param: $$.$me_atom2_prop({ keys: ['.param_ids'], masters: ['.params'] }, ({ key: [id], masters: [params] }) => {
                            const def = params[id];
                            if (def.type == 'select') {
                                return {
                                    base: $$.$nl_select,
                                    prop: Object.assign({}, prop_common(def), { options: def.options, value: $$.$me_atom2_prop(['.option_ids', '<<.order'], ({ masters: [ids, order] }) => order.params && order.params[id] || ids[0], ({ val }) => {
                                            const order = $$.a('<<.order');
                                            if (!order.params)
                                                order.params = {};
                                            order.params[id] = val;
                                            $$.a('<<.order', order, true);
                                        }), no_adjust: def.no_adjust }),
                                };
                            }
                            else if (def.type == 'address') {
                                return {
                                    base: input_with_button,
                                    prop: Object.assign({}, prop_common(def), { placeholder: () => 'Горoд, район, адреc, метро, название ЖК' }),
                                };
                            }
                            else if (def.type == 'picker' || def.type == 'pickermulti') {
                                const result = {
                                    prop: Object.assign({}, prop_common(def)),
                                    elem: {
                                        label: !def.label ? null : () => ({
                                            prop: {
                                                '#width': def.label_width,
                                                '#height': () => null,
                                                '#alignVer': () => $$.$me_align.center,
                                                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                                            },
                                            dom: {
                                                innerText: def.label,
                                            },
                                        }),
                                        ctrl: () => ({
                                            base: $$.$nl_picker,
                                            prop: {
                                                '#width': !def.label ? '<.#width' : $$.$me_atom2_prop(['<.#width', '<@label.#width'], $$.$me_atom2_prop_compute_fn_diff()),
                                                '#alignHor': () => $$.$me_align.right,
                                                options: def.options,
                                                none: def.type == 'picker' ? null : def.none,
                                                value: $$.$me_atom2_prop(['.option_ids', '<<<.order'], ({ masters: [ids, order] }) => order.params && order.params[id] || (def.type == 'picker' ? ids[0] : new Map()), ({ val }) => {
                                                    const order = $$.a('<<<.order');
                                                    if (!order.params)
                                                        order.params = {};
                                                    order.params[id] = val;
                                                    $$.a('<<<.order', order, true);
                                                }),
                                            },
                                        }),
                                    },
                                };
                                return result;
                            }
                            else if (def.type == 'diap') {
                                return {
                                    base: diap,
                                    prop: Object.assign({}, prop_common(def), { label: def.label, label_width: def.label_width, diap_space: def.diap_space, value: $$.$me_atom2_prop({ keys: ['.ids'], masters: ['<<.order'] }, ({ key: [kind], masters: [order] }) => order.params && order.params[id] && order.params[id][kind] || 0, ({ key: [kind], val }) => {
                                            const order = $$.a('<<.order');
                                            if (!order.params)
                                                order.params = {};
                                            if (!order.params[id])
                                                order.params[id] = {};
                                            order.params[id][kind] = val;
                                            $$.a('<<.order', order, true);
                                        }) }),
                                };
                            }
                            else if (def.type == 'pickerdate') {
                                return {
                                    prop: Object.assign({}, prop_common(def)),
                                    elem: {
                                        label: !def.label ? null : () => ({
                                            prop: {
                                                '#width': def.label_width,
                                                '#height': () => null,
                                                '#alignVer': () => $$.$me_align.center,
                                                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                                            },
                                            dom: {
                                                innerText: def.label,
                                            },
                                        }),
                                        ctrl: () => ({
                                            base: $$.$nl_pickerdate,
                                            prop: {
                                                '#width': !def.label ? '<.#width' : $$.$me_atom2_prop(['<.#width', '<@label.#width'], $$.$me_atom2_prop_compute_fn_diff()),
                                                '#alignHor': () => $$.$me_align.right,
                                                value: $$.$me_atom2_prop(['<<<.order'], ({ masters: [order] }) => 7, ({ val }) => {
                                                    const order = $$.a('<<<.order');
                                                    if (!order.params)
                                                        order.params = {};
                                                    order.params[id] = val;
                                                    $$.a('<<<.order', order, true);
                                                }),
                                            },
                                        }),
                                    },
                                };
                            }
                            else if (def.type == 'include_exclude') {
                                return {
                                    prop: Object.assign({}, prop_common(def, { ofsVer: -5 }), { '#height': () => row_height + (row_height + row_space) * 2 }),
                                    elem: {
                                        label: () => ({
                                            prop: {
                                                '#width': '<.#width',
                                                '#height': () => row_height,
                                                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                                                fontWeight: () => 500,
                                                '#ofsVer': () => 12,
                                            },
                                            dom: {
                                                innerText: def.label,
                                            },
                                        }),
                                        include: () => ({
                                            base: include_exclude_item,
                                            prop: {
                                                label: () => 'Включая',
                                                label_width: def.label_width,
                                                '#ofsVer': () => (row_height + row_space),
                                            },
                                        }),
                                        exclude: () => ({
                                            base: include_exclude_item,
                                            prop: {
                                                label: () => 'Исключая',
                                                label_width: def.label_width,
                                                '#ofsVer': () => 2 * (row_height + row_space),
                                            },
                                        }),
                                    },
                                };
                            }
                            else if (def.type == 'selector') {
                                return {
                                    base: $$.$nl_scheme_selector,
                                    prop: Object.assign({}, prop_common(def)),
                                };
                            }
                            else if (def.type == 'button') {
                                return {
                                    base: $$.$nl_button,
                                    prop: Object.assign({}, prop_common(def), { target: def.target, cmd: def.cmd, caption: def.caption }),
                                    dispatch: def.dispatch,
                                };
                            }
                            else {
                                $$.$me_throw(def.type);
                            }
                        }),
                        option: $$.$me_atom2_prop({ keys: ['.option_ids'] }, ({ key: [id] }) => ({
                            prop: {
                                '#ofsVer': `<.option_top[${id}]`,
                                '#width': '<.option_width',
                                '#height': '<.option_height',
                                isSelected: $$.$me_atom2_prop(['<.value'], ({ masters: [value] }) => value == id),
                                '#cursor': $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? null : 'pointer'),
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                            },
                            event: {
                                clickOrTap: () => {
                                    $$.a('<.value', id);
                                    return true;
                                },
                            },
                            style: {
                                background: $$.$me_atom2_prop(['.isSelected', '/.theme'], ({ masters: [isSelected, theme] }) => !isSelected ? 'transparent' :
                                    theme == $$.$me_theme.light ? '#0070a4' : '#008ecf'),
                            },
                            elem: {
                                icon: () => ({
                                    node: 'img',
                                    prop: {
                                        '#width': '<<.option_iconSize',
                                        '#height': '<<.option_iconSize',
                                        '#alignVer': () => $$.$me_align.center,
                                        '#ofsHor': () => 16,
                                    },
                                    attr: {
                                        src: $$.$me_atom2_prop(['<<.options'], ({ masters: [options] }) => `assets/${options[id].icon}@2x.png`),
                                        draggable: () => false,
                                    },
                                    style: {
                                        filter: $$.$me_atom2_prop(['<.isSelected', '/.theme'], ({ masters: [isSelected, theme] }) => isSelected ?
                                            'invert(100%) sepia(89%) saturate(0%) hue-rotate(253deg) brightness(112%) contrast(100%)' :
                                            theme == $$.$me_theme.light ?
                                                'invert(22%) sepia(56%) saturate(3987%) hue-rotate(182deg) brightness(96%) contrast(101%)' :
                                                'invert(45%) sepia(90%) saturate(515%) hue-rotate(154deg) brightness(106%) contrast(97%)'),
                                    },
                                }),
                                label: () => ({
                                    prop: {
                                        '#ofsHor': '<<.option_label_ofsHor',
                                        '#alignVer': () => $$.$me_align.center,
                                        '#height': () => null,
                                        '#width': $$.$me_atom2_prop(['<<.option_width', '.#ofsHor'], $$.$me_atom2_prop_compute_fn_diff(-8)),
                                        fontSize: '<<.option_fontSize',
                                    },
                                    dom: {
                                        innerText: () => id,
                                    },
                                    style: {
                                        color: $$.$me_atom2_prop(['<.isSelected', '.colorText'], ({ masters: [isSelected, colorText] }) => isSelected ? 'white' : colorText),
                                        whiteSpace: () => 'nowrap',
                                        overflow: () => 'hidden',
                                        textOverflow: () => 'ellipsis',
                                    },
                                }),
                            },
                        })),
                    },
                }),
                found: () => ({
                    prop: {
                        '#alignVer': () => $$.$me_align.bottom,
                        '#height': $$.$me_atom2_prop(['.em'], ({ masters: [em] }) => 3 * em),
                    },
                    style: {
                        fontWeight: () => 500,
                        background: '<.style.background',
                        paddingLeft: () => 16,
                        paddingTop: () => 16,
                        boxSizing: () => 'border-box',
                    },
                    dom: {
                        innerText: $$.$me_atom2_prop(['<<.offerCount', '<<.objCount'], ({ masters: [offerCount, objCount] }) => `Найдено ${objCount} объектов / ${offerCount} предложений`.toUpperCase()),
                    },
                }),
            },
        };
        const diap = {
            prop: {
                ids: () => ['min', 'max'],
                value: $$.$me_atom2_prop({ keys: ['.ids'] }, () => 0),
                label: $$.$me_atom2_prop_abstract(),
                label_width: $$.$me_atom2_prop_abstract(),
                diap_space: $$.$me_atom2_prop_abstract(),
            },
            elem: {
                label: () => ({
                    prop: {
                        '#width': '<.label_width',
                        '#height': () => null,
                        '#alignVer': () => $$.$me_align.center,
                        fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                    },
                    dom: {
                        innerText: '<.label',
                    },
                }),
                input: $$.$me_atom2_prop({ keys: ['.ids'] }, ({ key: [id] }) => ({
                    base: $$.$nl_input,
                    dispatch(dispatch_name, dispatch_arg) {
                        if (dispatch_name == 'change') {
                            $$.a(`<.value[${id}]`, dispatch_arg == '' ? 0 : Number.parseInt(dispatch_arg, 10));
                            return true;
                        }
                        return false;
                    },
                    prop: {
                        '#alignHor': () => $$.$me_align.right,
                        '#ofsHor': id == 'max' ? null : $$.$me_atom2_prop(['.#width', '<.diap_space'], $$.$me_atom2_prop_compute_fn_sum()),
                        '#width': $$.$me_atom2_prop(['<.#width', '<.label_width', '<.diap_space'], ({ masters: [width, label_width, diap_space] }) => (width - label_width - diap_space) / 2),
                        placeholder: () => id == 'min' ? 'от' : 'до',
                    },
                    dom: {
                        value: $$.$me_atom2_prop([`<.value[${id}]`], ({ masters: [value] }) => {
                            return !value ? '' : value + '';
                        }),
                    },
                })),
            },
        };
        const include_exclude_item = {
            prop: {
                label: $$.$me_atom2_prop_abstract(),
                label_width: $$.$me_atom2_prop_abstract(),
                '#width': '<.#width',
                '#height': () => row_height,
                '#ofsVer': $$.$me_atom2_prop_abstract(),
                '#alignVer': () => $$.$me_align.top,
            },
            elem: {
                label: () => ({
                    prop: {
                        '#width': '<.label_width',
                        '#height': () => null,
                        '#alignVer': () => $$.$me_align.center,
                        fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                    },
                    dom: {
                        innerText: '<.label',
                    },
                }),
                ctrl: () => ({
                    base: $$.$nl_input,
                    prop: {
                        '#width': $$.$me_atom2_prop(['<.#width', '<@label.#width'], $$.$me_atom2_prop_compute_fn_diff()),
                        '#height': () => row_height,
                        '#alignHor': () => $$.$me_align.right,
                    },
                }),
            },
        };
        const input_with_button = {
            elem: {
                input: () => ({
                    base: $$.$nl_input,
                    prop: {
                        placeholder: '<.placeholder',
                    },
                }),
                button: () => ({
                    prop: {
                        '#alignHor': () => $$.$me_align.right,
                        '#width': () => 40,
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 2),
                        '#cursor': () => 'pointer',
                    },
                    elem: {
                        square: () => ({
                            prop: {
                                '#alignHor': () => $$.$me_align.right,
                                '#ofsHor': () => 8,
                                '#alignVer': () => $$.$me_align.center,
                                '#width': () => 16,
                                '#height': () => 16,
                            },
                            style: {
                                background: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#88B5CE' : '#5FBDF9'),
                                borderRadius: () => 3,
                            },
                            elem: {
                                plus: () => ({
                                    base: $$.$me_plus,
                                    prop: {
                                        size: () => 10,
                                        thick: () => 2,
                                        '#align': () => $$.$me_align.center,
                                        color: () => 'white',
                                    },
                                }),
                            },
                        }),
                    },
                    event: {
                        clickOrTap: () => {
                            console.log($$.a.curr.name());
                            return true;
                        },
                    },
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//param.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_spinner = {
            base: $$.$me_stylesheet,
            prop: {
                color: () => 'white',
                size: () => 64,
                period: () => 1.2,
                qt: () => 12,
                k_height: () => 14 / 32,
                k_width: () => 5 / 32,
                '#width': '.size',
                '#height': '.size',
                '#align': () => $$.$me_align.center,
                idx: $$.$me_atom2_prop(['.qt'], ({ masters: [qt] }) => [...Array(Math.floor(qt)).keys()]),
                styleSheetName: () => 'spinner',
                styleSheetCommon: $$.$me_atom2_prop(['.styleSheetName'], ({ masters: [styleSheetName] }) => `
        @keyframes ${styleSheetName} {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `),
                styleSheet: $$.$me_atom2_prop(['.className', '.styleSheetName', '.idx', '.color', '.size', '.qt', '.period', '.k_height', '.k_width'], ({ masters: [className, styleSheetName, idx, color, size, qt, period, k_height, k_width], atom }) => {
                    const semiSize = Math.round(size / 2);
                    const top = Math.round(semiSize / 10);
                    const left = semiSize - top;
                    const width = Math.round(semiSize * k_width);
                    const height = Math.round(semiSize * k_height);
                    const step = period / qt;
                    return (`
            .${className} div {
              transform-origin: ${semiSize}px ${semiSize}px;
              animation: ${styleSheetName} ${period.toFixed(1)}s linear infinite;
            }
            .${className} div:after {
              content: " ";
              display: block;
              position: absolute;
              top: ${top}px;
              left: ${left}px;
              width: ${width}px;
              height: ${height}px;
              border-radius: 20%;
              background: ${color};
            }
          ` + idx.map((idx) => `
            .${className} div:nth-child(${+idx + 1}) {
              transform: rotate(${Math.round(+idx * 360 / qt)}deg);
              animation-delay: ${(-period + step * (+idx + 1)).toFixed(2)}s;
            }
          `).join(''));
                }),
            },
            elem: {
                div: $$.$me_atom2_prop({ keys: ['.idx'] }, () => ({})),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//spinner.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_plitka = {
            base: $$.$me_list,
            prop: {
                row_height_min: () => 176 + 12,
                header_height: () => 0,
                header_content: () => ({}),
                row_content: $$.$me_atom2_prop({ keys: ['.row_i'] }, ({ key: [row_i] }) => ({
                    base: row,
                    prop: {
                        row_i: () => row_i,
                        rec_idx: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.row_i', '<<.row_i_min', '<<.row_i_max'], ({ masters: [row_i, row_i_min, row_i_max] }) => $$.$me_list_row_i_out_of_range_is(row_i, row_i_min, row_i_max) ? [] : [`<<.rec_idx[${row_i}]`]), ({ len, masters: [rec_idx] }) => !len ? -1 : rec_idx),
                        id: $$.$me_atom2_prop(['<<.col_ids', `.rec_idx`, '<<.rec_count'], ({ masters: [ids, idx, rec_count] }) => {
                            return !~idx || idx >= rec_count ? '' : ids[idx];
                        }),
                    },
                })),
            },
            elem: {
                header: () => null,
            },
        };
        const row = {
            elem: {
                inner: () => ({
                    prop: {
                        '#height': () => 176,
                        '#width': $$.$me_atom2_prop(['<.#width'], $$.$me_atom2_prop_compute_fn_sum(-2)),
                    },
                    style: {
                        border: () => '1px solid #989ba2',
                        borderRadius: () => '4px',
                    },
                    elem: {
                        leftPanel: () => ({
                            base: leftPanel,
                            prop: {
                                '#width': () => 38,
                            },
                            style: {
                                background: () => '#ebedf1',
                                borderTopLeftRadius: '<.style.borderRadius',
                                borderBottomLeftRadius: '<.style.borderRadius',
                            },
                        }),
                        photo: () => ({
                            prop: {
                                '#width': () => 190,
                                '#height': () => 160,
                                '#ofsVer': () => 8,
                                '#ofsHor': $$.$me_atom2_prop(['<@leftPanel.#width'], $$.$me_atom2_prop_compute_fn_sum(8)),
                            },
                            style: {
                                border: () => '1px solid red',
                            },
                        }),
                        h1: () => ({
                            base: label,
                            prop: {
                                '#ofsHor': $$.$me_atom2_prop(['<@photo.#ofsHor', '<@photo.#width'], $$.$me_atom2_prop_compute_fn_sum(16)),
                                '#ofsVer': () => 18,
                            },
                            style: {
                                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(20 / 16)),
                                fontWeight: () => 'bold',
                                color: () => '#172a3f',
                            },
                            dom: {
                                innerText: () => '3-комн.кв., 120м², 4/5 этаж',
                            },
                        }),
                        metro: () => ({
                            base: label,
                            prop: {
                                '#ofsHor': $$.$me_atom2_prop(['<@h1.#ofsHor', '<@h1.#width'], $$.$me_atom2_prop_compute_fn_sum(12)),
                                '#ofsVer': $$.$me_atom2_prop(['<@h1.#ofsVer', '<@h1.#height', '.#height'], ({ masters: [target_ofsVer, target_height, height] }) => target_ofsVer + target_height - height),
                            },
                            style: {
                                color: () => '#0070a4',
                            },
                            dom: {
                                innerText: () => 'Бульвар Дмитрия Донского м.',
                            },
                        }),
                        far: () => ({
                            base: label,
                            prop: {
                                '#ofsHor': $$.$me_atom2_prop(['<@metro.#ofsHor', '<@metro.#width'], $$.$me_atom2_prop_compute_fn_sum(8)),
                                '#ofsVer': '<@metro.#ofsVer',
                            },
                            style: {
                                color: () => '#0070a4',
                            },
                            dom: {
                                innerText: () => '15 мин.пеш.',
                            },
                        }),
                        address: () => ({
                            base: label,
                            prop: {
                                '#ofsHor': '<@h1.#ofsHor',
                                '#ofsVer': () => 54,
                            },
                            style: {
                                color: () => '#6a6c74',
                            },
                            dom: {
                                innerText: () => 'Улица Двадцати Шести Бакинских Комиссаров. 20 дом 130 П',
                            },
                        }),
                        price: () => ({
                            base: label,
                            prop: {
                                '#ofsHor': $$.$me_atom2_prop(['<@h1.#ofsHor'], $$.$me_atom2_prop_compute_fn_sum(27)),
                                '#ofsVer': () => 97,
                            },
                            style: {
                                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(20 / 16)),
                                fontWeight: () => 500,
                            },
                            dom: {
                                innerText: () => '8 640 000 ₽',
                            },
                        }),
                        price_per_sq_wrapper: () => ({
                            prop: {
                                '#ofsVer': () => 127,
                                '#ofsHor': '<@price.#ofsHor',
                                '#width': '<@price.#width',
                                '#height': () => null,
                            },
                            elem: {
                                price_per_sq: () => ({
                                    base: label,
                                    prop: {
                                        '#alignHor': () => $$.$me_align.center,
                                    },
                                    style: {
                                        opacity: () => .5,
                                    },
                                    dom: {
                                        innerText: () => '7 000 ₽/м²',
                                    },
                                }),
                            },
                        }),
                        phone: () => ({
                            base: label,
                            prop: {
                                '#ofsVer': $$.$me_atom2_prop(['<@price.#ofsVer', '<@price.#height', '.#height'], ({ masters: [target_ofsVer, target_height, height] }) => target_ofsVer + target_height - height),
                                '#ofsHor': $$.$me_atom2_prop(['<@price.#ofsHor', '<@price.#width'], $$.$me_atom2_prop_compute_fn_sum(27)),
                            },
                            style: {
                                color: () => '#0070a4',
                                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(18 / 16)),
                            },
                            dom: {
                                innerText: () => '+7 (911) 22-60-222',
                            },
                        }),
                        source_wrapper: () => ({
                            prop: {
                                '#ofsVer': () => 127,
                                '#ofsHor': '<@phone.#ofsHor',
                                '#width': '<@phone.#width',
                                '#height': () => null,
                            },
                            elem: {
                                source: () => ({
                                    base: label,
                                    prop: {
                                        '#alignHor': () => $$.$me_align.center,
                                    },
                                    style: {
                                        color: '<<@phone.style.color',
                                    },
                                    dom: {
                                        innerText: () => 'AVITO.RU',
                                    },
                                }),
                            },
                        }),
                        group: () => ({
                            base: group,
                            prop: {
                                '#ofsHor': () => 965,
                                '#ofsVer': () => 24,
                            },
                        }),
                    },
                }),
            },
        };
        const group = {
            prop: {
                '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor'], $$.$me_atom2_prop_compute_fn_diff()),
                '#height': $$.$me_atom2_prop(['<.#height', '.#ofsVer'], $$.$me_atom2_prop_compute_fn_diff()),
                def: () => ({
                    colSpaceHor: 40,
                    fldSpaceVer: 10,
                    fldSpaceHor: 5,
                    cols: [
                        {
                            width: () => 80,
                            flds: {
                                'Балкон': { value: 'Л' },
                                'Санузел': { value: 'C' },
                                'Окна': { value: 'Д+У' },
                                'Лифт': { value: 'П+Г' },
                                'Парковка': { value: 'П' },
                            },
                        },
                        {
                            width: () => 140,
                            flds: {
                                'Ипотека': { value: '+' },
                                'Год постройки': { value: '2000' },
                                'Площадь': { value: '50.6/29.3/9.1' },
                                'Ремонт': { value: 'Дизайн.рем.' },
                                'Территория': { value: 'Охр.' },
                            },
                        },
                    ],
                }),
                cols: $$.$me_atom2_prop(['.def'], ({ masters: [def] }) => Array.from(Array(def.cols.length).keys()).map(i => i + '')),
                flds: $$.$me_atom2_prop({ keys: ['.cols'], masters: ['.def'] }, ({ key: [col], masters: [def] }) => Object.keys(def.cols[col].flds)),
                value: $$.$me_atom2_prop({ keys: ['.cols', '.flds[]'], masters: ['.def'] }, ({ key: [col, fld], masters: [def] }) => def.cols[col].flds[fld].value),
            },
            elem: {
                col: $$.$me_atom2_prop({ keys: ['.cols'], masters: ['.def', '.cols'] }, ({ key: [col], masters: [def, cols] }) => {
                    const idx = cols.indexOf(col);
                    return {
                        prop: {
                            '#width': def.cols[col].width,
                            '#ofsHor': !idx ? null :
                                $$.$me_atom2_prop([`<@col[${cols[idx - 1]}].#ofsHor`, `<@col[${cols[idx - 1]}].#width`], $$.$me_atom2_prop_compute_fn_sum(def.colSpaceHor)),
                        },
                        elem: {
                            fld: $$.$me_atom2_prop({ keys: [`<.flds[${col}]`], masters: ['<.def', `<.flds[${col}]`] }, ({ key: [fld], masters: [def, flds] }) => {
                                const idx = flds.indexOf(fld);
                                return {
                                    prop: {
                                        '#height': () => 14,
                                        '#ofsVer': !idx ? null :
                                            $$.$me_atom2_prop([`<@fld[${flds[idx - 1]}].#ofsVer`, `<@fld[${flds[idx - 1]}].#height`], $$.$me_atom2_prop_compute_fn_sum(def.fldSpaceVer)),
                                    },
                                    elem: {
                                        label: () => ({
                                            base: label,
                                            dom: {
                                                innerText: () => $$.$me_option_caption_text(fld, def.cols[col].flds),
                                            },
                                            style: {
                                                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(12 / 16)),
                                                fontWeight: () => 'bold',
                                                color: () => '#6a6c74',
                                            },
                                        }),
                                        value: () => ({
                                            base: label,
                                            prop: {
                                                '#ofsHor': $$.$me_atom2_prop(['<@label.#width'], $$.$me_atom2_prop_compute_fn_sum(def.fldSpaceHor)),
                                            },
                                            style: {
                                                fontSize: '<@label.style.fontSize',
                                            },
                                            dom: {
                                                innerText: () => def.cols[col].flds[fld].value,
                                            },
                                        }),
                                        shape: () => ({
                                            base: shape,
                                            prop: {
                                                '#alignHor': () => $$.$me_align.right,
                                                '#alignVer': () => $$.$me_align.center,
                                                size: () => 12,
                                                '#ofsHor': $$.$me_atom2_prop(['.size'], ({ masters: [size] }) => -size),
                                                color: () => '#0070a4',
                                            },
                                        }),
                                    },
                                };
                            }),
                        },
                    };
                }),
            },
        };
        const shape = {
            prop: {
                size: $$.$me_atom2_prop_abstract(),
                color: $$.$me_atom2_prop_abstract(),
                '#width': '.size',
                '#height': '.size',
            },
            style: {
                borderRadius: () => '50%',
                border: $$.$me_atom2_prop(['.color'], ({ masters: [color] }) => `1px solid ${color}`),
            },
            elem: {
                quest: () => ({
                    base: label,
                    prop: {
                        '#align': () => $$.$me_align.center,
                        '#ofsHor': () => .5,
                        '#ofsVer': () => .3,
                    },
                    dom: {
                        innerText: () => '?',
                    },
                    style: {
                        color: '<.color',
                        fontSize: $$.$me_atom2_prop(['<.size'], ({ masters: [size] }) => size * .8),
                    },
                }),
            },
        };
        const label = {
            prop: {
                '#height': () => null,
                '#width': () => null,
            },
            style: {
                whiteSpace: () => 'nowrap',
                overflow: () => 'hidden',
            },
        };
        const leftPanel = {
            prop: {
                def: () => ({
                    mark: {
                        caption: $$.$me_atom2_prop([], () => 'Пометить'),
                        editable: () => true,
                        icon: $$.$me_atom2_prop([], () => ({
                            style: {
                                borderRadius: () => '50%',
                                border: () => '1px solid red',
                            },
                        })),
                    },
                    fav: {
                        caption: $$.$me_atom2_prop([], () => 'Поместить в избранное'),
                        editable: () => true,
                        icon: $$.$me_atom2_prop([], () => ({
                            style: {
                                borderRadius: () => '50%',
                                border: () => '1px solid red',
                            },
                        })),
                    },
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//plitka.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_iosmenu = {
            prop: {
                target: $$.$me_atom2_prop_abstract(),
                limitRight: '/.#viewportWidth',
                limitLeft: () => 0,
                triangleSize: () => 15,
                paddingHor: () => 6,
                borderRadius: () => 8,
                colorBackground: () => 'black',
                '#width': () => 0,
                lambda: () => .5,
                '#height': () => 34,
                '#ofsVer': $$.$me_atom2_prop(['.triangleSize', '.#height'], ({ masters: [triangleSize, height] }) => -(triangleSize + height)),
            },
            elem: {
                triangle: () => ({
                    base: $$.$me_triangle,
                    prop: {
                        k: () => 2,
                        size: '<.triangleSize',
                        color: '<.colorBackground',
                        '#ofsVer': '<.#height',
                        '#ofsHor': $$.$me_atom2_prop(['<.#width', '.#width', '<.lambda', '<.paddingHor'], ({ masters: [width_parent, width_own, lambda, paddingHor] }) => paddingHor + Math.round((width_parent - 2 * paddingHor - width_own) * lambda)),
                    },
                }),
                items: () => ({
                    control: {
                        item: $$.$me_atom2_prop({ keys: ['<.items'] }, ({ key: [item] }) => ({
                            base: $$.$me_label,
                            prop_non_render: {
                                '#cursor': () => 'pointer',
                            },
                            event: {
                                clickOrTap: () => {
                                    $$.a.dispatch('<<' + $$.a('<<.target'));
                                    return true;
                                },
                            },
                            prop: {
                                '#height': '<.#height',
                                alignVer: () => $$.$me_align.center,
                                '#ofsHor': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<<.items'], ({ masters: [items] }) => {
                                    const idx = items.indexOf(item);
                                    const result = !idx ? ['<<.paddingHor'] :
                                        [`<^item[${items[idx - 1]}].#ofsHor`, `<^item[${items[idx - 1]}].#width`
                                        ];
                                    return result;
                                }), ({ len, masters: [left, width, space] }) => len == 1 ? left : left + width),
                                borderWidthLeft: $$.$me_atom2_prop(['<<.items'], ({ masters: [items] }) => {
                                    const idx = items.indexOf(item);
                                    return !idx ? 0 : 1;
                                }),
                                colorBorderLeft: () => 'rgba(255,255,255,0.5)',
                                paddingHor: () => 10,
                                text: () => item,
                                fontSize: () => 14,
                                fontWeight: () => 400,
                                fontFamily: () => '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                                colorText: () => 'white',
                            },
                        })),
                    },
                }),
            },
            init: () => {
                const items = $$.a('.items');
                const item_last = items[items.length - 1];
                const width = $$.a(`@items^item[${item_last}].#ofsHor`) + $$.a(`@items^item[${item_last}].#width`) + $$.a('.paddingHor');
                const ofsHor = Math.round(($$.a('<.#width') - width) / 2);
                const clientRect = $$.a('<.#clientRect');
                const limitRight = $$.a('.limitRight') - clientRect.left - width;
                const limitLeft = $$.a('.limitLeft') - clientRect.left;
                const ofsHor_valid = Math.max(limitLeft, Math.min(ofsHor, limitRight));
                const lambda = .5 + Math.min(.5, (ofsHor - ofsHor_valid) / (width - 2 * $$.a('.paddingHor') - $$.a('@triangle.#width')));
                $$.a('.#ofsHor', ofsHor_valid);
                $$.a('.#width', width);
                $$.a('.lambda', lambda);
            },
            style: {
                background: '.colorBackground',
                borderRadius: '.borderRadius',
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//iosmenu.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const width_compute_fn = (p) => {
            const [maxWidth, minWidth, minMarginHor, viewportWidth] = p.masters;
            return Math.max(minWidth, Math.min(maxWidth, viewportWidth - minMarginHor * 2));
        };
        $$.$me_dialog = {
            prop: {
                content: $$.$me_atom2_prop_abstract(),
                target: $$.$me_atom2_prop_abstract(),
                minMarginVer: () => 50,
                minMarginHor: () => 50,
                maxWidth: '/.#viewportWidth',
                maxHeight: '/.#viewportHeight',
                minWidth: () => 100,
                minHeight: () => 100,
                '#width': '/.#viewportWidth',
                '#height': '/.#viewportHeight',
                '#ofsHor': $$.$me_atom2_prop(['<.#clientRect'], ({ masters: [clientRect] }) => -clientRect.left),
                '#ofsVer': $$.$me_atom2_prop(['<.#clientRect'], ({ masters: [clientRect] }) => -clientRect.top),
                '#zIndex': () => 10,
                '#cursor': () => 'not-allowed',
            },
            event: {
                mousemove: () => {
                    return true;
                },
                mousedown: () => {
                    return true;
                },
                touchstart: () => {
                    return true;
                },
            },
            style: {
                background: () => 'rgba(0,0,0,.1)'
            },
            elem: {
                wrapper: () => ({
                    prop: {
                        '#width': $$.$me_atom2_prop(['<.maxWidth', '<.minWidth', '<.minMarginHor', '<.#width'], width_compute_fn),
                        '#height': $$.$me_atom2_prop(['<.maxHeight', '<.minHeight', '<.minMarginVer', '<.#height'], width_compute_fn),
                        '#ofsHor': $$.$me_atom2_prop(['<.#width', '.#width'], ({ masters: [width_upper, width] }) => (width_upper - width) / 2),
                        '#ofsVer': $$.$me_atom2_prop(['<.#height', '.#height'], ({ masters: [height_upper, height] }) => (height_upper - height) / 2),
                        '#cursor': () => null,
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                    },
                    elem: {
                        content: '<.content',
                    },
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dialog.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_search_grid_dialog = {
            base: $$.$me_dialog,
            prop: {
                cols: $$.$me_atom2_prop_abstract(),
                col_ids_visible: $$.$me_atom2_prop_abstract(),
                col_ids_invisible: $$.$me_atom2_prop(['.col_ids_visible', '.cols'], ({ masters: [ids, cols] }) => {
                    const ids_all = Object.keys(cols);
                    return ids_all.filter(id => !~ids.indexOf(id));
                }),
                maxWidth: () => 872,
                minWidth: () => 600,
                minHeight: () => 600,
                content: () => ({
                    prop: {
                        listSpace: () => 24,
                        listWidth: $$.$me_atom2_prop(['.#width', '.paddingHor', '.listSpace'], ({ masters: [width, paddingHor, listSpace] }) => Math.round((width - 2 * paddingHor - listSpace) / 2)),
                        listOfsVer: () => 94,
                        headerHeight: () => 30,
                        listHeight: $$.$me_atom2_prop(['.#height', '.listOfsVer', '.paddingVer', '@buttonApply.#height'], ({ masters: [height, listOfsVer, paddingVer, buttonApplyHeight] }) => height - listOfsVer - 2 * paddingVer - buttonApplyHeight),
                        row_height: $$.$me_atom2_prop(['.itemHeight', '.itemMarginVer'], ({ masters: [itemHeight, itemMarginVer] }) => itemHeight + 2 * itemMarginVer),
                        itemMarginTopFirst: $$.$me_atom2_prop(['.itemMarginVer'], $$.$me_atom2_prop_compute_fn_mul(16 / 6)),
                        itemMarginBottomLast: $$.$me_atom2_prop(['.itemMarginVer'], $$.$me_atom2_prop_compute_fn_mul(16 / 6)),
                        itemMarginVer: () => 6,
                        itemHeight: () => 37,
                        itemSpace: () => 8,
                        itemMarginHor: () => 16,
                        moving: () => '',
                        movingAnim: () => false,
                        source: () => '',
                        target: () => '',
                        ofs_clientX: () => -1,
                        ofs_clientY: () => -1,
                        start_clientX: () => -1,
                        start_clientY: () => -1,
                        start_ofsHor: () => -1,
                        start_ofsVer: () => -1,
                        isRight: () => false,
                        paddingHor: () => 32,
                        paddingVer: () => 32,
                    },
                    style: {
                        background: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'white' : '#464f63'),
                        boxShadow: () => '0 12px 12px 0 rgba(0, 0, 0, 0.5)',
                    },
                    elem: {
                        header: () => ({
                            prop: {
                                '#ofsHor': '<.paddingHor',
                                '#ofsVer': '<.paddingVer',
                                '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor'], ({ masters: [width, ofsHor] }) => width - 2 * ofsHor),
                                '#height': () => 19,
                            },
                            control: {
                                label: () => ({
                                    base: $$.$me_label,
                                    prop: {
                                        '#width': '<.#width',
                                        '#height': '<.#height',
                                        text: () => 'Настройка таблицы'.toUpperCase(),
                                        alignVer: () => $$.$me_align.center,
                                    },
                                }),
                            },
                        }),
                        invisibleHeader: () => ({
                            base: header_list,
                            prop: {
                                text: () => 'Скрытые поля',
                            },
                        }),
                        visibleHeader: () => ({
                            base: header_list,
                            prop: {
                                text: () => 'Видимые поля',
                                '#alignHor': () => $$.$me_align.right,
                            },
                        }),
                        invisible: () => ({
                            base: list,
                            prop: {
                                source: () => 'invisible',
                                target: () => 'visible',
                            },
                        }),
                        visible: () => ({
                            base: list,
                            prop: {
                                '#alignHor': () => $$.$me_align.right,
                                source: () => 'visible',
                                target: () => 'invisible',
                                isRight: () => true,
                            },
                        }),
                        buttonCancel: () => ({
                            prop: {
                                '#alignHor': () => $$.$me_align.right,
                                '#ofsHor': '<.paddingHor',
                                '#ofsVer': '<.paddingVer',
                                '#width': () => 15,
                                '#height': () => 15,
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                                '#cursor': () => 'pointer',
                            },
                            elem: {
                                cross: () => ({
                                    base: $$.$me_cross,
                                    prop: {
                                        size: () => 15,
                                        thick: () => 2,
                                        color: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#313745' : 'white'),
                                        opacity: () => .5,
                                    },
                                }),
                            },
                            event: {
                                clickOrTap: () => {
                                    $$.a.dispatch('<<<' + $$.a('<<<.target'));
                                    return true;
                                },
                            },
                        }),
                        buttonApply: () => ({
                            base: $$.$nl_button,
                            prop: {
                                '#width': () => 200,
                                '#alignVer': () => $$.$me_align.bottom,
                                '#alignHor': () => $$.$me_align.center,
                                '#ofsVer': () => 24,
                                caption: () => 'Применить',
                                target: $$.$me_atom2_prop(['<<<.target'], ({ masters: [target] }) => '<<<' + target),
                            },
                        }),
                        moving: $$.$me_atom2_prop(['.moving'], ({ masters: [id] }) => !id ? null : {
                            base: item,
                            prop: {
                                '#ofsHor': '<.start_ofsHor',
                                '#ofsVer': '<.start_ofsVer',
                                '#height': '<.itemHeight',
                                '#width': $$.$me_atom2_prop(['<.listWidth', '<.itemMarginHor'], ({ masters: [width, margin] }) => {
                                    const result = width - 2 * margin;
                                    return result;
                                }),
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex, isMoving] }) => zIndex + 2),
                                '#cursor': () => 'grabbing',
                                isRight: '<.isRight',
                                text: $$.$me_atom2_prop(['<<<.cols'], ({ masters: [cols] }) => {
                                    return cols[id].caption || id;
                                }),
                            },
                            style: {
                                boxShadow: () => '0 4px 8px 0 rgba(0, 0, 0, 0.35)'
                            },
                            event: {
                                mousemove: p => dragDo(p.event.clientX, p.event.clientY),
                                mouseup: () => dragEnd(),
                                touchmove: p => dragDo(p.event.touches[0].clientX, p.event.touches[0].clientY),
                                touchend: () => dragEnd(),
                            },
                        }),
                    },
                }),
            },
        };
        const header_list = {
            prop: {
                '#width': '<.listWidth',
                '#height': '<.headerHeight',
                '#ofsVer': () => 67,
                '#ofsHor': '<.paddingHor',
            },
            control: {
                label: () => ({
                    base: $$.$me_label,
                    prop: {
                        text: '<.text',
                        padding: () => 0,
                        alignVer: () => $$.$me_align.top,
                        '#height': '<.#height',
                        '#width': '<.#width',
                        fontWeight: () => 500,
                    },
                }),
            },
        };
        const list = {
            base: $$.$me_list,
            dispatch: (dispatch_name, dispatch_arg) => {
                if (dispatch_name == 'row_height_default') {
                    const idx = dispatch_arg.idx;
                    dispatch_arg.val = $$.a('.row_height_min') + (0 < idx && idx < $$.a('.rec_count') - 1 ? 0 :
                        (!idx ? $$.a('<.itemMarginTopFirst') : $$.a('<.itemMarginBottomLast')) - $$.a('<.itemMarginVer'));
                    return true;
                }
                return false;
            },
            prop: {
                isRight: () => false,
                '#width': '<.listWidth',
                '#height': '<.listHeight',
                '#ofsVer': '<.listOfsVer',
                '#ofsHor': '<.paddingHor',
                col_ids: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.source'], ({ masters: [source] }) => [`<<<.col_ids_${source}`])),
                rec_count: $$.$me_atom2_prop(['.col_ids'], ({ masters: [ids] }) => {
                    const result = ids.length;
                    return result;
                }),
                disabledScroll: $$.$me_atom2_prop(['<.moving'], ({ masters: [moving] }) => !!moving),
                curtain_kind: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'white' : 'black'),
                row_height_min: '<.row_height',
                header_height: () => 0,
                provider_tag: '.source',
                header_content: () => ({}),
                row_content: $$.$me_atom2_prop({ keys: ['.row_i'] }, ({ key: [row_i] }) => ({
                    base: row,
                    prop: {
                        row_i: () => row_i,
                        rec_idx: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.row_i', '<<.row_i_min', '<<.row_i_max'], ({ masters: [row_i, row_i_min, row_i_max] }) => $$.$me_list_row_i_out_of_range_is(row_i, row_i_min, row_i_max) ? [] : [`<<.rec_idx[${row_i}]`]), ({ len, masters: [rec_idx] }) => !len ? -1 : rec_idx),
                        id: $$.$me_atom2_prop(['<<.col_ids', `.rec_idx`, '<<.rec_count'], ({ masters: [ids, idx, rec_count] }) => {
                            return !~idx || idx >= rec_count ? '' : ids[idx];
                        }),
                    },
                })),
            },
            elem: {
                header: () => null,
            },
            style: {
                boxShadow: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '' : 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.25)'),
                border: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '' : 'solid 1px #d8dce3'),
                background: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#f0f1f4' : '#878f9b'),
            },
        };
        const row = {
            elem: {
                wrapper: () => ({
                    prop: {
                        '#width': $$.$me_atom2_prop(['<.#width', '<<<<.itemMarginHor'], ({ masters: [width, itemMarginHor] }) => width - 2 * itemMarginHor),
                        '#height': '<<<<.itemHeight',
                        '#ofsHor': '<<<<.itemMarginHor',
                        '#ofsVer': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<.rec_idx'], ({ masters: [rec_idx] }) => rec_idx ?
                            ['<<<<.itemMarginVer'] :
                            ['<<<<.itemMarginTopFirst'])),
                    },
                    elem: {
                        item: () => ({
                            base: item,
                            event: {
                                wheelDrag: p => {
                                    if ($$.$me_atom2_event_wheel_y_is(p.event))
                                        return false;
                                    if (!p.isInRect(p.event.start.clientX, p.event.start.clientY))
                                        return false;
                                    return dragStart($$.a('<<.id'), p.event.start.clientX, p.event.start.clientY);
                                },
                                wheelTouch: p => {
                                    if ($$.$me_atom2_event_wheel_y_is(p.event))
                                        return false;
                                    const touchTolerance = $$.a('/.#touchTolerance');
                                    const dist = p.distToRect(p.event.start.touches[0].clientX, p.event.start.touches[0].clientY);
                                    if (dist > touchTolerance)
                                        return false;
                                    return dragStart($$.a('<<.id'), p.event.start.touches[0].clientX, p.event.start.touches[0].clientY);
                                },
                            },
                            prop: {
                                isRight: '<<<<.isRight',
                                '#hidden': $$.$me_atom2_prop(['<.#visible', '<<<<<.moving', '<<.id'], ({ masters: [visible, moving, id] }) => !visible || id == 'stub' || id && id == moving, ({ val, atom }) => {
                                    if (val == null)
                                        console.error(atom.name());
                                }),
                                '#zIndex': $$.$me_atom2_prop(['<<<<<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                                '#cursor': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<<<<.source'], ({ masters: [source] }) => source != 'visible' ? [] : [`<<<<<<<.col_ids_${source}`]), ({ len, masters: [ids] }) => !len || ids.length >= 2 ? 'grab' : 'not-allowed'),
                                text: $$.$me_atom2_prop(['<<.id', '<<<<<<<.cols'], ({ masters: [id, cols] }) => {
                                    return id && id != 'stub' && (cols[id].caption || id);
                                }),
                            },
                        }),
                    }
                }),
            },
        };
        const item = {
            style: {
                background: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#d8dce3' : '#6e7581'),
                border: () => 'solid 1px #adb0b8',
                boxSizing: () => 'border-box',
                userSelect: () => 'none',
            },
            elem: {
                text: () => ({
                    prop: {
                        '#height': '<.#height',
                        '#width': $$.$me_atom2_prop(['<.#width', '<@moveMark.#width', '<@moveMark.#ofsHor'], ({ masters: [width, moveMarkWidth, moveMarkOfsHor] }) => {
                            const result = width - moveMarkWidth - moveMarkOfsHor;
                            return result;
                        }),
                        '#ofsHor': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<.isRight'], ({ masters: [isRight] }) => !isRight ? [] : ['<@moveMark.#width', '<@moveMark.#ofsHor']), $$.$me_atom2_prop_compute_fn_sum(0)),
                    },
                    control: {
                        label: () => ({
                            base: $$.$me_label,
                            prop: {
                                text: '<<.text',
                                paddingHor: () => 12,
                                alignVer: () => $$.$me_align.center,
                                alignHor: $$.$me_atom2_prop(['<<.isRight'], ({ masters: [isRight] }) => isRight ? $$.$me_align.right : $$.$me_align.left),
                                '#height': '<.#height',
                                '#width': '<.#width',
                                fontWeight: () => 500,
                            },
                        }),
                    },
                }),
                moveMark: () => ({
                    node: 'img',
                    prop: {
                        '#width': () => 9,
                        '#height': () => 17,
                        '#alignHor': $$.$me_atom2_prop(['<.isRight'], ({ masters: [isRight] }) => !isRight ? $$.$me_align.right : $$.$me_align.left),
                        '#ofsHor': () => 18,
                        '#alignVer': () => $$.$me_align.center,
                    },
                    attr: {
                        src: () => 'assets/move@2x.png',
                        draggable: () => false,
                    },
                    style: {
                        filter: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                            'brightness(0%) invert(29%) sepia(9%) saturate(1214%) hue-rotate(184deg) brightness(93%) contrast(87%)' :
                            'brightness(0%) invert(94%) sepia(11%) saturate(100%) hue-rotate(182deg) brightness(95%) contrast(89%)'),
                    },
                }),
            },
        };
        function dragStart(id, clientX, clientY) {
            if ($$.a('<<<<<.moving') || $$.a('<<<<<.movingAnim'))
                return false;
            const source = $$.a('<<<<.source');
            if (source == 'visible' && $$.a(`<<<<<<<.col_ids_${source}`).length < 2)
                return false;
            $$.a('<<<<<.moving', id);
            $$.a('<<<<<.isRight', $$.a('.isRight'));
            $$.a('<<<<<.source', source);
            $$.a('<<<<<.target', $$.a('<<<<.target'));
            $$.a('<<<<<.start_clientX', clientX);
            $$.a('<<<<<.start_clientY', clientY);
            const clientRect = $$.a('.#clientRect');
            $$.a('<<<<<.ofs_clientX', clientRect.left - clientX);
            $$.a('<<<<<.ofs_clientY', clientRect.top - clientY);
            const clientRectDialog = $$.a('<<<<<.#clientRect');
            $$.a('<<<<<.start_ofsHor', clientRect.left - clientRectDialog.left);
            $$.a('<<<<<.start_ofsVer', clientRect.top - clientRectDialog.top);
            return true;
        }
        function dragDo(clientX, clientY) {
            if (!$$.a('<.moving'))
                return false;
            if ($$.a('<.movingAnim'))
                return false;
            $$.a('.#ofsHor', clientX - $$.a('<.start_clientX') + $$.a('<.start_ofsHor'));
            $$.a('.#ofsVer', clientY - $$.a('<.start_clientY') + $$.a('<.start_ofsVer'));
            const left = clientX + $$.a('<.ofs_clientX');
            const right = left + $$.a('.#width');
            const top = clientY + $$.a('<.ofs_clientY');
            const bottom = top + $$.a('.#height');
            const target = $$.a('<.target');
            const clientRect = $$.a(`<@${target}.#clientRect`);
            const ids = $$.a(`<<<.col_ids_${target}`);
            if (intersects(left, right, clientRect.left, clientRect.right) &&
                intersects(top, bottom, clientRect.top, clientRect.bottom)) {
                let idx_found = ids.length;
                $$.a.dispatch(`<@${target}`, 'iterate_rows', (row_i) => {
                    const clientRect = $$.a(`<@${target}@row[${row_i}].#clientRect`);
                    if (intersects(top, bottom, clientRect.top, clientRect.bottom)) {
                        idx_found = $$.a(`<@${target}.rec_idx[${row_i}]`);
                        if (idx_found == ids.length - 1 && top > clientRect.top)
                            idx_found++;
                    }
                });
                if (ids[idx_found] != 'stub') {
                    const ids_new = ids.slice();
                    const idx = ids.indexOf('stub');
                    if (~idx) {
                        ids_new.splice(idx, 1);
                        if (idx_found > idx)
                            idx_found--;
                    }
                    ids_new.splice(idx_found, 0, 'stub');
                    $$.a(`<<<.col_ids_${target}`, ids_new);
                }
                return true;
            }
            const idx = ids.indexOf('stub');
            if (~idx) {
                const ids_new = ids.slice();
                ids_new.splice(idx, 1);
                $$.a(`<<<.col_ids_${target}`, ids_new);
            }
            return true;
        }
        function dragEnd() {
            const id = $$.a('<.moving');
            if (!id)
                return false;
            if ($$.$me_atom2_wheel_drag)
                $$.$me_atom2_wheel_drag.cancel();
            if ($$.$me_atom2_wheel_touch)
                $$.$me_atom2_wheel_touch.cancel();
            let count = 2;
            const target = $$.a('<.target');
            const fini = () => {
                if (!--count) {
                    $$.a('<.moving', '');
                    $$.a('<.movingAnim', false);
                    const ids = $$.a(`<<<.col_ids_${target}`);
                    const idx = ids.indexOf('stub');
                    if (~idx) {
                        const ids_new = ids.slice();
                        ids_new.splice(idx, 1, id);
                        $$.a(`<<<.col_ids_${target}`, ids_new);
                        {
                            const source = $$.a('<.source');
                            const ids = $$.a(`<<<.col_ids_${source}`);
                            const idx = ids.indexOf(id);
                            const ids_new = ids.slice();
                            ids_new.splice(idx, 1);
                            $$.a(`<<<.col_ids_${source}`, ids_new);
                        }
                    }
                }
            };
            $$.a('<.movingAnim', true);
            let i_found;
            const list = $$.a.dispatch(`<@${target}`, 'iterate_rows', (row_i) => {
                if ($$.a(`@row[${row_i}]@content.id`) == 'stub') {
                    i_found = row_i;
                    return false;
                }
            });
            let ofsHor;
            let ofsVer;
            if (i_found === void 0) {
                ofsHor = $$.a('<.start_ofsHor');
                ofsVer = $$.a('<.start_ofsVer');
            }
            else {
                const clientRectDialog = $$.a('<.#clientRect');
                const clientRectTarget = $$.a(`<@${target}@row[${i_found}]@content@wrapper.#clientRect`);
                ofsHor = clientRectTarget.left - clientRectDialog.left;
                ofsVer = clientRectTarget.top - clientRectDialog.top;
            }
            $$.a('.#ofsHor', $$.$me_atom2_anim({ to: ofsHor, fini }));
            $$.a('.#ofsVer', $$.$me_atom2_anim({ to: ofsVer, fini }));
            return true;
        }
        const intersects = (leftA, rightA, leftB, rightB) => leftB <= leftA && leftA <= rightB ||
            leftB <= rightA && rightA <= rightB ||
            leftA <= leftB && rightA >= leftB ||
            leftA <= rightB && rightA >= rightB;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dialog.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const min_max = (prefix, min = 'min', max = 'max') => [prefix + '_' + min, prefix + '_' + max];
        let by_idx = {};
        let timerId;
        $$.$nl_search_grid = {
            dispatch: (dispatch_name, dispatch_arg) => {
                if (dispatch_name == 'set_view') {
                    const val = dispatch_arg || {};
                    const col_width_store = val.col_width_actual || {};
                    const col_ids = val.col_ids || (() => {
                        const cols = $$.a('.cols');
                        return Object.keys(cols).filter(id => !cols[id].hidden);
                    })();
                    const min = $$.a('.#width') - $$.a('.col_width_sum_actual') - $$.a('.col_fixed_width');
                    const ofsHor = Math.min(0, Math.max(min, val.ofsHor || 0)) + $$.a('.col_fixed_width');
                    for (const id of $$.a('.col_ids'))
                        $$.a(`.col_width_actual[${id}]`, null);
                    $$.a('.col_width_store', col_width_store);
                    $$.a('.col_ids', col_ids);
                    $$.a('.ofsHor', ofsHor);
                    return true;
                }
                return false;
            },
            prop: {
                influence: $$.$me_atom2_prop(['.cols'], ({ masters: [cols] }) => {
                    const result = {};
                    for (const col_id in cols) {
                        const col = cols[col_id];
                        const fld = col.fld;
                        if (!fld)
                            continue;
                        for (const s of fld)
                            (result[s] || (result[s] = new Set())).add(col_id);
                    }
                    return result;
                }),
                col_width_store: () => ({}),
                col_ids: () => [],
                col_id_last: $$.$me_atom2_prop(['.col_ids'], ({ masters: [ids] }) => !ids.length ? null : ids[ids.length - 1]),
                col_id_last_prev: $$.$me_atom2_prop(['.col_ids'], ({ masters: [ids] }) => ids.length < 2 ? null : ids[ids.length - 2]),
                col: $$.$me_atom2_prop({ keys: ['.col_ids'], masters: ['.cols'] }, ({ key: [id], masters: [cols] }) => cols[id]),
                col_width: $$.$me_atom2_prop({ keys: ['.col_ids'], masters: ['.col[]', '.col_width_store'] }, ({ key: [id], masters: [col, col_width_store] }) => {
                    return col_width_store[id] || col.width;
                }),
                col_width_sum: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.col_ids'], ({ masters: [col_ids] }) => col_ids.map(id => `.col_width[${id}]`)), $$.$me_atom2_prop_compute_fn_sum()),
                col_width_excess: $$.$me_atom2_prop(['.#width', '.col_fixed_width', '.col_width_sum'], $$.$me_atom2_prop_compute_fn_diff()),
                col_width_actual: $$.$me_atom2_prop({ keys: ['.col_ids'], masters: ['.col_width[]', '.col_width_sum', '.col_width_excess'] }, ({ key: [id], masters: [col_width, col_width_sum, col_width_excess] }) => {
                    return col_width + (col_width_excess <= 0 ? 0 : col_width / col_width_sum * col_width_excess);
                }),
                col_width_sum_actual: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.col_ids'], ({ masters: [col_ids] }) => col_ids.map(id => `.col_width_actual[${id}]`)), $$.$me_atom2_prop_compute_fn_sum()),
                col_align: $$.$me_atom2_prop({ keys: ['.col_ids'], masters: ['.col[]'] }, ({ masters: [col] }) => col.align || $$.$me_align.left),
                col_width_min: () => 24,
                col_caption: $$.$me_atom2_prop({ keys: ['.col_ids'], masters: ['.col[]'] }, ({ key: [id], masters: [col] }) => col.caption || id),
                col_fixed_width: () => 37,
                ofsHor: $$.$me_atom2_prop(['.col_fixed_width'], ({ prev, masters: [col_fixed_width] }) => prev == null ? col_fixed_width : prev),
                ofsHor_adjust: $$.$me_atom2_prop(['.#width'], null, ({ val, prev }) => {
                    const [min, max] = ofsHor_min_max($$.a('.col_fixed_width'), $$.a('.col_width_sum_actual'), val);
                    $$.a('.ofsHor', ofsHor_adjusted($$.a('.ofsHor'), min, max));
                }),
                col_left: $$.$me_atom2_prop({
                    keys: ['.col_ids'],
                    masters: $$.$me_atom2_prop_masters(['.col_ids'], ({ key: [id], masters: [ids] }) => {
                        const idx = ids.indexOf(id);
                        return !idx ? [] : [`.col_left[${ids[idx - 1]}]`, `.col_width_actual[${ids[idx - 1]}]`];
                    }),
                }, ({ len, masters: [left, width] }) => !len ? 0 : left + width),
                header_height: () => 32,
                row_height_min: () => 28,
                hidden_curtain: $$.$me_atom2_prop(['@header.colSelected'], ({ masters: [colSelected] }) => !!colSelected),
                width_curtain: () => 40,
                curtain_kind: () => 'black',
                curtain: () => ['left', 'right'],
                curtainVisible: $$.$me_atom2_prop({
                    keys: ['.curtain'],
                    masters: $$.$me_atom2_prop_masters([], ({ key: [curtain] }) => {
                        if (curtain == 'left') {
                            return ['.ofsHor', '.col_fixed_width'];
                        }
                        else {
                            return ['.ofsHor', '.col_width_sum_actual', '.#width'];
                        }
                    }),
                }, ({ key: [curtain], masters }) => {
                    if (curtain == 'left') {
                        const [ofsHor, col_fixed_width] = masters;
                        return ofsHor < col_fixed_width;
                    }
                    else {
                        const [ofsHor, col_width_sum_actual, width] = masters;
                        return ofsHor + col_width_sum_actual > width;
                    }
                }),
                '#order': () => ['list', 'cursor', 'header'],
            },
            event: {
                wheel: p => !$$.a('@header.colSelected') &&
                    p.isInRect(p.event.clientX, p.event.clientY) &&
                    !$$.$me_atom2_event_wheel_y_is(p.event) && grid_wheel(p.event._deltaX),
                wheelDrag: p => !$$.a('@header.colSelected') &&
                    p.isInRect(p.event.start.clientX, p.event.start.clientY) &&
                    !$$.$me_atom2_event_wheel_y_is(p.event) && grid_wheel(p.event._deltaX),
                wheelTouch: p => !$$.a('@header.colSelected') &&
                    p.isInRect(p.event.start.touches[0].clientX, p.event.start.touches[0].clientY) &&
                    !$$.$me_atom2_event_wheel_y_is(p.event) && grid_wheel(p.event._deltaX),
            },
            elem: {
                header: () => ({
                    base: header,
                    prop: {
                        '#height': '<.header_height',
                    },
                }),
                list: () => ({
                    base: list,
                    prop: {
                        provider_tag: () => '',
                        provider: '<.provider',
                        rec_count: '<.rec_count',
                        '#ofsVer': '<@header.#height',
                        '#height': $$.$me_atom2_prop(['<.#height', '<@header.#height'], ({ masters: [height_gross, height_header] }) => height_gross - height_header),
                        row_height_min: '<.row_height_min',
                        width_curtain: $$.$me_atom2_prop(['<.ofsHor', '<.col_width_sum_actual', '<.#width'], ({ masters: [ofsHor, col_width_sum_actual, width] }) => Math.min(width, ofsHor + col_width_sum_actual)),
                    },
                }),
                curtain: $$.$me_atom2_prop({ keys: ['.curtain'], masters: ['.hidden_curtain', '.curtainVisible[]'] }, ({ key: [curtain], masters: [hidden_curtain, curtainVisible] }) => hidden_curtain || !curtainVisible ? null : {
                    prop: {
                        '#width': '<.width_curtain',
                        '#height': $$.$me_atom2_prop(['<.header_height', '<@list.curtainVisible[bottom]', '<@list.#height', '<@list.visible_bottom'], ({ masters: [header_height, curtainVisible, height, visible_bottom] }) => {
                            return header_height + (curtainVisible ? height : visible_bottom);
                        }),
                        '#ofsHor': curtain == 'right' ? null : '<.col_fixed_width',
                        '#alignHor': () => $$.$me_align[curtain],
                    },
                    style: {
                        background: $$.$me_atom2_prop(['<.curtain_kind'], ({ masters: [kind] }) => kind == 'black' ?
                            `linear-gradient(${curtain == 'left' ? 90 : 270}deg, rgba(0,0,0,.24) 0%, rgba(0,0,0,.1) 33%, rgba(0,0,0,0) 100%)` :
                            `linear-gradient(${curtain == 'left' ? 90 : 270}deg, rgba(255,255,255,.9) 0%, rgba(255,255,255,.5) 50%, rgba(255,255,255,0) 100%)`),
                        pointerEvents: () => 'none',
                    },
                }),
            }
        };
        const grid_wheel = (deltaX) => {
            const prop_ofsHor = $$.a.get('.ofsHor');
            const ofsHor = prop_ofsHor.value() - deltaX;
            const [min, max] = ofsHor_min_max($$.a('.col_fixed_width'), $$.a('.col_width_sum_actual'), $$.a('.#width'));
            if (deltaX > 0 && ofsHor >= min ||
                deltaX < 0 && ofsHor <= max) {
                prop_ofsHor.value(ofsHor);
            }
            else if (deltaX) {
                $$.$me_ribbon_effect({
                    id: $$.a.curr.name(),
                    adjust: '.ofsHor',
                    from: '.ofsHor',
                    to: ofsHor > max ? max : min,
                    delta: deltaX,
                    fromBack: deltaX < 0,
                });
            }
            return true;
        };
        function ofsHor_min_max(col_fixed_width, col_width_sum_actual, width) {
            const max = col_fixed_width;
            const min = Math.min(max, width - col_width_sum_actual);
            return [min, max];
        }
        function ofsHor_adjusted(ofsHor, min, max) {
            return Math.min(max, Math.max(min, ofsHor));
        }
        const get_row_open = (idx, _provider, provider_tag) => {
            return $$.a.dispatch(_provider, 'get_row_open', { idx, tag: provider_tag }).val;
        };
        const set_row_open = (idx, _provider, provider_tag, val) => {
            $$.a.dispatch(_provider, 'set_row_open', { idx, val, tag: provider_tag });
        };
        $$.$nl_search_grid_cursor = $$.$me_atom2_async_multi_origin({
            default: '',
            raf_order: 100,
            flush: (row_i, prev, _value) => {
                _value.origin.by_path_s('<<.row_cursor').value(row_i);
            },
        });
        const header = {
            prop: {
                colSelected: $$.$me_atom2_prop([], () => '', ({ val, prev }) => {
                    $$.a('.colSelectedOpacity', val ? 1 : $$.$me_atom2_anim({ to: 0 }));
                    if (!val && prev)
                        $$.a('.colSelectedWas', prev);
                }),
                colReplace: () => '',
                replaceToRight: () => false,
                col_ids_new: () => [],
                colSelectedWas: () => '',
                colSelectedOpacity: () => 0,
                colSelectedHeaderVisible: $$.$me_atom2_prop(['.colSelectedOpacity'], ({ masters: [opacity] }) => !!opacity),
                '#order': () => ['wrapper', 'fixed', 'colSelectedStub', 'colResizerLeft', 'colResizerRight', 'colSelected'],
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
            },
            elem: {
                colSelectedStub: $$.$me_atom2_prop(['.colSelected', '.colSelectedWas', '.colSelectedHeaderVisible'], ({ masters: [id, id_was, colSelectedHeaderVisible] }) => !id && !colSelectedHeaderVisible ? null : {
                    type: id || id_was,
                    prop: {
                        '#ofsHor': $$.$me_atom2_prop([`<<.col_left[${id || id_was}]`, '<<.ofsHor', '<<.col_fixed_width'], ({ masters: [left, ofs, min] }) => Math.max(min, left + ofs)),
                        '#width': $$.$me_atom2_prop([`<<.col_left[${id || id_was}]`, '<<.ofsHor', '<<.col_fixed_width', `<<.col_width_actual[${id || id_was}]`], ({ masters: [left, ofs, min, width] }) => Math.max(0, width + Math.min(0, left + ofs - min))),
                        '#height': '<<.#height',
                    },
                    style: {
                        background: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'white' : '#464f63'),
                        opacity: '<.colSelectedOpacity',
                    },
                }),
                colSelected: $$.$me_atom2_prop(['.colSelected', '.colSelectedWas', '.colSelectedHeaderVisible'], ({ masters: [id, id_was, colSelectedHeaderVisible] }) => !id && !colSelectedHeaderVisible ? null : {
                    type: id || id_was,
                    prop: {
                        '#ofsVer': $$.$me_atom2_prop(['<.colSelected'], ({ masters: [id] }) => $$.$me_atom2_anim({
                            from: id ? 0 : null,
                            to: id ? -20 : 0,
                        })),
                        '#ofsHor': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.isMoving', '.isMovingAnim'], ({ masters: [isMoving, isMovingAnim] }) => isMoving || isMovingAnim ? [] : [`<<.col_left[${id || id_was}]`, '<<.ofsHor']), ({ len, masters: [left, ofs], prev }) => !len ? prev : left + ofs),
                        '#width': `<<.col_width_actual[${id || id_was}]`,
                        on_chaned_width: $$.$me_atom2_prop(['.#width'], null),
                        '#height': '<<.#height',
                        '#cursor': $$.$me_atom2_prop(['.isMoving'], ({ masters: [isMoving] }) => isMoving ? 'grabbing' : 'grab'),
                        '#zIndex': () => 3,
                        last_clientX: () => -1,
                        ofs: () => -1,
                        start_clientX: () => -1,
                        isShownDialog: () => false,
                        isResizing: () => false,
                        isMoving: $$.$me_atom2_prop([], () => false, ({ val, prev }) => {
                            if (!val && prev) {
                                const id = $$.a('<.colSelected');
                                const left = $$.a(`<<.col_left[${id}]`);
                                const prop_ofsHor = $$.a.get('<<.ofsHor');
                                const ofs = $$.$me_atom2.anim_to_play.has(prop_ofsHor.path) ?
                                    $$.$me_atom2.anim_to_play.get(prop_ofsHor.path).to :
                                    prop_ofsHor.value();
                                const min = $$.a('<<.col_fixed_width');
                                const to = Math.max(min, left + ofs);
                                $$.a('.#ofsHor', $$.$me_atom2_anim({ to, path_active: $$.a.get('.isMovingAnim').path }));
                            }
                        }),
                        isMovingAnim: () => false,
                        '#order': () => ['colResizerLeft', 'colResizerRight', 'cells', 'header', 'menu'],
                    },
                    style: {
                        background: () => 'rgb(250,250,250)',
                        opacity: '<.colSelectedOpacity',
                        pointerEvents: $$.$me_atom2_prop(['.colSelected'], ({ masters: [colSelected] }) => colSelected ? 'auto' : 'none'),
                        boxShadow: () => '0 4px 8px 0 rgba(0, 0, 0, 0.5)',
                    },
                    init: () => {
                        const left = $$.a(`<<.col_left[${id || id_was}]`);
                        const prop_ofsHor = $$.a.get('<<.ofsHor');
                        const ofs = $$.$me_atom2.anim_to_play.has(prop_ofsHor.path) ?
                            $$.$me_atom2.anim_to_play.get(prop_ofsHor.path).to :
                            prop_ofsHor.value();
                        const min = $$.a('<<.col_fixed_width');
                        const val = Math.max(min, left + ofs);
                        $$.a('.#ofsHor', val);
                    },
                    dispatch: (dispatch_name, dispatch_arg) => {
                        const s = $$.a.curr.name();
                        if (!dispatch_name.startsWith(s))
                            return false;
                        dispatch_name = dispatch_name.slice(s.length);
                        if (dispatch_name.startsWith('@menu')) {
                            if (dispatch_name.endsWith('[Скрыть]')) {
                                $$.a('<.colSelected', '');
                                const col_ids = $$.a('<<.col_ids');
                                const col_ids_new = col_ids.slice();
                                const idx = col_ids.indexOf(id);
                                col_ids_new.splice(idx, 1);
                                $$.a('<<.col_ids', col_ids_new);
                                const [min, max] = ofsHor_min_max($$.a('<<.col_fixed_width'), $$.a(`<<.col_width_sum_actual`), $$.a('<.#width'));
                                const to = ofsHor_adjusted($$.a('<<.ofsHor'), min, max);
                                const prop_isResizing = $$.a.get('.isResizing');
                                $$.a('<<.ofsHor', $$.$me_atom2_anim({
                                    to,
                                    fini: () => {
                                        prop_isResizing.value(false);
                                    },
                                }));
                            }
                            else if (dispatch_name.endsWith('[Показать...]')) {
                                $$.a('.isShownDialog', true);
                            }
                            else
                                return false;
                            return true;
                        }
                        else if (dispatch_name.startsWith('@dialog')) {
                            console.log(dispatch_name);
                            if (dispatch_name.endsWith('Apply')) {
                                $$.a('<.colSelected', '');
                                $$.a('<<.col_ids', $$.a('@dialog.col_ids_visible'));
                                const [min, max] = ofsHor_min_max($$.a('<<.col_fixed_width'), $$.a('<<.col_width_sum_actual'), $$.a('<<.#width'));
                                $$.a('<<.ofsHor', ofsHor_adjusted($$.a('<<.ofsHor'), min, max));
                            }
                            $$.a('.isShownDialog', false);
                            return true;
                        }
                        return false;
                    },
                    elem: {
                        colResizerLeft: $$.$me_atom2_prop(['.isMoving', '.isMovingAnim', '<.colSelectedOpacity'], ({ masters: [isMoving, isMovingAnim, colSelectedOpacity] }) => isMoving || isMovingAnim || colSelectedOpacity != 1 ? null : {
                            base: colResizer,
                            prop: {
                                id: () => id,
                                isRight: () => false,
                            },
                        }),
                        colResizerRight: $$.$me_atom2_prop(['.isMoving', '.isMovingAnim', '<.colSelectedOpacity'], ({ masters: [isMoving, isMovingAnim, colSelectedOpacity] }) => isMoving || isMovingAnim || colSelectedOpacity != 1 ? null : {
                            base: colResizer,
                            prop: {
                                id: () => id,
                                isRight: () => true,
                            },
                        }),
                        menu: $$.$me_atom2_prop(['.isMoving', '.isMovingAnim', '.isResizing'], ({ masters: [isMoving, isMovingAnim, isResizing] }) => isMoving || isMovingAnim || isResizing ?
                            null :
                            {
                                base: $$.$me_iosmenu,
                                prop: {
                                    target: () => '<',
                                    items: $$.$me_atom2_prop(['<<<.col_ids'], ({ masters: [col_ids] }) => {
                                        const result = ['Показать...'];
                                        if (col_ids.length > 1)
                                            result.unshift('Скрыть');
                                        return result;
                                    }),
                                    '#zIndex': () => 6,
                                },
                            }),
                        dialog: $$.$me_atom2_prop(['.isShownDialog'], ({ masters: [isShownDialog] }) => !isShownDialog ? null : {
                            base: $$.$nl_search_grid_dialog,
                            prop: {
                                target: () => '<',
                                cols: '<<<.cols',
                                col_ids_visible: $$.$me_atom2_prop(['<<<.col_ids'], ({ masters: [ids] }) => ids),
                                col_ids_invisible: $$.$me_atom2_prop(['<<<.col_ids', '<<<.cols'], ({ masters: [ids, cols] }) => {
                                    const ids_all = Object.keys(cols);
                                    return ids_all.filter(id => !~ids.indexOf(id));
                                }),
                            },
                        }),
                        header: () => ({
                            prop: {
                                '#height': $$.$me_atom2_prop(['<<<.header_height'], ({ masters: [height] }) => height + 2),
                            },
                            control: {
                                content: () => ({
                                    base: $$.$me_label,
                                    prop: {
                                        '#width': `<<<<.col_width_actual[${id}]`,
                                        '#height': '<.#height',
                                        text: `<<<<.col_caption[${id}]`,
                                        borderWidth: () => 1,
                                        colorBorder: () => '#adb0b8',
                                        colorBackground: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#d8dce3' : '#6e7581'),
                                        align: () => $$.$me_align.center,
                                        fontSize: () => 14,
                                        paddingHor: () => 4,
                                    },
                                }),
                            },
                        }),
                        cells: () => ({
                            control: {
                                cell: $$.$me_atom2_prop({
                                    keys: ['<<<@list.row_i'],
                                    masters: ['<<<@list.row_i_min', '<<<@list.row_i_max'],
                                }, ({ key: [row_i], masters: [row_i_min, row_i_max] }) => $$.$me_list_row_i_out_of_range_is(+row_i, row_i_min, row_i_max) ?
                                    null :
                                    {
                                        base: $$.$me_label,
                                        prop: {
                                            '#ofsVer': $$.$me_atom2_prop(['<<@header.#height', `<<<<@list.row_top[${row_i}]`], ({ masters: [ofs, top] }) => ofs + top),
                                            '#height': '<<<<@list.row_height_min',
                                            '#width': '<.#width',
                                            text: `<<<<@list.cell_text[${row_i}][${id}]`,
                                            borderWidth: () => 1,
                                            colorBorder: () => '#adb0b8',
                                            borderWidthTop: () => 0,
                                            colorBackground: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#F5F8F8' : '#878f9b'),
                                            fontSize: () => 14,
                                            paddingHor: () => 4,
                                            alignVer: () => $$.$me_align.center,
                                            alignHor: `<<<<.col_align[${id}]`,
                                        },
                                    }),
                            },
                        }),
                    },
                    event: {
                        clickOrTapOutside: () => {
                            const colSelected = $$.a('<.colSelected');
                            if (!colSelected || colSelected != id)
                                return false;
                            $$.a('<.colSelected', '');
                            return true;
                        },
                        touchstart: p => {
                            const touchTolerance = $$.a('/.#touchTolerance');
                            const dist = p.distToRect(p.event.touches[0].clientX, p.event.touches[0].clientY);
                            if (dist > touchTolerance)
                                return false;
                            reorderStart(p.event.touches[0].clientX);
                            return true;
                        },
                        touchend: () => {
                            reorderEnd();
                            return true;
                        },
                        touchmove: p => {
                            reorderDo(p.event.touches[0].clientX);
                            return true;
                        },
                        mousedown: p => {
                            if (!p.isInRect(p.event.clientX, p.event.clientY))
                                return false;
                            reorderStart(p.event.clientX);
                            return true;
                        },
                        mouseup: () => {
                            reorderEnd();
                            return true;
                        },
                        mousemove: p => {
                            if (p.event.buttons != 1) {
                                $$.a('.isMoving', false);
                                return false;
                            }
                            reorderDo(p.event.clientX);
                            return true;
                        },
                    },
                }),
                fixed: () => ({
                    prop: {
                        '#width': '<<.col_fixed_width',
                    },
                    control: {
                        cell: () => ({
                            base: $$.$me_panel,
                            prop: Object.assign({}, cell_borders, { colorBackground: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#d8dce3' : '#6e7581') }),
                        }),
                    },
                }),
                wrapper: () => ({
                    style: {
                        overflow: () => 'hidden',
                    },
                    elem: {
                        cells: () => ({
                            prop: {
                                '#width': '<<<.col_width_sum_actual',
                                '#ofsHor': '<<<.ofsHor',
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                            },
                            control: {
                                cell: $$.$me_atom2_prop({ keys: ['<<<.col_ids'] }, ({ key: [id] }) => ({
                                    base: $$.$me_label,
                                    prop: Object.assign({ '#hidden': $$.$me_atom2_prop([`<<<<.col_left[${id}]`, `<<<<.col_width_actual[${id}]`, `<<<<.col_fixed_width`, `<<<<.#width`, `<<<<.ofsHor`], ({ masters: [col_left, col_width_actual, col_fixed_width, parent_width, ofsHor] }) => ofsHor + col_left > parent_width || ofsHor + col_left + col_width_actual <= col_fixed_width), '#width': `<<<<.col_width_actual[${id}]`, '#ofsHor': `<<<<.col_left[${id}]`, '#height': '<.#height', text: `<<<<.col_caption[${id}]` }, cell_borders, { colorBackground: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#d8dce3' : '#6e7581'), align: () => $$.$me_align.center, fontSize: () => 14, paddingHor: () => 4, '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1) }),
                                    prop_non_render: {
                                        '#cursor': () => 'pointer',
                                    },
                                    event: {
                                        clickOrTap: () => {
                                            console.log('here');
                                            const ofsHor = $$.a('<<<<.ofsHor');
                                            const left = $$.a(`<<<<.col_left[${id}]`);
                                            const min = $$.a('<<<<.col_fixed_width') - left;
                                            const max = $$.a('<<<.#width') - $$.a(`<<<<.col_width_actual[${id}]`) - left;
                                            const to = Math.max(min, Math.min(max, ofsHor));
                                            const prop_colSelected = $$.a.get('<<<.colSelected');
                                            if (to == ofsHor) {
                                                prop_colSelected.value(id);
                                            }
                                            else {
                                                $$.a('<<<<.ofsHor', $$.$me_atom2_anim({ to,
                                                    fini: () => {
                                                        prop_colSelected.value(id);
                                                    }
                                                }));
                                            }
                                            return true;
                                        },
                                    },
                                })),
                            },
                        }),
                    }
                }),
            },
        };
        function reorderStart(clientX) {
            $$.a('.isMoving', true);
            $$.a('.last_clientX', clientX);
            $$.a('.ofs', clientX - $$.a('.#clientRect').left);
            $$.a('.start_clientX', clientX);
        }
        function reorderDo(clientX) {
            const delta = clientX - $$.a('.last_clientX');
            if (!delta)
                return;
            if (!reorderDo_helper(clientX, Math.sign(delta)))
                return;
            $$.a('.#ofsHor', $$.a('.#ofsHor') + delta);
            $$.a('.last_clientX', clientX);
        }
        function reorderDo_helper(clientX, sign) {
            if (!$$.a('.isMoving'))
                return false;
            const is_valid_idx = (idx) => 0 <= idx && idx < col_ids.length;
            const col_ids = $$.a('<<.col_ids');
            const id = $$.a('<.colSelected');
            const idx = col_ids.indexOf(id);
            let idx_replace;
            let col_ids_new;
            let ofsHor;
            let need_reorder = false;
            if (sign > 0 && idx < col_ids.length - 1 || sign < 0 && idx) {
                const overlap_border = clientX - $$.a('.ofs') - $$.a(`<@wrapper.#clientRect`).left - $$.a('<<.ofsHor') +
                    (sign < 0 ? 0 : $$.a(`<<.col_width_actual[${id}]`));
                let i = 0;
                const threshold = $$.a('<<.col_width_min') / 2;
                let overlap;
                while (is_valid_idx(idx + (i + 1) * sign)) {
                    const id = col_ids[idx + (i + 1) * sign];
                    const left = $$.a(`<<.col_left[${id}]`);
                    const val = (overlap_border - left) * sign + (sign > 0 ? 0 : $$.a(`<<.col_width_actual[${id}]`));
                    if (val >= threshold) {
                        i++;
                        overlap = val;
                    }
                    else
                        break;
                }
                if (i) {
                    idx_replace = idx + i * sign;
                    const limit = sign > 0 ?
                        $$.a('<<.#width') - $$.a('<<.ofsHor') - threshold * 2 :
                        $$.a('<<.col_fixed_width') - $$.a('<<.ofsHor') + threshold * 2;
                    const [min, max] = ofsHor_min_max($$.a('<<.col_fixed_width'), $$.a('<<.col_width_sum_actual'), $$.a('<<.#width'));
                    if (idx_replace == col_ids.length - 1) {
                        ofsHor = min;
                    }
                    else if (idx_replace == 0) {
                        ofsHor = max;
                    }
                    else {
                        const need_scroll = sign > 0 ?
                            $$.a(`<<.col_left[${col_ids[idx + i]}]`) + $$.a(`<<.col_width_actual[${col_ids[idx + i]}]`) >= limit :
                            $$.a(`<<.col_left[${col_ids[idx_replace]}]`) <= limit;
                        if (need_scroll) {
                            const prop_ofsHor = $$.a.get('<<.ofsHor');
                            ofsHor =
                                $$.$me_atom2.anim_to_play.has(prop_ofsHor.path) ?
                                    $$.$me_atom2.anim_to_play.get(prop_ofsHor.path).to :
                                    prop_ofsHor.value();
                            ofsHor += sign * threshold / 2;
                            for (let j = idx + sign; j * sign <= (idx_replace) * sign; j += sign)
                                ofsHor -= sign * $$.a(`<<.col_width_actual[${col_ids[j]}]`);
                        }
                    }
                }
            }
            if (idx_replace !== void 0) {
                col_ids_new = col_ids.slice();
                col_ids_new.splice(idx, 1);
                col_ids_new.splice(idx_replace, 0, id);
                $$.a('<<.col_ids', col_ids_new);
            }
            if (ofsHor !== void 0) {
                const [min, max] = ofsHor_min_max($$.a('<<.col_fixed_width'), $$.a('<<.col_width_sum_actual'), $$.a('<<.#width'));
                const val = ofsHor_adjusted(ofsHor, min, max);
                const curr = $$.a.curr;
                if (val != $$.a('<<.ofsHor')) {
                    $$.a('<<.ofsHor', $$.$me_atom2_anim({
                        to: val,
                        fini: () => {
                            const prev = $$.a.curr;
                            $$.a.curr = curr;
                            reorderDo_helper(clientX, sign);
                            $$.a.curr = prev;
                        }
                    }));
                }
            }
            return true;
        }
        function reorderEnd() {
            $$.a('.isMoving', false);
        }
        const colResizer = {
            node: 'img',
            prop: {
                '#width': () => 27,
                '#height': () => 50,
                '#cursor': () => 'col-resize',
                '#zIndex': () => 5,
                start_clientX: () => -1,
                start_width_actual: () => -1,
                start_width: () => -1,
                start_ofsHor: () => -1,
                '#alignHor': $$.$me_atom2_prop(['.isRight'], ({ masters: [isRight] }) => !isRight ? $$.$me_align.left : $$.$me_align.right),
                '#ofsHor': () => -19,
                '#ofsVer': () => -4,
            },
            attr: {
                src: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => `assets/stretch-${$$.$me_theme[theme]}@2x.png`),
                draggable: () => false,
            },
            style: {
                boxSizing: () => 'border-box',
                transform: $$.$me_atom2_prop(['.isRight'], ({ masters: [isRight] }) => !isRight ? '' : 'scaleX(-1)'),
            },
            event: {
                touchstart: p => {
                    const touchTolerance = $$.a('/.#touchTolerance');
                    const dist = p.distToRect(p.event.touches[0].clientX, p.event.touches[0].clientY);
                    if (dist > touchTolerance)
                        return false;
                    resizeStart(p.event.touches[0].clientX);
                    return true;
                },
                touchmove: p => {
                    const start_clientX = $$.a('.start_clientX');
                    if (start_clientX == -1)
                        return false;
                    resizeDo(p.event.touches[0].clientX);
                    return true;
                },
                touchend: () => resizeFini(),
                mousedown: p => {
                    if (!p.isInRect(p.event.clientX, p.event.clientY))
                        return false;
                    resizeStart(p.event.clientX);
                    return true;
                },
                mousemove: p => {
                    const start_clientX = $$.a('.start_clientX');
                    const clientX = p.event.clientX;
                    if (start_clientX == -1)
                        return false;
                    if (!p.event.buttons
                        && start_clientX != clientX) {
                        return resizeFini(false);
                    }
                    resizeDo(p.event.clientX);
                    return true;
                },
                mouseup: () => resizeFini(),
            },
        };
        function resizeStart(clientX) {
            $$.a('.start_clientX', clientX);
            const id = $$.a('.id');
            $$.a('.start_width_actual', $$.a(`<<<.col_width_actual[${id}]`));
            $$.a('.start_width', $$.a(`<<<.col_width[${id}]`));
            $$.a(`<<<.col_width_actual[${id}]`);
            const isRight = $$.a('.isRight');
            if (!isRight)
                $$.a('.start_ofsHor', $$.a('<<<.ofsHor'));
            $$.a('<.isResizing', true);
        }
        function resizeDo(clientX) {
            const start_clientX = $$.a('.start_clientX');
            const isRight = $$.a('.isRight');
            const id = $$.a('.id');
            const start_width_actual = $$.a('.start_width_actual');
            const max = isRight ?
                $$.a('<<<.#width') - $$.a(`<<<.col_left[${id}]`) - $$.a('<<<.ofsHor') - start_width_actual :
                $$.a(`<<<.col_left[${id}]`) + $$.a('.start_ofsHor') - $$.a('<<<.col_fixed_width');
            const min = $$.a('<<<.col_width_min') - start_width_actual;
            const delta = Math.min(max, Math.max(min, (clientX - start_clientX) * (isRight ? 1 : -1)));
            if (!isRight)
                $$.a('<<<.ofsHor', $$.a('.start_ofsHor') - delta);
            $$.a(`<<<.col_width_actual[${id}]`, start_width_actual + delta);
        }
        function resizeFini(dontSkip = true) {
            const clientX = $$.a('.start_clientX');
            if (clientX == -1)
                return false;
            if (dontSkip) {
                const id = $$.a('.id');
                const col_width_excess = $$.a('<<<.col_width_excess');
                let width;
                if (col_width_excess <= 0) {
                    width = $$.a(`<<<.col_width_actual[${id}]`);
                }
                else {
                    const delta = $$.a(`<<<.col_width_actual[${id}]`) - $$.a('.start_width_actual');
                    const col_width_sum = $$.a('<<<.col_width_sum');
                    const col_width = $$.a(`<<<.col_width[${id}]`);
                    const k = col_width_excess / col_width_sum * col_width + delta;
                    const gamma = (col_width_sum * k - col_width * col_width_excess) / ((col_width_sum - k) - (col_width - col_width_excess));
                    width = $$.a('.start_width') + Math.min(gamma, col_width_excess);
                }
                $$.a(`<<<.col_width[${id}]`, width);
                $$.a(`<<<.col_width_actual[${id}]`, null);
                const [min, max] = ofsHor_min_max($$.a('<<<.col_fixed_width'), $$.a(`<<<.col_width_sum_actual`), $$.a('<<<.#width'));
                const to = ofsHor_adjusted($$.a('<<<.ofsHor'), min, max);
                const prop_isResizing = $$.a.get('<.isResizing');
                $$.a('<<<.ofsHor', $$.$me_atom2_anim({
                    to,
                    fini: () => {
                        prop_isResizing.value(false);
                    },
                }));
            }
            $$.a('.start_clientX', -1);
            return dontSkip;
        }
        const list = {
            base: $$.$me_list,
            dispatch: (dispatch_name, dispatch_arg) => {
                if (dispatch_name == 'get_row_open') {
                    const row_opens = $$.a('.row_opens');
                    dispatch_arg.val = row_opens.has(dispatch_arg.idx);
                    return true;
                }
                else if (dispatch_name == 'set_row_open') {
                    const row_opens = $$.a('.row_opens');
                    if (dispatch_arg.val) {
                        row_opens.add(dispatch_arg.idx);
                    }
                    else if (row_opens.has(dispatch_arg.idx)) {
                        row_opens.delete(dispatch_arg.idx);
                    }
                    return true;
                }
                if (dispatch_name == 'get_cell_text') {
                    const { rec_idx, col_id, tag } = dispatch_arg;
                    const cell_text_store = $$.a('.cell_text_store');
                    const store_rec = cell_text_store[rec_idx];
                    if (store_rec) {
                        const result = store_rec[col_id];
                        if (result != null) {
                            dispatch_arg.val = result;
                            return true;
                        }
                    }
                    const col = $$.a(`<.col[${col_id}]`);
                    if (col.fld) {
                        const rec = by_idx[rec_idx] || (by_idx[rec_idx] = new Set());
                        for (const s of col.fld)
                            rec.add(s);
                        const row_count = $$.a('.row_count');
                        if (timerId == null) {
                            const path = $$.a('.provider');
                            const row_count = $$.a('.row_count');
                            const rec_idx_max = $$.a('.rec_idx_max');
                            timerId = setTimeout(() => {
                                timerId = null;
                                let idx_min, idx_max;
                                const ss = new Set();
                                for (const idx in by_idx) {
                                    if (idx_min == null || idx_min > +idx)
                                        idx_min = +idx;
                                    if (idx_max == null || idx_max < +idx)
                                        idx_max = +idx;
                                    for (const s of by_idx[idx])
                                        ss.add(s);
                                }
                                const to = Math.min(rec_idx_max, idx_max + Math.max(10, row_count));
                                for (let idx = Math.max(0, idx_min - Math.max(10, row_count)); idx <= to; idx++)
                                    by_idx[idx] = ss;
                                $$.a.dispatch(path, 'get_recs', { by_idx });
                            });
                        }
                    }
                    dispatch_arg.val = '';
                    return true;
                }
                else if (dispatch_name == 'recs') {
                    const cell_text_store = $$.a('.cell_text_store');
                    const rec_fld_store = $$.a('.rec_fld_store');
                    const influence = $$.a('<.influence');
                    const by_idx = dispatch_arg.by_idx;
                    const cols = $$.a('<.cols');
                    const changed = {};
                    let changed_did = false;
                    for (const idx in by_idx) {
                        const src = by_idx[idx];
                        const rec = rec_fld_store[idx] || (rec_fld_store[idx] = {});
                        const influenced = new Set();
                        for (const s in src) {
                            if (rec[s] == src[s])
                                continue;
                            rec[s] = src[s];
                            const ss = influence[s];
                            for (const col_id of ss)
                                influenced.add(col_id);
                        }
                        COL: for (const col_id of influenced) {
                            const col = cols[col_id];
                            const fn = col.fn;
                            if (!fn)
                                continue;
                            const masters = [];
                            for (const s of col.fld) {
                                const val = rec[s];
                                masters.push(val);
                            }
                            const text = fn(...masters);
                            if (!text)
                                continue;
                            const text_rec = cell_text_store[idx] || (cell_text_store[idx] = {});
                            if (text_rec[col_id] == text)
                                continue;
                            text_rec[col_id] = text;
                            const rec_changed = changed[idx] || (changed[idx] = new Set());
                            rec_changed.add(col_id);
                            changed_did = true;
                        }
                    }
                    if (changed_did) {
                        let i = 0;
                        let idx_min, idx_max;
                        $$.a.dispatch('', 'iterate_rows', (row_i) => {
                            const idx = $$.a(`.rec_idx[${row_i}]`);
                            if (idx_min == null || idx_min > +idx)
                                idx_min = +idx;
                            if (idx_max == null || idx_max < +idx)
                                idx_max = +idx;
                            const rec = changed[idx];
                            if (!rec)
                                return;
                            for (const col_id of rec) {
                                const text = cell_text_store[idx][col_id];
                                $$.a(`.cell_text[${row_i}][${col_id}]`, text);
                            }
                            if (++i > 50) {
                                console.error(i);
                                return false;
                            }
                        });
                        const lim = 2 * Math.max(10, $$.a('.row_count'));
                        idx_min -= lim;
                        idx_max += lim;
                        for (const idx in cell_text_store)
                            if (+idx < idx_min || +idx > idx_max)
                                delete cell_text_store[idx];
                        for (const idx in rec_fld_store)
                            if (+idx < idx_min || +idx > idx_max)
                                delete rec_fld_store[idx];
                    }
                    return true;
                }
                return false;
            },
            prop: {
                rec_fld_store: () => ({}),
                disabledScroll: '<@header.colSelected',
                hidden_curtain: '<@header.colSelected',
                cell_text_store: () => ({}),
                row_opens_store: () => new Map(),
                row_opens: $$.$me_atom2_prop(['.provider_tag', '.row_opens_store'], ({ masters: [tag, holder] }) => holder[tag] || (holder[tag] = new Set())),
                row_count: $$.$me_atom2_prop(['/.#viewportHeight', '.row_height_min', '.header_height', '.rec_count'], ({ masters: [height, row_height_min, header_height, rec_count] }) => rec_count < 0 ? 0 :
                    2 + Math.min(rec_count, Math.ceil(Math.max(0, height - header_height) / row_height_min)), ({ prev, val }) => {
                    const result = prev != null && prev > val ? prev : val;
                    return result;
                }),
                row_open: $$.$me_atom2_prop({
                    keys: ['.row_i'],
                    masters: $$.$me_atom2_prop_masters(['.rec_count', '.row_i_min', '.row_i_max'], ({ key: [row_i], masters: [rec_count, row_i_min, row_i_max] }) => rec_count <= 0 || $$.$me_list_row_i_out_of_range_is(+row_i, row_i_min, row_i_max) ? [] :
                        [`.rec_idx[${row_i}]`, '._provider', '.provider_tag']),
                }, ({ len, masters: [rec_idx, _provider, provider_tag] }) => {
                    const result = !len || !_provider || !provider_tag ? -1 : get_row_open(rec_idx, _provider, provider_tag);
                    return result;
                }, ({ key: [row_i], val, prev }) => {
                    if (val == null || val < 0 ||
                        +row_i >= $$.a('.row_count') ||
                        $$.$me_list_row_i_out_of_range_is(+row_i, $$.a('.row_i_min'), $$.a('.row_i_max')))
                        return;
                    set_row_open($$.a(`.rec_idx[${row_i}]`), $$.a('._provider'), $$.a('.provider_tag'), val);
                }),
                adjust_row_height_source: $$.$me_atom2_prop({
                    keys: ['.row_i'],
                    masters: $$.$me_atom2_prop_masters(['.rec_count', '.row_open[]', '.row_i_min', '.row_i_max'], ({ key: [row_i], masters: [rec_count, row_open, row_i_min, row_i_max] }) => rec_count <= 0 || $$.$me_list_row_i_out_of_range_is(+row_i, row_i_min, row_i_max) ? [] :
                        !row_open ? ['.row_height_min'] :
                            ['.row_height_min', `@row[${row_i}]@content@comment.#height`]),
                }, ({ len, masters: [row_height_min, comment_height] }) => !len ? null : len == 1 ? row_height_min : [row_height_min, comment_height], ({ key: [row_i], val, prev }) => {
                    if (!val)
                        return;
                    const height = !Array.isArray(val) ? val : val[0] + val[1];
                    $$.a(`.row_height_source[${row_i}]`, height);
                }),
                cell_text: $$.$me_atom2_prop({ keys: ['.row_i', '<.col_ids'], masters: ['.rec_idx[]', '._provider', '.provider_tag'] }, ({ key: [row_i, col_id], masters: [rec_idx, _provider, tag] }) => {
                    const dispatch_arg = { tag, rec_idx, col_id };
                    $$.a.dispatch(_provider, 'get_cell_text', dispatch_arg);
                    return dispatch_arg.val;
                }),
                header_height: () => 0,
                header_content: () => ({}),
                row_content: $$.$me_atom2_prop({ keys: ['.row_i'] }, ({ key: [row_i] }) => ({
                    base: row,
                    prop: {
                        row_i: () => row_i,
                    },
                })),
                row_cursor: () => '',
                '#order': () => ['row', 'cursor'],
            },
            elem: {
                header: () => null,
                cursor: () => ({
                    base: cursor,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<.row_cursor'], ({ masters: [row_i] }) => !row_i),
                        '#ofsVer': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<.row_cursor'], ({ masters: [row_i] }) => !row_i ? [] : [`<.row_top[${row_i}]`]), ({ len, masters: [top] }) => !len ? null : top),
                        '#height': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<.row_cursor'], ({ masters: [row_i] }) => !row_i ? [] : [`<.row_height[${row_i}]`]), ({ len, masters: [val] }) => !len ? null : val),
                        '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor'], ({ masters: [width, ofsHor] }) => width - 2 * ofsHor),
                    },
                }),
            },
        };
        const cursor = {
            prop: {
                '#ofsHor': () => 2,
            },
            style: {
                boxShadow: () => '0 1px 6px 0 rgba(0, 0, 0, 0.5)',
                pointerEvents: () => 'none',
            },
        };
        const row = {
            prop: {
                '#order': () => ['cell', 'fixed'],
                '#isHover': () => false,
                row_cursor_src: $$.$me_atom2_prop(['.#isHover', '.row_i', '<<<@header.colSelected'], ({ masters: [isHover, row_i, colSelected] }) => colSelected || !isHover ? '' : row_i, ({ atom, val }) => {
                    $$.$nl_search_grid_cursor({ origin: atom, val: val });
                }),
            },
            style: {
                overflow: () => 'hidden',
            },
            elem: {
                cells: () => ({
                    prop: {
                        '#height': '<<<.row_height_min',
                        '#order': () => ['cells', 'fixed'],
                    },
                    elem: {
                        fixed: () => ({
                            prop: {
                                '#width': '<<<<<.col_fixed_width',
                            },
                            control: {
                                text: () => ({
                                    base: $$.$me_label,
                                    prop: Object.assign({ '#width': '<.#width', '#height': '<.#height' }, cell_borders, { colorBackground: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#d8dce3' : '#6e7581'), align: () => $$.$me_align.center, fontSize: () => 14, paddingHor: () => 4, text: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<<<.row_i'], ({ masters: [row_i] }) => [`<<<<<.rec_idx[${row_i}]`])) }),
                                }),
                            },
                        }),
                        cells: () => ({
                            prop: {
                                '#width': '<<<<<.col_width_sum_actual',
                                '#ofsHor': '<<<<<.ofsHor',
                                '#cursor': () => 'pointer',
                            },
                            event: {
                                clickOrTap: () => {
                                    const row_open = $$.a(`<<<<.row_open[${$$.a('<<.row_i')}]`);
                                    $$.a(`<<<<.row_open[${$$.a('<<.row_i')}]`, !row_open);
                                    return true;
                                },
                            },
                            control: {
                                cell: $$.$me_atom2_prop({ keys: ['<<<<<.col_ids'] }, ({ key: [id] }) => ({
                                    base: $$.$me_label,
                                    prop: Object.assign({ '#hidden': $$.$me_atom2_prop([`<<<<<<.col_left[${id}]`, `<<<<<<.col_width_actual[${id}]`, `<<<<<<.col_fixed_width`, `<<<<<<.#width`, `<<<<<<.ofsHor`], ({ masters: [col_left, col_width_actual, col_fixed_width, parent_width, ofsHor] }) => ofsHor + col_left > parent_width || ofsHor + col_left + col_width_actual <= col_fixed_width) }, cell_borders, { colorBackground: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#F5F8F8' : '#878f9b'), fontSize: () => 14, paddingHor: () => 4, alignVer: () => $$.$me_align.center, alignHor: `<<<<<<.col_align[${id}]`, '#width': `<<<<<<.col_width_actual[${id}]`, '#ofsHor': `<<<<<<.col_left[${id}]`, '#height': '<<<<<<.row_height_min', text: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<<<.row_i'], ({ masters: [row_i] }) => [`<<<<<.cell_text[${row_i}][${id}]`])) }),
                                })),
                            },
                        }),
                    },
                }),
                comment: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.row_i'], ({ masters: [row_i] }) => ['<<.rec_count', `<<.row_open[${row_i}]`]), ({ masters: [rec_count, row_open] }) => rec_count <= 0 || !row_open ? null : {
                    dom: {
                        innerText: () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare nisl et tortor euismod, ut consequat nunc vehicula. Integer sit amet quam ante. Integer bibendum ante vel semper auctor. Mauris vitae erat gravida, ultrices libero id, pellentesque enim. Phasellus molestie malesuada tellus, in commodo lectus dictum at. Aliquam malesuada venenatis tellus a feugiat. Ut ac.'
                    },
                    prop: {
                        '#ofsVer': '<<<.row_height_min',
                        '#height': () => null,
                        '#width': '<.#width',
                    },
                    style: {
                        fontSize: () => 14,
                        padding: () => 8,
                        boxSizing: () => 'border-box',
                        userSelect: () => 'text',
                    },
                }),
            },
        };
        const cell_borders = {
            borderWidthRight: () => 1,
            colorBorderRight: () => '#adb0b8',
            borderWidthBottom: () => 1,
            colorBorderBottom: () => '#adb0b8',
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grid.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_search_panel_result_cols = {
            photo: {
                caption: 'Фото',
                width: 37,
            },
            'Комнат': {
                align: $$.$me_align.center,
                width: 42,
                fld: ['total_room_count', 'offer_room_count'],
                fn: (total_room_count, offer_room_count) => (!offer_room_count ? '' : offer_room_count + '/') +
                    (total_room_count == null ? '?' : total_room_count)
            },
            'Метро/ЖД': {
                width: 170,
                fld: ['geo_cache_subway_station_name_1'],
                fn: (geo_cache_subway_station_name_1) => geo_cache_subway_station_name_1,
            },
            'От станции': {
                align: $$.$me_align.center,
                width: 50,
                fld: ['walking_access_1', 'transport_access_1'],
                fn: (walking_access_1, transport_access_1) => walking_access_1 ? walking_access_1 + 'п' :
                    transport_access_1 ? transport_access_1 + 'т' :
                        '',
            },
            'Адрес': {
                width: 220,
                fld: ['geo_cache_street_name', 'geo_cache_building_name'],
                fn: (geo_cache_street_name, geo_cache_building_name) => geo_cache_street_name ? (!geo_cache_building_name ? geo_cache_street_name :
                    geo_cache_street_name + ', ' + geo_cache_building_name) : geo_cache_building_name ? geo_cache_building_name : ''
            },
            'Дом': {
                width: 64,
                align: $$.$me_align.center,
                fld: ['storey', 'storeys_count', 'walls_material_type_id'],
                fn: (storey, storeys_count, walls_material_type_id) => (!storey ? '?' : storey) + '/' +
                    (!storeys_count ? '?' : storeys_count) + ' ' +
                    dic_fld_value('walls_material_type', walls_material_type_id, 'code', '?')
            },
            'Балкон': {
                width: 38,
                align: $$.$me_align.center,
                fld: ['balcony_type_id'],
                fn: (type_id) => dic_fld_value('balcony_type', type_id, 'code', '?'),
            },
            'Санузел': {
                width: 38,
                fld: ['water_closet_type_id'],
                fn: (type_id) => dic_fld_value('water_closet_type', type_id, 'code', '?'),
            },
            'Парковка': {
                width: 38,
                fld: ['parking_type_id'],
                fn: (type_id) => dic_fld_value('parking_type', type_id, 'code', '?'),
            },
            'Территория': {
                width: 112,
                fld: ['territory_type_id'],
                fn: (type_id) => dic_fld_value('territory_type', type_id, 'code', '?'),
            },
            'Окна': {
                width: 41,
                fld: ['window_overlook_type_id'],
                fn: (type_id) => dic_fld_value('window_overlook_type', type_id, 'code', '?'),
            },
            'Ремонт': {
                width: 92,
                fld: ['apartment_condition_type_id'],
                fn: (type_id) => dic_fld_value('apartment_condition_type', type_id, 'code', '?'),
            },
            'Лифт': {
                width: 41,
                fld: ['elevator_type_id'],
                fn: (type_id) => dic_fld_value('elevator_type', type_id, 'code', '?'),
            },
            'Площадь': {
                align: $$.$me_align.center,
                width: 130,
                fld: ['total_square', 'life_square', 'kitchen_square'],
                fn: (total_square, life_square, kitchen_square) => (total_square || '?') + '/' + (life_square || '?') + '/' + (kitchen_square || '?'),
            },
            'Площадь комнат': {
                align: $$.$me_align.center,
                width: 138,
                fld: ['square_explication'],
                fn: (square_explication) => square_explication,
            },
            'Ипотека': {
                width: 41,
            },
            'Цена': {
                align: $$.$me_align.right,
                caption: 'Цена ₽',
                width: 96,
                fld: ['price_rub'],
                fn: (val) => {
                    var x = (val + '').split('.');
                    var x1 = x[0];
                    var x2 = x.length > 1 ? '.' + x[1] : '';
                    var rgx = /(\d+)(\d{3})/;
                    while (rgx.test(x1))
                        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
                    return x1 + x2;
                },
            },
            'Цена, $': {
                hidden: true,
                align: $$.$me_align.right,
                caption: 'Цена $',
                width: 96,
                fld: ['price_usd'],
                fn: (val) => {
                    var x = (val + '').split('.');
                    var x1 = x[0];
                    var x2 = x.length > 1 ? '.' + x[1] : '';
                    var rgx = /(\d+)(\d{3})/;
                    while (rgx.test(x1))
                        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
                    return x1 + x2;
                },
            },
            'Цена, €': {
                hidden: true,
                align: $$.$me_align.right,
                caption: 'Цена €',
                width: 96,
                fld: ['price_eur'],
                fn: (val) => {
                    var x = (val + '').split('.');
                    var x1 = x[0];
                    var x2 = x.length > 1 ? '.' + x[1] : '';
                    var rgx = /(\d+)(\d{3})/;
                    while (rgx.test(x1))
                        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
                    return x1 + x2;
                },
            },
            'Цена за кв.м.': {
                align: $$.$me_align.right,
                caption: '₽/м²',
                width: 93,
                fld: ['meter_price_rub'],
                fn: (meter_price_rub) => {
                    var x = (Math.round(meter_price_rub) + '').split('.');
                    var x1 = x[0];
                    var x2 = x.length > 1 ? '.' + x[1] : '';
                    var rgx = /(\d+)(\d{3})/;
                    while (rgx.test(x1))
                        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
                    return x1 + x2;
                },
            },
            'Цена $ за кв.м.': {
                hidden: true,
                align: $$.$me_align.right,
                caption: '$/м²',
                width: 93,
                fld: ['meter_price_usd'],
                fn: (val) => {
                    var x = (Math.round(val) + '').split('.');
                    var x1 = x[0];
                    var x2 = x.length > 1 ? '.' + x[1] : '';
                    var rgx = /(\d+)(\d{3})/;
                    while (rgx.test(x1))
                        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
                    return x1 + x2;
                },
            },
            'Цена € за кв.м.': {
                hidden: true,
                align: $$.$me_align.right,
                caption: '€/м²',
                width: 93,
                fld: ['meter_price_eur'],
                fn: (val) => {
                    var x = (Math.round(val) + '').split('.');
                    var x1 = x[0];
                    var x2 = x.length > 1 ? '.' + x[1] : '';
                    var rgx = /(\d+)(\d{3})/;
                    while (rgx.test(x1))
                        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
                    return x1 + x2;
                },
            },
            'Дата': {
                align: $$.$me_align.right,
                width: 85,
                fld: ['pub_datetime'],
                fn: (val) => {
                    const dt = new Date(val);
                    return dt.getDate() + '.' + (dt.getMonth() + 1 + '').padStart(2, '0') + '.' + dt.getFullYear();
                },
            },
            'Дата создания': {
                hidden: true,
                align: $$.$me_align.right,
                width: 85,
                fld: ['creation_datetime'],
                fn: (val) => {
                    const dt = new Date(val);
                    return dt.getDate() + '.' + (dt.getMonth() + 1 + '').padStart(2, '0') + '.' + dt.getFullYear();
                },
            },
            'Год постройки': {
                hidden: true,
                align: $$.$me_align.center,
                width: 85,
                fld: ['built_year'],
                fn: (val) => {
                    return val;
                },
            },
            'Источник': {
                width: 140,
                fld: ['broker', 'media_name'],
                fn: (broker, media_name) => broker && broker.short_name ? broker.short_name : media_name,
            },
            'Телефон': {
                width: 260,
                fld: ['phone_list'],
                fn: (phone_list) => !phone_list ? '' : phone_list
                    .split(/\D+/)
                    .map(phone => '8-' + phone.slice(1, 4) + '-' + phone.slice(4, 7) + '-' + phone.slice(7, 9) + '-' + phone.slice(9, 11)).join(', ')
            },
        };
        const _dics = new Map();
        function dic_fld_value(dic_name, id, fld, default_value) {
            let result;
            let dic = _dics.get(dic_name);
            if (!dic) {
                const dic_def = DICTIONARIES[dic_name];
                if (dic_def) {
                    dic = new Map(dic_def.map((item) => [item.id, item]));
                    _dics.set(dic_name, dic);
                }
            }
            if (dic && dic.has(id)) {
                const value = dic.get(id);
                if (value)
                    result = value[fld];
            }
            if (result === void 0 && default_value !== void 0)
                result = default_value;
            return result;
        }
        const DICTIONARIES = {
            apartment_condition_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "треб.кап/р", "name": "требуется капитальный ремонт" }, { "id": 3, "code": "без отд.", "name": "без отделки" }, { "id": 4, "code": "треб.рем.", "name": "требуется ремонт" }, { "id": 5, "code": "ср.сост.", "name": "среднее состояние" }, { "id": 6, "code": "хор.сост.", "name": "хорошее состояние" }, { "id": 8, "code": "отл.сост.", "name": "отличное состояние" }, { "id": 9, "code": "евр.рем.", "name": "евроремонт" }, { "id": 10, "code": "дизайн.рем.", "name": "дизайнерский ремонт" }, { "id": 11, "code": "перв.отд.", "name": "первичная отделка" }],
            building_batch: [{ "id": 0, "name": "" }, { "id": 1, "name": "02/98-НМ" }, { "id": 2, "name": "1385 АР-3" }, { "id": 3, "name": "1605/12" }, { "id": 4, "name": "1605/9" }, { "id": 5, "name": "1605/Б" }, { "id": 6, "name": "17/2004-АС" }, { "id": 7, "name": "1МГ-600" }, { "id": 8, "name": "1МГ-601" }, { "id": 9, "name": "2-71/358" }, { "id": 10, "name": "2548-01-АР" }, { "id": 11, "name": "2548-02-АР" }, { "id": 12, "name": "32/2005-АС" }, { "id": 13, "name": "349/01" }, { "id": 14, "name": "355/24" }, { "id": 15, "name": "7040-01" }, { "id": 16, "name": "I-303" }, { "id": 17, "name": "I-335" }, { "id": 18, "name": "I-447" }, { "id": 19, "name": "I-510" }, { "id": 20, "name": "I-511" }, { "id": 21, "name": "I-513" }, { "id": 22, "name": "I-515" }, { "id": 23, "name": "I605-АМ" }, { "id": 24, "name": "II-04" }, { "id": 25, "name": "II-05" }, { "id": 26, "name": "II-08" }, { "id": 27, "name": "II-18" }, { "id": 28, "name": "II-18-01-МН" }, { "id": 29, "name": "II-18-31/12" }, { "id": 30, "name": "II-29" }, { "id": 31, "name": "II-32" }, { "id": 32, "name": "II-49" }, { "id": 33, "name": "II-57" }, { "id": 34, "name": "II-68-02" }, { "id": 35, "name": "II-68-03" }, { "id": 36, "name": "II-89-01-МН" }, { "id": 37, "name": "III/17" }, { "id": 38, "name": "VI-23" }, { "id": 39, "name": "VII-51" }, { "id": 40, "name": "VII-58" }, { "id": 41, "name": "А-41K" }, { "id": 42, "name": "башня Вулыха" }, { "id": 43, "name": "Бекерон" }, { "id": 44, "name": "БОД-1" }, { "id": 45, "name": "В-2000" }, { "id": 46, "name": "В-2002" }, { "id": 47, "name": "В-2005" }, { "id": 48, "name": "ГМС-1" }, { "id": 49, "name": "ГМС-3" }, { "id": 50, "name": "И-1168 А3" }, { "id": 51, "name": "И-1168 А4" }, { "id": 52, "name": "И-1233" }, { "id": 53, "name": "И-1254" }, { "id": 54, "name": "И-1262А" }, { "id": 55, "name": "И-1429" }, { "id": 56, "name": "И-1430" }, { "id": 57, "name": "И-1459-132" }, { "id": 58, "name": "И-1491-17" }, { "id": 59, "name": "И-1501" }, { "id": 60, "name": "И-155" }, { "id": 61, "name": "И-155МК" }, { "id": 62, "name": "И-155Н" }, { "id": 63, "name": "И-1602" }, { "id": 64, "name": "И-1677" }, { "id": 65, "name": "И-1723" }, { "id": 66, "name": "И-1724" }, { "id": 67, "name": "И-1731" }, { "id": 68, "name": "И-1782/1" }, { "id": 69, "name": "И-1812/1" }, { "id": 70, "name": "И-1834" }, { "id": 71, "name": "И-1836" }, { "id": 72, "name": "И-1838" }, { "id": 73, "name": "И-1839" }, { "id": 74, "name": "И-1849" }, { "id": 75, "name": "И-1932" }, { "id": 76, "name": "И-208" }, { "id": 77, "name": "И-209А" }, { "id": 78, "name": "И-2342" }, { "id": 79, "name": "И-241" }, { "id": 80, "name": "И-491А" }, { "id": 81, "name": "И-515-5М" }, { "id": 82, "name": "И-515/9ш" }, { "id": 83, "name": "И-522" }, { "id": 84, "name": "И-522А" }, { "id": 85, "name": "И-679" }, { "id": 86, "name": "И-700" }, { "id": 87, "name": "И-700А" }, { "id": 88, "name": "И-760А" }, { "id": 89, "name": "И-79-99" }, { "id": 90, "name": "И-99-47/405" }, { "id": 91, "name": "И-99-47/406" }, { "id": 92, "name": "индивидуальный проект" }, { "id": 93, "name": "ИП-46С" }, { "id": 94, "name": "ИШ3/12" }, { "id": 95, "name": "К-7" }, { "id": 96, "name": "КМС-101" }, { "id": 97, "name": "Колос" }, { "id": 98, "name": "КОПЭ" }, { "id": 99, "name": "КОПЭ-М-ПАРУС" }, { "id": 100, "name": "КТЖС" }, { "id": 101, "name": "КТЖС-11/22" }, { "id": 102, "name": "1МГ-300" }, { "id": 103, "name": "МОНОЛИТ" }, { "id": 105, "name": "МЭС-84" }, { "id": 107, "name": "НП-46с" }, { "id": 108, "name": "П-06" }, { "id": 109, "name": "П-111" }, { "id": 110, "name": "П-111М" }, { "id": 111, "name": "П-111МО" }, { "id": 112, "name": "П-12-31/12" }, { "id": 113, "name": "II-14" }, { "id": 114, "name": "П-14/35" }, { "id": 115, "name": "П-18/22" }, { "id": 116, "name": "П-20" }, { "id": 117, "name": "П-21" }, { "id": 118, "name": "П-22" }, { "id": 119, "name": "П-23" }, { "id": 120, "name": "П-28" }, { "id": 121, "name": "П-29" }, { "id": 122, "name": "П-3" }, { "id": 123, "name": "П-3/16" }, { "id": 124, "name": "П-3/17" }, { "id": 125, "name": "П-3/22" }, { "id": 126, "name": "П-30" }, { "id": 127, "name": "П-31" }, { "id": 128, "name": "П-32" }, { "id": 129, "name": "П-321-60" }, { "id": 130, "name": "II-34" }, { "id": 131, "name": "II-35" }, { "id": 132, "name": "П-37" }, { "id": 133, "name": "II-38" }, { "id": 134, "name": "П-39" }, { "id": 135, "name": "П-3М" }, { "id": 136, "name": "П-4" }, { "id": 137, "name": "П-40" }, { "id": 138, "name": "П-41" }, { "id": 139, "name": "П-42" }, { "id": 140, "name": "П-43" }, { "id": 141, "name": "П-44" }, { "id": 142, "name": "П-44К" }, { "id": 143, "name": "П-44М" }, { "id": 144, "name": "П-44Т" }, { "id": 145, "name": "П-44ТМ" }, { "id": 146, "name": "П-45" }, { "id": 147, "name": "П-46" }, { "id": 148, "name": "П-46М" }, { "id": 149, "name": "П-47" }, { "id": 150, "name": "П-49 Д" }, { "id": 151, "name": "П-50" }, { "id": 152, "name": "П-53" }, { "id": 153, "name": "П-55" }, { "id": 154, "name": "П-55М" }, { "id": 155, "name": "II-29-41/37" }, { "id": 156, "name": "II-66" }, { "id": 157, "name": "II-67" }, { "id": 158, "name": "II-68" }, { "id": 159, "name": "ПД-4" }, { "id": 160, "name": "ПД-4/12" }, { "id": 161, "name": "Пд4-1/12Н1" }, { "id": 162, "name": "ПД4-1/8Н1" }, { "id": 163, "name": "ПЗМ-1/14" }, { "id": 164, "name": "ПЗМ-1/16" }, { "id": 165, "name": "ПЗМ-2/16" }, { "id": 166, "name": "ПЗМ-3/16" }, { "id": 167, "name": "ПП-70" }, { "id": 168, "name": "Призма" }, { "id": 169, "name": "РД-90" }, { "id": 170, "name": "С-111М" }, { "id": 171, "name": "С-220" }, { "id": 172, "name": "С-222" }, { "id": 173, "name": "ТИП-441" }, { "id": 174, "name": "ЦВП-4570-II-63" }, { "id": 175, "name": "Юбилейный" }, { "id": 176, "name": "II-02" }, { "id": 177, "name": "II-01" }, { "id": 178, "name": "II-18-01/08" }, { "id": 179, "name": "II-18-01/09" }, { "id": 180, "name": "1605-АМ/9" }, { "id": 181, "name": "1605-АМ/12" }, { "id": 182, "name": "II-49П" }, { "id": 183, "name": "II-49Д" }, { "id": 184, "name": "II-03" }, { "id": 185, "name": "II-18-01/12" }, { "id": 186, "name": "II-18-02/12" }, { "id": 187, "name": "II-18/12" }, { "id": 188, "name": "II-20" }, { "id": 189, "name": "1605-АМ/5" }, { "id": 190, "name": "И-III-3" }, { "id": 191, "name": "II-28" }, { "id": 192, "name": "II-68-02/16М" }, { "id": 193, "name": "КПД-4570" }, { "id": 194, "name": "II-68-01" }, { "id": 195, "name": "1-515/9" }, { "id": 196, "name": "К4/16" }, { "id": 197, "name": "И-155Б" }, { "id": 198, "name": "1-515/5" }, { "id": 199, "name": "II-18-01/12А" }, { "id": 200, "name": "СМ-1 " }, { "id": 201, "name": "П-44ТМ/25" }, { "id": 202, "name": "И-701" }, { "id": 203, "name": "И-155-с" }, { "id": 204, "name": "Айсберг" }, { "id": 205, "name": "II-14/35" }, { "id": 206, "name": "И-99-47/407" }, { "id": 207, "name": "П-101" }, { "id": 208, "name": "1-300" }, { "id": 209, "name": "II-18-01/09К" }, { "id": 210, "name": "И-1900" }, { "id": 211, "name": "М-10" }, { "id": 212, "name": "МПСМ" }, { "id": 213, "name": "ИП-46М" }, { "id": 214, "name": "П-30М" }, { "id": 215, "name": "II-07" }, { "id": 216, "name": "ПБ-01" }, { "id": 217, "name": "И-1414" }, { "id": 218, "name": "И-2111" }, { "id": 219, "name": "1605-АМЛ/5" }, { "id": 220, "name": "1-447С-26" }, { "id": 221, "name": "1-447С-1" }, { "id": 222, "name": "1-447С-36" }, { "id": 223, "name": "1-447С-2" }, { "id": 224, "name": "1-447С-5" }, { "id": 225, "name": "1-446" }, { "id": 226, "name": "ПБ-02" }, { "id": 227, "name": "КПД-4572А" }, { "id": 228, "name": "II-68-04" }, { "id": 229, "name": "124-124-1" }, { "id": 231, "name": "1605-А" }, { "id": 232, "name": "1-439" }, { "id": 233, "name": "Мм1-3" }, { "id": 234, "name": "И-1168" }, { "id": 235, "name": "СМ-06" }, { "id": 236, "name": "СМ-03" }, { "id": 237, "name": "1-419" }, { "id": 238, "name": "1-203" }, { "id": 239, "name": "ЭС-24" }, { "id": 240, "name": "8966" }, { "id": 242, "name": "1-126" }, { "id": 243, "name": "1-225" }, { "id": 244, "name": "1-402" }, { "id": 245, "name": "16/2188" }, { "id": 246, "name": "Т-1" }, { "id": 247, "name": "Т-3" }, { "id": 248, "name": "1-233" }, { "id": 249, "name": "1-260" }, { "id": 250, "name": "К-8-49" }, { "id": 251, "name": "1-255" }, { "id": 252, "name": "КС-8-50" }, { "id": 253, "name": "Д-23" }, { "id": 254, "name": "Д-25Н1" }, { "id": 256, "name": "ПП-83" }, { "id": 258, "name": "К2/16" }, { "id": 259, "name": "К7/16" }, { "id": 260, "name": "К8/16" }, { "id": 262, "name": "1-464А" }, { "id": 263, "name": "КОПЭ-87" }, { "id": 264, "name": "П-121М" }, { "id": 265, "name": "121-041" }, { "id": 266, "name": "121-042" }, { "id": 267, "name": "121-043" }, { "id": 268, "name": "II-29-208" }, { "id": 269, "name": "II-29-3" }, { "id": 270, "name": "II-29-9" }, { "id": 271, "name": "II-29-160" }, { "id": 272, "name": "ПД-1" }, { "id": 273, "name": "И-02/98-НМ" }, { "id": 274, "name": "1-467" }, { "id": 275, "name": "ЭЖРЧС" }, { "id": 276, "name": "П-3МК" }, { "id": 277, "name": "II-18-02/09" }, { "id": 278, "name": "ПД-3" }, { "id": 279, "name": "И-580" }, { "id": 280, "name": "II-18-03/12" }, { "id": 281, "name": "К-14" }, { "id": 282, "name": "И-700Н" }, { "id": 283, "name": "Юникон" }, { "id": 284, "name": "111-121" }, { "id": 285, "name": "1-211" }, { "id": 286, "name": "II-68-01/22" }, { "id": 287, "name": "Лебедь" }, { "id": 288, "name": "И-99-47" }],
            balcony_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "-", "name": "нет" }, { "id": 2, "code": "Б", "name": "балкон" }, { "id": 3, "code": "Л", "name": "лоджия" }, { "id": 4, "code": "БЛ", "name": "балкон + лоджия" }, { "id": 5, "code": "2Б", "name": "два балкона" }, { "id": 6, "code": "2Л", "name": "две лоджии" }, { "id": 7, "code": "3Л", "name": "три лоджии" }, { "id": 8, "code": "4Л", "name": "четыре лоджии" }, { "id": 9, "code": "3Б", "name": "три балкона" }, { "id": 10, "code": "Б2Л", "name": "балкон + две лоджии" }, { "id": 11, "code": "2Б2Л", "name": "два балкона + две лоджии" }, { "id": 12, "code": "Эрк", "name": "эркер" }, { "id": 13, "code": "ЭркЛ", "name": "эркер + лоджия" }, { "id": 14, "code": "*Б", "name": "несколько балконов" }, { "id": 15, "code": "*Л", "name": "несколько лоджий" }],
            currency_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "руб", "name": "RUB" }, { "id": 2, "code": "$", "name": "USD" }, { "id": 3, "code": "€", "name": "EUR" }, { "id": 4, "code": "TL", "name": "TL" }, { "id": 5, "code": "BYR", "name": "BYR" }],
            deal_status: [{ "id": 1, "code": "продается/арендуется", "name": "продается/арендуется" }, { "id": 2, "code": "аванс/задаток", "name": "аванс/задаток" }, { "id": 3, "code": "продана/арендована", "name": "продана/арендована" }],
            deal_type: [{ "id": 1, "code": "продажа", "name": "продажа" }, { "id": 2, "code": "аренда", "name": "аренда" }],
            location_type: [{ "id": 13, "code": "ГСК", "name": "ГСК" }, { "id": 14, "code": "ГК", "name": "ГК" }, { "id": 15, "code": "ЖК", "name": "ЖК" }, { "id": 16, "code": "двор", "name": "двор" }, { "id": 17, "code": "паркинг", "name": "паркинг" }],
            electricity_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "-", "name": "нет" }, { "id": 2, "code": "+", "name": "есть" }, { "id": 3, "code": "220В", "name": "220В" }, { "id": 4, "code": "380В", "name": "380В" }, { "id": 5, "code": "П", "name": "в перспективе" }, { "id": 6, "code": "ГУ", "name": "по границе" }, { "id": 7, "code": "10кВ", "name": "10кВ" }, { "id": 8, "code": "И", "name": "иное" }],
            elevator_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "пасс.", "name": "лифт пассажирский" }, { "id": 2, "code": "груз.", "name": "лифт грузовой" }, { "id": 3, "code": "пасс.+ груз.", "name": "лифт пассажирский и лифт грузовой" }, { "id": 4, "code": "нет", "name": "нет лифта" }, { "id": 5, "code": "есть", "name": "есть лифт" }],
            floor_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "-", "name": "полы не настелены", "master_realty_type_id": 1 }, { "id": 2, "code": "Д", "name": "дерево", "master_realty_type_id": 1 }, { "id": 3, "code": "п/д", "name": "паркетная доска", "master_realty_type_id": 1 }, { "id": 4, "code": "ЛМ", "name": "ламинат", "master_realty_type_id": 1 }, { "id": 5, "code": "К", "name": "ковролин", "master_realty_type_id": 1 }, { "id": 6, "code": "П", "name": "паркет", "master_realty_type_id": 1 }, { "id": 7, "code": "ЛН", "name": "линолеум", "master_realty_type_id": 1 }, { "id": 8, "code": "Стяж", "name": "стяжка", "master_realty_type_id": 1 }, { "id": 9, "code": "асфальт", "name": "асфальт", "master_realty_type_id": 4 }, { "id": 10, "code": "бетон", "name": "бетон", "master_realty_type_id": 4 }, { "id": 11, "code": "грунт", "name": "грунт", "master_realty_type_id": 4 }, { "id": 12, "code": "дерево", "name": "дерево", "master_realty_type_id": 4 }, { "id": 13, "code": "металл", "name": "металл", "master_realty_type_id": 4 }, { "id": 14, "code": "полимерное покрытие", "name": "полимерное покрытие", "master_realty_type_id": 4 }],
            gas_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "-", "name": "нет" }, { "id": 2, "code": "+", "name": "есть" }, { "id": 3, "code": "ГУ", "name": "по границе" }, { "id": 4, "code": "П", "name": "перспектива" }, { "id": 5, "code": "Р", "name": "рядом" }, { "id": 6, "code": "Б", "name": "баллоны" }, { "id": 7, "code": "М", "name": "магистральный" }, { "id": 8, "code": "И", "name": "иное" }, { "id": 9, "code": "Ц", "name": "центральный" }],
            habit_class: [{ "id": 1, "name": "эконом" }, { "id": 2, "name": "комфорт" }, { "id": 3, "name": "бизнес" }, { "id": 4, "name": "элитный" }],
            heating_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "-", "name": "нет" }, { "id": 2, "code": "+", "name": "есть" }, { "id": 3, "code": "ЭК", "name": "электрокотел" }, { "id": 4, "code": "ГК", "name": "газовый котел" }, { "id": 5, "code": "ЖТК", "name": "жидкотопливный котел" }, { "id": 6, "code": "АГВ", "name": "автоматический газовый водонагреватель" }, { "id": 7, "code": "П", "name": "печь" }, { "id": 8, "code": "Ц", "name": "центральное" }, { "id": 9, "code": "И", "name": "иное" }],
            media: [{ "id": 0, "name": "Прочие", "is_active": 1, "order_number": 1000 }, { "id": 1, "name": "Руки", "is_active": 1, "order_number": 50 }, { "id": 3, "name": "WinNER (зелёная зона)", "is_active": 1, "order_number": 10 }, { "id": 4, "name": "Крис", "is_active": 0, "order_number": 140 }, { "id": 5, "name": "Realty.dmir.ru", "is_active": 0, "order_number": 60 }, { "id": 6, "name": "БН", "is_active": 1, "order_number": 130 }, { "id": 7, "name": "Навигатор", "is_active": 0, "order_number": 1000 }, { "id": 8, "name": "БКН", "is_active": 1, "order_number": 120 }, { "id": 9, "name": "Собственники", "is_active": 0, "order_number": 900 }, { "id": 11, "name": "Приан", "is_active": 0, "order_number": 150 }, { "id": 12, "name": "eip.ru", "is_active": 0, "order_number": 110 }, { "id": 15, "name": "Sob.ru", "is_active": 1, "order_number": 20 }, { "id": 17, "name": "cian.ru", "is_active": 1, "order_number": 40 }, { "id": 20, "name": "A.baza-winner", "is_active": 0, "order_number": 15 }, { "id": 21, "name": "AVITO.ru", "is_active": 1, "order_number": 30 }, { "id": 22, "name": "WinNER Lite", "is_active": 1, "order_number": 16 }, { "id": 23, "name": "Яндекс", "is_active": 1, "order_number": 70 }, { "id": 24, "name": "WinNER (белая зона)", "is_active": 1, "order_number": 15 }],
            office_class: [{ "id": 2, "name": "A+" }, { "id": 3, "name": "A" }, { "id": 4, "name": "B+" }, { "id": 5, "name": "B" }, { "id": 6, "name": "C+" }, { "id": 7, "name": "C" }, { "id": 8, "name": "D+" }, { "id": 9, "name": "D" }],
            fire_alarm_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "name": "пожарная сигнализация", "code": "пожарная сигнализация" }, { "id": 2, "name": "система пожаротушения", "code": "система пожаротушения" }],
            ownership_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "купля/продажа", "name": "купля/продажа" }, { "id": 2, "code": "ЖСК", "name": "ЖСК" }, { "id": 3, "code": "приватиз.", "name": "приватизация" }, { "id": 4, "code": "дар.", "name": "дарение" }, { "id": 5, "code": "наслед.", "name": "наследство" }, { "id": 6, "code": "мена", "name": "мена" }, { "id": 7, "code": "инвест.", "name": "инвестирование" }, { "id": 8, "code": "рента", "name": "рента" }, { "id": 9, "code": "реш.суда", "name": "решение суда" }, { "id": 10, "code": "залог(ипотека)", "name": "залог (ипотека)" }, { "id": 11, "code": "иное", "name": "иное" }, { "id": 12, "code": "кооператив", "name": "кооператив" }, { "id": 13, "code": "собственность", "name": "собственность" }, { "id": 14, "code": "по доверенности", "name": "по доверенности" }, { "id": 15, "code": "ДДУ", "name": "договор долевого участия" }, { "id": 16, "code": "ДУ", "name": "договор уступки прав требования" }, { "id": 17, "code": "ПДДК", "name": "предварительный договор купли-продажи" }],
            parking_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "-", "name": "нет" }, { "id": 2, "code": "+", "name": "есть" }, { "id": 3, "code": "о", "name": "охраняемая" }, { "id": 4, "code": "п", "name": "подземная" }, { "id": 5, "code": "с", "name": "стихийная" }, { "id": 6, "code": "з", "name": "закрепленное место" }],
            pay_period_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "в год", "name": "в год" }, { "id": 2, "code": "в мес.", "name": "в месяц" }, { "id": 3, "code": "в кв.", "name": "в квартал" }, { "id": 4, "code": "в сут.", "name": "в сутки" }],
            plumbing_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "-", "name": "нет" }, { "id": 2, "code": "+", "name": "есть" }, { "id": 3, "code": "С", "name": "скважина" }, { "id": 4, "code": "К", "name": "колодец" }, { "id": 5, "code": "М", "name": "магистральный" }, { "id": 6, "code": "И", "name": "иное" }, { "id": 7, "code": "Ц", "name": "центральный" }, { "id": 8, "code": "Л", "name": "летний" }],
            price_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "вся площадь", "name": "за всю площадь" }, { "id": 2, "code": "сотка", "name": "за сотку" }, { "id": 3, "code": "кв.м.", "name": "за кв.м." }],
            realty_type: [{ "id": 1, "code": "кв.", "name": "квартира", "master_realty_type_id": 1 }, { "id": 2, "code": "комн.", "name": "комната", "master_realty_type_id": 1 }, { "id": 3, "code": "дом", "name": "дом", "master_realty_type_id": 2 }, { "id": 4, "code": "ЗУ", "name": "земельный участок", "master_realty_type_id": 2 }, { "id": 5, "code": "дача", "name": "дача", "master_realty_type_id": 2 }, { "id": 6, "code": "дуплекс", "name": "дуплекс", "master_realty_type_id": 2 }, { "id": 7, "code": "квадрохаус", "name": "квадрохаус", "master_realty_type_id": 2 }, { "id": 8, "code": "коттедж", "name": "коттедж", "master_realty_type_id": 2 }, { "id": 9, "code": "коттедж в КП", "name": "коттедж в КП", "master_realty_type_id": 2 }, { "id": 10, "code": "таунхаус", "name": "таунхаус", "master_realty_type_id": 2 }, { "id": 11, "code": "усадьба", "name": "усадьба", "master_realty_type_id": 2 }, { "id": 12, "code": "часть дома", "name": "часть дома", "master_realty_type_id": 2 }, { "id": 15, "code": "офис", "name": "офис", "master_realty_type_id": 3 }, { "id": 16, "code": "маг", "name": "магазин", "master_realty_type_id": 3 }, { "id": 17, "code": "склад", "name": "склад", "master_realty_type_id": 3 }, { "id": 18, "code": "другое", "name": "другое", "master_realty_type_id": 3 }, { "id": 19, "code": "БЦ", "name": "бизнес-центр", "master_realty_type_id": 3 }, { "id": 20, "code": "ТЦ", "name": "торговый центр", "master_realty_type_id": 3 }, { "id": 21, "code": "ППП", "name": "произв.-пром помещение", "master_realty_type_id": 3 }, { "id": 22, "code": "ПП", "name": "предприятие питания", "master_realty_type_id": 3 }, { "id": 23, "code": "ПСН", "name": "помещ.свободного назначения", "master_realty_type_id": 3 }, { "id": 24, "code": "ОСЗ", "name": "отдельно стоящее здание", "master_realty_type_id": 3 }, { "id": 25, "code": "гостиница/отель", "name": "гостиница/отель", "master_realty_type_id": 3 }, { "id": 26, "code": "КЗУ", "name": "ком.земельный участок", "master_realty_type_id": 3 }, { "id": 27, "code": "гар", "name": "гараж", "master_realty_type_id": 3 }, { "id": 28, "code": "автомойка", "name": "автомойка", "master_realty_type_id": 3 }, { "id": 29, "code": "автосервис", "name": "автосервис", "master_realty_type_id": 3 }, { "id": 30, "code": "ателье", "name": "ателье", "master_realty_type_id": 3 }, { "id": 31, "code": "гараж.комплекс", "name": "гараж.комплекс", "master_realty_type_id": 3 }, { "id": 32, "code": "медцентр", "name": "медцентр", "master_realty_type_id": 3 }, { "id": 33, "code": "парикмахерская", "name": "парикмахерская", "master_realty_type_id": 3 }, { "id": 34, "code": "стоматология", "name": "стоматология", "master_realty_type_id": 3 }, { "id": 35, "code": "турфирма", "name": "турфирма", "master_realty_type_id": 3 }, { "id": 36, "code": "учеб.цели", "name": "учеб.цели", "master_realty_type_id": 3 }, { "id": 37, "code": "фотоателье", "name": "фотоателье", "master_realty_type_id": 3 }, { "id": 38, "code": "химчистка", "name": "химчистка", "master_realty_type_id": 3 }, { "id": 39, "code": "офисное здание", "name": "офисное здание", "master_realty_type_id": 3 }, { "id": 40, "code": "торг.площадь", "name": "торговая площадь", "master_realty_type_id": 3 }, { "id": 41, "code": "пром.земли", "name": "промышленные земли", "master_realty_type_id": 3 }, { "id": 42, "code": "сельхоз.земли", "name": "сельхоз.земли", "master_realty_type_id": 3 }, { "id": 43, "code": "банк", "name": "банк", "master_realty_type_id": 3 }, { "id": 44, "code": "кафе/ресторан", "name": "кафе/ресторан", "master_realty_type_id": 3 }, { "id": 45, "code": "машиноместо", "name": "машиноместо", "master_realty_type_id": 3 }, { "id": 46, "code": "инвест.проект", "name": "инвестиционный проект", "master_realty_type_id": 3 }, { "id": 47, "code": "готовый бизнес", "name": "готовый бизнес", "master_realty_type_id": 3 }, { "id": 48, "code": "база отдыха/лагерь", "name": "база отдыха/лагерь", "master_realty_type_id": 3 }, { "id": 49, "code": "ферма", "name": "ферма", "master_realty_type_id": 3 }, { "id": 50, "code": "бизнес-проект", "name": "бизнес-проект", "master_realty_type_id": 3 }, { "id": 51, "code": "доходный дом", "name": "доходный дом", "master_realty_type_id": 3 }, { "id": 52, "code": "фабрика/завод", "name": "фабрика/завод", "master_realty_type_id": 3 }, { "id": 53, "code": "курортный комплекс", "name": "курортный комплекс", "master_realty_type_id": 3 }, { "id": 54, "code": "апартаменты", "name": "апартаменты", "master_realty_type_id": 1 }, { "id": 55, "code": "пентхаус", "name": "пентхаус", "master_realty_type_id": 1 }, { "id": 56, "code": "дом", "name": "дом", "master_realty_type_id": 1 }, { "id": 57, "code": "элит.недвижимость(поместье, замок, особняк)", "name": "элитная недвижимость(поместье, замок, особняк)", "master_realty_type_id": 1 }, { "id": 59, "code": "гараж", "name": "гараж", "master_realty_type_id": 4 }, { "id": 60, "code": "бокс", "name": "бокс", "master_realty_type_id": 4 }, { "id": 61, "code": "машиноместо", "name": "машиноместо", "master_realty_type_id": 4 }, { "id": 62, "code": "доля", "name": "доля", "master_realty_type_id": 1 }, { "id": 63, "code": "коттедж", "name": "коттедж", "master_realty_type_id": 1 }, { "id": 64, "code": "вилла", "name": "вилла", "master_realty_type_id": 1 }, { "id": 65, "code": "бунгало", "name": "бунгало", "master_realty_type_id": 1 }, { "id": 66, "code": "таунхаус", "name": "таунхаус", "master_realty_type_id": 1 }, { "id": 67, "code": "квартира", "name": "квартира", "master_realty_type_id": 5 }],
            rent_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "любой срок", "name": "любой срок" }, { "id": 2, "code": "длительный срок", "name": "длительный срок" }, { "id": 3, "code": "посуточно", "name": "посуточно" }, { "id": 4, "code": "от месяца и более", "name": "от месяца и более" }, { "id": 5, "code": "сезонная сдача", "name": "сезонная сдача" }],
            security_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "-", "name": "нет" }, { "id": 2, "code": "+", "name": "есть" }],
            sewerage_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "-", "name": "нет" }, { "id": 2, "code": "+", "name": "есть" }, { "id": 3, "code": "ВД", "name": "вне дома" }, { "id": 4, "code": "С", "name": "септик" }, { "id": 5, "code": "Ц", "name": "центральная" }, { "id": 6, "code": "И", "name": "иное" }],
            territory_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "огорож.", "name": "огороженная" }, { "id": 2, "code": "огорож.+охран.", "name": "огороженная и охраняемая" }, { "id": 3, "code": "не огорож.", "name": "не огорожена" }],
            walls_material_type: [{ "id": 0, "code": "", "name": "", "master_realty_type_id": null }, { "id": 1, "code": "П", "name": "панельный", "master_realty_type_id": 1 }, { "id": 2, "code": "Б", "name": "блочный", "master_realty_type_id": 1 }, { "id": 3, "code": "М", "name": "монолитный", "master_realty_type_id": 1 }, { "id": 4, "code": "М-К", "name": "монолитно-кирпичный", "master_realty_type_id": 1 }, { "id": 5, "code": "К", "name": "кирпичный", "master_realty_type_id": 1 }, { "id": 6, "code": "Дер.", "name": "деревянный", "master_realty_type_id": 1 }, { "id": 9, "code": "Шлакоблок", "name": "шлакоблоки/шлакобетон", "master_realty_type_id": 1 }, { "id": 11, "code": "Ж-б", "name": "железобетон", "master_realty_type_id": 1 }, { "id": 18, "code": "Стал.", "name": "сталинский", "master_realty_type_id": 1 }, { "id": 19, "code": "бетон", "name": "бетон", "master_realty_type_id": 4 }, { "id": 20, "code": "дерево", "name": "дерево", "master_realty_type_id": 4 }, { "id": 21, "code": "кирпич", "name": "кирпич", "master_realty_type_id": 4 }, { "id": 22, "code": "металл", "name": "металл", "master_realty_type_id": 4 }, { "id": 23, "code": "пластик", "name": "пластик", "master_realty_type_id": 4 }, { "id": 24, "code": "Дер.", "name": "деревянный", "master_realty_type_id": 2 }, { "id": 25, "code": "Газоблок.", "name": "газоблочный", "master_realty_type_id": 2 }, { "id": 26, "code": "Кам.", "name": "каменный", "master_realty_type_id": 2 }, { "id": 27, "code": "Каркас.", "name": "каркасный", "master_realty_type_id": 2 }, { "id": 28, "code": "Кирп.", "name": "кирпичный", "master_realty_type_id": 2 }, { "id": 29, "code": "Легкобетон.", "name": "легкобетонный", "master_realty_type_id": 2 }, { "id": 30, "code": "Многослой.", "name": "многослойный", "master_realty_type_id": 2 }, { "id": 31, "code": "Монолит.", "name": "монолитный", "master_realty_type_id": 2 }, { "id": 32, "code": "Щит.", "name": "щитовой", "master_realty_type_id": 2 }],
            water_closet_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "-", "name": "отсутствует" }, { "id": 2, "code": "С", "name": "совмещенный" }, { "id": 3, "code": "Р", "name": "раздельный" }, { "id": 4, "code": "2", "name": "два санузла" }, { "id": 5, "code": "3", "name": "три санузла" }, { "id": 6, "code": "4", "name": "четыре санузла" }, { "id": 7, "code": "2С", "name": "два совмещенных санузла" }, { "id": 8, "code": "2Р", "name": "два раздельных санузла" }, { "id": 9, "code": "3С", "name": "три совмещенных санузла" }, { "id": 10, "code": "3Р", "name": "три раздельных санузла" }, { "id": 11, "code": "4С", "name": "четыре совмещенных санузла" }, { "id": 12, "code": "4Р", "name": "четыре раздельных санузла" }, { "id": 13, "code": "+", "name": "есть санузел" }],
            window_overlook_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "на улицу", "name": "окна на улицу" }, { "id": 2, "code": "во двор", "name": "окна во двор" }, { "id": 3, "code": "во двор и на улицу", "name": "окна во двор и на улицу" }],
            rooms_adjacency_type: [{ "id": 0, "code": "", "name": "" }, { "id": 1, "code": "С", "name": "смежные" }, { "id": 2, "code": "Р", "name": "раздельные" }, { "id": 3, "code": "С+Р", "name": "смежные+раздельные" }],
            sale_type: [{ "id": 0, "name": "" }, { "id": 9, "name": "прямая продажа" }, { "id": 10, "name": "альтернатива" }],
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//cols.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        let _dataWorker;
        $$.$nl_search_panel_result = {
            base: $$.$nl_search_panel,
            dispatch: (dispatch_name, dispatch_arg) => {
                if (dispatch_name == 'get_recs') {
                    $$.a('.dataWorker').postMessage(Object.assign({}, dispatch_arg, { cmd: 'recs', tag: $$.a('.provider_tag') }));
                    return true;
                }
                else if (dispatch_name == 'recs') {
                    $$.a.dispatch('@grid@list', dispatch_name, dispatch_arg);
                    return true;
                }
                return false;
            },
            prop: {
                _provider: () => $$.a.curr.parent(true).path,
                provider_tag: () => null,
                on_order_changed: $$.$me_atom2_prop(['.order'], null, ({ val }) => {
                    $$.a('.provider_tag', val.id);
                }),
                isZoomed: $$.$me_atom2_prop_store({
                    default: () => false,
                    valid: (val) => typeof val == 'boolean' ? val : false,
                }),
                count: $$.$me_atom2_prop(['.provider_tag'], ({ masters: [tag] }) => {
                    $$.a('.dataWorker').postMessage({ cmd: 'count', tag });
                    return -1;
                }),
                dataWorker: () => {
                    if (!_dataWorker) {
                        const base = window.location.href.slice(0, -window.location.search.length);
                        _dataWorker = new Worker(base + 'data/-/web.js');
                        const curr = $$.a.curr;
                        _dataWorker.onmessage = (event) => {
                            const prev = $$.a.curr;
                            $$.a.curr = curr;
                            if (event.data.tag != $$.a('.provider_tag')) {
                                console.warn({ tag: event.data.tag, provider_tag: $$.a('.provider_tag') }, event.data);
                            }
                            else if (event.data.status != 'ok') {
                                console.error(event.data);
                            }
                            else if (event.data.cmd == 'count') {
                                $$.a('.count', event.data.count);
                            }
                            else if (event.data.cmd == 'recs') {
                                $$.a.dispatch('', event.data.cmd, event.data);
                            }
                            else {
                                console.error(event.data);
                            }
                            $$.a.curr = prev;
                        };
                    }
                    return _dataWorker;
                },
            },
            event: {
                clickOrTap: () => true,
            },
            style: {
                userSelect: () => 'none',
            },
            elem: {
                resizer: () => ({
                    prop: {
                        '#width': () => 44,
                        '#height': () => 44,
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 3),
                        '#cursor': () => 'pointer',
                    },
                    elem: {
                        img: () => ({
                            node: 'img',
                            prop: {
                                '#height': $$.$me_atom2_prop(['<<.isZoomed'], ({ masters: [isZoomed] }) => isZoomed ? 68 : 34),
                                '#width': $$.$me_atom2_prop(['<<.isZoomed'], ({ masters: [isZoomed] }) => isZoomed ? 68 : 34),
                                '#ofsVer': () => -2,
                                '#ofsHor': () => -4,
                            },
                            attr: {
                                src: $$.$me_atom2_prop(['/.theme', '<<.isZoomed'], ({ masters: [theme, isZoomed] }) => `assets/${$$.$me_theme[theme]}-slide-${isZoomed ? 'downright' : 'upleft'}@2x.png`),
                            },
                            style: {
                                userSelect: () => 'none',
                            },
                        }),
                    },
                    event: {
                        clickOrTap: () => {
                            $$.a('<.isZoomed', !$$.a('<.isZoomed'));
                            return true;
                        },
                    },
                }),
                shown: () => ({
                    node: 'span',
                    prop: {
                        '#height': () => null,
                        '#width': () => null,
                        '#ofsHor': '.em',
                        '#ofsVer': $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(19 / 16)),
                    },
                    style: {
                        position: () => 'relative',
                        fontWeight: () => 500,
                        userSelect: () => 'none',
                    },
                    dom: {
                        innerText: $$.$me_atom2_prop(['<.count'], ({ masters: [count] }) => (count < 0 ?
                            `Загрузка предложений` :
                            `Показано ${count} ` + $$.$me_word_plural(count, 'предложение', 'предложения', 'предложений')).toUpperCase()),
                    },
                }),
                filter: () => ({
                    node: 'img',
                    prop: {
                        '#height': () => 18,
                        '#width': () => 18,
                        '#ofsVer': () => 18,
                        '#ofsHor': $$.$me_atom2_prop(['<@shown.#ofsHor', '<@shown.#width'], $$.$me_atom2_prop_compute_fn_sum(8)),
                        '#cursor': () => 'pointer',
                    },
                    attr: {
                        src: () => 'assets/icons-8-filter@2x.png'
                    },
                    style: {
                        userSelect: () => 'none',
                        filter: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                            'brightness(0%) invert(22%) sepia(56%) saturate(3987%) hue-rotate(182deg) brightness(96%) contrast(101%)' :
                            'brightness(0%) invert(45%) sepia(90%) saturate(515%) hue-rotate(154deg) brightness(106%) contrast(97%)'),
                    },
                    event: {
                        clickOrTap: () => {
                            console.log('filter');
                            return true;
                        },
                    },
                }),
                mode_switcher: () => ({
                    base: $$.$nl_switch,
                    prop: {
                        '#alignHor': () => $$.$me_align.right,
                        '#width': () => 265,
                        '#height': () => 40,
                        ofsVer: () => 5,
                        options: () => ({
                            'ТАБЛИЦА': {},
                            'ПЛИТКА': {},
                            'КАРТА': {},
                        }),
                        value: $$.$me_atom2_prop([`<.mode`], null, ({ val }) => {
                            $$.a('<.mode', val);
                        }),
                        paddingHor: () => 16,
                    },
                }),
                spinner: $$.$me_atom2_prop(['.count'], ({ masters: [count] }) => count >= 0 ? null : {
                    base: $$.$me_spinner,
                    prop: {
                        color: () => '#D9DCE2',
                    },
                }),
                grid: () => ({
                    base: grid,
                    prop: {
                        provider: () => $$.a.get('<').path,
                        order: $$.$me_atom2_prop(['<.order'], null, ({ val }) => {
                            $$.a('<.order', val, true);
                        }),
                        '#hidden': $$.$me_atom2_prop(['<.mode'], ({ masters: [mode] }) => mode != 'ТАБЛИЦА'),
                        '#ofsHor': '.em',
                        '#ofsVer': () => 56,
                        '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor'], ({ masters: [width, ofsHor] }) => width - 2 * ofsHor),
                        '#height': $$.$me_atom2_prop(['<.height_target', '<.height_anim_is', '.#ofsVer'], ({ masters: [height, height_anim_is, ofsVer], prev }) => {
                            const val = height - ofsVer;
                            const result = prev == null || val > prev || !height_anim_is ? val : prev;
                            return result;
                        }),
                        provider_tag: () => '',
                        rec_count: '<.count',
                    },
                }),
                plitka: () => ({
                    base: plitka,
                    prop: {
                        provider: () => $$.a.get('<').path,
                        provider_tag: () => 'some',
                        rec_count: '<.count',
                        order: $$.$me_atom2_prop(['<.order'], null, ({ val }) => {
                            $$.a('<.order', val, true);
                        }),
                        '#hidden': $$.$me_atom2_prop(['<.mode'], ({ masters: [mode] }) => mode != 'ПЛИТКА'),
                        '#ofsHor': '.em',
                        '#ofsVer': () => 56,
                        '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor'], ({ masters: [width, ofsHor] }) => width - 2 * ofsHor),
                        '#height': $$.$me_atom2_prop(['<.height_target', '<.height_anim_is', '.#ofsVer'], ({ masters: [height, height_anim_is, ofsVer], prev }) => {
                            const val = height - ofsVer;
                            const result = prev == null || val > prev || !height_anim_is ? val : prev;
                            return result;
                        }),
                    },
                }),
            },
        };
        const plitka = {
            base: $$.$nl_plitka,
        };
        const grid = {
            base: $$.$nl_search_grid,
            prop: {
                row_opens: $$.$me_atom2_prop(['.order'], ({ masters: [order] }) => order.row_opens || (order.row_opens = new Set())),
                on_order_changed: $$.$me_atom2_prop(['.order'], null, ({ val }) => {
                    if (!val)
                        return;
                    const order = val;
                    $$.a.dispatch('', 'set_view', order);
                }),
                on_order_changed_and_ready: $$.$me_atom2_prop(['.order', '.rec_count'], ({ masters: [order, rec_count] }) => rec_count < 0 ? null : [order, rec_count], ({ val }) => {
                    if (!val)
                        return;
                    const [order, rec_count] = val;
                    $$.a.dispatch('@list', 'set_view', order);
                }),
                on_change_col_ids: $$.$me_atom2_prop(['.col_ids', '.order'], null, ({ val: [col_ids, order] }) => {
                    order.col_ids = col_ids;
                }),
                on_change_ofsHor: $$.$me_atom2_prop(['.ofsHor', '.col_fixed_width', '.order'], null, ({ val: [ofsHor, col_fixed_width, order] }) => {
                    order.ofsHor = ofsHor - col_fixed_width;
                }),
                on_change_col_width: $$.$me_atom2_prop({ keys: ['.col_ids'], masters: ['.col_width[]', '.cols', '.order'] }, null, ({ key: [id], val }) => {
                    if (val == null)
                        return;
                    const [width, cols, order] = val;
                    if (width != cols[id].width) {
                        if (!order.col_width)
                            order.col_width = {};
                        order.col_width[id] = width;
                    }
                }),
                on_change_row_i_min: $$.$me_atom2_prop(['@list.row_i_min', '.order', '.rec_count'], null, ({ val: [row_i_min, order, rec_count] }) => {
                    if (rec_count < 0)
                        return;
                    order.row_i_min = row_i_min;
                }),
                on_change_visible_idx_min: $$.$me_atom2_prop(['@list.visible_idx_min', '.order', '.rec_count'], null, ({ val: [visible_idx_min, order, rec_count] }) => {
                    if (rec_count < 0)
                        return;
                    order.visible_idx_min = visible_idx_min;
                }),
                on_change_visible_top: $$.$me_atom2_prop(['@list.visible_top', '.order', '.rec_count'], null, ({ val: [visible_top, order, rec_count] }) => {
                    if (rec_count < 0)
                        return;
                    order.visible_top = visible_top;
                }),
                cols: () => $$.$nl_search_panel_result_cols,
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//result.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_search_workspace = {
            prop: {
                orders: () => ({
                    'new': {
                        id: 'new',
                    },
                    'id2': {
                        id: 'id2',
                        title: 'Заказ 2',
                        params: {},
                    },
                    'id1': {
                        id: 'id1',
                        title: 'Заказ 1',
                        params: {},
                    },
                }),
                order_ids: $$.$me_atom2_prop_keys(['.orders']),
                order: $$.$me_atom2_prop({ keys: ['.order_ids'], masters: ['.orders'] }, ({ key: [id], masters: [orders] }) => orders[id]),
                order_title: $$.$me_atom2_prop({ keys: ['.order_ids'], masters: ['.order[]'] }, ({ masters: [order] }) => order.title.toUpperCase()),
                selected: $$.$me_atom2_prop_store({
                    default: () => $$.a('.order_ids')[0],
                    valid: (val) => val == 'new' || $$.a('.orders')[val] ? val : null,
                }),
                param_modes: () => ({
                    ПОЛНЫЙ: {
                        height: 8 * 44,
                    },
                    СЖАТЫЙ: {
                        height: 0,
                    },
                }),
                param_mode_keys: $$.$me_atom2_prop_keys(['.param_modes']),
                param_mode: $$.$me_atom2_prop_store({
                    default: () => 'ПОЛНЫЙ',
                    valid: (val) => ~$$.a('.param_mode_keys').indexOf(val) ? val : null,
                }),
                offerCount: () => 1200,
                objCount: () => 800,
            },
            elem: {
                tabs: () => ({
                    base: $$.$nl_search_tabs,
                    prop: {
                        '#height': '/@app@menu@login.#height',
                        '#ofsHor': () => 36,
                        '#ofsVer': () => 16,
                    },
                }),
                new: $$.$me_atom2_prop(['.selected'], ({ masters: [selected], prev }) => selected != 'new' ? prev || null : {
                    type: '$nl_search_new',
                    base: $$.$nl_search_new,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => selected != 'new'),
                        '#ofsVer': '<@tabs.#height',
                        '#height': $$.$me_atom2_prop(['<.#height', '<@tabs.#height'], ({ masters: [height_parent, height_tabs] }) => height_parent - height_tabs),
                    },
                }),
                panelParam: $$.$me_atom2_prop(['.selected'], ({ masters: [selected], prev }) => selected == 'new' ? prev || null : {
                    type: '$nl_search_panel_param',
                    base: $$.$nl_search_panel_param,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => selected == 'new'),
                        order: $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => selected == 'new' ? null : $$.a(`<.order[${selected}]`), ({ val }) => {
                            $$.a(`<.order[${$$.a('<.selected')}]`, val, true);
                        }),
                        '#ofsVer': '<@tabs.#height',
                        height_target: $$.$me_atom2_prop(['<.param_mode', '<.param_modes', '.header_height', '.footer_height'], ({ masters: [mode, modes, header_height, footer_height] }) => {
                            const result = modes[mode].height + header_height + footer_height;
                            return result;
                        }),
                        '#height': $$.$me_atom2_prop(['.height_target'], ({ masters: [to] }) => $$.$me_atom2_anim({ to, duration: 400,
                            path_active: $$.a.get('.height_anim_is').path
                        })),
                        height_anim_is: $$.$me_atom2_prop([], () => false),
                    },
                    style: {
                        overflow: () => 'hidden',
                    },
                }),
                panelResult: $$.$me_atom2_prop(['.selected'], ({ masters: [selected], prev }) => selected == 'new' ? prev || null : {
                    type: '$nl_search_panel_result',
                    base: $$.$nl_search_panel_result,
                    prop: {
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 3),
                        '#hidden': $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => selected == 'new'),
                        order: $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => selected == 'new' ? null : $$.a(`<.order[${selected}]`)),
                        mode: $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => selected == 'new' ? '' : $$.a(`<.order[${selected}]`).result_mode || 'ТАБЛИЦА', ({ val }) => {
                            if (!val)
                                return;
                            const order = $$.a(`.order`);
                            order.result_mode = val;
                            $$.a(`.order`, order, true);
                        }),
                        '#ofsHor': $$.$me_atom2_prop(['.isZoomed', '.em', '/@app@menu.#width'], ({ masters: [isZoomed, em, menu_width] }) => !isZoomed ? em : -menu_width),
                        ofsVer_target: $$.$me_atom2_prop([
                            '<@panelParam.#ofsVer', '<@panelParam.height_target', '.em'
                        ], ({ masters: [ofsVer, height_target, em] }) => ofsVer + height_target + em),
                        '#ofsVer': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.isZoomed'], ({ masters: [isZoomed] }) => isZoomed ? [] : ['.ofsVer_target']), ({ len, masters: [to], prev }) => !len ? 0 : !prev ? to : $$.$me_atom2_anim({ to, duration: 400 })),
                        height_target: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.isZoomed'], ({ masters: [isZoomed] }) => isZoomed ? ['/.#viewportHeight'] : ['<.#height', '.ofsVer_target']), ({ len, masters }) => {
                            if (len == 1) {
                                const [viewportHeight] = masters;
                                return viewportHeight;
                            }
                            else {
                                const [height, ofsVer] = masters;
                                return height - ofsVer;
                            }
                        }),
                        '#height': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.isZoomed'], ({ masters: [isZoomed] }) => isZoomed ?
                            ['.isZoomed', '/.#viewportHeight'] :
                            ['.isZoomed', '/.#viewportHeight', '.height_target']), ({ masters: [isZoomed, viewportHeight, to], prev }) => isZoomed ?
                            viewportHeight :
                            prev == viewportHeight ?
                                to :
                                $$.$me_atom2_anim({ to, duration: 400,
                                    path_active: $$.a.get('.height_anim_is').path
                                })),
                        height_anim_is: $$.$me_atom2_prop([], () => false),
                        '#width': $$.$me_atom2_prop(['.isZoomed', '/.#viewportWidth', '<.#width', '.em'], ({ masters: [isZoomed, viewportWidth, width, em] }) => isZoomed ? viewportWidth : width - 2 * em),
                    },
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//workspace.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_favorites_workspace = {
            prop: {},
            elem: {
                label1: () => ({
                    prop: {
                        '#height': () => null,
                        '#width': () => null,
                        '#ofsHor': '.pm',
                        '#ofsVer': () => 50,
                    },
                    style: {
                        fontSize: () => 16,
                    },
                    dom: {
                        innerText: () => 'Избранное',
                    },
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//workspace.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_orders_workspace = {
            prop: {},
            elem: {
                label1: () => ({
                    prop: {
                        '#height': () => null,
                        '#width': () => null,
                        '#ofsHor': '.pm',
                        '#ofsVer': () => 50,
                    },
                    style: {
                        fontSize: () => 16,
                    },
                    dom: {
                        innerText: () => 'Заказы',
                    },
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//workspace.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_clients_workspace = {
            prop: {},
            elem: {
                label1: () => ({
                    prop: {
                        '#height': () => null,
                        '#width': () => null,
                        '#ofsHor': '.pm',
                        '#ofsVer': () => 50,
                    },
                    style: {
                        fontSize: () => 16,
                    },
                    dom: {
                        innerText: () => 'Клиенты',
                    },
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//workspace.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_advs_workspace = {
            prop: {},
            elem: {
                label1: () => ({
                    prop: {
                        '#height': () => null,
                        '#width': () => null,
                        '#ofsHor': '.pm',
                        '#ofsVer': () => 50,
                    },
                    style: {
                        fontSize: () => 16,
                    },
                    dom: {
                        innerText: () => 'Мои объявления',
                    },
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//workspace.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_feedback_workspace = {
            prop: {},
            elem: {
                panel: () => ({
                    base: $$.$nl_panel,
                    prop: {
                        '#ofsHor': '.em',
                        '#ofsVer': () => 54,
                        '#width': () => 620,
                        '#height': () => 800,
                    },
                    elem: {
                        title: () => ({
                            prop: {
                                '#ofsHor': '.pm',
                                '#ofsVer': '.pm',
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 18,
                            },
                            dom: {
                                innerText: () => 'ОБРАТНАЯ СВЯЗЬ',
                            },
                        }),
                        label1: () => ({
                            prop: {
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 85,
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => 'E-mail',
                            },
                        }),
                        email: () => ({
                            prop: {
                                '#ofsVer': () => 85,
                                '#ofsHor': () => 198,
                                '#cursor': () => 'pointer',
                                colorText: '/.colorLink',
                                fontSize: () => 16,
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                            },
                            dom: {
                                innerText: () => '911@baza-winner.ru'
                            },
                            event: {
                                clickOrTap: () => {
                                    return true;
                                },
                            },
                        }),
                        label2: () => ({
                            prop: {
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 116,
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => 'Телефон',
                            },
                        }),
                        phone: () => ({
                            prop: {
                                '#ofsHor': () => 198,
                                '#ofsVer': () => 116,
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => '+7 (495) 921-41-03',
                            },
                        }),
                        panel: () => ({
                            base: $$.$nl_panel,
                            prop: {
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 167,
                                '#width': $$.$me_atom2_prop(['<.#width', '.pm'], ({ masters: [width, ofs] }) => width - ofs * 2),
                                '#height': $$.$me_atom2_prop(['<.#height', '.pm'], ({ masters: [height, ofs] }) => height - ofs - 167),
                            },
                            style: {
                                borderRadius: () => 4,
                                border: () => '2px solid #d8dce3',
                                boxShadow: () => 'none',
                            },
                            elem: {
                                send_data: () => ({
                                    base: $$.$me_stylesheet,
                                    node: 'textarea',
                                    prop: {
                                        '#ofsHor': '.em',
                                        '#ofsVer': () => 72,
                                        '#alignVer': () => $$.$me_align.bottom,
                                        '#width': $$.$me_atom2_prop(['<.#width', '.em'], ({ masters: [width, ofs] }) => width - ofs * 2),
                                        '#height': () => 66,
                                        styleSheetName: () => 'nl_input',
                                        className: '.styleSheetName',
                                        styleSheet: () => '',
                                        styleSheetCommon: $$.$me_atom2_prop(['.className', '/.theme'], ({ masters: [className, theme] }) => {
                                            return (`
                      .${className}::placeholder {
                        color: ${theme == $$.$me_theme.light ? 'rgba(49,55,69,0.5)' : 'white'};
                      }
                    `);
                                        }),
                                    },
                                    style: {
                                        borderRadius: () => 4,
                                        border: () => '1px solid #bdc3d1',
                                        boxShadow: () => 'none',
                                        boxSizing: () => 'border-box',
                                        '-webkit-appearance': () => 'none',
                                        padding: () => 12,
                                        resize: () => 'none',
                                        outline: () => 'none',
                                        color: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'rgba(49,55,69,0.5)' : 'white'),
                                        background: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#fcfcfd' : '#666f7f'),
                                    },
                                    attr: {
                                        placeholder: () => 'Введите новое сообщение',
                                        rows: () => 3,
                                        cols: () => 27,
                                    },
                                }),
                                send_button: () => ({
                                    base: $$.$nl_button,
                                    prop: {
                                        '#width': () => 130,
                                        '#height': () => 40,
                                        '#ofsVer': '.em',
                                        '#ofsHor': '.em',
                                        '#alignVer': () => $$.$me_align.bottom,
                                        '#alignHor': () => $$.$me_align.right,
                                        caption: () => 'Отправить',
                                        target: () => '<',
                                        fontSize: () => 16,
                                    },
                                    event: {
                                        clickOrTap: () => {
                                            return true;
                                        },
                                    }
                                }),
                                icon_attach: () => ({
                                    node: 'img',
                                    prop: {
                                        '#width': () => 14,
                                        '#height': () => 28,
                                        '#ofsVer': '.em',
                                        '#ofsHor': '.em',
                                        '#alignVer': () => $$.$me_align.bottom,
                                        '#alignHor': () => $$.$me_align.left,
                                        '#cursor': () => 'pointer',
                                    },
                                    attr: {
                                        src: () => 'assets/icons-8-attach.png',
                                    },
                                    style: {
                                        filter: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '' : 'brightness(0%) invert(100%) sepia(89%) saturate(0%) hue-rotate(253deg) brightness(112%) contrast(100%)'),
                                    },
                                }),
                            }
                        })
                    },
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//workspace.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_settings_tabs = {
            prop: {
                options: $$.$me_atom2_prop_abstract(),
                selected: $$.$me_atom2_prop_abstract(),
                option_ids: $$.$me_atom2_prop_keys(['.options']),
            },
            elem: {
                tab: $$.$me_atom2_prop({ keys: ['.option_ids'] }, ({ key: [id] }) => ({
                    base: tab,
                    prop: {
                        id: () => id,
                    },
                    dom: {
                        innerText: $$.$me_atom2_prop(['<.options'], ({ masters: [options] }) => $$.$me_option_caption_text(id, options).toUpperCase()),
                    },
                })),
            },
        };
        const tab = {
            node: 'span',
            prop: {
                isSelected: $$.$me_atom2_prop(['<.selected', '.id'], ({ masters: [selected, id] }) => selected == id),
                '#cursor': $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? 'default' : 'pointer'),
            },
            event: {
                clickOrTap: () => {
                    console.log($$.a('.id'), $$.a('<.selected'), $$.a.get('<.selected').name());
                    $$.a('<.selected', $$.a('.id'));
                    return true;
                },
            },
            style: {
                position: () => 'relative',
                paddingLeft: () => 10,
                paddingRight: () => 10,
                paddingBottom: () => 5,
                borderBottom: $$.$me_atom2_prop(['.isSelected', '/.theme'], ({ masters: [isSelected, theme] }) => `3px solid rgba(${theme == $$.$me_theme.light ? '49,55,69' : '255,255,255'}, ${!isSelected ? .2 : theme == $$.$me_theme.light ? 1 : .5})`),
                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(18 / 16)),
                fontWeight: $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? 500 : 400)
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//tabs.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_settings_workspace = {
            prop: {
                sections: () => ({
                    search: {
                        caption: 'Настройка поиска',
                    },
                    personal: {
                        caption: 'Личные данные',
                    },
                    profile: {
                        caption: 'Настройка профиля',
                    },
                    blacklist: {
                        caption: 'Черный список',
                    },
                }),
                section_ids: $$.$me_atom2_prop_keys(['.sections']),
                selected: $$.$me_atom2_prop_store({
                    default: () => $$.a('.section_ids')[0],
                    valid: (val) => val == $$.a('.sections')[val] ? val : null,
                }),
            },
            elem: {
                tabs: () => ({
                    base: $$.$nl_settings_tabs,
                    prop: {
                        options: '<.sections',
                        selected: $$.$me_atom2_prop_bind('<.selected'),
                        '#height': '/@app@menu@login.#height',
                        '#ofsHor': () => 36,
                        '#ofsVer': () => 16,
                    },
                }),
                search: () => ({
                    base: $$.$nl_panel,
                    prop: {
                        '#ofsHor': '.em',
                        '#ofsVer': () => 54,
                        '#width': () => 520,
                        '#height': () => 420,
                        inputOfs: () => 169,
                    },
                    elem: {
                        title: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.pm',
                                '#ofsVer': '.pm',
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 18,
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop(['<<.sections'], ({ masters: [sections] }) => $$.$me_option_caption_text('search', sections).toUpperCase()),
                            },
                        }),
                        label1: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 100,
                            },
                            style: {
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => 'Глубина поиска',
                            },
                        }),
                        deepdate: () => ({
                            base: $$.$nl_pickerdate,
                            prop: {
                                '#width': $$.$me_atom2_prop(['<.#width', '.pm', '<.inputOfs'], ({ masters: [width, ofs, inputOfs] }) => width - inputOfs - ofs),
                                '#ofsHor': '<.inputOfs',
                                '#height': () => 32,
                                '#ofsVer': () => 93,
                            },
                        }),
                        newbld: () => ({
                            base: $$.$nl_select,
                            prop: {
                                '#height': () => 32,
                                '#width': $$.$me_atom2_prop(['<.#width', '.pm'], ({ masters: [width, ofs] }) => width - ofs * 2),
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 157,
                                options: () => ({
                                    include: { caption: ({ isSelected }) => isSelected ? 'Можно в новостройке' : {
                                            text: 'Можно',
                                            width: 100,
                                        } },
                                    exclude: { caption: ({ isSelected }) => isSelected ? 'Кроме новостроек' : {
                                            text: 'Кроме',
                                            width: 100,
                                        } },
                                    only: { caption: ({ isSelected }) => isSelected ? 'Только в новостройке' : {
                                            text: 'Только',
                                            width: 100,
                                        } },
                                }),
                            },
                        }),
                        apartment: () => ({
                            base: $$.$nl_select,
                            prop: {
                                '#width': $$.$me_atom2_prop(['<.#width', '.pm'], ({ masters: [width, ofs] }) => width - ofs * 2),
                                '#height': () => 32,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 221,
                                options: () => ({
                                    no_matter: {
                                        caption: ({ isSelected }) => isSelected ? {
                                            width: 250,
                                            text: 'Можно апартаменты',
                                        } : {
                                            width: 90,
                                            text: 'Не важно',
                                        },
                                    },
                                    except: { caption: ({ isSelected }) => isSelected ? 'Кроме апартаментов' : 'Кроме' },
                                    only: { caption: ({ isSelected }) => isSelected ? {
                                            width: 210,
                                            text: 'Только апартаменты',
                                        } : {
                                            width: 60,
                                            text: '...',
                                        } }
                                }),
                            },
                        }),
                        sold: () => ({
                            base: $$.$nl_select,
                            prop: {
                                '#width': $$.$me_atom2_prop(['<.#width', '.pm'], ({ masters: [width, ofs] }) => width - ofs - ofs),
                                '#height': () => 32,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 285,
                                options: () => ({
                                    include: { caption: ({ isSelected }) => isSelected ? 'Включая снятые с продажи' : {
                                            width: 60,
                                            text: 'Все',
                                        } },
                                    except: { caption: ({ isSelected, val }) => isSelected ? 'Кроме снятых с продажи' : {
                                            text: 'Кроме',
                                        } },
                                    only: { caption: ({ isSelected }) => isSelected ? {
                                            width: 250,
                                            text: 'Только снятые с продажи',
                                        } : {
                                            width: 75,
                                            text: 'Только',
                                        } },
                                })
                            },
                        }),
                        button: () => ({
                            base: $$.$nl_button,
                            prop: {
                                '#width': () => 200,
                                '#height': () => 40,
                                '#ofsVer': () => 349,
                                '#alignHor': () => $$.$me_align.center,
                                caption: () => 'Сохранить',
                                target: () => '<',
                                fontSize: () => 16,
                                cmd: () => ({ some: 'thing' })
                            },
                            event: {
                                clickOrTap: () => {
                                    return true;
                                },
                            }
                        }),
                    },
                }),
                personal: () => ({
                    base: $$.$nl_panel,
                    prop: {
                        '#ofsHor': () => 560,
                        '#ofsVer': () => 54,
                        '#width': () => 520,
                        '#height': () => 420,
                        inputOfs: () => 130,
                    },
                    elem: {
                        title: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.pm',
                                '#ofsVer': '.pm',
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 18,
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop(['<<.sections'], ({ masters: [sections] }) => $$.$me_option_caption_text('personal', sections).toUpperCase()),
                            },
                        }),
                        label1: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 100,
                            },
                            style: {
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => 'ФИО',
                            },
                        }),
                        fio: () => ({
                            base: $$.$nl_input,
                            prop: {
                                '#width': $$.$me_atom2_prop(['<.#width', '<.inputOfs', '.pm'], ({ masters: [width, inputOfs, ofs] }) => width - ofs - inputOfs),
                                '#height': () => 32,
                                '#ofsHor': '<.inputOfs',
                                '#ofsVer': () => 93,
                            },
                        }),
                        label2: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 164,
                            },
                            style: {
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => 'Телефон',
                            },
                        }),
                        phone: () => ({
                            base: $$.$nl_input,
                            prop: {
                                '#width': $$.$me_atom2_prop(['<.#width', '<.inputOfs', '.pm'], ({ masters: [width, inputOfs, ofs] }) => width - ofs - inputOfs),
                                '#height': () => 32,
                                '#ofsHor': '<.inputOfs',
                                '#ofsVer': () => 157,
                            },
                        }),
                        label3: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 228,
                            },
                            style: {
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => 'Е-mail',
                            },
                        }),
                        email: () => ({
                            base: $$.$nl_input,
                            prop: {
                                '#width': $$.$me_atom2_prop(['<.#width', '<.inputOfs', '.pm'], ({ masters: [width, inputOfs, ofs] }) => width - ofs - inputOfs),
                                '#height': () => 32,
                                '#ofsHor': '<.inputOfs',
                                '#ofsVer': () => 221,
                            },
                        }),
                        label4: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 292,
                            },
                            style: {
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => 'Пароль',
                            },
                        }),
                        password: () => ({
                            base: $$.$nl_input,
                            prop: {
                                '#width': $$.$me_atom2_prop(['<.#width', '<.inputOfs', '.pm', '<@edit_password.#width'], ({ masters: [width, inputOfs, ofs, epWidth] }) => width - ofs - inputOfs - epWidth - 16),
                                '#height': () => 32,
                                '#ofsHor': '<.inputOfs',
                                '#ofsVer': () => 285,
                            },
                        }),
                        edit_password: () => ({
                            prop: {
                                '#width': () => null,
                                '#height': () => 25,
                                '#ofsVer': () => 292,
                                '#ofsHor': '.pm',
                                '#alignHor': () => $$.$me_align.right,
                                '#cursor': () => 'pointer',
                                colorText: '/.colorLink',
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                            },
                            dom: {
                                innerText: () => 'редактировать'
                            },
                            event: {
                                clickOrTap: () => {
                                    return true;
                                },
                            },
                        }),
                        button: () => ({
                            base: $$.$nl_button,
                            prop: {
                                '#width': () => 200,
                                '#height': () => 40,
                                '#ofsVer': () => 349,
                                '#alignHor': () => $$.$me_align.center,
                                caption: () => 'Сохранить',
                                target: () => '<',
                                fontSize: () => 16,
                                cmd: () => ({ some: 'thing' })
                            },
                            event: {
                                clickOrTap: () => {
                                    return true;
                                },
                            }
                        }),
                    },
                }),
                profile: () => ({
                    base: $$.$nl_panel,
                    prop: {
                        '#ofsHor': () => 1100,
                        '#ofsVer': () => 54,
                        '#width': () => 520,
                        '#height': () => 420,
                        inputOfs: () => 171,
                    },
                    elem: {
                        title: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.pm',
                                '#ofsVer': '.pm',
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 18,
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop(['<<.sections'], ({ masters: [sections] }) => $$.$me_option_caption_text('profile', sections).toUpperCase()),
                            },
                        }),
                        label1: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => 456,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 77,
                            },
                            style: {
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => 'Вы не раскрыли свое лицо! Ваши объявления публикуются в белой зоне Базы WinNER (в подвале выборки).',
                            },
                        }),
                        label2: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => 456,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 124,
                            },
                            style: {
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => 'Для публикации в "зелёной зоне" вам необходимо раскрыть свое лицо. Публикация в "зеленой зоне" бесплатна для действующих клиентов.',
                            },
                        }),
                        label3: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 228,
                            },
                            style: {
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => 'Наименование',
                            },
                        }),
                        rname: () => ({
                            base: $$.$nl_input,
                            prop: {
                                '#height': () => 32,
                                '#ofsVer': () => 221,
                                '#width': $$.$me_atom2_prop(['<.#width', '.pm', '<.inputOfs'], ({ masters: [width, ofs, inputOfs] }) => width - inputOfs - ofs),
                                '#ofsHor': '<.inputOfs',
                            },
                        }),
                        label4: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 292,
                            },
                            style: {
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => 'Ссылка на сайт',
                            },
                        }),
                        wwwlink: () => ({
                            base: $$.$nl_input,
                            prop: {
                                '#height': () => 32,
                                '#ofsVer': () => 285,
                                '#width': $$.$me_atom2_prop(['<.#width', '.pm', '<.inputOfs'], ({ masters: [width, ofs, inputOfs] }) => width - inputOfs - ofs),
                                '#ofsHor': '<.inputOfs',
                            },
                        }),
                        button: () => ({
                            base: $$.$nl_button,
                            prop: {
                                '#width': () => 200,
                                '#height': () => 40,
                                '#ofsVer': () => 349,
                                '#alignHor': () => $$.$me_align.center,
                                caption: () => 'Отправить',
                                target: () => '<',
                                fontSize: () => 16,
                                cmd: () => ({ some: 'thing' })
                            },
                            event: {
                                clickOrTap: () => {
                                    return true;
                                },
                            }
                        }),
                    },
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//workspace.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_subscription_tabs = {
            prop: {
                options: $$.$me_atom2_prop_abstract(),
                selected: $$.$me_atom2_prop_abstract(),
                option_ids: $$.$me_atom2_prop_keys(['.options']),
            },
            elem: {
                tab: $$.$me_atom2_prop({ keys: ['.option_ids'] }, ({ key: [id] }) => ({
                    base: tab,
                    prop: {
                        id: () => id,
                    },
                    dom: {
                        innerText: $$.$me_atom2_prop(['<.options'], ({ masters: [options] }) => $$.$me_option_caption_text(id, options).toUpperCase()),
                    },
                })),
            },
        };
        const tab = {
            node: 'span',
            prop: {
                isSelected: $$.$me_atom2_prop(['<.selected', '.id'], ({ masters: [selected, id] }) => selected == id),
                '#cursor': $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? 'default' : 'pointer'),
            },
            event: {
                clickOrTap: () => {
                    console.log($$.a('.id'), $$.a('<.selected'), $$.a.get('<.selected').name());
                    $$.a('<.selected', $$.a('.id'));
                    return true;
                },
            },
            style: {
                position: () => 'relative',
                paddingLeft: () => 10,
                paddingRight: () => 10,
                paddingBottom: () => 5,
                borderBottom: $$.$me_atom2_prop(['.isSelected', '/.theme'], ({ masters: [isSelected, theme] }) => `3px solid rgba(${theme == $$.$me_theme.light ? '49,55,69' : '255,255,255'}, ${!isSelected ? .2 : theme == $$.$me_theme.light ? 1 : .5})`),
                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(18 / 16)),
                fontWeight: $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? 500 : 400)
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//tabs.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_select_elem = {
            prop: {
                options: $$.$me_atom2_prop_abstract(),
                value: $$.$me_atom2_prop_abstract(),
                colorBorder: $$.$me_atom2_prop_abstract(),
                colorBorderSelected: $$.$me_atom2_prop_abstract(),
                colorText: $$.$me_atom2_prop_abstract(),
                colorTextSelected: $$.$me_atom2_prop_abstract(),
                colorBackground: $$.$me_atom2_prop_abstract(),
                colorBackgroundSelected: $$.$me_atom2_prop_abstract(),
                borderRadius: $$.$me_atom2_prop_abstract(),
                borderWidth: $$.$me_atom2_prop_abstract(),
                '#width': $$.$me_atom2_prop_abstract(),
                '#height': $$.$me_atom2_prop_abstract(),
                option_width_min: $$.$me_atom2_prop_abstract(),
                fontFamily: $$.$me_atom2_prop_abstract(),
                fontWeight: $$.$me_atom2_prop_abstract(),
                fontWeightSelected: $$.$me_atom2_prop_abstract(),
                fontSize: $$.$me_atom2_prop_abstract(),
                no_adjust: () => false,
                itemAlignHor: () => $$.$me_align.center,
                itemAlignVer: () => $$.$me_align.center,
                option_ids: $$.$me_atom2_prop_keys(['.options']),
                _option_width: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.option_ids'], ({ masters: [option_ids] }) => {
                    const result = ['.no_adjust', '.option_ids', '.options', '.value', '.#width', '.option_width_min'];
                    for (const id of option_ids)
                        result.push(`^option[${id}]._textWidth`, `^option[${id}].paddingLeft`, `^option[${id}].paddingRight`);
                    return result;
                }), ({ masters, prev }) => {
                    const [no_adjust, option_ids, options, value, width_total, option_width_min] = masters;
                    if (no_adjust && prev)
                        return prev;
                    const masters_base = 6;
                    const width = {};
                    let width_sum = 0;
                    let width_excess_base = 0;
                    const ids = [];
                    let w;
                    for (let i = 0; i < option_ids.length; i++) {
                        const id = option_ids[i];
                        const caption = $$.$me_option_caption(id, options, value);
                        const isSpecifiedWidth = typeof caption != 'string' &&
                            caption &&
                            typeof caption.width == 'number';
                        const w = width[id] =
                            isSpecifiedWidth ?
                                caption.width :
                                Math.max(option_width_min, masters[masters_base + i * 3] + masters[masters_base + 1 + i * 3] + masters[masters_base + 2 + i * 3]);
                        width_sum += w;
                        if (!isSpecifiedWidth) {
                            width_excess_base += w;
                            ids.push(id);
                        }
                    }
                    const width_excess = width_total - width_sum;
                    for (const id of ids)
                        width[id] *= (1 + width_excess / width_excess_base);
                    return width;
                }),
                option_width: $$.$me_atom2_prop({ keys: ['.option_ids'], masters: ['._option_width'] }, ({ key: [id], masters: [width] }) => width[id]),
                option_left: $$.$me_atom2_prop({
                    keys: ['.option_ids'],
                    masters: $$.$me_atom2_prop_masters(['.option_ids'], ({ key: [id], masters: [ids] }) => {
                        const idx = ids.indexOf(id);
                        const result = [];
                        if (!idx)
                            return result;
                        for (let i = 0; i < idx; i++)
                            result.push(`.option_width[${ids[i]}]`);
                        return result;
                    }),
                }, $$.$me_atom2_prop_compute_fn_sum()),
                idx_selected: $$.$me_atom2_prop(['.option_ids', '.value'], ({ masters: [ids, id] }) => typeof id == 'string' ? [ids.indexOf(id)].filter(idx => ~idx) :
                    id instanceof Set ? [...id].map((id) => ids.indexOf(id)).filter(idx => ~idx) :
                        []),
            },
            event: {},
            elem: {
                option: $$.$me_atom2_prop({ keys: ['.option_ids'] }, ({ key: [id] }) => ({
                    prop: {
                        id: () => id,
                        fontSize: '<.fontSize',
                        fontWeight: $$.$me_atom2_prop(['.isSelected', '<.fontWeightSelected', '<.fontWeight'], ({ masters: [isSelected, fontWeightSelected, fontWeight] }) => isSelected ? fontWeightSelected : fontWeight),
                        fontFamily: '<.fontFamily',
                        isSelected: $$.$me_atom2_prop(['<.value'], ({ masters: [value] }) => value instanceof Set ? value.has(id) : value == id),
                        '#width': $$.$me_atom2_prop(['<.option_ids', '<.#width'], ({ masters: [ids, w] }) => Math.round(w / ids.length)),
                        '#height': '<.#height',
                        '#ofsHor': $$.$me_atom2_prop(['<.option_ids', '.#width'], ({ masters: [ids, w] }) => ids.indexOf(id) * w),
                        idx: $$.$me_atom2_prop(['<.option_ids'], ({ masters: [ids] }) => ids.indexOf(id)),
                        borderLeft: $$.$me_atom2_prop(['<.idx_selected', '<.option_ids', '<.colorBorder', '<.colorBorderSelected', '<.borderWidth'], ({ masters: [idx_selected, option_ids, colorBorder, colorBorderSelected, borderWidth] }) => {
                            const idx = option_ids.indexOf(id);
                            const result = ~idx_selected.indexOf(idx) ?
                                (~idx_selected.indexOf(idx - 1) ? { width: borderWidth, color: 'transparent' } : { width: borderWidth, color: colorBorderSelected }) :
                                !idx ? { width: borderWidth, color: colorBorder } :
                                    !idx ? { width: borderWidth, color: colorBorder } : { width: borderWidth, color: 'transparent' };
                            return result;
                        }),
                        borderRight: $$.$me_atom2_prop(['<.idx_selected', '<.option_ids', '<.colorBorder', '<.colorBorderSelected', '<.borderWidth'], ({ masters: [idx_selected, option_ids, colorBorder, colorBorderSelected, borderWidth] }) => {
                            const idx = option_ids.indexOf(id);
                            const result = ~idx_selected.indexOf(idx) ? { width: borderWidth, color: colorBorderSelected } :
                                idx == option_ids.length - 1 || !~idx_selected.indexOf(idx + 1) ? { width: borderWidth, color: colorBorder } :
                                    { width: borderWidth, color: 'transparent' };
                            return result;
                        }),
                        colorText: $$.$me_atom2_prop(['.isSelected', '<.colorTextSelected', '<.colorText'], ({ masters: [isSelected, colorTextSelected, colorText] }) => isSelected ? colorTextSelected : colorText),
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                    },
                    elem: {
                        title: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#alignHor': '<<.itemAlignHor',
                                '#alignVer': '<<.itemAlignVer',
                                fontSize: '<.fontSize',
                            },
                            dom: {
                                innerHTML: $$.$me_atom2_prop(['<<.options', '<<.value'], ({ masters: [options, value] }) => $$.$me_option_caption_text(id, options, value)),
                            },
                            style: {
                                textAlign: $$.$me_atom2_prop(['<<.itemAlignHor'], ({ masters: [align] }) => {
                                    var res = 'left';
                                    if (align == $$.$me_align.center) {
                                        res = 'center';
                                    }
                                    else if (align == $$.$me_align.right) {
                                        res = 'right';
                                    }
                                    return res;
                                }),
                            }
                        }),
                    },
                    style: {
                        overflow: () => 'hidden',
                        borderStyle: () => 'solid',
                        borderWidth: $$.$me_atom2_prop(['<.borderWidth'], ({ masters: [w] }) => w || 0),
                        borderLeftWidth: $$.$me_atom2_prop(['.borderLeft'], ({ masters: [border] }) => border.width || 0),
                        borderLeftColor: $$.$me_atom2_prop(['.borderLeft'], ({ masters: [border] }) => border.color || 'transparent'),
                        borderRightWidth: $$.$me_atom2_prop(['.borderRight'], ({ masters: [border] }) => border.width || 0),
                        borderRightColor: $$.$me_atom2_prop(['.borderRight'], ({ masters: [border] }) => border.color || 'transparent'),
                        borderColor: $$.$me_atom2_prop(['.isSelected', '<.colorBorder', '<.colorBorderSelected'], ({ masters: [isSelected, colorBorder, colorBorderSelected] }) => isSelected ? colorBorderSelected : colorBorder),
                        borderTopLeftRadius: $$.$me_atom2_prop(['.idx', '<.borderRadius'], ({ masters: [idx, borderRadius] }) => idx ? 0 : borderRadius),
                        borderBottomLeftRadius: $$.$me_atom2_prop(['.idx', '<.borderRadius'], ({ masters: [idx, borderRadius] }) => idx ? 0 : borderRadius),
                        borderTopRightRadius: $$.$me_atom2_prop(['.idx', '<.option_ids', '<.borderRadius'], ({ masters: [idx, option_ids, borderRadius] }) => idx != option_ids.length - 1 ? 0 : borderRadius),
                        borderBottomRightRadius: $$.$me_atom2_prop(['.idx', '<.option_ids', '<.borderRadius'], ({ masters: [idx, option_ids, borderRadius] }) => idx != option_ids.length - 1 ? 0 : borderRadius),
                        backgroundColor: $$.$me_atom2_prop(['.isSelected', '<.colorBackgroundSelected', '<.colorBackground'], ({ masters: [isSelected, colorBackgroundSelected, colorBackground] }) => isSelected ? colorBackgroundSelected : colorBackground),
                    },
                    prop_non_render: {
                        '#cursor': $$.$me_atom2_prop(['<.value'], ({ masters: [value] }) => value instanceof Set || value != id ? 'pointer' : null),
                    },
                    event: {
                        clickOrTap: () => {
                            let value = $$.a('<.value');
                            if (typeof value == 'string' && value == id)
                                return false;
                            if (value instanceof Set) {
                                if (value.has(id)) {
                                    value.delete(id);
                                }
                                else {
                                    value.add(id);
                                }
                            }
                            else
                                value = id;
                            $$.a('<.value', value, true);
                            return true;
                        },
                    },
                })),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//select.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_select_elem = {
            base: $$.$me_select_elem,
            prop: {
                options: $$.$me_atom2_prop_abstract(),
                value: $$.$me_atom2_prop(['.option_ids'], ({ masters: [ids] }) => ids[0]),
                colorBorder: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    '#bdc3d1' :
                    '#d8dce3'),
                colorBorderSelected: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    '#008ecf' :
                    '#008ecf'),
                colorBackground: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    'white' :
                    '#878f9b'),
                colorBackgroundSelected: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    '#f0f1f4' :
                    '#747B89'),
                borderRadius: () => 4,
                borderWidth: () => 1,
                paddingHor: () => 0,
                option_ids: $$.$me_atom2_prop_keys(['.options']),
                '#width': () => 440,
                '#height': () => 32,
                option_width_min: () => 40,
                colorText: $$.$me_atom2_prop(['/.theme', '/.colorText'], ({ masters: [theme, colorText] }) => theme == $$.$me_theme.light ?
                    '#0070a4' :
                    colorText),
                colorTextSelected: '/.colorText',
                fontFamily: '/.fontFamily',
                fontWeight: '/.fontWeight',
                fontWeightSelected: '.fontWeight',
                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//select.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_subscription_workspace = {
            prop: {
                sections: () => ({
                    balance: {
                        caption: 'Баланс',
                    },
                    subscription: {
                        caption: 'Подписка',
                    },
                    docs: {
                        caption: 'Документы',
                    },
                }),
                section_ids: $$.$me_atom2_prop_keys(['.sections']),
                selected: $$.$me_atom2_prop_store({
                    default: () => $$.a('.section_ids')[0],
                    valid: (val) => val == $$.a('.sections')[val] ? val : null,
                }),
            },
            elem: {
                tabs: () => ({
                    base: $$.$nl_subscription_tabs,
                    prop: {
                        options: '<.sections',
                        selected: $$.$me_atom2_prop_bind('<.selected'),
                        '#height': '/@app@menu@login.#height',
                        '#ofsHor': () => 36,
                        '#ofsVer': '.em',
                    },
                }),
                balance: () => ({
                    base: $$.$nl_panel,
                    prop: {
                        '#ofsHor': '.em',
                        '#ofsVer': () => 54,
                        '#width': $$.$me_atom2_prop(['<.#width', '.em'], ({ masters: [width, ofs] }) => width - 3 * ofs),
                        '#height': () => 205,
                        sum: () => 0,
                        ls: () => '00633',
                    },
                    elem: {
                        title: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.pm',
                                '#ofsVer': '.pm',
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 18,
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop(['<<.sections', '<.sum'], ({ masters: [sections, sum] }) => $$.$me_option_caption_text('balance', sections).toUpperCase() + ': ' + sum + ' ₽'),
                            },
                        }),
                        label_sum: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 77,
                            },
                            style: {
                                fontSize: () => 14,
                            },
                            dom: {
                                innerText: () => 'Пополнить баланс',
                            },
                        }),
                        sum: () => ({
                            base: $$.$nl_input,
                            prop: {
                                '#width': () => 100,
                                '#height': () => 32,
                                '#ofsHor': $$.$me_atom2_prop(['<@label_sum.#width', '.em', '.pm'], ({ masters: [width, ofs, panelOfs] }) => panelOfs + width + ofs),
                                '#ofsVer': () => 69,
                            },
                        }),
                        label_ls: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': () => 514,
                                '#ofsVer': () => 77,
                            },
                            style: {
                                fontSize: () => 14,
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop(['<.ls'], ({ masters: [ls] }) => 'Ваш лицевой счет: ' + ls),
                            },
                        }),
                        webmoney: () => ({
                            node: 'img',
                            prop: {
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 133,
                                '#width': () => 150,
                                '#height': () => 40,
                            },
                            attr: {
                                src: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'assets/payment_w.png' : 'assets/payment_w.png'),
                                draggable: () => false,
                            },
                        }),
                        visa: () => ({
                            node: 'img',
                            prop: {
                                '#ofsHor': $$.$me_atom2_prop(['<@webmoney.#width', '.em', '.pm'], ({ masters: [width, ofs, panelOfs] }) => panelOfs + width + ofs),
                                '#ofsVer': () => 133,
                                '#width': () => 150,
                                '#height': () => 40,
                            },
                            attr: {
                                src: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'assets/payment_v.png' : 'assets/payment_v.png'),
                                draggable: () => false,
                            },
                        }),
                        mir: () => ({
                            node: 'img',
                            prop: {
                                '#ofsHor': $$.$me_atom2_prop(['<@webmoney.#width', '<@visa.#width', '.em', '.pm'], ({ masters: [width, width2, ofs, panelOfs] }) => panelOfs + width + ofs + width2 + ofs),
                                '#ofsVer': () => 133,
                                '#width': () => 150,
                                '#height': () => 40,
                            },
                            attr: {
                                src: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'assets/payment_m.png' : 'assets/payment_m.png'),
                                draggable: () => false,
                            },
                        }),
                        ymoney: () => ({
                            node: 'img',
                            prop: {
                                '#ofsHor': $$.$me_atom2_prop(['<@webmoney.#width', '<@visa.#width', '<@mir.#width', '.em', '.pm'], ({ masters: [width, width2, width3, ofs, panelOfs] }) => panelOfs + width + ofs + width2 + ofs + width3 + ofs),
                                '#ofsVer': () => 133,
                                '#width': () => 150,
                                '#height': () => 40,
                            },
                            attr: {
                                src: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'assets/payment_y.png' : 'assets/payment_y.png'),
                                draggable: () => false,
                            },
                        }),
                    },
                }),
                subscription: () => ({
                    base: $$.$nl_panel,
                    prop: {
                        '#ofsHor': '.em',
                        '#ofsVer': $$.$me_atom2_prop(['<@balance.#height', '<@balance.#ofsVer', '.em'], ({ masters: [height, ofsVer, ofs] }) => height + ofsVer + ofs),
                        '#width': $$.$me_atom2_prop(['<.#width', '.em'], ({ masters: [width, ofs] }) => width - 3 * ofs),
                        '#height': () => 518,
                        currentSubscription: () => 'Квартиры и комнаты Москва, 1 месяц',
                        leftControlOfs: () => 236,
                        selectedSum: () => 2500,
                    },
                    elem: {
                        title: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.pm',
                                '#ofsVer': '.pm',
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 18,
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop(['<<.sections', '<.currentSubscription'], ({ masters: [sections, current] }) => $$.$me_option_caption_text('subscription', sections).toUpperCase() + ': ' + current),
                            },
                        }),
                        icon1: () => ({
                            node: 'img',
                            prop: {
                                '#width': () => 28,
                                '#height': () => 28,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 86,
                            },
                            attr: {
                                src: () => 'assets/icons-8-conference-call.png',
                            },
                            style: {
                                filter: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '' : 'brightness(0%) invert(100%) sepia(89%) saturate(0%) hue-rotate(253deg) brightness(112%) contrast(100%)'),
                            },
                        }),
                        label_sum2: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': () => 68,
                                '#ofsVer': () => 92,
                            },
                            style: {
                                fontSize: () => 14,
                            },
                            dom: {
                                innerText: () => 'Пополнить баланс',
                            },
                        }),
                        sum2: () => ({
                            base: $$.$nl_input,
                            prop: {
                                '#width': () => 100,
                                '#height': () => 24,
                                '#ofsHor': '<.leftControlOfs',
                                '#ofsVer': () => 88,
                            },
                        }),
                        label_promo: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#alignHor': () => $$.$me_align.right,
                                '#ofsHor': $$.$me_atom2_prop(['<@promocode.#width', '.pm'], ({ masters: [width, ofs] }) => width + ofs * 2),
                                '#ofsVer': () => 92,
                            },
                            style: {
                                fontSize: () => 14,
                            },
                            dom: {
                                innerText: () => 'Промокод ГРМ',
                            },
                        }),
                        promocode: () => ({
                            base: $$.$nl_input,
                            prop: {
                                '#width': () => 100,
                                '#height': () => 24,
                                '#alignHor': () => $$.$me_align.right,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 88,
                            },
                        }),
                        icongrm: () => ({
                            node: 'img',
                            prop: {
                                '#width': () => 28,
                                '#height': () => 28,
                                '#alignHor': () => $$.$me_align.right,
                                '#ofsHor': $$.$me_atom2_prop(['<@promocode.#width', '<@label_promo.#width', '.pm'], ({ masters: [width, width2, ofs, ofs2] }) => width + width2 + 8 + ofs * 2),
                                '#ofsVer': () => 86,
                            },
                            attr: {
                                src: () => 'assets/grm-logo-fnl.png',
                            },
                        }),
                        icon2: () => ({
                            node: 'img',
                            prop: {
                                '#width': () => 28,
                                '#height': () => 28,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 146,
                            },
                            attr: {
                                src: () => 'assets/icons-8-data-sheet.png',
                            },
                            style: {
                                filter: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '' : 'brightness(0%) invert(100%) sepia(89%) saturate(0%) hue-rotate(253deg) brightness(112%) contrast(100%)'),
                            },
                        }),
                        label_period: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': () => 68,
                                '#ofsVer': () => 152,
                            },
                            style: {
                                fontSize: () => 14,
                            },
                            dom: {
                                innerText: () => 'Период подключения',
                            },
                        }),
                        period: () => ({
                            base: $$.$nl_select_elem,
                            prop: {
                                '#width': $$.$me_atom2_prop(['<.#width', '.pm', '<.leftControlOfs'], ({ masters: [width, ofs, leftOfs] }) => width - ofs - leftOfs),
                                '#height': () => 24,
                                '#ofsHor': '<.leftControlOfs',
                                '#ofsVer': () => 148,
                                'fontsyze': () => 14,
                                options: () => ({
                                    per1: { caption: '2 дня' },
                                    per2: { caption: '7 дней' },
                                    per3: { caption: '1 месяц' },
                                    per4: { caption: '3 месяца' },
                                    per5: { caption: '6 месяцев' },
                                    per6: { caption: '12 месяцев' },
                                }),
                            },
                        }),
                        icon3: () => ({
                            node: 'img',
                            prop: {
                                '#width': () => 28,
                                '#height': () => 28,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 206,
                            },
                            attr: {
                                src: () => 'assets/icons-8-apartment.png',
                            },
                            style: {
                                filter: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '' : 'brightness(0%) invert(100%) sepia(89%) saturate(0%) hue-rotate(253deg) brightness(112%) contrast(100%)'),
                            },
                        }),
                        label_segment: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': () => 68,
                                '#ofsVer': () => 212,
                            },
                            style: {
                                fontSize: () => 14,
                            },
                            dom: {
                                innerText: () => 'Раздел недвижимости',
                            },
                        }),
                        segment: () => ({
                            base: $$.$nl_select_elem,
                            prop: {
                                '#width': $$.$me_atom2_prop(['<.#width', '.pm', '<.leftControlOfs'], ({ masters: [width, ofs, leftOfs] }) => width - ofs - leftOfs),
                                '#height': () => 64,
                                '#ofsHor': '<.leftControlOfs',
                                '#ofsVer': () => 204,
                                'fontSize': () => 14,
                                '#alignHor': () => $$.$me_align.left,
                                options: () => ({
                                    seg1: { caption: 'Жилая<br>Московская область<br>1250 ₽', width: 100 },
                                    seg2: { caption: 'Жилая<br>Москва и область<br>2500 ₽' },
                                    seg3: { caption: 'Загородная<br>Москва и область<br>2500 ₽' },
                                    seg4: { caption: 'Коммерческая<br>Москва и область<br>2500 ₽' },
                                    seg5: { caption: 'Все разделы<br>Москва и область<br>6250 ₽' },
                                }),
                            },
                        }),
                        banner: () => ({
                            prop: {
                                '#height': () => 125,
                                '#width': '<.#width',
                                '#ofsVer': () => 313,
                            },
                            style: {
                                backgroundColor: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#ffffcc' : '#6b7277'),
                            },
                            elem: {
                                label_1: () => ({
                                    prop: {
                                        '#height': () => null,
                                        '#width': () => null,
                                        '#ofsHor': '.pm',
                                        '#ofsVer': () => 38,
                                    },
                                    style: {
                                        fontSize: () => 18,
                                    },
                                    dom: {
                                        innerText: () => 'Сумма к оплате',
                                    },
                                }),
                                label_2: () => ({
                                    prop: {
                                        '#height': () => null,
                                        '#width': () => null,
                                        '#ofsHor': '.pm',
                                        '#ofsVer': () => 69,
                                        fontSize: () => 14,
                                    },
                                    dom: {
                                        innerText: () => 'С учетом баланса лицевого счёта',
                                    },
                                }),
                                label_3: () => ({
                                    prop: {
                                        '#height': () => null,
                                        '#width': () => null,
                                        '#ofsHor': () => 305,
                                        '#ofsVer': () => 25,
                                    },
                                    style: {
                                        fontSize: () => 32,
                                        fontWeight: () => 500,
                                    },
                                    dom: {
                                        innerText: $$.$me_atom2_prop(['<<.selectedSum'], ({ masters: [sum] }) => sum + ' ₽'),
                                    },
                                }),
                                autoprolongation: () => ({
                                    base: $$.$nl_checkbox,
                                    prop: {
                                        boxSize: () => 14,
                                        '#height': () => 32,
                                        '#width': () => 360,
                                        '#ofsVer': () => 62,
                                        '#ofsHor': () => 305,
                                        caption: () => 'Автоматически продлить подписку на следующий',
                                        checked: () => true,
                                        fontSize: () => 14,
                                    },
                                }),
                                label_4: () => ({
                                    prop: {
                                        '#height': () => null,
                                        '#width': () => null,
                                        '#ofsHor': () => 328,
                                        '#ofsVer': () => 90,
                                        fontSize: () => 14,
                                    },
                                    dom: {
                                        innerText: () => ' период при положительном балансе',
                                    },
                                }),
                                pay_button: () => ({
                                    base: $$.$nl_button,
                                    prop: {
                                        '#width': () => 208,
                                        '#height': () => 52,
                                        '#ofsVer': () => 36,
                                        '#alignHor': () => $$.$me_align.right,
                                        '#ofsHor': '.pm',
                                        caption: () => 'Оплатить',
                                        target: () => '<',
                                        fontSize: () => 20,
                                        cmd: () => ({ some: 'thing' })
                                    },
                                    event: {
                                        clickOrTap: () => {
                                            return true;
                                        },
                                    }
                                }),
                            },
                        }),
                    },
                }),
                docs: () => ({
                    base: $$.$nl_panel,
                    prop: {
                        '#ofsHor': '.em',
                        '#ofsVer': $$.$me_atom2_prop(['<@balance.#height', '<@subscription.#height', '<@balance.#ofsVer', '.em'], ({ masters: [height, height2, ofsVer, ofs] }) => height + height2 + ofsVer + ofs + ofs),
                        '#width': $$.$me_atom2_prop(['<.#width', '.em'], ({ masters: [width, ofs] }) => width - 3 * ofs),
                        '#height': () => 420,
                        inputOfs: () => 171,
                    },
                    elem: {
                        title: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => null,
                                '#ofsHor': '.pm',
                                '#ofsVer': '.pm',
                            },
                            style: {
                                fontFamily: () => 'system-ui',
                                fontSize: () => 18,
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop(['<<.sections'], ({ masters: [sections] }) => $$.$me_option_caption_text('docs', sections).toUpperCase()),
                            },
                        }),
                        label1: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => 456,
                                '#ofsHor': '.pm',
                                '#ofsVer': () => 77,
                            },
                            style: {
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => 'Договоры:',
                            },
                        }),
                        doc1: () => ({
                            base: document_item,
                            prop: {
                                '#height': () => null,
                                '#ofsHor': () => 64,
                                '#ofsVer': $$.$me_atom2_prop(['.#ofsVer', '.#height'].map(s => '<@label1' + s), $$.$me_atom2_prop_compute_fn_sum(5)),
                                caption: () => 'Договор №00937-18 от 18.10.2018',
                                fontSize: () => 14,
                            },
                        }),
                        label2: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => 456,
                                '#ofsHor': '.pm',
                                '#ofsVer': $$.$me_atom2_prop(['.#ofsVer', '.#height'].map(s => '<@doc1' + s), $$.$me_atom2_prop_compute_fn_sum(40)),
                            },
                            style: {
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => 'Акты:',
                            },
                        }),
                        act1: () => ({
                            base: document_item,
                            prop: {
                                '#height': () => null,
                                '#ofsHor': () => 64,
                                '#ofsVer': $$.$me_atom2_prop(['.#ofsVer', '.#height'].map(s => '<@label2' + s), $$.$me_atom2_prop_compute_fn_sum(5)),
                                caption: () => 'Акт приема передачи №Ф-33871 от 05.09.2019',
                                fontSize: () => 14,
                            },
                        }),
                        label3: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => 456,
                                '#ofsHor': '.pm',
                                '#ofsVer': $$.$me_atom2_prop(['.#ofsVer', '.#height'].map(s => '<@act1' + s), $$.$me_atom2_prop_compute_fn_sum(40)),
                            },
                            style: {
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => 'Прочие:',
                            },
                        }),
                        other1: () => ({
                            base: document_item,
                            prop: {
                                '#height': () => null,
                                '#ofsHor': () => 64,
                                '#ofsVer': $$.$me_atom2_prop(['.#ofsVer', '.#height'].map(s => '<@label3' + s), $$.$me_atom2_prop_compute_fn_sum(5)),
                                caption: () => 'Договор-оферта об использовании ЭЦП',
                                fontSize: () => 14,
                            },
                        }),
                        label4: () => ({
                            prop: {
                                '#height': () => null,
                                '#width': () => 456,
                                '#ofsHor': '.pm',
                                '#ofsVer': $$.$me_atom2_prop(['.#ofsVer', '.#height'].map(s => '<@other1' + s), $$.$me_atom2_prop_compute_fn_sum(40)),
                            },
                            style: {
                                fontSize: () => 16,
                            },
                            dom: {
                                innerText: () => 'Ключи клиента:',
                            },
                        }),
                        public_key: () => ({
                            prop: {
                                '#width': () => null,
                                '#height': () => null,
                                '#ofsVer': $$.$me_atom2_prop(['.#ofsVer', '.#height'].map(s => '<@label4' + s), $$.$me_atom2_prop_compute_fn_sum(5)),
                                '#ofsHor': () => 64,
                                '#cursor': () => 'pointer',
                                colorText: '/.colorLink',
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                                fontSize: () => 14,
                            },
                            dom: {
                                innerText: () => 'Публичный (открытый) ключ клиента от 09.10.2017 13:58:14'
                            },
                            event: {
                                clickOrTap: () => {
                                    return true;
                                },
                            },
                        }),
                        private_key: () => ({
                            prop: {
                                '#width': () => null,
                                '#height': () => null,
                                '#ofsVer': $$.$me_atom2_prop(['.#ofsVer', '.#height'].map(s => '<@public_key' + s), $$.$me_atom2_prop_compute_fn_sum(5)),
                                '#ofsHor': () => 64,
                                '#cursor': () => 'pointer',
                                colorText: '/.colorLink',
                                fontSize: () => 14,
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                            },
                            dom: {
                                innerText: () => 'Приватный (закрытый) ключ клиента от 09.10.2017 13:58:14'
                            },
                            event: {
                                clickOrTap: () => {
                                    return true;
                                },
                            },
                        }),
                    },
                }),
            },
        };
        const document_item = {
            prop: {
                fontSize: $$.$me_atom2_prop_abstract(),
                caption: $$.$me_atom2_prop_abstract(),
                ofs: () => 5,
            },
            elem: {
                doc_link: () => ({
                    prop: {
                        '#width': () => null,
                        '#height': () => null,
                        '#cursor': () => 'pointer',
                        fontSize: '<.fontSize',
                        colorText: '/.colorLink',
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                    },
                    dom: {
                        innerText: '<.caption'
                    },
                    event: {
                        clickOrTap: () => {
                            return true;
                        },
                    },
                }),
                text1: () => ({
                    prop: {
                        '#width': () => null,
                        '#height': () => null,
                        fontSize: '<.fontSize',
                        '#ofsHor': $$.$me_atom2_prop(['<@doc_link.#width', '<.ofs'], ({ masters: [width, ofs] }) => width + ofs),
                    },
                    dom: {
                        innerText: () => ' (подписи: ',
                    },
                }),
                winner_sign: () => ({
                    prop: {
                        '#width': () => null,
                        '#height': () => null,
                        '#ofsHor': $$.$me_atom2_prop(['<@doc_link.#width', '<@text1.#width', '<.ofs'], ({ masters: [width, width2, ofs] }) => width + ofs + width2 + ofs),
                        '#cursor': () => 'pointer',
                        fontSize: '<.fontSize',
                        colorText: '/.colorLink',
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                    },
                    dom: {
                        innerText: () => 'WinNER',
                    },
                    event: {
                        clickOrTap: () => {
                            return true;
                        },
                    },
                }),
                text2: () => ({
                    prop: {
                        '#width': () => null,
                        '#height': () => null,
                        fontSize: '<.fontSize',
                        '#ofsHor': $$.$me_atom2_prop(['<@doc_link.#width', '<@text1.#width', '<@winner_sign.#width', '<.ofs'], ({ masters: [width, width2, width3, ofs] }) => width + ofs + width2 + ofs + width3 + ofs),
                    },
                    dom: {
                        innerText: () => ' | ',
                    },
                }),
                client_sign: () => ({
                    prop: {
                        '#width': () => null,
                        '#height': () => null,
                        '#cursor': () => 'pointer',
                        '#ofsHor': $$.$me_atom2_prop(['<@doc_link.#width', '<@text1.#width', '<@winner_sign.#width', '<@text2.#width', '<.ofs'], ({ masters: [width, width2, width3, width4, ofs] }) => width + ofs + width2 + ofs + width3 + ofs + width4 + ofs),
                        fontSize: '<.fontSize',
                        colorText: '/.colorLink',
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                    },
                    dom: {
                        innerText: () => 'клиента'
                    },
                    event: {
                        clickOrTap: () => {
                            return true;
                        },
                    },
                }),
                text3: () => ({
                    prop: {
                        '#width': () => null,
                        '#height': () => null,
                        '#ofsHor': $$.$me_atom2_prop(['<@doc_link.#width', '<@text1.#width', '<@winner_sign.#width', '<@text2.#width', '<@client_sign.#width', '<.ofs'], ({ masters: [width, width2, width3, width4, width5, ofs] }) => width + ofs + width2 + ofs + width3 + ofs + width4 + ofs + width5),
                        fontSize: '<.fontSize',
                    },
                    dom: {
                        innerText: () => ')',
                    },
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//workspace.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_app = (rootElem) => {
            $$.$nl_defaults_init();
            return new $$.$me_atom2_elem({ tail: 'app', cnf: {
                    node: rootElem,
                    dispatch(dispatch_name, dispatch_arg) {
                        if (dispatch_name == 'tapEffect') {
                            $$.a('.tapTarget', 0);
                            $$.a('.tapTarget', dispatch_arg);
                            return true;
                        }
                        return false;
                    },
                    style: {
                        margin: () => 0,
                        background: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? '#D9DCE2' : '#8C93A4'),
                        touchAction: () => 'none,'
                    },
                    prop: Object.assign({ tapTarget: () => 0 }, $$.$me_atom2_prop_same_def($$.$me_atom2_prop_store({
                        default: () => false,
                        valid: (val) => typeof val == 'boolean' ?
                            val :
                            null,
                    }), ['isShownLoginForm', 'isShownLoginMenu']), { login: $$.$me_atom2_prop_store({
                            default: () => '',
                            valid: (val) => typeof val == 'string' ?
                                val.trim() :
                                null,
                            condition: ['.stayLogged'],
                        }), stayLogged: $$.$me_atom2_prop_store({
                            default: () => false,
                            valid: (val) => typeof val == 'boolean' ?
                                val :
                                null,
                        }), '#order': () => ['menu', 'workspace', 'login', 'tapEffect'] }),
                    elem: {
                        menu: () => menu,
                        workspace: () => workspace,
                        login: $$.$me_atom2_prop(['.isShownLoginForm'], ({ masters: [isShownLoginForm] }) => !isShownLoginForm ? null : {
                            base: $$.$nl_login,
                            prop: {
                                selected: () => 'enter',
                                isShown: $$.$me_atom2_prop_bind('<.isShownLoginForm'),
                                stayLogged: $$.$me_atom2_prop_bind('<.stayLogged'),
                                login: $$.$me_atom2_prop_bind('<.login'),
                            },
                        }),
                        tapEffect: $$.$me_atom2_prop(['.tapTarget'], ({ masters: [tapTarget] }) => {
                            if (!tapTarget)
                                return null;
                            const size = 70;
                            const prop_clientRect = tapTarget.ec.by_path_s('.#clientRect');
                            const name_prop_clientRect = prop_clientRect.name();
                            const clientRect = prop_clientRect.value();
                            const ofsHor = tapTarget.event.touches[0].clientX - clientRect.left - size / 2;
                            const ofsVer = tapTarget.event.touches[0].clientY - clientRect.top - size / 2;
                            const prop_tapTarget = $$.a.get('.tapTarget');
                            const animationEndHandler = () => {
                                prop_tapTarget.value(0);
                            };
                            const animEndEventNames = { 'WebkitAnimation': 'webkitAnimationEnd', 'OAnimation': 'oAnimationEnd', 'msAnimation': 'MSAnimationEnd', 'animation': 'animationend' };
                            const animEndEventName = animEndEventNames[window.Modernizr.prefixed('animation')];
                            return {
                                type: name_prop_clientRect,
                                dom: {
                                    className: () => 'tapEffect',
                                },
                                prop: {
                                    '#width': () => size,
                                    '#height': () => size,
                                    '#ofsHor': $$.$me_atom2_prop([name_prop_clientRect], ({ masters: [clientRect] }) => clientRect.left + ofsHor),
                                    '#ofsVer': $$.$me_atom2_prop([name_prop_clientRect], ({ masters: [clientRect] }) => clientRect.top + ofsVer),
                                },
                                init: ec => {
                                    ec.node.addEventListener(animEndEventName, animationEndHandler);
                                },
                                fini: ec => {
                                    ec.node.removeEventListener(animEndEventName, animationEndHandler);
                                },
                            };
                        }),
                    },
                } });
        };
        const workspace = {
            prop: {
                '#ofsHor': '<@menu.#width',
                '#width': $$.$me_atom2_prop(['/.#viewportWidth', '.#ofsHor'], ({ masters: [viewportWidth, ofsHor] }) => viewportWidth - ofsHor),
            },
            elem: {
                main: $$.$me_atom2_prop(['<@menu@list.selected'], ({ masters: [selected], prev }) => selected != 'main' ? prev || null : {
                    type: '$nl_main_workspace',
                    base: $$.$nl_main_workspace,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<<@menu@list.selected'], ({ masters: [selected] }) => selected != 'main'),
                    },
                }),
                search: $$.$me_atom2_prop(['<@menu@list.selected'], ({ masters: [selected], prev }) => selected != 'search' ? prev || null : {
                    type: '$nl_search_workspace',
                    base: $$.$nl_search_workspace,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<<@menu@list.selected'], ({ masters: [selected] }) => selected != 'search'),
                    },
                }),
                favorites: $$.$me_atom2_prop(['<@menu@list.selected'], ({ masters: [selected], prev }) => selected != 'favorites' ? prev || null : {
                    type: '$nl_favorites_workspace',
                    base: $$.$nl_favorites_workspace,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<<@menu@list.selected'], ({ masters: [selected] }) => selected != 'favorites'),
                    },
                }),
                orders: $$.$me_atom2_prop(['<@menu@list.selected'], ({ masters: [selected], prev }) => selected != 'orders' ? prev || null : {
                    type: '$nl_orders_workspace',
                    base: $$.$nl_orders_workspace,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<<@menu@list.selected'], ({ masters: [selected] }) => selected != 'orders'),
                    },
                }),
                clients: $$.$me_atom2_prop(['<@menu@list.selected'], ({ masters: [selected], prev }) => selected != 'clients' ? prev || null : {
                    type: '$nl_clients_workspace',
                    base: $$.$nl_clients_workspace,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<<@menu@list.selected'], ({ masters: [selected] }) => selected != 'clients'),
                    },
                }),
                advs: $$.$me_atom2_prop(['<@menu@list.selected'], ({ masters: [selected], prev }) => selected != 'advs' ? prev || null : {
                    type: '$nl_advs_workspace',
                    base: $$.$nl_advs_workspace,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<<@menu@list.selected'], ({ masters: [selected] }) => selected != 'advs'),
                    },
                }),
                feedback: $$.$me_atom2_prop(['<@menu@list.selected'], ({ masters: [selected], prev }) => selected != 'feedback' ? prev || null : {
                    type: '$nl_feedback_workspace',
                    base: $$.$nl_feedback_workspace,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<<@menu@list.selected'], ({ masters: [selected] }) => selected != 'feedback'),
                    },
                }),
                settings: $$.$me_atom2_prop(['<@menu@list.selected'], ({ masters: [selected], prev }) => selected != 'settings' ? prev || null : {
                    type: '$nl_settings_workspace',
                    base: $$.$nl_settings_workspace,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<<@menu@list.selected'], ({ masters: [selected] }) => selected != 'settings'),
                    },
                }),
                subscription: $$.$me_atom2_prop(['<@menu@list.selected'], ({ masters: [selected], prev }) => selected != 'subscription' ? prev || null : {
                    type: '$nl_subscription_workspace',
                    base: $$.$nl_subscription_workspace,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<<@menu@list.selected'], ({ masters: [selected] }) => selected != 'subscription'),
                    },
                }),
            },
            style: {},
        };
        const menu = {
            prop: {
                isShrinked: $$.$me_atom2_prop_store({
                    default: () => false,
                    valid: (val) => typeof val == 'boolean' ? val : null,
                }),
                '#width': $$.$me_atom2_prop(['.isShrinked'], ({ masters: [isShrinked] }) => $$.$me_atom2_anim({
                    to: isShrinked ? 64 : 222,
                    path_active: $$.a.get('.isShrinked_animActive').path,
                })),
                isShrinked_animActive: $$.$me_atom2_prop([], () => false),
                '#order': () => ['ear', 'login', 'list'],
            },
            elem: {
                login: () => login,
                ear: () => ear,
                list: () => list,
            },
        };
        const loginMenu = {
            prop: {
                items: () => ({
                    'Другой пользователь': {},
                    'Сменить пароль': {},
                    'Выйти': {},
                }),
                item_keys: $$.$me_atom2_prop_keys(['.items']),
                item: $$.$me_atom2_prop({ keys: ['.item_keys'], masters: ['.items'] }, ({ key: [id], masters: [items] }) => items[id]),
            },
        };
        const login = {
            prop: {
                '#height': () => 54,
                '#cursor': () => 'pointer',
                'colorBackground': $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                    '#474F61' :
                    '#d8dce3'),
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
            },
            style: {
                background: '.colorBackground',
                overflow: () => 'hidden',
                userSelect: () => 'none',
            },
            event: {
                clickOrTap: () => {
                    if (!$$.a('/@app.login')) {
                        $$.a('/@app.isShownLoginForm', true);
                    }
                    else {
                        $$.a.update('/@app.isShownLoginMenu', val => !val);
                    }
                    return true;
                },
            },
            elem: {
                iconSquare: () => ({
                    prop: {
                        '#width': () => 28,
                        '#height': () => 28,
                        '#ofsHor': $$.$me_atom2_prop(['<<.isShrinked'], ({ masters: [isShrinked] }) => $$.$me_atom2_anim({
                            to: isShrinked ? 18 : 16
                        })),
                        '#alignVer': () => $$.$me_align.center,
                    },
                    elem: {
                        icon: () => ({
                            node: 'img',
                            prop: {
                                '#width': $$.$me_atom2_prop(['/@app.login'], ({ masters: [login] }) => login ? 22 : 20),
                                '#height': () => 22,
                                '#align': () => $$.$me_align.center,
                            },
                            attr: {
                                src: $$.$me_atom2_prop(['/@app.login'], ({ masters: [login] }) => 'assets/' + (login ? 'icons-8-user' : 'icons-8-enter-2') + '@2x.png'),
                            },
                            style: {
                                filter: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ?
                                    'brightness(0%) invert(100%) sepia(89%) saturate(0%) hue-rotate(253deg) brightness(112%) contrast(100%)' :
                                    'brightness(0%) invert(18%) sepia(11%) saturate(1273%) hue-rotate(184deg) brightness(92%) contrast(86%)'),
                            },
                        }),
                    },
                }),
                text: () => ({
                    prop: {
                        '#width': () => null,
                        '#ofsHor': () => 61,
                        '#height': () => null,
                        '#alignVer': () => $$.$me_align.center,
                        '#hidden': $$.$me_atom2_prop(['<<.isShrinked', '<<.isShrinked_animActive'], ({ masters: [isShrinked, isShrinked_animActive] }) => isShrinked && !isShrinked_animActive),
                    },
                    style: {
                        color: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'white' : '#313745'),
                        whiteSpace: () => 'nowrap',
                        overflow: () => 'hidden',
                        textOverflow: () => 'ellipsis',
                    },
                    dom: {
                        innerText: $$.$me_atom2_prop(['/@app.login'], ({ masters: [login] }) => login ? login : 'Авторизация'),
                    },
                }),
            },
        };
        const ear = {
            prop: {
                '#height': '<@login.#height',
                '#width': () => 17,
                '#ofsHor': $$.$me_atom2_prop(['<@login.#width', '.#isHover', '<.isShrinked', '<.isShrinked_animActive'], ({ masters: [width, isHover, isShrinked, isShrinked_animActive] }) => {
                    if (isHover)
                        isShrinked = !isShrinked;
                    return width + (isShrinked ? 0 : 2);
                }),
                '#cursor': () => 'pointer',
            },
            elem: {
                img: () => ({
                    node: 'img',
                    prop: {
                        '#height': () => 72,
                        '#width': () => 35,
                        '#ofsVer': () => -3,
                        '#ofsHor': () => -9,
                    },
                    attr: {
                        src: $$.$me_atom2_prop(['<<.isShrinked', '<<.isShrinked_animActive', '/.theme'], ({ masters: [isShrinked, isShrinked_animActive, theme] }) => {
                            if (isShrinked_animActive)
                                isShrinked = !isShrinked;
                            return `assets/${$$.$me_theme[theme]}-slide-${isShrinked ? 'right' : 'left'}@2x.png`;
                        }),
                    },
                }),
            },
            event: {
                clickOrTap: () => {
                    $$.a('<.isShrinked', !$$.a('<.isShrinked'));
                    return true;
                },
            },
        };
        const list = {
            prop: {
                '#ofsVer': '<@login.#height',
                '#height': $$.$me_atom2_prop(['.#ofsVer', '<.#height'], ({ masters: [ofsVer, height] }) => height - ofsVer),
                colorBorder: () => 'blue',
                items: () => ({
                    'main': { title: 'Главная', icon: 'icons-8-home', icon_width: 26, icon_height: 23 },
                    'search': { title: 'Поиск', icon: 'icons-8-search' },
                    'favorites': { title: 'Избранное', icon: 'icons-8-star', icon_width: 26, icon_height: 25 },
                    'orders': { title: 'Заказы', icon: 'icons-8-buy' },
                    'clients': { title: 'Клиенты', icon: 'icons-8-meeting', icon_width: 22 },
                    'advs': { title: 'Мои объявления', icon: 'icons-8-resume-website', icon_width: 22, icon_height: 22 },
                    'feedback': { title: 'Обратная связь', icon: 'icons-8-info-popup', icon_width: 22 },
                    'subscription': { title: 'Подписка', icon: 'icons-8-wallet-copy-2', icon_width: 22, icon_height: 22 },
                    'settings': { title: 'Настройки', icon: 'icons-8-settings' },
                }),
                item_id: $$.$me_atom2_prop_keys(['.items']),
                item: $$.$me_atom2_prop({ keys: ['.item_id'], masters: ['.items'] }, ({ key: [id], masters: [items] }) => items[id]),
                item_top: $$.$me_atom2_prop({
                    keys: ['.item_id'],
                    masters: $$.$me_atom2_prop_masters(['.item_id'], ({ key: [id], masters: [ids] }) => {
                        const idx = ids.indexOf(id);
                        return !idx ? [] : [`.item_top[${ids[idx - 1]}]`, '.item_height'];
                    }),
                }, ({ len, masters: [top, height] }) => !len ? 0 : top + height),
                item_caption: $$.$me_atom2_prop({ keys: ['.item_id'], masters: ['.item[]'] }, ({ masters: [item] }) => item.title),
                item_icon: $$.$me_atom2_prop({ keys: ['.item_id'], masters: ['.item[]'] }, ({ masters: [item] }) => 'assets/' + item.icon + '@2x.png'),
                item_icon_width: $$.$me_atom2_prop({ keys: ['.item_id'], masters: ['.item[]'] }, ({ masters: [item] }) => item.icon_width || 24),
                item_icon_height: $$.$me_atom2_prop({ keys: ['.item_id'], masters: ['.item[]'] }, ({ masters: [item] }) => item.icon_height || 24),
                item_height: () => 52,
                selected: $$.$me_atom2_prop_store({
                    default: () => 'main',
                    valid: (val) => typeof val == 'string' ? val : null,
                }),
                menu_cursor: () => '',
            },
            style: {
                background: $$.$me_atom2_prop(['/.theme'], ({ masters: [theme] }) => theme == $$.$me_theme.light ? 'white' : '#464f63'),
            },
            elem: {
                item: $$.$me_atom2_prop({ keys: ['.item_id'] }, ({ key: [id] }) => ({
                    prop: {
                        '#ofsVer': `<.item_top[${id}]`,
                        '#height': '<.item_height',
                        '#cursor': () => 'pointer',
                        'isSelected': $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => id == selected),
                        'isSelectedPrev': $$.$me_atom2_prop(['<.selected', '<.item_id'], ({ masters: [selected, ids] }) => {
                            const idx = ids.indexOf(selected);
                            const result = ~idx && ids.indexOf(id) == idx + 1;
                            return result;
                        }),
                        'isHoveredPrev': $$.$me_atom2_prop(['<.menu_cursor', '<.item_id'], ({ masters: [selected, ids] }) => {
                            const idx = ids.indexOf(selected);
                            const result = ~idx && ids.indexOf(id) == idx + 1;
                            return result;
                        }),
                        'colorBackground': $$.$me_atom2_prop(['.isSelected', '.#isHover', '/.theme'], ({ masters: [isSelected, isHover, theme] }) => isSelected ? (theme == $$.$me_theme.light ? '#0070a4' : '#008ecf') :
                            isHover ? (theme == $$.$me_theme.light ? '#cce2ed' : '#306283') :
                                (theme == $$.$me_theme.light ? 'white' : '#464f63')),
                        'colorText': $$.$me_atom2_prop(['.isSelected', '/.colorText'], ({ masters: [isSelected, color] }) => isSelected ? 'white' : color),
                        menu_cursor_src: $$.$me_atom2_prop(['/.#isTouch', '.#isHover'], ({ masters: [isTouch, isHover] }) => isTouch || !isHover ? '' : id, ({ atom, val }) => {
                            menu_cursor({ origin: atom, val: val });
                        }),
                    },
                    style: {
                        background: '.colorBackground',
                        overflow: () => 'hidden',
                        userSelect: () => 'none',
                    },
                    elem: {
                        iconSquare: () => ({
                            prop: {
                                '#width': () => 28,
                                '#height': () => 28,
                                '#ofsHor': $$.$me_atom2_prop(['<<<.isShrinked'], ({ masters: [isShrinked] }) => $$.$me_atom2_anim({
                                    to: isShrinked ? 18 : 16
                                })),
                                '#alignVer': () => $$.$me_align.center,
                            },
                            elem: {
                                icon: () => ({
                                    node: 'img',
                                    prop: {
                                        '#width': `<<<.item_icon_width[${id}]`,
                                        '#height': `<<<.item_icon_height[${id}]`,
                                        '#align': () => $$.$me_align.center,
                                    },
                                    attr: {
                                        src: `<<<.item_icon[${id}]`
                                    },
                                    style: {
                                        filter: $$.$me_atom2_prop(['<<.isSelected', '/.theme'], ({ masters: [isSelected, theme] }) => isSelected ?
                                            'invert(100%) sepia(89%) saturate(0%) hue-rotate(253deg) brightness(112%) contrast(100%)' :
                                            theme == $$.$me_theme.light ?
                                                'invert(22%) sepia(56%) saturate(3987%) hue-rotate(182deg) brightness(96%) contrast(101%)' :
                                                'invert(45%) sepia(90%) saturate(515%) hue-rotate(154deg) brightness(106%) contrast(97%)'),
                                    },
                                }),
                            },
                        }),
                        text: () => ({
                            prop: {
                                '#alignVer': () => $$.$me_align.center,
                                '#height': () => null,
                                '#ofsHor': () => 61,
                                '#width': () => null,
                                '#hidden': $$.$me_atom2_prop(['<<<.isShrinked', '<<<.isShrinked_animActive'], ({ masters: [isShrinked, isShrinked_animActive] }) => isShrinked && !isShrinked_animActive),
                            },
                            dom: {
                                innerText: `<<.item_caption[${id}]`,
                            },
                            style: {
                                color: '<.colorText',
                                whiteSpace: () => 'nowrap',
                                opacity: $$.$me_atom2_prop(['<<<.isShrinked'], ({ masters: [isShrinked] }) => $$.$me_atom2_anim({ to: isShrinked ? 0 : 1 })),
                            },
                        }),
                        separator: $$.$me_atom2_prop(['<.item_id', '.isSelected', '.isSelectedPrev'], ({ masters: [ids, isSelected, isSelectedPrev] }) => isSelected || isSelectedPrev || !ids.indexOf(id) ? null : {
                            prop: {
                                '#hidden': $$.$me_atom2_prop(['<.#isHover', '<.isHoveredPrev'], $$.$me_atom2_prop_compute_fn_or()),
                                '#ofsHor': $$.$me_atom2_prop(['<<<.isShrinked'], ({ masters: [isShrinked] }) => $$.$me_atom2_anim({
                                    to: isShrinked ? 12 : 16
                                })),
                                '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor'], ({ masters: [width, ofsHor] }) => width - 2 * ofsHor),
                            },
                            style: {
                                borderTop: () => '1px solid #eceff5',
                            },
                        }),
                    },
                    event: {
                        clickOrTap: () => {
                            $$.a('<.selected', id);
                            return true;
                        },
                    },
                })),
            },
        };
        const menu_cursor = $$.$me_atom2_async_multi_origin({
            default: '',
            raf_order: 100,
            flush: (id, prev, _value) => {
                _value.origin.by_path_s('<.menu_cursor').value(id);
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//app.js.map
;
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-prefixed !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,l;for(var u in h)if(h.hasOwnProperty(u)){if(e=[],n=h[u],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],l=s.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function s(e,n){return function(){return e.apply(n,arguments)}}function l(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?s(o,t||n):o);return!1}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function a(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function p(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):E?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function d(){var e=n.body;return e||(e=p(E?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var i,s,l,u,f="modernizr",a=p("div"),c=d();if(parseInt(r,10))for(;r--;)l=p("div"),l.id=o?o[r]:f+(r+1),a.appendChild(l);return i=p("style"),i.type="text/css",i.id="s"+f,(c.fake?c:a).appendChild(i),c.appendChild(a),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),a.id=f,c.fake&&(c.style.background="",c.style.overflow="hidden",u=z.style.overflow,z.style.overflow="hidden",z.appendChild(c)),s=t(a,e),c.fake?(c.parentNode.removeChild(c),z.style.overflow=u,z.offsetHeight):a.parentNode.removeChild(a),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+f(n[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==a(e,null,"position")})}return t}function y(e,n,o,s){function l(){a&&(delete P.style,delete P.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=m(e,o);if(!r(f,"undefined"))return f}for(var a,d,c,y,v,h=["modernizr","tspan","samp"];!P.style&&h.length;)a=!0,P.modElem=p(h.shift()),P.style=P.modElem.style;for(c=e.length,d=0;c>d;d++)if(y=e[d],v=P.style[y],u(y,"-")&&(y=i(y)),P.style[y]!==t){if(s||r(o,"undefined"))return l(),"pfx"==n?y:!0;try{P.style[y]=o}catch(g){}if(P.style[y]!=v)return l(),"pfx"==n?y:!0}return l(),!1}function v(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),u=(e+" "+w.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?y(u,n,o,i):(u=(e+" "+_.join(s+" ")+s).split(" "),l(u,n,t))}var h=[],g={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){h.push({name:e,fn:n,options:t})},addAsyncTest:function(e){h.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=g,Modernizr=new Modernizr;var C=[],S="Moz O ms Webkit",w=g._config.usePrefixes?S.split(" "):[];g._cssomPrefixes=w;var x=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var l=prefixes[s],u=l.toUpperCase()+"_"+r;if(u in i)return"@-"+l.toLowerCase()+"-"+n}return!1};g.atRule=x;var _=g._config.usePrefixes?S.toLowerCase().split(" "):[];g._domPrefixes=_;var z=n.documentElement,E="svg"===z.nodeName.toLowerCase(),b={elem:p("modernizr")};Modernizr._q.push(function(){delete b.elem});var P={style:b.elem.style};Modernizr._q.unshift(function(){delete P.style}),g.testAllProps=v;g.prefixed=function(e,n,t){return 0===e.indexOf("@")?x(e):(-1!=e.indexOf("-")&&(e=i(e)),n?v(e,n,t):v(e,"pfx"))};o(),delete g.addTest,delete g.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);
//# sourceMappingURL=web.js.map