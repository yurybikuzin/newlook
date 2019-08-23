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
            const isSelected = !(val instanceof Set) ? val == id : val.has(id);
            const caption = typeof options[id].caption != 'function' ?
                options[id].caption :
                options[id].caption({ val, isSelected });
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
        $$.$me_atom2_prop_keys = (masters) => $me_atom2_prop(masters, ({ masters }) => Object.keys(masters[0]));
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
        $$.$me_atom2_prop_store = (p) => $me_atom2_prop([], ({ atom }) => {
            let val = null;
            const name = atom.name();
            const s = sessionStorage.getItem(name);
            if (s)
                try {
                    val = !p.fromJSON ? JSON.parse(s) : p.fromJSON(JSON.parse(s));
                }
                catch (e) {
                    console.error({ name }, e);
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
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//prop.js.map
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
                    prop_clientRect.set_state($$.$me_atom2_state_enum.invalid);
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
                        if (control instanceof $$.$me_atom2_control)
                            control.destroy();
                        if (val) {
                            $$.$me_atom2_control.to_def.push({
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
            _prepare(name, ent, dflt, cnf, level) {
                if (level === void 0) {
                    cnf = this.cnf;
                    level = 0;
                }
                if (cnf)
                    if (level) {
                    }
                    else {
                        if (cnf[name])
                            $$.$me_throw(`terminal control can not have .${name}`);
                    }
                return level ? this._prepare_helper(name, ent, dflt, cnf, level) :
                    this._prepare(name, ent, dflt, cnf.base, level + 1);
            }
            _prepare_helper(name, ent, dflt, cnf, level) {
                let type;
                if (!cnf) {
                    type = '$me';
                }
                else {
                    if (!$me_atom2_ec._cnf_cache.has(cnf))
                        $me_atom2_ec._cnf_cache.set(cnf, $me_atom2_ec._cnf_cache.size + '');
                    type = $me_atom2_ec._cnf_cache.get(cnf);
                }
                const cacheKey = $$.$me_atom2_path_ent2prefix[ent] + type + ':' + name;
                if (!$me_atom2_ec._prepare_cache[cacheKey]) {
                    const result = !cnf ? {
                        defaults: {},
                        defaults_relative: {},
                    } : this._prepare(name, ent, dflt, cnf.base, level + 1);
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
                const result = cnf_node instanceof HTMLElement ? cnf_node :
                    typeof cnf_node == 'string' ? document.createElement(cnf_node) :
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
        let $me_atom2_control_render_state_enum;
        (function ($me_atom2_control_render_state_enum) {
            $me_atom2_control_render_state_enum[$me_atom2_control_render_state_enum["cleaned"] = 0] = "cleaned";
            $me_atom2_control_render_state_enum[$me_atom2_control_render_state_enum["rendered"] = 1] = "rendered";
        })($me_atom2_control_render_state_enum = $$.$me_atom2_control_render_state_enum || ($$.$me_atom2_control_render_state_enum = {}));
        class $me_atom2_control extends $$.$me_atom2_ec {
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
                                $$.$me_atom2_ec._to_init.push(this.path);
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
                                alignHor === $$.$me_align.right ? left_parent + width_parent - ofsHor :
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
//control.js.map
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
                            state.add('#masters');
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
                                    if (this.name() == '/@demo@dialog@invisible@row[3]@content@wrapper@item.#hidden')
                                        console.error(this.name(), name_master);
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
                            if (elem.node.style.width == 'auto' || elem.node.style.height == 'auto') {
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
        let $me_atom2_wheel_touch_mode;
        (function ($me_atom2_wheel_touch_mode) {
            $me_atom2_wheel_touch_mode[$me_atom2_wheel_touch_mode["move"] = 0] = "move";
            $me_atom2_wheel_touch_mode[$me_atom2_wheel_touch_mode["end"] = 1] = "end";
        })($me_atom2_wheel_touch_mode = $$.$me_atom2_wheel_touch_mode || ($$.$me_atom2_wheel_touch_mode = {}));
        class $me_atom2_wheel_touch_class {
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
                this.clientX = event.touches[0].clientX;
                this.lastDeltaX = 0;
                this.accelX = 0;
                this.scrollAccuY = 0;
                this.clientY = event.touches[0].clientY;
                this.lastDeltaY = 0;
                this.accelY = 0;
                this.timePrevX = null;
                this.timePrevY = null;
            }
            move(event) {
                this._end = event;
                const deltaX = this.clientX - event.touches[0].clientX;
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
                this.clientX = event.touches[0].clientX;
                this.lastDeltaX = deltaX;
                const deltaY = this.clientY - event.touches[0].clientY;
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
                this.clientY = event.touches[0].clientY;
                this.lastDeltaY = deltaY;
                this.mode = $me_atom2_wheel_touch_mode.move;
                $$.$me_atom2_async();
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
            $$.$me_atom2_wheel_touch.start(event);
            return $$.$me_atom2_event_process('touchstart', event);
        };
        const touchmove = (event) => {
            event.preventDefault();
            if ($$.$me_atom2_wheel_touch)
                $$.$me_atom2_wheel_touch.move(event);
            return $$.$me_atom2_event_process('touchmove', event);
        };
        const touchend = (event) => {
            if ($$.$me_atom2_wheel_touch)
                $$.$me_atom2_wheel_touch.end(event);
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
            prop: Object.assign({ period: () => '...' }, $$.$me_atom2_prop_cascade(() => $$.$me_align.left, 'align', ['alignHor', 'alignVer']), $$.$me_atom2_prop_cascade(() => $$.$me_align.left, 'ofs', ['ofsHor', 'ofsVer']), { _text_n_ctxLeft: $$.$me_atom2_prop([
                    '.#ctx', '.text', '.period', '/.#pixelRatio', '.#width', '.#left', '.paddingLeft', '.paddingRight'
                ], ({ masters: [ctx, text, period, pixelRatio, width, left, paddingLeft, paddingRight] }) => $me_label_text_n_ctxLeft(ctx, text, period, pixelRatio, width, left, paddingLeft, paddingRight)), _ctxLeft: $$.$me_atom2_prop(['._text_n_ctxLeft'], ({ masters: [val] }) => val.ctxLeft), _text: $$.$me_atom2_prop(['._text_n_ctxLeft'], ({ masters: [val] }) => val.text), _textWidth: $$.$me_atom2_prop(['.#ctx', '.text', '/.#pixelRatio', '.fontSize', '.fontWeight', '.fontFamily'], ({ masters: [ctx, text, pixelRatio] }) => {
                    $$.$me_atom2_control.font_prepare(ctx, pixelRatio);
                    const result = Math.ceil(ctx.measureText(text).width / pixelRatio);
                    return result;
                }) }, $$.$me_atom2_prop_same_fn_compute($$.$me_atom2_prop_compute_fn_sum(), {
                '#width': ['._textWidth', '.paddingLeft', '.paddingRight'],
                '#height': ['.fontSize', '.paddingTop', '.paddingBottom'],
            }), { text: () => '' }),
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
                        colorBackground: $$.$me_atom2_prop(['.isSelected', '<.colorBackgroundSelected'], ({ masters: [isSelected, colorBackgroundSelected] }) => isSelected ? colorBackgroundSelected : 'transparent'),
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
        $$.$nl_select = {
            base: $$.$me_select,
            prop: {
                options: $$.$me_atom2_prop_abstract(),
                value: $$.$me_atom2_prop(['.option_ids'], ({ masters: [ids] }) => ids[0]),
                colorBorder: () => '#bdc3d1',
                colorBorderSelected: () => '#008ecf',
                colorBackgroundSelected: () => '#f0f1f4',
                borderRadius: () => 4,
                borderWidth: () => 1,
                paddingHor: () => 0,
                option_ids: $$.$me_atom2_prop_keys(['.options']),
                '#width': () => 440,
                '#height': () => 32,
                option_width_min: () => 40,
                colorText: () => '#0070a4',
                colorTextSelected: '.colorText',
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
        $$.$nl_search_tabs = {
            elem: {
                new: () => ({
                    base: tab,
                    prop: {
                        idx: () => '',
                    },
                    dom: {
                        innerText: () => 'Новый заказ +'.toUpperCase(),
                    },
                }),
                tab: $$.$me_atom2_prop({ keys: ['<.order_idx'] }, ({ key: [idx] }) => ({
                    base: tab,
                    prop: {
                        idx: () => idx,
                    },
                    dom: {
                        innerText: `<<.order_title[${idx}]`,
                    },
                })),
            },
        };
        const tab = {
            node: 'span',
            prop: {
                isSelected: $$.$me_atom2_prop(['<<.selected', '.idx'], ({ masters: [selected, idx] }) => selected == idx),
                '#cursor': $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? 'default' : 'pointer'),
            },
            event: {
                clickOrTap: () => {
                    $$.a('<<.selected', $$.a('.idx'));
                    return true;
                },
            },
            style: {
                position: () => 'relative',
                paddingLeft: () => 10,
                paddingRight: () => 10,
                paddingBottom: () => 5,
                borderBottom: $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => `3px solid rgba(49, 55, 69, ${isSelected ? 1 : .2})`),
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
        $$.$nl_panel = {
            style: {
                background: () => 'white',
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
                    Аренда: {
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
                                        background: () => '#d8dce3',
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
                                        background: () => '#f0f1f4',
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
                                                color: () => '#6a6c74',
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
        $$.$nl_switch = {
            base: $$.$me_select,
            prop: {
                options: $$.$me_atom2_prop_abstract(),
                value: $$.$me_atom2_prop_abstract(),
                colorBorder: () => 'transparent',
                colorBorderSelected: () => 'transparent',
                colorBackgroundSelected: () => '#0070a4',
                borderRadius: () => 0,
                borderWidth: () => 0,
                paddingHor: () => 0,
                option_ids: $$.$me_atom2_prop_keys(['.options']),
                option_width_min: () => 40,
                colorText: () => '#0070a4',
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
                console.error(atom.name(), { delta, prev, val });
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
        $$.$nl_iospicker = {
            dispatch: (dispatch_name, dispatch_arg) => {
                console.warn($$.a.curr.name(), dispatch_name, dispatch_arg);
                return true;
            },
            prop: {
                СвернутьРазвернуть: $$.$me_atom2_prop(['/.СвернутьРазвернуть'], ({ masters: [isOn] }) => isOn, ({ val }) => {
                    $$.a('/.СвернутьРазвернуть', val);
                }),
                СписокБарабан: $$.$me_atom2_prop(['/.СписокБарабан'], ({ masters: [isOn] }) => isOn, ({ val }) => {
                    $$.a('/.СписокБарабан', val);
                }),
                itemMarginTopFirst: () => 16,
                itemMarginBottomLast: () => 16,
                itemMarginVer: () => 0,
                options: $$.$me_atom2_prop_abstract(),
                value: $$.$me_atom2_prop_abstract(),
                '#width': () => 374,
                non_current_facets_semi_count_max: () => 12,
                non_current_facets_semi_count: $$.$me_atom2_prop(['.option_ids', '.non_current_facets_semi_count_max', '.СвернутьРазвернуть'], ({ masters: [option_ids, non_current_facets_semi_count_max, СвернутьРазвернуть] }) => !СвернутьРазвернуть ?
                    Math.max(1, Math.min(non_current_facets_semi_count_max, option_ids.length + (option_ids.length < 5 ? -1 : option_ids.length < 7 ? 0 : 1))) :
                    Math.max(1, Math.min(non_current_facets_semi_count_max, Math.ceil(option_ids.length - 1) / 2 + (option_ids.length > 7 ? 1 : 0)))),
                '#height': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.СписокБарабан'], ({ masters: [СписокБарабан] }) => {
                    if (!СписокБарабан) {
                        return ['.row_current_top', '.row_current_height'];
                    }
                    else {
                        return ['.option_ids', '.non_current_facets_semi_count_max', '.row_current_height', '.itemMarginTopFirst', '.itemMarginBottomLast', '.itemMarginVer'];
                    }
                }), ({ len, masters }) => {
                    if (len == 2) {
                        const [row_current_top, row_current_height] = masters;
                        return 2 * row_current_top + row_current_height;
                    }
                    else {
                        const [option_ids, non_current_facets_semi_count_max, row_current_height, itemMarginTopFirst, itemMarginBottomLast, itemMarginVer] = masters;
                        const rec_count = option_ids.length;
                        const max = non_current_facets_semi_count_max;
                        const result = rec_count > max ?
                            max * row_current_height :
                            rec_count * row_current_height + itemMarginTopFirst + itemMarginBottomLast - 2 * itemMarginVer;
                        return result;
                    }
                }),
                row_current_height: () => 38,
                fontSize: $$.$me_atom2_prop(['.row_current_height'], $$.$me_atom2_prop_compute_fn_mul(22 / 38)),
                row_angles: $$.$me_atom2_prop(['.non_current_facets_semi_count'], ({ masters: [count] }) => {
                    const step = 90 / (count + 2);
                    const result = [];
                    for (let i = 0; i <= count + 2; i++)
                        result.push(i * step);
                    return result;
                }),
                row_heights: $$.$me_atom2_prop(['.row_angles', '.row_current_height'], ({ masters: [angles, height] }) => angles.map((angle) => Math.round(height * Math.cos(angle * Math.PI / 180)))),
                row_label_heights: $$.$me_atom2_prop(['.row_angles', '.fontSize'], ({ masters: [angles, height] }) => angles.map((angle) => Math.round(height * Math.cos(angle * Math.PI / 180)))),
                row_count: $$.$me_atom2_prop(['.row_heights'], ({ masters: [row_heights] }) => (row_heights.length - 2) * 2 + 1),
                row_i: $$.$me_atom2_prop(['.row_count'], ({ masters: [row_count] }) => [...Array(row_count).keys()].map(i => i + '')),
                row_current_top: $$.$me_atom2_prop(['.row_heights'], ({ masters: [row_heights] }) => {
                    let result = 0;
                    for (let i = 1; i < row_heights.length - 1; i++)
                        result += row_heights[i];
                    return result;
                }),
                ofs: () => 0,
                ofs_rem: $$.$me_atom2_prop(['.ofs', '.row_current_height'], ({ masters: [ofs, row_current_height] }) => {
                    const result = ofs - Math.sign(ofs) * Math.round(Math.abs(ofs) / row_current_height) * row_current_height;
                    return result;
                }),
                rec_idx: $$.$me_atom2_prop(['.ofs', '.row_current_height', '.value', '.option_ids'], ({ masters: [ofs, row_current_height, id, ids], prev }) => {
                    let result;
                    if (prev == null) {
                        const idx = ids.indexOf(id);
                        if (~idx)
                            result = idx;
                    }
                    if (result == null)
                        result = -Math.sign(ofs) * Math.round(Math.abs(ofs) / row_current_height);
                    return result;
                }, ({ val, prev }) => {
                    if (prev == null)
                        $$.a('.ofs', -val * $$.a('.row_current_height'));
                    $$.a('.value', $$.a('.option_ids')[val]);
                }),
                on_change_value: $$.$me_atom2_prop(['.value', '.option_ids'], null, ({ val: [id, ids] }) => {
                    const idx = ids.indexOf(id);
                    if (~idx)
                        $$.a('.rec_idx', idx);
                }),
                row_i_current: $$.$me_atom2_prop(['.ofs', '.row_count', '.row_current_height', '.rec_idx'], ({ masters: [ofs, row_count, row_current_height, rec_idx] }) => {
                    const result = (rec_idx - Math.sign(ofs) * Math.round(Math.abs(ofs) / row_current_height) % row_count + row_count) % row_count;
                    return result;
                }, ({ val, prev }) => {
                    if (prev == null)
                        return;
                    for (let i = 0; i < $$.a('.row_count'); i++) {
                        $$.a(`.row_top[${i}].#masters`, null);
                        $$.a(`.row_top[${i}]`, null);
                    }
                }),
                row_i_rel: $$.$me_atom2_prop({
                    keys: ['.row_i'],
                    masters: ['.row_i_current', '.row_count'],
                }, ({ key: [row_i], masters: [row_i_current, row_count] }) => {
                    const row_count_semi = (row_count - 1) / 2;
                    let result = +row_i - row_i_current;
                    if (result > row_count_semi) {
                        result = result - row_count;
                    }
                    else if (result < -row_count_semi) {
                        result = row_count + result;
                    }
                    return result;
                }),
                row_top: $$.$me_atom2_prop({
                    keys: ['.row_i'],
                    masters: $$.$me_atom2_prop_masters(['.row_i_current', '.row_count', '.row_i_rel[]'], ({ key: [row_i], masters: [row_i_current, row_count, row_i_rel] }) => {
                        const result = [];
                        if (!row_i_rel) {
                            result.push('.row_current_top');
                            result.push('.ofs_rem');
                        }
                        else {
                            const i_rel_abs = Math.abs(row_i_rel);
                            const i_rel_sign = Math.sign(row_i_rel);
                            const row_i_top = (row_i_current + (i_rel_abs - 1) * i_rel_sign + row_count) % row_count;
                            const row_i_height = i_rel_sign >= 0 ? row_i_top : (row_i_top + row_count - 1) % row_count;
                            result.push(`.row_top[${row_i_top}]`);
                            result.push(`.row_height[${row_i_height}]`);
                            result.push(`.row_i_rel[]`);
                        }
                        return result;
                    }),
                }, ({ len, masters }) => {
                    if (len <= 2) {
                        const [row_current_top, ofs_rem] = masters;
                        return row_current_top + ofs_rem;
                    }
                    else {
                        const [row_top, row_height, row_i_rel] = masters;
                        return row_top + row_height * Math.sign(row_i_rel);
                    }
                }),
                lambda: $$.$me_atom2_prop(['.ofs_rem', '.row_current_height'], ({ masters: [ofs_rem, row_current_height] }) => {
                    let result = Math.abs(ofs_rem) / row_current_height;
                    if (ofs_rem < 0)
                        result = 1 - result;
                    return result;
                }),
                row_i_rel_abs_from: $$.$me_atom2_prop({ keys: ['.row_i'], masters: ['.row_i_rel[]', '.ofs_rem'] }, ({ masters: [row_i_rel, ofs_rem] }) => {
                    const row_i_rel_abs = Math.abs(row_i_rel);
                    const row_i_rel_sign = Math.sign(row_i_rel);
                    const result = ofs_rem >= 0 ? row_i_rel_abs : row_i_rel_abs + (row_i_rel_sign > 0 ? -1 : 1);
                    return result;
                }),
                row_i_rel_abs_to: $$.$me_atom2_prop({ keys: ['.row_i'], masters: ['.row_i_rel[]', '.ofs_rem'] }, ({ masters: [row_i_rel, ofs_rem] }) => {
                    const row_i_rel_abs = Math.abs(row_i_rel);
                    const row_i_rel_sign = Math.sign(row_i_rel);
                    const result = ofs_rem < 0 ? row_i_rel_abs : row_i_rel_abs + (row_i_rel_sign < 0 ? -1 : 1);
                    return result;
                }),
                row_height: $$.$me_atom2_prop({ keys: ['.row_i'], masters: ['.row_i_rel_abs_from[]', '.row_i_rel_abs_to[]', '.lambda', '.row_heights'] }, ({ key: [row_i], masters: [row_i_rel_abs_from, row_i_rel_abs_to, lambda, row_heights] }) => {
                    const result = (1 - lambda) * row_heights[row_i_rel_abs_from] + lambda * row_heights[row_i_rel_abs_to];
                    return result;
                }),
                row_angle: $$.$me_atom2_prop({ keys: ['.row_i'], masters: ['.row_i_rel_abs_from[]', '.row_i_rel_abs_to[]', '.lambda', '.row_angles', '.row_i_rel[]'] }, ({ key: [row_i], masters: [row_i_rel_abs_from, row_i_rel_abs_to, lambda, row_angles, row_i_rel] }) => {
                    const result = -Math.sign(row_i_rel) * ((1 - lambda) * row_angles[row_i_rel_abs_from] + lambda * row_angles[row_i_rel_abs_to]);
                    return result;
                }),
                option_ids: $$.$me_atom2_prop_keys(['.options']),
                '#order': () => ['row', 'curtain', 'cursor'],
                curtain: () => ['top', 'bottom'],
            },
            event: {
                wheel: p => p.isInRect(p.event.clientX, p.event.clientY) &&
                    $$.$me_atom2_event_wheel_y_is(p.event) &&
                    wheel(p.event._deltaY),
                wheelDrag: p => p.isInRect(p.event.start.clientX, p.event.start.clientY) &&
                    $$.$me_atom2_event_wheel_y_is(p.event) &&
                    wheel(p.event._deltaY),
                wheelTouch: p => p.isInRect(p.event.start.touches[0].clientX, p.event.start.touches[0].clientY) &&
                    $$.$me_atom2_event_wheel_y_is(p.event) &&
                    wheel(p.event._deltaY),
            },
            elem: {
                СписокБарабан: () => ({
                    base: ear,
                    prop: {
                        captions: () => ['Список', 'Барабан'],
                        isOn: $$.$me_atom2_prop(['<.СписокБарабан'], ({ masters: [isOn] }) => isOn, ({ val }) => {
                            $$.a('<.СписокБарабан', val);
                        }),
                    },
                }),
                СвернутьРазвернуть: $$.$me_atom2_prop(['.СписокБарабан'], ({ masters: [isOn] }) => isOn ? null :
                    {
                        base: ear,
                        prop: {
                            '#alignHor': () => $$.$me_align.right,
                            captions: () => ['Свернуть', 'Развернуть'],
                            isOn: $$.$me_atom2_prop(['<.СвернутьРазвернуть'], ({ masters: [isOn] }) => isOn, ({ val }) => {
                                $$.a('<.СвернутьРазвернуть', val);
                            }),
                        },
                    }),
                cursor: $$.$me_atom2_prop(['.СписокБарабан'], ({ masters: [isOn] }) => isOn ? null :
                    {
                        prop: {
                            '#ofsVer': '<.row_current_top',
                            '#height': '<.row_current_height',
                        },
                        style: {
                            borderTop: () => '1px solid #D5D5D3',
                            borderBottom: () => '1px solid #D5D5D3',
                            boxSizing: () => 'border-box',
                        },
                    }),
                curtain: $$.$me_atom2_prop({ keys: ['.curtain'],
                    masters: ['.СписокБарабан']
                }, ({ key: [curtain], masters: [СписокБарабан] }) => {
                    return СписокБарабан ? null : {
                        prop: {
                            '#height': '<.row_current_top',
                            '#alignVer': () => $$.$me_align[curtain],
                        },
                        style: {
                            background: () => `linear-gradient(${curtain == 'bottom' ? 0 : 180}deg, rgba(255,255,255,.9) 0%, rgba(255,255,255,.6) 50%, rgba(255,255,255,0.3) 100%)`,
                            pointerEvents: () => 'none',
                        },
                    };
                }),
                row: $$.$me_atom2_prop({ keys: ['.row_i'],
                    masters: ['.СписокБарабан']
                }, ({ key: [row_i], masters: [СписокБарабан] }) => СписокБарабан ? null : {
                    prop: {
                        '#height': `<.row_height[${row_i}]`,
                        '#ofsVer': `<.row_top[${row_i}]`,
                    },
                    style: {
                        boxSizing: () => 'border-box',
                        overflow: () => 'hidden',
                    },
                    elem: {
                        label: () => ({
                            prop: {
                                '#width': () => null,
                                '#height': () => null,
                                '#alignHor': () => $$.$me_align.center,
                                '#ofsVer': $$.$me_atom2_prop([`<<.row_angle[${row_i}]`, '.#height', '<.#height'], ({ masters: [angle, height_own, height_parent] }) => {
                                    const result = Math.floor(Math.pow(Math.cos(angle * Math.PI / 180), 2) *
                                        (height_parent - height_own) / 2);
                                    return result;
                                }),
                                fontSize: '<<.fontSize',
                            },
                            style: {
                                transform: $$.$me_atom2_prop([`<<.row_angle[${row_i}]`], ({ masters: [angle] }) => {
                                    return `rotateX(${angle}deg)`;
                                }),
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop([`<<.row_i_rel[${row_i}]`, '<<.option_ids', '<<.options', '<<.rec_idx'], ({ masters: [row_i_rel, option_ids, options, rec_idx] }) => {
                                    const idx = rec_idx + row_i_rel;
                                    if (!(0 <= idx && idx < option_ids.length))
                                        return '';
                                    const id = option_ids[idx];
                                    return options[id].caption || id;
                                }),
                            },
                        }),
                    },
                }),
                list: $$.$me_atom2_prop(['.СписокБарабан'], ({ masters: [СписокБарабан] }) => !СписокБарабан ? null : {
                    base: $$.$me_list,
                    dispatch: (dispatch_name, dispatch_arg) => {
                        if (dispatch_name == 'row_height_default') {
                            const idx = dispatch_arg.idx;
                            dispatch_arg.val = $$.a('.row_height_min') + (0 < idx && idx < $$.a('.rec_count') - 1 ? 0 :
                                (!idx ? $$.a('.itemMarginTopFirst') : $$.a('.itemMarginBottomLast')) - $$.a('.itemMarginVer'));
                            return true;
                        }
                        return false;
                    },
                    prop: {
                        rec_count: $$.$me_atom2_prop(['<.option_ids'], ({ masters: [ids] }) => ids.length),
                        row_height_min: '<.row_current_height',
                        curtain_kind: () => 'white',
                        header_height: () => 0,
                        provider_tag: $$.$me_atom2_prop([], ({ atom }) => atom.name()),
                        itemMarginTopFirst: '<.itemMarginTopFirst',
                        itemMarginBottomLast: '<.itemMarginBottomLast',
                        itemMarginVer: '<.itemMarginVer',
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                        rec_idx_selected: $$.$me_atom2_prop(['<.value', '<.option_ids'], ({ masters: [id, ids] }) => ids.indexOf(id)),
                        row_i_selected: $$.$me_atom2_prop(['.rec_idx_selected', '.row_i_min', '.row_i_max', '.row_count', '.visible_idx_min', '.visible_idx_max'], ({ masters: [idx, row_i_min, row_i_max, row_count, visible_idx_min, visible_idx_max] }) => {
                            if (idx < 0)
                                return -1;
                            if (row_i_max < 0)
                                return -1;
                            if (!(visible_idx_min <= idx && idx <= visible_idx_max))
                                return -1;
                            return (row_i_min + (idx - visible_idx_min)) % row_count;
                        }),
                        header_content: () => ({}),
                        row_content: $$.$me_atom2_prop({ keys: ['.row_i'] }, ({ key: [row_i] }) => ({
                            base: row,
                            prop: {
                                row_i: () => row_i,
                                rec_idx: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.row_i', '<<.row_i_min', '<<.row_i_max'], ({ masters: [row_i, row_i_min, row_i_max] }) => $$.$me_list_row_i_out_of_range_is(row_i, row_i_min, row_i_max) ? [] : [`<<.rec_idx[${row_i}]`]), ({ len, masters: [rec_idx] }) => !len ? -1 : rec_idx),
                                id: $$.$me_atom2_prop(['<<<.option_ids', `.rec_idx`, '<<.rec_count'], ({ masters: [ids, idx, rec_count] }) => {
                                    return !~idx || idx >= rec_count ? '' : ids[idx];
                                }),
                                fontSize: '<<<.fontSize',
                                options: '<<<.options',
                                rec_count: '<<.rec_count',
                                itemMarginTopFirst: '<<.itemMarginTopFirst',
                                itemMarginBottomLast: '<<.itemMarginBottomLast',
                                itemMarginVer: '<<.itemMarginVer',
                            },
                            event: {
                                clickOrTap: () => {
                                    $$.a('<<<.value', $$.a('.id'));
                                    $$.a.dispatch('<<<', null, 'didSelect');
                                    return true;
                                },
                            },
                            style: {
                                background: () => 'white',
                            },
                        })),
                    },
                    elem: {
                        header: () => null,
                        cursor: $$.$me_atom2_prop(['.row_i_selected', '.rec_idx_selected'], ({ masters: [row_i_selected, rec_idx_selected] }) => row_i_selected < 0 ? null : {
                            prop: {
                                '#height': '<<.row_current_height',
                                '#ofsVer': rec_idx_selected ?
                                    `<.row_top[${row_i_selected}]` :
                                    $$.$me_atom2_prop([`<.row_top[${row_i_selected}]`, '<.itemMarginTopFirst'], $$.$me_atom2_prop_compute_fn_sum()),
                            },
                            style: {
                                borderTop: () => '1px solid #D5D5D3',
                                borderBottom: () => '1px solid #D5D5D3',
                                boxSizing: () => 'border-box',
                            },
                        })
                    },
                }),
            },
            style: {
                perspective: () => '900px',
                background: () => 'white',
            },
        };
        const ear = {
            prop: {
                '#height': () => null,
                '#width': () => null,
                '#cursor': () => 'pointer',
                '#ofsVer': $$.$me_atom2_prop(['.#height'], ({ masters: [height] }) => -height),
                captions: $$.$me_atom2_prop_abstract(),
            },
            style: {
                padding: () => 8,
                paddingLeft: () => 16,
                paddingRight: () => 16,
                color: () => 'rgb(0, 112, 164)',
                userSelect: () => 'none',
                background: () => 'rgb(217, 220, 226)',
                borderTop: () => '1px solid #bdc3d1',
                borderLeft: () => '1px solid #bdc3d1',
                borderRight: () => '1px solid #bdc3d1',
                borderTopLeftRadius: () => '4px',
                borderTopRightRadius: () => '4px',
            },
            dom: {
                innerText: $$.$me_atom2_prop(['.isOn', '.captions'], ({ masters: [isOn, captions] }) => isOn ? captions[1] : captions[0]),
            },
            event: {
                clickOrTap: () => {
                    $$.a('.isOn', !$$.a('.isOn'));
                    return true;
                },
            },
        };
        const row = {
            prop: {
                '#cursor': () => 'pointer',
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
            },
            control: {
                label: () => ({
                    base: $$.$me_label,
                    prop: {
                        fontSize: '<.fontSize',
                        '#width': '<.#width',
                        '#height': '<.#height',
                        alignVer: () => $$.$me_align.center,
                        alignHor: () => $$.$me_align.center,
                        '#ofsVer': $$.$me_atom2_prop([`<.rec_idx`, '<.rec_count', '<.itemMarginTopFirst', '<.itemMarginBottomLast', '<.itemMarginVer'], ({ len, masters: [rec_idx, rec_count, itemMarginTopFirst, itemMarginBottomLast, itemMarginVer] }) => {
                            if (!~rec_idx)
                                return 0;
                            const result = (!rec_idx ? +(itemMarginTopFirst - itemMarginVer) / 2 :
                                rec_idx == rec_count - 1 ? -(itemMarginBottomLast - itemMarginVer) / 2 :
                                    0);
                            return result;
                        }),
                        paddingHor: () => 8,
                        text: $$.$me_atom2_prop([`<.rec_idx`, '<.options'], ({ masters: [rec_idx, options] }) => {
                            if (!~rec_idx)
                                return '';
                            const id = Object.keys(options)[rec_idx];
                            return options[id].caption || id;
                        }),
                    },
                })
            },
        };
        let timer;
        let prevDeltaY;
        function wheel(deltaY) {
            if (timer != null)
                clearTimeout(timer);
            const prop_ofs = $$.a.get('.ofs');
            const prop_ofs_rem = $$.a.get('.ofs_rem');
            timer = setTimeout(() => {
                timer = null;
                const ofs_rem = prop_ofs_rem.value();
                if (!ofs_rem)
                    return;
                prop_ofs.value($$.$me_atom2_anim({ to: prop_ofs.value() - ofs_rem, duration: 100 }));
            }, 100);
            const min = -($$.a('.option_ids').length - 1) * $$.a('.row_current_height');
            prop_ofs.value(Math.min(0, Math.max(min, prop_ofs.value() - deltaY)));
            return true;
        }
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//iospicker.js.map
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
                height: $$.$me_atom2_prop(['.direction', '.size', '.k'], ({ masters: [direction, size, k] }) => direction == $$.$me_rect_sides_enum.bottom || direction == $$.$me_rect_sides_enum.top ?
                    size :
                    Math.round(size * k)),
                width: $$.$me_atom2_prop(['.direction', '.size', '.k'], ({ masters: [direction, size, k] }) => direction == $$.$me_rect_sides_enum.left || direction == $$.$me_rect_sides_enum.right ?
                    size :
                    Math.round(size * k)),
                '#width': () => 0,
                '#height': () => 0,
            },
            style: {
                borderTop: $$.$me_atom2_prop(['.direction', '.height', '.color'], ({ masters: [direction, height, color] }) => direction == $$.$me_rect_sides_enum.top ? '' :
                    direction == $$.$me_rect_sides_enum.bottom ? `${height}px solid ${color}` :
                        `${height / 2}px solid transparent`),
                borderLeft: $$.$me_atom2_prop(['.direction', '.width', '.color'], ({ masters: [direction, width, color] }) => direction == $$.$me_rect_sides_enum.left ? '' :
                    direction == $$.$me_rect_sides_enum.right ? `${width}px solid ${color}` :
                        `${width / 2}px solid transparent`),
                borderRight: $$.$me_atom2_prop(['.direction', '.width', '.color'], ({ masters: [direction, width, color] }) => direction == $$.$me_rect_sides_enum.right ? '' :
                    direction == $$.$me_rect_sides_enum.left ? `${width}px solid ${color}` :
                        `${width / 2}px solid transparent`),
                borderBottom: $$.$me_atom2_prop(['.direction', '.height', '.color'], ({ masters: [direction, height, color] }) => direction == $$.$me_rect_sides_enum.bottom ? '' :
                    direction == $$.$me_rect_sides_enum.top ? `${height}px solid ${color}` :
                        `${height / 2}px solid transparent`),
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
        let instances;
        $$.$nl_picker = {
            dispatch: (dispatch_name, dispatch_arg) => {
                if (dispatch_name == 'hide' && $$.a('.instance') != null) {
                    $$.a('.instance', null);
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
                    const prop_itemMarginTopFirst = $$.a.get('.itemMarginTopFirst');
                    const prop_itemMarginBottomLast = $$.a.get('.itemMarginBottomLast');
                    const prop_itemMarginVer = $$.a.get('.itemMarginVer');
                    const prop_options = $$.a.get('.options');
                    const prop_option_ids = $$.a.get('.option_ids');
                    const prop_maxDrodownCount = $$.a.get('.maxDrodownCount');
                    const prop_clientRect = $$.a.get('.#clientRect');
                    const prop_height = $$.a.get('.#height');
                    const prop_fontSize = $$.a.get('.fontSize');
                    const prop_value = $$.a.get('.value');
                    const prop_isDropdown = $$.a.get('.isDropdown');
                    const prop_borderRadius = $$.a.get('.style.borderRadius');
                    const prop_border = $$.a.get('.style.border');
                    const prop_zIndex = $$.a.get('.#zIndex');
                    const prop_isTouch = $$.a.get('.isTouch');
                    const list = $$.a('.isTouch') ?
                        new $$.$me_atom2_elem({
                            tail: 'nl_picker_list' + id,
                            parent: $$.a.get('/@app'),
                            cnf: {
                                base: $$.$nl_iospicker,
                                dispatch: (dispatch_name, dispatch_arg) => {
                                    if (dispatch_arg == 'didSelect') {
                                        prop_isDropdown.value(false);
                                        return true;
                                    }
                                    console.error({ dispatch_name, dispatch_arg });
                                    return false;
                                },
                                prop: {
                                    options: prop_options.name(),
                                    value: $$.$me_atom2_prop([prop_value.name()], null, ({ val }) => {
                                        prop_value.value(val);
                                    }),
                                    '#ofsHor': $$.$me_atom2_prop(['.#width', '/.#viewportWidth'], ({ masters: [width, viewportWidth] }) => (viewportWidth - width) / 2),
                                    '#ofsVer': $$.$me_atom2_prop(['.#height', '/.#viewportHeight'], ({ masters: [width, viewportWidth] }) => (viewportWidth - width) / 2),
                                    '#zIndex': $$.$me_atom2_prop([prop_zIndex.name()], ({ masters: [zIndex] }) => zIndex + 1),
                                },
                                style: {
                                    boxShadow: () => '0 4px 8px 0 rgba(0, 0, 0, 0.35)',
                                },
                                event: {
                                    mousedown: p => p.isInRect(p.event.clientX, p.event.clientY),
                                    touchstart: p => p.isInRect(p.event.touches[0].clientX, p.event.touches[0].clientY),
                                },
                            }
                        }) :
                        new $$.$me_atom2_elem({
                            tail: 'nl_picker_list' + id,
                            parent: $$.a.get('/@app'),
                            cnf: {
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
                                    '#height': $$.$me_atom2_prop([prop_options.name(), prop_maxDrodownCount.name(), prop_clientRect.name(), '/.#viewportHeight', '.row_height_min', prop_itemMarginTopFirst.name(), prop_itemMarginBottomLast.name(), prop_itemMarginVer.name()], ({ masters: [options, maxDropdownCount, clientRect, viewportHeight, height, itemMarginTopFirst, itemMarginBottomLast, itemMarginVer] }) => Math.max(0, Math.min(Object.keys(options).length, maxDropdownCount, Math.floor((viewportHeight - clientRect.bottom) / height))) * height + (itemMarginTopFirst - itemMarginVer) + (itemMarginBottomLast - itemMarginVer)),
                                    '#width': $$.$me_atom2_prop([prop_clientRect.name()], ({ masters: [clientRect] }) => clientRect.right - clientRect.left),
                                    '#ofsHor': $$.$me_atom2_prop([prop_clientRect.name()], ({ masters: [clientRect] }) => clientRect.left),
                                    '#ofsVer': $$.$me_atom2_prop([prop_clientRect.name()], ({ masters: [clientRect] }) => clientRect.bottom),
                                    '#isHover': () => false,
                                    rec_count: $$.$me_atom2_prop([prop_option_ids.name()], ({ masters: [ids] }) => ids.length),
                                    row_height_min: prop_height.name(),
                                    curtain_kind: () => 'white',
                                    header_height: () => 0,
                                    provider_tag: $$.$me_atom2_prop([], ({ atom }) => atom.name()),
                                    header_content: () => ({}),
                                    row_content: $$.$me_atom2_prop({ keys: ['.row_i'] }, ({ key: [row_i] }) => ({
                                        base: row,
                                        prop: {
                                            row_i: () => row_i,
                                            rec_idx: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.row_i', '<<.row_i_min', '<<.row_i_max'], ({ masters: [row_i, row_i_min, row_i_max] }) => $$.$me_list_row_i_out_of_range_is(row_i, row_i_min, row_i_max) ? [] : [`<<.rec_idx[${row_i}]`]), ({ len, masters: [rec_idx] }) => !len ? -1 : rec_idx),
                                            id: $$.$me_atom2_prop([prop_option_ids.name(), `.rec_idx`, '<<.rec_count'], ({ masters: [ids, idx, rec_count] }) => {
                                                return !~idx || idx >= rec_count ? '' : ids[idx];
                                            }),
                                            rec_count: '<<.rec_count',
                                            fontSize: prop_fontSize.name(),
                                            itemMarginTopFirst: prop_itemMarginTopFirst.name(),
                                            itemMarginBottomLast: prop_itemMarginBottomLast.name(),
                                            itemMarginVer: prop_itemMarginVer.name(),
                                            options: prop_options.name(),
                                            '#isHover': () => false,
                                        },
                                        event: {
                                            clickOrTap: () => {
                                                prop_value.value($$.a('.id'));
                                                prop_isDropdown.value(false);
                                                return true;
                                            },
                                        },
                                        style: {
                                            background: () => 'white',
                                        },
                                    })),
                                    '#zIndex': $$.$me_atom2_prop([prop_zIndex.name()], ({ masters: [zIndex] }) => zIndex + 1),
                                    row_cursor: () => '',
                                    '#order': () => ['row', 'cursor'],
                                },
                                elem: {
                                    header: () => null,
                                    cursor: () => ({
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
                                    background: () => 'white',
                                    borderRadius: prop_borderRadius.name(),
                                    border: $$.$me_atom2_prop([
                                        prop_border.name()
                                    ], ({ masters: [border] }) => 'solid 1px #bdc3d1'),
                                    boxSizing: () => 'border-box',
                                    boxShadow: () => '0 8px 12px 0 rgba(0, 0, 0, 0.5)',
                                },
                            },
                        });
                    $$.a('.instance', list);
                }
                return true;
            },
            prop: {
                options: $$.$me_atom2_prop_abstract(),
                value: $$.$me_atom2_prop(['.option_ids'], ({ masters: [ids] }) => ids[0]),
                maxDrodownCount: $$.$me_atom2_prop(['.isTouch'], ({ masters: [isTouch] }) => isTouch ? 9 : Infinity),
                instance: $$.$me_atom2_prop([], () => null, ({ val, prev }) => {
                    if (!val && prev) {
                        instances.delete(prev);
                        prev.destroy();
                    }
                }),
                isTouch: '/.#isTouch',
                option_ids: $$.$me_atom2_prop_keys(['.options']),
                '#cursor': () => 'pointer',
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                itemMarginTopFirst: () => 4,
                itemMarginBottomLast: () => 4,
                itemMarginVer: () => 0,
                isDropdown: $$.$me_atom2_prop(['.#visible'], () => false, ({ val, prev }) => {
                    if (val) {
                        $$.a.dispatch('', 'show');
                    }
                    else if (prev) {
                        $$.a.dispatch('', 'hide');
                    }
                }),
            },
            style: {
                borderRadius: () => 3,
                border: $$.$me_atom2_prop(['.isDropdown'], ({ masters: [isDropdown] }) => (!isDropdown ?
                    'solid 1px #bdc3d1' :
                    'solid 1px #313745')),
                boxSizing: () => 'border-box',
                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                background: () => 'white',
                userSelect: () => 'none',
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
            elem: {
                triangle: () => ({
                    base: $$.$me_triangle,
                    prop: {
                        '#alignHor': () => $$.$me_align.right,
                        marginRight: () => 9,
                        '#ofsHor': $$.$me_atom2_prop(['.size', '.marginRight'], $$.$me_atom2_prop_compute_fn_sum()),
                        '#ofsVer': () => -3,
                        '#alignVer': () => $$.$me_align.center,
                        size: () => 7,
                        color: () => '#444956',
                        k: () => 9 / 7,
                    },
                }),
                text: () => ({
                    prop: {
                        fontSize: '<.fontSize',
                        '#height': () => null,
                        '#alignVer': () => $$.$me_align.center,
                        '#ofsVer': () => -1,
                        '#ofsHor': () => 8,
                        '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor', '.#ofsHor', '<@triangle.size', '<@triangle.marginRight'], $$.$me_atom2_prop_compute_fn_diff()),
                    },
                    style: {
                        whiteSpace: () => 'nowrap',
                        overflow: () => 'hidden',
                        textOverflow: () => 'ellipses',
                    },
                    dom: {
                        innerText: $$.$me_atom2_prop(['<.value', '<.options'], ({ masters: [id, options] }) => options[id].caption || id),
                    },
                }),
            },
        };
        const row = {
            prop: {
                '#cursor': () => 'pointer',
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                row_cursor_src: $$.$me_atom2_prop(['.#isHover', '.row_i'], ({ masters: [isHover, row_i] }) => !isHover ? '' : row_i, ({ atom, val }) => {
                    $$.$nl_picker_cursor({ origin: atom, val: val });
                }),
            },
            control: {
                label: () => ({
                    base: $$.$me_label,
                    prop: {
                        fontSize: '<.fontSize',
                        '#width': '<.#width',
                        '#height': '<.#height',
                        alignVer: () => $$.$me_align.center,
                        '#ofsVer': $$.$me_atom2_prop([`<.rec_idx`, '<.rec_count', '<.itemMarginTopFirst', '<.itemMarginBottomLast', '<.itemMarginVer'], ({ len, masters: [rec_idx, rec_count, itemMarginTopFirst, itemMarginBottomLast, itemMarginVer] }) => {
                            if (!~rec_idx)
                                return 0;
                            const result = (!rec_idx ? +(itemMarginTopFirst - itemMarginVer) / 2 :
                                rec_idx == rec_count - 1 ? -(itemMarginBottomLast - itemMarginVer) / 2 :
                                    0);
                            return result;
                        }),
                        paddingHor: () => 8,
                        text: $$.$me_atom2_prop([`<.rec_idx`, '<.options'], ({ masters: [rec_idx, options] }) => {
                            if (!~rec_idx)
                                return '';
                            const id = Object.keys(options)[rec_idx];
                            return options[id].caption || id;
                        }),
                    },
                })
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
        let instances;
        $$.$nl_pickermulti = {
            dispatch: (dispatch_name, dispatch_arg) => {
                if (dispatch_name == 'hide' && $$.a('.instance') != null) {
                    $$.a('.instance', null);
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
                    const prop_itemMarginTopFirst = $$.a.get('.itemMarginTopFirst');
                    const prop_itemMarginBottomLast = $$.a.get('.itemMarginBottomLast');
                    const prop_itemMarginVer = $$.a.get('.itemMarginVer');
                    const prop_options = $$.a.get('.options');
                    const prop_option_ids = $$.a.get('.option_ids');
                    const prop_maxDrodownCount = $$.a.get('.maxDrodownCount');
                    const prop_clientRect = $$.a.get('.#clientRect');
                    const prop_height = $$.a.get('.#height');
                    const prop_fontSize = $$.a.get('.fontSize');
                    const prop_value = $$.a.get('.value');
                    const prop_isDropdown = $$.a.get('.isDropdown');
                    const prop_borderRadius = $$.a.get('.style.borderRadius');
                    const prop_border = $$.a.get('.style.border');
                    const prop_zIndex = $$.a.get('.#zIndex');
                    const prop_isTouch = $$.a.get('.isTouch');
                    const prop_row_height_min = $$.a.get('.row_height_min');
                    const isTouch = prop_isTouch.value();
                    const list = new $$.$me_atom2_elem({
                        tail: 'nl_pickermulti_list' + id,
                        parent: $$.a.get('/@app'),
                        cnf: {
                            base: $$.$me_list,
                            dispatch: (dispatch_name, dispatch_arg) => {
                                if (dispatch_name == 'row_height_default') {
                                    const idx = dispatch_arg.idx;
                                    dispatch_arg.val = $$.a('.row_height_min') + (0 < idx && idx < $$.a('.rec_count') - 1 ? 0 :
                                        (!idx ? $$.a('.itemMarginTopFirst') : $$.a('.itemMarginBottomLast')) - $$.a('.itemMarginVer'));
                                    return true;
                                }
                                return false;
                            },
                            prop: {
                                options: prop_options.name(),
                                value: $$.$me_atom2_prop([prop_value.name()], null, ({ val }) => {
                                    prop_value.value(val, true);
                                }),
                                '#ofsHor': !isTouch ?
                                    $$.$me_atom2_prop([prop_clientRect.name()], ({ masters: [clientRect] }) => clientRect.left) :
                                    $$.$me_atom2_prop(['.#width', '/.#viewportWidth'], ({ masters: [width, viewportWidth] }) => (viewportWidth - width) / 2),
                                '#ofsVer': !isTouch ?
                                    $$.$me_atom2_prop([prop_clientRect.name()], ({ masters: [clientRect] }) => clientRect.bottom)
                                    : $$.$me_atom2_prop(['.#height', '/.#viewportHeight'], ({ masters: [width, viewportWidth] }) => (viewportWidth - width) / 2),
                                '#zIndex': $$.$me_atom2_prop([prop_zIndex.name()], ({ masters: [zIndex] }) => zIndex + 1),
                                '#width': isTouch ? () => 374 :
                                    $$.$me_atom2_prop([prop_clientRect.name()], ({ masters: [clientRect] }) => clientRect.right - clientRect.left),
                                maxDropdownCount: () => 12,
                                '#height': $$.$me_atom2_prop(isTouch ?
                                    ['.option_ids', '.maxDropdownCount', '.row_height_min', '.itemMarginTopFirst', '.itemMarginBottomLast', '.itemMarginVer'] :
                                    ['.option_ids', '.maxDropdownCount', '/.#viewportHeight', prop_clientRect.name(), '.row_height_min', '.itemMarginTopFirst', '.itemMarginBottomLast', '.itemMarginVer'], ({ len, masters }) => {
                                    if (isTouch) {
                                        const [option_ids, maxDropdownCount, row_height_min, itemMarginTopFirst, itemMarginBottomLast, itemMarginVer] = masters;
                                        const rec_count = option_ids.length;
                                        const max = maxDropdownCount;
                                        const result = rec_count > max ?
                                            max * row_height_min :
                                            rec_count * row_height_min + itemMarginTopFirst + itemMarginBottomLast - 2 * itemMarginVer;
                                        return result;
                                    }
                                    else {
                                        const minMargin = 10;
                                        const [option_ids, maxDropdownCount, viewportHeight, clientRect, row_height_min, itemMarginTopFirst, itemMarginBottomLast, itemMarginVer] = masters;
                                        const correction = (itemMarginTopFirst - itemMarginVer) + (itemMarginBottomLast - itemMarginVer);
                                        const result = Math.max(0, Math.min(option_ids.length, maxDropdownCount, Math.floor((viewportHeight - clientRect.bottom - correction - minMargin) / row_height_min))) * row_height_min + correction;
                                        return result;
                                    }
                                }),
                                fontSize: !isTouch ?
                                    $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)) :
                                    $$.$me_atom2_prop(['.row_height_min'], $$.$me_atom2_prop_compute_fn_mul(22 / 38)),
                                option_ids: $$.$me_atom2_prop_keys(['.options']),
                                rec_count: $$.$me_atom2_prop(['.option_ids'], ({ masters: [ids] }) => ids.length),
                                row_height_min: prop_row_height_min.name(),
                                curtain_kind: () => 'white',
                                header_height: () => 0,
                                provider_tag: $$.$me_atom2_prop([], ({ atom }) => atom.name()),
                                itemMarginTopFirst: prop_itemMarginTopFirst.name(),
                                itemMarginBottomLast: prop_itemMarginBottomLast.name(),
                                itemMarginVer: prop_itemMarginVer.name(),
                                rec_idx_selected: $$.$me_atom2_prop(['.value', '.option_ids'], ({ masters: [id, ids] }) => [...id].map((id) => ids.indexOf(id)).filter((idx) => ~idx)),
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
                                    base: row,
                                    prop: {
                                        isTouch: prop_isTouch.name(),
                                        row_i: () => row_i,
                                        rec_idx: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<<.row_i_min', '<<.row_i_max'], ({ masters: [row_i_min, row_i_max] }) => $$.$me_list_row_i_out_of_range_is(+row_i, row_i_min, row_i_max) ? [] : [`<<.rec_idx[${row_i}]`]), ({ len, masters: [rec_idx] }) => !len ? -1 : rec_idx),
                                        id: $$.$me_atom2_prop(['<<.option_ids', `.rec_idx`, '<<.rec_count'], ({ masters: [ids, idx, rec_count] }) => {
                                            return !~idx || idx >= rec_count ? '' : ids[idx];
                                        }),
                                        isSelected: $$.$me_atom2_prop(['<<.row_i_selected'], ({ masters: [row_i_selected] }) => !!~row_i_selected.indexOf(+row_i)),
                                        fontSize: '<<.fontSize',
                                        options: '<<.options',
                                        rec_count: '<<.rec_count',
                                        itemMarginTopFirst: '<<.itemMarginTopFirst',
                                        itemMarginBottomLast: '<<.itemMarginBottomLast',
                                        itemMarginVer: '<<.itemMarginVer',
                                    },
                                    event: {
                                        clickOrTap: () => {
                                            const value = $$.a('<<.value');
                                            const id = $$.a('.id');
                                            if (value.has(id)) {
                                                value.delete(id);
                                            }
                                            else {
                                                value.add(id);
                                            }
                                            $$.a('<<.value', value, true);
                                            return true;
                                        },
                                    },
                                    style: {
                                        background: () => 'white',
                                    },
                                })),
                                row_cursor: () => '',
                                '#order': () => ['row', 'cursor'],
                            },
                            elem: {
                                header: () => null,
                                cursor: () => isTouch ? null : {
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
                                },
                            },
                            style: {
                                boxShadow: () => '0 4px 8px 0 rgba(0, 0, 0, 0.35)',
                                background: () => 'white',
                            },
                            event: {
                                mousedown: p => p.isInRect(p.event.clientX, p.event.clientY),
                                touchstart: p => p.isInRect(p.event.touches[0].clientX, p.event.touches[0].clientY),
                            },
                        }
                    });
                    $$.a('.instance', list);
                }
                return true;
            },
            prop: {
                options: $$.$me_atom2_prop_abstract(),
                value: $$.$me_atom2_prop_abstract(),
                maxDrodownCount: $$.$me_atom2_prop(['.isTouch'], ({ masters: [isTouch] }) => isTouch ? 9 : Infinity),
                instance: $$.$me_atom2_prop([], () => null, ({ val, prev }) => {
                    if (!val && prev) {
                        instances.delete(prev);
                        prev.destroy();
                    }
                }),
                isTouch: '/.#isTouch',
                none: () => 'ничего не выбрано',
                option_ids: $$.$me_atom2_prop_keys(['.options']),
                '#cursor': () => 'pointer',
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                itemMarginTopFirst: $$.$me_atom2_prop(['.isTouch'], ({ masters: [isTouch] }) => isTouch ? 16 : 4),
                itemMarginBottomLast: $$.$me_atom2_prop(['.isTouch'], ({ masters: [isTouch] }) => isTouch ? 16 : 4),
                itemMarginVer: () => 0,
                row_height_min: $$.$me_atom2_prop(['.isTouch'], ({ masters: [isTouch] }) => isTouch ? 38 : 24),
                isDropdown: $$.$me_atom2_prop(['.#visible'], () => false, ({ val, prev }) => {
                    if (val) {
                        $$.a.dispatch('', 'show');
                    }
                    else if (prev) {
                        $$.a.dispatch('', 'hide');
                    }
                }),
            },
            style: {
                borderRadius: () => 3,
                border: $$.$me_atom2_prop(['.isDropdown'], ({ masters: [isDropdown] }) => (!isDropdown ?
                    'solid 1px #bdc3d1' :
                    'solid 1px #313745')),
                boxSizing: () => 'border-box',
                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                background: () => 'white',
                userSelect: () => 'none',
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
            elem: {
                triangle: () => ({
                    base: $$.$me_triangle,
                    prop: {
                        '#alignHor': () => $$.$me_align.right,
                        marginRight: () => 9,
                        '#ofsHor': $$.$me_atom2_prop(['.size', '.marginRight'], $$.$me_atom2_prop_compute_fn_sum()),
                        '#ofsVer': () => -3,
                        '#alignVer': () => $$.$me_align.center,
                        size: () => 7,
                        color: () => '#444956',
                        k: () => 9 / 7,
                    },
                }),
                text: () => ({
                    prop: {
                        fontSize: '<.fontSize',
                        '#height': () => null,
                        '#alignVer': () => $$.$me_align.center,
                        '#ofsVer': () => -1,
                        '#ofsHor': () => 8,
                        '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor', '.#ofsHor', '<@triangle.size', '<@triangle.marginRight'], $$.$me_atom2_prop_compute_fn_diff()),
                    },
                    style: {
                        whiteSpace: () => 'nowrap',
                        overflow: () => 'hidden',
                        textOverflow: () => 'ellipses',
                    },
                    dom: {
                        innerText: $$.$me_atom2_prop(['<.value', '<.options', '<.option_ids', '<.none'], ({ masters: [value, options, option_ids, none] }) => {
                            let result = none;
                            if (value.size) {
                                const id = [...value].sort((valA, valB) => option_ids.indexOf(valA) - option_ids.indexOf(valB))[0];
                                result = $$.$me_option_caption_text(id, options, value);
                                if (value.size > 1)
                                    result += ' и еще ' + (value.size - 1);
                            }
                            return result;
                        }),
                    },
                }),
            },
        };
        const row = {
            prop: {
                '#cursor': () => 'pointer',
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                row_cursor_src: $$.$me_atom2_prop(['.isTouch', '.#isHover', '.row_i'], ({ masters: [isTouch, isHover, row_i] }) => isTouch || !isHover ? '' : row_i, ({ atom, val }) => {
                    $$.$nl_pickermulti_cursor({ origin: atom, val: val });
                }),
            },
            control: {
                label: () => ({
                    base: $$.$me_label,
                    prop: {
                        fontSize: '<.fontSize',
                        '#width': '<.#width',
                        '#height': '<.#height',
                        alignVer: () => $$.$me_align.center,
                        alignHor: $$.$me_atom2_prop(['<.isTouch'], ({ masters: [isTouch] }) => isTouch ? $$.$me_align.center : $$.$me_align.left),
                        paddingLeft: $$.$me_atom2_prop(['<.isTouch', '.fontSize'], ({ masters: [isTouch, fontSize] }) => isTouch ? 0 : 2 * fontSize),
                        '#ofsVer': $$.$me_atom2_prop([`<.rec_idx`, '<.rec_count', '<.itemMarginTopFirst', '<.itemMarginBottomLast', '<.itemMarginVer'], ({ len, masters: [rec_idx, rec_count, itemMarginTopFirst, itemMarginBottomLast, itemMarginVer] }) => {
                            if (!~rec_idx)
                                return 0;
                            const result = (!rec_idx ? +(itemMarginTopFirst - itemMarginVer) / 2 :
                                rec_idx == rec_count - 1 ? -(itemMarginBottomLast - itemMarginVer) / 2 :
                                    0);
                            return result;
                        }),
                        paddingHor: () => 8,
                        text: $$.$me_atom2_prop([`<.rec_idx`, '<.options'], ({ masters: [rec_idx, options] }) => {
                            if (!~rec_idx)
                                return '';
                            const id = Object.keys(options)[rec_idx];
                            return options[id].caption || id;
                        }),
                        isSelected: '<.isSelected',
                    },
                    render: p => {
                        if (!$$.a('.isSelected'))
                            return;
                        const fontSize = $$.a('.fontSize');
                        const h = fontSize * .9;
                        const w = h * 1.2;
                        const ctxHeight = h * p.pixelRatio;
                        const ctxWidth = w * p.pixelRatio;
                        const lineWidth = 1;
                        const rec_idx = $$.a(`<.rec_idx`);
                        const rec_count = $$.a('<.rec_count');
                        const itemMarginTopFirst = $$.a('<.itemMarginTopFirst');
                        const itemMarginVer = $$.a('<.itemMarginVer');
                        const itemMarginBottomLast = $$.a('<.itemMarginBottomLast');
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
        };
        $$.$nl_pickermulti_cursor = $$.$me_atom2_async_multi_origin({
            default: '',
            raf_order: 100,
            flush: (row_i, prev, _value) => {
                _value.origin.by_path_s('<<.row_cursor').value(row_i);
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pickermulti.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_stylesheet = {
            prop: {
                styleSheetName: $$.$me_atom2_prop_abstract(),
                styleSheet: $$.$me_atom2_prop(['.className', '.styleSheetName'], ({ masters: [className, styleSheetName] }) => ''),
                styleSheetCommon: () => '',
                instanceId: () => null,
                styleSheet_apply: $$.$me_atom2_prop(['.styleSheetName', '.instanceId', '.styleSheet'], null, ({ val: [styleSheetName, instanceId, innerHTML] }) => {
                    let sheet;
                    const id = styleSheetId(styleSheetName, instanceId);
                    if (!innerHTML) {
                        removeStyleSheet(id);
                    }
                    else if (sheet = document.getElementById(id)) {
                        sheet.innerHTML = innerHTML;
                    }
                    else {
                        sheet = document.createElement('style');
                        sheet.id = id;
                        sheet.innerHTML = innerHTML;
                        let head = document.head || document.getElementsByTagName('head')[0];
                        head.appendChild(sheet);
                    }
                }),
                className: $$.$me_atom2_prop(['.styleSheetName', '.instanceId'], ({ masters: [styleSheetName, instanceId] }) => styleSheetName + '-' + instanceId),
            },
            dom: {
                className: '.className',
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
        const row_height = 30;
        const row_space = 20;
        const prop_common = (def, p) => ({
            row: def.row,
            '#ofsVer': $$.$me_atom2_prop(['.row', '<.row_height', '<.row_space'], ({ masters: [row, row_height, row_space] }) => 13 + row * (row_height + row_space) + (p && p.ofsVer || 0)),
            '#ofsHor': '<.row_left',
            '#height': '<.row_height',
            '#width': '<.row_width',
        });
        $$.$nl_search_panel_param = {
            base: $$.$nl_search_panel,
            prop: {
                ofsHor: () => 0,
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
                common: () => ({
                    base: input_with_button,
                    prop: {
                        '#width': () => 314,
                        '#height': () => row_height,
                        '#ofsHor': () => 16,
                        '#ofsVer': () => 16,
                        placeholder: () => 'Параметры',
                    },
                }),
                tabs: () => ({
                    prop: {
                        '#ofsVer': () => 74,
                        '#height': $$.$me_atom2_prop(['<.#height', '<@found.#height', '.#ofsVer'], $$.$me_atom2_prop_compute_fn_diff()),
                        options: () => ({
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
                                        label: () => 'От станции',
                                        label_width: () => 90,
                                        type: 'picker',
                                        options: () => ({
                                            '': { caption: 'не важно' },
                                            'до 2 мин пешком': {},
                                            'до 5 мин пешком': {},
                                            'до 7 мин пешком': {},
                                            'до 10 мин пешком': {},
                                            'до 12 мин пешком': {},
                                            'до 15 мин пешком': {},
                                            'до 5 мин транспортом': {},
                                        }),
                                    },
                                },
                            },
                            Квартира: {
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
                                            only: { caption: ({ isSelected }) => isSelected ? 'Кроме апартаментов' : 'Кроме' },
                                            except: { caption: ({ isSelected }) => isSelected ? {
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
                                        options: () => ({
                                            'free': { caption: 'Св.планировка' },
                                            'studio': { caption: 'Студия' },
                                            'rmqt1': { caption: '1-комн.' },
                                            'rmqt2': { caption: '2-комн.' },
                                            'rmqt3': { caption: '3-комн.' },
                                            'rmqt4': { caption: '4-комн.' },
                                            'rmqt5': { caption: '5-комн.' },
                                            'rmqt6': { caption: '6+ комн.' },
                                        }),
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
                                    remont: {
                                        row: () => 6,
                                        type: 'pickermulti',
                                        label: () => 'Состояние',
                                        label_width: () => 90,
                                        none: () => 'квартиры не важно',
                                        options: () => ({
                                            'требуется капитальный ремонт': {},
                                            'без отделки': {},
                                            'требуется ремонт': {},
                                            'среднее': {},
                                            'хорошее': {},
                                            'отличное': {},
                                            'евроремонт': {},
                                            'дизайнерский ремонт': {},
                                            'первичная отделка': {},
                                        }),
                                    },
                                    lavatory: {
                                        row: () => 7,
                                        type: 'picker',
                                        label: () => 'Санузел',
                                        label_width: () => 90,
                                        options: () => ({
                                            '0': { caption: 'может быть совмещенным' },
                                            '1': { caption: 'только раздельный' },
                                            '2': { caption: 'не менее 2-х' },
                                            '3': { caption: 'не менее 3-х' },
                                            '4': { caption: 'не менее 4-х' },
                                        }),
                                    },
                                    okna: {
                                        row: () => 8,
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
                                                    width: 90,
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
                                                    width: 90,
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
                                        label_width: () => 90,
                                        diap_space: () => 16,
                                    },
                                    price_per_sq: {
                                        row: () => 3,
                                        type: 'diap',
                                        label: () => 'Цена за м²',
                                        label_width: () => 90,
                                        diap_space: () => 16,
                                    },
                                    'ДинамикаЦены': {
                                        row: () => 4,
                                        type: 'select',
                                        options: () => ({
                                            '0': { caption: ({ isSelected }) => ({ text: 'Все', width: 90 }) },
                                            '1': { caption: ({ isSelected, val }) => val != '2' ? 'Понижение цены' : 'Понижение' },
                                            '2': { caption: ({ isSelected }) => isSelected ? {
                                                    width: 176,
                                                    text: 'Повышение цены',
                                                } : {
                                                    width: 160,
                                                    text: 'Повышение'
                                                } },
                                        }),
                                    },
                                    'БонусАгенту': {
                                        row: () => 5,
                                        type: 'select',
                                        options: () => ({
                                            '0': { caption: ({ isSelected }) => ({ text: 'Все', width: 90 }) },
                                            '1': { caption: ({ isSelected, val }) => val != '2' ? 'Только с бонусом агенту' : 'С бонусом' },
                                            '2': { caption: ({ isSelected }) => isSelected ? {
                                                    width: 176,
                                                    text: 'Без бонуса агенту',
                                                } : {
                                                    width: 160,
                                                    text: 'Без бонуса',
                                                } },
                                        }),
                                    },
                                },
                            },
                            Этаж: {
                                icon: 'icons-8-building',
                                params: {
                                    Этаж: {
                                        row: () => 0,
                                        type: 'diap',
                                        label: () => 'Этаж',
                                        label_width: () => 50,
                                        diap_space: () => 16,
                                    },
                                    ПервыйЭтаж: {
                                        row: () => 1,
                                        type: 'select',
                                        options: () => ({
                                            include: { caption: ({ isSelected }) => isSelected ? {
                                                    width: 230,
                                                    text: 'Можно первый этаж',
                                                } : {
                                                    text: 'Можно',
                                                    width: 100,
                                                } },
                                            exclude: { caption: ({ isSelected, val }) => isSelected ? 'Кроме первого этажа' : 'Кроме' },
                                            only: { caption: ({ isSelected }) => isSelected ? {
                                                    width: 181,
                                                    text: 'Только первый этаж',
                                                } : {
                                                    text: 'Только',
                                                    width: 100,
                                                } },
                                        }),
                                    },
                                    ПоследнийЭтаж: {
                                        row: () => 2,
                                        type: 'select',
                                        options: () => ({
                                            include: { caption: ({ isSelected }) => isSelected ? {
                                                    text: 'Можно последний этаж',
                                                    width: 230,
                                                } : {
                                                    text: 'Можно',
                                                    width: 100,
                                                } },
                                            exclude: { caption: ({ isSelected, val }) => isSelected ? 'Кроме последнего этажа' : 'Кроме' },
                                            only: { caption: ({ isSelected }) => isSelected ? {
                                                    width: 181,
                                                    text: 'Только последний этаж',
                                                } : {
                                                    text: 'Только',
                                                    width: 100,
                                                } },
                                        }),
                                    },
                                },
                            },
                            Дом: {
                                icon: 'icons-8-building',
                                params: {
                                    Этажность: {
                                        row: () => 0,
                                        type: 'diap',
                                        label: () => 'Этажность',
                                        label_width: () => 110,
                                        diap_space: () => 16,
                                    },
                                    Лифт: {
                                        row: () => 1,
                                        type: 'select',
                                        options: () => ({
                                            no_matter: { caption: ({ isSelected }) => isSelected ? 'Можно без лифта' : {
                                                    text: 'Не важно',
                                                    width: 100,
                                                } },
                                            exists: { caption: ({ isSelected, val }) => val != 'only' ? {
                                                    text: 'С лифтом',
                                                    width: isSelected ? null : 100,
                                                } : {
                                                    text: 'Есть',
                                                    width: 60,
                                                }
                                            },
                                            only: { caption: ({ isSelected }) => isSelected ? 'С пассажирским и грузовым лифтом' : {
                                                    text: 'Пасс. + груз.',
                                                    width: 100,
                                                } },
                                        }),
                                    },
                                    КлассЖилья: {
                                        row: () => 2,
                                        type: 'pickermulti',
                                        label: () => 'Класс жилья',
                                        label_width: () => 110,
                                        none: () => 'не важен',
                                        options: () => ({
                                            'эконом': {},
                                            'комфорт': {},
                                            'бизнес': {},
                                            'элитный': {},
                                        }),
                                    },
                                    ТипДома: {
                                        row: () => 3,
                                        type: 'pickermulti',
                                        label: () => 'Тип дома',
                                        label_width: () => 110,
                                        none: () => 'не важен',
                                        options: () => ({
                                            'панельный': {},
                                            'блочный': {},
                                            'монолитный': {},
                                            'монолитно-кирпичный': {},
                                            'кирпичный': {},
                                            'деревянный': {},
                                            'шлакоблоки/шлакобетон': {},
                                            'железобетон': {},
                                            'сталинский': {},
                                        }),
                                    },
                                    СерияДома: {
                                        row: () => 4,
                                        type: 'pickermulti',
                                        label: () => 'Серия дома',
                                        label_width: () => 110,
                                        none: () => 'не важна',
                                        options: () => ({
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
                                        }),
                                    },
                                    ГодПостройки: {
                                        row: () => 5,
                                        type: 'diap',
                                        label: () => 'Год постройки',
                                        label_width: () => 110,
                                        diap_space: () => 16,
                                    },
                                    ПодСнос: {
                                        row: () => 6,
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
                                        row: () => 7,
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
                                            guarded: { caption: ({ isSelected }) => isSelected ? 'Только охраняемая территория' : 'Охраняемая' },
                                            underground: { caption: ({ isSelected }) => isSelected ? 'Только подземная парковка' : 'Подземная' },
                                        })
                                    },
                                },
                            },
                            Объявление: {
                                icon: 'icons-8-create-new-3',
                                params: {
                                    photo: {
                                        row: () => 0,
                                        type: 'select',
                                        options: () => ({
                                            include: { caption: ({ isSelected }) => ({
                                                    width: 60,
                                                    text: 'Все',
                                                }) },
                                            except: { caption: ({ isSelected, val }) => val != 'only' ? 'Только с фото' : {
                                                    text: 'С фото',
                                                } },
                                            only: { caption: ({ isSelected }) => isSelected ? {
                                                    width: 250,
                                                    text: 'Только без фото',
                                                } : {
                                                    width: 145,
                                                    text: 'Без фото',
                                                } },
                                        })
                                    },
                                    video: {
                                        row: () => 1,
                                        type: 'select',
                                        options: () => ({
                                            include: { caption: ({ isSelected }) => ({
                                                    width: 60,
                                                    text: 'Все',
                                                }) },
                                            except: { caption: ({ isSelected, val }) => val != 'only' ? 'Только с видео' : {
                                                    text: 'С видео',
                                                } },
                                            only: { caption: ({ isSelected }) => isSelected ? {
                                                    width: 250,
                                                    text: 'Только без видео',
                                                } : {
                                                    width: 145,
                                                    text: 'Без видео',
                                                } },
                                        })
                                    },
                                    deep: {
                                        row: () => 2,
                                        label: () => 'Глубина поиска',
                                        type: 'deep',
                                    },
                                    ТолькоНовые: {
                                        row: () => 4,
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
                                        row: () => 5,
                                        label: () => 'Источники',
                                        label_width: () => 100,
                                        none: () => 'все',
                                        options: () => ({
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
                                        }),
                                    },
                                    sold: {
                                        row: () => 6,
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
                                },
                            },
                            Детали: {
                                icon: 'icons-8-list',
                                params: {
                                    Примечание: {
                                        row: () => 0,
                                        label: () => 'Поиск по примечанию',
                                        type: 'include_exclude',
                                        label_width: () => 100,
                                    },
                                    Телефоны: {
                                        row: () => 3,
                                        label: () => 'Поиск по телефону',
                                        type: 'include_exclude',
                                        label_width: () => 100,
                                    },
                                },
                            },
                        }),
                        option_ids: $$.$me_atom2_prop_keys(['.options']),
                        option_height: () => 54,
                        option_width: () => 210,
                        option_top: $$.$me_atom2_prop({ keys: ['.option_ids'], masters: ['.option_ids', '.option_height'] }, ({ key: [id], masters: [ids, height] }) => ids.indexOf(id) * height),
                        value: $$.$me_atom2_prop_store({
                            default: () => $$.a('.option_ids')[0],
                            valid: (val) => typeof val == 'string' && ~$$.a('.option_ids').indexOf(val) ? val : null,
                        }),
                        params: $$.$me_atom2_prop(['.value', '.options'], ({ masters: [value, options] }) => options[value].params || {}),
                        param_ids: $$.$me_atom2_prop_keys(['.params']),
                        row_height: () => row_height,
                        row_space: () => row_space,
                        row_left: $$.$me_atom2_prop(['.option_width', '.marginHor'], $$.$me_atom2_prop_compute_fn_sum()),
                        row_width: () => 428,
                        marginHor: () => 32,
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
                                    prop: Object.assign({}, prop_common(def), { options: def.options, value: $$.$me_atom2_prop(['.option_ids'], ({ masters: [ids] }) => ids[0]), no_adjust: def.no_adjust }),
                                };
                            }
                            else if (def.type == 'address') {
                                return {
                                    base: input_with_button,
                                    prop: Object.assign({}, prop_common(def), { placeholder: () => 'Горoд, район, адреc, метро, название ЖК' }),
                                };
                            }
                            else if (def.type == 'picker' || def.type == 'pickermulti') {
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
                                            base: def.type == 'picker' ? $$.$nl_picker : $$.$nl_pickermulti,
                                            prop: {
                                                '#width': !def.label ? '<.#width' : $$.$me_atom2_prop(['<.#width', '<@label.#width'], $$.$me_atom2_prop_compute_fn_diff()),
                                                '#alignHor': () => $$.$me_align.right,
                                                options: def.options,
                                                value: def.type == 'picker' ? null : () => new Set(),
                                                none: def.type == 'picker' ? null : def.none,
                                            },
                                        }),
                                    },
                                };
                            }
                            else if (def.type == 'diap') {
                                return {
                                    base: diap,
                                    prop: Object.assign({}, prop_common(def), { label: def.label, label_width: def.label_width, diap_space: def.diap_space }),
                                };
                            }
                            else if (def.type == 'deep') {
                                return {
                                    prop: Object.assign({}, prop_common(def), { '#height': () => row_height + row_height + row_space }),
                                    elem: {
                                        label: () => ({
                                            prop: {
                                                '#width': '<.#width',
                                                '#ofsVer': () => 14,
                                                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                                                fontWeight: () => 500,
                                            },
                                            dom: {
                                                innerText: def.label,
                                            },
                                        }),
                                        ctrl: () => ({
                                            prop: {
                                                '#height': () => row_height,
                                                '#alignVer': () => $$.$me_align.bottom,
                                            },
                                            elem: {
                                                input: () => ({
                                                    prop: {
                                                        '#width': () => 90,
                                                    },
                                                    style: {
                                                        background: () => 'green',
                                                    },
                                                }),
                                                label: () => ({
                                                    prop: {
                                                        '#width': () => 121,
                                                        '#ofsHor': () => 110,
                                                    },
                                                    style: {
                                                        background: () => 'green',
                                                    },
                                                }),
                                                icon: () => ({
                                                    node: 'img',
                                                    prop: {
                                                        '#alignHor': () => $$.$me_align.right,
                                                        '#ofsVer': () => 2,
                                                        '#width': () => 28,
                                                        '#height': () => 28,
                                                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                                                        '#cursor': () => 'pointer',
                                                    },
                                                    attr: {
                                                        src: () => 'assets/icons-8-today@2x.png',
                                                        draggable: () => false,
                                                    },
                                                    style: {
                                                        filter: () => 'invert(22%) sepia(56%) saturate(3987%) hue-rotate(182deg) brightness(96%) contrast(101%)',
                                                    },
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
                                background: $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? '#0070a4' : 'white'),
                            },
                            elem: {
                                icon: () => ({
                                    node: 'img',
                                    prop: {
                                        '#width': () => 28,
                                        '#height': () => 28,
                                        '#alignVer': () => $$.$me_align.center,
                                        '#ofsHor': () => 16,
                                    },
                                    attr: {
                                        src: $$.$me_atom2_prop(['<<.options'], ({ masters: [options] }) => `assets/${options[id].icon}@2x.png`),
                                        draggable: () => false,
                                    },
                                    style: {
                                        filter: $$.$me_atom2_prop(['<.isSelected'], ({ masters: [isSelected] }) => !isSelected ?
                                            'invert(22%) sepia(56%) saturate(3987%) hue-rotate(182deg) brightness(96%) contrast(101%)' :
                                            'invert(100%) sepia(89%) saturate(0%) hue-rotate(253deg) brightness(112%) contrast(100%)'),
                                    },
                                }),
                                label: () => ({
                                    prop: {
                                        '#ofsHor': () => 61,
                                        '#alignVer': () => $$.$me_align.center,
                                        '#height': () => null,
                                    },
                                    dom: {
                                        innerText: () => id,
                                    },
                                    style: {
                                        color: $$.$me_atom2_prop(['<.isSelected', '.colorText'], ({ masters: [isSelected, colorText] }) => isSelected ? 'white' : colorText),
                                    },
                                }),
                            },
                        })),
                    },
                    style: {},
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
                    base: input,
                    prop: {
                        '#alignHor': () => $$.$me_align.right,
                        '#ofsHor': id == 'max' ? null : $$.$me_atom2_prop(['.#width', '<.diap_space'], $$.$me_atom2_prop_compute_fn_sum()),
                        '#width': $$.$me_atom2_prop(['<.#width', '<.label_width', '<.diap_space'], ({ masters: [width, label_width, diap_space] }) => (width - label_width - diap_space) / 2),
                        placeholder: () => id == 'min' ? 'от' : 'до',
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
                    base: input,
                    prop: {
                        '#width': $$.$me_atom2_prop(['<.#width', '<@label.#width'], $$.$me_atom2_prop_compute_fn_diff()),
                        '#height': () => row_height,
                        '#alignHor': () => $$.$me_align.right,
                    },
                }),
            },
        };
        const input = {
            base: $$.$me_stylesheet,
            node: 'input',
            prop: {
                styleSheetName: () => 'param_input',
                className: '.styleSheetName',
                styleSheet: () => '',
                styleSheetCommon: $$.$me_atom2_prop(['.className'], ({ masters: [className] }) => {
                    return (`
          .${className}::placeholder {
            color: rgba(49,55,69,0.5);
          }
          .${className} {
            border: solid 1px #bdc3d1;
          }
          .${className}:focus {
            outline: none;
            border: 1px solid #313745;
          }
        `);
                }),
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
            },
            style: {
                borderRadius: () => 3,
                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                paddingLeft: () => 8,
                boxSizing: () => 'border-box',
                '-webkit-appearance': () => 'none',
            },
            attr: {
                placeholder: '.placeholder',
            },
            event: {
                clickOrTap: () => {
                    $$.a.curr.node.focus();
                    return true;
                },
                clickOrTapOutside: () => {
                    $$.a.curr.node.blur();
                    return false;
                },
            },
        };
        const input_with_button = {
            elem: {
                input: () => ({
                    base: input,
                    prop: {
                        placeholder: '<.placeholder',
                    },
                }),
                button: () => ({
                    node: 'img',
                    prop: {
                        '#alignHor': () => $$.$me_align.right,
                        '#ofsHor': () => 8,
                        '#alignVer': () => $$.$me_align.center,
                        '#width': () => 16,
                        '#height': () => 16,
                        '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                        '#cursor': () => 'pointer',
                    },
                    attr: {
                        src: () => 'assets/icons-8-plus-2-math@2x.png',
                        draggable: () => false,
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
                        '#ofsHor': $$.$me_atom2_prop(['<.#width', '.width', '<.lambda', '<.paddingHor'], ({ masters: [width_parent, width_own, lambda, paddingHor] }) => paddingHor + Math.round((width_parent - 2 * paddingHor - width_own) * lambda)),
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
                const lambda = .5 + Math.min(.5, (ofsHor - ofsHor_valid) / (width - 2 * $$.a('.paddingHor') - $$.a('@triangle.width')));
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
                        provider_tag: '<.provider_tag',
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
                spinner: $$.$me_atom2_prop(['<.count'], ({ masters: [count] }) => count >= 0 ? null : {
                    base: $$.$me_spinner,
                    prop: {
                        color: () => '#D9DCE2',
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
                '#zIndex': () => 1,
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
                        background: () => 'white',
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
                                        colorBackground: () => '#d8dce3',
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
                                            colorBackground: () => '#F5F8F8',
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
                            prop: Object.assign({}, cell_borders, { colorBackground: () => '#d8dce3' }),
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
                                '#zIndex': () => 1,
                            },
                            control: {
                                cell: $$.$me_atom2_prop({ keys: ['<<<.col_ids'] }, ({ key: [id] }) => ({
                                    base: $$.$me_label,
                                    prop: Object.assign({ '#hidden': $$.$me_atom2_prop([`<<<<.col_left[${id}]`, `<<<<.col_width_actual[${id}]`, `<<<<.col_fixed_width`, `<<<<.#width`, `<<<<.ofsHor`], ({ masters: [col_left, col_width_actual, col_fixed_width, parent_width, ofsHor] }) => ofsHor + col_left > parent_width || ofsHor + col_left + col_width_actual <= col_fixed_width), '#width': `<<<<.col_width_actual[${id}]`, '#ofsHor': `<<<<.col_left[${id}]`, '#height': '<.#height', text: `<<<<.col_caption[${id}]` }, cell_borders, { colorBackground: () => '#d8dce3', align: () => $$.$me_align.center, fontSize: () => 14, paddingHor: () => 4, '#zIndex': () => 2 }),
                                    prop_non_render: {
                                        '#cursor': () => 'pointer',
                                    },
                                    event: {
                                        clickOrTap: () => {
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
                src: () => 'assets/stretch@2x.png',
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
                                    prop: Object.assign({ '#width': '<.#width', '#height': '<.#height' }, cell_borders, { colorBackground: () => '#d8dce3', align: () => $$.$me_align.center, fontSize: () => 14, paddingHor: () => 4, text: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<<<.row_i'], ({ masters: [row_i] }) => [`<<<<<.rec_idx[${row_i}]`])) }),
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
                                    prop: Object.assign({ '#hidden': $$.$me_atom2_prop([`<<<<<<.col_left[${id}]`, `<<<<<<.col_width_actual[${id}]`, `<<<<<<.col_fixed_width`, `<<<<<<.#width`, `<<<<<<.ofsHor`], ({ masters: [col_left, col_width_actual, col_fixed_width, parent_width, ofsHor] }) => ofsHor + col_left > parent_width || ofsHor + col_left + col_width_actual <= col_fixed_width) }, cell_borders, { colorBackground: () => '#F5F8F8', fontSize: () => 14, paddingHor: () => 4, alignVer: () => $$.$me_align.center, alignHor: `<<<<<<.col_align[${id}]`, '#width': `<<<<<<.col_width_actual[${id}]`, '#ofsHor': `<<<<<<.col_left[${id}]`, '#height': '<<<<<<.row_height_min', text: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<<<.row_i'], ({ masters: [row_i] }) => [`<<<<<.cell_text[${row_i}][${id}]`])) }),
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
                    style: {
                        background: () => 'white',
                        boxShadow: () => '0 4px 8px 0 rgba(0, 0, 0, 0.35)',
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
        $$.$nl_button = {
            prop: {
                caption: $$.$me_atom2_prop_abstract(),
                target: $$.$me_atom2_prop_abstract(),
                cmd: () => null,
                '#width': () => 200,
                '#height': () => 40,
                '#cursor': () => 'pointer',
                source: () => null,
                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
            },
            control: {
                label: () => ({
                    base: $$.$me_label,
                    prop: {
                        text: '<.caption',
                        colorText: () => 'white',
                        padding: () => 0,
                        align: () => $$.$me_align.center,
                        '#height': '<.#height',
                        '#width': '<.#width',
                    },
                }),
            },
            style: {
                background: () => '#0070a4',
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
                        background: () => 'white',
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
                            node: 'img',
                            prop: {
                                '#alignHor': () => $$.$me_align.right,
                                '#ofsHor': '<.paddingHor',
                                '#ofsVer': '<.paddingVer',
                                '#width': () => 15,
                                '#height': () => 15,
                                '#zIndex': $$.$me_atom2_prop(['<.#zIndex'], ({ masters: [zIndex] }) => zIndex + 1),
                                '#cursor': () => 'pointer',
                            },
                            attr: {
                                src: () => 'assets/close-btn@2x.png',
                                draggable: () => false,
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
                curtain_kind: () => 'white',
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
                background: () => '#f0f1f4',
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
                background: () => '#d8dce3',
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
            style: {
                userSelect: () => 'none',
            },
            elem: {
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
                            `Показано ${count} предложений`).toUpperCase()),
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
                    style: {
                        userSelect: () => 'none',
                    },
                    attr: {
                        src: () => 'assets/icons-8-filter@2x.png'
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
                grid: $$.$me_atom2_prop(['.mode'], ({ masters: [mode], prev }) => mode != 'ТАБЛИЦА' ? prev || null : {
                    type: '$nl_search_grid',
                    base: $$.$nl_search_grid,
                    prop: {
                        provider: () => $$.a.get('<').path,
                        rec_count: '<.count',
                        row_opens: $$.$me_atom2_prop(['<.order'], ({ masters: [order] }) => order.row_opens || (order.row_opens = new Set())),
                        on_order_changed: $$.$me_atom2_prop(['<.order'], null, ({ val }) => {
                            if (!val)
                                return;
                            const order = val;
                            $$.a.dispatch('', 'set_view', order);
                        }),
                        on_order_changed_and_ready: $$.$me_atom2_prop(['<.order', '.rec_count'], ({ masters: [order, rec_count] }) => rec_count < 0 ? null : [order, rec_count], ({ val }) => {
                            if (!val)
                                return;
                            const [order, rec_count] = val;
                            $$.a.dispatch('@list', 'set_view', order);
                        }),
                        on_change_col_ids: $$.$me_atom2_prop(['.col_ids', '<.order'], null, ({ val: [col_ids, order] }) => {
                            order.col_ids = col_ids;
                        }),
                        on_change_ofsHor: $$.$me_atom2_prop(['.ofsHor', '.col_fixed_width', '<.order'], null, ({ val: [ofsHor, col_fixed_width, order] }) => {
                            order.ofsHor = ofsHor - col_fixed_width;
                        }),
                        on_change_col_width: $$.$me_atom2_prop({ keys: ['.col_ids'], masters: ['.col_width[]', '.cols', '<.order'] }, null, ({ key: [id], val }) => {
                            if (val == null)
                                return;
                            const [width, cols, order] = val;
                            if (width != cols[id].width) {
                                if (!order.col_width)
                                    order.col_width = {};
                                order.col_width[id] = width;
                            }
                        }),
                        on_change_row_i_min: $$.$me_atom2_prop(['@list.row_i_min', '<.order', '.rec_count'], null, ({ val: [row_i_min, order, rec_count] }) => {
                            if (rec_count < 0)
                                return;
                            order.row_i_min = row_i_min;
                        }),
                        on_change_visible_idx_min: $$.$me_atom2_prop(['@list.visible_idx_min', '<.order', '.rec_count'], null, ({ val: [visible_idx_min, order, rec_count] }) => {
                            if (rec_count < 0)
                                return;
                            order.visible_idx_min = visible_idx_min;
                        }),
                        on_change_visible_top: $$.$me_atom2_prop(['@list.visible_top', '<.order', '.rec_count'], null, ({ val: [visible_top, order, rec_count] }) => {
                            if (rec_count < 0)
                                return;
                            order.visible_top = visible_top;
                        }),
                        '#hidden': $$.$me_atom2_prop(['<.mode'], ({ masters: [mode] }) => mode != 'ТАБЛИЦА'),
                        '#width': $$.$me_atom2_prop(['<.#width', '.em'], ({ masters: [width, em] }) => width - 2 * em),
                        '#ofsHor': '.em',
                        '#ofsVer': () => 56,
                        '#height': $$.$me_atom2_prop(['<.height_target', '<.height_anim_is', '.#ofsVer'], ({ masters: [height, height_anim_is, ofsVer], prev }) => {
                            const val = height - ofsVer;
                            const result = prev == null || val > prev || !height_anim_is ? val : prev;
                            return result;
                        }),
                        cols: () => ({
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
                        }),
                    },
                }),
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
//result.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_search_workspace = {
            prop: {
                orders: () => [
                    {
                        id: 'id2',
                        title: 'Заказ 2',
                        params: {
                            rmqt: new Set(['1', '2']),
                        },
                    },
                    {
                        id: 'id1',
                        title: 'Заказ 1',
                        params: {
                            rmqt: new Set(['4', '6+']),
                        },
                    },
                ],
                order_idx: $$.$me_atom2_prop_keys(['.orders']),
                order: $$.$me_atom2_prop({ keys: ['.order_idx'], masters: ['.orders'] }, ({ key: [idx], masters: [orders] }) => orders[idx]),
                order_title: $$.$me_atom2_prop({ keys: ['.order_idx'], masters: ['.order[]'] }, ({ masters: [order] }) => order.title.toUpperCase()),
                selected: $$.$me_atom2_prop_store({
                    default: () => '',
                    valid: (val) => ~$$.a('.order_idx').indexOf(val) ? val : null,
                }),
                param_modes: () => ({
                    ПОЛНЫЙ: {
                        height: 580,
                    },
                    СЖАТЫЙ: {
                        height: 120,
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
                new: $$.$me_atom2_prop(['.selected'], ({ masters: [selected], prev }) => selected ? prev || null : {
                    type: '$nl_search_new',
                    base: $$.$nl_search_new,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => selected),
                        '#ofsVer': '<@tabs.#height',
                        '#height': $$.$me_atom2_prop(['<.#height', '<@tabs.#height'], ({ masters: [height_parent, height_tabs] }) => height_parent - height_tabs),
                    },
                }),
                panelParam: $$.$me_atom2_prop(['.selected'], ({ masters: [selected], prev }) => !selected ? prev || null : {
                    type: '$nl_search_panel_param',
                    base: $$.$nl_search_panel_param,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => !selected),
                        order: $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => !selected ? null : $$.a(`<.order[${selected}]`)),
                        '#ofsVer': '<@tabs.#height',
                        height_target: $$.$me_atom2_prop(['<.param_mode', '<.param_modes'], ({ masters: [mode, modes] }) => modes[mode].height),
                        '#height': $$.$me_atom2_prop(['.height_target'], ({ masters: [to] }) => $$.$me_atom2_anim({ to, duration: 400,
                            path_active: $$.a.get('.height_anim_is').path
                        })),
                        height_anim_is: $$.$me_atom2_prop([], () => false),
                    },
                    style: {
                        overflow: () => 'hidden',
                    },
                }),
                panelResult: $$.$me_atom2_prop(['.selected'], ({ masters: [selected], prev }) => !selected ? prev || null : {
                    type: '$nl_search_panel_result',
                    base: $$.$nl_search_panel_result,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => !selected),
                        order: $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => !selected ? null : $$.a(`<.order[${selected}]`)),
                        mode: $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => !selected ? '' : $$.a(`<.order[${selected}]`).result_mode || 'ТАБЛИЦА', ({ val }) => {
                            if (!val)
                                return;
                            const order = $$.a(`.order`);
                            order.result_mode = val;
                            $$.a(`.order`, order, true);
                        }),
                        ofsVer_target: $$.$me_atom2_prop(['<@panelParam.#ofsVer', '<@panelParam.height_target', '.em'], $$.$me_atom2_prop_compute_fn_sum()),
                        '#ofsVer': $$.$me_atom2_prop(['.ofsVer_target'], ({ masters: [to] }) => $$.$me_atom2_anim({ to, duration: 400 })),
                        height_target: $$.$me_atom2_prop(['<.#height', '.ofsVer_target'], ({ masters: [height, ofsVer] }) => height - ofsVer, ({ val, prev }) => {
                            if (prev != null && val != prev) {
                                $$.a('.height_anim_is', true);
                            }
                        }),
                        '#height': $$.$me_atom2_prop(['.height_target'], ({ masters: [to] }) => $$.$me_atom2_anim({ to, duration: 400,
                            path_active: $$.a.get('.height_anim_is').path
                        })),
                        height_anim_is: $$.$me_atom2_prop([], () => false),
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
        function $nl_app_defaults_init() {
            $$.$me_atom2_entity.root().props({
                em: () => 16,
                colorText: () => '#313745',
                fontFamily: () => '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                fontWeight: () => 400,
                СвернутьРазвернуть: $$.$me_atom2_prop_store({
                    default: () => false,
                    valid: (val) => typeof val == 'boolean' ? val : null,
                }),
                СписокБарабан: $$.$me_atom2_prop_store({
                    default: () => false,
                    valid: (val) => typeof val == 'boolean' ? val : null,
                }),
            });
            $$.$me_atom2_ec.prop_default = Object.assign({}, $$.$me_atom2_ec.prop_default, { em: '/.em', colorText: '/.colorText', fontFamily: '/.fontFamily', fontWeight: '/.fontWeight', fontSize: '.em' });
            $$.$me_atom2_elem.style_default = Object.assign({}, $$.$me_atom2_elem.style_default, { color: '.colorText', fontFamily: '.fontFamily', fontWeight: '.fontWeight', fontSize: '.fontSize' });
        }
        $$.$nl_app_defaults_init = $nl_app_defaults_init;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//defaults.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_app = (rootElem) => {
            $$.$nl_app_defaults_init();
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
                        background: () => '#D9DCE2',
                        touchAction: () => 'none,'
                    },
                    prop: {
                        tapTarget: () => 0,
                        '#order': () => ['menu', 'workspace', 'tapEffect'],
                    },
                    elem: {
                        menu: () => menu,
                        workspace: () => workspace,
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
                search: $$.$me_atom2_prop(['<@menu@list.selected'], ({ masters: [selected], prev }) => selected != 'search' ? prev || null : {
                    type: '$nl_search_workspace',
                    base: $$.$nl_search_workspace,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<<@menu@list.selected'], ({ masters: [selected] }) => selected != 'search'),
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
                    to: isShrinked ? 64 : 290,
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
        const login = {
            prop: {
                '#height': () => 54,
                '#cursor': () => 'pointer',
                'colorBackground': () => '#3c4354',
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
                        '#ofsHor': $$.$me_atom2_prop(['<<.isShrinked'], ({ masters: [isShrinked] }) => $$.$me_atom2_anim({
                            to: isShrinked ? 18 : 16
                        })),
                        '#alignVer': () => $$.$me_align.center,
                    },
                    elem: {
                        icon: () => ({
                            node: 'img',
                            prop: {
                                '#width': () => 20,
                                '#height': () => 22,
                                '#align': () => $$.$me_align.center,
                            },
                            attr: {
                                src: () => 'assets/' + 'icons-8-enter-2' + '@2x.png',
                            },
                            style: {
                                filter: () => 'invert(100%) sepia(89%) saturate(0%) hue-rotate(253deg) brightness(112%) contrast(100%)'
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
                        color: () => 'white',
                    },
                    dom: {
                        innerText: () => 'Авторизация',
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
                        src: $$.$me_atom2_prop(['<<.isShrinked', '<<.isShrinked_animActive'], ({ masters: [isShrinked, isShrinked_animActive] }) => {
                            if (isShrinked_animActive)
                                isShrinked = !isShrinked;
                            return `assets/light-slide-${isShrinked ? 'right' : 'left'}@2x.png`;
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
                    'orders': { title: 'Заказы', icon: 'icons-8-buy' },
                    'clients': { title: 'Клиенты', icon: 'icons-8-meeting', icon_width: 22 },
                    'advs': { title: 'Мои объявления', icon: 'icons-8-resume-website', icon_width: 22, icon_height: 22 },
                    'docs': { title: 'Документы', icon: 'icons-8-wipes' },
                    'users': { title: 'Пользователи', icon: 'icons-8-add-user-group', icon_width: 27 },
                    'feedback': { title: 'Обратная связь', icon: 'icons-8-info-popup', icon_width: 22 },
                    'subscription': { title: 'Подписка', icon: 'icons-8-wallet-copy-2', icon_width: 22, icon_height: 22 },
                    'settings': { title: 'Настройки', icon: 'icons-8-settings' },
                    'sma': { title: 'СМА', icon: 'icons-8-sell-property', icon_width: 26, icon_height: 23 },
                    'history': { title: 'История поиска', icon: 'icons-8-last-hour' },
                    'favorites': { title: 'Избранное', icon: 'icons-8-star', icon_width: 26, icon_height: 25 },
                    'archive': { title: 'Архивные данные', icon: 'icons-8-winrar', icon_height: 22, },
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
                item_title: $$.$me_atom2_prop({ keys: ['.item_id'], masters: ['.item[]'] }, ({ masters: [item] }) => item.title),
                item_icon: $$.$me_atom2_prop({ keys: ['.item_id'], masters: ['.item[]'] }, ({ masters: [item] }) => 'assets/' + item.icon + '@2x.png'),
                item_icon_width: $$.$me_atom2_prop({ keys: ['.item_id'], masters: ['.item[]'] }, ({ masters: [item] }) => item.icon_width || 24),
                item_icon_height: $$.$me_atom2_prop({ keys: ['.item_id'], masters: ['.item[]'] }, ({ masters: [item] }) => item.icon_height || 24),
                item_height: () => 52,
                selected: $$.$me_atom2_prop_store({
                    default: () => '',
                    valid: (val) => typeof val == 'string' ? val : null,
                }),
            },
            style: {
                background: () => 'white',
            },
            elem: {
                item: $$.$me_atom2_prop({ keys: ['.item_id'] }, ({ key: [id] }) => ({
                    prop: {
                        '#ofsVer': `<.item_top[${id}]`,
                        '#height': '<.item_height',
                        '#cursor': () => 'pointer',
                        'isSelected': $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => id == selected),
                        'colorBackground': $$.$me_atom2_prop(['.isSelected', '.#isHover'], ({ masters: [isSelected, isHover] }) => isSelected ? '#0070a4' :
                            isHover ? '#cce2ed' :
                                'white'),
                        'colorText': $$.$me_atom2_prop(['.isSelected', '/.colorText'], ({ masters: [isSelected, color] }) => isSelected ? 'white' : color),
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
                                        filter: $$.$me_atom2_prop(['<<.isSelected'], ({ masters: [isSelected] }) => !isSelected ?
                                            'invert(22%) sepia(56%) saturate(3987%) hue-rotate(182deg) brightness(96%) contrast(101%)' :
                                            'invert(100%) sepia(89%) saturate(0%) hue-rotate(253deg) brightness(112%) contrast(100%)'),
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
                                innerText: `<<.item_title[${id}]`,
                            },
                            style: {
                                color: '<.colorText',
                                whiteSpace: () => 'nowrap',
                                opacity: $$.$me_atom2_prop(['<<<.isShrinked'], ({ masters: [isShrinked] }) => $$.$me_atom2_anim({ to: isShrinked ? 0 : 1 })),
                            },
                        }),
                        separator: $$.$me_atom2_prop(['<.item_id', '.isSelected'], ({ masters: [ids, isSelected] }) => isSelected || !ids.indexOf(id) ? null : {
                            prop: {
                                '#hidden': $$.$me_atom2_prop(['<.isSelected', '<.#isHover'], $$.$me_atom2_prop_compute_fn_or()),
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
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//app.js.map
;
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-prefixed !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,l;for(var u in h)if(h.hasOwnProperty(u)){if(e=[],n=h[u],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],l=s.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function s(e,n){return function(){return e.apply(n,arguments)}}function l(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?s(o,t||n):o);return!1}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function a(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function p(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):E?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function d(){var e=n.body;return e||(e=p(E?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var i,s,l,u,f="modernizr",a=p("div"),c=d();if(parseInt(r,10))for(;r--;)l=p("div"),l.id=o?o[r]:f+(r+1),a.appendChild(l);return i=p("style"),i.type="text/css",i.id="s"+f,(c.fake?c:a).appendChild(i),c.appendChild(a),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),a.id=f,c.fake&&(c.style.background="",c.style.overflow="hidden",u=z.style.overflow,z.style.overflow="hidden",z.appendChild(c)),s=t(a,e),c.fake?(c.parentNode.removeChild(c),z.style.overflow=u,z.offsetHeight):a.parentNode.removeChild(a),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+f(n[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==a(e,null,"position")})}return t}function y(e,n,o,s){function l(){a&&(delete P.style,delete P.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=m(e,o);if(!r(f,"undefined"))return f}for(var a,d,c,y,v,h=["modernizr","tspan","samp"];!P.style&&h.length;)a=!0,P.modElem=p(h.shift()),P.style=P.modElem.style;for(c=e.length,d=0;c>d;d++)if(y=e[d],v=P.style[y],u(y,"-")&&(y=i(y)),P.style[y]!==t){if(s||r(o,"undefined"))return l(),"pfx"==n?y:!0;try{P.style[y]=o}catch(g){}if(P.style[y]!=v)return l(),"pfx"==n?y:!0}return l(),!1}function v(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),u=(e+" "+w.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?y(u,n,o,i):(u=(e+" "+_.join(s+" ")+s).split(" "),l(u,n,t))}var h=[],g={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){h.push({name:e,fn:n,options:t})},addAsyncTest:function(e){h.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=g,Modernizr=new Modernizr;var C=[],S="Moz O ms Webkit",w=g._config.usePrefixes?S.split(" "):[];g._cssomPrefixes=w;var x=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var l=prefixes[s],u=l.toUpperCase()+"_"+r;if(u in i)return"@-"+l.toLowerCase()+"-"+n}return!1};g.atRule=x;var _=g._config.usePrefixes?S.toLowerCase().split(" "):[];g._domPrefixes=_;var z=n.documentElement,E="svg"===z.nodeName.toLowerCase(),b={elem:p("modernizr")};Modernizr._q.push(function(){delete b.elem});var P={style:b.elem.style};Modernizr._q.unshift(function(){delete P.style}),g.testAllProps=v;g.prefixed=function(e,n,t){return 0===e.indexOf("@")?x(e):(-1!=e.indexOf("-")&&(e=i(e)),n?v(e,n,t):v(e,"pfx"))};o(),delete g.addTest,delete g.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_demo4 = {
            style: {
                margin: () => 0,
                background: () => 'white',
            },
            prop: {
                corners: () => $$.$me_enum_names($$.$me_rect_corners_enum),
            },
            elem: {
                panel: $$.$me_atom2_prop({ keys: ['.corners'] }, ({ key: [corner] }) => ({
                    base: panel,
                    prop: {
                        corner: () => corner,
                    },
                })),
            },
        };
        const panel = {
            prop: {
                '#width': $$.$me_atom2_prop(['<.#width'], $$.$me_atom2_prop_compute_fn_mul(1 / 2)),
                '#height': $$.$me_atom2_prop(['<.#height'], $$.$me_atom2_prop_compute_fn_mul(1 / 2)),
                '#alignHor': $$.$me_atom2_prop(['.corner'], ({ masters: [corner] }) => corner.startsWith('left') ? $$.$me_align.left : $$.$me_align.right),
                '#alignVer': $$.$me_atom2_prop(['.corner'], ({ masters: [corner] }) => corner.endsWith('Top') ? $$.$me_align.top : $$.$me_align.bottom),
                def: $$.$me_atom2_prop(['.corner', '<.defs'], ({ masters: [corner, defs] }) => defs[corner]),
                isOff: $$.$me_atom2_prop_store({
                    default: () => false,
                    valid: (val) => typeof val == 'boolean' ? val : null
                }),
                '#order': () => ['content', 'switch'],
            },
            elem: {
                switch: () => ({
                    prop: {
                        '#alignHor': () => $$.$me_align.right,
                        '#ofsHor': () => 10,
                        '#ofsVer': () => 10,
                        '#height': () => null,
                        '#width': () => null,
                        '#cursor': () => 'pointer',
                    },
                    style: {
                        fontSize: () => 24,
                        fontWeight: () => 900,
                        color: $$.$me_atom2_prop(['<.isOff'], ({ masters: [isOff] }) => isOff ? 'red' : 'green'),
                    },
                    dom: {
                        innerText: $$.$me_atom2_prop(['<.isOff'], ({ masters: [isOff] }) => isOff ? '0' : '1'),
                    },
                    event: {
                        clickOrTap: () => {
                            $$.a('<.isOff', !$$.a('<.isOff'));
                            return true;
                        },
                    },
                }),
                content: $$.$me_atom2_prop(['.isOff', '<.demoFor', '.def'], ({ masters: [isOff, demoFor, def] }) => {
                    if (isOff)
                        return null;
                    const prop = {};
                    for (const p in def)
                        prop[p] = def[p];
                    return {
                        base: $.$$[demoFor],
                        prop: Object.assign({ '#align': () => $$.$me_align.center }, prop),
                    };
                }),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo4.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_select_demo = (rootElem) => {
            $$.$nl_app_defaults_init();
            return new $$.$me_atom2_elem({ tail: 'app', cnf: {
                    node: rootElem,
                    base: $$.$me_demo4,
                    prop: {
                        demoFor: () => '$nl_select',
                        defs: () => ({
                            leftTop: Object.assign({}, defaults, { options: () => ({
                                    '0': { caption: ({ isSelected }) => isSelected ? 'Можно новостройки' : { text: 'Можно', width: 90 } },
                                    '1': { caption: ({ isSelected }) => isSelected ? 'Кроме новостроек' : { text: 'Кроме', width: 90 } },
                                    '2': { caption: ({ isSelected }) => isSelected ? 'Только новостройки' : { text: 'Только', width: 90 } },
                                }) }),
                            rightTop: Object.assign({}, defaults, { options: () => ({
                                    '0': { caption: ({ isSelected }) => isSelected ? 'Можно с альтернативой' : 'Можно' },
                                    '1': { caption: ({ isSelected }) => isSelected ? 'Только прямая продажа' : 'Кроме' },
                                    '2': { caption: ({ isSelected }) => isSelected ? 'Только с альтернативой' : '...' },
                                }) }),
                            leftBottom: Object.assign({}, defaults, { options: () => ({
                                    '0': { caption: ({ isSelected }) => isSelected ? 'Допустим первый этаж' : { text: 'Можно', width: 90 } },
                                    '1': { caption: ({ isSelected }) => isSelected ? 'Кроме первого этажа' : { text: 'Кроме', width: 90 } },
                                    '2': { caption: ({ isSelected }) => isSelected ? 'Только первый этаж' : { text: 'Только', width: 90 } },
                                }) }),
                            rightBottom: Object.assign({}, defaults, { options: () => {
                                    const result = {
                                        'free': { caption: 'Св.планировка' },
                                        'studio': { caption: 'Студия' },
                                        'rmqt1': { caption: '1-комн.кв.' },
                                        'rmqt2': { caption: '2-комн.' },
                                        'rmqt3': { caption: '3' },
                                        'rmqt4': { caption: '4' },
                                        'rmqt5': { caption: '5' },
                                        'rmqt6': { caption: '6+' },
                                    };
                                    return result;
                                }, fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)), '#width': () => 500, '#height': () => 30, value: $$.$me_atom2_prop_store({
                                    default: () => new Set(),
                                    valid: val => {
                                        let result = null;
                                        if (val instanceof Set) {
                                            result = val;
                                            const valid_ids = new Set($$.a('.option_ids'));
                                            for (const s of result)
                                                if (!valid_ids.has(s))
                                                    result.delete(s);
                                        }
                                        return result;
                                    },
                                    toJSON: val => [...val],
                                    fromJSON: val => !val ? val : new Set(val),
                                }) }),
                        }),
                    },
                    style: {},
                } });
        };
        const defaults = {
            '#width': () => 440,
            '#height': () => 32,
            option_width_min: () => 36,
            value: $$.$me_atom2_prop_store({
                default: () => '0',
                valid: (val) => ~$$.a('.option_ids').indexOf(val) ? val : null,
            }),
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.js.map
//# sourceMappingURL=web.js.map