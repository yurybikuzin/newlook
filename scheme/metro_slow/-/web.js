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
            'wheelTouch',
            'wheelDrag',
            'click',
            'tap',
            'clickOrTap',
            'clickOrTapOutside',
            'clickOutside',
            'tapOutside',
        ];
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
            $me_atom2_pinch_mode[$me_atom2_pinch_mode["init"] = 0] = "init";
            $me_atom2_pinch_mode[$me_atom2_pinch_mode["move"] = 1] = "move";
            $me_atom2_pinch_mode[$me_atom2_pinch_mode["fini"] = 2] = "fini";
        })($me_atom2_pinch_mode = $$.$me_atom2_pinch_mode || ($$.$me_atom2_pinch_mode = {}));
        const pinch_threshold = .001;
        class $me_atom2_pinch_class {
            start(event) {
                this.mode = null;
                this._start = event;
                this.clientX0 = event.touches[0].clientX;
                this.clientY0 = event.touches[0].clientY;
                this.clientX1 = event.touches[1].clientX;
                this.clientY1 = event.touches[1].clientY;
                this.distInitial = Math.hypot(this.clientX0 - this.clientX1, this.clientY0 - this.clientY1);
            }
            move(event) {
                this._end = event;
                if (Math.sign(event.touches[0].clientX - this.clientX0) ==
                    Math.sign(event.touches[1].clientX - this.clientX1) ||
                    Math.sign(event.touches[0].clientY - this.clientY0) ==
                        Math.sign(event.touches[1].clientY - this.clientY1) ||
                    false) {
                    console.log((event.touches[0].clientX - this.clientX0), (event.touches[1].clientX - this.clientX1), (event.touches[0].clientY - this.clientY0), (event.touches[1].clientY - this.clientY1));
                    this.distCurrent = null;
                    return;
                }
                this.clientX0 = event.touches[0].clientX;
                this.clientY0 = event.touches[0].clientY;
                this.clientX1 = event.touches[1].clientX;
                this.clientY1 = event.touches[1].clientY;
                this.distCurrent = Math.hypot(this.clientX0 - this.clientX1, this.clientY0 - this.clientY1);
                this.mode =
                    this.mode == null ?
                        $me_atom2_pinch_mode.init :
                        $me_atom2_pinch_mode.move;
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
                    $$.$me_atom2_pinch.mode != $me_atom2_pinch_mode.fini && (this.distCurrent == null ||
                        Math.abs(this.distPrev - this.distCurrent) < pinch_threshold * this.distInitial ||
                        false) ?
                    null :
                    {
                        start: this._start,
                        end: this._end,
                        distInitial: this.distInitial,
                        distCurrent: this.distCurrent,
                        scale: this.distCurrent / this.distInitial,
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
        let $me_atom2_wheel_touch_mode;
        (function ($me_atom2_wheel_touch_mode) {
            $me_atom2_wheel_touch_mode[$me_atom2_wheel_touch_mode["move"] = 0] = "move";
            $me_atom2_wheel_touch_mode[$me_atom2_wheel_touch_mode["end"] = 1] = "end";
        })($me_atom2_wheel_touch_mode = $$.$me_atom2_wheel_touch_mode || ($$.$me_atom2_wheel_touch_mode = {}));
        class $me_atom2_wheel_touch_class {
            constructor() {
                this.scrollAccuX = 0;
                this.scrollAccuY = 0;
                this.lastDeltaX = 0;
                this.lastDeltaY = 0;
                this.accelX = 0;
                this.accelY = 0;
            }
            start(event) {
                this.mode = null;
                this._start = event;
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
                this._end = event;
                const deltaX = event.touches.length == 1 ?
                    this.clientX0 - event.touches[0].clientX :
                    event.touches.length == 2 &&
                        Math.sign(this.clientX0 - event.touches[0].clientX) ==
                            Math.sign(this.clientX1 - event.touches[1].clientX) &&
                        true ?
                        Math.sign(this.clientX0 - event.touches[0].clientX) *
                            Math.max(Math.abs(this.clientX0 - event.touches[0].clientX), Math.abs(this.clientX1 - event.touches[1].clientX)) :
                        event.touches.length == 3 &&
                            Math.sign(this.clientX0 - event.touches[0].clientX) ==
                                Math.sign(this.clientX1 - event.touches[1].clientX) &&
                            Math.sign(this.clientX0 - event.touches[0].clientX) ==
                                Math.sign(this.clientX2 - event.touches[2].clientX) &&
                            true ?
                            (this.clientX0 - event.touches[0].clientX +
                                this.clientX1 - event.touches[1].clientX +
                                this.clientX2 - event.touches[2].clientX +
                                0) / 3 :
                            0;
                const deltaY = event.touches.length == 1 ?
                    this.clientY0 - event.touches[0].clientY :
                    event.touches.length == 2 &&
                        Math.sign(this.clientY0 - event.touches[0].clientY) ==
                            Math.sign(this.clientY1 - event.touches[1].clientY) &&
                        true ?
                        Math.sign(this.clientY0 - event.touches[0].clientY) *
                            Math.max(Math.abs(this.clientY0 - event.touches[0].clientY), Math.abs(this.clientY1 - event.touches[1].clientY)) :
                        event.touches.length == 3 &&
                            Math.sign(this.clientY0 - event.touches[0].clientY) ==
                                Math.sign(this.clientY1 - event.touches[1].clientY) &&
                            Math.sign(this.clientY0 - event.touches[0].clientY) ==
                                Math.sign(this.clientY2 - event.touches[2].clientY) &&
                            true ?
                            (this.clientY0 - event.touches[0].clientY +
                                this.clientY1 - event.touches[1].clientY +
                                this.clientY2 - event.touches[2].clientY +
                                0) / 3 :
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
                this.lastDeltaX = deltaX;
                this.lastDeltaY = deltaY;
                if (deltaX || deltaY) {
                    this.mode = $me_atom2_wheel_touch_mode.move;
                    $$.$me_atom2_async();
                }
            }
            cancel() {
                this.mode = null;
            }
            end(event) {
                if (this.mode != $me_atom2_wheel_touch_mode.move) {
                    this.cancel();
                }
                else {
                    this._end = event;
                    this.accel_k = 1;
                    this.mode = $me_atom2_wheel_touch_mode.end;
                    $$.$me_atom2_async();
                }
            }
            raf(t) {
                return (this.mode == $me_atom2_wheel_touch_mode.move ? this.rafMove(t) :
                    this.mode == $me_atom2_wheel_touch_mode.end ? this.rafEnd(t) :
                        null);
            }
            rafMove(t) {
                if (Math.abs(this.scrollAccuY) > Math.abs(this.scrollAccuX)) {
                    this.scrollAccuX = 0;
                }
                else {
                    this.scrollAccuY = 0;
                }
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
                    start: this._start,
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
                if (!(Math.abs(scrollAccuX) >= 1 ||
                    Math.abs(scrollAccuY) >= 1)) {
                    this.mode = null;
                    return null;
                }
                else {
                    const result = {
                        start: this._start,
                        end: this._end,
                        _deltaX: scrollAccuX,
                        _deltaY: scrollAccuY,
                    };
                    this.accelX = this.accelX * this.accel_k;
                    this.accelY = this.accelY * this.accel_k;
                    this.accel_k = this.accel_k * $$.a('/.#wheelTouchAccelFactor');
                    this.tPrev = t;
                    $$.$me_atom2_async();
                    return result;
                }
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
        let $me_atom2_wheel_drag_mode;
        (function ($me_atom2_wheel_drag_mode) {
            $me_atom2_wheel_drag_mode[$me_atom2_wheel_drag_mode["move"] = 0] = "move";
            $me_atom2_wheel_drag_mode[$me_atom2_wheel_drag_mode["end"] = 1] = "end";
        })($me_atom2_wheel_drag_mode = $$.$me_atom2_wheel_drag_mode || ($$.$me_atom2_wheel_drag_mode = {}));
        class $me_atom2_wheel_drag_class {
            constructor() {
                this.scrollAccuX = 0;
                this.lastDeltaX = 0;
                this.accelX = 0;
                this.scrollAccuY = 0;
                this.lastDeltaY = 0;
                this.accelY = 0;
            }
            start(event) {
                this.mode = null;
                this._start = event;
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
                this.mode = $me_atom2_wheel_drag_mode.move;
                $$.$me_atom2_async();
            }
            cancel() {
                this.mode = null;
            }
            end(event) {
                if (this.mode != $me_atom2_wheel_drag_mode.move) {
                    this.cancel();
                }
                else {
                    this._end = event;
                    this.accel_k = 1;
                    this.mode = $me_atom2_wheel_drag_mode.end;
                    $$.$me_atom2_async();
                }
            }
            raf(t) {
                return (this.mode == $me_atom2_wheel_drag_mode.move ? this.rafMove(t) :
                    this.mode == $me_atom2_wheel_drag_mode.end ? this.rafEnd(t) :
                        null);
            }
            rafMove(t) {
                if (Math.abs(this.scrollAccuY) > Math.abs(this.scrollAccuX)) {
                    this.scrollAccuX = 0;
                }
                else {
                    this.scrollAccuY = 0;
                }
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
                    start: this._start,
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
                if (!(Math.abs(scrollAccuX) >= 1 ||
                    Math.abs(scrollAccuY) >= 1)) {
                    this.mode = null;
                    return null;
                }
                else {
                    const result = {
                        start: this._start,
                        end: this._end,
                        _deltaX: scrollAccuX,
                        _deltaY: scrollAccuY,
                    };
                    this.accelX = this.accelX * this.accel_k;
                    this.accelY = this.accelY * this.accel_k;
                    this.accel_k = this.accel_k * $$.a('/.#wheelTouchAccelFactor');
                    this.tPrev = t;
                    $$.$me_atom2_async();
                    return result;
                }
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
                let event_pinch_to_process;
                if ($$.$me_atom2_pinch)
                    event_pinch_to_process = $$.$me_atom2_pinch.raf(t);
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
                return [count, pre];
            },
            wheelTouch: (last_now, t) => {
                const pre = performance.now() - last_now;
                let count = 0;
                let event_wheel_touch_to_process;
                if ($$.$me_atom2_wheel_touch)
                    event_wheel_touch_to_process = $$.$me_atom2_wheel_touch.raf(t);
                if (event_wheel_touch_to_process) {
                    $$.$me_atom2_event_process('wheelTouch', event_wheel_touch_to_process);
                    count = 1;
                }
                return [count, pre];
            },
            wheelDrag: (last_now, t) => {
                const pre = performance.now() - last_now;
                let count = 0;
                let event_wheel_drag_to_process;
                if ($$.$me_atom2_wheel_drag)
                    event_wheel_drag_to_process = $$.$me_atom2_wheel_drag.raf(t);
                if (event_wheel_drag_to_process) {
                    $$.$me_atom2_event_process('wheelDrag', event_wheel_drag_to_process);
                    count = 1;
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
            if (!$$.$me_atom2_wheel_touch)
                $$.$me_atom2_wheel_touch = new $$.$me_atom2_wheel_touch_class();
            if (!$$.$me_atom2_pinch)
                $$.$me_atom2_pinch = new $$.$me_atom2_pinch_class();
            $$.$me_atom2_wheel_touch.start(event);
            if (event.touches.length == 2) {
                $$.$me_atom2_pinch.start(event);
            }
            return $$.$me_atom2_event_process('touchstart', event);
        };
        const touchmove = (event) => {
            event.preventDefault();
            if ($$.$me_atom2_wheel_touch)
                $$.$me_atom2_wheel_touch.move(event);
            if ($$.$me_atom2_pinch && event.touches.length == 2)
                $$.$me_atom2_pinch.move(event);
            return $$.$me_atom2_event_process('touchmove', event);
        };
        const touchend = (event) => {
            if ($$.$me_atom2_wheel_touch)
                $$.$me_atom2_wheel_touch.end(event);
            if ($$.$me_atom2_pinch)
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
                $$.$me_atom2_event_wheel_to_process._deltaX = event.deltaX + (Math.sign($$.$me_atom2_event_wheel_to_process._deltaX) * Math.sign(event.deltaX) < 0 ? 0 : $$.$me_atom2_event_wheel_to_process._deltaX);
                $$.$me_atom2_event_wheel_to_process._deltaY = event.deltaY + (Math.sign($$.$me_atom2_event_wheel_to_process._deltaY) * Math.sign(event.deltaY) < 0 ? 0 : $$.$me_atom2_event_wheel_to_process._deltaY);
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
        function handle_pinch(scale_new, prop_name = '.scale') {
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
                $$.a(prop_name, p.scale);
                p.width = width / scale * p.scale;
                p.height = height / scale * p.scale;
            });
        }
        function handle_move(deltaX, deltaY) {
            handle_helper(p => {
                p.ofsHor -= deltaX;
                p.ofsVer -= deltaY;
            });
        }
        function handle_helper(fn) {
            const clientRect_upper = $$.a('<.#clientRect');
            const clientRect_own = $$.a('.#clientRect');
            const width_upper = $$.$me_rect_width(clientRect_upper);
            const height_upper = $$.$me_rect_height(clientRect_upper);
            const padding_Hor = $$.a('.#ofsHor');
            const padding_Ver = $$.a('.#ofsVer');
            const p = {
                ofsHor: $$.a('.ofsHor'),
                ofsVer: $$.a('.ofsVer'),
                width: $$.$me_rect_width(clientRect_own),
                height: $$.$me_rect_height(clientRect_own),
                scale: $$.a('.scale'),
                width_upper,
                height_upper,
                padding_Hor,
                padding_Ver,
            };
            fn(p);
            const ofsHor_max = Math.max(0, padding_Hor - (width_upper - p.width) / 2);
            const ofsVer_max = -p.height * (1 / p.scale - 1) / 2;
            const ofsVer_min = height_upper - p.height * (1 / p.scale + 1) / 2 - padding_Ver * 2;
            p.ofsHor = Math.round(Math.sign(p.ofsHor) * Math.min(Math.abs(p.ofsHor), ofsHor_max));
            p.ofsVer = Math.round(Math.min(ofsVer_max, Math.max(ofsVer_min, p.ofsVer)));
            $$.a('.ofsHor', p.ofsHor);
            $$.a('.ofsVer', p.ofsVer);
        }
        $$.$nl_scheme_metro = {
            prop: {
                '#width': '/.#viewportWidth',
                '#height': '/.#viewportHeight',
            },
            style: {
                userSelect: () => 'none',
                overflow: () => 'hidden',
            },
            dispatch(dispatch_name, dispatch_arg) {
                return true;
            },
            elem: {
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
                container: () => ({
                    prop: {
                        '#ofsVer': () => 32,
                        '#ofsHor': () => 32,
                        '#height': () => null,
                        '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor', '.#ofsHor'], $$.$me_atom2_prop_compute_fn_diff()),
                        ofsHor: () => 0,
                        ofsVer: () => 0,
                        scale: () => 1,
                        _scale: '.scale',
                    },
                    style: {
                        transform: $$.$me_atom2_prop(['.ofsHor', '.ofsVer', '._scale'], ({ masters: [ofsHor, ofsVer, scale] }) => `translate3D(${ofsHor}px,${ofsVer}px, 0px) scale(${scale})`),
                    },
                    event: {
                        pinchFini: p => {
                            console.warn('pinchFini', p.event);
                            $$.a('.scale', $$.a('._scale'));
                            return false;
                        },
                        pinch: p => {
                            console.log(p.event.scale, $$.a('.scale'), $$.a('.scale') * p.event.scale);
                            handle_pinch($$.a('.scale') * p.event.scale, '._scale');
                            return false;
                        },
                        wheelTouch: p => {
                            if (p.event.end.touches.length <= 1)
                                return false;
                            handle_move(p.event._deltaX, p.event._deltaY);
                            return true;
                        },
                        wheel: p => {
                            if (!p.event.ctrlKey) {
                                handle_move(p.event._deltaX, p.event._deltaY);
                            }
                            else {
                                handle_pinch($$.a('.scale') - p.event.deltaY * 0.02);
                            }
                            return true;
                        },
                    },
                    dom: {
                        innerHTML: () => `
          <svg id="scheme" xmlns="http://www.w3.org/2000/svg" xmlns:bw="http://www.example.com/whatever/" viewBox="-1070 -980 1940 1960">
            <style not-minify>
            .station .bg {
              opacity: .8;
              stroke-width: 5;
              stroke: white;
            }
            .station text {
              font-family: Helvetica, Arial, sans-serif;
              font-size: 21px;
            }
            .station circle {
              fill: white;
              stroke-width: 3;
              stroke: #000000;
              r: 10;
            }
            .station.disabled text, .station.disabled circle { fill: grey }
            .station.selected circle, .station.will-be-selected text { fill: red }
            .station:not(.selected).will-be-selected circle { fill: rgb(255,200,200) }
            .station.will-be-deselected text, .station.selected.will-be-deselected circle { fill: blue }
            .station.constructed text { font-weight: normal }
            .station.constructed circle {
              transform: rotate(-23deg);
              stroke-dasharray: 10,5;
            }
            path.constructed { stroke-dasharray:10,5 }
            #transfer path {
              stroke-width: 6;
              fill: none;
            }
            #transfer path.cold {
              stroke-dasharray: 1,6;
              stroke-width: 4;
              stroke-linecap: round;
            }
            #transfer path.constructed {
              stroke: grey;
              stroke-dasharray: 3,3;
              stroke-width: 3;
            }
            .branch path {
              stroke: #000000;
              stroke-width: 7;
              fill: none;
            }
            .branch.red circle,.branch.red path { stroke: #cf2028 }
            .line-numbers .red circle { fill: #cf2028 }

            .branch.green circle,.branch.green path { stroke: #13703a }
            .line-numbers .green circle { fill: #13703a }

            .branch.dark-blue circle,.branch.dark-blue path { stroke: #283981 }
            .line-numbers .dark-blue circle { fill: #283981 }

            .branch.blue circle,.branch.blue path { stroke: #169cd4 }
            .line-numbers .blue circle { fill: #169cd4 }

            .branch.brown circle,.branch.brown path { stroke: #8a3127 }
            .line-numbers .brown circle { fill: #8a3127 }

            .branch.orange circle,.branch.orange path { stroke: #f78e38 }
            .line-numbers .orange circle { fill: #f78e38 }

            .branch.purple circle,.branch.purple path { stroke: #a35d94 }
            .line-numbers .purple circle { fill: #a35d94 }

            .branch.yellow circle,.branch.yellow path { stroke: #fde34f }
            .line-numbers .yellow circle { fill: #fde34f }

            .branch.grey circle,.branch.grey path { stroke: #abaeba }
            .line-numbers .grey circle { fill: #abaeba }

            .branch.lime circle,.branch.lime path { stroke: #aad16e }
            .line-numbers .lime circle { fill: #aad16e }

            .branch.turquoise circle,.branch.turquoise path { stroke: #1cb2a7 }
            .line-numbers .turquoise circle { fill: #1cb2a7 }

            .branch.light-blue circle,.branch.light-blue path { stroke: #b8deeb }
            .line-numbers .light-blue circle { fill: #b8deeb }

            .branch.circle-2 circle { stroke: #e36d49 }
            .line-numbers .circle-2 circle { fill: #e36d49 }
            .branch.circle-2 path.corner { stroke: #e36d49; stroke-width: 3 }
            .branch.circle-2 path { stroke: #ffffff }

            .branch.kojuhovskaya circle, .branch.kojuhovskaya path { stroke: #f7bed1 }
            .line-numbers .kojuhovskaya text { fill: #f7bed1 }

            .line-numbers circle { r: 14 }
            .line-numbers text {
              font-size: 17px;
              font-weight: 600;
              fill: white;
            }
            .line-numbers .buttons text {
              fill: black;
              font-size: 1.5em;
              font-weight: 400;
            }
            .line-numbers .buttons rect {
              fill: transparent;
              stroke: rgba(0,0,0,0.8);
              stroke-width: 1.5;
              rx: 10;
              ry: 10;
            }
            .line-numbers .buttons g:hover rect {
              fill: #e0e0e0;
              cursor: pointer;
            }
          </style>
            <g transform="translate(-75 -80)">
              <g class="lines">
                <g class="branch branch-part circle-2" bw:branch-part="circle-2-all">
                  <path d="M-570,-75a620,620 0 1,0 1240,0a620,620 0 1,0 -1240,0"></path>
                  <path class="corner" d="M-566,-75a616,616 0 1,0 1232,0a616,616 0 1,0 -1232,0"></path>
                  <path class="corner" d="M-574,-75a624,624 0 1,0 1248,0a624,624 0 1,0 -1248,0"></path>
                </g>
                <g class="branch branch-part light-blue" bw:branch-part="light-blue-all">
                  <path d="m -228,892 82,0 56,-1 c 29,0 35,24 35,24 l 0,61 c 0,0 -2,22 -25,22 l -350,0"></path>
                </g>
                <g class="branch turquoise">
                  <g class="branch-part" bw:branch-part="turquoise-north-west">
                    <path class="constructed" d="m -931,-66 64,0 c 22,0 27,-1 42,-16 l 160,-160 c 19,-19 27,-21 54,-21 l 94,0"></path>
                    <path d="m -516,-263 c 30,0 29,0 54,-14 l 165,-95"></path>
                    <path d="M -295,-373 -140,-463 c 21,-12 21,-11 44,-11 l 35,0"></path>
                    <path d="m -516,-263 -21,0 c -11,2 -24,6 -32,13 -4,4 -9,24 -9,24 -11,49 -17,99 -17,149 0,7 0,15 0,22 l 0,13 c -2,17 12,33 28,33 l 78,0"></path>
                  </g>
                  <g class="branch-part" bw:branch-part="turquoise-all">
                    <path class="constructed" d="M -42,699 H 124"></path>
                    <path d="M 82,699 H 215"></path>
                  </g>
                </g>
                <g class="branch lime">
                  <g class="branch-part" bw:branch-part="lime-north">
                    <path d="m -80,-840 0,79 c 0,18 4,37 17,49 l 56,49"></path>
                    <path d="m -7,-663 c 24,19 21,31 21,60 v 85 84"></path>
                  </g>
                  <path class="branch-part" bw:branch-part="lime-center" d="M 14,-433 V -322 c 2,37 24,55 54,64 h 130 c 18,2 33,10 44,21 l 130,133 37,37"></path>
                  <path class="branch-part" bw:branch-part="lime-south" d="M 409,-66 472,-4 c 25,24 25,40 26,62 l 2,128 c 0,98 -112,115 -112,192 v 498"></path>
                </g>
                <g class="branch grey">
                  <path class="branch-part" bw:branch-part="grey-north" d="m -33,-840 v 357 57"></path>
                  <path class="branch-part" bw:branch-part="grey-center" d="M -33,-425 V -340 c 1,18 6,23 19,35 12,14 13,20 13,35 v 67 c -1,12 -6,22 -14,29 l -43,40 -67,65 c -7,7 -13,15 -16,24 v 90 c 0,19 3,38 24,52 l 67,68 c 36,30 22,43 26,62 v 49"></path>
                  <path class="branch-part" bw:branch-part="grey-south" d="M -24,276 V 964"></path>
                </g>
                <g class="branch yellow branch-part" bw:branch-part="yellow-west">
                  <path d="m -454,-9 -115,115 c -18,18 -20,24 -20,48 l 0,471"></path>
                  <!-- <path d="m -589,341 0,284"/> -->
                </g>
                <g class="branch yellow branch-part" bw:branch-part="yellow-east">
                  <path d="M 763,-242 372,122 c 0,0 -11,14 -32,14 l -161,1"></path>
                </g>
                <g class="branch kojuhovskaya">
                  <path class="constructed branch-part" bw:branch-part="kojuhovskaya-top" d="m 685,40 80,66 c 21,16 24,20 24,45 v 194 c 0,23 0,23 11,43 l 24.754,44.7169"></path>
                  <path class="branch-part" bw:branch-part="kojuhovskaya-bottom" d="M 823,430 831,444 c 13,25 14,25 14,49 v 167"></path>
                </g>
                <g class="branch purple">
                  <path class="branch-part" bw:branch-part="purple-north" d="m -529,-725 v 371 c 0,22 5,38 48,82 l 58,60 c 46,48 42,46 118,46 h 6"></path>
                  <path class="branch-part" bw:branch-part="purple-center" d="M -298,-166 H 115 151 c 18,0 36,1 59,25 l 42,42 138,137"></path>
                  <path class="branch-part" bw:branch-part="purple-south" d="M 390 38 C 461 110 505 152 568 215 582 229 600 252 642 252 c 40 0 155 0 190 0 16 0 27 9 27 25 l 5e-5 68 c 5e-5 14 5e-5 20 -14 35 L 709 512"></path>
                </g>
                <g class="branch orange">
                  <path class="branch-part" bw:branch-part="orange-north" d="m 296,-835 v 296 c 0,57 -73,81 -122,98 0,0 -13,5 -27,19"></path>
                  <path class="branch-part" bw:branch-part="orange-center" d="M 146,-421 C 130,-406 113,-381 113,-344 c 0,75 23,81 67,118 44,37 42,48 42,126 v 73 c 1,108 -27,104 -63,146 -41,47 -74,78 -111,78 h -161 c -16,0 -28,10 -42,23"></path>
                  <path class="branch-part" bw:branch-part="orange-south" d="M -155,220 C -160,226 -166,232 -172,238 l -46,45 c -17,17 -23,36 -24,58 v 476 c -3,26 8,37 19,48"></path>
                </g>
                <g class="branch blue branch-part" bw:branch-part="blue-all">
                  <path d="m -106,44 -70,-70 c -9,-12 -32,-12 -56,-12 l -84,0 c -38,0 -41,3 -69,32 l -137,133 c -24,24 -33,25 -69,25 l -116,0 c 0,0 -15,0 -24,-9 L -915,-40"></path>
                  <path d="m -308,-38 -222,0"></path>
                </g>
                <g class="branch dark-blue">
                  <path class="branch-part" bw:branch-part="dark-blue-west" d="m -300,14 -28,0 c -24,0 -33,-3 -51,14 l -133,125 c -17,14 -24,21 -42,21 l -159,0 c 0,0 -19,2 -36,-14 L -937,-28 c 0,0 -11,-10 -11,-25 l 0,-325"></path>
                  <path class="branch-part" bw:branch-part="dark-blue-center" d="M -299,14 H -34 -10 C 1,12 11,-3 21,-4 38,-4 53,-4 72,-4 h 147 c 27,0 21,2 39,-15 l 142,-140"></path>
                  <path class="branch-part" bw:branch-part="dark-blue-east" d="M 400,-159 661,-418 c 13,-13 13,-17 13,-45 v -10 -93"></path>
                </g>
                <g class="branch green">
                  <path class="branch-part" bw:branch-part="green-north" d="m -348,-790 0,344 c 0,33 -1,52 17,71 l 25,26 52,52 12,12"></path>
                  <path class="branch-part" bw:branch-part="green-center" d="M -241,-284 -92,-136 -8,-52 c 20,26 44,20 68,19 27,0 53,3 66,22 l 53,55 c 20,20 12,39 15,59 v 151"></path>
                  <path class="branch-part" bw:branch-part="green-south" d="M 194,254 V 857 c 0,29 13,37 37,38 l 178,1 h 146"></path>
                </g>
                <g class="branch red">
                  <path class="branch-part" bw:branch-part="red-north" d="m 494,-544 v 7 c 0,22 0,22 -14,37 l -154,162 -14,15"></path>
                  <path class="branch-part" bw:branch-part="red-center" d="M 311,-322 -86,76 l -51,48 c -10,9 -18,10 -28,11 h -77"></path>
                  <path class="branch-part" bw:branch-part="red-south" d="M -242,135 H -247 -276 c -19,0 -32,17 -32,17 l -139,172 c 0,0 -10,11 -10,47 v 416"></path>
                </g>
                <g class="branch brown branch-part" bw:branch-part="brown-all">
                  <path d="M-310,-75a360,360 0 1,0 720,0a360,360 0 1,0 -720,0"></path>
                </g>
              </g>

              <g class="line-numbers">
                <g class="red branch-part" bw:branch-part="red-all">
                  <g transform="translate(524 -542)">
                    <circle></circle><text x="-4.5" y="5.5">1</text>
                  </g>
                  <g transform="translate(-457 815)">
                    <circle></circle><text x="-4.5" y="5.5">1</text>
                  </g>
                </g>
                <g class="green branch-part" bw:branch-part="green-all">
                  <g transform="translate(-348 -820)">
                    <circle></circle><text x="-4.5" y="5.5">2</text>
                  </g>
                  <g transform="translate(586 896)">
                    <circle></circle><text x="-4.5" y="5.5">2</text>
                  </g>
                </g>
                <g class="dark-blue branch-part" bw:branch-part="dark-blue-all">
                  <g transform="translate(-948 -411)">
                    <circle></circle><text x="-4.5" y="5.5">3</text>
                  </g>
                  <g transform="translate(674 -592)">
                    <circle></circle><text x="-4.5" y="5.5">3</text>
                  </g>
                </g>
                <g class="blue branch-part" bw:branch-part="blue-all">
                  <g transform="translate(-884 -41)">
                    <circle></circle><text x="-4.5" y="5.5">4</text>
                  </g>
                </g>
                <g class="brown branch-part" bw:branch-part="brown-all">
                  <g transform="translate(-150 -345)">
                    <circle></circle><text x="-4.5" y="5.5">5</text>
                  </g>
                  <g transform="translate(275 175)">
                    <circle></circle><text x="-4.5" y="5.5">5</text>
                  </g>
                </g>
                <g class="orange branch-part" bw:branch-part="orange-all">
                  <g transform="translate(296 -865)">
                    <circle></circle><text x="-4.5" y="5.5">6</text>
                  </g>
                  <g transform="translate(-253 863)">
                    <circle></circle><text x="-4.5" y="5.5">6</text>
                  </g>
                </g>
                <g class="purple branch-part" bw:branch-part="purple-all">
                  <g transform="translate(-529 -755)">
                    <circle></circle><text x="-4.5" y="5.5">7</text>
                  </g>
                  <g transform="translate(688 534)">
                    <circle></circle><text x="-4.5" y="5.5">7</text>
                  </g>
                </g>
                <g class="yellow branch-part" bw:branch-part="yellow-east">
                  <g transform="translate(787.5 -266)">
                    <circle></circle><text style="fill:black" x="-4.5" y="5.5">8</text>
                  </g>
                </g>
                <g class="yellow branch-part" bw:branch-part="yellow-west">
                  <g transform="translate(-589 650)">
                    <circle></circle><text style="fill:black;letter-spacing:-1;" x="-10" y="5.5">8А</text>
                  </g>
                </g>
                <g class="grey branch-part" bw:branch-part="grey-all">
                  <g transform="translate(-33 -870)">
                    <circle></circle><text x="-4.5" y="5.5">9</text>
                  </g>
                  <g transform="translate(-24 990)">
                    <circle></circle><text x="-4.5" y="5.5">9</text>
                  </g>
                </g>
                <g class="lime branch-part" bw:branch-part="lime-all">
                  <g transform="translate(-80 -870)">
                    <circle></circle><text x="-10" y="5.5">10</text>
                  </g>
                  <g transform="translate(358 874)">
                    <circle></circle><text x="-10" y="5.5">10</text>
                  </g>
                </g>
                <g class="turquoise branch-part" bw:branch-part="turquoise-all">
                  <g transform="translate(-72 699)">
                    <circle></circle><text style="letter-spacing: -2.5;" x="-14" y="5.5">11А</text>
                  </g>
                </g>
                <g class="light-blue branch-part" bw:branch-part="light-blue-all">
                  <g transform="translate(-455 997)">
                    <circle></circle><text x="-10" y="5.5">12</text>
                  </g>
                </g>
                <g class="circle-2 branch-part" bw:branch-part="circle-2-all">
                  <g transform="translate(-375 -570)">
                    <circle></circle><text x="-10" y="5.5">14</text>
                  </g>
                  <g transform="translate(500 400)">
                    <circle></circle><text x="-10" y="5.5">14</text>
                  </g>
                </g>
                <g class="kojuhovskaya branch-part" bw:branch-part="kojuhovskaya-all">
                  <g transform="translate(845 690)">
                    <text text-anchor="middle" y="0" style="font-style: italic;">КОЖ</text>
                  </g>
                </g>
                <g class="buttons" transform="translate(580-880)">
                  <g class="branch-part" bw:branch-part="inside-brown">
                    <rect width="300" height="40"></rect>
                    <text text-anchor="middle" x="150" y="28">Все станции внутри кольца</text>
                  </g>
                  <g class="branch-part" bw:branch-part="brown-all" transform="translate(0 50)">
                    <rect width="300" height="40"></rect>
                    <text text-anchor="middle" x="150" y="28">Все станции на кольцевой</text>
                  </g>
                  <!--ВСЕ СТАНЦИИ-->
                  <g class="branch-part" bw:branch-part="all" transform="translate(0 100)">
                    <rect width="300" height="40"></rect>
                    <text text-anchor="middle" x="150" y="28">Все станции</text>
                  </g>
                </g>
              </g>

              <g id="transfer">
                <linearGradient id="orangeToBrown" gradientUnits="userSpaceOnUse" x1="174" y1="-441" x2="174" y2="-413">
                  <stop offset=".4" stop-color="#f78e38"></stop>
                  <stop offset=".6" stop-color="#8a3127"></stop>
                </linearGradient>
                <path style="stroke:url(#orangeToBrown)" d="M174-441L174-413"></path>
                <linearGradient id="brownToOrange" gradientUnits="userSpaceOnUse" x1="-173" y1="239" x2="-173" y2="207">
                  <stop offset=".4" stop-color="#f78e38"></stop>
                  <stop offset=".6" stop-color="#8a3127"></stop>
                </linearGradient>
                <path style="stroke:url(#brownToOrange)" d="M-173 207L-173 239"></path>
                <linearGradient id="darkblueToGrey" gradientUnits="userSpaceOnUse" x1="-142" y1="46" x2="-88" y2="14">
                  <stop offset=".4" stop-color="#abaeba"></stop>
                  <stop offset=".6" stop-color="#283981"></stop>
                </linearGradient>
                <path style="stroke:url(#darkblueToGrey)" d="M-142 46 Q-140 0 -88 14"></path>
                <linearGradient id="greyToRed" gradientUnits="userSpaceOnUse" x1="-86" y1="77" x2="-142" y2="46">
                  <stop offset=".4" stop-color="#cf2028"></stop>
                  <stop offset=".6" stop-color="#abaeba"></stop>
                </linearGradient>
                <path style="stroke:url(#greyToRed)" d="M-86 77Q-132 91 -142 46"></path>
                <linearGradient id="darkblueToRed" gradientUnits="userSpaceOnUse" x1="-86" y1="77" x2="-88" y2="14">
                  <stop offset=".4" stop-color="#cf2028"></stop>
                  <stop offset=".6" stop-color="#283981"></stop>
                </linearGradient>
                <path style="stroke:url(#darkblueToRed)" d="M-86 77Q-58 44 -88 14"></path>
                <linearGradient id="blueToDarkblue" gradientUnits="userSpaceOnUse" x1="-88" y1="14" x2="-106" y2="44">
                  <stop offset=".4" stop-color="#283981"></stop>
                  <stop offset=".6" stop-color="#169cd4"></stop>
                </linearGradient>
                <path style="stroke:url(#blueToDarkblue)" d="M-88 14L-106 44"></path>
                <linearGradient id="blueToRed" gradientUnits="userSpaceOnUse" x1="-86" y1="77" x2="-106" y2="44">
                  <stop offset=".4" stop-color="#cf2028"></stop>
                  <stop offset=".6" stop-color="#169cd4"></stop>
                </linearGradient>
                <path style="stroke:url(#blueToRed)" d="M-86 77L-106 44"></path>
                <linearGradient id="redToGreenToDarkblue" gradientUnits="userSpaceOnUse" x1="48" y1="-59" x2="72" y2="-4">
                  <stop offset=".2" stop-color="#cf2028"></stop>
                  <stop offset=".3" stop-color="#13703a"></stop>
                  <stop offset=".65" stop-color="#13703a"></stop>
                  <stop offset=".75" stop-color="#283981"></stop>
                </linearGradient>
                <path style="stroke:url(#redToGreenToDarkblue)" d="M48-59 L72-4"></path>
                <linearGradient id="greyToBrown" gradientUnits="userSpaceOnUse" x1="-33" y1="-455" x2="-53" y2="-420">
                  <stop offset=".4" stop-color="#abaeba"></stop>
                  <stop offset=".6" stop-color="#8a3127"></stop>
                </linearGradient>
                <path style="stroke:url(#greyToBrown)" d="M-33-455L-53-420"></path>
                <linearGradient id="greenToBrown" gradientUnits="userSpaceOnUse" x1="-254" y1="-297" x2="-254" y2="-267">
                  <stop offset=".4" stop-color="#13703a"></stop>
                  <stop offset=".6" stop-color="#8a3127"></stop>
                </linearGradient>
                <path style="stroke:url(#greenToBrown)" d="M-254-297L-254-267"></path>
                <linearGradient id="redToBrown" gradientUnits="userSpaceOnUse" x1="326" y1="-337" x2="326" y2="-307">
                  <stop offset=".4" stop-color="#cf2028"></stop>
                  <stop offset=".6" stop-color="#8a3127"></stop>
                </linearGradient>
                <path style="stroke:url(#redToBrown)" d="M326-337L326-307"></path>
                <linearGradient id="brownToGreen" gradientUnits="userSpaceOnUse" x1="194" y1="276" x2="214" y2="246">
                  <stop offset=".4" stop-color="#13703a"></stop>
                  <stop offset=".6" stop-color="#8a3127"></stop>
                </linearGradient>
                <path style="stroke:url(#brownToGreen)" d="M194 276L214 246"></path>
                <linearGradient id="brownToGrey" gradientUnits="userSpaceOnUse" x1="-50" y1="270" x2="-24" y2="300">
                  <stop offset=".4" stop-color="#8a3127"></stop>
                  <stop offset=".6" stop-color="#abaeba"></stop>
                </linearGradient>
                <path style="stroke:url(#brownToGrey)" d="M-50 270L-24 300"></path>
                <linearGradient id="brownToRed" gradientUnits="userSpaceOnUse" x1="-272" y1="137" x2="-257" y2="114">
                  <stop offset=".4" stop-color="#cf2028"></stop>
                  <stop offset=".6" stop-color="#8a3127"></stop>
                </linearGradient>
                <path style="stroke:url(#brownToRed)" d="M-272 137L-257 114"></path>
                <linearGradient id="brownToPurple" gradientUnits="userSpaceOnUse" x1="-279" y1="-166" x2="-304" y2="-142">
                  <stop offset=".4" stop-color="#a35d94"></stop>
                  <stop offset=".6" stop-color="#8a3127"></stop>
                </linearGradient>
                <path style="stroke:url(#brownToPurple)" d="M-279-166L-304-142"></path>
                <linearGradient id="purpleToRed" gradientUnits="userSpaceOnUse" x1="128" y1="-138" x2="115" y2="-166">
                  <stop offset=".4" stop-color="#cf2028"></stop>
                  <stop offset=".6" stop-color="#a35d94"></stop>
                </linearGradient>
                <path style="stroke:url(#purpleToRed)" d="M128-138L115-166"></path>
                <linearGradient id="greyToLime" gradientUnits="userSpaceOnUse" x1="-33" y1="-655" x2="0" y2="-655">
                  <stop offset=".4" stop-color="#abaeba"></stop>
                  <stop offset=".6" stop-color="#aad16e"></stop>
                </linearGradient>
                <path style="stroke:url(#greyToLime)" d="M-33-655L0-655"></path>
                <linearGradient id="blueToYellow" gradientUnits="userSpaceOnUse" x1="-475" y1="-38" x2="-455" y2="-9">
                  <stop offset=".4" stop-color="#169cd4"></stop>
                  <stop offset=".6" stop-color="#fde34f"></stop>
                </linearGradient>
                <path style="stroke:url(#blueToYellow)" d="M-475-38L-455-9"></path>
                <linearGradient id="darkblueToYellow" gradientUnits="userSpaceOnUse" x1="-559" y1="175" x2="-589" y2="204">
                  <stop offset=".4" stop-color="#283981"></stop>
                  <stop offset=".6" stop-color="#fde34f"></stop>
                </linearGradient>
                <path style="stroke:url(#darkblueToYellow)" d="M-559 175L-589 204"></path>
                <linearGradient id="darkblueToBlue" gradientUnits="userSpaceOnUse" x1="-948" y1="-41" x2="-914" y2="-41">
                  <stop offset=".4" stop-color="#283981"></stop>
                  <stop offset=".6" stop-color="#169cd4"></stop>
                </linearGradient>
                <path style="stroke:url(#darkblueToBlue)" d="M-948-41L-914-41"></path>
                <linearGradient id="limeToYellow" gradientUnits="userSpaceOnUse" x1="506" y1="-4" x2="472" y2="-4">
                  <stop offset=".4" stop-color="#fde34f"></stop>
                  <stop offset=".6" stop-color="#aad16e"></stop>
                </linearGradient>
                <path style="stroke:url(#limeToYellow)" d="M506-4L472-4"></path>
                <linearGradient id="orangeToPurple" gradientUnits="userSpaceOnUse" x1="222" y1="-99" x2="252" y2="-99">
                  <stop offset=".4" stop-color="#f78e38"></stop>
                  <stop offset=".6" stop-color="#a35d94"></stop>
                </linearGradient>
                <path style="stroke:url(#orangeToPurple)" d="M222-99L252-99"></path>
                <linearGradient id="limeToPurple" gradientUnits="userSpaceOnUse" x1="529" y1="176" x2="500" y2="186">
                  <stop offset=".4" stop-color="#a35d94"></stop>
                  <stop offset=".6" stop-color="#aad16e"></stop>
                </linearGradient>
                <path style="stroke:url(#limeToPurple)" d="M529 176L500 186"></path>
                <linearGradient id="limeToGreen" gradientUnits="userSpaceOnUse" x1="388" y1="874" x2="410" y2="896">
                  <stop offset=".4" stop-color="#aad16e"></stop>
                  <stop offset=".6" stop-color="#13703a"></stop>
                </linearGradient>
                <path style="stroke:url(#limeToGreen)" d="M388 874L410 896"></path>
                <linearGradient id="turquoiseToGrey" gradientUnits="userSpaceOnUse" x1="-24" y1="720" x2="-42" y2="699">
                  <stop offset=".4" stop-color="#abaeba"></stop>
                  <stop offset=".6" stop-color="#1cb2a7"></stop>
                </linearGradient>
                <path style="stroke:url(#turquoiseToGrey)" d="M-24 720-42 699"></path>
                <linearGradient id="greyToTurquoise" gradientUnits="userSpaceOnUse" x1="-33" y1="-500" x2="-58" y2="-474">
                  <stop offset=".4" stop-color="#abaeba"></stop>
                  <stop offset=".6" stop-color="#1cb2a7"></stop>
                </linearGradient>
                <path style="stroke:url(#greyToTurquoise)" d="M-33 -500-58 -474"></path>
                <linearGradient id="greenToTurquoise" gradientUnits="userSpaceOnUse" x1="194" y1="676" x2="215" y2="699">
                  <stop offset=".4" stop-color="#13703a"></stop>
                  <stop offset=".6" stop-color="#1cb2a7"></stop>
                </linearGradient>
                <path style="stroke:url(#greenToTurquoise)" d="M194 676L215 699"></path>
                <linearGradient id="turquoiseToGreen" gradientUnits="userSpaceOnUse" x1="-296" y1="-373" x2="-296" y2="-338">
                  <stop offset=".4" stop-color="#1cb2a7"></stop>
                  <stop offset=".6" stop-color="#13703a"></stop>
                </linearGradient>
                <path style="stroke:url(#turquoiseToGreen)" d="M-296 -373L-296 -338"></path>
                <linearGradient id="orangeTolightBlue" gradientUnits="userSpaceOnUse" x1="-223" y1="863" x2="-223" y2="891">
                  <stop offset=".4" stop-color="#f78e38"></stop>
                  <stop offset=".6" stop-color="#b8deeb"></stop>
                </linearGradient>
                <path style="stroke:url(#orangeTolightBlue)" d="M-223 863L-223 891"></path>
                <linearGradient id="lightBlueTGrey" gradientUnits="userSpaceOnUse" x1="-24" y1="960" x2="-55" y2="960">
                  <stop offset=".4" stop-color="#abaeba"></stop>
                  <stop offset=".6" stop-color="#b8deeb"></stop>
                </linearGradient>
                <path style="stroke:url(#lightBlueTGrey)" d="M-24 960L-55 960"></path>
                <linearGradient id="limeToGrey" gradientUnits="userSpaceOnUse" x1="-14" y1="-310" x2="14" y2="-322">
                  <stop offset=".4" stop-color="#abaeba"></stop>
                  <stop offset=".6" stop-color="#aad16e"></stop>
                </linearGradient>
                <path style="stroke:url(#limeToGrey)" d="M-14-310L14-322"></path>
                <linearGradient id="orangeToRed" gradientUnits="userSpaceOnUse" x1="216" y1="-226" x2="180" y2="-225">
                  <stop offset=".4" stop-color="#cf2028"></stop>
                  <stop offset=".6" stop-color="#f78e38"></stop>
                </linearGradient>
                <path style="stroke:url(#orangeToRed)" d="M216-226L180-225"></path>
                <linearGradient id="orangeToLime" gradientUnits="userSpaceOnUse" x1="180" y1="-225" x2="198" y2="-258">
                  <stop offset=".4" stop-color="#f78e38"></stop>
                  <stop offset=".6" stop-color="#aad16e"></stop>
                </linearGradient>
                <path style="stroke:url(#orangeToLime)" d="M180-225L198-258"></path>
                <linearGradient id="limeToRed" gradientUnits="userSpaceOnUse" x1="198" y1="-258" x2="216" y2="-226">
                  <stop offset=".4" stop-color="#aad16e"></stop>
                  <stop offset=".6" stop-color="#cf2028"></stop>
                </linearGradient>
                <path style="stroke:url(#limeToRed)" d="M198-258L216-226"></path>
                <linearGradient id="greenToPurple" gradientUnits="userSpaceOnUse" x1="-92" y1="-136" x2="-75" y2="-166">
                  <stop offset=".4" stop-color="#13703a"></stop>
                  <stop offset=".6" stop-color="#a35d94"></stop>
                </linearGradient>
                <path style="stroke:url(#greenToPurple)" d="M-92-136L-75-166"></path>
                <linearGradient id="purpleToGrey" gradientUnits="userSpaceOnUse" x1="-75" y1="-166" x2="-58" y2="-136">
                  <stop offset=".4" stop-color="#a35d94"></stop>
                  <stop offset=".6" stop-color="#abaeba"></stop>
                </linearGradient>
                <path style="stroke:url(#purpleToGrey)" d="M-75-166 L-58-136"></path>
                <linearGradient id="greyToGreen" gradientUnits="userSpaceOnUse" x1="-58" y1="-136" x2="-92" y2="-136">
                  <stop offset=".4" stop-color="#abaeba"></stop>
                  <stop offset=".6" stop-color="#13703a"></stop>
                </linearGradient>
                <path style="stroke:url(#greyToGreen)" d="M-58-136L-92-136"></path>
                <linearGradient id="darkblueToBrown" gradientUnits="userSpaceOnUse" x1="382" y1="-138" x2="408" y2="-116">
                  <stop offset=".4" stop-color="#283981"></stop>
                  <stop offset=".6" stop-color="#8a3127"></stop>
                </linearGradient>
                <path style="stroke:url(#darkblueToBrown)" d="M382-138L408-116"></path>
                <linearGradient id="brownToLime" gradientUnits="userSpaceOnUse" x1="408" y1="-116" x2="372" y2="-104">
                  <stop offset=".4" stop-color="#8a3127"></stop>
                  <stop offset=".6" stop-color="#aad16e"></stop>
                </linearGradient>
                <path style="stroke:url(#brownToLime)" d="M408-116L372-104"></path>
                <linearGradient id="limeToDarkblue" gradientUnits="userSpaceOnUse" x1="372" y1="-104" x2="378" y2="-138">
                  <stop offset=".4" stop-color="#aad16e"></stop>
                  <stop offset=".6" stop-color="#283981"></stop>
                </linearGradient>
                <path style="stroke:url(#limeToDarkblue)" d="M372-104L378-138"></path>
                <linearGradient id="brownToPurple2" gradientUnits="userSpaceOnUse" x1="380" y1="69" x2="400" y2="49">
                  <stop offset=".4" stop-color="#8a3127"></stop>
                  <stop offset=".6" stop-color="#a35d94"></stop>
                </linearGradient>
                <path style="stroke:url(#brownToPurple2)" d="M380 69L400 49"></path>
                <linearGradient id="purpleToYellow" gradientUnits="userSpaceOnUse" x1="400" y1="49" x2="413" y2="84">
                  <stop offset=".4" stop-color="#a35d94"></stop>
                  <stop offset=".6" stop-color="#fde34f"></stop>
                </linearGradient>
                <path style="stroke:url(#purpleToYellow)" d="M400 49L413 84"></path>
                <linearGradient id="yellowToBrown" gradientUnits="userSpaceOnUse" x1="413" y1="84" x2="380" y2="69">
                  <stop offset=".4" stop-color="#fde34f"></stop>
                  <stop offset=".6" stop-color="#8a3127"></stop>
                </linearGradient>
                <path style="stroke:url(#yellowToBrown)" d="M413 84L380 69"></path>
                <linearGradient id="orangeToGreen" gradientUnits="userSpaceOnUse" x1="194" y1="103" x2="159" y2="119">
                  <stop offset=".4" stop-color="#13703a"></stop>
                  <stop offset=".6" stop-color="#f78e38"></stop>
                </linearGradient>
                <path style="stroke:url(#orangeToGreen)" d="M194 103L159 119"></path>
                <linearGradient id="orangeToYellow" gradientUnits="userSpaceOnUse" x1="159" y1="119" x2="179" y2="138">
                  <stop offset=".4" stop-color="#f78e38"></stop>
                  <stop offset=".6" stop-color="#fde34f"></stop>
                </linearGradient>
                <path style="stroke:url(#orangeToYellow)" d="M159 119L179 138"></path>
                <linearGradient id="yellowToGreen" gradientUnits="userSpaceOnUse" x1="179" y1="138" x2="194" y2="103">
                  <stop offset=".4" stop-color="#fde34f"></stop>
                  <stop offset=".6" stop-color="#13703a"></stop>
                </linearGradient>
                <path style="stroke:url(#yellowToGreen)" d="M179 138L194 103"></path>
                <linearGradient id="darkblueToBlue2" gradientUnits="userSpaceOnUse" x1="-346" y1="14" x2="-346" y2="-38">
                  <stop offset=".4" stop-color="#283981"></stop>
                  <stop offset=".6" stop-color="#169cd4"></stop>
                </linearGradient>
                <path style="stroke:url(#darkblueToBlue2)" d="M-346 14L-346-38"></path>
                <linearGradient id="blueToBrown" gradientUnits="userSpaceOnUse" x1="-346" y1="-38" x2="-305" y2="-12">
                  <stop offset=".4" stop-color="#169cd4"></stop>
                  <stop offset=".6" stop-color="#8a3127"></stop>
                </linearGradient>
                <path style="stroke:url(#blueToBrown)" d="M-346 -38L-305 -12"></path>
                <linearGradient id="brownToDarkblue" gradientUnits="userSpaceOnUse" x1="-305" y1="-12" x2="-346" y2="14">
                  <stop offset=".4" stop-color="#8a3127"></stop>
                  <stop offset=".6" stop-color="#283981"></stop>
                </linearGradient>
                <path style="stroke:url(#brownToDarkblue)" d="M-305-12L-346 14"></path>
                <linearGradient id="redToCircle2North2" gradientUnits="userSpaceOnUse" x1="468" y1="-487" x2="512" y2="-487">
                  <stop offset=".4" stop-color="#cf2028"></stop>
                  <stop offset=".6" stop-color="#e36d49"></stop>
                </linearGradient>
                <path style="stroke:url(#redToCircle2North2)" d="M468-487L512-487"></path>
                <linearGradient id="greyToCircle2North" gradientUnits="userSpaceOnUse" x1="-33" y1="-720" x2="-5" y2="-695">
                  <stop offset=".4" stop-color="#abaeba"></stop>
                  <stop offset=".6" stop-color="#e36d49"></stop>
                </linearGradient>
                <path style="stroke:url(#greyToCircle2North)" d="M-33 -720 L-5 -693"></path>
                <linearGradient id="orangeToCircle2South" gradientUnits="userSpaceOnUse" x1="-242" y1="451" x2="-225" y2="480">
                  <stop offset=".4" stop-color="#f78e38"></stop>
                  <stop offset=".6" stop-color="#e36d49"></stop>
                </linearGradient>
                <path style="stroke:url(#orangeToCircle2South)" d="M-242 451 L-225 480"></path>
                <linearGradient id="blueToCircle2West" gradientUnits="userSpaceOnUse" x1="-540" y1="115" x2="-510" y2="115">
                  <stop offset=".4" stop-color="#e36d49"></stop>
                  <stop offset=".6" stop-color="#169cd4"></stop>
                </linearGradient>
                <path style="stroke:url(#blueToCircle2West)" d="M-540 115L-510 115"></path>
                <linearGradient id="blueToCircle2West2" gradientUnits="userSpaceOnUse" x1="-531" y1="-38" x2="-569" y2="-38">
                  <stop offset=".4" stop-color="#169cd4"></stop>
                  <stop offset=".6" stop-color="#e36d49"></stop>
                </linearGradient>
                <path style="stroke:url(#blueToCircle2West2)" d="M-531-38L-569-38"></path>
                <linearGradient id="purpleToCircle2West2" gradientUnits="userSpaceOnUse" x1="-529" y1="-427" x2="-484" y2="-390">
                  <stop offset=".4" stop-color="#a35d94"></stop>
                  <stop offset=".6" stop-color="#e36d49"></stop>
                </linearGradient>
                <path class="cold" style="stroke:url(#purpleToCircle2West2)" d="M-529-427L-484-390"></path>
                <linearGradient id="circle2ToTurquoise" gradientUnits="userSpaceOnUse" x1="-534" y1="-286" x2="-514" y2="-263">
                  <stop offset=".4" stop-color="#e36d49"></stop>
                  <stop offset=".6" stop-color="#1cb2a7"></stop>
                </linearGradient>
                <path style="stroke:url(#circle2ToTurquoise)" d="M-534-286L-514-263"></path>
                <linearGradient id="circle2ToTurquoise2" gradientUnits="userSpaceOnUse" x1="-564" y1="-160" x2="-589" y2="-160">
                  <stop offset=".4" stop-color="#e36d49"></stop>
                  <stop offset=".6" stop-color="#1cb2a7"></stop>
                </linearGradient>
                <path style="stroke:url(#circle2ToTurquoise2)" d="M-564-160L-589-160"></path>
                <linearGradient id="blueToTurquoise" gradientUnits="userSpaceOnUse" x1="-475" y1="-38" x2="-495" y2="-9">
                  <stop offset=".4" stop-color="#169cd4"></stop>
                  <stop offset=".6" stop-color="#1cb2a7"></stop>
                </linearGradient>
                <path style="stroke:url(#blueToTurquoise)" d="M-475-38L-495-9"></path>
                <linearGradient id="turquoiseToYellow" gradientUnits="userSpaceOnUse" x1="-455" y1="-9" x2="-495" y2="-9">
                  <stop offset=".4" stop-color="#fde34f"></stop>
                  <stop offset=".6" stop-color="#1cb2a7"></stop>
                </linearGradient>
                <path style="stroke:url(#turquoiseToYellow)" d="M-455-9L-495-9"></path>
                <linearGradient id="purpleToTurquoise" gradientUnits="userSpaceOnUse" x1="-494" y1="-286" x2="-514" y2="-263">
                  <stop offset=".4" stop-color="#a35d94"></stop>
                  <stop offset=".6" stop-color="#1cb2a7"></stop>
                </linearGradient>
                <path style="stroke:url(#purpleToTurquoise)" d="M-494-286L-514-263"></path>
                <linearGradient id="purpleToCircle2West" gradientUnits="userSpaceOnUse" x1="-534" y1="-286" x2="-494" y2="-286">
                  <stop offset=".4" stop-color="#e36d49"></stop>
                  <stop offset=".6" stop-color="#a35d94"></stop>
                </linearGradient>
                <path style="stroke:url(#purpleToCircle2West)" d="M-534-286L-494-286"></path>
                <linearGradient id="orangeToCircle2North" gradientUnits="userSpaceOnUse" x1="296" y1="-680" x2="268" y2="-656">
                  <stop offset=".4" stop-color="#f78e38"></stop>
                  <stop offset=".6" stop-color="#e36d49"></stop>
                </linearGradient>
                <path class="cold" style="stroke:url(#orangeToCircle2North)" d="M296-680L268-656"></path>
                <linearGradient id="redToCircle2North" gradientUnits="userSpaceOnUse" x1="460" y1="-542" x2="494" y2="-542">
                  <stop offset=".4" stop-color="#e36d49"></stop>
                  <stop offset=".6" stop-color="#cf2028"></stop>
                </linearGradient>
                <path class="cold" style="stroke:url(#redToCircle2North)" d="M460-542L494-542"></path>
                <linearGradient id="darkblueToCircle2North" gradientUnits="userSpaceOnUse" x1="617" y1="-376" x2="617" y2="-323">
                  <stop offset=".4" stop-color="#283981"></stop>
                  <stop offset=".6" stop-color="#e36d49"></stop>
                </linearGradient>
                <path class="cold" style="stroke:url(#darkblueToCircle2North)" d="M617-376L617-323"></path>
                <linearGradient id="yellowToCircle2East" gradientUnits="userSpaceOnUse" x1="637" y1="-126" x2="667" y2="-126">
                  <stop offset=".4" stop-color="#fde34f"></stop>
                  <stop offset=".6" stop-color="#e36d49"></stop>
                </linearGradient>
                <path class="cold" style="stroke:url(#yellowToCircle2East)" d="M637-126L667-126"></path>
                <linearGradient id="limeToCircle2" gradientUnits="userSpaceOnUse" x1="388" y1="420" x2="368" y2="457">
                  <stop offset=".4" stop-color="#aad16e"></stop>
                  <stop offset=".6" stop-color="#e36d49"></stop>
                </linearGradient>
                <path class="cold" style="stroke:url(#limeToCircle2)" d="M388 420L368 457"></path>
                <linearGradient id="greenToCircle2South" gradientUnits="userSpaceOnUse" x1="194" y1="500" x2="214" y2="522">
                  <stop offset=".4" stop-color="#13703a"></stop>
                  <stop offset=".6" stop-color="#e36d49"></stop>
                </linearGradient>
                <path class="cold" style="stroke:url(#greenToCircle2South)" d="M194 500L214 522"></path>
                <linearGradient id="redToCircle2South" gradientUnits="userSpaceOnUse" x1="-422" y1="293" x2="-422" y2="326">
                  <stop offset=".4" stop-color="#cf2028"></stop>
                  <stop offset=".6" stop-color="#e36d49"></stop>
                </linearGradient>
                <path class="cold" style="stroke:url(#redToCircle2South)" d="M-422 293L-422 326"></path>
                <linearGradient id="greenToCircle2North" gradientUnits="userSpaceOnUse" x1="-324" y1="-570" x2="-348" y2="-516">
                  <stop offset=".4" stop-color="#e36d49"></stop>
                  <stop offset=".6" stop-color="#13703a"></stop>
                </linearGradient>
                <path class="cold" style="stroke:url(#greenToCircle2North)" d="M-324 -570 L-348 -516"></path>
                <linearGradient id="circle2ToKojuhovska" gradientUnits="userSpaceOnUse" x1="663" y1="16" x2="685" y2="40">
                  <stop offset=".4" stop-color="#e36d49"></stop>
                  <stop offset=".6" stop-color="#f7bed1"></stop>
                </linearGradient>
                <path style="stroke:url(#circle2ToKojuhovska)" d="M663,16 L685,40"></path>
                <linearGradient id="purpleToKojuhovska" gradientUnits="userSpaceOnUse" x1="789" y1="433" x2="824" y2="433">
                  <stop offset=".4" stop-color="#a35d94"></stop>
                  <stop offset=".6" stop-color="#f7bed1"></stop>
                </linearGradient>
                <path style="stroke:url(#purpleToKojuhovska)" d="M789 433 L824 433"></path>
                <linearGradient id="turquoiseToDarkblue" gradientUnits="userSpaceOnUse" x1="-931" y1="-66" x2="-948" y2="-41">
                  <stop offset=".4" stop-color="#1cb2a7"></stop>
                  <stop offset=".6" stop-color="#283981"></stop>
                </linearGradient>
                <path style="stroke:url(#turquoiseToDarkblue)" d="M-931-66L-948-41"></path>
                <linearGradient id="turquoiseToBlue" gradientUnits="userSpaceOnUse" x1="-931" y1="-66" x2="-914" y2="-41">
                  <stop offset=".4" stop-color="#1cb2a7"></stop>
                  <stop offset=".6" stop-color="#169cd4"></stop>
                </linearGradient>
                <path style="stroke:url(#turquoiseToBlue)" d="M-931-66L-914-41"></path>
                <path class="constructed" d="M-70 -720 L-70 -684 L-71 -684"></path>
              </g>

              <g id="stationHelper">

                <g class="branch red" bw:code="ru-msk-liniya-metro-sokolnicheskaya">
                  <g class="branch-part" bw:branch-part="red-all;red-north;all">
                    <g bw:code="ru-msk-metro-bulvar-rokossovskogo" class="station" transform="translate(494 -542)">
                      <circle r="10"></circle>
                      <g transform="translate(-12,-18)">
                        <text class="bg" text-anchor="middle">Бульвар Рокоссовского</text>
                        <text text-anchor="middle">Бульвар Рокоссовского</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-cherkizovskaya" class="station" transform="translate(468 -487)">
                      <circle r="10"></circle>
                      <text x="-15" y="7" text-anchor="end">Черкизовская</text>
                    </g>
                    <g bw:code="ru-msk-metro-preobrajenskaya-ploschad" class="station" transform="translate(437 -452)">
                      <circle r="10"></circle>
                      <g transform="translate(119, 7)">
                        <text class="bg" text-anchor="middle">Преображенская пл.</text>
                        <text text-anchor="middle">Преображенская пл.</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-sokolniki" class="station" transform="translate(403 -417)">
                      <circle></circle>
                      <text x="15" y="7">Сокольники</text>
                    </g>
                    <g bw:code="ru-msk-metro-krasnoselskaya" class="station" transform="translate(364 -377)">
                      <circle></circle>
                      <text x="15" y="7">Красносельская</text>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="red-all;red-north;red-center;all">
                    <g bw:code="ru-msk-metro-komsomolskaya" class="station" transform="translate(326 -337)">
                      <circle></circle>
                      <text x="12" y="22">Комсомольская</text>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="red-all;red-center;inside-brown;all">
                    <g bw:code="ru-msk-metro-krasnyie-vorota" class="station" transform="translate(264 -275)">
                      <circle></circle>
                      <text x="5" y="30"><tspan>Красные</tspan><tspan x="13" dy="18">ворота</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-chistyie-prudyi-sretenskiy-bulvar-turgenevskaya" class="station" transform="translate(216 -226)">
                      <circle></circle>
                      <g transform="translate(80 30)">
                        <text class="bg" text-anchor="middle">Чистые пруды</text>
                        <text text-anchor="middle">Чистые пруды</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-kuznetskiy-most-lubyanka" class="station" transform="translate(128 -138)">
                      <circle></circle>
                      <text x="-5" y="30">Лубянка</text>
                    </g>
                    <g bw:code="ru-msk-metro-ohotnyiy-ryad-teatralnaya-ploschad-revolyutsii" class="station" transform="translate(48 -59)">
                      <circle></circle>
                      <g>
                        <text text-anchor="end" x="5" y="-35"><tspan>Охотный</tspan><tspan x="5" dy="18">Ряд</tspan></text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-arbatskaya-aleksandrovskiy-sad-biblioteka-im-lenina-borovitskaya" class="station" transform="translate(-86 77)">
                      <circle></circle>
                      <text x="15" y="10"><tspan>Библиотека</tspan><tspan x="15" dy="18">им. Ленина</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-kropotkinskaya" class="station" transform="translate(-166 137)">
                      <circle></circle>
                      <g transform="translate(50 32)">
                        <text class="bg" text-anchor="middle">Кропоткинская</text>
                        <text text-anchor="middle">Кропоткинская</text>
                      </g>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="red-all;red-center;red-south;all">
                    <g bw:code="ru-msk-metro-park-kulturyi" class="station" transform="translate(-272 137)">
                      <circle></circle>
                      <text x="-5" y="-20" text-anchor="end">Парк культуры</text>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="red-all;red-south;all">
                    <g bw:code="ru-msk-metro-frunzenskaya" class="station" transform="translate(-372 232)">
                      <circle></circle>
                      <text y="30">Фрунзенская</text>
                    </g>
                    <g bw:code="ru-msk-metro-sportivnaya" class="station" transform="translate(-422 293)">
                      <circle></circle>
                      <text x="15" y="7">Спортивная</text>
                    </g>
                    <g bw:code="ru-msk-metro-vorobevyi-goryi" class="station" transform="translate(-457 385)">
                      <circle></circle>
                      <g transform="translate(95 7)">
                        <text class="bg" text-anchor="middle">Воробьевы горы</text>
                        <text text-anchor="middle">Воробьевы горы</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-universitet" class="station" transform="translate(-457 425)">
                      <circle></circle>
                      <g transform="translate(15 7)">
                        <text class="bg">Университет</text>
                        <text>Университет</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-prospekt-vernadskogo" class="station" transform="translate(-457 465)">
                      <circle></circle>
                      <text x="15"><tspan>Проспект</tspan><tspan x="15" dy="18">Вернадского</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-yugo-zapadnaya" class="station" transform="translate(-457 505)">
                      <circle></circle>
                      <text x="15" y="7">Юго-Западная</text>
                    </g>
                    <g bw:code="ru-msk-metro-troparevo" class="station" transform="translate(-457 545)">
                      <circle></circle>
                      <text x="15" y="7">Тропарёво</text>
                    </g>
                    <g bw:code="ru-msk-metro-rumyantsevo" class="station" transform="translate(-457 585)">
                      <circle></circle>
                      <text x="15" y="7">Румянцево</text>
                    </g>
                    <g bw:code="ru-msk-metro-salarevo" class="station" transform="translate(-457 625)">
                      <circle></circle>
                      <text x="15" y="7">Саларьево</text>
                    </g>
                    <g bw:code="ru-msk-metro-filatov-lug" class="station" transform="translate(-457 665)">
                      <circle></circle>
                      <text x="15" y="7">Филатов луг</text>
                    </g>
                    <g bw:code="ru-msk-metro-prokshino" class="station" transform="translate(-457 705)">
                      <circle></circle>
                      <text x="15" y="7">Прокшино</text>
                    </g>
                    <g bw:code="ru-msk-metro-olhovaya" class="station" transform="translate(-457 745)">
                      <circle></circle>
                      <text x="15" y="7">Ольховая</text>
                    </g>
                    <g bw:code="ru-msk-metro-kommunarka" class="station" transform="translate(-457 785)">
                      <circle></circle>
                      <text x="15" y="7">Коммунарка</text>
                    </g>
                  </g>
                </g>
                <g class="branch green" bw:code="ru-msk-liniya-metro-zamoskvoretskaya">
                  <g class="branch-part" bw:branch-part="zelenograd;all">
                    <g id="zelenograd" bw:code="ru-msk-zelenograd-g" class="station" transform="translate(-398 -810)">
                      <circle></circle>
                      <text text-anchor="end" x="-15" y="7">Зеленоград</text>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="green-all;green-north;all">
                    <g bw:code="ru-msk-metro-hovrino" class="station" transform="translate(-348 -790)">
                      <circle></circle>
                      <text x="15" y="7">Ховрино</text>
                    </g>
                    <g bw:code="ru-msk-metro-belomorskaya" class="station" transform="translate(-348 -750)">
                      <circle></circle>
                      <text x="15" y="7">Беломорская</text>
                    </g>
                    <g bw:code="ru-msk-metro-rechnoy-vokzal" class="station" transform="translate(-348 -710)">
                      <circle></circle>
                      <text x="15" y="0"><tspan>Речной</tspan><tspan x="15" dy="18">вокзал</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-vodnyiy-stadion" class="station" transform="translate(-348 -670)">
                      <circle></circle>
                      <text x="15" y="0"><tspan>Водный</tspan><tspan x="15" dy="18">стадион</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-voykovskaya" class="station" transform="translate(-348 -516)">
                      <circle></circle>
                      <text x="15" y="7">Войковская</text>
                    </g>
                    <g bw:code="ru-msk-metro-sokol" class="station" transform="translate(-348 -466)">
                      <circle></circle>
                      <text x="15" y="7">Сокол</text>
                    </g>
                    <g bw:code="ru-msk-metro-aeroport" class="station" transform="translate(-348 -416)">
                      <circle></circle>
                      <text x="15" y="7">Аэропорт</text>
                    </g>
                    <g bw:code="ru-msk-metro-dinamo" class="station" transform="translate(-296 -338)">
                      <circle></circle>
                      <g transform="translate(15,7)">
                        <text class="bg">Динамо</text>
                        <text>Динамо</text>
                      </g>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="green-all;green-north;green-center;all">
                    <g bw:code="ru-msk-metro-belorusskaya-belorusskaya" class="station" transform="translate(-254 -297)">
                      <circle></circle>
                      <g transform="translate(80,20)">
                        <text class="bg" text-anchor="middle">Белорусская</text>
                        <text text-anchor="middle">Белорусская</text>
                      </g>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="green-all;green-center;inside-brown;all">
                    <g bw:code="ru-msk-metro-mayakovskaya" class="station" transform="translate(-186 -229)">
                      <circle></circle>
                      <text x="15">Маяковская</text>
                    </g>
                    <g bw:code="ru-msk-metro-pushkinskaya-tverskaya-chehovskaya" class="station" transform="translate(-92 -136)">
                      <circle></circle>
                      <text text-anchor="end" x="-15" y="15">Тверская</text>
                    </g>
                    <g bw:code="ru-msk-metro-ohotnyiy-ryad-teatralnaya-ploschad-revolyutsii" class="station" transform="translate(60 -33)">
                      <circle></circle>
                      <text x="5" y="-10">Театральная</text>
                    </g>
                    <g bw:code="ru-msk-metro-novokuznetskaya-tretyakovskaya" class="station" transform="translate(194 103)">
                      <circle></circle>
                      <g transform="translate(92 7)">
                        <text class="bg" text-anchor="middle">Новокузнецкая</text>
                        <text text-anchor="middle">Новокузнецкая</text>
                      </g>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="green-all;green-center;green-south;all">
                    <g bw:code="ru-msk-metro-paveletskaya-paveletskaya" class="station" transform="translate(194 276)">
                      <circle></circle>
                      <text x="20" y="5">Павелецкая</text>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="green-all;green-south;all">
                    <g bw:code="ru-msk-metro-avtozavodskaya" class="station" transform="translate(194 500)">
                      <circle></circle>
                      <g transform="translate(90,0)">
                        <text class="bg" text-anchor="middle">Автозаводская</text>
                        <text text-anchor="middle">Автозаводская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-tehnopark" class="station" transform="translate(194 576)">
                      <circle></circle>
                      <text x="15" y="7">Технопарк</text>
                    </g>
                    <g bw:code="ru-msk-metro-kolomenskaya" class="station" transform="translate(194 626)">
                      <circle></circle>
                      <text x="15" y="7">Коломенская</text>
                    </g>
                    <g bw:code="ru-msk-metro-kashirskaya" class="station" transform="translate(194 676)">
                      <circle></circle>
                      <text x="15" y="7">Каширская</text>
                    </g>
                    <g bw:code="ru-msk-metro-kantemirovskaya" class="station" transform="translate(194 722)">
                      <circle></circle>
                      <text x="15" y="7">Кантемировская</text>
                    </g>
                    <g bw:code="ru-msk-metro-tsaritsyino" class="station" transform="translate(194 762)">
                      <circle></circle>
                      <text x="15" y="7">Царицино</text>
                    </g>
                    <g bw:code="ru-msk-metro-orehovo" class="station" transform="translate(194 802)">
                      <circle></circle>
                      <text x="15" y="7">Орехово</text>
                    </g>
                    <g bw:code="ru-msk-metro-domodedovskaya" class="station" transform="translate(194 842)">
                      <circle></circle>
                      <text x="15" y="7">Домодедовская</text>
                    </g>
                    <g bw:code="ru-msk-metro-zyablikovo-krasnogvardeyskaya" class="station" transform="translate(410 896)">
                      <circle></circle>
                      <text x="-95" y="34">Красногвардейская</text>
                    </g>
                    <g bw:code="ru-msk-metro-alma-atinskaya" class="station" transform="translate(556 896)">
                      <circle></circle>
                      <text x="-30" y="34">Алма-Атинская</text>
                    </g>
                  </g>
                </g>
                <g class="branch dark-blue" bw:code="ru-msk-liniya-metro-arbatsko-pokrovskaya">
                  <g class="branch-part" bw:branch-part="dark-blue-all;dark-blue-west;all">
                    <g bw:code="ru-msk-metro-pyatnitskoe-shosse" class="station" transform="translate(-948 -381)">
                      <circle></circle>
                      <text x="15" y="-5"><tspan>Пятницкое</tspan> <tspan dy="18" x="15">шоссе</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-mitino" class="station" transform="translate(-948 -341)">
                      <circle></circle>
                      <text x="15" y="7">Митино</text>
                    </g>
                    <g bw:code="ru-msk-metro-volokolamskaya" class="station" transform="translate(-948 -301)">
                      <circle></circle>
                      <text x="15" y="7">Волоколамская</text>
                    </g>
                    <g bw:code="ru-msk-metro-myakinino" class="station" transform="translate(-948 -261)">
                      <circle></circle>
                      <text x="15" y="7">Мякинино</text>
                    </g>
                    <g bw:code="ru-msk-metro-strogino" class="station" transform="translate(-948 -221)">
                      <circle></circle>
                      <text x="15" y="7">Строгино</text>
                    </g>
                    <g bw:code="ru-msk-metro-kryilatskoe" class="station" transform="translate(-948 -181)">
                      <circle></circle>
                      <text x="15" y="7">Крылатское</text>
                    </g>
                    <g bw:code="ru-msk-metro-molodejnaya" class="station" transform="translate(-948 -141)">
                      <circle></circle>
                      <text x="15" y="7">Молодёжная</text>
                    </g>
                    <g bw:code="ru-msk-metro-kuntsevskaya-kuntsevskaya" class="station" transform="translate(-948 -41)">
                      <circle></circle>
                      <g transform="translate(-30,30)">
                        <text class="bg">Кунцевская</text>
                        <text>Кунцевская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-slavyanskiy-bulvar" class="station" transform="translate(-664 175)">
                      <circle></circle>
                      <text y="28" text-anchor="end"><tspan x="25">Славянский</tspan><tspan x="25" dy="18">бульвар</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-park-pobedyi-park-pobedyi" class="station" transform="translate(-559 175)">
                      <circle></circle>
                      <g transform="translate(-10,35)">
                        <text class="bg">Парк Победы</text>
                        <text>Парк Победы</text>
                      </g>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="dark-blue-all;dark-blue-west;dark-blue-center;all">
                    <g bw:code="ru-msk-metro-kievskaya" class="station" transform="translate(-346 14)">
                      <circle></circle>
                      <g transform="translate(-35,-18)">
                        <text class="bg" text-anchor="middle">Киевская</text>
                        <text text-anchor="middle">Киевская</text>
                      </g>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="dark-blue-all;dark-blue-center;inside-brown;all">
                    <g bw:code="ru-msk-metro-smolenskaya" class="station" transform="translate(-224 14)">
                      <circle></circle>
                      <text x="-5" y="-15" text-anchor="middle">Смоленская</text>
                    </g>
                    <g bw:code="ru-msk-metro-arbatskaya-aleksandrovskiy-sad-biblioteka-im-lenina-borovitskaya" class="station" transform="translate(-88 14)">
                      <circle></circle>
                      <text x="-40" y="-20">Арбатская</text>
                    </g>
                    <g bw:code="ru-msk-metro-ohotnyiy-ryad-teatralnaya-ploschad-revolyutsii" class="station" transform="translate(72 -4)">
                      <circle></circle>
                      <g transform="translate(35 30)">
                        <text class="bg" text-anchor="middle">Пл. Революции</text>
                        <text text-anchor="middle">Пл. Революции</text>
                      </g>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="dark-blue-all;dark-blue-center;dark-blue-east;all">
                    <g bw:code="ru-msk-metro-kurskaya-kurskaya-chkalovskaya" class="station" transform="translate(378 -138)">
                      <circle></circle>
                      <g transform="translate(60 0)">
                        <text class="bg" text-anchor="middle">Курская</text>
                        <text text-anchor="middle">Курская</text>
                      </g>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="dark-blue-all;dark-blue-east;all">
                    <g bw:code="ru-msk-metro-baumanskaya" class="station" transform="translate(442 -202)">
                      <circle></circle>
                      <text x="10" y="25">Бауманская</text>
                    </g>
                    <g bw:code="ru-msk-metro-elektrozavodskaya" class="station" transform="translate(480 -239)">
                      <circle></circle>
                      <g transform="translate(100, 25)">
                        <text class="bg" text-anchor="middle">Электрозаводская</text>
                        <text text-anchor="middle">Электрозаводская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-semenovskaya" class="station" transform="translate(536 -296)">
                      <circle></circle>
                      <g transform="translate(83, 7)">
                        <text class="bg" text-anchor="middle">Семёновская</text>
                        <text text-anchor="middle">Семёновская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-partizanskaya" class="station" transform="translate(617 -376)">
                      <circle></circle>
                      <text x="15" y="7">Партизанская</text>
                    </g>
                    <g bw:code="ru-msk-metro-izmaylovskaya" class="station" transform="translate(674 -450)">
                      <circle></circle>
                      <text x="15" y="7">Измайловская</text>
                    </g>
                    <g bw:code="ru-msk-metro-pervomayskaya" class="station" transform="translate(674 -504)">
                      <circle></circle>
                      <text x="15" y="7">Первомайская</text>
                    </g>
                    <g bw:code="ru-msk-metro-schelkovskaya" class="station" transform="translate(674 -562)">
                      <circle></circle>
                      <text x="15" y="7">Щёлковская</text>
                    </g>
                  </g>
                </g>
                <g class="branch blue" bw:code="ru-msk-liniya-metro-filvskaya">
                  <g class="branch-part" bw:branch-part="blue-all;all">
                    <g bw:code="ru-msk-metro-kuntsevskaya-kuntsevskaya" class="station" transform="translate(-914 -41)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-pionerskaya" class="station" transform="translate(-864 9)">
                      <circle></circle>
                      <text x="15" y="7">Пионерская</text>
                    </g>
                    <g bw:code="ru-msk-metro-filevskiy-park" class="station" transform="translate(-829 44)">
                      <circle></circle>
                      <text x="15" y="7">Филёвский парк</text>
                    </g>
                    <g bw:code="ru-msk-metro-bagrationovskaya" class="station" transform="translate(-794 79)">
                      <circle></circle>
                      <text x="15" y="7">Багратионовская</text>
                    </g>
                    <g bw:code="ru-msk-metro-fili" class="station" transform="translate(-759 114)">
                      <circle></circle>
                      <text x="15" y="7">Фили</text>
                    </g>
                    <g bw:code="ru-msk-metro-kutuzovskaya" class="station" transform="translate(-510 115)">
                      <circle></circle>
                      <g transform="translate(-15 -18)">
                        <text class="bg" text-anchor="middle">Кутузовская</text>
                        <text text-anchor="middle">Кутузовская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-studencheskaya" class="station" transform="translate(-455 62)">
                      <circle></circle>
                      <g transform="translate(83 7)">
                        <text class="bg" text-anchor="middle">Студенческая</text>
                        <text text-anchor="middle">Студенческая</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-kievskaya" class="station" transform="translate(-346 -38)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-vyistavochnaya-delovoy-tsentr" class="station" transform="translate(-475 -38)">
                      <circle></circle>
                      <text x="40" y="-18" text-anchor="middle">Выставочная</text>
                    </g>
                    <g bw:code="ru-msk-metro-mejdunarodnaya" class="station" transform="translate(-531 -38)">
                      <circle></circle>
                      <g transform="translate(20,-18)">
                        <text class="bg" text-anchor="end">Международная</text>
                        <text text-anchor="end">Международная</text>
                      </g>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="blue-all;inside-brown;all">
                    <g bw:code="ru-msk-metro-smolenskaya" class="station" transform="translate(-232 -38)">
                      <circle></circle>
                      <text x="-50" y="-20">Смоленская</text>
                    </g>
                    <g bw:code="ru-msk-metro-arbatskaya-aleksandrovskiy-sad-biblioteka-im-lenina-borovitskaya" bw:slug="metro-arbatskaya" class="station" transform="translate(-176 -26)">
                      <circle></circle>
                      <g transform="translate(68-10)">
                        <text class="bg" text-anchor="middle">Арбатская</text>
                        <text text-anchor="middle">Арбатская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-arbatskaya-aleksandrovskiy-sad-biblioteka-im-lenina-borovitskaya" bw:slug="metro-aleksandrovskiy-sad" class="station" transform="translate(-106 44)">
                      <circle></circle>
                      <g transform="translate(127 5)">
                        <text class="bg" text-anchor="middle">Александровский сад</text>
                        <text text-anchor="middle">Александровский сад</text>
                      </g>
                    </g>
                  </g>
                </g>
                <g class="branch brown" bw:code="ru-msk-liniya-metro-koltsevaya">
                  <g class="branch-part" bw:branch-part="brown-all;all">
                    <g bw:code="ru-msk-metro-novoslobodskaya-mendeleevskaya" class="station" transform="translate(-53 -420)">
                      <circle></circle>
                      <g transform="translate(0 35)">
                        <text class="bg" text-anchor="middle">Новослободская</text>
                        <text text-anchor="middle">Новослободская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-prospekt-mira" class="station" transform="translate(174 -413)">
                      <circle></circle>
                      <text x="15" y="-7">Проспект Мира</text>
                    </g>
                    <g bw:code="ru-msk-metro-komsomolskaya" class="station" transform="translate(326 -307)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-kurskaya-kurskaya-chkalovskaya" class="station" transform="translate(408 -116)">
                      <circle bw:title="Курская"></circle>
                    </g>
                    <g bw:code="ru-msk-metro-taganskaya-taganskaya-marksistskaya" class="station" transform="translate(380 69)">
                      <circle bw:title="Таганская"></circle>
                    </g>
                    <g bw:code="ru-msk-metro-paveletskaya-paveletskaya" class="station" transform="translate(214 246)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-dobryininskaya-serpuhovskaya" class="station" transform="translate(-50 270)">
                      <circle></circle>
                      <text x="-5" y="26" text-anchor="end">Добрынинская</text>
                    </g>
                    <g bw:code="ru-msk-metro-oktyabrskaya" class="station" transform="translate(-173 207)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-park-kulturyi" class="station" transform="translate(-257 114)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-kievskaya" class="station" transform="translate(-305 -12)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-krasnopresnenskaya-barrikadnaya" class="station" transform="translate(-304 -142)">
                      <circle></circle>
                      <g transform="translate(-10 30)">
                        <text class="bg" text-anchor="middle">Краснопресненская</text>
                        <text text-anchor="middle">Краснопресненская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-belorusskaya-belorusskaya" class="station" transform="translate(-254 -267)">
                      <circle></circle>
                    </g>
                  </g>
                </g>
                <g class="branch orange" bw:code="ru-msk-liniya-metro-kalujsko-rijskaya">
                  <g class="branch-part" bw:branch-part="orange-all;orange-north;all">
                    <g bw:code="ru-msk-metro-medvedkovo" class="station" transform="translate(296 -835)">
                      <circle></circle>
                      <text x="-15" y="7" text-anchor="end">Медведково</text>
                    </g>
                    <g bw:code="ru-msk-metro-babushkinskaya" class="station" transform="translate(296 -785)">
                      <circle></circle>
                      <text x="-15" y="7" text-anchor="end">Бабушкинская</text>
                    </g>
                    <g bw:code="ru-msk-metro-sviblovo" class="station" transform="translate(296 -735)">
                      <circle></circle>
                      <text x="-15" y="7" text-anchor="end">Свиблово</text>
                    </g>
                    <g bw:code="ru-msk-metro-botanicheskiy-sad" class="station" transform="translate(296 -680)">
                      <circle></circle>
                      <g transform="translate(-103 5)">
                        <text class="bg" text-anchor="middle">Ботанический сад</text>
                        <text text-anchor="middle">Ботанический сад</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-vdnh" class="station" transform="translate(296 -611)">
                      <circle></circle>
                      <text x="-15" y="7" text-anchor="end">ВДНХ</text>
                    </g>
                    <g bw:code="ru-msk-metro-alekseevskaya" class="station" transform="translate(296 -557)">
                      <circle></circle>
                      <text x="-15" y="7" text-anchor="end">Алексеевская</text>
                    </g>
                    <g bw:code="ru-msk-metro-rijskaya" class="station" transform="translate(276 -491)">
                      <circle></circle>
                      <text x="" y="-15" text-anchor="end">Рижская</text>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="orange-all;orange-north;orange-center;all">
                    <g bw:code="ru-msk-metro-prospekt-mira" class="station" transform="translate(174 -441)">
                      <circle></circle>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="orange-all;orange-center;inside-brown;all">
                    <g bw:code="ru-msk-metro-suharevskaya" class="station" transform="translate(114 -343)">
                      <circle></circle>
                      <text x="15" y="7">Сухаревская</text>
                    </g>
                    <g bw:code="ru-msk-metro-chistyie-prudyi-sretenskiy-bulvar-turgenevskaya" class="station" transform="translate(180 -225)">
                      <circle></circle>
                      <text x="-20" y="5" text-anchor="end">Тургеневская</text>
                    </g>
                    <g bw:code="ru-msk-metro-kitay-gorod" class="station" transform="translate(222 -99)">
                      <circle></circle>
                      <g transform="translate(-25 35)">
                        <text class="bg" text-anchor="middle">Китай-город</text>
                        <text text-anchor="middle">Китай-город</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-novokuznetskaya-tretyakovskaya" class="station" transform="translate(159 119)">
                      <circle></circle>
                      <g transform="translate(-72 31)">
                        <text class="bg" text-anchor="middle">Третьяковская</text>
                        <text text-anchor="middle">Третьяковская</text>
                      </g>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="orange-all;orange-center;orange-south;all">
                    <g bw:code="ru-msk-metro-oktyabrskaya" class="station" transform="translate(-173 239)">
                      <circle></circle>
                      <text x="-15" y="-10" text-anchor="end">Октябрьская</text>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="orange-all;orange-south;all">
                    <g bw:code="ru-msk-metro-shabolovskaya" class="station" transform="translate(-242 341)">
                      <circle></circle>
                      <text x="15" y="7">Шаболовская</text>
                    </g>
                    <g bw:code="ru-msk-metro-leninskiy-prospekt" class="station" transform="translate(-242 451)">
                      <circle></circle>
                      <text x="15" y="-15"><tspan>Ленинский</tspan><tspan x="15" dy="18">проспект</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-akademicheskaya" class="station" transform="translate(-242 545)">
                      <circle></circle>
                      <text x="15" y="7">Академическая</text>
                    </g>
                    <g bw:code="ru-msk-metro-profsoyuznaya" class="station" transform="translate(-242 585)">
                      <circle></circle>
                      <text x="15" y="7">Профсоюзная</text>
                    </g>
                    <g bw:code="ru-msk-metro-novyie-cheremushki" class="station" transform="translate(-242 625)">
                      <circle></circle>
                      <text x="15" y="7">Новые Черёмушки</text>
                    </g>
                    <g bw:code="ru-msk-metro-kalujskaya" class="station" transform="translate(-242 665)">
                      <circle></circle>
                      <text x="15" y="7">Калужская</text>
                    </g>
                    <g bw:code="ru-msk-metro-belyaevo" class="station" transform="translate(-242 705)">
                      <circle></circle>
                      <text x="15" y="7">Беляево</text>
                    </g>
                    <g bw:code="ru-msk-metro-konkovo" class="station" transform="translate(-242 745)">
                      <circle></circle>
                      <text x="15" y="7">Коньково</text>
                    </g>
                    <g bw:code="ru-msk-metro-teplyiy-stan" class="station" transform="translate(-242 785)">
                      <circle></circle>
                      <text x="15" y="7">Тёплый Стан</text>
                    </g>
                    <g bw:code="ru-msk-metro-yasenevo" class="station" transform="translate(-242 825)">
                      <circle></circle>
                      <text x="15" y="7">Ясенево</text>
                    </g>
                    <g bw:code="ru-msk-metro-novoyasenevskaya-bittsevskiy-park" class="station" transform="translate(-223 863)">
                      <circle></circle>
                      <text x="15">Новоясеневская</text>
                    </g>
                  </g>
                </g>
                <g class="branch kojuhovskaya" bw:code="ru-msk-liniya-metro-kojuhovskaya">
                  <g class="branch-part" bw:branch-part="kojuhovskaya-top;kojuhovskaya-all;all">
                    <g bw:code="ru-msk-metro-nijegorodskaya" class="constructed station" transform="translate(685,40)">
                      <circle></circle>
                      <text x="15" y="7">Нижегородская улица</text>
                    </g>
                    <g bw:code="ru-msk-metro-stahanovskaya" class="constructed station" transform="translate(768,108)">
                      <circle></circle>
                      <text x="10" y="-5">Стахановская</text>
                    </g>
                    <g bw:code="ru-msk-metro-okskaya-ulitsa" class="constructed station" transform="translate(789,180)">
                      <circle></circle>
                      <text x="15" y="0"><tspan>Окская</tspan><tspan x="15" dy="18">улица</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-yugo-vostochnaya" class="constructed station" transform="translate(789,365)">
                      <circle></circle>
                      <text text-anchor="end" x="-15" y="7">Юго-Восточная</text>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="kojuhovskaya-bottom;kojuhovskaya-all;all">
                    <g bw:code="ru-msk-metro-lermontovskiy-prospekt" class="station" transform="translate(824 433)">
                      <circle></circle>
                      <text x="15" y="7">Косино</text>
                    </g>
                    <g bw:code="ru-msk-metro-ulitsa-dmitrievskogo" class="station" transform="translate(845 580)">
                      <circle></circle>
                      <text text-anchor="end" x="-15" y="0"><tspan>Улица</tspan><tspan x="-15" dy="18">Дмитриевского</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-luhmanovskaya" class="station" transform="translate(845 620)">
                      <circle></circle>
                      <text text-anchor="end" x="-15" y="7">Лухмановская</text>
                    </g>
                    <g bw:code="ru-msk-metro-nekrasovka" class="station" transform="translate(845 660)">
                      <circle></circle>
                      <text text-anchor="end" x="-15" y="7">Некрасовка</text>
                    </g>
                  </g>
                </g>
                <g class="branch purple" bw:code="ru-msk-liniya-metro-tagansko-krasnopresnenskaya">
                  <g class="branch-part" bw:branch-part="purple-all;purple-north;all">
                    <g bw:code="ru-msk-metro-planernaya" class="station" transform="translate(-529 -725)">
                      <circle></circle>
                      <text x="15" y="7">Планерная</text>
                    </g>
                    <g bw:code="ru-msk-metro-shodnenskaya" class="station" transform="translate(-529 -680)">
                      <circle></circle>
                      <text x="15" y="7">Сходненская</text>
                    </g>
                    <g bw:code="ru-msk-metro-tushinskaya" class="station" transform="translate(-529 -635)">
                      <circle></circle>
                      <text x="15" y="7">Тушинская</text>
                    </g>
                    <g bw:code="ru-msk-metro-spartak" class="station" transform="translate(-529 -590)">
                      <circle></circle>
                      <text x="15" y="7">Спартак</text>
                    </g>
                    <g bw:code="ru-msk-metro-schukinskaya" class="station" transform="translate(-529 -545)">
                      <circle></circle>
                      <text x="15" y="7">Щукинская</text>
                    </g>
                    <g bw:code="ru-msk-metro-oktyabrskoe-pole" class="station" transform="translate(-529 -427)">
                      <circle></circle>
                      <g transform="translate(15 0)">
                        <text class="bg"><tspan>Октябрьское</tspan><tspan x="0" dy="18">поле</tspan></text>
                        <text><tspan>Октябрьское</tspan><tspan x="0" dy="18">поле</tspan></text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-polejaevskaya" class="station" transform="translate(-494 -286)">
                      <circle></circle>
                      <g transform="translate(0,-20)">
                        <text class="bg" text-anchor="middle">Полежаевская</text>
                        <text text-anchor="middle">Полежаевская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-begovaya" class="station" transform="translate(-461 -252)">
                      <circle></circle>
                      <text x="15">Беговая</text>
                    </g>
                    <g bw:code="ru-msk-metro-ulitsa-1905-goda" class="station" transform="translate(-423 -212)">
                      <circle></circle>
                      <text x="15" y="-15"><tspan x="15">Улица</tspan><tspan x="15" dy="18">1905 года</tspan></text>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="purple-all;purple-north;purple-center;all">
                    <g bw:code="ru-msk-metro-krasnopresnenskaya-barrikadnaya" class="station" transform="translate(-279 -166)">
                      <circle></circle>
                      <g transform="translate(0-17)">
                        <text class="bg" text-anchor="middle">Баррикадная</text>
                        <text text-anchor="middle">Баррикадная</text>
                      </g>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="purple-all;purple-center;inside-brown;all">
                    <g bw:code="ru-msk-metro-pushkinskaya-tverskaya-chehovskaya" class="station" transform="translate(-75 -166)">
                      <circle></circle>
                      <text x="-60" y="-15">Пушкинская</text>
                    </g>
                    <g bw:code="ru-msk-metro-kuznetskiy-most-lubyanka" class="station" transform="translate(115 -166)">
                      <circle></circle>
                      <text x="-110" y="-15">Кузнецкий мост</text>
                    </g>
                    <g bw:code="ru-msk-metro-kitay-gorod" class="station" transform="translate(252 -99)">
                      <circle></circle>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="purple-all;purple-center;purple-south;all">
                    <g bw:code="ru-msk-metro-taganskaya-taganskaya-marksistskaya" class="station" transform="translate(400 49)">
                      <circle></circle>
                      <text x="-22" text-anchor="end">Таганская</text>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="purple-all;purple-south;all">
                    <g bw:code="ru-msk-metro-proletarskaya-krestyanskaya-zastava" class="station" transform="translate(529 176)">
                      <circle></circle>
                      <g transform="translate(85 7)">
                        <text class="bg" text-anchor="middle">Пролетарская</text>
                        <text text-anchor="middle">Пролетарская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-volgogradskiy-prospekt" class="station" transform="translate(566, 213)">
                      <circle></circle>
                      <g transform="translate(15 0)">
                        <text class="bg"><tspan>Волгоградский</tspan><tspan x="0" dy="18">проспект</tspan></text>
                        <text><tspan>Волгоградский</tspan><tspan x="0" dy="18">проспект</tspan></text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-tekstilschiki" class="station" transform="translate(629 252)">
                      <circle></circle>
                      <text x="17" y="30" text-anchor="middle">Текстильщики</text>
                    </g>
                    <g bw:code="ru-msk-metro-kuzminki" class="station" transform="translate(759 252)">
                      <circle></circle>
                      <g transform="translate(20-18)">
                        <text class="bg" text-anchor="middle">Кузьминки</text>
                        <text text-anchor="middle">Кузьминки</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-ryazanskiy-prospekt" class="station" transform="translate(859 294)">
                      <circle></circle>
                      <g transform="translate(-15 0)">
                        <text class="bg" text-anchor="end"><tspan>Рязанский</tspan><tspan x="-15" dy="18">проспект</tspan></text>
                        <text text-anchor="end"><tspan>Рязанский</tspan><tspan x="-15" dy="18">проспект</tspan></text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-vyihino" class="station" transform="translate(859 334)">
                      <circle></circle>
                      <g transform="translate(-15 7)">
                        <text class="bg" text-anchor="end">Выхино</text>
                        <text text-anchor="end">Выхино</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-lermontovskiy-prospekt" class="station" transform="translate(789 433)">
                      <circle></circle>
                      <text x="-10" y="-28" text-anchor="end"><tspan>Лермонтовский</tspan><tspan x="-10" dy="18">проспект</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-julebino" class="station" transform="translate(749 473)">
                      <circle></circle>
                      <text x="-10" y="-10" text-anchor="end">Жулебино</text>
                    </g>
                    <g bw:code="ru-msk-metro-kotelniki" class="station" transform="translate(709 513)">
                      <circle></circle>
                      <text x="-10" y="-10" text-anchor="end">Котельники</text>
                    </g>
                  </g>
                </g>
                <g class="branch yellow" bw:code="ru-msk-metro-kalininsko-solntsevskaya-liniya">
                  <g class="branch-part" bw:branch-part="yellow-east;all">
                    <g bw:code="ru-msk-metro-novokosino" class="station" transform="translate(762 -242)">
                      <circle></circle>
                      <text x="15" y="10">Новокосино</text>
                    </g>
                    <g bw:code="ru-msk-metro-novogireevo" class="station" transform="translate(728 -210)">
                      <circle></circle>
                      <text x="15" y="10">Новогиреево</text>
                    </g>
                    <g bw:code="ru-msk-metro-perovo" class="station" transform="translate(691 -178)">
                      <circle></circle>
                      <text x="15" y="10">Перово</text>
                    </g>
                    <g bw:code="ru-msk-metro-shosse-entuziastov" class="station" transform="translate(637 -126)">
                      <circle></circle>
                      <g transform="translate(17 -17)">
                        <text class="bg" text-anchor="middle">Шоссе Энтузиастов</text>
                        <text text-anchor="middle">Шоссе Энтузиастов</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-aviamotornaya" class="station" transform="translate(576 -69)">
                      <circle></circle>
                      <g transform="translate(0 -17)">
                        <text class="bg" text-anchor="middle">Авиамоторная</text>
                        <text text-anchor="middle">Авиамоторная</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-ploschad-ilicha-rimskaya" class="station" transform="translate(506 -4)">
                      <circle></circle>
                      <text x="15" y="15"><tspan>Площадь</tspan><tspan x="15" dy="18">Ильича</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-taganskaya-taganskaya-marksistskaya" class="station" transform="translate(413 84)">
                      <circle></circle>
                      <g transform="translate(71 35)">
                        <text class="bg" text-anchor="middle">Марксистская</text>
                        <text text-anchor="middle">Марксистская</text>
                      </g>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="yellow-east;inside-brown;all">
                    <g bw:code="ru-msk-metro-novokuznetskaya-tretyakovskaya" class="station" transform="translate(179 138)">
                      <circle bw:title="Третьяковская"></circle>
                    </g>
                  </g>
                </g>
                <g class="branch yellow" bw:code="ru-msk-metro-kalininsko-solntsevskaya-liniya">
                  <g class="branch-part" bw:branch-part="yellow-west;all">
                    <g bw:code="ru-msk-metro-vyistavochnaya-delovoy-tsentr" class="station" transform="translate(-455 -9)">
                      <circle></circle>
                      <g transform="translate(-20 32)">
                        <text class="bg" text-anchor="middle">Деловой центр</text>
                        <text text-anchor="middle">Деловой центр</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-park-pobedyi-park-pobedyi" class="station" transform="translate(-589 204)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-minskaya" class="station" transform="translate(-589 260)">
                      <circle></circle>
                      <text x="-15" y="7" text-anchor="end">Минская</text>
                    </g>
                    <g bw:code="ru-msk-metro-lomonosovskiy-prospekt" class="station" transform="translate(-589 300)">
                      <circle></circle>
                      <text x="-15" text-anchor="end"><tspan>Ломоносовский</tspan><tspan x="-15" dy="18">проспект</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-ramenki" class="station" transform="translate(-589 340)">
                      <circle></circle>
                      <text x="-15" y="5" text-anchor="end">Раменки</text>
                    </g>
                    <g bw:code="ru-msk-metro-michurinskiy-prospekt" class="station" transform="translate(-589 380)">
                      <circle></circle>
                      <text x="-15" text-anchor="end"><tspan>Мичуринский</tspan><tspan x="-15" dy="18">проспект</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-ochakovo" class="station" transform="translate(-589 420)">
                      <circle></circle>
                      <text x="-15" y="7" text-anchor="end">Озерная</text>
                    </g>
                    <g bw:code="ru-msk-metro-govorovo" class="station" transform="translate(-589 460)">
                      <circle></circle>
                      <text x="-15" y="7" text-anchor="end">Говорово</text>
                    </g>
                    <g bw:code="ru-msk-metro-solntsevo" class="station" transform="translate(-589 500)">
                      <circle></circle>
                      <text x="-15" y="7" text-anchor="end">Солнцево</text>
                    </g>
                    <g bw:code="ru-msk-metro-borovskoe-shosse" class="station" transform="translate(-589 540)">
                      <circle></circle>
                      <text x="-15" text-anchor="end"><tspan>Боровское</tspan><tspan x="-15" dy="18">шоссе</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-novoperedelkino" class="station" transform="translate(-589 580)">
                      <circle></circle>
                      <text x="-15" y="7" text-anchor="end">Новопеределкино</text>
                    </g>
                    <g bw:code="ru-msk-metro-rasskazovka" class="station" transform="translate(-589 620)">
                      <circle></circle>
                      <text x="-15" y="7" text-anchor="end">Рассказовка</text>
                    </g>
                  </g>
                </g>
                <g class="branch grey" bw:code="ru-msk-liniya-metro-serpuhovsko-timiryazevskaya">
                  <g class="branch-part" bw:branch-part="grey-all;grey-north;all">
                    <g bw:code="ru-msk-metro-altufevo" class="station" transform="translate(-33 -840)">
                      <circle></circle>
                      <text x="15" y="7">Алтуфьево</text>
                    </g>
                    <g bw:code="ru-msk-metro-bibirevo" class="station" transform="translate(-33 -800)">
                      <circle></circle>
                      <text x="15" y="7">Бибирево</text>
                    </g>
                    <g bw:code="ru-msk-metro-otradnoe" class="station" transform="translate(-33 -760)">
                      <circle></circle>
                      <text x="15" y="7">Отрадное</text>
                    </g>
                    <g bw:code="ru-msk-metro-vladyikino" class="station" transform="translate(-33 -720)">
                      <circle></circle>
                      <text x="15">Владыкино</text>
                    </g>
                    <g bw:code="ru-msk-metro-petrovsko-razumovskaya" class="station" transform="translate(-33 -655)">
                      <circle></circle>
                      <g transform="translate(20 35)">
                        <text class="bg" text-anchor="middle">Петровско-Разумовская</text>
                        <text text-anchor="middle">Петровско-Разумовская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-timiryazevskaya" class="station" transform="translate(-33 -590)">
                      <circle></circle>
                      <text x="-15" y="7" text-anchor="end">Тимирязевская</text>
                    </g>
                    <g bw:code="ru-msk-metro-dmitrovskaya" class="station" transform="translate(-33 -545)">
                      <circle></circle>
                      <text x="-15" y="7" text-anchor="end">Дмитровская</text>
                    </g>
                    <g bw:code="ru-msk-metro-savelovskaya" class="station" transform="translate(-33 -500)">
                      <circle></circle>
                      <text x="-22" y="7" text-anchor="end">Савёловская</text>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="grey-all;grey-north;grey-center;all">
                    <g bw:code="ru-msk-metro-novoslobodskaya-mendeleevskaya" class="station" transform="translate(-33 -455)">
                      <circle></circle>
                      <g transform="translate(-15,14)">
                        <text class="bg" text-anchor="end">Менделеевская</text>
                        <text text-anchor="end">Менделеевская</text>
                      </g>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="grey-all;grey-center;inside-brown;all">
                    <g bw:code="ru-msk-metro-tsvetnoy-bulvar-trubnaya" class="station" transform="translate(-14 -310)">
                      <circle></circle>
                      <g transform="translate(20,30)">
                        <text class="bg" text-anchor="middle">Цветной бульвар</text>
                        <text text-anchor="middle">Цветной бульвар</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-pushkinskaya-tverskaya-chehovskaya" class="station" transform="translate(-58 -136)">
                      <circle></circle>
                      <g>
                        <text text-anchor="middle" transform="translate(70 10)">Чеховская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-arbatskaya-aleksandrovskiy-sad-biblioteka-im-lenina-borovitskaya" class="station" transform="translate(-142 46)">
                      <circle></circle>
                      <g>
                        <text text-anchor="middle" transform="translate(-74 10)">Боровицкая</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-polyanka" class="station" transform="translate(-24 227)">
                      <circle></circle>
                      <text x="15" y="6">Полянка</text>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="grey-all;grey-center;grey-south;all">
                    <g bw:code="ru-msk-metro-dobryininskaya-serpuhovskaya" class="station" transform="translate(-24 300)">
                      <circle></circle>
                      <text x="15" y="15">Серпуховская</text>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="grey-all;grey-south;all">
                    <g bw:code="ru-msk-metro-tulskaya" class="station" transform="translate(-24 420)">
                      <circle></circle>
                      <text x="15" y="7">Тульская</text>
                    </g>
                    <g bw:code="ru-msk-metro-nagatinskaya" class="station" transform="translate(-24 570)">
                      <circle></circle>
                      <text x="15" y="7">Нагатинская</text>
                    </g>
                    <g bw:code="ru-msk-metro-nagornaya" class="station" transform="translate(-24 605)">
                      <circle></circle>
                      <text x="15" y="7">Нагорная</text>
                    </g>
                    <g bw:code="ru-msk-metro-nahimovskiy-prospekt" class="station" transform="translate(-24 640)">
                      <circle></circle>
                      <text x="15"><tspan x="15">Нахимовский</tspan> <tspan x="15" dy="18">проспект</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-kahovskaya-sevastopolskaya" class="station" transform="translate(-24 720)">
                      <circle></circle>
                      <text x="15" y="7">Севастопольская</text>
                    </g>
                    <g bw:code="ru-msk-metro-chertanovskaya" class="station" transform="translate(-24 760)">
                      <circle></circle>
                      <text x="15" y="7">Чертановская</text>
                    </g>
                    <g bw:code="ru-msk-metro-yujnaya" class="station" transform="translate(-24 800)">
                      <circle></circle>
                      <text x="15" y="7">Южная</text>
                    </g>
                    <g bw:code="ru-msk-metro-prajskaya" class="station" transform="translate(-24 840)">
                      <circle></circle>
                      <text x="15" y="7">Пражская</text>
                    </g>
                    <g bw:code="ru-msk-metro-ulitsa-akademika-yangelya" class="station" transform="translate(-24 880)">
                      <circle></circle>
                      <text x="15" y="0"><tspan>Улица Академика</tspan> <tspan x="15" dy="18">Янгеля</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-annino" class="station" transform="translate(-24 920)">
                      <circle></circle>
                      <text x="15" y="7">Аннино</text>
                    </g>
                    <g bw:code="ru-msk-metro-bulvar-dmitriya-donskogo-ulitsa-starokachalovskaya" class="station" transform="translate(-24 960)">
                      <circle></circle>
                      <text x="15" y="0"><tspan>Бульвар</tspan><tspan x="15" dy="18">Дмитрия Донского</tspan></text>
                    </g>
                  </g>
                </g>
                <g class="branch lime" bw:code="ru-msk-liniya-metro-lyublinsko-dmitrovskaya">
                  <g class="branch-part" bw:branch-part="lime-all;lime-north;all">
                    <g bw:code="ru-msk-metro-seligerskaya" class="station" transform="translate(-80 -840)">
                      <circle></circle>
                      <text x="-15" y="7" text-anchor="end">Селигерская</text>
                    </g>
                    <g bw:code="ru-msk-metro-verhnie-lihoboryi" class="station" transform="translate(-80 -780)">
                      <circle></circle>
                      <text x="-15" y="0" text-anchor="end"><tspan>Верхние</tspan><tspan x="-15" dy="18">Лихоборы</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-okrujnaya" class="station" transform="translate(-70 -720)">
                      <circle></circle>
                      <text x="-12" y="22" text-anchor="end">Окружная</text>
                    </g>
                    <g bw:code="ru-msk-metro-petrovsko-razumovskaya" class="station" transform="translate(0 -655)">
                      <circle></circle>
                      <text x="15" y="7"></text>
                    </g>
                    <g bw:code="ru-msk-metro-fonvizinskaya" class="station" transform="translate(14 -590)">
                      <circle></circle>
                      <text x="15" y="7">Фонвизинская</text>
                    </g>
                    <g bw:code="ru-msk-metro-butyirskaya" class="station" transform="translate(14 -545)">
                      <circle></circle>
                      <text x="15" y="7">Бутырская</text>
                    </g>
                    <g bw:code="ru-msk-metro-marina-roscha" class="station" transform="translate(14 -500)">
                      <circle></circle>
                      <text x="15" y="7">Марьина Роща</text>
                    </g>
                    <g bw:code="ru-msk-metro-dostoevskaya" class="station" transform="translate(14 -455)">
                      <circle></circle>
                      <text x="15" y="7">Достоевская</text>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="lime-all;lime-center;inside-brown;all">
                    <g bw:code="ru-msk-metro-tsvetnoy-bulvar-trubnaya" class="station" transform="translate(14 -322)">
                      <circle></circle>
                      <g transform="translate(0,-20)">
                        <text class="bg" text-anchor="middle">Трубная</text>
                        <text text-anchor="middle">Трубная</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-chistyie-prudyi-sretenskiy-bulvar-turgenevskaya" class="station" transform="translate(198 -258)">
                      <circle></circle>
                      <text y="-35" text-anchor="middle"><tspan>Сретенский</tspan><tspan x="0" dy="18">бульвар</tspan></text>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="lime-all;lime-center;lime-south;all">
                    <g bw:code="ru-msk-metro-kurskaya-kurskaya-chkalovskaya" class="station" transform="translate(372 -104)">
                      <circle></circle>
                      <g transform="translate(0 32)">
                        <text class="bg" text-anchor="middle">Чкаловская</text>
                        <text text-anchor="middle">Чкаловская</text>
                      </g>
                    </g>
                  </g>
                  <g class="branch-part" bw:branch-part="lime-all;lime-south;all">
                    <g bw:code="ru-msk-metro-ploschad-ilicha-rimskaya" class="station" transform="translate(472 -4)">
                      <circle></circle>
                      <g transform="translate(-10-20)">
                        <text class="bg" text-anchor="middle">Римская</text>
                        <text text-anchor="middle">Римская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-proletarskaya-krestyanskaya-zastava" class="station" transform="translate(500 186)">
                      <circle></circle>
                      <text x="-18" y="5" text-anchor="end"><tspan>Крестьянская</tspan><tspan x="-18" dy="18">застава</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-dubrovka" class="station" transform="translate(388 420)">
                      <circle></circle>
                      <text x="-15" y="15" text-anchor="end">Дубровка</text>
                    </g>
                    <g bw:code="ru-msk-metro-kojuhovskaya" class="station" transform="translate(388 498)">
                      <circle></circle>
                      <text x="15" y="7">Кожуховская</text>
                    </g>
                    <g bw:code="ru-msk-metro-pechatniki" class="station" transform="translate(388 545)">
                      <circle></circle>
                      <text x="15" y="7">Печатники</text>
                    </g>
                    <g bw:code="ru-msk-metro-voljskaya" class="station" transform="translate(388 592)">
                      <circle></circle>
                      <text x="15" y="7">Волжская</text>
                    </g>
                    <g bw:code="ru-msk-metro-lyublino" class="station" transform="translate(388 639)">
                      <circle></circle>
                      <text x="15" y="7">Люблино</text>
                    </g>
                    <g bw:code="ru-msk-metro-bratislavskaya" class="station" transform="translate(388 686)">
                      <circle></circle>
                      <text x="15" y="7">Братиславская</text>
                    </g>
                    <g bw:code="ru-msk-metro-marino" class="station" transform="translate(388 733)">
                      <circle></circle>
                      <text x="15" y="7">Марьино</text>
                    </g>
                    <g bw:code="ru-msk-metro-borisovo" class="station" transform="translate(388 780)">
                      <circle></circle>
                      <text x="15" y="7">Борисово</text>
                    </g>
                    <g bw:code="ru-msk-metro-shipilovskaya" class="station" transform="translate(388 827)">
                      <circle></circle>
                      <text x="15" y="7">Шипиловская</text>
                    </g>
                    <g bw:code="ru-msk-metro-zyablikovo-krasnogvardeyskaya" class="station" transform="translate(388 874)">
                      <circle></circle>
                      <text x="15">Зябликово</text>
                    </g>
                  </g>
                </g>
                <g class="branch turquoise" bw:code="ru-msk-liniya-metro-tretiy-peresadochnyiy-kontur">
                  <g class="branch-part" bw:branch-part="turquoise-north-west;all">
                    <g bw:code="ru-msk-metro-vyistavochnaya-delovoy-tsentr" class="station" transform="translate(-495 -9)">
                      <circle bw:title="Деловой центр"></circle>
                    </g>
                    <g bw:code="ru-msk-metro-shelepiha" class="station" transform="translate(-589 -160)">
                      <circle></circle>
                    </g>
                    <g bw:code="" class="station constructed disabled" transform="translate(-931,-66)">
                      <circle></circle>
                      <g transform="translate(0,-20)">
                        <text class="bg" text-anchor="middle">Можайская</text>
                        <text text-anchor="middle">Можайская</text>
                      </g>
                    </g>
                    <g bw:code="" class="station disabled" transform="translate(-796,-111)">
                      <circle></circle>
                      <text x="15" y="12">Терехово</text>
                    </g>
                    <g bw:code="" class="station disabled" transform="translate(-751,-156)">
                      <circle></circle>
                      <text x="15" y="5"><tspan>Нижние</tspan><tspan x="15" dy="18">Мнёвники</tspan></text>
                    </g>
                    <g bw:code="" class="station disabled" transform="translate(-706,-201)">
                      <circle></circle>
                      <g transform="translate(15,5)">
                        <text class="bg"><tspan>Улица Народного</tspan><tspan x="0" dy="18">ополчения</tspan></text>
                        <text><tspan>Улица Народного</tspan><tspan x="0" dy="18">ополчения</tspan></text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-polejaevskaya" class="station" transform="translate(-514 -263)">
                      <circle></circle>
                      <g transform="translate(-30,30)">
                        <text class="bg" text-anchor="middle">Хорошёвская</text>
                        <text text-anchor="middle">Хорошёвская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-tsska" class="station" transform="translate(-400 -313)">
                      <circle></circle>
                      <text x="15" y="15">ЦСКА</text>
                    </g>
                    <g bw:code="ru-msk-metro-dinamo" class="station" transform="translate(-296 -373)">
                      <circle></circle>
                      <g transform="translate(15,-5)">
                        <text class="bg"><tspan>Петровский</tspan><tspan x="0" dy="18">парк</tspan></text>
                        <text><tspan>Петровский</tspan><tspan x="0" dy="18">парк</tspan></text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-savelovskaya" class="station" transform="translate(-58-474)">
                      <circle></circle>
                    </g>
                  </g>
                </g>
                <g class="branch turquoise" bw:code="ru-msk-liniya-metro-kahovskaya">
                  <g class="branch-part" bw:branch-part="turquoise-all;all">
                    <g bw:code="ru-msk-metro-kahovskaya-sevastopolskaya" class="station" transform="translate(-42 699)">
                      <circle></circle>
                      <text x="0" y="27" text-anchor="end">Каховская</text>
                    </g>
                    <g bw:code="ru-msk-metro-varshavskaya" class="station" transform="translate(82 699)">
                      <circle></circle>
                      <text y="-17" text-anchor="middle">Варшавская</text>
                    </g>
                    <g bw:code="ru-msk-metro-kashirskaya" class="station" transform="translate(215 699)">
                      <circle></circle>
                    </g>
                  </g>
                </g>
                <g class="branch light-blue" bw:code="ru-msk-liniya-metro-butovskaya">
                  <g class="branch-part" bw:branch-part="light-blue-all;all">
                    <g bw:code="ru-msk-metro-novoyasenevskaya-bittsevskiy-park" class="station" transform="translate(-223 891)">
                      <circle></circle>
                      <text x="0" y="30" text-anchor="end"><tspan>Битцевский</tspan><tspan x="0" dy="18">парк</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-lesoparkovaya" class="station" transform="translate(-141 891)">
                      <circle></circle>
                      <text x="0" y="30" text-anchor="middle">Лесопарковая</text>
                    </g>
                    <g bw:code="ru-msk-metro-bulvar-dmitriya-donskogo-ulitsa-starokachalovskaya" class="station" transform="translate(-55 960)">
                      <circle></circle>
                      <text x="-17" text-anchor="end"><tspan>Улица</tspan><tspan x="-17" dy="18">Старокачаловская</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-ulitsa-skobelevskaya" class="station" transform="translate(-89 997)">
                      <circle></circle>
                      <text x="-17" y="30"><tspan>Улица</tspan><tspan x="-17" dy="18">Скобелевская</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-bulvar-admirala-ushakova" class="station" transform="translate(-289 997)">
                      <circle></circle>
                      <text x="-17" y="30"><tspan>Бульвар</tspan><tspan x="-17" dy="18">Адмирала Ушакова</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-ulitsa-gorchakova" class="station" transform="translate(-377 997)">
                      <circle></circle>
                      <text y="30" text-anchor="middle"><tspan>Улица</tspan><tspan x="0" dy="18">Горчакова</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-buninskaya-alleya" class="station" transform="translate(-425 997)">
                      <circle></circle>
                      <text x="-40" y="-35"><tspan>Бунинская</tspan><tspan x="-40" dy="18">аллея</tspan></text>
                    </g>
                  </g>
                </g>
                <g class="branch circle-2" bw:code="ru-msk-liniya-metro-moskovskoe-tsentralnoe-koltso">
                  <g class="branch-part" bw:branch-part="circle-2-all;all">
                    <g bw:code="ru-msk-metro-mejdunarodnaya" class="station" transform="translate(-569 -38)">
                      <circle></circle>
                      <g transform="translate(-15,5)">
                        <text class="bg" text-anchor="end"><tspan>Деловой центр</tspan><tspan x="0" dy="18"> (МЦК)</tspan></text>
                        <text text-anchor="end"><tspan>Деловой центр</tspan><tspan x="0" dy="18">(МЦК)</tspan></text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-kutuzovskaya" class="station" transform="translate(-540 115)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-sportivnaya" class="station" transform="translate(-422 326)">
                      <circle></circle>
                      <text x="15" y="7">Лужники</text>
                    </g>
                    <g bw:code="ru-msk-metro-leninskiy-prospekt" class="station" transform="translate(-225 480)">
                      <circle></circle>
                      <text x="15">Пл. Гагарина</text>
                    </g>
                    <g bw:code="ru-msk-metro-kryimskaya" class="station" transform="translate(-105 524)">
                      <circle></circle>
                      <g transform="translate(50 -18)">
                        <text class="bg" text-anchor="middle">Крымская</text>
                        <text text-anchor="middle">Крымская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-verhnie-kotlyi" class="station" transform="translate(44 544)">
                      <circle></circle>
                      <text y="-35" text-anchor="middle"><tspan>Верхние</tspan><tspan x="0" dy="18">котлы</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-zil" class="station" transform="translate(144 538)">
                      <circle></circle>
                      <text y="-17" text-anchor="middle">ЗИЛ</text>
                    </g>
                    <g bw:code="ru-msk-metro-avtozavodskaya" class="station" transform="translate(214 522)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-dubrovka" class="station" transform="translate(368 457)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-ugreshskaya" class="station" transform="translate(454 395)">
                      <circle></circle>
                      <g transform="translate(15 -20)">
                        <text class="bg" text-anchor="middle">Угрешская</text>
                        <text text-anchor="middle">Угрешская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-novohohlovskaya" class="station" transform="translate(637 126)">
                      <circle></circle>
                      <g transform="translate(15 -20)">
                        <text class="bg" text-anchor="middle">Новохохловская</text>
                        <text text-anchor="middle">Новохохловская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-nijegorodskaya" class="station" transform="translate(663 16)">
                      <circle></circle>
                      <text x="15" y="7">Нижегородская</text>
                    </g>
                    <g bw:code="ru-msk-metro-andronovka" class="station" transform="translate(670 -64)">
                      <circle></circle>
                      <text x="15" y="7">Андроновка</text>
                    </g>
                    <g bw:code="ru-msk-metro-shosse-entuziastov" class="station" transform="translate(667 -126)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-sokolinaya-gora" class="station" transform="translate(639 -268)">
                      <circle></circle>
                      <text x="15" y="0" text-anchor=""><tspan>Соколиная</tspan><tspan dy="18" x="15">гора</tspan></text>
                    </g>
                    <g bw:code="ru-msk-metro-partizanskaya" class="station" transform="translate(617 -323)">
                      <circle></circle>
                      <text x="15" y="7">Измайлово</text>
                    </g>
                    <g bw:code="ru-msk-metro-cherkizovskaya" class="station" transform="translate(512 -487)">
                      <circle></circle>
                      <text x="15" y="7">Локомотив</text>
                    </g>
                    <g bw:code="ru-msk-metro-bulvar-rokossovskogo" class="station" transform="translate(460 -542)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-belokamennaya" class="station" transform="translate(389 -595)">
                      <circle></circle>
                      <text x="15" y="0">Белокаменная</text>
                    </g>
                    <g bw:code="ru-msk-metro-rostokino" class="station" transform="translate(340 -623)">
                      <circle></circle>
                      <text x="15" y="0">Ростокино</text>
                    </g>
                    <g bw:code="ru-msk-metro-botanicheskiy-sad" class="station" transform="translate(268 -656)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-vladyikino" class="station" transform="translate(-5 -693)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-okrujnaya" class="station" transform="translate(-70 -684)">
                      <circle></circle>
                    </g>
                    <g bw:code="ru-msk-metro-lihoboryi" class="station" transform="translate(-162 -657)">
                      <circle></circle>
                      <g transform="translate(0-18)">
                        <text class="bg" text-anchor="middle">Лихоборы</text>
                        <text text-anchor="middle">Лихоборы</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-koptevo" class="station" transform="translate(-254 -616)">
                      <circle></circle>
                      <g transform="translate(60-5)">
                        <text class="bg" text-anchor="middle">Коптево</text>
                        <text text-anchor="middle">Коптево</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-voykovskaya" class="station" transform="translate(-324 -570)">
                      <circle></circle>
                      <text x="15" y="10">Балтийская</text>
                    </g>
                    <g bw:code="ru-msk-metro-streshnevo" class="station" transform="translate(-435 -460)">
                      <circle></circle>
                      <g transform="translate(0, -18)">
                        <text class="bg" text-anchor="middle">Стрешнево</text>
                        <text text-anchor="middle">Стрешнево</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-oktyabrskoe-pole" class="station" transform="translate(-484 -390)">
                      <circle></circle>
                      <g transform="translate(-15,7)">
                        <text class="bg" text-anchor="end">Панфиловская</text>
                        <text text-anchor="end">Панфиловская</text>
                      </g>
                    </g>
                    <g bw:code="ru-msk-metro-zorge" class="station" transform="translate(-504 -355)">
                      <circle></circle>
                      <text x="15" y="7">Зорге</text>
                    </g>
                    <g bw:code="ru-msk-metro-polejaevskaya" class="station" transform="translate(-534 -286)">
                      <circle></circle>
                      <text text-anchor="end" x="-15" y="7">Хорошёво</text>
                    </g>
                    <g bw:code="ru-msk-metro-shelepiha" class="station" transform="translate(-564 -160)">
                      <circle></circle>
                      <g transform="translate(-12,30)">
                        <text class="bg" text-anchor="middle">Шелепиха</text>
                        <text text-anchor="middle">Шелепиха</text>
                      </g>
                    </g>
                  </g>
                </g>

              </g>
            </g>
          </svg>
        `
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
            $$.$me_atom2_ec.prop_default = Object.assign({}, $$.$me_atom2_ec.prop_default, { em: '/.em', colorText: '/.colorText', fontFamily: '/.fontFamily', fontWeight: '/.fontWeight', fontSize: '.em', theme: '/.theme' });
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