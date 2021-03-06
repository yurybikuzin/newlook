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
                        if (!$me_equal(a[i], b[i]))
                            return false;
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
            if (p !== void 0) {
                add_to_queue(p, $$._me_atom2_async_raf_queue, add ? null :
                    (pa, pb) => pa.fn ===
                        pb.fn);
            }
            else if (_raf == null) {
                _raf = requestAnimationFrame(t => {
                    _raf = null;
                    const start_raf = performance.now();
                    const deadline = start_raf + 3000;
                    for (const { fn } of $$._me_atom2_async_raf_queue)
                        fn(t);
                    {
                        const stat = new Map();
                        const len = _me_atom2_async_ric_queue.length;
                        let i = 0;
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
        function $me_atom2_async_multi_origin(p) {
            const _default = p.default;
            let _need_flush = false;
            let prev;
            const _flush = () => {
                if (!_need_flush)
                    return;
                p.flush(_value.val, prev, _value);
                prev = _value.val;
                _need_flush = false;
            };
            const raf_order = p.raf_order;
            if (raf_order !== void 0)
                $me_atom2_async({ fn: _flush, order: raf_order });
            let _value;
            return function (p) {
                let same_origin;
                let same_val;
                let is_default;
                if ((p !== void 0) && (_value === void 0 ||
                    ($$.$me_equal(p.origin, _value.origin) ? !$$.$me_equal(p.val, _value.val) : !$$.$me_equal(p.val, _default)))) {
                    _value = { origin: p.origin, val: p.val };
                    _need_flush = true;
                    if (raf_order === void 0 && p.immediatly === false)
                        $$.$me_throw('immediatly can not be false whilst raf_order is not set');
                    if (raf_order === void 0 || p.immediatly) {
                        _flush();
                    }
                    else {
                        $me_atom2_async();
                    }
                }
                return _value ? _value.val : _default;
            };
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
                if (this._entities) {
                    this.active(false);
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
            active(val) {
                if (void 0 !== val) {
                    val = val && (this.path.ent === $me_atom2_entity_enum.root || this.parent()._active);
                    if (val !== this._active) {
                        this._active = val;
                        for (const ent_name in this._entities) {
                            const enitites_of_type = this._entities[ent_name];
                            for (const tail in enitites_of_type) {
                                if (!enitites_of_type[tail].active)
                                    $$.$me_throw(tail, this.name(), enitites_of_type);
                                enitites_of_type[tail].active(val);
                            }
                        }
                        if (val)
                            this._on_active();
                    }
                }
                return this._active;
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
                this.active(false);
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
                    $me_atom2_entity._to_activate.add(this.path);
                    $$.$me_atom2_async();
                }
            }
            static activate_entities() {
                const root = $me_atom2_entity.root();
                for (const path of $me_atom2_entity._to_activate) {
                    const entity = root.by_path(path);
                    if (entity && !entity._waiting_for)
                        entity.active(true);
                }
                const count = $me_atom2_entity._to_activate.size;
                $me_atom2_entity._to_activate.clear();
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
        $$.$me_atom2_prop_store = (dflt, is_valid, is_equal) => $me_atom2_prop([], ({ atom }) => {
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
            if (!is_valid(val))
                val = dflt;
            const name = atom.name();
            if (is_equal ? is_equal(val, dflt) : $$.$me_equal(val, dflt)) {
                sessionStorage.removeItem(name);
            }
            else {
                sessionStorage.setItem(name, JSON.stringify(val));
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
                this.active(false);
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
                    const fn_apply = ({ prev, val, len_key, key, keys, key_enum }) => {
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
                    alignHor === $$.$me_align.right ? width_parent - width + ofsHor :
                        Math.floor((width_parent - width) / 2) + ofsHor;
                return result;
            }
            fn_compute_top(p) {
                const [alignVer, height_parent, height, ofsVer] = p.masters;
                const result = alignVer === $$.$me_align.top ? ofsVer :
                    alignVer === $$.$me_align.bottom ? height_parent - height - ofsVer :
                        Math.floor((height_parent - height) / 2) + ofsVer;
                const name = this.name();
                return result;
            }
            fn_apply_left(p) {
                if (p.val != null)
                    this.parent().style({ left: p.val });
            }
            fn_compute_clientRect() {
                const elem = this.parent();
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
            fn_compute_style_visible(p) {
                const [visible] = p.masters;
                return visible ? 'visible' : 'hidden';
            }
            fn_compute_style() {
                return this.parent().cnf_items('style');
            }
            fn_compute_attr() {
                return this.parent().cnf_items('attr');
            }
            fn_compute_dom() {
                return this.parent().cnf_items('dom');
            }
            static fn_apply(src, tail, elem) {
                if (!$me_atom2_elem._fn_apply_cache[src])
                    $me_atom2_elem._fn_apply_cache[src] = {};
                if (!$me_atom2_elem._fn_apply_cache[src][tail])
                    $me_atom2_elem._fn_apply_cache[src][tail] = function (p) {
                        this[src]({ [tail]: p.val });
                    };
                return $me_atom2_elem._fn_apply_cache[src][tail].bind(elem);
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
                        }), '#_cursor': $$.$me_atom2_prop(['.#isHover', '.#cursor'], ({ masters: [isHover, cursor] }) => !isHover ? 'default' : cursor, ({ atom, val }) => {
                            $$.$me_atom2_body_cursor({ origin: atom.path, val: val });
                        }), '#visible': $$.$me_atom2_prop(['.#hidden'].concat(!has_parent ? [] : ['<.#visible']), this.fn_compute_visible), '#clientRect': $$.$me_atom2_prop(['.#isReady'], this.fn_compute_clientRect, this.fn_apply_clientRect) }, (!has_control ? {} : {
                        '#ctx': () => this.node.getContext('2d'),
                        '#ctxSize': $$.$me_atom2_prop(['/.#pixelRatio', '.#width', '.#height'], this.fn_compute_ctxSize, this.fn_apply_ctxSize),
                    }), { '#left': $$.$me_atom2_prop(['.#alignHor', '<.#width', '.#width', '.#ofsHor'], this.fn_compute_left, this.fn_apply_left), '#top': $$.$me_atom2_prop(['.#alignVer',
                            '<.#height', '.#height', '.#ofsVer'], this.fn_compute_top, this.fn_apply_top) }),
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
                        fn_apply: $me_atom2_elem.fn_apply(src, tail, this)
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
                                    fn_apply: $me_atom2_elem.fn_apply(src, tail, this),
                                }));
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
                const tails = {};
                if (lazy_prop_to_apply.size) {
                    for (const [path, elem_props] of lazy_prop_to_apply) {
                        const elem = $me_atom2_elem.by_path(path);
                        if (elem) {
                            const node = elem.node;
                            for (const prop in elem_props) {
                                tails[prop] = (tails[prop] || 0) + 1;
                                count++;
                                $me_atom2_elem._lazy_prop_apply_helper(node, prop.slice(0, 1), prop.slice(1), elem_props[prop]);
                            }
                            if ((lazy_prop_to_apply === $me_atom2_elem._lazy_prop_to_apply_clientRect) ||
                                (elem.node.style.width == 'auto' || elem.node.style.height == 'auto') && (elem_props['sfontSize'] !== void 0 ||
                                    elem_props['dinnerText'] !== void 0)) {
                                elem.invalidateClientRect();
                            }
                        }
                    }
                    lazy_prop_to_apply.clear();
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
                    const pxStyleProps = ['width', 'height', 'fontSize', 'lineHeight', 'maxWidth'];
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
        $$.$me_atom2_body_cursor = $$.$me_atom2_async_multi_origin({
            default: 'default',
            raf_order: 100,
            flush: (cursor) => {
                if (document.body.style.cursor != cursor)
                    document.body.style.cursor = cursor;
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//elem.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        let $me_atom2_control_state_enum;
        (function ($me_atom2_control_state_enum) {
            $me_atom2_control_state_enum[$me_atom2_control_state_enum["cleaned"] = 0] = "cleaned";
            $me_atom2_control_state_enum[$me_atom2_control_state_enum["rendered"] = 1] = "rendered";
        })($me_atom2_control_state_enum = $$.$me_atom2_control_state_enum || ($$.$me_atom2_control_state_enum = {}));
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
                }
                else {
                    $me_atom2_control.clean([this]);
                }
                super.destroy();
            }
            _mk_props(s_level) {
                const { defaults, defaults_relative } = this._prepare('prop_default', $$.$me_atom2_entity_enum.control, $me_atom2_control.prop_default || {});
                const render_driver_props = this.props([
                    this.cnf_items('prop'),
                    defaults,
                    defaults_relative,
                    {
                        '#hidden': () => false,
                        '#zIndex': '<.#zIndex',
                        '#isHover': () => false,
                    },
                    {
                        '#_isReady': () => false,
                        '#isReady': $$.$me_atom2_prop(['<.#isReady', '.#_isReady'], $$.$me_atom2_prop_compute_fn_and(), ({ val }) => {
                            if (val)
                                $$.$me_atom2_ec._to_init.push(this.path);
                        }),
                        '#_cursor': $$.$me_atom2_prop(['.#isHover', '.#cursor'], ({ masters: [isHover, cursor] }) => !isHover ? 'default' : cursor, ({ atom, val }) => {
                            $$.$me_atom2_body_cursor({ origin: atom.path, val: val });
                        }),
                        '#visible': $$.$me_atom2_prop(['.#hidden', '<.#visible'], ({ masters: [hidden, visible] }) => !hidden && visible, ({ val }) => {
                            if (this.level > 1) {
                                $me_atom2_control._to_render.add(this.parent(true).path);
                            }
                            else {
                                $me_atom2_control._to_clean.add(this.path);
                            }
                        }),
                        '#ctxSize': s_level + '.#ctxSize',
                        '#ctx': s_level + '.#ctx',
                        '#left': $$.$me_atom2_prop(['.#alignHor', '<.#left', '<.#width', '.#width', '.#ofsHor'], ({ masters: [alignHor, left_parent, width_parent, width, ofsHor] }) => {
                            const result = alignHor === $$.$me_align.left ? left_parent + ofsHor :
                                alignHor === $$.$me_align.right ? left_parent + width_parent - ofsHor :
                                    left_parent + (width_parent - width) / 2 + ofsHor;
                            return result;
                        }),
                        '#top': $$.$me_atom2_prop(['.#alignVer', '<.#top', '<.#height', '.#height', '.#ofsVer'], ({ masters: [alignVer, top_parent, height_parent, height, ofsVer] }) => {
                            const result = alignVer === $$.$me_align.top ? top_parent + ofsVer :
                                alignVer === $$.$me_align.bottom ? top_parent + height_parent - ofsVer :
                                    top_parent + (height_parent - height) / 2 + ofsVer;
                            return result;
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
                for (const prop of ['#width', '#height', '#alignHor', '#alignVer', '#ofsHor', '#ofsVer'])
                    if (render_driver_props[prop] === void 0)
                        $$.$me_throw(`${this.name()}: requires .${prop} to be defined`);
                this.props({
                    '#render': $$.$me_atom2_prop(Object.keys(render_driver_props).map((s) => '.' + s), ({ masters }) => !(this.active() && $$.a('.#visible') && $$.a('.#isReady')) ? null : masters, ({ val }) => {
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
                    }, render_driver_props['#isHover'] === void 0 ? null :
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
                    if (control.state !== $me_atom2_control_state_enum.rendered)
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
                    control.state = $me_atom2_control_state_enum.cleaned;
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
                    if (control.state === $me_atom2_control_state_enum.rendered)
                        continue;
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
                    control.state = $me_atom2_control_state_enum.rendered;
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
        const event_names = [
            'touchstart',
            'touchmove',
            'touchend',
            'mousedown',
            'mouseup',
            'mousemove',
            'wheel',
            'wheelTouch',
            'click',
            'tap',
            'clickOrTap',
            'clickOrTapOutside',
            'clickOutside',
            'tapOutside',
        ];
        $$.clickRet = new Map();
        let tapTarget;
        $$.$me_atom2_event_touch_tolerance = 22;
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
                _do_event_add(ec, 'mousemove', zIndex, (p) => p.isInRect(p.event.clientX, p.event.clientY) &&
                    $$.a('.#isHover', true));
                _do_event_add(ec, 'mousemove', 1000, (p) => !p.isInRect(p.event.clientX, p.event.clientY) && $$.a('.#isHover', false));
            }
            else if (name_event === 'tap' || name_event === 'clickOrTap' && isTouch()) {
                _do_event_add(ec, 'touchstart', zIndex, p => {
                    const dist = p.distToRect(p.event.touches[0].clientX, p.event.touches[0].clientY);
                    if (dist > $$.$me_atom2_event_touch_tolerance)
                        return false;
                    if (tapTarget == null) {
                        tapTarget = { ec, dist, event: p.event };
                        console.log(tapTarget.ec.name(), tapTarget.dist);
                    }
                    else if (dist < tapTarget.dist) {
                        tapTarget = { ec, dist, event: p.event };
                        console.log(tapTarget.ec.name(), tapTarget.dist);
                    }
                    return !!tapTarget;
                });
                _do_event_add(ec, 'touchmove', zIndex, p => {
                    if (tapTarget &&
                        tapTarget.ec == ec) {
                        const deltaX = Math.abs(p.event.touches[0].clientX - tapTarget.event.touches[0].clientX);
                        const deltaY = Math.abs(p.event.touches[0].clientY - tapTarget.event.touches[0].clientY);
                        if (Math.max(deltaX, deltaY) >= 10) {
                            p.event.touches[0].clientX - tapTarget.event.touches[0].clientX;
                            console.error('dropped ' + tapTarget.ec.name() + ' for move', {
                                x: deltaX,
                                y: deltaY,
                            });
                            tapTarget = null;
                        }
                        else {
                            console.warn('near to drop ' + tapTarget.ec.name() + ' for move', {
                                x: deltaX,
                                y: deltaY,
                            });
                        }
                    }
                    return false;
                });
                _do_event_add(ec, 'touchend', zIndex, p => {
                    if (!(tapTarget && tapTarget.ec == ec))
                        return false;
                    const event = { start: tapTarget.event, end: p.event };
                    const _tapTarget = tapTarget;
                    tapTarget = null;
                    if (!fn(Object.assign({}, p, { event })))
                        return false;
                    const app = $$.a.get('/@app');
                    app.dispatch('tapEffect', _tapTarget);
                    console.log('tapped ' + _tapTarget.ec.name());
                    return true;
                });
            }
            else if (name_event === 'click' || name_event === 'clickOrTap' && !isTouch()) {
                _do_event_add(ec, 'mousedown', zIndex, p => {
                    const ret = p.isInRect(p.event.clientX, p.event.clientY);
                    if (ret) {
                        $$.clickRet.set(ec.path, p.event);
                    }
                    else {
                        $$.clickRet.delete(ec.path);
                    }
                    return ret;
                });
                _do_event_add(ec, 'mouseup', zIndex, p => $$.clickRet.has(ec.path) &&
                    (() => {
                        const event = $$.clickRet.get(ec.path);
                        console.log(event, p.event);
                        return p.event.clientX == event.clientX && p.event.clientY == event.clientY;
                    })() &&
                    fn(Object.assign({}, p, { event: { start: $$.clickRet.get(ec.path), end: p.event } })));
            }
            else if (name_event === 'clickOrTapOutside') {
                $$.$me_throw('TODO');
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
            let name_atom;
            if (ec._entities &&
                ec._entities.prop &&
                ec._entities.prop['#isHover']
                && !ec._entities.prop['#isHover'].masters) {
                _event_add(ec, 'hover');
            }
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
            let done = false;
            for (const item of queue) {
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
                    const prev = $$.a.curr;
                    $$.a.curr = ec;
                    for (const fn of fn_array)
                        done = fn({ event, isInRect, distToRect }) || done;
                    $$.a.curr = prev;
                }
                if (done)
                    break;
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
                        fn_apply: ({ val, prev }) => {
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
                return this._masters().map(name_atom => this.by_path_s(name_atom));
            }
            get 'slaves()'() {
                if (!this._slaves)
                    return null;
                const result = {};
                for (const [path] of this._slaves)
                    result[path.toString()] = $me_atom2.root().by_path(path);
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
                    for (let [path] of this._slaves) {
                        const atom = $$.$me_atom2_entity.root().by_path(path);
                        if (atom)
                            this.rm_slave(atom);
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
                this._slaves.set(atom_slave.path, name_master);
                atom_slave.no_wait_for_master(name_master);
                const store = atom_slave._masters_store || (atom_slave._masters_store = {});
                store[name_master] = this;
                atom_slave.set_state_slave(name_master, this._state instanceof Set ? this._state :
                    $me_atom2_state_enum.invalid);
            }
            rm_slave(atom_slave) {
                if (this._slaves && this._slaves.has(atom_slave.path)) {
                    const name_master = this._slaves.get(atom_slave.path);
                    atom_slave.set_state_slave(name_master, $me_atom2_state_enum.invalid);
                    if (atom_slave._masters_store)
                        delete atom_slave._masters_store[name_master];
                    this._slaves.delete(atom_slave.path);
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
                if (!this.active())
                    return null;
                this.update(val, force);
                return (this._state !== $me_atom2_state_enum.valid ?
                    null :
                    this._value);
            }
            static is_valid_value(val) {
                return !(val == null || Number.isNaN(val));
            }
            update(val, force = false) {
                if (!this.active() ||
                    val === void 0 && !(this._state === $me_atom2_state_enum.invalid ||
                        this._state === $me_atom2_state_enum.need_check))
                    return;
                const true_set = val !== void 0;
                if (val === void 0) {
                    const compute_result = this._compute();
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
                    }
                }
                if (next_value === void 0)
                    return;
                if (!just_set_anim)
                    $me_atom2.anim_stop(this.path);
                this.set_value(next_value, true_set, force);
            }
            set_value(next_value, true_set = true, force = false) {
                const prev_value = this._value;
                if (!true_set && !force &&
                    this._state === $me_atom2_state_enum.need_check &&
                    $$.$me_equal(next_value, prev_value)) {
                    this._state = $me_atom2_state_enum.valid;
                    $me_atom2.did_not_apply = true;
                    return;
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
                            if (!atom_master)
                                $$.$me_throw(`${this.name()}: no .store[${name_master}]`, this);
                            master_values.push(atom_master.value());
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
                        result.ret = fn_compute.call(this, Object.assign({ atom: this, prev: this._value, len: !master_values ? 0 : master_values.length, masters: master_values }, key_provider_ret));
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
                        key_enum = [masters_store[key_name].value()].concat(key_enum);
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
                    (val === $me_atom2_state_enum.invalid || val === $me_atom2_state_enum.need_check) &&
                    this.active()) {
                    if (this.path.tail != '#clientRect' || $$.$me_atom2_event_mousemove_last && !$$.$me_atom2_event_mousemove_to_process) {
                        $me_atom2.to_update.add(this.path);
                        $$.$me_atom2_async();
                    }
                    else {
                        const entity = this.parent(true);
                        if (entity instanceof $$.$me_atom2_elem) {
                            const elem = entity;
                            if (elem.node.style.width == 'auto' || elem.node.style.height == 'auto') {
                                $me_atom2.to_update.add(this.path);
                                $$.$me_atom2_async();
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
                for (let [path_slave, name_master] of this._slaves) {
                    const atom_slave = $$.$me_atom2_entity.root().by_path(path_slave);
                    if (atom_slave instanceof $me_atom2) {
                        atom_slave.set_state_slave(name_master, state2spread !== void 0 ? state2spread : val);
                    }
                    else {
                        this._slaves.delete(path_slave);
                    }
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
                    $me_atom2.to_update.add(this.path);
                    $$.$me_atom2_async();
                }
            }
            _masters() {
                const masters = this.masters;
                return (Array.isArray(masters) ? masters :
                    masters instanceof $me_atom2 ? masters.value() :
                        []);
            }
            static update_atoms(deadline, last_now) {
                const pre = performance.now() - last_now;
                let count = 0;
                let atoms_to_update = new Set();
                let ss;
                if ($me_atom2._update_atoms_debug)
                    ss = new Map();
                while ($me_atom2.to_update.size) {
                    if (performance.now() > deadline)
                        break;
                    for (const tail of $me_atom2._update_order) {
                        for (const path of $me_atom2.to_update) {
                            if (performance.now() > deadline)
                                break;
                            if (tail && path.tail !== tail)
                                continue;
                            const atom = $$.$me_atom2_entity.root().by_path(path);
                            if (atom && atom.active()) {
                                atoms_to_update.add(atom);
                            }
                            $me_atom2.to_update.delete(path);
                        }
                        if (atoms_to_update.size)
                            break;
                    }
                    for (const atom of atoms_to_update) {
                        if (performance.now() > deadline)
                            break;
                        const state_was = atom._state;
                        if (atom._state != $me_atom2_state_enum.valid) {
                            $me_atom2.did_not_apply = false;
                            const start = performance.now();
                            atom.update();
                            if (!$me_atom2.did_not_apply) {
                                if (ss)
                                    ss.set(atom.name(), `${state_was} => ${atom._state}`);
                                count++;
                            }
                            else {
                            }
                        }
                        atoms_to_update.delete(atom);
                    }
                }
                for (const atom of atoms_to_update)
                    $me_atom2.to_update.add(atom.path);
                if (ss && ss.size)
                    console.warn(ss);
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
        $me_atom2.to_update = new Set();
        $me_atom2._update_order = ['#keys', '#masters', ''];
        $me_atom2._update_atoms_debug = false;
        $me_atom2.did_not_apply = false;
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
            get: (path_s) => {
                const relative_to = $$.a.curr || $$.$me_atom2_entity.root();
                return relative_to.by_path_s(path_s);
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
                (void 0 === p.stroke.ctxWidth || typeof p.stroke.ctxWidth == 'number') &&
                    (void 0 === p.stroke.style || typeof p.stroke.style == 'string')) {
                const ctxStrokeWidth = p.stroke && p.stroke.ctxWidth || 0;
                const ctxSemiLineWidth = ctxStrokeWidth / 2;
                p.ctx.beginPath();
                if (!p.ctxBorderRadius) {
                    p.ctx.rect(Math.round(p.ctxLeft + ctxSemiLineWidth), Math.round(p.ctxTop + ctxSemiLineWidth), Math.round(p.ctxWidth - ctxStrokeWidth), Math.round(p.ctxHeight - ctxStrokeWidth));
                }
                else {
                    let x, y;
                    p.ctx.moveTo(Math.round(x = p.ctxLeft + ctxSemiLineWidth), Math.round(y = p.ctxTop + p.ctxBorderRadius + ctxSemiLineWidth));
                    p.ctx.arc(Math.round(x += p.ctxBorderRadius), Math.round(y -= 0), Math.round(p.ctxBorderRadius), Math.PI, -Math.PI / 2, false);
                    p.ctx.lineTo(Math.round(x += p.ctxWidth - 2 * (p.ctxBorderRadius + ctxStrokeWidth)), Math.round(y -= p.ctxBorderRadius));
                    p.ctx.arc(Math.round(x += 0), Math.round(y += p.ctxBorderRadius), Math.round(p.ctxBorderRadius), -Math.PI / 2, 0, false);
                    p.ctx.lineTo(Math.round(x += p.ctxBorderRadius), Math.round(y += p.ctxHeight - 2 * (p.ctxBorderRadius + ctxStrokeWidth)));
                    p.ctx.arc(Math.round(x -= p.ctxBorderRadius), Math.round(y += 0), Math.round(p.ctxBorderRadius), 0, Math.PI / 2, false);
                    p.ctx.lineTo(Math.round(x -= p.ctxWidth - 2 * (p.ctxBorderRadius + ctxStrokeWidth)), Math.round(y += p.ctxBorderRadius));
                    p.ctx.arc(Math.round(x -= 0), Math.round(y -= p.ctxBorderRadius), Math.round(p.ctxBorderRadius), Math.PI / 2, Math.PI, false);
                }
                p.ctx.closePath();
                fill_stroke(Object.assign({}, p, { stroke: p.stroke && { ctxWidth: p.stroke.ctxWidth, style: p.stroke.style } }));
            }
            else {
                if (p.fillStyle != 'transparent') {
                    p.ctx.beginPath();
                    if (!p.ctxBorderRadius) {
                        p.ctx.rect(Math.round(p.ctxLeft + (p.stroke.ctxWidth === void 0 ? 0 : typeof p.stroke.ctxWidth === 'number' ? p.stroke.ctxWidth / 2 : p.stroke.ctxWidth.left / 2)), Math.round(p.ctxTop + (p.stroke.ctxWidth === void 0 ? 0 : typeof p.stroke.ctxWidth === 'number' ? p.stroke.ctxWidth / 2 : p.stroke.ctxWidth.top / 2)), Math.round(p.ctxWidth - (p.stroke.ctxWidth === void 0 ? 0 : typeof p.stroke.ctxWidth === 'number' ? p.stroke.ctxWidth : p.stroke.ctxWidth.left + p.stroke.ctxWidth.right) / 2), Math.round(p.ctxHeight - (p.stroke.ctxWidth === void 0 ? 0 : typeof p.stroke.ctxWidth === 'number' ? p.stroke.ctxWidth : p.stroke.ctxWidth.top + p.stroke.ctxWidth.bottom) / 2));
                    }
                    else {
                        $$.$me_throw('TODO', p.ctxBorderRadius, !p.ctxBorderRadius);
                    }
                    fill(Object.assign({}, p));
                }
                for (const side of $$.$me_enum_names($$.$me_rect_sides_enum)) {
                    const ctxWidth = !p.stroke.ctxWidth ? 0 : typeof p.stroke.ctxWidth === 'number' ? p.stroke.ctxWidth : p.stroke.ctxWidth[side];
                    const style = !p.stroke.style ? null : typeof p.stroke.style === 'string' ? p.stroke.style : p.stroke.style[side];
                    switch (side) {
                        case 'left': {
                            p.ctx.beginPath();
                            const x = p.ctxLeft + ctxWidth / 2;
                            p.ctx.moveTo(x, p.ctxTop + p.ctxHeight);
                            p.ctx.lineTo(x, p.ctxTop);
                            stroke({ ctx: p.ctx, stroke: { style, ctxWidth } });
                            break;
                        }
                        case 'top': {
                            p.ctx.beginPath();
                            const y = p.ctxTop + ctxWidth / 2;
                            p.ctx.moveTo(p.ctxLeft, y);
                            p.ctx.lineTo(p.ctxLeft + p.ctxWidth, y);
                            stroke({ ctx: p.ctx, stroke: { style, ctxWidth } });
                            break;
                        }
                        case 'right': {
                            p.ctx.beginPath();
                            const x = p.ctxLeft + p.ctxWidth - ctxWidth / 2;
                            p.ctx.moveTo(x, p.ctxTop);
                            p.ctx.lineTo(x, p.ctxTop + p.ctxHeight);
                            stroke({ ctx: p.ctx, stroke: { style, ctxWidth } });
                            break;
                        }
                        case 'bottom': {
                            p.ctx.beginPath();
                            const y = p.ctxTop + p.ctxHeight - ctxWidth / 2;
                            p.ctx.moveTo(p.ctxLeft + p.ctxWidth, y);
                            p.ctx.lineTo(p.ctxLeft, y);
                            stroke({ ctx: p.ctx, stroke: { style, ctxWidth } });
                            break;
                        }
                    }
                }
            }
        }
        $$.$me_atom2_ctx_rect = $me_atom2_ctx_rect;
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
//pos.js.map
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
                    for (const [path, anim] of $$.$me_atom2.anim_to_play)
                        if (anim.progress !== void 0)
                            if (anim.progress < 1) {
                                const atom = $$.$me_atom2.by_path(path);
                                if (!atom) {
                                    $$.$me_atom2.anim_stop(path);
                                }
                                else {
                                    anim_to_play.push([atom, anim]);
                                }
                            }
                            else {
                                $$.$me_atom2.anim_stop(path);
                            }
                    const [count, needReplay] = $me_atom2_async_anim(anim_to_play, t, start);
                    if (needReplay)
                        $$.$me_atom2_async();
                    return [count, pre];
                });
            }
            for (const op in ops_event)
                fill_stat(stat, op, ops_event[op]);
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
            wheelTouch: (last_now) => {
                const pre = performance.now() - last_now;
                let count = 0;
                if ($$.$me_atom2_event_wheel_touch_to_process) {
                    $$.$me_atom2_event_process('wheelTouch', $$.$me_atom2_event_wheel_touch_to_process);
                    $$.$me_atom2_event_wheel_touch_to_process = null;
                    count = 1;
                }
                return [count, pre];
            },
        };
        function fill_stat(stat, name, fn) {
            const start = performance.now();
            const [count, pre] = fn(start);
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
                render: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    let count = 0;
                    if (ready_to_render()) {
                        for (const path of $$.$me_atom2_control._to_render)
                            $$.$me_atom2_control._to_clean.add(path);
                        $$.$me_atom2_control.clean($$.$me_atom2_control.zIndex_sort($$.$me_atom2_control._to_clean));
                        $$.$me_atom2_control._to_clean.clear();
                        count = $$.$me_atom2_control.render($$.$me_atom2_control.zIndex_sort($$.$me_atom2_control._to_render, true));
                        $$.$me_atom2_control._to_render.clear();
                    }
                    $$.$me_atom2_control.fill_controls_cache_clear();
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
                        if (anim.progress === void 0) {
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
        const ready_to_render = () => $$.$me_atom2_control._to_render.size &&
            !$$.$me_atom2_control.to_def.length &&
            !$$.$me_atom2_elem.to_def.length &&
            !$$.$me_atom2.to_def.length &&
            true;
        $$.$me_atom2_async_complete = (including_anim = false) => !($$.$me_atom2_elem.children_to_add.size ||
            $$.$me_atom2_elem.lazy_prop_apply_did() ||
            $$.$me_atom2_entity._to_activate.size ||
            $$.$me_atom2_control._to_clean.size ||
            $$.$me_atom2_control._to_render.size ||
            $$.$me_atom2.to_update.size ||
            $$.$me_atom2_control.to_def.length ||
            $$.$me_atom2_elem.to_def.length ||
            $$.$me_atom2.to_def.length ||
            $$.$me_atom2_ec._to_init.length ||
            including_anim && $$.$me_atom2.anim_to_play.size ||
            $$.$me_atom2_event_mousemove_to_process ||
            $$.$me_atom2_event_wheel_to_process ||
            false);
        let lastClientX;
        let lastClientY;
        let clientX;
        let clientY;
        let lastDeltaX;
        let lastDeltaY;
        let timePrev;
        let rafInert;
        let accelX;
        let accelY;
        let scrollAccuX;
        let scrollAccuY;
        let rafWheelTouch;
        let tPrev;
        let event_wheel_touch_start;
        const touchstart = (event) => {
            event_wheel_touch_start = event;
            clientX = event.touches[0].clientX;
            lastDeltaX = 0;
            accelX = 0;
            clientY = event.touches[0].clientY;
            lastDeltaY = 0;
            accelY = 0;
            timePrev = null;
            if (rafInert != null) {
                cancelAnimationFrame(rafInert);
                rafInert = null;
            }
            return $$.$me_atom2_event_process('touchstart', event);
        };
        const touchmove = (event) => {
            const deltaX = clientX - event.touches[0].clientX;
            const deltaY = clientY - event.touches[0].clientY;
            if (deltaX)
                if (Math.sign(lastDeltaX) != Math.sign(deltaX)) {
                    scrollAccuX = deltaX;
                    timePrev = performance.now();
                }
                else {
                    if (timePrev == null)
                        timePrev = performance.now();
                    scrollAccuX += deltaX;
                }
            if (deltaY)
                if (Math.sign(lastDeltaY) != Math.sign(deltaY)) {
                    scrollAccuY = deltaY;
                    timePrev = performance.now();
                }
                else {
                    if (timePrev == null)
                        timePrev = performance.now();
                    scrollAccuY += deltaY;
                }
            lastClientX = event.touches[0].clientX;
            lastClientY = event.touches[0].clientY;
            lastDeltaX = deltaX;
            lastDeltaY = deltaY;
            if (scrollAccuX || scrollAccuY) {
                if (rafWheelTouch == null)
                    rafWheelTouch = requestAnimationFrame((t) => {
                        rafWheelTouch = null;
                        {
                            if (!$$.$me_atom2_event_wheel_to_process) {
                                $$.$me_atom2_event_wheel_touch_to_process = {
                                    start: event_wheel_touch_start,
                                    end: event,
                                    _deltaX: scrollAccuX,
                                    _deltaY: scrollAccuY,
                                };
                            }
                            else {
                                $$.$me_atom2_event_wheel_touch_to_process._deltaX =
                                    scrollAccuX + (Math.sign($$.$me_atom2_event_wheel_touch_to_process._deltaX) * Math.sign(scrollAccuX) < 0 ? 0 : $$.$me_atom2_event_wheel_touch_to_process._deltaX);
                                $$.$me_atom2_event_wheel_touch_to_process._deltaY =
                                    scrollAccuY + (Math.sign($$.$me_atom2_event_wheel_touch_to_process._deltaY) * Math.sign(scrollAccuY) < 0 ? 0 : $$.$me_atom2_event_wheel_touch_to_process._deltaY);
                                $$.$me_atom2_event_wheel_touch_to_process.end = event;
                            }
                            $$.$me_atom2_async();
                            $$.$me_atom2_event_process('wheelTouch', $$.$me_atom2_event_wheel_to_process);
                            if (timePrev !== void 0) {
                                tPrev = t;
                                const timeCurr = performance.now();
                                accelX = scrollAccuX / (timeCurr - timePrev);
                                accelY = scrollAccuY / (timeCurr - timePrev);
                                timePrev = timeCurr;
                            }
                            scrollAccuX = 0;
                            scrollAccuY = 0;
                            clientX = lastClientX;
                            clientY = lastClientY;
                        }
                    });
                const deltaY = clientY - event.touches[0].clientY;
            }
            if (!scrollAccuX)
                accelX = 0;
            if (!scrollAccuY)
                accelY = 0;
            event.preventDefault();
            return $$.$me_atom2_event_process('touchmove', event);
        };
        const touchend = (event) => {
            timePrev = void 0;
            let accel_k = 0.95;
            function touch_inert(accelX, accelY) {
                if (Math.abs(accelX) >= 1 / 17 || Math.abs(accelY) >= 1 / 17) {
                    rafInert = requestAnimationFrame((t) => {
                        rafInert = null;
                        const scrollAccuX = accelX * (t - tPrev);
                        const scrollAccuY = accelY * (t - tPrev);
                        if (Math.abs(scrollAccuX) >= 1 || Math.abs(scrollAccuY) >= 1) {
                            $$.$me_atom2_event_wheel_touch_to_process = {
                                start: event_wheel_touch_start,
                                end: event,
                                _deltaX: scrollAccuX,
                                _deltaY: scrollAccuY,
                            };
                            $$.$me_atom2_event_process('wheelTouch', $$.$me_atom2_event_wheel_touch_to_process);
                            const accelXNew = accelX * accel_k;
                            const accelYNew = accelY * accel_k;
                            accel_k = accel_k * 0.7;
                            tPrev = t;
                            touch_inert(accelXNew, accelYNew);
                        }
                    });
                }
            }
            if (Math.abs(accelX) >= 1 || Math.abs(accelY))
                touch_inert(accelX, accelY);
            return $$.$me_atom2_event_process('touchend', event);
        };
        const mousedown = (event) => $$.$me_atom2_event_process('mousedown', event);
        const mouseup = (event) => $$.$me_atom2_event_process('mouseup', event);
        const mousemove = (event) => {
            $$.$me_atom2_event_mousemove_last = $$.$me_atom2_event_mousemove_to_process = event;
            $$.$me_atom2_async();
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
        $$.$nl_elem_panel = {
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
        $$.$nl_elem_search_new = {
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
                    base: $$.$nl_elem_panel,
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
        $$.$nl_elem_switch = {
            prop: {
                '#height': () => 44,
                '#width': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.values'], ({ masters: [values] }) => values.map(value => `@item[${value}].#width`)), $$.$me_atom2_prop_compute_fn_sum()),
                paddingHor: () => 8,
                paddingTop: () => 18,
                paddingBottom: () => 8,
            },
            style: {
                fontSize: $$.$me_atom2_prop(['.em'], ({ masters: [em] }) => em),
                userSelect: () => 'none',
            },
            elem: {
                item: $$.$me_atom2_prop({ keys: ['.values'] }, ({ key: [key] }) => ({
                    node: 'span',
                    dom: {
                        innerText: () => key.toUpperCase(),
                    },
                    prop: {
                        '#width': () => null,
                        'isSelected': $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => selected == key),
                        '#cursor': $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? 'default' : 'pointer'),
                    },
                    style: {
                        background: $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? '#0070a4' : 'white'),
                        color: $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => !isSelected ? '#0070a4' : 'white'),
                        position: () => 'relative',
                        fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                        fontWeight: $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? 500 : 400),
                        paddingTop: '<.paddingTop',
                        paddingLeft: '<.paddingHor',
                        paddingRight: '<.paddingHor',
                        paddingBottom: '<.paddingBottom',
                    },
                    event: {
                        clickOrTap: () => {
                            $$.a('<.selected', key);
                            return true;
                        },
                    },
                })),
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
        $$.$nl_elem_search = {
            prop: {
                orders: () => [
                    {
                        id: 'id1',
                        title: 'Заказ 2',
                        result_mode: 'Таблица',
                    },
                    {
                        id: 'id2',
                        title: 'Заказ 1',
                        result_mode: 'Плитка',
                    },
                ],
                order_idx: $$.$me_atom2_prop_keys(['.orders']),
                order: $$.$me_atom2_prop({ keys: ['.order_idx'], masters: ['.orders'] }, ({ key: [idx], masters: [orders] }) => orders[idx]),
                order_title: $$.$me_atom2_prop({ keys: ['.order_idx'], masters: ['.order[]'] }, ({ masters: [order] }) => order.title.toUpperCase()),
                selected: $$.$me_atom2_prop_store('', (val) => $$.a('.order_idx').indexOf(val) >= 0),
                param_modes: () => ({
                    Полный: {
                        height: 627,
                    },
                    Основной: {
                        height: 295,
                    },
                    Сжатый: {
                        height: 123,
                    },
                }),
                param_mode_keys: $$.$me_atom2_prop_keys(['.param_modes']),
                param_mode: $$.$me_atom2_prop_store('Основной', (val) => $$.a('.param_mode_keys').indexOf(val) >= 0),
            },
            elem: {
                tabs: () => ({
                    prop: {
                        '#height': '/@app@menu@login.#height',
                        '#ofsHor': () => 36,
                        '#ofsVer': () => 16,
                    },
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
                }),
                new: $$.$me_atom2_prop(['.selected'], ({ masters: [selected] }) => selected ? null : {
                    base: $$.$nl_elem_search_new,
                    prop: {
                        '#ofsVer': '<@tabs.#height',
                        '#height': $$.$me_atom2_prop(['<.#height', '<@tabs.#height'], ({ masters: [height_parent, height_tabs] }) => height_parent - height_tabs),
                    },
                }),
                params: $$.$me_atom2_prop(['.selected'], ({ masters: [selected] }) => !selected ? null : {
                    base: $$.$nl_elem_panel,
                    prop: {
                        '#ofsVer': '<@tabs.#height',
                        '#height': $$.$me_atom2_prop(['<.param_mode', '<.param_modes'], ({ masters: [mode, modes] }) => $$.$me_atom2_anim({ to: modes[mode].height, duration: 400 })),
                        '#ofsHor': '.em',
                        '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor'], ({ masters: [width, ofsHor] }) => width - 2 * ofsHor),
                    },
                    elem: {
                        mode_switcher: () => ({
                            base: $$.$nl_elem_switch,
                            prop: {
                                '#ofsVer': () => 16,
                                '#alignHor': () => $$.$me_align.right,
                                'values': '<<.param_mode_keys',
                                'selected': $$.$me_atom2_prop(['<<.param_mode'], null, ({ val }) => { $$.a('<<.param_mode', val); }),
                            },
                        }),
                        found: () => ({
                            node: 'span',
                            prop: {
                                offerCount: () => 1200,
                                objCount: () => 800,
                                '#alignVer': () => $$.$me_align.bottom,
                                '#height': () => null,
                                '#ofsHor': '.em',
                                '#ofsVer': '.em',
                            },
                            style: {
                                position: () => 'relative',
                                fontWeight: () => 500,
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop(['.offerCount', '.objCount'], ({ masters: [offerCount, objCount] }) => `Найдено ${objCount} объектов / ${offerCount} предложений`.toUpperCase()),
                            },
                        }),
                    },
                }),
                result: $$.$me_atom2_prop(['.selected'], ({ masters: [selected] }) => !selected ? null : {
                    base: $$.$nl_elem_panel,
                    prop: {
                        '#ofsVer': $$.$me_atom2_prop(['<@params.#ofsVer', '<@params.#height', '.em'], $$.$me_atom2_prop_compute_fn_sum()),
                        '#height': $$.$me_atom2_prop(['<.#height', '.#ofsVer'], ({ masters: [height, ofsVer] }) => height - ofsVer),
                        '#ofsHor': '.em',
                        '#width': $$.$me_atom2_prop(['<.#width', '.#ofsHor'], ({ masters: [width, ofsHor] }) => width - 2 * ofsHor),
                    },
                    elem: {
                        mode_switcher: () => ({
                            base: $$.$nl_elem_switch,
                            prop: {
                                '#ofsVer': () => 16,
                                '#alignHor': () => $$.$me_align.right,
                                values: () => ['Таблица', 'Плитка', 'Карта'],
                                selected: () => 'Таблица',
                                paddingHor: () => 16,
                            },
                        }),
                    },
                }),
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
//search.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_elem_search_tabs = {
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
        $$.$nl_elem_search_panel = {
            base: $$.$nl_elem_panel,
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
        $$.$nl_elem_multiselector = {
            prop: {
                item_idx: $$.$me_atom2_prop_keys(['.items']),
                item: $$.$me_atom2_prop({ keys: ['.item_idx'], masters: ['.items'] }, ({ key: [idx], masters: [items] }) => items[idx]),
                item_selected: $$.$me_atom2_prop({ keys: ['.item_idx'], masters: ['.item[]', '.selected'] }, ({ masters: [item, selected] }) => selected.has(item)),
                items_len: $$.$me_atom2_prop(['.items'], ({ masters: [items] }) => items.length),
                item_width: $$.$me_atom2_prop({
                    keys: ['.item_idx'],
                    masters: ['.#width', '.items_len'],
                }, ({ key: [idx], masters: [width, items_len] }) => {
                    const item_width = Math.round(width / items_len) + 1;
                    const result = +idx < items_len - 1 ? item_width : width - (item_width - 1) * (items_len - 1);
                    return result;
                }),
                item_left: $$.$me_atom2_prop({
                    keys: ['.item_idx'],
                    masters: $$.$me_atom2_prop_masters([], ({ key: [idx] }) => !+idx ? [] : [`.item_left[${+idx - 1}]`, `.item_width[${+idx - 1}]`]),
                }, ({ len, masters: [prev, width] }) => !len ? -1 : prev + width - 1),
            },
            style: {
                borderRadius: () => '3px',
                border: () => '1px solid #bdc3d1',
                background: () => '#fcfcfd',
                boxSizing: () => 'border-box',
            },
            elem: {
                item: $$.$me_atom2_prop({ keys: ['.item_idx'] }, ({ key: [idx] }) => ({
                    prop: {
                        '#width': `<.item_width[${idx}]`,
                        '#ofsHor': `<.item_left[${idx}]`,
                        '#ofsVer': () => -1,
                        '#cursor': () => 'pointer',
                        'isSelected': `<.item_selected[${idx}]`,
                    },
                    style: {
                        borderTopLeftRadius: +idx ? null : () => '3px',
                        borderBottomLeftRadius: +idx ? null : () => '3px',
                        borderTopRightRadius: $$.$me_atom2_prop(['<.items_len'], ({ masters: [len] }) => +idx < len - 1 ? '' : '3px'),
                        borderBottomRightRadius: $$.$me_atom2_prop(['<.items_len'], ({ masters: [len] }) => +idx < len - 1 ? '' : '3px'),
                        background: $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? '#f0f1f4' : 'transparent'),
                        border: $$.$me_atom2_prop(['.isSelected'], ({ masters: [isSelected] }) => isSelected ? '1px solid #008ecf' : ''),
                        boxSizing: () => 'border-box',
                    },
                    elem: {
                        text: () => ({
                            prop: {
                                fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                                '#align': () => $$.$me_align.center,
                                '#ofsHor': $$.$me_atom2_prop(['<.isSelected'], ({ masters: [isSelected] }) => isSelected ? -1 : 0),
                                '#ofsVer': $$.$me_atom2_prop(['<.isSelected'], ({ masters: [isSelected] }) => isSelected ? -1 : 0),
                                '#width': () => null,
                                '#height': () => null,
                            },
                            dom: {
                                innerText: `<<.item[${idx}]`,
                            },
                        }),
                    },
                    event: {
                        clickOrTap: () => {
                            const selected = $$.a('<.selected');
                            const item = $$.a(`<.item[${idx}]`);
                            if (selected.has(item)) {
                                selected.delete(item);
                            }
                            else {
                                selected.add(item);
                            }
                            $$.a('<.selected', selected, true);
                            return true;
                        },
                    },
                })),
            },
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//multiselector.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$nl_elem_search_panel_param = {
            base: $$.$nl_elem_search_panel,
            prop: {
                params: () => ({
                    rmqt: {
                        visible: {
                            'Полный': true,
                            'Основной': true,
                        },
                        label: 'Комнаты',
                        type: 'multiselector',
                        values: ['1', '2', '3', '4', '5', '6+'],
                    },
                }),
                param_names: $$.$me_atom2_prop_keys(['.params']),
            },
            elem: {
                mode_switcher: () => ({
                    base: $$.$nl_elem_switch,
                    prop: {
                        '#ofsVer': () => 16,
                        '#alignHor': () => $$.$me_align.right,
                        'values': '<<.param_mode_keys',
                        'selected': $$.$me_atom2_prop(['<<.param_mode'], null, ({ val }) => { $$.a('<<.param_mode', val); }),
                    },
                }),
                param: $$.$me_atom2_prop({ keys: ['.param_names'], masters: ['.params', '<.param_mode', '.height_anim_is'] }, ({ key: [param_name], masters: [params, param_mode, height_anim_is], prev }) => {
                    const def = params[param_name];
                    const visible_prev = !!prev;
                    const visible_curr = def.visible[param_mode];
                    if (!visible_curr)
                        if (!height_anim_is || !prev) {
                            return null;
                        }
                        else {
                            $$.a(`@param[${param_name}].show`, false);
                            return prev;
                        }
                    let ctrl;
                    switch (def.type) {
                        case 'multiselector': {
                            ctrl = {
                                base: $$.$nl_elem_multiselector,
                                prop: {
                                    '#width': () => 218,
                                    '#height': () => 24,
                                    '#alignHor': () => $$.$me_align.right,
                                    items: () => def.values,
                                    selected: $$.$me_atom2_prop([`<<.order`], ({ masters: [order] }) => order.params.rmqt || new Set(), ({ val }) => {
                                        const order = $$.a(`<<.order`);
                                        order.params[param_name] = val;
                                        $$.a(`<<.order`, order, true);
                                    }),
                                },
                            };
                            break;
                        }
                        default: $$.$me_throw(def.type);
                    }
                    if (def.label) {
                        return {
                            prop: {
                                '#width': () => 61 + 37 + 218,
                                '#height': () => 24,
                                '#ofsHor': () => 32,
                                '#ofsVer': () => 140,
                                show: () => false,
                            },
                            elem: {
                                label: () => ({
                                    prop: {
                                        '#width': () => null,
                                        '#height': () => null,
                                        '#alignVer': () => $$.$me_align.center,
                                        fontSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(14 / 16)),
                                    },
                                    dom: {
                                        innerText: () => def.label,
                                    },
                                }),
                                ctrl: () => ctrl,
                            },
                            style: {
                                opacity: $$.$me_atom2_prop(['.show'], ({ masters: [show] }) => $$.$me_atom2_anim({ to: show ? 1 : 0, duration: 400 })),
                            },
                            init: () => {
                                $$.a('.show', true);
                            }
                        };
                    }
                    else {
                        $$.$me_throw('TODO');
                    }
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
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//param.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const min_max = (prefix, min = 'min', max = 'max') => [prefix + '_' + min, prefix + '_' + max];
        $$.$me_atom2_list_row_height_source_fn_apply = ({ key: [row_i], val, prev }) => {
            if (val == null || val < 0 ||
                +row_i >= $$.a('.row_count') ||
                $$.$me_list_row_i_out_of_range_is(+row_i, $$.a('.row_i_min'), $$.a('.row_i_max')))
                return;
            set_row_height($$.a(`.rec_idx[${row_i}]`), $$.a('._provider'), $$.a('.provider_tag'), val);
            if (prev == null)
                return;
            const delta = prev - val;
            if (!delta)
                return;
            if (delta < 0) {
                const top = $$.a(`.row_top[${row_i}]`);
                const delta_bottom = top + val - $$.a('.#height');
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
                const height = $$.a('.#height') + delta;
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
                if (dispatch_name == 'get_row_height') {
                    const row_heights = $$.a('.row_heights');
                    dispatch_arg.val = !row_heights.has(dispatch_arg.idx) ? $$.a('.row_height_min') : row_heights.get(dispatch_arg.idx);
                    return true;
                }
                else if (dispatch_name == 'set_row_height') {
                    const row_heights = $$.a('.row_heights');
                    if (dispatch_arg.val != $$.a('.row_height_min')) {
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
                        let row_i = $$.a('.row_i_min');
                        const row_i_max = $$.a('.row_i_max');
                        while (dispatch_arg(row_i) !== false && row_i != row_i_max)
                            row_i = next_i(1, row_i, row_count);
                    }
                    return true;
                }
                return false;
            },
            prop: Object.assign({ _provider: () => $$.a.curr.parent(true).path, provider_tag: () => null, rec_idx_delta: () => 1, rec_idx_max: $$.$me_atom2_prop(['.rec_count'], ({ masters: [rec_count] }) => rec_count - 1), row_count: $$.$me_atom2_prop(['.#height', '.row_height_min', '.header_height', '.rec_count'], ({ masters: [height, row_height_min, header_height, rec_count] }) => 2 + Math.min(rec_count, Math.ceil(Math.max(0, height - header_height) / row_height_min)), ({ prev, val }) => {
                    if (prev != null && prev > val)
                        return prev;
                }), row_i: $$.$me_atom2_prop(['.row_count'], ({ masters: [row_count] }) => [...Array(row_count).keys()].map(i => i + '')) }, $$.$me_atom2_prop_same_def(() => null, [
                ...min_max('row_i'),
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
                    masters: $$.$me_atom2_prop_masters(['.row_i_min', '.row_i_max'], ({ key: [row_i], masters: [row_i_min, row_i_max] }) => $$.$me_list_row_i_out_of_range_is(+row_i, row_i_min, row_i_max) ? [] :
                        [`.rec_idx[${row_i}]`, '._provider', '.provider_tag']),
                }, ({ len, masters: [rec_idx, _provider, provider_tag] }) => !len || !_provider || !provider_tag ? -1 : get_row_height(rec_idx, _provider, provider_tag, true), $$.$me_atom2_list_row_height_source_fn_apply), row_height: $$.$me_atom2_prop({ keys: ['.row_i'], masters: ['.row_height_source[]'] }, ({ key: [row_i], masters: [to, row_top_anim], prev }) => to < 0 ? null : prev == null || prev == to ? to : $$.$me_atom2_anim({
                    to,
                    fini: () => adjust_rows($$.a('.visible_top')),
                }), ({ val }) => val == null ? null : Math.round(val)), adjust_rows: $$.$me_atom2_prop(['._provider', '.provider_tag', '.#height', '.rec_count'], null, () => {
                    adjust_rows($$.a('.visible_top'));
                }), '#order': () => ['row', 'header'] }),
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
            },
            style: {
                overflow: () => 'hidden',
            },
            event: {
                wheel: p => p.isInRect(p.event.clientX, p.event.clientY) &&
                    $$.$me_list_wheel_helper(p.event._deltaX, p.event._deltaY),
            },
        };
        $$.$me_list_wheel_helper = (deltaX, deltaY) => {
            if (Math.abs(deltaX) < Math.abs(deltaY)) {
                const fromBottom = deltaY < 0;
                if (fromBottom ?
                    $$.a('.visible_idx_min') > 0 || $$.a('.visible_top') < $$.a('.header_height') :
                    $$.a('.visible_idx_max') < $$.a('.rec_idx_max') || $$.a('.visible_bottom') > $$.a('.#height'))
                    adjust_rows($$.a(fromBottom ? '.visible_bottom' : '.visible_top') - deltaY, fromBottom);
                return true;
            }
            return false;
        };
        $$.$me_list_row_i_out_of_range_is = (key, row_i_min, row_i_max) => row_i_max == row_i_min ||
            row_i_max > row_i_min && (key < row_i_min || key > row_i_max) ||
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
                const ec = $$.$me_atom2_entity.root().by_path(_provider);
                if (!ec.dispatch('get_row_height', dispatch_arg))
                    $$.$me_throw(`could not get_row_height(${provider_tag}, ${idx}) from ${ec.name()}`);
                result = dispatch_arg.val;
            }
            return Math.round(result);
        };
        const set_row_height = (idx, _provider, provider_tag, val) => {
            const dispatch_arg = { idx, val, tag: provider_tag };
            const ec = $$.$me_atom2_entity.root().by_path(_provider);
            if (!ec.dispatch('set_row_height', dispatch_arg))
                $$.$me_throw(`could not set_row_height(${provider_tag}, ${idx}, ${val}) to ${ec.name()}`);
        };
        function adjust_rows(val, fromBottom = false, row_height) {
            if (!row_height)
                row_height = get_row_height;
            if (!$$.a('.rec_count'))
                return;
            const p = {
                val,
                idx_max: $$.a('.rec_idx_max'),
                i: $$.a(fromBottom ? '.row_i_max' : '.row_i_min'),
                idx: $$.a(fromBottom ? '.visible_idx_max' : '.visible_idx_min'),
                len: $$.a('.row_count'),
                _provider: $$.a('._provider'),
                provider_tag: $$.a('.provider_tag'),
                height: $$.a('.#height'),
                header_height: $$.a('.header_height'),
            };
            compute_visible(p, !fromBottom, row_height);
            set_visible(p, !fromBottom);
            compute_visible(p, fromBottom, row_height);
            set_visible(p, fromBottom);
        }
        function compute_visible(p, bottom = false, row_height) {
            if (!row_height)
                row_height = get_row_height;
            compute_visible_helper(p, bottom, row_height);
            if (bottom) {
                if (p.val < p.height)
                    p.val = p.height;
            }
            else {
                if (p.val > p.header_height)
                    p.val = p.header_height;
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
        $$.$me_panel = {
            type: '$me_panel',
            prop: Object.assign({}, $$.$me_atom2_prop_same_def(() => 0, ['borderRadius']), $$.$me_atom2_prop_same_def(() => 'transparent', ['colorBackground']), $$.$me_atom2_prop_cascade(() => 0, 'padding', [
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
                    borderHasColor = borderHasColor || currColor && (currColor != 'transparent');
                    if (void 0 !== prevWidth) {
                        borderHasWidthSame = borderHasWidthSame && (currWidth == prevWidth);
                        borderHasColorSame = borderHasColorSame && (currColor == prevColor);
                    }
                    prevWidth = currWidth;
                    prevColor = currColor;
                }
                const colorBackground = $$.a('.colorBackground');
                if (borderHasWidth && borderHasColor || colorBackground && colorBackground != 'transparent') {
                    $$.$me_atom2_ctx_rect({
                        ctx: p.ctx,
                        ctxTop: p.ctxRect.top,
                        ctxLeft: p.ctxRect.left,
                        ctxWidth: p.ctxRect.right - p.ctxRect.left,
                        ctxHeight: p.ctxRect.bottom - p.ctxRect.top,
                        ctxBorderRadius: p.pixelRatio * $$.a('.borderRadius'),
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
        $$.$me_label = {
            type: '$me_label',
            base: $$.$me_panel,
            prop: Object.assign({}, $$.$me_atom2_prop_cascade(() => $$.$me_align.left, 'align', ['alignHor', 'alignVer']), { _width_text: $$.$me_atom2_prop(['.#ctx', '.text', '/.#pixelRatio'], ({ masters: [ctx, text, pixelRatio] }) => {
                    $$.$me_atom2_control.font_prepare(ctx, pixelRatio);
                    return Math.ceil(ctx.measureText(text).width / pixelRatio);
                }) }, $$.$me_atom2_prop_same_fn_compute($$.$me_atom2_prop_compute_fn_sum(), {
                '#width': ['._width_text', '.paddingLeft', '.paddingRight'],
                '#height': ['.fontSize', '.paddingTop', '.paddingBottom'],
            }), { text: () => '' }),
            render: p => {
                let { ctxWidth, ctxHeight } = p;
                const ctxFontSize = $$.$me_atom2_control.font_prepare(p.ctx, p.pixelRatio);
                const text = $$.a('.text');
                const ctxTextWidth = Math.round(p.ctx.measureText(text).width);
                const ctxPaddingLeft = Math.round(p.pixelRatio * $$.a('.paddingLeft'));
                const ctxPaddingRight = Math.round(p.pixelRatio * $$.a('.paddingRight'));
                const ctxPaddingTop = Math.round(p.pixelRatio * $$.a('.paddingTop'));
                const ctxPaddingBottom = Math.round(p.pixelRatio * $$.a('.paddingBottom'));
                ctxWidth -= ctxPaddingLeft + ctxPaddingRight;
                ctxHeight -= ctxPaddingTop + ctxPaddingBottom;
                if (ctxHeight < ctxFontSize - 1) {
                    console.error({ ctxHeight, ctxFontSize });
                    return;
                }
                const bottom = p.ctxRect.bottom - ctxPaddingBottom - $$.$me_align_correction($$.a('.alignVer'), () => ctxHeight - ctxFontSize);
                const _left = (ctxTextWidth) => p.ctxRect.left + ctxPaddingLeft + $$.$me_align_correction($$.a('.alignHor'), () => ctxWidth - ctxTextWidth);
                p.ctx.fillStyle = $$.a('.colorText');
                if (ctxTextWidth <= ctxWidth) {
                    p.ctx.fillText(text, _left(ctxTextWidth), bottom);
                }
                else {
                    const ctxPeriodWidth = p.ctx.measureText(period).width;
                    if (ctxWidth < ctxPeriodWidth) {
                        console.error({ ctxWidth, ctxPeriodWidth });
                        return;
                    }
                    let len = text.length, wi = ctxTextWidth, s;
                    while (len && wi > ctxWidth - ctxPeriodWidth)
                        wi = p.ctx.measureText(s = text.slice(0, --len)).width;
                    const left = _left(wi + ctxPeriodWidth);
                    p.ctx.fillText(s, left, bottom);
                    p.ctx.fillText(period, left + wi, bottom);
                }
            },
        };
        const period = '...';
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//label.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const min_max = (prefix, min = 'min', max = 'max') => [prefix + '_' + min, prefix + '_' + max];
        let by_idx = {};
        let timerId;
        $$.$nl_elem_search_grid = {
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
                    const col = $$.a(`.col[${col_id}]`);
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
                                const ec = $$.$me_atom2_entity.root().by_path(path);
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
                                ec.dispatch('get_recs', { by_idx });
                            });
                        }
                    }
                    dispatch_arg.val = '';
                    return true;
                }
                else if (dispatch_name == 'recs') {
                    const cell_text_store = $$.a('.cell_text_store');
                    const rec_fld_store = $$.a('.rec_fld_store');
                    const influence = $$.a('.influence');
                    const by_idx = dispatch_arg.by_idx;
                    const cols = $$.a('.cols');
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
                        const elem = $$.a.curr;
                        let i = 0;
                        let idx_min, idx_max;
                        elem.dispatch('iterate_rows', (row_i) => {
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
                row_opens_store: () => new Map(),
                row_opens: $$.$me_atom2_prop(['.provider_tag', '.row_opens_store'], ({ masters: [tag, holder] }) => holder[tag] || (holder[tag] = new Set())),
                row_open: $$.$me_atom2_prop({
                    keys: ['.row_i'],
                    masters: $$.$me_atom2_prop_masters(['.row_i_min', '.row_i_max'], ({ key: [row_i], masters: [row_i_min, row_i_max] }) => $$.$me_list_row_i_out_of_range_is(+row_i, row_i_min, row_i_max) ? [] :
                        [`.rec_idx[${row_i}]`, '._provider', '.provider_tag']),
                }, ({ len, masters: [rec_idx, _provider, provider_tag] }) => !len || !_provider || !provider_tag ? -1 : get_row_open(rec_idx, _provider, provider_tag), ({ key: [row_i], val, prev }) => {
                    if (val == null || val < 0 ||
                        +row_i >= $$.a('.row_count') ||
                        $$.$me_list_row_i_out_of_range_is(+row_i, $$.a('.row_i_min'), $$.a('.row_i_max')))
                        return;
                    set_row_open($$.a(`.rec_idx[${row_i}]`), $$.a('._provider'), $$.a('.provider_tag'), val);
                }),
                adjust_row_height_source: $$.$me_atom2_prop({
                    keys: ['.row_i'],
                    masters: $$.$me_atom2_prop_masters(['.row_open[]'], ({ key: [row_i], masters: [row_open] }) => !row_open ? ['.row_height_min'] : ['.row_height_min', `@row[${row_i}]@content@comment.#height`]),
                }, null, ({ key: [row_i], val }) => {
                    const height = !Array.isArray(val) ? val : val[0] + val[1];
                    $$.a(`.row_height_source[${row_i}]`, height);
                }),
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
                cell_text_store: () => ({}),
                rec_fld_store: () => ({}),
                col_ids: $$.$me_atom2_prop_keys(['.cols']),
                col: $$.$me_atom2_prop({ keys: ['.col_ids'], masters: ['.cols'] }, ({ key: [id], masters: [cols] }) => cols[id]),
                col_width: $$.$me_atom2_prop({ keys: ['.col_ids'], masters: ['.col[]'] }, ({ masters: [col] }) => col.width),
                col_align: $$.$me_atom2_prop({ keys: ['.col_ids'], masters: ['.col[]'] }, ({ masters: [col] }) => col.align || $$.$me_align.left),
                col_width_min: () => 8,
                col_caption: $$.$me_atom2_prop({ keys: ['.col_ids'], masters: ['.col[]'] }, ({ key: [id], masters: [col] }) => col.caption || id),
                col_fixed_width: () => 37,
                col_width_sum: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.col_ids'], ({ masters: [col_ids] }) => col_ids.map(id => `.col_width[${id}]`)), $$.$me_atom2_prop_compute_fn_sum()),
                ofsHor: $$.$me_atom2_prop(['.col_fixed_width'], ({ prev, masters: [col_fixed_width] }) => prev == null ? col_fixed_width : prev, ({ val, atom }) => Math.min(Math.max(val, ($$.a('.#width') + $$.a('.col_fixed_width')) / 2 - $$.a('.col_width_sum')), $$.a('.col_fixed_width'))),
                ofsHor_adjust: $$.$me_atom2_prop(['.#width'], null, ({ val, prev }) => {
                    if (prev == null || val == prev)
                        return;
                    if (val > prev)
                        $$.a('.ofsHor', $$.a('.ofsHor') + val - prev);
                }),
                col_left: $$.$me_atom2_prop({
                    keys: ['.col_ids'],
                    masters: $$.$me_atom2_prop_masters(['.col_ids'], ({ key: [id], masters: [ids] }) => {
                        const idx = ids.indexOf(id);
                        return !idx ? ['.ofsHor'] : [`.col_left[${ids[idx - 1]}]`, `.col_width[${ids[idx - 1]}]`];
                    }),
                }, ({ len, masters: [left, width] }) => len == 1 ? left : left + width),
                header_height: () => 32,
                row_height_min: () => 28,
                header_content: () => header,
                row_content: $$.$me_atom2_prop({ keys: ['.row_i'] }, ({ key: [row_i] }) => ({
                    base: row,
                    prop: {
                        row_i: () => row_i,
                    },
                })),
                cell_text: $$.$me_atom2_prop({ keys: ['.row_i', '.col_ids'], masters: ['.rec_idx[]', '._provider', '.provider_tag'] }, ({ key: [row_i, col_id], masters: [rec_idx, _provider, tag] }) => {
                    const dispatch_arg = { tag, rec_idx, col_id };
                    const ec = $$.$me_atom2_entity.root().by_path(_provider);
                    if (!ec.dispatch('get_cell_text', dispatch_arg))
                        $$.$me_throw(`could not obtain cell_text[${rec_idx}][${col_id}] from ${ec.name()}`);
                    return dispatch_arg.val;
                }),
                row_cursor: () => '',
                '#order': () => ['row', 'cursor', 'header'],
                touchStart: () => null,
                lastDrag: $$.$me_atom2_prop([], () => null, ({ atom, val }) => {
                    $$.$me_atom2_body_cursor({ origin: atom.path, val: val ? 'grabbing' : 'default' });
                }),
                lastDelta: () => null,
                accel: () => null,
                prevTime: () => null,
                scrollAccu: () => null,
            },
            event: {
                wheel: p => p.isInRect(p.event.clientX, p.event.clientY) &&
                    wheel_helper(p.event._deltaX, p.event._deltaY),
                wheelTouch: p => p.isInRect(p.event.start.touches[0].clientX, p.event.start.touches[0].clientY) &&
                    wheel_helper(p.event._deltaX, p.event._deltaY),
            },
            elem: {
                cursor: () => ({
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<.row_cursor'], ({ masters: [row_i] }) => !row_i),
                        '#ofsVer': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<.row_cursor'], ({ masters: [row_i] }) => !row_i ? [] : [`<.row_top[${row_i}]`]), ({ len, masters: [val] }) => !len ? null : val),
                        '#ofsHor': () => 2,
                        '#height': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<.row_cursor'], ({ masters: [row_i] }) => !row_i ? [] : [`<.row_height[${row_i}]`]), ({ len, masters: [val] }) => !len ? null : val),
                        '#width': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<.col_ids'], ({ masters: [col_ids] }) => {
                            const col_id_last = col_ids[col_ids.length - 1];
                            return [`<.col_left[${col_id_last}]`, `<.col_width[${col_id_last}]`];
                        }), $$.$me_atom2_prop_compute_fn_sum(-4)),
                    },
                    style: {
                        boxShadow: () => '0 1px 6px 0 rgba(0, 0, 0, 0.5)',
                        pointerEvents: () => 'none',
                    },
                }),
            }
        };
        const wheel_helper = (deltaX, deltaY) => {
            if (!$$.$me_list_wheel_helper(deltaX, deltaY) && Math.abs(deltaX) > Math.abs(deltaY)) {
                $$.a('.ofsHor', $$.a('.ofsHor') - deltaX);
                return true;
            }
            return false;
        };
        const cell = {
            style: {
                borderRight: () => '1px solid #adb0b8',
                borderBottom: () => '1px solid #adb0b8',
                boxSizing: () => 'border-box',
            },
        };
        const header_cell = {
            base: cell,
            style: {
                background: () => '#d8dce3',
            },
        };
        const row_cell = {
            base: cell,
            style: {
                background: () => '#F5F8F8',
            },
        };
        const cell_content = {
            prop: {
                '#height': () => null,
                '#width': () => null,
            },
            style: {
                whiteSpace: () => 'nowrap',
                overflow: () => 'hidden',
                textOverflow: () => 'ellipsis',
                maxWidth: $$.$me_atom2_prop(['<.#width'], ({ masters: [width] }) => width - 8),
                fontSize: () => 14,
                userSelect: () => 'none',
                paddingLeft: () => 4,
                paddingRight: () => 4,
            },
        };
        const get_row_open = (idx, _provider, provider_tag) => {
            const dispatch_arg = { idx, tag: provider_tag };
            const ec = $$.$me_atom2_entity.root().by_path(_provider);
            if (!ec.dispatch('get_row_open', dispatch_arg))
                $$.$me_throw(`could not get_row_open(${provider_tag}, ${idx}) from ${ec.name()}`);
            return dispatch_arg.val;
        };
        const set_row_open = (idx, _provider, provider_tag, val) => {
            const dispatch_arg = { idx, val, tag: provider_tag };
            const ec = $$.$me_atom2_entity.root().by_path(_provider);
            if (!ec.dispatch('set_row_open', dispatch_arg))
                $$.$me_throw(`could not set_row_open(${provider_tag}, ${idx}, ${val}) to ${ec.name()}`);
        };
        $$.$nl_elem_search_grid_cursor = $$.$me_atom2_async_multi_origin({
            default: '',
            raf_order: 100,
            flush: (row_i, prev, _value) => {
                _value.origin.by_path_s('<<.row_cursor').value(row_i);
            },
        });
        const use_control = false;
        const row = {
            prop: {
                '#order': () => ['cell', 'fixed'],
                '#isHover': () => false,
                row_cursor_src: $$.$me_atom2_prop(['.#isHover', '.row_i'], ({ masters: [isHover, row_i] }) => !isHover ? '' : row_i, ({ atom, val }) => {
                    $$.$nl_elem_search_grid_cursor({ origin: atom, val: val });
                }),
            },
            style: {
                overflow: () => 'hidden',
            },
            control: !use_control ? null : {
                fixed: () => ({
                    base: $$.$me_label,
                    prop: {
                        '#width': '<<<.col_fixed_width',
                        '#height': '<<<.#row_height_min',
                        borderWidthRight: () => 1,
                        colorBorderRight: () => '#adb0b8',
                        borderWidthBottom: () => 1,
                        colorBorderBottom: () => '#adb0b8',
                        colorBackground: () => '#d8dce3',
                        align: () => $$.$me_align.center,
                        text: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<.row_i'], ({ masters: [row_i] }) => [`<<<.rec_idx[${row_i}]`])),
                        fontSize: () => 14,
                    },
                }),
                cell: $$.$me_atom2_prop({ keys: ['<<.col_ids'], masters: ['<<.col_left[]', '<<.col_width[]', '<<.col_fixed_width', '<<.#width'] }, ({ key: [id], masters: [col_left, col_width, col_fixed_width, parent_width], prev }) => ({
                    base: $$.$me_label,
                    prop: {
                        '#width': `<<<.col_width[${id}]`,
                        '#ofsHor': `<<<.col_left[${id}]`,
                        borderWidthRight: () => 1,
                        colorBorderRight: () => '#adb0b8',
                        borderWidthBottom: () => 1,
                        colorBorderBottom: () => '#adb0b8',
                        colorBackground: () => '#F5F8F8',
                        text: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<.row_i'], ({ masters: [row_i] }) => [`<<<.cell_text[${row_i}][${id}]`])),
                        paddingHor: () => 4,
                        fontSize: () => 14,
                        alignVer: () => $$.$me_align.center,
                        alignHor: `<<<.col_align[${id}]`,
                    },
                })),
            },
            elem: use_control ? null : {
                fixed: () => ({
                    base: header_cell,
                    prop: {
                        '#width': '<<<.col_fixed_width',
                        '#height': '<<<.row_height_min',
                    },
                    elem: {
                        text: () => ({
                            base: cell_content,
                            prop: {
                                '#align': () => $$.$me_align.center,
                                fontSize: () => 14,
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<<.row_i'], ({ masters: [row_i] }) => [`<<<<.rec_idx[${row_i}]`])),
                            },
                        }),
                    },
                }),
                cell: $$.$me_atom2_prop({ keys: ['<<.col_ids']
                }, ({ key: [id] }) => ({
                    base: row_cell,
                    prop: {
                        '#width': `<<<.col_width[${id}]`,
                        '#height': '<<<.row_height_min',
                        '#ofsHor': `<<<.col_left[${id}]`,
                        '#hidden': $$.$me_atom2_prop([`<<<.col_left[${id}]`, `<<<.col_width[${id}]`, `<<<.col_fixed_width`, `<<<.#width`], ({ masters: [col_left, col_width, col_fixed_width, parent_width] }) => col_left >= parent_width || col_left + col_width <= col_fixed_width),
                        '#cursor': () => 'pointer',
                    },
                    event: {
                        clickOrTap: () => {
                            const row_open = $$.a(`<<<.row_open[${$$.a('<.row_i')}]`);
                            $$.a(`<<<.row_open[${$$.a('<.row_i')}]`, !row_open);
                            return true;
                        }
                    },
                    elem: {
                        text: () => ({
                            base: cell_content,
                            prop: {
                                '#alignVer': () => $$.$me_align.center,
                                '#alignHor': `<<<<.col_align[${id}]`,
                            },
                            dom: {
                                innerText: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<<.row_i'], ({ masters: [row_i] }) => [`<<<<.cell_text[${row_i}][${id}]`])),
                            },
                        }),
                    },
                })),
                comment: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.row_i'], ({ masters: [row_i] }) => [`<<.row_open[${row_i}]`]), ({ masters: [row_open] }) => !row_open ? null :
                    {
                        dom: {
                            innerText: () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare nisl et tortor euismod, ut consequat nunc vehicula. Integer sit amet quam ante. Integer bibendum ante vel semper auctor. Mauris vitae erat gravida, ultrices libero id, pellentesque enim. Phasellus molestie malesuada tellus, in commodo lectus dictum at. Aliquam malesuada venenatis tellus a feugiat. Ut ac.'
                        },
                        prop: {
                            '#ofsVer': '<<<.row_height_min',
                            '#height': () => null,
                            '#width': $$.$me_atom2_prop($$.$me_atom2_prop_masters(['<<<.col_ids'], ({ masters: [col_ids] }) => {
                                const col_id_last = col_ids[col_ids.length - 1];
                                return ['<.#width', `<<<.col_left[${col_id_last}]`, `<<<.col_width[${col_id_last}]`];
                            }), ({ masters: [width, col_left, col_width] }) => Math.min(width, col_left + col_width)),
                        },
                        style: {
                            fontSize: () => 14,
                            padding: () => 8,
                            boxSizing: () => 'border-box',
                            userSelect: () => 'auto',
                        },
                    }),
            }
        };
        const header = {
            prop: {
                readyToResize: () => '',
                resizeStart: () => -1,
                resizeInitial: () => null,
                'cursor': $$.$me_atom2_prop(['.readyToResize', '.resizeStart'], ({ masters: [readyToResize, resizeStart] }) => {
                    const result = !readyToResize && resizeStart == -1 ? 'default' : 'col-resize';
                    return result;
                }, ({ atom, val }) => {
                    $$.$me_atom2_body_cursor({ origin: atom.path, val: val });
                }),
                '#order': () => ['cell', 'fixed'],
            },
            style: {
                overflow: () => 'hidden',
            },
            control: !use_control ? null : {
                fixed: () => ({
                    base: $$.$me_panel,
                    prop: {
                        '#width': '<<<.col_fixed_width',
                        '#height': '<.#height',
                        borderWidthRight: () => 1,
                        colorBorderRight: () => '#adb0b8',
                        borderWidthBottom: () => 1,
                        colorBorderBottom: () => '#adb0b8',
                        colorBackground: () => '#d8dce3',
                    },
                }),
            },
            elem: use_control ? null : {
                fixed: () => ({
                    base: header_cell,
                    prop: {
                        '#width': '<<<.col_fixed_width',
                    },
                }),
                cell: $$.$me_atom2_prop({ keys: ['<<.col_ids'], masters: ['<<.col_left[]', '<<.col_width[]', '<<.col_fixed_width', '<<.#width'] }, ({ key: [id], masters: [col_left, col_width, col_fixed_width, parent_width], prev }) => col_left >= parent_width || col_left + col_width <= col_fixed_width ? prev || null :
                    {
                        base: header_cell,
                        prop: {
                            '#width': `<<<.col_width[${id}]`,
                            '#ofsHor': `<<<.col_left[${id}]`,
                        },
                        elem: {
                            text: () => ({
                                base: cell_content,
                                prop: {
                                    '#align': () => $$.$me_align.center,
                                },
                                dom: {
                                    innerText: `<<<<.col_caption[${id}]`,
                                },
                            }),
                        },
                    }),
            },
            event: {
                mousemove: p => {
                    const resizeStart = $$.a('.resizeStart');
                    if (resizeStart != -1) {
                        const width = Math.max($$.a('<<.col_width_min'), $$.a('.resizeInitial') + p.event.clientX - resizeStart);
                        const id = $$.a('.readyToResize');
                        $$.a(`<<.col_width[${id}]`, width);
                        return true;
                    }
                    else {
                        let id_found = '';
                        if (p.isInRect(p.event.clientX, p.event.clientY)) {
                            const cells = $$.a.get('@cell')._entities.key;
                            const delta = 4;
                            for (const id in cells) {
                                const clientRect = cells[id]._entities.prop['#clientRect'].value();
                                if (clientRect.right - delta <= p.event.clientX && p.event.clientX <= clientRect.right + delta) {
                                    id_found = id;
                                    break;
                                }
                            }
                        }
                        $$.a('.readyToResize', id_found);
                    }
                    return true;
                },
                mousedown: p => {
                    if (!p.isInRect(p.event.clientX, p.event.clientY))
                        return false;
                    const id = $$.a('.readyToResize');
                    if (id) {
                        $$.a('.resizeStart', p.event.clientX);
                        $$.a('.resizeInitial', $$.a(`<<.col_width[${id}]`));
                    }
                    return true;
                },
                mouseup: p => {
                    const resizeStart = $$.a('.resizeStart');
                    if (resizeStart != -1) {
                        $$.a('.resizeStart', -1);
                        $$.a('.resizeInitial', null);
                        $$.a('.readyToResize', '');
                    }
                    return false;
                },
            },
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
        let _dataWorker;
        $$.$nl_elem_search_panel_result = {
            base: $$.$nl_elem_search_panel,
            dispatch: (dispatch_name, dispatch_arg) => {
                if (dispatch_name == 'get_recs') {
                    $$.a('.dataWorker').postMessage(Object.assign({}, dispatch_arg, { cmd: 'recs', tag: $$.a('.provider_tag') }));
                    return true;
                }
                else if (dispatch_name == 'recs') {
                    const ec = $$.a.get('@grid');
                    ec.dispatch(dispatch_name, dispatch_arg);
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
                    return null;
                }),
                dataWorker: () => {
                    if (!_dataWorker) {
                        _dataWorker = new Worker(window.location.href + 'data/-/web.js');
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
                                const ec = $$.a.curr.parent(true);
                                ec.dispatch(event.data.cmd, event.data);
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
                    },
                    dom: {
                        innerText: $$.$me_atom2_prop(['<.count'], ({ masters: [count] }) => `Показано ${count} предложений`.toUpperCase()),
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
                    event: {
                        clickOrTap: () => {
                            console.log('filter');
                            return true;
                        },
                    },
                }),
                mode_switcher: () => ({
                    base: $$.$nl_elem_switch,
                    prop: {
                        '#ofsVer': () => 16,
                        '#alignHor': () => $$.$me_align.right,
                        values: () => ['Таблица', 'Плитка', 'Карта'],
                        selected: $$.$me_atom2_prop([`<.mode`], null, ({ val }) => {
                            $$.a('<.mode', val);
                        }),
                        paddingHor: () => 16,
                    },
                }),
                grid: $$.$me_atom2_prop(['.mode'], ({ masters: [mode], prev }) => mode != 'Таблица' ? prev || null : {
                    type: '$nl_elem_search_grid',
                    base: $$.$nl_elem_search_grid,
                    prop: {
                        provider: () => $$.a.get('<').path,
                        rec_count: '<.count',
                        row_opens: $$.$me_atom2_prop(['<.order'], ({ masters: [order] }) => order.row_opens || (order.row_opens = new Set())),
                        on_order_changed: $$.$me_atom2_prop(['<.order'], null, ({ val }) => {
                            if (!val)
                                return;
                            const ec = $$.a.curr.parent(true);
                            ec.dispatch('set_view', val);
                        }),
                        on_change_row_i_min: $$.$me_atom2_prop(['.row_i_min', '<.order'], null, ({ val: [row_i_min, order] }) => {
                            order.row_i_min = row_i_min;
                        }),
                        on_change_visible_idx_min: $$.$me_atom2_prop(['.visible_idx_min', '<.order'], null, ({ val: [visible_idx_min, order] }) => {
                            order.visible_idx_min = visible_idx_min;
                        }),
                        on_change_visible_top: $$.$me_atom2_prop(['.visible_top', '<.order'], null, ({ val: [visible_top, order] }) => {
                            order.visible_top = visible_top;
                        }),
                        '#hidden': $$.$me_atom2_prop(['<.mode'], ({ masters: [mode] }) => mode != 'Таблица'),
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
                                fn: (price_rub) => {
                                    var x = (price_rub + '').split('.');
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
                                    var x = (meter_price_rub + '').split('.');
                                    var x1 = x[0];
                                    var x2 = x.length > 1 ? '.' + x[1] : '';
                                    var rgx = /(\d+)(\d{3})/;
                                    while (rgx.test(x1))
                                        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
                                    return x1 + x2;
                                },
                            },
                            'Дата': {
                                align: $$.$me_align.center,
                                width: 85,
                                fld: ['pub_datetime'],
                                fn: (pub_datetime) => {
                                    const dt = new Date(pub_datetime);
                                    return dt.getDate() + '.' + (dt.getMonth() + 1 + '').padStart(2, '0') + '.' + dt.getFullYear();
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
        $$.$nl_elem_search_workspace = {
            prop: {
                orders: () => [
                    {
                        id: 'id1',
                        title: 'Заказ 2',
                        params: {
                            rmqt: new Set(['1', '2']),
                        },
                    },
                    {
                        id: 'id2',
                        title: 'Заказ 1',
                        params: {
                            rmqt: new Set(['4', '6+']),
                        },
                    },
                ],
                order_idx: $$.$me_atom2_prop_keys(['.orders']),
                order: $$.$me_atom2_prop({ keys: ['.order_idx'], masters: ['.orders'] }, ({ key: [idx], masters: [orders] }) => orders[idx]),
                order_title: $$.$me_atom2_prop({ keys: ['.order_idx'], masters: ['.order[]'] }, ({ masters: [order] }) => order.title.toUpperCase()),
                selected: $$.$me_atom2_prop_store('', (val) => $$.a('.order_idx').indexOf(val) >= 0),
                param_modes: () => ({
                    Полный: {
                        height: 627,
                    },
                    Основной: {
                        height: 295,
                    },
                    Сжатый: {
                        height: 123,
                    },
                }),
                param_mode_keys: $$.$me_atom2_prop_keys(['.param_modes']),
                param_mode: $$.$me_atom2_prop_store('Основной', (val) => $$.a('.param_mode_keys').indexOf(val) >= 0),
                offerCount: () => 1200,
                objCount: () => 800,
            },
            elem: {
                tabs: () => ({
                    base: $$.$nl_elem_search_tabs,
                    prop: {
                        '#height': '/@app@menu@login.#height',
                        '#ofsHor': () => 36,
                        '#ofsVer': () => 16,
                    },
                }),
                new: $$.$me_atom2_prop(['.selected'], ({ masters: [selected], prev }) => selected ? prev || null : {
                    type: '$nl_elem_search_new',
                    base: $$.$nl_elem_search_new,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => selected),
                        '#ofsVer': '<@tabs.#height',
                        '#height': $$.$me_atom2_prop(['<.#height', '<@tabs.#height'], ({ masters: [height_parent, height_tabs] }) => height_parent - height_tabs),
                    },
                }),
                panelParam: $$.$me_atom2_prop(['.selected'], ({ masters: [selected], prev }) => !selected ? prev || null : {
                    type: '$nl_elem_search_panel_param',
                    base: $$.$nl_elem_search_panel_param,
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
                    type: '$nl_elem_search_panel_result',
                    base: $$.$nl_elem_search_panel_result,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => !selected),
                        order: $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => !selected ? null : $$.a(`<.order[${selected}]`)),
                        mode: $$.$me_atom2_prop(['<.selected'], ({ masters: [selected] }) => !selected ? '' : $$.a(`<.order[${selected}]`).result_mode || 'Таблица', ({ val }) => {
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
        $$.$nl_app = (rootElem) => {
            $$.$me_atom2_entity.root().props({
                em: () => 16,
                colorText: () => '#313745',
                fontFamily: () => '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                fontWeight: () => 400,
            });
            $$.$me_atom2_ec.prop_default = Object.assign({}, $$.$me_atom2_ec.prop_default, { em: '/.em', colorText: '/.colorText', fontFamily: '/.fontFamily', fontWeight: '/.fontWeight', fontSize: '.em' });
            $$.$me_atom2_elem.style_default = Object.assign({}, $$.$me_atom2_elem.style_default, { color: '.colorText', fontFamily: '.fontFamily', fontWeight: '.fontWeight', fontSize: '.fontSize' });
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
                    },
                    prop: {
                        tapTarget: () => 0,
                    },
                    elem: {
                        workspace: () => workspace,
                        menu: () => menu,
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
                    type: '$nl_elem_search_workspace',
                    base: $$.$nl_elem_search_workspace,
                    prop: {
                        '#hidden': $$.$me_atom2_prop(['<<@menu@list.selected'], ({ masters: [selected] }) => selected != 'search'),
                    },
                }),
            },
            style: {
                overflow: () => 'hidden',
            },
        };
        const menu = {
            prop: {
                isShrinked: $$.$me_atom2_prop_store(false, (val) => typeof val == 'boolean'),
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
                selected: $$.$me_atom2_prop_store('', (val) => typeof val == 'string'),
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
//# sourceMappingURL=web.js.map