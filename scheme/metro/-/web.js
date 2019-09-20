"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        let $nl_scheme_style_type_enum;
        (function ($nl_scheme_style_type_enum) {
            $nl_scheme_style_type_enum[$nl_scheme_style_type_enum["solid"] = 0] = "solid";
            $nl_scheme_style_type_enum[$nl_scheme_style_type_enum["dashed"] = 1] = "dashed";
            $nl_scheme_style_type_enum[$nl_scheme_style_type_enum["dotted"] = 2] = "dotted";
            $nl_scheme_style_type_enum[$nl_scheme_style_type_enum["double"] = 3] = "double";
        })($nl_scheme_style_type_enum = $$.$nl_scheme_style_type_enum || ($$.$nl_scheme_style_type_enum = {}));
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
                const canvasA = a instanceof CanvasRenderingContext2D;
                const canvasB = b instanceof CanvasRenderingContext2D;
                if (canvasA != canvasB)
                    return false;
                if (canvasA && canvasB)
                    return a.canvas == b.canvas;
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
                if (len)
                    console.log(masters, prev, val);
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
                                    elem_props['dinnerText'] !== void 0)) {
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
                    const pxStyleProps = ['width', 'height', 'fontSize', 'lineHeight', 'maxWidth', 'borderRadius', 'borderWidth'];
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
        let click;
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
                                    done_ec_special = true;
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
                                    if (!click)
                                        click = new Set();
                                    click.add(path);
                                    startClick = event;
                                    done_ec_special = true;
                                }
                            }
                            else if (name == 'clickDid') {
                                if (click && click.has(path)) {
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
                                    done_ec_special = true;
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
                click && click.clear();
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
        const touchAccu_threshold = 30;
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
                    if (Math.abs(touchAccu.deltaX0) < touchAccu_threshold &&
                        Math.abs(touchAccu.deltaX1) < touchAccu_threshold &&
                        Math.abs(touchAccu.deltaY0) < touchAccu_threshold &&
                        Math.abs(touchAccu.deltaY1) < touchAccu_threshold &&
                        true) {
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
        $$.$nl_scheme_metro_data = {
            'Кольцевая': {
                type: 'circle',
                radius: 210,
                center: {
                    ofsHor: 398 + 210,
                    ofsVer: 270 + 210,
                },
                style: '#80372C',
                points: {
                    'Восток-Арбатско-Покровская': {
                        type: 'anchor',
                        angle: -8,
                    },
                    'Курская': {
                        angle: -5,
                        code: 'ru-msk-metro-kurskaya-kurskaya-chkalovskaya',
                        label: {},
                    },
                    'Юг-Люблинско-Дмитровская': {
                        type: 'anchor',
                        angle: 0,
                    },
                    'Юг-Таганско-Краспресненская': {
                        type: 'anchor',
                        angle: 22,
                    },
                    'Таганская': {
                        angle: 25,
                        code: 'ru-msk-metro-taganskaya-taganskaya-marksistskaya',
                        label: {
                            alignHor: $$.$me_align.right,
                            alignVer: $$.$me_align.bottom,
                            ofsHor: -5,
                            ofsVer: -2,
                        },
                    },
                    'Восток-Калининская': {
                        type: 'anchor',
                        angle: 30,
                    },
                    'Павелецкая': {
                        angle: 60,
                        code: 'ru-msk-metro-paveletskaya-paveletskaya',
                        label: {
                            ofsHor: -4,
                            ofsVer: 16,
                        },
                    },
                    'Юг-Замоскворецкая': {
                        type: 'anchor',
                        angle: 63,
                    },
                    'Юг-Серпуховско-Тимирязевская': {
                        angle: 99,
                        type: 'anchor',
                    },
                    'Добрынинская': {
                        angle: 102,
                        code: 'ru-msk-metro-dobryininskaya-serpuhovskaya',
                        label: {
                            alignHor: $$.$me_align.right,
                            alignVer: $$.$me_align.top,
                            ofsHor: -4,
                            ofsVer: -4,
                        },
                    },
                    'Юг-Калужско-Рижская': {
                        angle: 128,
                        type: 'anchor',
                    },
                    'Октябрьская': {
                        angle: 130,
                        code: 'ru-msk-metro-oktyabrskaya',
                        label: {
                            alignHor: $$.$me_align.right,
                            alignVer: $$.$me_align.top,
                            ofsHor: -4,
                            ofsVer: -4,
                        },
                    },
                    'Юг-Сокольническая': {
                        angle: 143,
                        type: 'anchor',
                    },
                    'Парк культуры': {
                        angle: 150,
                        code: 'ru-msk-metro-park-kulturyi',
                        label: {
                            alignHor: $$.$me_align.right,
                            alignVer: $$.$me_align.top,
                            ofsHor: -4,
                            ofsVer: -4,
                        },
                    },
                    'Киевская': {
                        angle: 168,
                        code: 'ru-msk-metro-kievskaya',
                        label: {
                            alignHor: $$.$me_align.right,
                        },
                    },
                    'Краснопресненская': {
                        angle: 190,
                        code: 'ru-msk-metro-krasnopresnenskaya-barrikadnaya',
                        label: {
                            alignHor: $$.$me_align.right,
                            alignVer: $$.$me_align.top,
                            ofsHor: -4,
                            ofsVer: -4,
                        },
                    },
                    'Север-Таганско-Краспресненская': {
                        type: 'anchor',
                        angle: 194,
                    },
                    'Белорусская': {
                        angle: 210,
                        code: 'ru-msk-metro-belorusskaya-belorusskaya',
                        label: {
                            alignHor: $$.$me_align.right,
                            alignVer: $$.$me_align.top,
                            ofsHor: -4,
                            ofsVer: -4,
                        },
                    },
                    'Север-Замоскворецкая': {
                        angle: 212,
                        type: 'anchor',
                    },
                    'Новослободская': {
                        angle: 250,
                        code: 'ru-msk-metro-novoslobodskaya-mendeleevskaya',
                        label: {
                            alignHor: $$.$me_align.right,
                            alignVer: $$.$me_align.top,
                            ofsHor: -4,
                            ofsVer: -4,
                        },
                    },
                    'Север-Серпуховско-Тимирязевская': {
                        angle: 252,
                        type: 'anchor',
                    },
                    'Север-Люблинско-Дмитровская': {
                        angle: 260,
                        type: 'anchor',
                    },
                    'Север-Калужско-Рижская': {
                        angle: 288,
                        type: 'anchor',
                    },
                    'Проспект Мира': {
                        angle: 290,
                        code: 'ru-msk-metro-prospekt-mira',
                        label: {
                            alignHor: $$.$me_align.right,
                            alignVer: $$.$me_align.top,
                            ofsHor: -4,
                            ofsVer: -4,
                        },
                    },
                    'Север-Сокольническая': {
                        angle: 318,
                        type: 'anchor',
                    },
                    'Комсомольская': {
                        angle: 324,
                        code: 'ru-msk-metro-komsomolskaya',
                        label: {
                            alignHor: $$.$me_align.right,
                            alignVer: $$.$me_align.top,
                            ofsHor: -4,
                            ofsVer: -4,
                        },
                    },
                },
            },
            'МЦК': {
                type: 'circle',
                radius: 730 / 2,
                center: 'center::Кольцевая',
                style: {
                    type: $$.$nl_scheme_style_type_enum.double,
                    color: '#D57352',
                    thickLine: 2,
                    thickStyle: 10,
                },
                points: {
                    'Верхние котлы': {
                        angle: 90,
                        code: 'ru-msk-metro-verhnie-kotlyi',
                        label: {
                            alignHor: $$.$me_align.center,
                            alignVer: $$.$me_align.bottom,
                            textAlign: 'center',
                            ofsVer: 2,
                        },
                    },
                    'МЦК-Серпуховско-Тимирязевская': {
                        type: 'anchor',
                    },
                    'Крымская': {
                        angle: 107,
                        code: 'ru-msk-metro-kryimskaya',
                        label: {
                            alignHor: $$.$me_align.left,
                            alignVer: $$.$me_align.bottom,
                            ofsHor: -6,
                            ofsVer: 2,
                        },
                    },
                    'Пл. Гагарина': {
                        angle: 120,
                        code: 'ru-msk-metro-leninskiy-prospekt',
                        label: {
                            alignHor: $$.$me_align.left,
                            alignVer: $$.$me_align.bottom,
                            ofsHor: 2,
                            ofsVer: -6,
                        },
                    },
                    'Лужники': {
                        angle: 145,
                        code: 'ru-msk-metro-sportivnaya',
                        label: {
                            alignHor: $$.$me_align.left,
                            alignVer: $$.$me_align.center,
                            ofsHor: 2,
                        },
                    },
                    'Кутузовская': {
                        angle: 160,
                        code: 'ru-msk-metro-kutuzovskaya',
                        label: {
                            alignHor: $$.$me_align.center,
                            alignVer: $$.$me_align.bottom,
                            ofsVer: 2,
                        },
                    },
                    'Деловой центр': {
                        angle: 175.6,
                        code: 'ru-msk-metro-mejdunarodnaya',
                        label: {
                            alignHor: $$.$me_align.right,
                            alignVer: $$.$me_align.center,
                            ofsHor: 2,
                            text: 'Деловой центр',
                        },
                    },
                    'Шелепиха': {
                        angle: 190,
                        code: 'ru-msk-metro-shelepiha',
                        label: {
                            alignHor: $$.$me_align.center,
                            alignVer: $$.$me_align.top,
                            ofsHor: -4,
                            ofsVer: 2,
                        },
                    },
                    'Хорошёво': {
                        angle: 200,
                        code: 'ru-msk-metro-polejaevskaya',
                        label: {
                            alignHor: $$.$me_align.right,
                            alignVer: $$.$me_align.center,
                            ofsHor: 2,
                        },
                    },
                    'Зорге': {
                        angle: 205,
                        code: 'ru-msk-metro-zorge',
                        label: {
                            alignHor: $$.$me_align.left,
                            alignVer: $$.$me_align.bottom,
                            ofsHor: 2,
                            ofsVer: -6,
                        },
                    },
                    'Панфиловская': {
                        angle: 210,
                        code: 'ru-msk-metro-oktyabrskoe-pole',
                        label: {
                            alignHor: $$.$me_align.right,
                            alignVer: $$.$me_align.center,
                            ofsHor: 2,
                        },
                    },
                    'Стрешнево': {
                        angle: 218,
                        code: 'ru-msk-metro-streshnevo',
                        label: {
                            alignHor: $$.$me_align.center,
                            alignVer: $$.$me_align.bottom,
                            ofsVer: 2,
                        },
                    },
                    'Балтийская': {
                        angle: 228,
                        code: 'ru-msk-metro-voykovskaya',
                        label: {
                            alignHor: $$.$me_align.left,
                            alignVer: $$.$me_align.center,
                            ofsHor: 2,
                        },
                    },
                    'Коптево': {
                        angle: 238,
                        code: 'ru-msk-metro-koptevo',
                        label: {
                            alignHor: $$.$me_align.left,
                            alignVer: $$.$me_align.center,
                            ofsHor: 2,
                        },
                    },
                    'Лихоборы': {
                        angle: 248,
                        code: 'ru-msk-metro-lihoboryi',
                        label: {
                            alignHor: $$.$me_align.center,
                            alignVer: $$.$me_align.bottom,
                            ofsHor: 2,
                            ofsVer: 4,
                        },
                    },
                    'Окружная': {
                        angle: 258,
                        code: 'ru-msk-metro-okrujnaya',
                        label: {
                            alignHor: $$.$me_align.right,
                            alignVer: $$.$me_align.bottom,
                            ofsVer: 2,
                        },
                    },
                    'Владыкино': {
                        angle: 268,
                        code: 'ru-msk-metro-vladyikino',
                    },
                    'Ботанический сад': {
                        angle: -70,
                        code: 'ru-msk-metro-botanicheskiy-sad',
                        label: {
                            alignHor: $$.$me_align.right,
                            alignVer: $$.$me_align.bottom,
                            ofsHor: -14,
                            ofsVer: 2,
                        },
                    },
                    'Ростокино': {
                        angle: -62,
                        code: 'ru-msk-metro-rostokino',
                        label: {
                            alignHor: $$.$me_align.left,
                            alignVer: $$.$me_align.center,
                            ofsHor: 2,
                        },
                    },
                    'Белокаменная': {
                        angle: -56,
                        code: 'ru-msk-metro-belokamennaya',
                        label: {
                            alignHor: $$.$me_align.left,
                            alignVer: $$.$me_align.center,
                            ofsHor: 2,
                        },
                    },
                    'Бульвар Рокоссовского': {
                        angle: -44,
                        code: 'ru-msk-metro-bulvar-rokossovskogo',
                        label: {
                            alignHor: $$.$me_align.center,
                            alignVer: $$.$me_align.bottom,
                            ofsVer: 2,
                        },
                    },
                    'Локомотив': {
                        angle: -37,
                        code: 'ru-msk-metro-cherkizovskaya',
                        label: {
                            alignHor: $$.$me_align.left,
                            alignVer: $$.$me_align.center,
                            ofsHor: 2,
                        },
                    },
                    'Измайлово': {
                        angle: -20,
                        code: 'ru-msk-metro-partizanskaya',
                        label: {
                            alignHor: $$.$me_align.left,
                            alignVer: $$.$me_align.center,
                            ofsHor: 2,
                        },
                    },
                    'Соколиная гора': {
                        angle: -15,
                        code: 'ru-msk-metro-sokolinaya-gora',
                        label: {
                            alignHor: $$.$me_align.left,
                            alignVer: $$.$me_align.center,
                            ofsHor: 2,
                            text: 'Соколиная<br>гора',
                        },
                    },
                    'Шоссе Энтузиастов': {
                        angle: -4,
                        code: 'ru-msk-metro-shosse-entuziastov',
                        label: {
                            alignHor: $$.$me_align.center,
                            alignVer: $$.$me_align.bottom,
                            ofsVer: 2,
                        },
                    },
                    'Андроновка': {
                        angle: 1,
                        code: 'ru-msk-metro-andronovka',
                        label: {
                            alignHor: $$.$me_align.left,
                            alignVer: $$.$me_align.center,
                            ofsHor: 2,
                        },
                    },
                    'Нижегородская': {
                        angle: 7,
                        code: 'ru-msk-metro-nijegorodskaya',
                        label: {
                            alignHor: $$.$me_align.left,
                            alignVer: $$.$me_align.center,
                            ofsHor: 2,
                        },
                    },
                    'Новохохловская': {
                        angle: 20,
                        code: 'ru-msk-metro-novohohlovskaya',
                        label: {
                            alignHor: $$.$me_align.center,
                            alignVer: $$.$me_align.bottom,
                            ofsVer: 2,
                        },
                    },
                    'Угрешская': {
                        angle: 44,
                        code: 'ru-msk-metro-ugreshskaya',
                        label: {
                            alignHor: $$.$me_align.center,
                            alignVer: $$.$me_align.bottom,
                            ofsVer: 2,
                        },
                    },
                    'Дубровка': {
                        angle: 54,
                        code: 'ru-msk-metro-dubrovka',
                        label: {
                            alignHor: $$.$me_align.right,
                            alignVer: $$.$me_align.bottom,
                            ofsHor: -8,
                            ofsVer: 3,
                        },
                    },
                    'Автозаводская': {
                        angle: 72,
                        code: 'ru-msk-metro-avtozavodskaya',
                        label: {
                            alignHor: $$.$me_align.left,
                            alignVer: $$.$me_align.bottom,
                            ofsHor: -10,
                            ofsVer: 2,
                        },
                    },
                    'ЗИЛ': {
                        angle: 80,
                        code: 'ru-msk-metro-zil',
                        label: {
                            alignHor: $$.$me_align.center,
                            alignVer: $$.$me_align.bottom,
                            ofsVer: 2,
                        },
                    },
                },
            },
            'Сокольническая': {
                style: '#BF3431',
                type: 'segments',
                segments: {
                    'Парк культуры-Кропоткинская': {
                        type: 'line',
                        from: {
                            anchor: 'Юг-Сокольническая::Кольцевая',
                            ofsHor: -19,
                        },
                        to: {
                            anchor: 'from',
                            ofsHor: 46,
                        },
                    },
                    'Кропоткинская-Черкизовская': {
                        from: {
                            anchor: 'to::Парк культуры-Кропоткинская',
                            ofsHor: 20,
                            ofsVer: -10,
                        },
                        to: {
                            anchor: 'Локомотив::МЦК',
                            ofsHor: -20,
                        },
                        points: {
                            'Библиотека им.Ленина': {
                                anchor: 'from',
                                dist: 40,
                                label: {
                                    ofsVer: 10,
                                    text: 'Библиотека<br>им.Ленина',
                                },
                            },
                            'Охотный ряд': {
                                anchor: 'from',
                                dist: 160,
                                label: {
                                    alignHor: $$.$me_align.right,
                                    alignVer: $$.$me_align.bottom,
                                    ofsVer: 2,
                                    ofsHor: -10,
                                    textAlign: 'right',
                                    text: 'Охотный<br>ряд',
                                },
                            },
                            'Черкизовская': {
                                anchor: 'to',
                                code: '',
                                label: {
                                    alignHor: $$.$me_align.right,
                                },
                                transit: 'Локомотив::МЦК',
                            },
                        },
                    },
                    'Бульвар Рокоссовского': {
                        from: {
                            anchor: 'Бульвар Рокоссовского::МЦК',
                            ofsHor: 20,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: 10,
                        },
                        points: {
                            'Бульвар Рокоссовского': {
                                anchor: 'from',
                                transit: 'Бульвар Рокоссовского::МЦК',
                            },
                        },
                    },
                    'Парк культуры-Спортивная': {
                        from: {
                            anchor: 'from::Парк культуры-Кропоткинская',
                            ofsVer: 10,
                            ofsHor: -20,
                        },
                        to: {
                            anchor: 'Лужники::МЦК',
                            ofsVer: -20,
                        },
                    },
                    'Воробьевы горы-Коммунарка': {
                        from: {
                            anchor: 'to::Парк культуры-Спортивная',
                            ofsVer: 30,
                            ofsHor: -20,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: 250,
                        },
                    },
                },
            },
            'Калужско-Рижская': {
                style: '#EA924C',
                type: 'segments',
                segments: {
                    'Октябрьская': {
                        type: 'line',
                        from: {
                            anchor: 'Юг-Калужско-Рижская::Кольцевая',
                            ofsHor: -40,
                            ofsVer: 50,
                        },
                        to: {
                            anchor: 'Юг-Калужско-Рижская::Кольцевая',
                            ofsHor: 30,
                            ofsVer: -20,
                        },
                    },
                    'Шаболовская-Ясенево': {
                        through: {
                            anchor: 'Пл. Гагарина::МЦК',
                            ofsHor: -10,
                            ofsVer: -18,
                        },
                        from: {
                            anchor: 'through',
                            ofsVer: -66,
                        },
                        dist: 286,
                        points: {
                            'Шаболовская': {
                                anchor: 'from',
                                label: {},
                            },
                            'Ленинский проспект': {
                                anchor: 'through',
                                label: {
                                    text: 'Ленинский<br>проспект',
                                    ofsVer: -10,
                                    transit: 'Пл. Гагарина::МЦК',
                                },
                            },
                            'Академическая': {
                                anchor: 'Ленинский проспект',
                                dist: 54,
                                label: {},
                            },
                            'Профсоюзная': {
                                anchor: 'Академическая',
                                dist: 24,
                                label: {},
                            },
                            'Новые Черёмушки': {
                                anchor: 'Профсоюзная',
                                dist: 24,
                                label: {},
                            },
                            'Калужская': {
                                anchor: 'Новые Черёмушки',
                                dist: 24,
                                label: {},
                            },
                            'Беляево': {
                                anchor: 'Калужская',
                                dist: 24,
                                label: {},
                            },
                            'Коньково': {
                                anchor: 'Беляево',
                                dist: 24,
                                label: {},
                            },
                            'Тёплый стан': {
                                anchor: 'Коньково',
                                dist: 24,
                                label: {},
                            },
                            'Ясенево': {
                                anchor: 'Тёплый стан',
                                dist: 24,
                                label: {},
                            },
                        },
                    },
                    'Полянка': {
                        type: 'line',
                        from: {
                            anchor: 'to::Октябрьская',
                            ofsHor: 20,
                            ofsVer: -10,
                        },
                        to: {
                            anchor: 'from',
                            ofsHor: 90,
                        },
                    },
                    'Третьяковская': {
                        type: 'line',
                        from: {
                            anchor: 'to::Полянка',
                            ofsHor: 20,
                            ofsVer: -10,
                        },
                        to: {
                            anchor: 'from',
                            ofsHor: 60,
                            ofsVer: -50,
                        },
                    },
                    'Китай-город': {
                        type: 'line',
                        from: {
                            anchor: 'to::Третьяковская',
                            ofsHor: 20,
                            ofsVer: -35,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: -100,
                        },
                    },
                    'Тургеневская': {
                        type: 'line',
                        from: {
                            anchor: 'to::Китай-город',
                            ofsHor: -10,
                            ofsVer: -10,
                        },
                        to: {
                            anchor: 'from',
                            ofsHor: -40,
                            ofsVer: -20,
                        },
                    },
                    'Сухаревская': {
                        type: 'line',
                        from: {
                            anchor: 'to::Тургеневская',
                            ofsHor: -10,
                            ofsVer: -10,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: -50,
                        },
                    },
                    'Проспект мира-Рижская': {
                        type: 'line',
                        from: {
                            anchor: 'to::Сухаревская',
                            ofsHor: 10,
                            ofsVer: -40,
                        },
                        to: {
                            anchor: 'Ботанический сад::МЦК',
                            ofsHor: 5,
                            ofsVer: 97,
                        },
                    },
                    'Алексеевская-Медведково': {
                        from: {
                            anchor: 'Ботанический сад::МЦК',
                            ofsHor: 20,
                            ofsVer: 62,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: -165,
                        },
                    },
                },
            },
            'Люблинско-Дмитровская': {
                style: '#B1CF7A',
                type: 'segments',
                segments: {
                    'Римская-Чкаловская': {
                        type: 'line',
                        from: {
                            anchor: 'Юг-Люблинско-Дмитровская::Кольцевая',
                            ofsHor: 40,
                            ofsVer: 40,
                        },
                        to: {
                            anchor: 'Юг-Люблинско-Дмитровская::Кольцевая',
                            ofsHor: -100,
                            ofsVer: -100,
                        },
                    },
                    'Сретенский бульвар': {
                        type: 'line',
                        from: {
                            anchor: 'to::Римская-Чкаловская',
                            ofsHor: -20,
                            ofsVer: -20,
                        },
                        to: {
                            anchor: 'from',
                            ofsHor: -75,
                        },
                    },
                    'Фонвизинская-Трубная': {
                        from: {
                            anchor: 'Владыкино::МЦК',
                            ofsHor: 10,
                            ofsVer: 60,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: 160,
                        },
                    },
                    'Петровско-Разумовская': {
                        type: 'line',
                        from: {
                            anchor: 'from::Фонвизинская-Трубная',
                            ofsHor: -8,
                            ofsVer: -15,
                        },
                        to: {
                            anchor: 'Окружная::МЦК',
                            ofsVer: -15,
                            ofsHor: 15,
                        },
                    },
                    'Окружная-Селигерская': {
                        type: 'line',
                        from: {
                            anchor: 'Окружная::МЦК',
                            ofsVer: -20,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: -73,
                        },
                    },
                    'Крестьянская застава': {
                        from: {
                            anchor: 'from::Римская-Чкаловская',
                            ofsHor: 10,
                            ofsVer: 20,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: 90,
                        },
                    },
                    'Юг': {
                        from: {
                            anchor: 'Дубровка::МЦК',
                            ofsHor: 10,
                            ofsVer: -22,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: 268,
                        },
                        points: {
                            'Дубровка': {
                                anchor: 'from',
                                transit: 'Дубровка::МЦК',
                            },
                            'Кожуховская': {
                                anchor: 'Дубровка',
                                ofsVer: 44,
                                label: {},
                            },
                            'Печатники': {
                                anchor: 'Кожуховская',
                                ofsVer: 28,
                                label: {},
                            },
                            'Волжская': {
                                anchor: 'Печатники',
                                ofsVer: 28,
                                label: {},
                            },
                            'Люблино': {
                                anchor: 'Волжская',
                                ofsVer: 28,
                                label: {},
                            },
                            'Братиславская': {
                                anchor: 'Люблино',
                                ofsVer: 28,
                                label: {},
                            },
                            'Марьино': {
                                anchor: 'Братиславская',
                                ofsVer: 28,
                                label: {},
                            },
                            'Борисово': {
                                anchor: 'Марьино',
                                ofsVer: 28,
                                label: {},
                            },
                            'Шипиловская': {
                                anchor: 'Борисово',
                                ofsVer: 28,
                                label: {},
                            },
                            'Зябликово': {
                                anchor: 'Шипиловская',
                                ofsVer: 28,
                                label: {},
                            },
                        },
                    },
                },
            },
            'Таганско-Краспресненская': {
                style: '#9A6191',
                type: 'segments',
                segments: {
                    'Планерная-Октябрьское поле': {
                        from: {
                            anchor: 'Панфиловская::МЦК',
                            ofsHor: -27,
                            ofsVer: 42,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: -231,
                        },
                    },
                    'Баррикадная-Кузнецкий мост': {
                        type: 'line',
                        from: {
                            anchor: 'Север-Таганско-Краспресненская::Кольцевая',
                            ofsHor: -30,
                        },
                        to: {
                            anchor: 'from',
                            ofsHor: 271,
                        },
                        points: {
                            'Баррикадная': {
                                code: '',
                                anchor: 'from',
                                dist: 45,
                                label: {
                                    alignVer: $$.$me_align.bottom,
                                    alignHor: $$.$me_align.center,
                                },
                            },
                            'Пушкинская': {
                                code: '',
                                anchor: 'from',
                                dist: 165,
                                label: {
                                    alignVer: $$.$me_align.bottom,
                                    alignHor: $$.$me_align.center,
                                },
                            },
                            'Кузнецкий мост': {
                                code: '',
                                anchor: 'to',
                                label: {
                                    alignVer: $$.$me_align.bottom,
                                    alignHor: $$.$me_align.center,
                                },
                            },
                        },
                    },
                    'Полежаевская-Улица 1905 года': {
                        from: {
                            anchor: 'from::Планерная-Октябрьское поле',
                            ofsHor: 20,
                            ofsVer: 30,
                        },
                        to: {
                            anchor: 'from::Баррикадная-Кузнецкий мост',
                            ofsHor: -30,
                            ofsVer: -20,
                        },
                    },
                    'Китай-город-Волгоградский проспект': {
                        type: 'line',
                        from: {
                            anchor: 'Кузнецкий мост::Баррикадная-Кузнецкий мост::Таганско-Краспресненская',
                            ofsHor: 82,
                            ofsVer: 42,
                        },
                        through: {
                            anchor: 'Таганская::Кольцевая',
                            ofsHor: 10,
                            ofsVer: -10
                        },
                        dist: 258,
                        points: {
                            'Китай-город': {
                                code: '',
                                anchor: 'to',
                                dist: -30,
                            },
                        },
                    },
                    'Текстильщики-Кузьминки': {
                        from: {
                            anchor: 'to::Китай-город-Волгоградский проспект',
                            ofsHor: 37,
                            ofsVer: 25,
                        },
                        through: {
                            anchor: 'from',
                            ofsHor: 77,
                        },
                        dist: 114,
                        points: {
                            'Текстильщики': {
                                anchor: 'from',
                            },
                            'Кузьминки': {
                                anchor: 'through',
                            },
                        },
                    },
                    'Рязанский проспект-Выхино': {
                        from: {
                            anchor: 'to::Текстильщики-Кузьминки',
                            ofsHor: 20,
                            ofsVer: 20,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: 30,
                        },
                        points: {
                            'Рязанский проспект': {
                                anchor: 'from',
                                label: {},
                            },
                            'Выхино': {
                                anchor: 'to',
                                label: {},
                            },
                        },
                    },
                    'Лермонтовский проспект-Котельники': {
                        from: {
                            anchor: 'to::Рязанский проспект-Выхино',
                            ofsHor: -20,
                            ofsVer: 40,
                        },
                        through: {
                            anchor: 'from',
                            ofsHor: -20,
                            ofsVer: 20,
                        },
                        dist: 90,
                        points: {
                            'Лермонтовский проспект': {
                                anchor: 'through',
                            },
                            'Жулебино': {
                                anchor: 'Лермонтовский проспект',
                                dist: 30,
                            },
                            'Котельники': {
                                anchor: 'Жулебино',
                                dist: 30,
                            },
                        },
                    },
                },
            },
            'Серпуховско-Тимирязевская': {
                style: '#ABAEB9',
                type: 'segments',
                segments: {
                    'Полянка': {
                        type: 'line',
                        from: 'Юг-Серпуховско-Тимирязевская::Кольцевая',
                        to: {
                            anchor: 'from',
                            ofsVer: -46,
                        },
                        points: {
                            'Полянка': {
                                code: 'ru-msk-metro-polyanka',
                                anchor: 'from',
                                dist: 26,
                                label: {},
                            },
                        },
                    },
                    'Боровицкая': {
                        type: 'line',
                        from: {
                            anchor: 'to::Полянка',
                            ofsHor: -84,
                            ofsVer: -85,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: -24,
                        },
                        points: {
                            'Боровицкая': {
                                anchor: 'from',
                                code: 'ru-msk-metro-arbatskaya-aleksandrovskiy-sad-biblioteka-im-lenina-borovitskaya',
                                label: {
                                    alignHor: $$.$me_align.right,
                                    ofsHor: -4,
                                    alignVer: $$.$me_align.top,
                                    ofsVer: -4,
                                },
                                dist: 8,
                                transit: 'Библиотека им.Ленина::Кропоткинская-Черкизовская::Сокольническая',
                            },
                        },
                    },
                    'Чеховская': {
                        type: 'line',
                        from: {
                            anchor: 'to::Боровицкая',
                            ofsVer: -20,
                            ofsHor: 15,
                        },
                        to: {
                            anchor: 'from',
                            ofsHor: 63,
                            ofsVer: -60,
                        },
                        points: {
                            'Чеховская': {
                                anchor: 'from',
                                code: 'ru-msk-metro-pushkinskaya-tverskaya-chehovskaya',
                                dist: 50,
                                label: {
                                    alignHor: $$.$me_align.right,
                                },
                            },
                        },
                    },
                    'Чеховская-Цветной бульвар 2': {
                        type: 'line',
                        from: {
                            anchor: 'Владыкино::МЦК',
                            ofsVer: 224 - 5,
                            ofsHor: -5,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: 10,
                            ofsHor: 10,
                        },
                    },
                    'Алтуфьево-Менделеевская': {
                        from: {
                            anchor: 'Владыкино::МЦК',
                            ofsHor: -18,
                            ofsVer: -85,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: 296,
                        },
                    },
                    'Серпуховскaя-Бульвар Дмитрия Донского': {
                        type: 'line',
                        from: 'Юг-Серпуховско-Тимирязевская::Кольцевая',
                        to: {
                            anchor: 'from',
                            ofsVer: 400,
                        },
                        points: {
                            'Серпуховскaя': {
                                code: 'ru-msk-metro-dobryininskaya-serpuhovskaya',
                                anchor: 'from',
                                dist: 16,
                                transit: 'Добрынинская::Кольцевая',
                                label: {},
                            },
                            'Тульская': {
                                code: 'ru-msk-metro-tulskaya',
                                anchor: 'Серпуховскaя',
                                dist: 70,
                                label: {
                                    ofsHor: 2,
                                },
                            },
                            'Нагатинская': {
                                code: 'ru-msk-metro-nagatinskaya',
                                anchor: 'Тульская',
                                dist: 90,
                                label: {
                                    ofsHor: 2,
                                },
                            },
                            'Нагорная': {
                                code: 'ru-msk-metro-nagornaya',
                                anchor: 'Нагатинская',
                                dist: 20,
                                label: {
                                    ofsHor: 2,
                                },
                            },
                            'Нахимовский проспект': {
                                code: 'ru-msk-metro-nahimovskiy-prospekt',
                                anchor: 'Нагорная',
                                dist: 20,
                                label: {
                                    ofsHor: 2,
                                    text: 'Нахимовский<br>проспект',
                                },
                            },
                            'Севастопольская': {
                                code: 'ru-msk-metro-kahovskaya-sevastopolskaya',
                                anchor: 'Нахимовский проспект',
                                dist: 46,
                                label: {
                                    ofsHor: 2,
                                },
                            },
                            'Чертановская': {
                                code: 'ru-msk-metro-chertanovskaya',
                                anchor: 'Севастопольская',
                                dist: 22,
                                label: {
                                    ofsHor: 2,
                                },
                            },
                            'Южная': {
                                code: 'ru-msk-metro-yujnaya',
                                anchor: 'Чертановская',
                                dist: 23,
                                label: {
                                    ofsHor: 2,
                                },
                            },
                            'Пражская': {
                                code: 'ru-msk-metro-prajskaya',
                                anchor: 'Южная',
                                dist: 23,
                                label: {
                                    ofsHor: 2,
                                },
                            },
                            'Улица Академика Янгеля': {
                                code: 'ru-msk-metro-ulitsa-akademika-yangelya',
                                anchor: 'Пражская',
                                dist: 23,
                                label: {
                                    ofsHor: 2,
                                    text: 'Улица Академика<br>Янгеля',
                                },
                            },
                            'Аннино': {
                                code: 'ru-msk-metro-annino',
                                anchor: 'Улица Академика Янгеля',
                                dist: 23,
                                label: {
                                    ofsHor: 2,
                                },
                            },
                            'Бульвар Дмитрия Донского': {
                                code: 'ru-msk-metro-bulvar-dmitriya-donskogo-ulitsa-starokachalovskaya',
                                anchor: 'to',
                                label: {
                                    ofsHor: 2,
                                    text: 'Бульвар<br>Дмитрия Донского',
                                },
                            },
                        }
                    },
                }
            },
            'Бутовская': {
                type: 'segments',
                style: '#BFDDE9',
                segments: {
                    'Улица Старокачаловская': {
                        type: 'line',
                        from: {
                            anchor: 'Аннино::Серпуховскaя-Бульвар Дмитрия Донского::Серпуховско-Тимирязевская',
                            ofsHor: -18,
                        },
                        to: {
                            anchor: 'Бульвар Дмитрия Донского::Серпуховскaя-Бульвар Дмитрия Донского::Серпуховско-Тимирязевская',
                            ofsHor: -18,
                        },
                        points: {
                            'Улица Старокачаловская': {
                                anchor: 'to',
                                code: 'ru-msk-metro-bulvar-dmitriya-donskogo-ulitsa-starokachalovskaya',
                                transit: 'Бульвар Дмитрия Донского::Серпуховскaя-Бульвар Дмитрия Донского::Серпуховско-Тимирязевская',
                                label: {
                                    alignHor: $$.$me_align.right,
                                    textAlign: 'right',
                                    ofsHor: 4,
                                    text: 'Улица<br>Старокачаловская'
                                },
                            },
                        },
                    },
                    'Лесопарковая-Битцевский парк': {
                        type: 'line',
                        from: {
                            anchor: 'from::Улица Старокачаловская',
                            ofsHor: -20,
                            ofsVer: -20,
                        },
                        to: {
                            anchor: 'from',
                            ofsHor: -80,
                        },
                        points: {
                            'Лесопарковая': {
                                anchor: 'from',
                                dist: 32,
                                code: 'ru-msk-metro-lesoparkovaya',
                                label: {
                                    alignVer: $$.$me_align.top,
                                    alignHor: $$.$me_align.center,
                                },
                            },
                            'Битцевский парк': {
                                anchor: 'to',
                                code: 'ru-msk-metro-novoyasenevskaya-bittsevskiy-park',
                                label: {
                                    alignVer: $$.$me_align.top,
                                    alignHor: $$.$me_align.right,
                                    text: 'Битцевский<br>парк'
                                },
                            },
                        },
                    },
                    'Улица Скобелевская-Бунинская аллея': {
                        type: 'line',
                        from: {
                            anchor: 'to::Улица Старокачаловская',
                            ofsHor: -20,
                            ofsVer: 20,
                        },
                        to: {
                            anchor: 'from',
                            ofsHor: -200,
                        },
                        points: {
                            'Улица Скобелевская': {
                                anchor: 'from',
                                code: 'ru-msk-metro-ulitsa-skobelevskaya',
                                label: {
                                    alignVer: $$.$me_align.top,
                                    ofsVer: 2,
                                    ofsHor: -10,
                                    text: 'Улица<br>Скобелевская'
                                },
                            },
                            'Бульвар Адмирала Ушакова': {
                                anchor: 'Улица Скобелевская',
                                dist: 118,
                                code: 'ru-msk-metro-bulvar-admirala-ushakova',
                                label: {
                                    alignVer: $$.$me_align.top,
                                    ofsVer: 2,
                                    ofsHor: -12,
                                    text: 'Бульвар<br>Адмирала Ушакова'
                                },
                            },
                            'Улица Горчакова': {
                                anchor: 'Бульвар Адмирала Ушакова',
                                dist: 53,
                                code: 'ru-msk-metro-ulitsa-gorchakova',
                                label: {
                                    alignVer: $$.$me_align.top,
                                    alignHor: $$.$me_align.center,
                                    ofsVer: 2,
                                    text: 'Улица<br>Горчакова',
                                    textAlign: 'center',
                                },
                            },
                            'Бунинская аллея': {
                                anchor: 'to',
                                code: 'ru-msk-metro-buninskaya-alleya',
                                label: {
                                    alignVer: $$.$me_align.bottom,
                                    alignHor: $$.$me_align.center,
                                    ofsVer: 2,
                                    text: 'Бунинская<br>аллея',
                                    textAlign: 'center',
                                },
                            },
                        },
                    },
                },
            },
            'Замоскворецкая': {
                style: '#326E3F',
                type: 'segments',
                segments: {
                    'Аэропорт-Ховрино': {
                        from: {
                            anchor: 'Балтийская::МЦК',
                            ofsHor: -10,
                            ofsVer: 90,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: -220,
                        },
                    },
                    'Динамо-Тверская': {
                        from: {
                            anchor: 'from::Аэропорт-Ховрино',
                            ofsHor: 30,
                            ofsVer: 45,
                        },
                        to: {
                            anchor: 'Охотный ряд::Кропоткинская-Черкизовская::Сокольническая',
                            ofsHor: -30,
                            ofsVer: 15,
                        },
                    },
                    'Театральная': {
                        from: {
                            anchor: 'Охотный ряд::Кропоткинская-Черкизовская::Сокольническая',
                            ofsHor: -5,
                            ofsVer: 15,
                        },
                        to: {
                            anchor: 'from',
                            ofsHor: 30,
                        },
                        points: {
                            'Театральная': {
                                anchor: 'from',
                                dist: 15,
                                transit: 'Охотный ряд::Кропоткинская-Черкизовская::Сокольническая',
                                label: {
                                    alignVer: $$.$me_align.bottom,
                                },
                            },
                        },
                    },
                    'Новокузнецкая-Домодедовская': {
                        type: 'line',
                        from: {
                            anchor: 'Юг-Замоскворецкая::Кольцевая',
                            ofsVer: -104,
                        },
                        to: {
                            anchor: 'Юг-Замоскворецкая::Кольцевая',
                            ofsVer: 355,
                        },
                        points: {
                            'Новокузнецкая': {
                                code: '',
                                anchor: 'Юг-Замоскворецкая::Кольцевая',
                                dist: -85,
                                label: {},
                            },
                            'Павелецкая': {
                                code: 'ru-msk-metro-paveletskaya-paveletskaya',
                                anchor: 'Юг-Замоскворецкая::Кольцевая',
                                dist: 16,
                                transit: 'Павелецкая::Кольцевая',
                            },
                            'Автозаводская': {
                                code: '',
                                anchor: 'Павелецкая',
                                dist: 130,
                                transit: 'Автозаводская::МЦК',
                            },
                            'Технопарк': {
                                code: '',
                                anchor: 'Автозаводская',
                                dist: 43,
                                label: {},
                            },
                            'Коломенская': {
                                code: '',
                                anchor: 'Технопарк',
                                dist: 33,
                                label: {},
                            },
                            'Каширская': {
                                code: '',
                                anchor: 'Коломенская',
                                dist: 31,
                                label: {},
                            },
                            'Кантемировская': {
                                code: '',
                                anchor: 'Каширская',
                                dist: 29,
                                label: {},
                            },
                            'Царицино': {
                                code: '',
                                anchor: 'Кантемировская',
                                dist: 24,
                                label: {},
                            },
                            'Орехово': {
                                code: '',
                                anchor: 'Царицино',
                                dist: 25,
                                label: {},
                            },
                            'Домодедовская': {
                                code: '',
                                anchor: 'Орехово',
                                dist: 25,
                                label: {},
                            },
                        },
                    },
                    'Юг': {
                        type: 'line',
                        from: {
                            anchor: 'to::Новокузнецкая-Домодедовская',
                            ofsHor: 20,
                            ofsVer: 20,
                        },
                        to: {
                            anchor: 'from',
                            ofsHor: 190,
                        },
                        points: {
                            'Красногвардейская': {
                                anchor: 'from',
                                dist: 109,
                                code: '',
                                label: {
                                    alignVer: $$.$me_align.top,
                                    alignHor: $$.$me_align.center,
                                },
                                transit: 'Зябликово::Юг::Люблинско-Дмитровская',
                            },
                            'Алма-Атинская': {
                                anchor: 'to',
                                code: '',
                                label: {
                                    alignVer: $$.$me_align.top,
                                    alignHor: $$.$me_align.center,
                                    ofsHor: 30,
                                },
                            },
                        },
                    },
                },
            },
            'Арбатско-Покровская': {
                style: '#2B3A7C',
                type: 'segments',
                segments: {
                    'Пл. Революции': {
                        from: {
                            anchor: 'Охотный ряд::Кропоткинская-Черкизовская::Сокольническая',
                            ofsHor: -10,
                            ofsVer: 30,
                        },
                        to: {
                            anchor: 'from',
                            ofsHor: 126,
                        },
                        points: {
                            'Пл. Революции': {
                                anchor: 'from',
                                dist: 30,
                                transit: 'Театральная::Театральная::Замоскворецкая',
                                label: {
                                    alignVer: $$.$me_align.top,
                                    alignHor: $$.$me_align.center,
                                    ofsHor: 15,
                                    ofsVer: -1,
                                },
                            },
                        },
                    },
                    'Арбатская-Киевская': {
                        through: {
                            anchor: 'Киевская::Кольцевая',
                            ofsVer: 15,
                        },
                        from: {
                            anchor: 'through',
                            ofsHor: 177,
                        },
                        dist: 196,
                        points: {
                            'Арбатская': {
                                anchor: 'from',
                                dist: 56,
                                label: {
                                    alignHor: $$.$me_align.center,
                                    alignVer: $$.$me_align.bottom,
                                    ofsHor: 8,
                                    ofsVer: 2,
                                },
                                transit: [
                                    'Библиотека им.Ленина::Кропоткинская-Черкизовская::Сокольническая',
                                    'Боровицкая::Боровицкая::Серпуховско-Тимирязевская',
                                ],
                            },
                            'Смоленская': {
                                anchor: 'from',
                                dist: 133,
                                label: {
                                    alignHor: $$.$me_align.center,
                                    alignVer: $$.$me_align.bottom,
                                    ofsVer: 3,
                                },
                            },
                            'Киевская': {
                                anchor: 'to',
                                transit: 'Киевская::Кольцевая',
                            },
                        },
                    },
                    'Киевская-Парк Победы': {
                        from: {
                            anchor: 'to::Арбатская-Киевская',
                            ofsHor: -20,
                            ofsVer: 10,
                        },
                        to: {
                            anchor: 'Кутузовская::МЦК',
                            ofsVer: 18,
                            ofsHor: 20,
                        },
                    },
                    'Парк Победы-Славянский бульвар': {
                        from: {
                            anchor: 'to::Киевская-Парк Победы',
                            ofsVer: 10,
                            ofsHor: -25,
                        },
                        through: {
                            anchor: 'from',
                            ofsHor: -60,
                        },
                        dist: 80,
                        points: {
                            'Парк Победы': {
                                anchor: 'from',
                            },
                            'Славянский бульвар': {
                                anchor: 'through',
                            },
                        },
                    },
                    'Кунцевская': {
                        from: {
                            anchor: 'to::Парк Победы-Славянский бульвар',
                            ofsHor: -40,
                            ofsVer: -20,
                        },
                        to: {
                            anchor: 'from',
                            ofsHor: -110,
                            ofsVer: -110,
                        },
                        points: {
                            'Кунцевская': {
                                anchor: 'to',
                                label: {
                                    alignVer: $$.$me_align.top,
                                    alignHor: $$.$me_align.center,
                                    ofsHor: 20,
                                },
                            },
                        },
                    },
                    'Запад': {
                        from: 'to::Кунцевская',
                        to: {
                            anchor: 'from',
                            ofsVer: -202,
                        },
                        points: {
                            'Молодёжная': {
                                anchor: 'from',
                                dist: 202 - 25 * 6,
                                label: {},
                            },
                            'Крылатское': {
                                anchor: 'Молодёжная',
                                dist: 25,
                                label: {},
                            },
                            'Строгино': {
                                anchor: 'Крылатское',
                                dist: 25,
                                label: {},
                            },
                            'Мякинино': {
                                anchor: 'Строгино',
                                dist: 25,
                                label: {},
                            },
                            'Волоколамская': {
                                anchor: 'Мякинино',
                                dist: 25,
                                label: {},
                            },
                            'Митино': {
                                anchor: 'Волоколамская',
                                dist: 25,
                                label: {},
                            },
                            'Пятницкое шоссе': {
                                anchor: 'Митино',
                                dist: 25,
                                label: {},
                            },
                        },
                    },
                    'Курская-Партизанская': {
                        from: {
                            anchor: 'to::Пл. Революции',
                            ofsHor: 20,
                            ofsVer: -10,
                        },
                        to: {
                            anchor: 'Измайлово::МЦК',
                            ofsVer: -26,
                        },
                    },
                    'Измайловская-Щёлковская': {
                        from: {
                            anchor: 'to::Курская-Партизанская',
                            ofsHor: 35,
                            ofsVer: -41,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: -65,
                        },
                    },
                },
            },
            'Калининская': {
                style: '#F9E36A',
                type: 'segments',
                segments: {
                    'Третьяковская': {
                        from: {
                            anchor: 'Новокузнецкая::Новокузнецкая-Домодедовская::Замоскворецкая',
                            ofsHor: -20,
                            ofsVer: 20,
                        },
                        to: {
                            anchor: 'from',
                            ofsHor: 96,
                        },
                    },
                    'Марксистская-Новокосино': {
                        from: {
                            anchor: 'Таганская::Кольцевая',
                            ofsHor: 20,
                            ofsVer: 10,
                        },
                        through: {
                            anchor: 'Шоссе Энтузиастов::МЦК',
                            ofsHor: -20,
                        },
                        dist: 350,
                    },
                }
            },
            'Филевская': {
                style: '#459BCF',
                type: 'segments',
                segments: {
                    'Александровский сад-Арбатская': {
                        from: {
                            anchor: 'Арбатская::Арбатская-Киевская::Арбатско-Покровская',
                            ofsVer: 14,
                            ofsHor: -12,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: -32,
                            ofsHor: -20,
                        },
                        points: {
                            'Александровский сад': {
                                anchor: 'from',
                                label: {},
                                transit: [
                                    'Библиотека им.Ленина::Кропоткинская-Черкизовская::Сокольническая',
                                    'Боровицкая::Боровицкая::Серпуховско-Тимирязевская',
                                    'Арбатская::Арбатская-Киевская::Арбатско-Покровская',
                                ],
                            },
                            'Арбатская': {
                                anchor: 'to',
                            },
                        },
                    },
                    'Смоленская-Международная': {
                        to: {
                            anchor: 'Деловой центр::МЦК',
                        },
                        from: {
                            anchor: 'to',
                            ofsHor: 202,
                        },
                        points: {
                            'Смоленская': {
                                anchor: 'from',
                            },
                            'Киевская': {
                                anchor: 'to',
                                dist: -140,
                                transit: [
                                    'Киевская::Кольцевая',
                                    'Киевская::Арбатская-Киевская::Арбатско-Покровская'
                                ],
                            },
                            'Выставочная': {
                                anchor: 'to',
                                dist: -54,
                                label: {
                                    alignVer: $$.$me_align.bottom,
                                    alignHor: $$.$me_align.center,
                                    ofsHor: 40,
                                },
                            },
                            'Международная': {
                                anchor: 'to',
                                dist: -22,
                                label: {
                                    alignVer: $$.$me_align.bottom,
                                    alignHor: $$.$me_align.center,
                                    ofsHor: -20,
                                },
                            },
                        },
                    },
                    'Киевская-Кутузовская': {
                        from: 'Киевская::Смоленская-Международная::Филевская',
                        to: {
                            anchor: 'Кутузовская::МЦК',
                            ofsHor: 15,
                        },
                        points: {
                            'Кутузовская': {
                                anchor: 'to',
                                transit: 'Кутузовская::МЦК',
                            },
                        },
                    },
                    'Кутузовская-Фили': {
                        from: {
                            anchor: 'from::Парк Победы-Славянский бульвар::Арбатско-Покровская',
                            ofsVer: -15,
                            ofsHor: -20,
                        },
                        to: {
                            anchor: 'to::Парк Победы-Славянский бульвар::Арбатско-Покровская',
                            ofsVer: -15,
                            ofsHor: 20,
                        },
                    },
                    'Фили-Кунцевская': {
                        from: {
                            anchor: 'to::Кутузовская-Фили',
                            ofsHor: -54,
                            ofsVer: -20,
                        },
                        to: {
                            anchor: 'Кунцевская::Кунцевская::Арбатско-Покровская',
                            ofsHor: 20,
                        },
                        points: {
                            'Фили': {
                                anchor: 'from',
                                label: {},
                            },
                            'Багратионовская': {
                                anchor: 'Фили',
                                dist: 30,
                                label: {},
                            },
                            'Филёвский парк': {
                                anchor: 'Багратионовская',
                                dist: 30,
                                label: {},
                            },
                            'Пионерская': {
                                anchor: 'Филёвский парк',
                                dist: 30,
                                label: {},
                            },
                            'Кунцевская': {
                                anchor: 'to',
                            },
                        },
                    },
                }
            },
            'Некрасовская': {
                style: '#EFC0D0',
                type: 'segments',
                segments: {
                    'Нижегородская улица-Стахановская': {
                        from: {
                            anchor: 'Нижегородская::МЦК',
                            ofsHor: 10,
                            ofsVer: 10,
                        },
                        to: {
                            anchor: 'from',
                            ofsHor: 40,
                            ofsVer: 50,
                        },
                        points: {
                            'Нижегородская улица': {
                                anchor: 'from',
                            },
                            'Стахановская': {
                                anchor: 'to',
                                label: {
                                    alignVer: $$.$me_align.bottom,
                                },
                            },
                        },
                    },
                    'Окская улица-Юго-Восточная': {
                        from: {
                            anchor: 'Кузьминки::Текстильщики-Кузьминки::Таганско-Краспресненская',
                            ofsHor: 18,
                            ofsVer: -40,
                        },
                        to: {
                            anchor: 'from',
                            ofsVer: 100,
                        },
                        points: {
                            'Окская улица': {
                                anchor: 'from',
                                label: {
                                    text: 'Окская<br>улица'
                                },
                            },
                            'Юго-Восточная': {
                                anchor: 'to',
                                label: {
                                    alignHor: $$.$me_align.right,
                                },
                            },
                        },
                    },
                    'Косино': {
                        from: 'to::Окская улица-Юго-Восточная',
                        to: {
                            anchor: 'Лермонтовский проспект::Лермонтовский проспект-Котельники::Таганско-Краспресненская',
                            ofsHor: 20,
                        },
                        points: {
                            'Косино': {
                                anchor: 'to',
                                transit: 'Лермонтовский проспект::Лермонтовский проспект-Котельники::Таганско-Краспресненская',
                            },
                        },
                    },
                    'Юг': {
                        from: {
                            anchor: 'to::Косино',
                            ofsHor: 5,
                            ofsVer: 20,
                        },
                        through: {
                            anchor: 'from',
                            ofsVer: 50,
                        },
                        dist: 100,
                        points: {
                            'Улица Дмитриевского': {
                                anchor: 'from',
                                dist: 50,
                            },
                            'Лухмановская': {
                                anchor: 'Улица Дмитриевского',
                                dist: 25,
                            },
                            'Некрасовка': {
                                anchor: 'Лухмановская',
                                dist: 25,
                            },
                        },
                    },
                }
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//data.js.map
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
        })($nl_scheme_will_action_enum || ($nl_scheme_will_action_enum = {}));
        function styleType(style) {
            const result = typeof style == 'string' ?
                $$.$nl_scheme_style_type_enum.solid :
                style.type || $$.$nl_scheme_style_type_enum.solid;
            return result;
        }
        function styleColor(style) {
            const result = typeof style == 'string' ?
                style :
                style.color;
            return result;
        }
        function add_label(id, src, point_id, labels, scale, centerX, centerY, radius_station) {
            const point_def = src[point_id];
            if (!point_def.label)
                return;
            const alignHor = point_def.label.alignHor || $$.$me_align.left;
            const alignVer = point_def.label.alignVer == null ?
                $$.$me_align.center :
                point_def.label.alignVer;
            const ofsHor = point_def.label.ofsHor != null ?
                point_def.label.ofsHor :
                alignHor == $$.$me_align.center ? 0 :
                    alignVer == $$.$me_align.center ? 2 : -2;
            const ofsVer = point_def.label.ofsVer != null ?
                point_def.label.ofsVer :
                alignVer == $$.$me_align.center ? 0 :
                    alignHor == $$.$me_align.center ? 2 : -2;
            const result = labels[id([point_id])] = {
                text: point_def.label.text || point_id,
                ofsHor: alignHor == $$.$me_align.left ?
                    centerX + radius_station + ofsHor * scale :
                    alignHor == $$.$me_align.right ?
                        centerX - radius_station - ofsHor * scale :
                        centerX + ofsHor * scale,
                ofsVer: alignVer == $$.$me_align.top ?
                    centerY + radius_station + ofsVer * scale :
                    alignVer == $$.$me_align.bottom ?
                        centerY - radius_station - ofsVer * scale :
                        centerY + ofsVer * scale,
                code: point_def.code,
                alignHor,
                alignVer,
                visible: true,
                textAlign: point_def.label.textAlign,
                whiteSpace: point_def.label.whiteSpace || 'pre',
                lineHeight: point_def.label.lineHeight || '1.0',
            };
        }
        function anchored_point(id, src, prop_name, points, scale, provider) {
            let result;
            if (!src[prop_name])
                $$.$me_throw(`${id()}: .${prop_name} expected due to .type'${src.type}' `);
            const arg = src[prop_name];
            let point_id = typeof arg == 'string' ?
                arg :
                arg.anchor;
            if (!point_id) {
                result = { x: $$.a('.ofsHor'), y: $$.a('.ofsVer') };
            }
            else {
                result = points[point_id];
                if (!result) {
                    const splitted_point_id = point_id.split('::');
                    const splitted_id = id().split('::');
                    const point_id_extended = splitted_point_id.concat(splitted_id.slice(splitted_point_id.length - 1)).join('::');
                    if (point_id_extended == point_id) {
                        $$.$me_throw(`points['${point_id}'] not found for ${id([prop_name])}.anchor`, points);
                    }
                    result = points[point_id_extended];
                    if (!result) {
                        $$.$me_throw(`nor points['${point_id}'] neither points['${point_id_extended}'] found for ${id([prop_name])}.anchor`, points);
                    }
                }
            }
            const props = provider && provider('props', result) || {};
            if (typeof arg == 'string') {
                result = Object.assign({}, props, { x: result.x, y: result.y });
            }
            else if (arg.angle != null) {
                const angle = arg.angle;
                if (!provider)
                    $$.$me_throw(`provider expected due to ${id([prop_name])}.angle`);
                const ret = provider('circle', result);
                if (ret == null ||
                    typeof ret.centerX != 'number' ||
                    typeof ret.centerY != 'number' ||
                    typeof ret.radius != 'number' ||
                    false)
                    $$.$me_throw(`provider('circle') expected to return {centerX: number, centerY: number, radius: number}, not`, ret);
                const { centerX, centerY, radius } = ret;
                result = Object.assign({}, props, { x: Math.cos(angle * Math.PI / 180) * radius + centerX, y: Math.sin(angle * Math.PI / 180) * radius + centerY });
            }
            else if (arg.dist != null) {
                const dist = arg.dist;
                if (!provider)
                    $$.$me_throw(`provider expected due to ${id([prop_name])}.dist`);
                const ret = provider('line', result);
                if (ret == null ||
                    !ret.from ||
                    typeof ret.from.x != 'number' ||
                    typeof ret.from.y != 'number' ||
                    !ret.to ||
                    typeof ret.to.x != 'number' ||
                    typeof ret.to.y != 'number' ||
                    false)
                    $$.$me_throw(`provider('line') expected to return {from: $me_point_intf, to: $me_point_intf}, not`, ret);
                const dx = ret.to.x - ret.from.x;
                const dy = ret.to.y - ret.from.y;
                const len = Math.hypot(dx, dy);
                result = Object.assign({}, props, { x: dx / len * dist * scale + result.x, y: dy / len * dist * scale + result.y });
            }
            else {
                result = Object.assign({}, props, { x: result.x + (arg.ofsHor || 0) * scale, y: result.y + (arg.ofsVer || 0) * scale });
            }
            if (typeof arg != 'string' && arg.label) {
                if (!provider)
                    $$.$me_throw(`provider expected due to ${id([prop_name])}.label`);
                const ret = provider('label', result);
                if (ret == null ||
                    !ret.labels ||
                    typeof ret.radius_station != 'number' ||
                    false)
                    $$.$me_throw(`provider('label') expected to return {labels: any, radius_station: number}, not`, ret);
                const { labels, radius_station } = ret;
                add_label(id, src, prop_name, labels, scale, result.x, result.y, radius_station);
            }
            if (typeof arg != 'string' && arg.transit) {
                if (!provider)
                    $$.$me_throw(`provider expected due to ${id([prop_name])}.transit`);
                const ret = provider('transit', result);
                if (ret !== true)
                    $$.$me_throw(`provider('transit') expected to return true, not`, ret);
            }
            points[id([prop_name])] = result;
            return result;
        }
        function handle_pinch(scale_new, pinch_center, prop_name = '.scale') {
            handle_helper(p => {
                const width = p.width;
                const height = p.height;
                const scale = $$.a(prop_name);
                p.width = width / scale * scale_new;
                p.height = height / scale * scale_new;
                const width_max = 3500;
                const height_max = 3500;
                const width_netto = p.width_upper - 2 * p.padding_Hor;
                const height_netto = p.height_upper - 2 * p.padding_Ver;
                if (p.width < width_netto &&
                    p.height < height_netto &&
                    true) {
                    p.scale = Math.min(width_netto / width * scale, height_netto / height * scale);
                }
                else if (p.width > width_max && p.height > height_max) {
                    p.scale = Math.max(width_max / width * scale, height_max / height * scale);
                }
                else {
                    p.scale = scale_new;
                }
                if (pinch_center.x < p.ofsHor) {
                    pinch_center.x = p.ofsHor;
                }
                else if (pinch_center.x > p.ofsHor + width) {
                    pinch_center.x = p.ofsHor + width;
                }
                $$.a(prop_name, p.scale);
                p.width = $$.a('.width_initial') * p.scale;
                p.height = $$.a('.height_initial') * p.scale;
                p.ofsHor += (scale - p.scale) * pinch_center.x;
                p.ofsVer += (scale - p.scale) * pinch_center.y;
            });
        }
        function handle_move(deltaX, deltaY) {
            handle_helper(p => {
                p.ofsHor -= deltaX;
                p.ofsVer -= deltaY;
            });
        }
        function handle_helper(fn) {
            const width_upper = $$.a('<.#width');
            const height_upper = $$.a('<.#height');
            const padding_Hor = $$.a('.ofsHor_initial');
            const padding_Ver = $$.a('.ofsVer_initial');
            const p = {
                ofsHor: $$.a('.ofsHor'),
                ofsVer: $$.a('.ofsVer'),
                width: $$.a('.width'),
                height: $$.a('.height'),
                scale: $$.a('.scale'),
                width_upper,
                height_upper,
                padding_Hor,
                padding_Ver,
            };
            fn(p);
            const ofsHor_max = Math.max($$.a('.ofsHor_initial'), (p.width_upper - p.width) / 2);
            const ofsHor_min = p.width_upper >= p.width ?
                (p.width_upper - p.width) / 2 :
                p.width_upper - $$.a('.ofsHor_initial') - p.width;
            const ofsVer_max = Math.max($$.a('.ofsVer_initial'), (p.height_upper - p.height) / 2);
            const ofsVer_min = p.height_upper >= p.height ?
                (p.height_upper - p.height) / 2 :
                p.height_upper - $$.a('.ofsVer_initial') - p.height;
            p.ofsHor = Math.round(Math.min(ofsHor_max, Math.max(ofsHor_min, p.ofsHor)));
            p.ofsVer = Math.round(Math.min(ofsVer_max, Math.max(ofsVer_min, p.ofsVer)));
            $$.a('.ofsHor', p.ofsHor);
            $$.a('.ofsVer', p.ofsVer);
        }
        $$.$nl_scheme_metro = {
            style: {
                userSelect: () => 'none',
                overflow: () => 'hidden',
            },
            dispatch(dispatch_name, dispatch_arg) {
                if (dispatch_name == 'lassoShow') {
                    const { clientX, clientY } = dispatch_arg;
                    const clientRect = $$.a('@container.#clientRect');
                    const x = clientX - clientRect.left;
                    const y = clientY - clientRect.top;
                    const point = { x, y };
                    $$.a('.isLasso', true);
                    $$.a('.lassoStart', point);
                    $$.a('.lassoEnd', point);
                    return true;
                }
                else if (dispatch_name == 'lassoMove') {
                    const { mode, clientX, clientY } = dispatch_arg;
                    if (mode == $$.$me_atom2_wheel_synth_mode.end) {
                        $$.a.dispatch('', 'lassoHide');
                    }
                    else {
                        const clientRect = $$.a('@container.#clientRect');
                        const x = clientX - clientRect.left;
                        const y = clientY - clientRect.top;
                        $$.a('.lassoEnd', { x, y });
                        const lassoStart = $$.a('.lassoStart');
                        const rect = {
                            left: Math.min(x, lassoStart.x),
                            top: Math.min(y, lassoStart.y),
                            right: Math.max(x, lassoStart.x),
                            bottom: Math.max(y, lassoStart.y),
                        };
                        const points = $$.a('.points');
                        const selected = $$.a('.selected');
                        const codes = $$.a('.will_codes');
                        codes.clear();
                        let will_action = $nl_scheme_will_action_enum.deselect;
                        for (const point_id in points) {
                            const point_def = points[point_id];
                            if (point_def.type != 'circle')
                                continue;
                            if (!point_def.visible)
                                continue;
                            if (!$$.$me_point_in_rect(point_def.x, point_def.y, rect))
                                continue;
                            codes.add(point_def.code);
                            if (!selected.has(point_def.code))
                                will_action = $nl_scheme_will_action_enum.select;
                        }
                        $$.a('.will_codes', codes, true);
                        $$.a('.will_action', will_action);
                    }
                    return true;
                }
                else if (dispatch_name == 'lassoHide') {
                    const will_action = $$.a('.will_action');
                    $$.a.update('.selected', val => {
                        for (const code of $$.a('.will_codes')) {
                            if (will_action == $nl_scheme_will_action_enum.select) {
                                val.set(code, null);
                            }
                            else {
                                val.delete(code);
                            }
                        }
                        return val;
                    }, true);
                    $$.a('.will_action', $nl_scheme_will_action_enum.none);
                    $$.a('.isLasso', false);
                    return true;
                }
                else if (dispatch_name = 'codeTapped') {
                    const code = dispatch_arg;
                    $$.a.update('.selected', val => {
                        if (val.has(code)) {
                            val.delete(code);
                        }
                        else {
                            val.set(code, null);
                        }
                        return val;
                    }, true);
                    return true;
                }
                return true;
            },
            prop: Object.assign({ '#width': '/.#viewportWidth', '#height': '/.#viewportHeight', will_action: () => $nl_scheme_will_action_enum.none, will_codes: () => new Set(), isLasso: () => false }, $$.$me_atom2_prop_same_def($$.$me_atom2_prop(['.isLasso'], () => ({ x: 0, y: 0 })), ['lassoStart', 'lassoEnd']), { lassoEnd: () => null, '#order': () => ['container', 'circle', 'label', 'cross', 'lasso'], labels: $$.$me_atom2_prop([], () => null), label_ids: $$.$me_atom2_prop_keys(['.labels']), label_ofsHor: $$.$me_atom2_prop({ keys: ['.label_ids'], masters: ['.labels'] }, ({ key: [id], masters: [labels] }) => labels[id].ofsHor), label_ofsVer: $$.$me_atom2_prop({ keys: ['.label_ids'], masters: ['.labels'] }, ({ key: [id], masters: [labels] }) => labels[id].ofsVer), label_hidden: $$.$me_atom2_prop({ keys: ['.label_ids'], masters: ['.labels'] }, ({ key: [id], masters: [labels] }) => !labels[id].visible), selected: $$.$me_atom2_prop_store({
                    default: () => new Map(),
                    valid: val => {
                        const isMap = val instanceof Map;
                        const result = isMap ? val : new Map();
                        return result;
                    },
                    toJSON: val => [...val].map(([id]) => id),
                    fromJSON: val => !Array.isArray(val) ?
                        new Map() :
                        new Map(val.map(id => [id, null])),
                }), radius_station: () => 6, thick_station: () => 2, thick_transit: () => 3, thick_line: () => 4, data: () => $$.$nl_scheme_metro_data, background_station: () => 'white', background_station_selected: () => 'red', background_station_will_select: () => '#F8CFD3', background_station_will_deselect: () => '#3F88DE', colorText_will_select: () => '#D5483E', colorText_will_deselect: '.background_station_will_deselect', points: $$.$me_atom2_prop([], () => null), point_ids: $$.$me_atom2_prop_keys(['.points']), point_x: $$.$me_atom2_prop({ keys: ['.point_ids'], masters: ['.points',] }, ({ key: [id], masters: [points] }) => points[id].x), point_y: $$.$me_atom2_prop({ keys: ['.point_ids'], masters: ['.points'] }, ({ key: [id], masters: [points] }) => points[id].y), point_color: $$.$me_atom2_prop({ keys: ['.point_ids'], masters: ['.points'] }, ({ key: [id], masters: [points] }) => points[id].color), point_hidden: $$.$me_atom2_prop({ keys: ['.point_ids'], masters: ['.points'] }, ({ key: [id], masters: [points] }) => !points[id].visible) }),
            elem: {
                label: $$.$me_atom2_prop({ keys: ['.label_ids'], masters: ['.labels'] }, ({ key: [id], masters: [labels] }) => ({
                    prop: {
                        '#width': () => 0,
                        '#height': () => 0,
                        '#ofsHor': `<.label_ofsHor[${id}]`,
                        '#ofsVer': `<.label_ofsVer[${id}]`,
                        '#hidden': `<.label_hidden[${id}]`,
                    },
                    elem: {
                        text: () => ({
                            dom: {
                                innerHTML: () => labels[id].text,
                            },
                            event: {
                                clickOrTap: () => {
                                    $$.a.dispatch('<<', 'codeTapped', labels[id].code);
                                    return true;
                                },
                            },
                            style: Object.assign({}, (!labels[id].lineHeight ? {} : { lineHeight: () => labels[id].lineHeight }), (!labels[id].textAlign ? {} : { textAlign: () => labels[id].textAlign }), (!labels[id].whiteSpace ? {} : { whiteSpace: () => labels[id].whiteSpace })),
                            prop: {
                                '#width': () => null,
                                '#height': () => null,
                                '#alignHor': () => labels[id].alignHor,
                                '#alignVer': () => labels[id].alignVer,
                                fontSize: $$.$me_atom2_prop(['<<@container^scheme._scale'], ({ masters: [scale] }) => 13 * scale),
                                '#cursor': () => 'pointer',
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                                colorText: $$.$me_atom2_prop([
                                    '<<.will_action',
                                    '<<.will_codes',
                                    '<<.colorText_will_select',
                                    '<<.colorText_will_deselect',
                                    '/.colorText',
                                ], ({ masters: [will_action, will_codes, colorText_will_select, colorText_will_deselect, colorText] }) => {
                                    const code = labels[id].code;
                                    const result = will_action == $nl_scheme_will_action_enum.select && will_codes.has(code) ?
                                        colorText_will_select :
                                        will_action == $nl_scheme_will_action_enum.deselect && will_codes.has(code) ?
                                            colorText_will_deselect :
                                            colorText;
                                    return result;
                                }),
                            },
                        }),
                    },
                })),
                circle: $$.$me_atom2_prop({ keys: ['.point_ids'], masters: ['.points'] }, ({ key: [id], masters: [points] }) => points[id].type != 'circle' ? null : {
                    prop: Object.assign({}, $$.$me_atom2_prop_same_def($$.$me_atom2_prop(['<@container^scheme._scale', '<.radius_station'], ({ masters: [scale, radius] }) => 2 * radius * scale), ['#width', '#height']), { '#ofsHor': $$.$me_atom2_prop([`<.point_x[${id}]`, '.#width'], ({ masters: [x, width] }) => x - width / 2), '#ofsVer': $$.$me_atom2_prop([`<.point_y[${id}]`, '.#height'], ({ masters: [x, width] }) => x - width / 2), '#hidden': `<.point_hidden[${id}]`, '#cursor': () => 'pointer', '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1) }),
                    style: {
                        border: $$.$me_atom2_prop([`<@container^scheme._scale`, '<.thick_station', `<.point_color[${id}]`], ({ masters: [scale, thick, color] }) => `${scale * thick}px solid ${color}`),
                        borderRadius: () => '50%',
                        boxSizing: () => 'border-box',
                        background: $$.$me_atom2_prop([
                            '<.will_action',
                            '<.will_codes',
                            '<.background_station_will_select',
                            '<.background_station_will_deselect',
                            '<.selected',
                            '<.background_station',
                            '<.background_station_selected',
                        ], ({ masters: [will_action, will_codes, background_station_will_select, background_station_will_deselect, selected, background, background_selected,] }) => {
                            const code = points[id].code;
                            const result = will_action == $nl_scheme_will_action_enum.deselect && will_codes.has(code) ?
                                background_station_will_deselect :
                                selected.has(code) ?
                                    background_selected :
                                    will_action == $nl_scheme_will_action_enum.select && will_codes.has(code) ?
                                        background_station_will_select :
                                        background;
                            return result;
                        }),
                    },
                    event: {
                        clickOrTap: () => {
                            $$.a.dispatch('<', 'codeTapped', points[id].code);
                            return true;
                        },
                    },
                }),
                cross: () => ({
                    base: $$.$me_cross,
                    prop: {
                        size: () => 24,
                        thick: () => 3,
                        '#ofsVer': () => 8,
                        '#ofsHor': () => 16,
                        '#alignHor': () => $$.$me_align.right,
                        color: '/.colorText',
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 2),
                        '#cursor': () => 'pointer',
                    },
                    event: {
                        clickOrTap: () => {
                            $$.a.dispatch('<', 'close');
                            return true;
                        },
                    },
                }),
                lasso: $$.$me_atom2_prop(['.isLasso'], ({ masters: [isLasso] }) => !isLasso ? null : {
                    prop: {
                        '#ofsHor': $$.$me_atom2_prop(['<.lassoStart', '<.lassoEnd'], ({ masters: [lassoStart, lassoEnd] }) => Math.min(lassoStart.x, lassoEnd.x)),
                        '#ofsVer': $$.$me_atom2_prop(['<.lassoStart', '<.lassoEnd'], ({ masters: [lassoStart, lassoEnd] }) => Math.min(lassoStart.y, lassoEnd.y)),
                        '#width': $$.$me_atom2_prop(['<.lassoStart', '<.lassoEnd'], ({ masters: [lassoStart, lassoEnd] }) => Math.abs(lassoStart.x - lassoEnd.x)),
                        '#height': $$.$me_atom2_prop(['<.lassoStart', '<.lassoEnd'], ({ masters: [lassoStart, lassoEnd] }) => Math.abs(lassoStart.y - lassoEnd.y)),
                    },
                    style: {
                        border: () => '1px dashed red',
                    },
                }),
                container: () => ({
                    prop: {
                        '#width': '<.#width',
                        '#height': '<.#height',
                    },
                    control: {
                        scheme: () => ({
                            event: {
                                pinchFini: p => {
                                    console.warn('pinchFini', p.event);
                                    $$.a('.scale', $$.a('._scale'));
                                    return false;
                                },
                                pinch: p => {
                                    handle_pinch($$.a('.scale') * p.event.scale, p.event.center, '._scale');
                                    return false;
                                },
                                wheelDragInit: p => {
                                    $$.a.dispatch('<<', 'lassoShow', p.event.last);
                                    return false;
                                },
                                wheelDragFini: p => {
                                    $$.a.dispatch('<<', 'lassoHide');
                                    return false;
                                },
                                wheelDrag: p => {
                                    const { clientX, clientY } = p.event.last;
                                    $$.a.dispatch('<<', 'lassoMove', {
                                        clientX, clientY,
                                        mode: p.event.mode,
                                    });
                                    return true;
                                },
                                wheelTouchInit: p => {
                                    if (p.event.last.touches.length == 1) {
                                        $$.a.dispatch('<<', 'lassoShow', p.event.last.touches[0]);
                                    }
                                    return false;
                                },
                                wheelTouch: p => {
                                    if (p.event.start.touches.length > 1) {
                                        handle_move(p.event._deltaX, p.event._deltaY);
                                    }
                                    else {
                                        const { clientX, clientY } = p.event.last.touches[0];
                                        $$.a.dispatch('<<', 'lassoMove', {
                                            clientX, clientY,
                                            mode: p.event.mode,
                                        });
                                    }
                                    return true;
                                },
                                wheelTouchFini: p => {
                                    if (p.event.start.touches.length == 1) {
                                        $$.a.dispatch('<<', 'lassoHide');
                                    }
                                    return false;
                                },
                                wheel: p => {
                                    if (!p.event.ctrlKey) {
                                        handle_move(p.event._deltaX, p.event._deltaY);
                                    }
                                    else {
                                        const clientRect = $$.a('.#clientRect');
                                        const x = p.event.clientX - clientRect.left;
                                        const y = p.event.clientY - clientRect.top;
                                        handle_pinch($$.a('.scale') - p.event.deltaY * 0.02, { x, y });
                                    }
                                    return true;
                                },
                                clickOrTap: (p) => {
                                    return true;
                                },
                            },
                            prop: {
                                ofsVer_initial: () => 32,
                                ofsHor_initial: () => 32,
                                width_initial: () => 1136,
                                height_initial: () => 1148,
                                scale_initial: $$.$me_atom2_prop(['.#width', '.width_initial', '.ofsHor_initial'], ({ masters: [width, width_initial, ofsHor_initial] }) => (width - 2 * ofsHor_initial) / width_initial),
                                scale: $$.$me_atom2_prop_store({
                                    default: () => $$.a('.scale_initial'),
                                    valid: (val) => typeof val == 'number' ? val : null,
                                }),
                                _scale: '.scale',
                                ofsHor: $$.$me_atom2_prop_store({
                                    default: () => $$.a('.ofsHor_initial'),
                                    valid: (val) => typeof val == 'number' ? val : null,
                                }),
                                ofsVer: $$.$me_atom2_prop_store({
                                    default: () => $$.a('.ofsVer_initial'),
                                    valid: (val) => typeof val == 'number' ? val : null,
                                }),
                                width: $$.$me_atom2_prop(['.width_initial', '._scale'], $$.$me_atom2_prop_compute_fn_mul()),
                                height: $$.$me_atom2_prop(['.height_initial', '._scale'], $$.$me_atom2_prop_compute_fn_mul()),
                                radius_station: '<<.radius_station',
                                thick_transit: '<<.thick_transit',
                                thick_line: '<<.thick_line',
                                data: '<<.data',
                            },
                            render: p => {
                                const { ctx, pixelRatio } = p;
                                const ctxFontSize = $$.$me_atom2_control.font_prepare(ctx, pixelRatio);
                                $$.$me_atom2_ctx_rect({
                                    ctx,
                                    ctxTop: pixelRatio * $$.a('.ofsVer'),
                                    ctxLeft: pixelRatio * $$.a('.ofsHor'),
                                    ctxWidth: pixelRatio * $$.a('.width'),
                                    ctxHeight: pixelRatio * $$.a('.height'),
                                    stroke: { ctxWidth: pixelRatio, style: 'red' },
                                });
                                const scale = $$.a('._scale');
                                const thick_transit = $$.a('.thick_transit') * scale;
                                const thick_line = $$.a('.thick_line') * scale;
                                const radius_station = $$.a('.radius_station') * scale;
                                const lines = $$.a('.data');
                                const labels = $$.a('<<.labels') || {};
                                for (const label_id in labels) {
                                    labels[label_id].visible = false;
                                }
                                const anchored_point_provider = (req, result, p) => {
                                    if (req == 'props') {
                                        const type = p.point_def.type || 'circle';
                                        return type != 'circle' ? { type } : {
                                            type,
                                            visible: true,
                                            color: styleColor(p.line_def.style),
                                            code: p.point_def.code,
                                        };
                                    }
                                    if (req == 'label') {
                                        return {
                                            labels,
                                            radius_station,
                                        };
                                    }
                                    if (req == 'transit') {
                                        const anchors = typeof p.point_def.transit == 'string' ?
                                            [p.point_def.transit] :
                                            Array.isArray(p.point_def.transit) ?
                                                p.point_def.transit :
                                                $$.$me_throw('unsupported .transit', p.point_def.transit);
                                        for (const anchor of anchors) {
                                            const point_to = points[anchor];
                                            if (point_to.type != 'circle')
                                                $$.$me_throw(`.anchor'${p.id([p.point_id, 'transit'])}' of ${anchor} must refer to point with .type'circle', not`, point_to);
                                            const dx = point_to.x - result.x;
                                            const dy = point_to.y - result.y;
                                            const len = Math.hypot(dx, dy);
                                            const gradient = ctx.createLinearGradient((result.x + dx / len * radius_station) * pixelRatio, (result.y + dy / len * radius_station) * pixelRatio, (point_to.x - dx / len * radius_station) * pixelRatio, (point_to.y - dy / len * radius_station) * pixelRatio);
                                            gradient.addColorStop(0, styleColor(p.line_def.style));
                                            gradient.addColorStop(1, point_to.color);
                                            ctx.beginPath();
                                            ctx.moveTo(result.x * pixelRatio, result.y * pixelRatio);
                                            ctx.lineTo(point_to.x * pixelRatio, point_to.y * pixelRatio);
                                            ctx.strokeStyle = gradient;
                                            ctx.lineWidth = thick_transit * pixelRatio;
                                            ctx.stroke();
                                        }
                                        return true;
                                    }
                                };
                                const prepare_point = (prop_names, id, segment_def, points, scale) => {
                                    const result = {};
                                    for (const prop_name in segment_def) {
                                        if (!~prop_names.indexOf(prop_name))
                                            continue;
                                        result[prop_name] = anchored_point(id, segment_def, prop_name, points, scale);
                                    }
                                    return result;
                                };
                                const segment_helper = {
                                    circle: (line_def, segment_def, id) => {
                                        const p = prepare_point(['center'], id, segment_def, points, scale);
                                        if (!p['center'])
                                            anchored_point(id, segment_def, 'center', points, scale);
                                        line_def.ctxCenterX = p.center.x * pixelRatio;
                                        line_def.ctxCenterY = p.center.y * pixelRatio;
                                        line_def.ctxRadius = line_def.radius * scale * pixelRatio;
                                        const type = styleType(line_def.style);
                                        if (type == $$.$nl_scheme_style_type_enum.solid) {
                                            $$.$me_atom2_ctx_circle({
                                                ctx,
                                                ctxCenterX: line_def.ctxCenterX,
                                                ctxCenterY: line_def.ctxCenterY,
                                                ctxRadius: line_def.ctxRadius + (thick_line * pixelRatio) / 2,
                                                stroke: { ctxWidth: thick_line * pixelRatio, style: styleColor(line_def.style) },
                                            });
                                        }
                                        else if (type == $$.$nl_scheme_style_type_enum.double) {
                                            const thickStyle = (line_def.style.thickStyle || thick_line) * scale;
                                            const thickLine = (line_def.style.thickLine || pixelRatio) * scale;
                                            $$.$me_atom2_ctx_circle({
                                                ctx,
                                                ctxCenterX: line_def.ctxCenterX,
                                                ctxCenterY: line_def.ctxCenterY,
                                                ctxRadius: line_def.ctxRadius + thickLine / 2 - thickStyle / 2,
                                                stroke: { ctxWidth: thickLine * pixelRatio, style: styleColor(line_def.style) },
                                            });
                                            $$.$me_atom2_ctx_circle({
                                                ctx,
                                                ctxCenterX: line_def.ctxCenterX,
                                                ctxCenterY: line_def.ctxCenterY,
                                                ctxRadius: line_def.ctxRadius + thickLine / 2 + thickStyle / 2,
                                                stroke: { ctxWidth: thickLine * pixelRatio, style: styleColor(line_def.style) },
                                            });
                                        }
                                        else {
                                            $$.$me_throw(`${id()}: unsupported style.type ${$$.$nl_scheme_style_type_enum[type]}`, line_def);
                                        }
                                        const retCircle = {
                                            centerX: line_def.ctxCenterX / pixelRatio,
                                            centerY: line_def.ctxCenterY / pixelRatio,
                                            radius: line_def.ctxRadius / pixelRatio,
                                        };
                                        for (const point_id in line_def.points) {
                                            const point_def = line_def.points[point_id];
                                            const point = anchored_point(id, line_def.points, point_id, points, scale, (req, result) => {
                                                if (req == 'circle')
                                                    return retCircle;
                                                return anchored_point_provider(req, result, {
                                                    point_id,
                                                    point_def,
                                                    line_def,
                                                    id,
                                                });
                                            });
                                        }
                                    },
                                    line: (line_def, segment_def, id) => {
                                        const p = prepare_point(['from', 'to', 'through'], id, segment_def, points, scale);
                                        if (p['from'] && p['to'] && p['through']) {
                                            $$.$me_throw('.through is not expected whilst .from and .to are set');
                                        }
                                        else if (!p['to']) {
                                            if (!(p['from'] && p['through'] && segment_def.dist))
                                                $$.$me_throw(id() + ': .from, .through and .dist must be set whilst .to is absent');
                                            const dx = p.through.x - p.from.x;
                                            const dy = p.through.y - p.from.y;
                                            const len = Math.hypot(dx, dy);
                                            const dist = segment_def.dist;
                                            points[id(['to'])] = p['to'] = {
                                                x: p.from.x + dx / len * dist * scale,
                                                y: p.from.y + dy / len * dist * scale,
                                            };
                                        }
                                        else if (!p['from']) {
                                            if (!(p['to'] && p['through']) && segment_def.dist)
                                                $$.$me_throw('.to, .through and .dist must be set whilst .from is absent');
                                            const dx = p.through.x - p.to.x;
                                            const dy = p.through.y - p.to.y;
                                            const len = Math.hypot(dx, dy);
                                            const dist = segment_def.dist;
                                            points[id(['from'])] = p['from'] = {
                                                x: p.to.x - dx / len * dist * scale,
                                                y: p.to.y - dy / len * dist * scale,
                                            };
                                        }
                                        ctx.beginPath();
                                        ctx.moveTo(p.from.x * pixelRatio, p.from.y * pixelRatio);
                                        ctx.lineTo(p.to.x * pixelRatio, p.to.y * pixelRatio);
                                        ctx.closePath();
                                        ctx.strokeStyle = styleColor(line_def.style);
                                        ctx.lineWidth = thick_line * pixelRatio;
                                        ctx.stroke();
                                        for (const point_id in segment_def.points) {
                                            const point_def = segment_def.points[point_id];
                                            const point = anchored_point(id, segment_def.points, point_id, points, scale, (req, result) => {
                                                if (req == 'line')
                                                    return p;
                                                return anchored_point_provider(req, result, {
                                                    point_id,
                                                    point_def,
                                                    line_def,
                                                    id,
                                                });
                                            });
                                        }
                                    },
                                };
                                const segment = (line_def, segment_def, id_items) => {
                                    const fn = segment_helper[segment_def.type || 'line'];
                                    if (!fn) {
                                        $$.$me_throw('unsupported segment_def.type', segment_def.type);
                                    }
                                    else {
                                        fn(line_def, segment_def, (tail) => id_items.concat(!tail ? [] : tail).reverse().join('::'));
                                    }
                                };
                                const segments = (line_def, group_def, id_items) => {
                                    for (const segment_id in group_def.segments) {
                                        const segment_def = group_def.segments[segment_id];
                                        segment(line_def, segment_def, id_items.concat(segment_id));
                                    }
                                };
                                const points = $$.a('<<.points') || {};
                                for (const point_id in points) {
                                    points[point_id].visible = false;
                                }
                                for (const line_id in lines) {
                                    const line_def = lines[line_id];
                                    if (~Object.keys(segment_helper).indexOf(line_def.type)) {
                                        segment(line_def, line_def, [line_id]);
                                    }
                                    else if (line_def.type == null || line_def.type == 'segments') {
                                        segments(line_def, line_def, [line_id]);
                                    }
                                    else
                                        $$.$me_throw('unsupported line_def.type', line_def.type);
                                }
                                $$.a('<<.points', points, true);
                                $$.a('<<.labels', labels, true);
                                return true;
                            },
                        }),
                    },
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//metro.js.map
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
        $$.$nl_scheme_metro_demo = (rootElem) => {
            $$.$nl_defaults_init();
            return new $$.$me_atom2_elem({ tail: 'app', cnf: {
                    node: rootElem,
                    style: {
                        margin: () => 0,
                    },
                    prop: {},
                    elem: {
                        scheme: () => ({
                            base: $$.$nl_scheme_metro
                        })
                    }
                } });
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.js.map
//# sourceMappingURL=web.js.map