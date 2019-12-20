declare namespace $.$$ {
    enum $nl_theme {
        light = 0,
        dark = 1
    }
    enum $nl_line_style_type_enum {
        solid = 0,
        dashed = 1,
        dotted = 2,
        double = 3
    }
}

declare namespace $.$$ {
    let $me_debug: any;
    let $me_stop: boolean;
}

declare namespace $.$$ {
    type $me_fn<Value = void> = () => Value;
}

declare namespace $.$$ {
    enum $me_align {
        left = 0,
        top = 0,
        right = 1,
        bottom = 1,
        center = 2
    }
    function $me_align_correction(align: $me_align, correction: $me_fn<number>): number;
}

declare namespace $.$$ {
    let $me_throw_silent: boolean;
    function $me_throw(msg: string, ...p: any): void;
}

declare namespace $.$$ {
    interface $me_rect_intf {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }
    const $me_rect: () => {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    const $me_rect_width: (rect: $me_rect_intf) => number;
    const $me_rect_height: (rect: $me_rect_intf) => number;
    const $me_rect_dist_to: (x: number, y: number, rect: $me_rect_intf) => number;
    const $me_rect_has_point: (x: number, y: number, rect: $me_rect_intf, tolerance?: number) => boolean;
}

declare namespace $.$$ {
    interface $me_size_intf {
        width: number;
        height: number;
    }
}

declare namespace $.$$ {
    enum $me_rectcorners_enum {
        leftTop = 0,
        rightTop = 1,
        leftBottom = 2,
        rightBottom = 3
    }
    interface $me_rectcorners_intf<Value = number> {
        leftTop: Value;
        rightTop: Value;
        leftBottom: Value;
        rightBottom: Value;
    }
}

declare namespace $.$$ {
    enum $me_pos_enum {
        left = 0,
        top = 1,
        right = 2,
        bottom = 3
    }
    interface $me_pos_intf<Value = number> {
        left?: Value;
        top?: Value;
        right?: Value;
        bottom?: Value;
    }
}

declare namespace $.$$ {
    type $me_equal_type<Value> = (a: Value, b: Value) => boolean;
    function $me_equal(a: any, b: any): boolean;
}

declare namespace $.$$ {
    function $me_easing_value(initial: number, target: number, t: number, fn?: $me_easing_func): number;
    type $me_easing_func = (t: number) => number;
    const $me_easing: {
        [key: string]: $me_easing_func;
    };
}

declare namespace $.$$ {
    interface $me_point_intf {
        x: number;
        y: number;
    }
}

declare namespace $.$$ {
    interface $me_atom2_path_class_p_intf {
        ent: $me_atom2_entity_enum;
        tail?: string;
        path?: $me_atom2_path;
    }
    class $me_atom2_path {
        readonly ent: $me_atom2_entity_enum;
        readonly tail: string;
        readonly path: $me_atom2_path;
        constructor(p: $me_atom2_path_class_p_intf);
        get 'toString()'(): string;
        static fromString(s: string, pos?: number, keys?: $me_atom2_keys_intf): $me_atom2_path | string;
        toString(...paths: $me_atom2_path[]): string;
    }
    const $me_atom2_path_ent2prefix: string[];
    const $me_atom2_path_ch_parent = "<";
}

declare namespace $.$$ {
    export type $me_atom2_async_fn = (t: number) => void;
    export interface $me_atom2_async_p_intf extends queue_item_intf {
        fn: $me_atom2_async_fn;
    }
    export function $me_atom2_async(p?: $me_atom2_async_p_intf, add?: boolean): void;
    export let _me_atom2_async_raf_queue: $me_atom2_async_p_intf[];
    export function $me_atom2_async_stat_update(stat: Map<string, $me_atom2_async_stat_item_intf>, name: string, count: number, pre: number, timing: number): void;
    export function $me_atom2_async_stat_show(stat: Map<string, $me_atom2_async_stat_item_intf>, start: number, name: string): void;
    interface queue_item_intf {
        order?: number;
    }
    export type $me_atom2_async_ric_fn = (deadline: number, last_now: number, t: number) => [number, number];
    export interface $me_atom2_async_ric_p_intf extends queue_item_intf {
        fn?: $me_atom2_async_ric_fn;
        name: string;
    }
    export function $me_atom2_async_ric(p?: $me_atom2_async_ric_p_intf): void;
    export interface $me_atom2_async_stat_item_intf {
        pre: number;
        count: number;
        timing: number;
        per?: number;
    }
    export type $me_atom2_async_multi_origin_fn<Value, Origin> = (p?: {
        origin: Origin;
        val: Value;
        immediatly?: boolean;
    }) => Value;
    export function $me_atom2_async_multi_origin<Value, Origin>(pp: {
        name?: string;
        default: Value;
        raf_order?: number;
        flush: (val: Value, _prev: Value, _value: {
            origin: Origin;
            val: Value;
        }) => void;
    }): $me_atom2_async_multi_origin_fn<Value, Origin>;
    export {};
}

declare namespace $.$$ {
    enum $me_atom2_entity_enum {
        root = 0,
        key = 1,
        prop = 2,
        control = 3,
        elem = 4
    }
    interface $me_atom2_entity_class_p_base_intf {
        tail?: string;
        parent?: $me_atom2_entity;
    }
    interface $me_atom2_entity_class_p_intf extends $me_atom2_entity_class_p_base_intf {
        ent: $me_atom2_entity_enum;
    }
    let $me_atom2_entity_saved: number;
    let $me_atom2_entity_saved_stat: {
        [tail: string]: number;
    };
    class $me_atom2_entity {
        static root(): $me_atom2_entity;
        static by_path_s<Entity extends $me_atom2_entity = $me_atom2_entity>(s: string): Entity;
        static by_path<Entity extends $me_atom2_entity = $me_atom2_entity>(path: $me_atom2_path): Entity;
        private static _root;
        readonly path: $me_atom2_path;
        constructor(p: $me_atom2_entity_class_p_intf);
        protected _on_active(): void;
        destroy(): void;
        by_path_s(s: string, keys?: $me_atom2_keys_intf): $me_atom2_entity | string;
        by_path<Entity extends $me_atom2_entity = $me_atom2_entity>(path: $me_atom2_path): Entity;
        static _static_active: boolean;
        static static_active(val?: boolean): boolean;
        active(val?: boolean): boolean;
        parent(skip_keys?: boolean): $me_atom2_entity;
        name(): string;
        props(props: $me_atom2_prop_intf | $me_atom2_prop_intf[], pp?: {
            def?: (pp: {
                tail: string;
                idx: number;
                len: number;
                prop_defined: {
                    [tail: string]: number;
                };
                prop_def: $me_atom2_prop_def<any>;
                p: $me_atom2_prop_def_prepare_p_intf<any>;
            }) => $me_atom2_def<any>;
            dup?: (pp: {
                tail: string;
                idx: number;
                len: number;
                prop_defined: {
                    [tail: string]: number;
                };
                src: $me_atom2_prop_intf[];
            }) => void;
        }): {
            [tail: string]: number;
        };
        get 'parent()'(): $me_atom2_entity;
        get 'name()'(): string;
        _active: boolean;
        _entities: {
            [ent_name: string]: {
                [entity_name: string]: $me_atom2_entity;
            };
        };
        _descendant(level: number, skip_keys?: boolean): $me_atom2_entity | string;
        _waiting_for: Map<$me_atom2_entity_enum, Set<string>>;
        wait(ent: $me_atom2_entity_enum, tail: string): void;
        met(ent: $me_atom2_entity_enum, tail: string): void;
        static activate_entities(): number;
        static _to_activate: Set<$me_atom2_entity>;
    }
}

declare namespace $.$$ {
    interface $me_atom2_prop_intf {
        [prop: string]: $me_atom2_prop_def<any>;
    }
    type $me_atom2_prop_def<Value = number, Masters = any[]> = $me_atom2_prop_compute_only_def<Value, Masters> | $me_atom2_prop_def_compute_apply_intf<Value>;
    type $me_atom2_prop_compute_only_def<Value = number, Masters = any[]> = $me_atom2_prop_def_compute_intf<Value, Masters> | $me_atom2_prop_fn<Value> | string;
    interface $me_atom2_prop_def_compute_apply_intf<Value = number, Masters = any[]> extends $me_atom2_prop_def_compute_intf<Value, Masters> {
        fn_apply?: $me_atom2_apply_fn<Value>;
    }
    interface $me_atom2_prop_def_compute_intf<Value = number, Masters = any[]> {
        masters: string[];
        fn_compute?: $me_atom2_compute_fn<Value, Masters>;
    }
    type $me_atom2_prop_fn<Value = number> = $me_fn<Value> | $me_atom2_prop_key_fn<Value>;
    type $me_atom2_prop_key_fn<Value = number> = (key: string) => Value;
    const $me_atom2_prop_masters: <Masters = any[]>(masters: string[], fn_compute: $me_atom2_compute_fn<string[], Masters>) => $me_atom2_prop_def_compute_intf<string[], Masters>;
    type $me_atom2_prop_masters_type = $me_atom2_def_masters_type | $me_atom2_prop_keyed_masters_intf;
    interface $me_atom2_prop_keyed_masters_intf {
        keys: string[];
        masters?: $me_atom2_def_masters_type;
    }
    function $me_atom2_prop<Value = number, Masters = any[]>(masters: $me_atom2_prop_masters_type, fn_compute?: $me_atom2_compute_fn<Value, Masters>, fn_apply?: $me_atom2_apply_fn<Value>): $me_atom2_prop_def_compute_apply_intf<Value, Masters>;
    const $me_atom2_prop_abstract: <Value = number>() => $me_atom2_prop_def_compute_apply_intf<Value, any[]>;
    interface $me_atom2_prop_def_prepare_p_intf<Value> extends $me_atom2_entity_class_p_base_intf {
        fn_apply?: $me_atom2_apply_fn<Value>;
        fn_key_idx_changed?: $me_atom2_key_idx_changed_fn;
    }
    function $me_atom2_prop_def_prepare<Value = number>(prop_def: $me_atom2_prop_def<Value>, p: $me_atom2_prop_def_prepare_p_intf<Value>): $me_atom2_def_compute_apply_intf<Value>;
    const $me_atom2_prop_compute_fn_or: (initial?: boolean) => (p: $me_atom2_compute_fn_p_intf<boolean, boolean[]>, initial?: boolean) => boolean;
    const $me_atom2_prop_compute_fn_and: (initial?: boolean) => (p: $me_atom2_compute_fn_p_intf<boolean, boolean[]>, initial?: boolean) => boolean;
    const $me_atom2_prop_compute_fn_mul: (initial?: number) => (p: $me_atom2_compute_fn_p_intf<number, number[]>, initial?: number) => number;
    const $me_atom2_prop_compute_fn_sum: (initial?: number) => (p: $me_atom2_compute_fn_p_intf<number, number[]>, initial?: number) => number;
    const $me_atom2_prop_compute_fn_diff: (initial?: number) => (p: $me_atom2_compute_fn_p_intf<number, number[]>, initial?: number) => number;
    const $me_atom2_prop_keys: (masters: $me_atom2_prop_masters_type, strip_null?: boolean) => $me_atom2_prop_def_compute_apply_intf<string[], [{
        [key: string]: any;
    }]>;
    const $me_atom2_prop_bind: (master: string) => $me_atom2_prop_def_compute_apply_intf<number, any[]>;
    const $me_atom2_prop_either: <Value>(masters: $me_atom2_prop_masters_type, ifTrue: $me_atom2_compute_fn<Value, any[]>, ifFalse: $me_atom2_compute_fn<Value, any[]>) => $me_atom2_prop_def_compute_apply_intf<Value, [boolean]>;
    function $me_atom2_prop_same_def<Value = number>(prop_def: $me_atom2_prop_def<Value>, props: string[]): $me_atom2_prop_intf;
    function $me_atom2_prop_same_fn_compute<Value = number>(fn_compute: $me_atom2_compute_fn<Value>, props: {
        [prop: string]: $me_atom2_prop_masters_type;
    }, fn_apply_props?: {
        [prop: string]: $me_atom2_apply_fn<Value>;
    }): $me_atom2_prop_intf;
    function $me_atom2_prop_cascade<Value = number>(prop_def: $me_atom2_prop_def<Value>, prop: string, cascade_def: string | any[]): $me_atom2_prop_intf;
    const $me_atom2_prop_store: <Value = number, Masters = [boolean, Value]>(p: {
        default: () => Value;
        valid: (val: any) => Value;
        isLocal?: boolean;
        toJSON?: (val: Value) => any;
        fromJSON?: (val: any) => Value;
        is_equal?: (val_a: Value, val_b: Value) => boolean;
        condition?: string[];
    }) => $me_atom2_prop_def_compute_apply_intf<Value, any[]>;
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    interface $me_atom2_ec_cnf_intf {
        type?: string;
        skip_root_defaults?: boolean;
        base?: $me_atom2_ec_cnf_intf;
        prop?: $me_atom2_prop_intf;
        prop_default?: $me_atom2_prop_intf;
        control?: $me_atom2_control_intf;
        event?: $me_atom2_event_intf;
        dispatch?: (dispatch_name: string, dispatch_arg?: any) => boolean;
        init?: (ec: $me_atom2_ec) => void;
        fini?: (ec: $me_atom2_ec) => void;
    }
    interface $me_atom2_ec_intf {
        [tail: string]: $me_atom2_prop_def<$me_atom2_ec_cnf_intf>;
    }
    interface $me_atom2_ec_p_base_intf extends $me_atom2_entity_class_p_base_intf {
        cnf: $me_atom2_ec_cnf_intf;
        len_key?: number;
        key?: string | string[];
        keys?: string[];
        key_enum?: string[] | string[][];
    }
    interface $me_atom2_ec_p_intf extends $me_atom2_ec_p_base_intf {
        ent: $me_atom2_entity_enum;
    }
    class $me_atom2_ec extends $me_atom2_entity {
        static prop_default: $me_atom2_prop_intf;
        get 'wait_for_child()'(): {
            [name_entity: string]: any;
        };
        readonly cnf: $me_atom2_ec_cnf_intf;
        static _to_init: $me_atom2_path[];
        private _init_did;
        constructor(p: $me_atom2_ec_p_intf);
        protected _wait_for_child_do(name: string): void;
        _wait_for_child_did(name?: string): void;
        static almost_ready: Set<$me_atom2_ec>;
        _isReady(val?: boolean): boolean;
        protected _wait_for_child_did_helper(): void;
        _wait_for_child: Set<string>;
        private _active_did;
        protected _on_active(): void;
        destroy(): void;
        init(): void;
        fini(): void;
        dispatch(dispatch_name: string, dispatch_arg?: any): boolean;
        private _cnf_dispatch;
        private _cnf_init;
        private _cnf_fini;
        protected cnf_item<Type>(name: string): unknown;
        protected invalidateClientRect(): void;
        private invalidateClientRectHelper;
        protected _mk_controls(level?: number): {
            [k: string]: $me_atom2_prop_compute_only_def<$me_atom2_control_cnf_intf, any[]>;
        };
        private _cnf_item;
        protected cnf_items<Type>(name: string): {
            [k: string]: Type;
        };
        private _cnf_items;
        protected _prepare(name: string, ent: $me_atom2_entity_enum.control | $me_atom2_entity_enum.elem, dflt: $me_atom2_prop_intf, cnf?: $me_atom2_ec_cnf_intf, level?: number, skip_root_defaults?: boolean): $me_atom2_ec_prepare_ret_intf;
        static _cnf_cache: Map<$me_atom2_ec_cnf_intf, string>;
        private _prepare_helper;
        static _prepare_cache: {
            [type_name: string]: $me_atom2_ec_prepare_ret_intf;
        };
    }
    type $me_atom2_ec_bases_type<Value> = Map<$me_fn<Value>, Value>;
    interface $me_atom2_ec_prepare_ret_intf {
        defaults: $me_atom2_prop_intf;
        defaults_relative: $me_atom2_prop_intf;
    }
    const $me_atom2_ec_body_cursor: $me_atom2_async_multi_origin_fn<string, $me_atom2_path>;
    interface $me_atom2_control_cnf_intf extends $me_atom2_ec_cnf_intf {
        clean?: $me_atom2_control_clean_fn;
        render?: $me_atom2_control_render_fn;
    }
    type $me_atom2_control_render_fn = (p: $me_atom2_control_render_p_intf) => void;
    type $me_atom2_control_clean_fn = (p: $me_atom2_control_clean_p_intf) => boolean;
    interface $me_atom2_control_intf {
        [tail: string]: $me_atom2_prop_def<$me_atom2_control_cnf_intf>;
    }
    interface $me_atom2_control_p_intf extends $me_atom2_ec_p_base_intf {
        cnf: $me_atom2_control_cnf_intf;
        level?: number;
    }
    enum $me_atom2_control_render_state_enum {
        cleaned = 0,
        rendered = 1
    }
    class $me_atom2_control extends $me_atom2_ec {
        static pixelRatio(): number;
        static to_def: $me_atom2_control_p_intf[];
        static _to_render: Set<$me_atom2_path>;
        static _to_clean: Set<$me_atom2_path>;
        readonly level: number;
        render_state: $me_atom2_control_render_state_enum;
        constructor(p: $me_atom2_control_p_intf);
        protected _wait_for_child_did_helper(): void;
        destroy(): void;
        static prop_non_render_default: $me_atom2_prop_intf;
        private _mk_props;
        static font_prepare(ctx: CanvasRenderingContext2D, pixelRatio: number, prefix?: string): number;
        static font_size(pixelRatio: number, prefix?: string): number;
        private static _fontProp;
        private static _fontFamily;
        private static _fontWeight;
        static clean(controls: $me_atom2_control[], force?: boolean): number;
        private _ctxRect;
        private _clean_helper;
        static fill_controls_cache_clear(): void;
        private static _fill_controls_cache;
        private static _fill_controls;
        static render(controls: $me_atom2_control[], pixelRatio?: number): number;
        private _render_helper;
        static zIndex_sort(ss: Set<$me_atom2_path> | Array<$me_atom2_control>, to_render?: boolean): $me_atom2_control[];
    }
    interface $me_atom2_control_clean_p_intf {
        ctx: CanvasRenderingContext2D;
        ctxRect: $me_rect_intf;
    }
    interface $me_atom2_control_render_p_intf {
        self: $me_atom2_control;
        ctx: CanvasRenderingContext2D;
        pixelRatio: number;
        ctxSize: $me_size_intf;
        ctxRect: $me_rect_intf;
        ctxWidth: number;
        ctxHeight: number;
    }
}

declare namespace $.$$ {
    export interface $me_atom2_ctx_size_intf {
        pixelRatio: number;
        width: number;
        height: number;
    }
    interface ctx_intf {
        ctx: CanvasRenderingContext2D;
    }
    export interface ctx_rect_p_base_intf extends ctx_intf {
        ctxRect?: $me_rect_intf;
        ctxTop?: number;
        ctxLeft?: number;
        ctxWidth?: number;
        ctxHeight?: number;
        fillStyle?: string;
    }
    export interface $me_atom2_ctx_rect_p_intf extends ctx_rect_p_base_intf {
        ctxBorderRadius?: number | $me_rectcorners_intf;
        stroke?: {
            style: string | $me_pos_intf<string>;
            ctxWidth: number | $me_pos_intf;
        };
    }
    export function $me_atom2_ctx_rect(p: $me_atom2_ctx_rect_p_intf): void;
    export interface $me_atom2_ctx_cross_p_intf extends ctx_rect_p_base_intf, ctx_fill_stroke_intf {
    }
    export function $me_atom2_ctx_cross(p: $me_atom2_ctx_cross_p_intf): void;
    export interface $me_atom2_ctx_circle_p_intf extends $me_atom2_ctx_fill_stroke_intf {
        ctxCenterX: number;
        ctxCenterY: number;
        ctxRadius: number;
    }
    export function $me_atom2_ctxCenterOf(p: $me_atom2_ctx_rect_p_intf): {
        ctxCenterX: number;
        ctxCenterY: number;
    };
    export function $me_atom2_ctxWidthOf(p: $me_atom2_ctx_rect_p_intf): number;
    export function $me_atom2_ctxHeightOf(p: $me_atom2_ctx_rect_p_intf): number;
    export function $me_atom2_ctx_circle(p: $me_atom2_ctx_circle_p_intf): void;
    interface ctx_fill_intf {
        fillStyle?: string;
    }
    interface ctx_stroke_intf {
        stroke?: {
            style: string;
            ctxWidth: number;
        };
    }
    interface ctx_fill_stroke_intf extends ctx_fill_intf, ctx_stroke_intf {
    }
    export interface $me_atom2_ctx_fill_intf extends ctx_intf, ctx_fill_intf {
    }
    export interface $me_atom2_ctx_stroke_intf extends ctx_intf, ctx_stroke_intf {
    }
    export interface $me_atom2_ctx_fill_stroke_intf extends ctx_intf, ctx_fill_stroke_intf {
    }
    export function $me_atom2_ctx_check(p: {
        ctx: CanvasRenderingContext2D;
        ctxTop: number;
        ctxLeft: number;
        ctxWidth: number;
        ctxHeight: number;
        stroke: {
            style: string;
            ctxWidth: number;
        };
        lambda: number;
        mu: number;
    }): void;
    export function $me_atom2_ctx_buttom_line_draw(pp: {
        p: $me_atom2_control_render_p_intf;
        fn?: (ctxLineY: number) => void;
        name_atom?: {
            prefix?: string;
            lineWidth?: string;
            colorLine?: string;
        };
    }): void;
    export {};
}

declare namespace $.$$ {
    export interface $me_atom2_elem_cnf_intf extends $me_atom2_ec_cnf_intf {
        node?: $me_atom2_elem_node_type;
        style?: $me_atom2_prop_intf;
        style_default?: $me_atom2_prop_intf;
        dom?: $me_atom2_prop_intf;
        dom_default?: $me_atom2_prop_intf;
        attr?: $me_atom2_prop_intf;
        attr_default?: $me_atom2_prop_intf;
        elem?: $me_atom2_elem_intf;
    }
    export type $me_atom2_elem_node_type = string | HTMLElement | $me_atom2_tag_ns_intf;
    export interface $me_atom2_tag_ns_intf {
        tag: string;
        ns: string;
    }
    export interface $me_atom2_elem_intf {
        [tail: string]: $me_atom2_prop_def<$me_atom2_elem_cnf_intf>;
    }
    export interface $me_atom2_elem_p_intf extends $me_atom2_ec_p_base_intf {
        cnf: $me_atom2_elem_cnf_intf;
    }
    export class $me_atom2_elem extends $me_atom2_ec {
        static to_def: $me_atom2_elem_p_intf[];
        static style_default: $me_atom2_prop_intf;
        static attr_default: $me_atom2_prop_intf;
        static dom_default: $me_atom2_prop_intf;
        readonly node: HTMLElement;
        constructor(p: $me_atom2_elem_p_intf);
        private elem_parent;
        protected _wait_for_child_did_helper(): void;
        destroy(): void;
        static _to_remove: Map<Element, Set<Element>>;
        static remove_children(): number;
        private _mk_node;
        private _mk_elems;
        fn_compute_order(): string[];
        fn_apply_order(p: $me_atom2_apply_fn_p_intf<string[]>): void;
        fn_compute_visible(p: $me_atom2_compute_fn_p_intf<boolean, [boolean, boolean]>): boolean;
        fn_compute_ctxSize(p: $me_atom2_compute_fn_p_intf<ctxSize_intf, [number, number, number]>): ctxSize_intf;
        fn_apply_ctxSize(p: $me_atom2_apply_fn_p_intf<ctxSize_intf>): void;
        fn_compute_left(p: $me_atom2_compute_fn_p_intf<number, [$me_align, number, number, number]>): number;
        fn_apply_left(p: $me_atom2_apply_fn_p_intf): void;
        fn_compute_clientRect(p: $me_atom2_compute_fn_p_intf<$me_rect_intf>): $me_rect_intf;
        fn_apply_clientRect(p: $me_atom2_apply_fn_p_intf<$me_rect_intf>): void;
        private skipStyle;
        fn_apply_top(p: $me_atom2_apply_fn_p_intf): void;
        fn_apply_width(p: $me_atom2_apply_fn_p_intf): void;
        fn_apply_height(p: $me_atom2_apply_fn_p_intf): void;
        fn_apply_zIndex(p: $me_atom2_apply_fn_p_intf): void;
        fn_compute_style_visible(p: $me_atom2_compute_fn_p_intf<string, [boolean]>): "visible" | "hidden";
        fn_compute_style(p: $me_atom2_compute_fn_p_intf<$me_atom2_prop_intf>): {
            [k: string]: $me_atom2_prop_def<number, any[]>;
        };
        fn_compute_attr(p: $me_atom2_compute_fn_p_intf<$me_atom2_prop_intf>): {
            [k: string]: $me_atom2_prop_def<number, any[]>;
        };
        fn_compute_dom(p: $me_atom2_compute_fn_p_intf<$me_atom2_prop_intf>): {
            [k: string]: $me_atom2_prop_def<number, any[]>;
        };
        static _fn_apply_cache: {
            [src: string]: {
                [prop: string]: $me_atom2_apply_fn<string>;
            };
        };
        static fn_apply(src: string, tail: string): $me_atom2_apply_fn<string>;
        private _mk_props;
        private _mk_sad;
        private fn_apply_style;
        private fn_apply_attr;
        private fn_apply_dom;
        private sad_apply;
        private style;
        private dom;
        private attr;
        private static _lazy_prop_clientRect_cache;
        private static _lazy_prop_clientRect;
        private _lazy_prop_set;
        private _lazy_prop_set_helper;
        static lazy_prop_apply_did(): boolean;
        private static _lazy_prop_to_apply;
        private static _lazy_prop_to_apply_clientRect;
        static lazy_prop_apply_all(): number;
        private static _lazy_prop_apply;
        private static _lazy_prop_apply_helper;
        private static _lazy_prop_style_px_cache;
        private static _lazy_prop_style_px;
        static children_to_add: Map<$me_atom2_path, Set<$me_atom2_path>>;
        private _add_child_to_reorder;
        static reorder_children(): number;
        private _add_as_child;
        private static _indexOf;
        private static _get_key_enum;
        private static _parse;
        private static _elem_name;
    }
    interface ctxSize_intf {
        pixelRatio: number;
        width: number;
        height: number;
    }
    export {};
}

declare namespace $.$$ {
    abstract class $me_atom2_wheel_synth_class {
        mode: $me_atom2_wheel_synth_mode;
        scrollAccuX: number;
        scrollAccuY: number;
        lastDeltaX: number;
        lastDeltaY: number;
        accelX: number;
        accelY: number;
        timePrevX: number;
        timePrevY: number;
        accel_k: number;
        tPrev: number;
        session: number;
        cancel(): void;
        endHelper(): void;
        raf(t: number): any;
        abstract rafMove(t: number): any;
        abstract rafEnd(t: number): any;
        rafMoveHeler(t: number): {
            mode: $me_atom2_wheel_synth_mode;
            deltaX: number;
            deltaY: number;
        };
    }
}

declare namespace $.$$ {
    class $me_atom2_wheel_touch_class extends $me_atom2_wheel_synth_class {
        _start: TouchEvent;
        _end: TouchEvent;
        _last: TouchEvent;
        clientX0: number;
        clientY0: number;
        clientX1: number;
        clientY1: number;
        clientX2: number;
        clientY2: number;
        start(event: TouchEvent): void;
        move(event: TouchEvent): void;
        end(event: TouchEvent): void;
        rafMove(t: number): $me_atom2_event_wheel_touch_intf;
        rafEndHelper(t: number): $me_atom2_event_wheel_touch_intf;
        rafEnd(t: number): $me_atom2_event_wheel_touch_intf;
    }
    let $me_atom2_wheel_touch: $me_atom2_wheel_touch_class;
}

declare namespace $.$$ {
    class $me_atom2_wheel_drag_class extends $me_atom2_wheel_synth_class {
        _start: MouseEvent;
        _end: MouseEvent;
        _last: MouseEvent;
        clientX: number;
        clientY: number;
        start(event: MouseEvent): void;
        move(event: MouseEvent): void;
        end(event: MouseEvent): void;
        rafMove(t: number): $me_atom2_event_wheel_drag_intf;
        rafEnd(t: number): $me_atom2_event_wheel_drag_intf;
    }
    let $me_atom2_wheel_drag: $me_atom2_wheel_drag_class;
}

declare namespace $.$$ {
    export interface $me_atom2_event_intf {
        mousedown?: $me_atom2_event_def<MouseEvent>;
        mousemove?: $me_atom2_event_def<MouseEvent>;
        mouseup?: $me_atom2_event_def<MouseEvent>;
        pinchInit?: $me_atom2_event_def<$me_atom2_event_pinch_intf>;
        pinch?: $me_atom2_event_def<$me_atom2_event_pinch_intf>;
        pinchFini?: $me_atom2_event_def<$me_atom2_event_pinch_intf>;
        wheel?: $me_atom2_event_def<$me_atom2_event_wheel_intf>;
        wheelTouchInit?: $me_atom2_event_def<$me_atom2_event_wheel_touch_intf>;
        wheelTouch?: $me_atom2_event_def<$me_atom2_event_wheel_touch_intf>;
        wheelTouchFini?: $me_atom2_event_def<$me_atom2_event_wheel_touch_intf>;
        wheelDragInit?: $me_atom2_event_def<$me_atom2_event_wheel_drag_intf>;
        wheelDrag?: $me_atom2_event_def<$me_atom2_event_wheel_drag_intf>;
        wheelDragFini?: $me_atom2_event_def<$me_atom2_event_wheel_drag_intf>;
        touchstart?: $me_atom2_event_def<TouchEvent>;
        touchmove?: $me_atom2_event_def<TouchEvent>;
        touchend?: $me_atom2_event_def<TouchEvent>;
        click?: $me_atom2_event_def<$me_atom2_event_click_intf>;
        clickOutside?: $me_atom2_event_def<$me_atom2_event_click_intf>;
        tap?: $me_atom2_event_def<$me_atom2_event_tap_intf>;
        tapOutside?: $me_atom2_event_def<$me_atom2_event_tap_intf>;
        clickOrTap?: $me_atom2_event_def<$me_atom2_event_clickOrTap_intf>;
        clickOrTapOutside?: $me_atom2_event_def<$me_atom2_event_clickOrTap_intf>;
        keydown?: $me_atom2_event_keyboard_fn;
        keyup?: $me_atom2_event_keyboard_fn;
    }
    export type $me_atom2_event_def<Event> = $me_atom2_event_fn<Event> | $me_atom2_event_def_intf<Event>;
    export interface $me_atom2_event_def_intf<Event> {
        fn: $me_atom2_event_fn<Event>;
        zIndex?: $me_atom2_prop_compute_only_def;
    }
    export type $me_atom2_event_keyboard_fn = (p: $me_atom2_event_keyboard_p_intf) => boolean;
    export type $me_atom2_event_fn<Event> = (p: $me_atom2_event_p_intf<Event>) => boolean;
    export interface $me_atom2_event_click_intf {
        start: MouseEvent;
        end: MouseEvent;
    }
    export interface $me_atom2_event_tap_intf {
        start: TouchEvent;
        end: TouchEvent;
    }
    export interface $me_atom2_event_clickOrTap_intf {
        start: MouseEvent | TouchEvent;
        end: MouseEvent | TouchEvent;
    }
    export interface $me_atom2_event_p_intf<Event> {
        event: Event;
        isInRect: (clientX: number, clientY: number) => boolean;
        distToRect: (clientX: number, clientY: number) => number;
    }
    export interface $me_atom2_event_keyboard_p_intf {
        event: KeyboardEvent;
    }
    export enum $me_atom2_wheel_phase_enum {
        unknown = 0,
        accel = 1,
        decel = -1
    }
    interface wheel_intf {
        deltaX?: number;
        deltaY?: number;
        clientX?: number;
        clientY?: number;
        phaseX?: $me_atom2_wheel_phase_enum;
        phaseY?: $me_atom2_wheel_phase_enum;
        session?: number;
    }
    export interface $me_atom2_event_wheel_intf extends wheel_intf {
        src: WheelEvent;
    }
    export interface $me_atom2_event_wheel_touch_intf extends wheel_intf {
        mode: $me_atom2_wheel_synth_mode;
        start: TouchEvent;
        last: TouchEvent;
        end: TouchEvent;
    }
    export interface $me_atom2_event_wheel_drag_intf extends wheel_intf {
        mode: $me_atom2_wheel_synth_mode;
        start: MouseEvent;
        last: MouseEvent;
        end: MouseEvent;
    }
    export interface $me_atom2_event_pinch_intf {
        start: TouchEvent;
        end: TouchEvent;
        distInitial: number;
        distCurrent: number;
        scale: number;
        center: $me_point_intf;
    }
    export enum $me_atom2_wheel_synth_mode {
        justStarted = 0,
        init = 1,
        move = 2,
        end = 3,
        fini = 4
    }
    export const $me_atom2_event_wheel_y_is: (event: {
        deltaX?: number;
        deltaY?: number;
    }) => boolean;
    export const $me_atom2_event_wheel_x_is: (event: {
        deltaX?: number;
        deltaY?: number;
    }) => boolean;
    export let $me_atom2_event_mousemove_to_process: MouseEvent;
    export let $me_atom2_event_mousemove_last: MouseEvent;
    export let $me_atom2_event_wheel_to_process: $me_atom2_event_wheel_intf;
    export let $me_atom2_event_handlers: Map<string, $me_atom2_event_handlers_queue_type>;
    export interface $me_atom2_event_tap_target_intf {
        ec: $me_atom2_ec;
        dist: number;
        event: TouchEvent;
    }
    export let $me_atom2_event_click: Set<$me_atom2_path>;
    export let $me_atom2_event_tap: Map<$me_atom2_path, number>;
    export function $me_atom2_event_process(name_event: string, event: any): void;
    export function $me_atom2_event_keyboard_process(name_event: string, event: KeyboardEvent): void;
    type special_event_handler = {
        name: string;
        fn?: $me_atom2_event_fn<any>;
    };
    type event_handlers_type = Map<$me_atom2_path, ($me_atom2_event_fn<any> | special_event_handler)[]>;
    export type $me_atom2_event_handlers_queue_type = {
        zIndex: number;
        handlers: event_handlers_type;
    }[];
    export {};
}

declare namespace $.$$ {
    enum $me_atom2_pinch_mode {
        justStarted = 0,
        init = 1,
        move = 2,
        fini = 3
    }
    class $me_atom2_pinch_class {
        mode: $me_atom2_pinch_mode;
        _start: TouchEvent;
        _end: TouchEvent;
        clientX0: number;
        clientY0: number;
        clientX1: number;
        clientY1: number;
        distInitial: number;
        distCurrent: number;
        distPrev: number;
        center: $me_point_intf;
        start(event: TouchEvent): void;
        accum(event: TouchEvent): void;
        move(event: TouchEvent): void;
        cancel(): void;
        end(event: TouchEvent): void;
        raf(t: number): $me_atom2_event_pinch_intf;
    }
    let $me_atom2_pinch: $me_atom2_pinch_class;
}

declare namespace $.$$ {
    export type $me_atom2_def<Value = number, Masters = any[]> = $me_atom2_def_apply_intf<Value> | $me_atom2_def_compute_intf<Value, Masters> | $me_atom2_def_compute_apply_intf<Value, Masters>;
    interface atom_def_intf extends $me_atom2_entity_class_p_base_intf {
        keys?: string[];
        is_key?: boolean;
        fn_key_idx_changed?: $me_atom2_key_idx_changed_fn;
        descendant_level?: number;
    }
    export interface $me_atom2_def_apply_intf<Value = number> extends atom_def_intf {
        fn_apply?: $me_atom2_apply_fn<Value>;
    }
    export interface $me_atom2_def_compute_intf<Value = number, Masters = any[]> extends atom_def_intf {
        masters: $me_atom2_def_masters_type;
        fn_compute?: $me_atom2_compute_fn<Value, Masters>;
    }
    export interface $me_atom2_def_compute_apply_intf<Value = number, Masters = any[]> extends $me_atom2_def_apply_intf<Value>, $me_atom2_def_compute_intf<Value, Masters> {
    }
    export class $me_atom2<Value = number, Masters = any> extends $me_atom2_entity {
        private readonly fn_compute?;
        private readonly fn_apply?;
        readonly masters: $me_atom2_masters_type;
        private _state;
        private _value;
        private _slaves;
        private readonly _descendant_level;
        private readonly _fn_key_idx_changed;
        private _key_provider_cache;
        private _key_gen;
        private _masters_store;
        state(): $me_atom2_state_type;
        get 'fn_compute()'(): compute_result_intf<Value>;
        get 'fn_apply()'(): Error | Value;
        get 'update()'(): void;
        get 'masters()'(): {
            [name: string]: any;
        };
        get 'slaves()'(): {
            [name: string]: any;
        };
        get 'state()'(): any;
        private get_state_helper;
        constructor(p: $me_atom2_def<Value>);
        destroy(): void;
        by_path_s<Entity = $me_atom2<any>>(s: string, keys?: $me_atom2_keys_intf): Entity;
        private no_wait_for_master;
        private add_slave;
        rm_slave(atom_slave: $me_atom2<any>): void;
        unregister_as_slave(masters: string[]): void;
        update(fn: (val: Value) => Value | $me_atom2_anim_class<Value>, force?: boolean): Value;
        value(val?: Value | $me_atom2_anim_class<Value>, force?: boolean): Value;
        static is_valid_value(val: any): boolean;
        static _update_atoms: {
            compute: Map<$me_atom2_path, boolean>;
            apply: Map<$me_atom2_path, boolean>;
        };
        private _update;
        set_value(next_value: Value, true_set?: boolean, force?: boolean): void;
        private _compute;
        private _apply;
        private update_helper;
        private _key_provider;
        private static _spread_atoms;
        static set_state_count: number;
        set_state(val: $me_atom2_state_type, state2spread?: $me_atom2_state_type): void;
        private set_state_slave;
        protected _key_idx_changed(p: $me_atom2_key_idx_changed_p_intf): void;
        private _key_idx_changed_helper;
        key_enum(): string[][];
        protected _on_active(): void;
        private _masters;
        private static _waiting_for_atom_def;
        static to_def: $me_atom2_def<any, any[]>[];
        static to_update_first: Set<$me_atom2<any, any>>;
        static to_update_second: Set<$me_atom2<any, any>>;
        static to_update_third: Set<$me_atom2<any, any>>;
        private static _update_order;
        private static _update_atoms_debug;
        private static did_not_apply;
        static add_to_update(atom: $me_atom2<any>): void;
        static compute_timing: number;
        static compute_count: number;
        static update_timing: number;
        static update_count: number;
        static pure_compute_count: number;
        static pure_compute_timing: number;
        static update_atoms(deadline: number, last_now: number): number[];
        static anim_to_play: Map<$me_atom2_path, $me_atom2_anim_to_play_intf<any>>;
        static anim_start(anim: $me_atom2_anim_to_play_intf, t: number): void;
        static anim_active<Value = number>(anim: $me_prop_anim_intf<Value>, active: boolean): void;
        static anim_stop(path: $me_atom2_path): void;
        static anim_fini(anim: $me_atom2_anim_intf<any>, path: $me_atom2_path): void;
        static fn_compute_false(): boolean;
        static fn_compute_true(): boolean;
        static fn_compute_zero(): number;
    }
    export interface $me_atom2_key_idx_changed_p_intf {
        key: string[];
        change: {
            idx_curr?: number;
            idx_prev?: number;
            i_key?: number;
        };
    }
    export type $me_atom2_key_idx_changed_fn = (p: $me_atom2_key_idx_changed_p_intf) => void;
    interface compute_result_intf<Value> {
        ret?: Value | $me_atom2_anim_class<Value>;
        state?: Error | $me_atom2_state_complex;
    }
    export type $me_atom2_state_type = string | Error | $me_atom2_state_enum | $me_atom2_state_complex;
    export type $me_atom2_state_complex = Set<string>;
    export enum $me_atom2_state_enum {
        invalid = 0,
        valid = 1,
        need_check = 2
    }
    export type $me_atom2_masters_type = string[] | $me_atom2<string[]>;
    export type $me_atom2_def_masters_type = string[] | $me_atom2_masters_prop_intf;
    export type $me_atom2_masters_prop_intf = $me_atom2_prop_def_compute_intf<string[]>;
    export function $me_atom2_anim<Value = number>(anim: $me_atom2_anim_intf<Value>): $me_atom2_anim_class<Value>;
    export type $me_atom2_anim_fn<Value> = (p: {
        from: Value;
        to: Value;
        easing: $me_easing_func;
        progress: number;
    }) => Value;
    export interface $me_prop_anim_intf<Value = number> {
        from?: Value;
        delay?: number;
        duration?: number;
        easing?: $me_easing_func;
        fn?: $me_atom2_anim_fn<Value>;
        path_active?: $me_atom2_path;
        fini?: $me_fn<void>;
    }
    export interface $me_atom2_anim_intf<Value = number> extends $me_prop_anim_intf<Value> {
        to: Value;
    }
    export interface $me_atom2_anim_to_play_intf<Value = number> extends $me_atom2_anim_intf<Value> {
        value: Value;
        start?: number;
        progress?: number;
    }
    export class $me_atom2_anim_class<Value = number> {
        _anim: $me_atom2_anim_intf<Value>;
        constructor(anim: $me_atom2_anim_intf<Value>);
    }
    export type $me_atom2_compute_fn<Value = number, Masters = any[]> = (p: $me_atom2_compute_fn_p_intf<Value, Masters>) => Value | $me_atom2_anim_class<Value>;
    export interface $me_atom2_compute_fn_p_intf<Value = number, Masters = any[]> extends $me_atom2_keys_intf {
        atom: $me_atom2<Value>;
        prev: Value;
        len: number;
        masters: Masters;
    }
    export type $me_atom2_apply_fn<Value = number> = (p: $me_atom2_apply_fn_p_intf<Value>) => Value | void;
    export interface $me_atom2_apply_fn_p_intf<Value = number> extends $me_atom2_keys_intf {
        atom: $me_atom2<Value>;
        prev: Value;
        val: Value;
    }
    export interface $me_atom2_keys_intf {
        len_key?: number;
        keys?: string[];
        key?: string[];
        key_enum?: string[][];
    }
    export interface $me_atom2_a {
        <Value = number>(path_s: string, val?: Value, force?: boolean): Value;
        curr?: $me_atom2_entity;
        root: () => $me_atom2_entity;
        get: (path_s: string) => string | $me_atom2_entity;
        dispatch: <Arg = any>(path: string | $me_atom2_path, dispatch_name?: string, dispatch_arg?: Arg) => Arg;
        update<Value = number>(path_s: string, fn: (val: Value) => Value | $me_atom2_anim_class<Value>, force?: boolean): Value;
    }
    export const a: $me_atom2_a;
    export const $me_atom2_async_raf: (t: number) => void;
    export function $me_atom2_async_anim(anim_to_play: Array<[$me_atom2, $me_atom2_anim_to_play_intf]>, t: number, start: number): [number, boolean];
    export const $me_atom2_async_complete: (including_anim?: boolean) => boolean;
    export enum $me_atom2_wheel_session_kind_enum {
        wheel = 0,
        touch = 1,
        drag = 2
    }
    export function $me_atom2_wheel_session_inc(kind?: $me_atom2_wheel_session_kind_enum): number;
    export {};
}

declare namespace $.$$ {
    function $nl_defaults_init(): void;
}

declare namespace $.$$ {
    const $me_stylesheet: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_input: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $me_triangle: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    function $nl_agate_find_ip(): Promise<any>;
    function $nl_agate_fetch(url: string, options: any, timeout?: number): Promise<any>;
    function $nl_agate_exists_login(username: string): Promise<any>;
    function $nl_agate_register_new_user(username: string, password: string, metric: Object): Promise<any>;
    function $nl_agate_request_token(username: string, metric: Object): Promise<any>;
    function $nl_agate_login_with_token(username: string, verificationToken: string, metric: Object, checkMultiSession?: boolean, partnerCode?: string): Promise<any>;
    function $nl_agate_login_with_password(username: string, password: string, metric: Object, checkMultiSession?: boolean): Promise<any>;
    function $nl_agate_find_by_token(findToken: string, accessToken: string): Promise<any>;
    function $nl_agate_logout(accessToken: string): Promise<any>;
    function $nl_agate_update_user(accessToken: string, userId: string, attributes: Object): Promise<any>;
    function $nl_agate_update_user_settings(accessToken: string, userId: string, settings: Object): Promise<any>;
    function $nl_agate_set_password(accessToken: string, userId: string, password: string, metric: Object): Promise<any>;
    function $nl_agate_confirm_user_contact(userId: string, accessToken: string, contact: string, token: string): Promise<any>;
    function $nl_agate_get_user_contact(userId: string, accessToken: string): Promise<any>;
}

declare namespace $.$$ {
    function $nl_metric_find_ip(): Promise<any>;
    function $nl_metric_item_event(itemGuid: string, objectGuid: string, offerId: string, kind: string): Promise<any>;
    function $nl_metric_get_params(): Object;
    function $nl_metric_get_extended_params(code: string): Object;
    function $nl_metric_send_actions(): boolean;
    function $nl_metric_send_action(detail: Object): boolean;
}

declare namespace $.$$ {
    const $nl_logo_color_blue = "rgb(16,16,119)";
    const $nl_logo_color_cyan = "rgb(0,214,202)";
}

declare namespace $.$$ {
    type $me_svg_content_type = Array<{
        tag?: string;
        attr: {
            [name: string]: $me_atom2_def<string>;
        };
        sub?: $me_svg_content_type;
    }>;
    const $me_svg: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_logo_icon: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_logo_word: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_back: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $me_cross: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_phoneemail: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_checkbox: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_button: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_eyeopen: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_eyeclose: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_login_tabs: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_login_input: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    function $nl_login_get_string_constant(sectionName: string, constantName: string, mode: string): string;
    function $nl_login_with_token(login: string, confirmation: string, wasDisabled: boolean, metric: Object): Promise<any>;
    function $nl_change_password(): void;
    function $nl_check_login(): void;
    function $nl_logout_helper(): void;
    function $nl_success_login_helper(params: any, ip: string): void;
    function $nl_logout(): void;
    const $nl_login: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    enum $nl_scheme_will_action_enum {
        none = 0,
        select = 1,
        deselect = 2
    }
}

declare namespace $.$$ {
    interface $me_vector_intf {
        from: $me_point_intf;
        to: $me_point_intf;
    }
    function $me_vector_transform(v: $me_vector_intf, dist: number, from?: $me_point_intf): $me_vector_intf;
    function $me_vector_revert(v: $me_vector_intf): {
        from: $me_point_intf;
        to: $me_point_intf;
    };
}

declare namespace $.$$ {
    const $nl_scheme_engine: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_scheme_metro_crumbs: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    interface $nl_scheme_metro_crumb_intf {
        guid: string;
        code: string;
        text: string;
        color: string;
        navText?: string;
        navFrom?: number;
        ctxLeft?: number;
        ctxTop?: number;
        ctxWidth?: number;
        ctxLeftHor?: number;
        deleteProgress?: number;
        deleteStart?: number;
    }
    type $nl_scheme_metro_crumbs_type = Array<$nl_scheme_metro_crumb_intf>;
    const $nl_scheme_metro: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    function $nl_formatter_room_count(item: Object): string;
    function $nl_formatter_object_type(item: Object): string;
    function $nl_formatter_card_title(item: Object): string;
    function $nl_formatter_address(item: Object): string;
    function $nl_formatter_normalize_phone(phone: string): string;
    function $nl_formatter_phone(phone: string): string;
    function $nl_formatter_phones(phones: string, options: Object): string;
}

declare namespace $.$$ {
    const $nl_stations_crumbs: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    interface $nl_stations_crumb_intf {
        guid: string;
        code: string;
        text: string;
        walking_access: boolean;
        transport_access: boolean;
        color: string;
        navText?: string;
        navFrom?: number;
        ctxLeft?: number;
        ctxTop?: number;
        ctxWidth?: number;
        ctxLeftHor?: number;
        deleteProgress?: number;
        deleteStart?: number;
    }
    type $nl_stations_crumbs_type = Array<$nl_stations_crumb_intf>;
    const $nl_stations: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    function $nl_dic_fld_value(dic_name: string, id: number, fld: string, default_value?: any): any;
}

declare namespace $.$$ {
    const $nl_phones_crumbs: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    interface $nl_phones_crumb_intf {
        guid: string;
        text: string;
        navText?: string;
        navFrom?: number;
        ctxLeft?: number;
        ctxTop?: number;
        ctxWidth?: number;
        ctxLeftHor?: number;
    }
    type $nl_phones_crumbs_type = Array<$nl_phones_crumb_intf>;
    const $nl_phones: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_card: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    interface $me_options {
        [id: string]: $me_option_intf;
    }
    interface $me_options_caption_intf {
        text: string;
        width?: number;
    }
    type $me_options_caption = string | $me_options_caption_intf;
    type $me_options_caption_fn = (p: {
        isSelected: boolean;
        val: string | Set<string> | Map<string, null>;
    }) => $me_options_caption;
}

declare namespace $.$$ {
    interface $me_option_intf {
        caption?: $me_options_caption | $me_options_caption_fn;
    }
    function $me_option_caption(id: string, options: $me_options, val?: string | Set<string> | Map<string, null>): $me_options_caption;
    function $me_option_caption_text(id: string, options: $me_options, val?: string | Set<string> | Map<string, null>): string;
}

declare namespace $.$$ {
    const $nl_icon_placemarker: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $me_panel: $me_atom2_control_cnf_intf;
}

declare namespace $.$$ {
    interface $me_label_text_n_ctxLeft_intf {
        text: string;
        ctxLeft: number;
    }
    function $me_label_text_n_ctxLeft(p: {
        ctx: CanvasRenderingContext2D;
        pixelRatio: number;
        text: string;
        width: number;
        period?: string;
        left?: number;
        paddingLeft?: number;
        paddingRight?: number;
        alignHor?: $me_align;
    }): {
        text: string;
        ctxLeft: number;
    };
    const $me_label: $me_atom2_control_cnf_intf;
}

declare namespace $.$$ {
    const $me_select: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_select: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $me_dropdown: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    interface $me_ribbon_effect_p {
        id: string;
        init?: $me_fn<void>;
        fini?: $me_fn<void>;
        from: number | string;
        to: number | string;
        adjust: string;
        delta: number;
        fromBack: boolean;
    }
    function $me_ribbon_effect(p: $me_ribbon_effect_p): void;
    function $me_ribbon_val(p: {
        from: number;
        to?: number;
        delta: number;
        fromBack: boolean;
    }): number;
}

declare namespace $.$$ {
    const $me_atom2_list_row_height_source_fn_apply: $me_atom2_apply_fn<number>;
    const $me_list: $me_atom2_elem_cnf_intf;
    const $me_list_row_i_out_of_range_is: (key: number, row_i_min: number, row_i_max: number) => boolean;
}

declare namespace $.$$ {
    const $nl_triangle: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_picker: $me_atom2_elem_cnf_intf;
    const $nl_picker_cursor: $me_atom2_async_multi_origin_fn<string, $me_atom2<string, any>>;
}

declare namespace $.$$ {
    function $me_word_plural(count: number, word1: string, word2_4: string, word5more?: string): string;
}

declare namespace $.$$ {
    enum $nl_calendar_mode {
        day = 0,
        month = 1
    }
    const $nl_calendar: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_pickerdate: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_scheme_mo: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_scheme_selector: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_infrastructure: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_building: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_key: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_money: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_diploma: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_list: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_document: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_unspalsh: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_comment: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_info: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $me_plus: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_advcard_panel_param_options: {
        [id: string]: $me_options;
    };
}

declare namespace $.$$ {
    const $nl_advcard_panel_param: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_advcard: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_panel: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_main_workspace: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_search_tabs: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_search_new: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_search_panel: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_switch: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_level: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_search_panel_param_options: {
        [id: string]: $me_options;
    };
}

declare namespace $.$$ {
    const $nl_search_panel_param: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $me_spinner: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_plitka: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $me_iosmenu: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $me_dialog: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_search_grid_dialog: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_search_grid: $me_atom2_elem_cnf_intf;
    const $nl_search_grid_cursor: $me_atom2_async_multi_origin_fn<string, $me_atom2<string, any>>;
}

declare namespace $.$$ {
    const $nl_search_panel_result_cols: {
        [id: string]: {
            caption?: string;
            width: number;
            fld?: string[];
            align?: $me_align;
            fn?: any;
        };
    };
}

declare namespace $.$$ {
    const $nl_search_panel_result: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_search_workspace: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_favorites_workspace: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_orders_workspace: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_clients_workspace: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_advs_tabs: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_advs_new: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_advs_panel: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_add: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_pub: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_import: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_advs_panel_result_cols: {
        [id: string]: {
            caption?: string;
            width: number;
            fld?: string[];
            align?: $me_align;
            fn?: any;
        };
    };
}

declare namespace $.$$ {
    const $nl_advs_panel_result: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_advs_workspace: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_feedback_workspace: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_settings_tabs: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_settings_workspace: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_subscription_tabs: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $me_select_elem: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_select_elem: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_subscription_workspace: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_user: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_enter: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_light: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_dark: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_slide_right: $me_atom2_elem_cnf_intf;
    const $nl_icon_slide_left: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_home: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_search: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_star: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_buy: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_meeting: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_resume: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_infopopup: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_wallet: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_icon_settings: $me_atom2_elem_cnf_intf;
}

declare namespace $.$$ {
    const $nl_app: (rootElem: HTMLElement) => $me_atom2_elem;
}
