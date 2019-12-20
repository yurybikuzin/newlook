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
    let $me_throw_silent: boolean;
    function $me_throw(msg: string, ...p: any): void;
}

declare namespace $.$$ {
    interface $me_point_intf {
        x: number;
        y: number;
    }
}

declare namespace $.$$ {
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
    const $nl_metro_settings_width = 2700;
    const $nl_metro_settings_height = 3100;
    const $nl_metro_settings_circle_radius = 16;
    const $nl_metro_settings_root: $me_point_intf;
    const $nl_metro_settings_kolcevaya_radius = 500;
    const $nl_metro_settings_fontSize_label = 26;
    const $nl_metro_settings_default_label_ofsHor: number;
    const $nl_metro_settings_default_label_ofsVer: number;
    const $nl_metro_settings_circle_thick = 8;
    const $nl_metro_settings_thick_line = 10;
    const $nl_metro_settings_thick_transit = 12;
}

declare namespace $.$$ {
    const $nl_metro_data_kolcevaya_radius = 500;
    const $nl_metro_data_kolcevaya: {
        type: string;
        radius: number;
        center: string;
        code: string;
        style: string;
        points: {
            'Курская': {
                angle: number;
                code: string;
                label: {
                    alignVer: $me_align;
                    ofsHor: number;
                };
            };
            'Таганская': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                };
            };
            'Павелецкая': {
                angle: number;
                code: string;
                label: {};
            };
            'Добрынинская': {
                angle: number;
                code: string;
                label: {
                    alignVer: $me_align;
                };
            };
            'Октябрьская': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                };
            };
            'Парк культуры': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                };
            };
            'Киевская': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                };
            };
            'Краснопресненская': {
                angle: number;
                code: string;
                label: {
                    text: string;
                    ofsVer: number;
                };
            };
            'Белорусская': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                };
            };
            'Новослободская': {
                angle: number;
                code: string;
                label: {
                    alignVer: $me_align;
                };
            };
            'Проспект Мира': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                };
            };
            'Комсомольская': {
                angle: number;
                code: string;
            };
        };
    };
}

declare namespace $.$$ {
    const $nl_metro_data_mck_radius: number;
    const $nl_metro_data_mck: {
        type: string;
        radius: number;
        center: string;
        code: string;
        style: {
            type: $nl_line_style_type_enum;
            color: string;
            thickLine: number;
            thickStyle: number;
        };
        points: {
            'Верхние котлы': {
                angle: number;
                code: string;
                label: {
                    alignVer: $me_align;
                };
            };
            'Крымская': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                };
            };
            'Площадь Гагарина': {
                angle: number;
                code: string;
                label: {
                    text: string;
                    alignHor: $me_align;
                    alignVer: $me_align;
                };
            };
            'Лужники': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                    ofsHor: number;
                };
            };
            'Кутузовская': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                };
            };
            'Деловой центр МЦК': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    text: string;
                    ofsVer: number;
                    textAlign: string;
                };
            };
            'Шелепиха': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    ofsHor: number;
                    ofsVer: number;
                };
            };
            'Хорошёво': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                };
            };
            'Зорге': {
                angle: number;
                code: string;
                label: {};
            };
            'Панфиловская': {
                angle: number;
                code: string;
                label: {
                    alignVer: $me_align;
                    ofsHor: number;
                    ofsVer: number;
                };
            };
            'Стрешнево': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                };
            };
            'Балтийская': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                };
            };
            'Коптево': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                };
            };
            'Лихоборы': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                };
            };
            'Окружная': {
                angle: number;
                code: string;
            };
            'Владыкино': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                    ofsHor: number;
                    ofsVer: number;
                };
            };
            'Ботанический сад': {
                angle: number;
                code: string;
            };
            'Ростокино': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                };
            };
            'Белокаменная': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                };
            };
            'Бульвар Рокоссовского': {
                angle: number;
                code: string;
            };
            'Локомотив': {
                angle: number;
                code: string;
                label: {};
            };
            'Измайлово': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                };
            };
            'Соколиная гора': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                    text: string;
                };
            };
            'Шоссе Энтузиастов': {
                angle: number;
                code: string;
                label: {
                    alignVer: $me_align;
                    ofsHor: number;
                    ofsVer: number;
                };
            };
            'Андроновка': {
                angle: number;
                code: string;
                label: {};
            };
            'Нижегородская': {
                angle: number;
                code: string;
                label: {};
            };
            'Новохохловская': {
                angle: number;
                code: string;
                label: {
                    alignVer: $me_align;
                };
            };
            'Угрешская': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                    ofsVer: number;
                    ofsHor: number;
                };
            };
            'Дубровка': {
                angle: number;
                code: string;
            };
            'Автозаводская': {
                angle: number;
                code: string;
            };
            'ЗИЛ': {
                angle: number;
                code: string;
                label: {
                    alignHor: $me_align;
                    alignVer: $me_align;
                    ofsHor: number;
                    ofsVer: number;
                };
            };
        };
    };
}

declare namespace $.$$ {
    const $nl_metro_data_sokolnicheskaya: {
        style: string;
        type: string;
        code: string;
        segments: {
            'Охотный ряд-Сокольники': {
                type: string;
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                dist: number;
                points: {
                    'Охотный ряд': {
                        code: string;
                        anchor: string;
                        label: {
                            alignHor: $me_align;
                            ofsHor: number;
                            ofsVer: number;
                        };
                        dist: number;
                    };
                    'Лубянка': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            ofsHor: number;
                            ofsVer: number;
                        };
                    };
                    'Чистые пруды': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                        };
                    };
                    'Красные ворота': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                            alignVer: $me_align;
                        };
                    };
                    'Комсомольская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {
                            alignVer: $me_align;
                        };
                    };
                    'Красносельская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                        };
                    };
                    'Сокольники': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
            'Преображенская площадь-Бульвар Рокоссовского': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Преображенская площадь': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                        };
                    };
                    'Черкизовская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                        };
                        transit: string;
                    };
                    'Бульвар Рокоссовского': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                            alignVer: $me_align;
                            ofsHor: number;
                        };
                        transit: string;
                    };
                };
            };
            'Охотный ряд-Библиотека им.Ленина': {
                type: string;
                from: {
                    anchor: string;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                dist: number;
                points: {
                    'Библиотека им.Ленина': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                            ofsVer: number;
                        };
                    };
                };
            };
            'Кропоткинская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Кропоткинская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                            alignVer: $me_align;
                            ofsVer: number;
                        };
                    };
                };
            };
            'Парк культуры-Спортивная': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    link: string;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Парк культуры': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                    'Фрунзенская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                        };
                    };
                    'Спортивная': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {};
                    };
                };
            };
            'Юг': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Воробьевы горы': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                        };
                    };
                    'Университет': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Проспект Вернадского': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                        };
                    };
                    'Юго-Западная': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Тропарево': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Румянцево': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Саларьево': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Филатов луг': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Прокшино': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Ольховая': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Коммунарка': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
        };
    };
}

declare namespace $.$$ {
    const $nl_metro_data_zamoskvoreckaya: {
        style: string;
        type: string;
        code: string;
        segments: {
            'Театральная': {
                from: {
                    anchor: string;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Театральная': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {
                            alignVer: $me_align;
                        };
                    };
                };
            };
            'Новокузнецкая': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Новокузнецкая': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                        };
                    };
                };
            };
            'Павелецкая-Домодедовская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Павелецкая': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                    'Автозаводская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {
                            ofsVer: number;
                        };
                    };
                    'Технопарк': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Коломенская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Каширская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Кантемировская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Царицыно': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Орехово': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Домодедовская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
            'Красногвардейская-Алма-Атинская': {
                from: {
                    anchor: string;
                    dist: number;
                    ofsVer: number;
                    ofsHor: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Красногвардейская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            alignHor: $me_align;
                            ofsHor: number;
                            ofsVer: number;
                        };
                    };
                    'Алма-Атинская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            alignHor: $me_align;
                            ofsHor: number;
                            ofsVer: number;
                        };
                    };
                };
            };
            'Тверская-Динамо': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                    link: string;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Тверская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                        };
                    };
                    'Маяковская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Белорусская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                    'Динамо': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
            'Аэропорт-Ховрино': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Аэропорт': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Сокол': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Войковская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                        transit: string;
                    };
                    'Водный стадион': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Речной вокзал': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Беломорская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Ховрино': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
        };
    };
}

declare namespace $.$$ {
    const $nl_metro_data_kaluzhsko_rizhskaya: {
        style: string;
        type: string;
        code: string;
        segments: {
            'Тургеневская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                dist: number;
                points: {
                    'Тургеневская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                        };
                        transit: string;
                    };
                };
            };
            'Сухаревская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Сухаревская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                        };
                    };
                };
            };
            'Проспект Мира': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Проспект Мира': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                };
            };
            'Рижская-Медведково': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Рижская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Алексеевская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'ВДНХ': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Ботанический сад': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {
                            text: string;
                            ofsVer: number;
                        };
                    };
                    'Свиблово': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Бабушкинская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Медведково': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
            'Китай-город': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    link: string;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Китай-город': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            alignHor: $me_align;
                            ofsHor: number;
                        };
                    };
                };
            };
            'Третьяковская': {
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                    link: string;
                };
                dist: number;
                points: {
                    'Третьяковская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            alignHor: $me_align;
                            ofsVer: number;
                            ofsHor: number;
                        };
                        transit: string;
                    };
                };
            };
            'Около-Третьяковской': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
            };
            'Октябрьская-Шаболовская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Октябрьская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                    'Шаболовская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
            'Ленинский-проспект-Ясенево': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Ленинский проспект': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {
                            text: string;
                        };
                    };
                    'Академическая': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Профсоюзная': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Новые Черёмушки': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Калужская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Беляево': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Коньково': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Тёплый стан': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Ясенево': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
            'Новоясеневская': {
                from: {
                    anchor: string;
                    dist: number;
                    ofsVer: number;
                    ofsHor: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Новоясеневская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
        };
    };
}

declare namespace $.$$ {
    const $nl_metro_data_tagansko_kraspresnenskaya: {
        style: string;
        type: string;
        code: string;
        segments: {
            'Баррикадная-Кузнецкий мост': {
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                from: {
                    anchor: string;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Баррикадная': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {
                            alignVer: $me_align;
                            ofsVer: number;
                        };
                    };
                    'Пушкинская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            alignHor: $me_align;
                        };
                        transit: string;
                    };
                    'Кузнецкий мост': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                            alignVer: $me_align;
                        };
                        transit: string;
                    };
                };
            };
            'Улица 1905 года-Полежаевская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                dist: number;
                points: {
                    'Улица 1905 года': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            alignHor: $me_align;
                            ofsHor: number;
                            ofsVer: number;
                        };
                    };
                    'Беговая': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            alignHor: $me_align;
                        };
                    };
                    'Полежаевская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
            'Север': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Октябрьское Поле': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {
                            alignHor: $me_align;
                            text: string;
                            textAlign: string;
                            ofsVer: number;
                        };
                    };
                    'Щукинская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Спартак': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Тушинская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Сходненская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Планерная': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
            'Китай-город-Текстильщики': {
                through: {
                    anchor: string;
                    ofsHor: number;
                };
                from: {
                    link: string;
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Китай-город': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                    'Таганская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                    'Пролетарская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Волгоградский проспект': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Текстильщики': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                        };
                    };
                };
            };
            'Юг': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Кузьминки': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Рязанский проспект': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                        };
                    };
                    'Выхино': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Лермонтовский проспект': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                        };
                    };
                    'Жулебино': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Котельники': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
        };
    };
}

declare namespace $.$$ {
    const $nl_metro_data_lyublinsko_dmitrovskaya: {
        style: string;
        type: string;
        code: string;
        segments: {
            'Сретенский бульвар': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Сретенский бульвар': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            alignHor: $me_align;
                            text: string;
                            textAlign: string;
                        };
                        transit: string[];
                    };
                };
            };
            'Сретенский бульвар-Трубная': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                dist: number;
            };
            'Трубная-Бутырская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Трубная': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Достоевская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Марьина Роща': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Бутырская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
            'Фонвизинская-Окружная': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                dist: number;
                points: {
                    'Фонвизинская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Петровско-Разумовская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            text: string;
                            ofsVer: number;
                            ofsHor: number;
                        };
                    };
                    'Окружная': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {
                            alignVer: $me_align;
                            ofsHor: number;
                            ofsVer: number;
                        };
                    };
                };
            };
            'Лихоборы-Селигерская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                dist: number;
                points: {
                    'Верхние Лихоборы': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                        };
                    };
                    'Селигерская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
            'Чкаловская-Римская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    link: string;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Чкаловская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                    'Римская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                            alignVer: $me_align;
                            ofsHor: number;
                        };
                    };
                };
            };
            'Римская-Крестьянская Застава': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
            };
            'Крестьянская Застава': {
                through: {
                    anchor: string;
                    ofsHor: number;
                };
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                    link: string;
                };
                dist: number;
                points: {
                    'Крестьянская Застава': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {
                            text: string;
                            textAlign: string;
                            alignVer: $me_align;
                            alignHor: $me_align;
                            ofsHor: number;
                            ofsVer: number;
                        };
                    };
                };
            };
            'Юг': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Дубровка': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                        };
                        transit: string;
                    };
                    'Кожуховская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Печатники': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Волжская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Люблино': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Братиславская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Марьино': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Борисово': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Шипиловская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Зябликово': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                        transit: string;
                    };
                };
            };
        };
    };
}

declare namespace $.$$ {
    const $nl_metro_data_arbatsko_pokrovskaya: {
        style: string;
        type: string;
        code: string;
        segments: {
            'Пл. Революции': {
                from: {
                    anchor: string;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Пл. Революции': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {
                            alignVer: $me_align;
                        };
                    };
                };
            };
            'Курская': {
                from: {
                    anchor: string;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                to: {
                    link: string;
                };
                points: {
                    'Курская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string[];
                    };
                };
            };
            'Бауманская-Партизанская': {
                from: string;
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Партизанская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                        transit: string;
                    };
                };
            };
            'Измайловская-Щёлковская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Измайловская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Первомайская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Щёлковская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
            'Арбатская-Славянский бульвар': {
                from: string;
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Арбатская': {
                        code: string;
                        color: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {
                            alignVer: $me_align;
                            alignHor: $me_align;
                            ofsHor: number;
                        };
                    };
                    'Смоленская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            alignHor: $me_align;
                        };
                    };
                    'Киевская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                    'Парк Победы': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            ofsHor: number;
                        };
                    };
                    'Славянский бульвар': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                            textAlign: string;
                            alignVer: $me_align;
                            alignHor: $me_align;
                        };
                    };
                };
            };
            'Кунцевская-Пятницкое-Шоссе': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Кунцевская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                        };
                    };
                    'Молодёжная': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Крылатское': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Строгино': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Мякинино': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Волоколамская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Митино': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Пятницкое шоссе': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
        };
    };
}

declare namespace $.$$ {
    const $nl_metro_data_serpuhovsko_timiryazevskaya: {
        style: string;
        type: string;
        code: string;
        segments: {
            'Боровицкая': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Боровицкая': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string[];
                        label: {
                            alignHor: $me_align;
                        };
                    };
                };
            };
            'Чеховская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Чеховская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                        transit: string[];
                    };
                };
            };
            'Чеховская-Цветной бульвар': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
            };
            'Цветной бульвар-Менделеевская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                dist: number;
                points: {
                    'Цветной бульвар': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                            ofsVer: number;
                            textAlign: string;
                            text: string;
                        };
                        transit: string;
                    };
                    'Менделеевская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                            alignVer: $me_align;
                        };
                        transit: string;
                    };
                };
            };
            'Савёловская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Савёловская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
            'Дмитровская-Владыкино': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Дмитровская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                        };
                    };
                    'Тимирязевская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            alignHor: $me_align;
                            ofsHor: number;
                        };
                    };
                    'Петровско-Разумовская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                    'Владыкино': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                };
            };
            'Отрадное-Алтуфьево': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Отрадное': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Бибирево': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Алтуфьево': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
            'Чеховская-Боровицкая': {
                from: {
                    anchor: string;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    link: string;
                };
                dist: number;
            };
            'Боровицкая-Полянка': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                dist: number;
                points: {
                    'Полянка': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                            alignVer: $me_align;
                        };
                    };
                };
            };
            'Серпуховская-Бульвар-Дмитрия-Донского': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                dist: number;
                points: {
                    'Серпуховскaя': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {};
                    };
                    'Тульская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Нагатинская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Нагорная': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Нахимовский проспект': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                        };
                    };
                    'Севастопольская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Чертановская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Южная': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Пражская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Улица Академика Янгеля': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                        };
                    };
                    'Аннино': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Бульвар Дмитрия Донского': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                        };
                    };
                };
            };
        };
    };
}

declare namespace $.$$ {
    const $nl_metro_data_filevskaya: {
        style: string;
        type: string;
        code: string;
        segments: {
            'Александровский сад-Арбатская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Александровский сад': {
                        title: string;
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                        transit: string[];
                    };
                    'Арбатская': {
                        title: string;
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            color: string;
                            alignVer: $me_align;
                        };
                    };
                };
            };
            'Смоленская-Киевская': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Смоленская': {
                        code: string;
                        color: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            alignHor: $me_align;
                        };
                    };
                    'Киевская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string[];
                    };
                };
            };
            'Выставочная': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                dist: number;
                points: {
                    'Выставочная': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
            'Международная': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Международная': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                            alignVer: $me_align;
                            ofsHor: number;
                            ofsVer: number;
                        };
                        transit: string;
                    };
                };
            };
            'Студенческая': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                dist: number;
                points: {
                    'Студенческая': {
                        code: string;
                        anchor: string;
                        label: {};
                        dist: number;
                    };
                };
            };
            'Кутузовская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Кутузовская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                };
            };
            'Фили-Кунцевская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Фили': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                        };
                    };
                    'Багратионовская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                        };
                    };
                    'Филёвский парк': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                        };
                    };
                    'Пионерская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                        };
                    };
                    'Кунцевская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                };
            };
        };
    };
}

declare namespace $.$$ {
    const $nl_metro_data_kalininskaya: {
        style: string;
        type: string;
        code: string;
        segments: {
            'Третьяковская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Третьяковская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string[];
                    };
                };
            };
            'Марксистская-Новокосино': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    link: string;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                dist: number;
                points: {
                    'Марксистская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            alignHor: $me_align;
                            ofsHor: number;
                        };
                        transit: string[];
                    };
                    'Площадь Ильича': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {
                            text: string;
                            ofsVer: number;
                        };
                    };
                    'Авиамоторная': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                        };
                    };
                    'Шоссе Энтузиастов': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                    'Перово': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                        };
                    };
                    'Новогиреево': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                        };
                    };
                    'Новокосино': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                        };
                    };
                };
            };
        };
    };
}

declare namespace $.$$ {
    const $nl_metro_data_solncevskaya_biryuzovaya: {
        style: string;
        code: string[];
        segments: {
            'Савёловская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Савёловская': {
                        code: string;
                        anchor: string;
                        transit: string;
                        dist: number;
                    };
                };
            };
            'Петровский парк-Хорошёвская': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                dist: number;
                points: {
                    'Петровский парк': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {};
                    };
                    'ЦСКА': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Хорошёвская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {};
                    };
                };
            };
            'Шелепиха': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Шелепиха': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                };
            };
        };
    };
    const $nl_metro_data_solncevskaya: {
        style: string;
        code: string;
        segments: {
            'Шелепиха-Парк Победы': {
                from: {
                    anchor: string;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
            };
            'Парк Победы': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                through: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                dist: number;
                points: {
                    'Парк Победы': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                };
            };
            'Юг': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                to: {
                    anchor: string;
                    ofsVer: number;
                };
                points: {
                    'Минская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Ломоносовский проспект': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                        };
                    };
                    'Раменки': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Мичуринский проспект': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                        };
                    };
                    'Озерная': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Говорово': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Солнцево': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Боровское шоссе': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                        };
                    };
                    'Новопеределкино': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Рассказовка': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
        };
    };
    const $nl_metro_data_biruzovaya: {
        style: string;
        code: string;
        segments: {
            'Деловой центр': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                    link: string;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Деловой центр': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {
                            text: string;
                            alignHor: $me_align;
                            alignVer: $me_align;
                        };
                    };
                };
            };
        };
    };
}

declare namespace $.$$ {
    const $nl_metro_data_butovskaya: {
        type: string;
        style: string;
        code: string;
        segments: {
            'Улица Старокачаловская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Улица Старокачаловская': {
                        code: string;
                        anchor: string;
                        transit: string;
                        dist: number;
                        label: {
                            text: string;
                            alignHor: $me_align;
                            textAlign: string;
                        };
                    };
                };
            };
            'Лесопарковая-Битцевский парк': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Лесопарковая': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            alignHor: $me_align;
                        };
                    };
                    'Битцевский парк': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {
                            text: string;
                            alignVer: $me_align;
                            alignHor: $me_align;
                            textAlign: string;
                        };
                    };
                };
            };
            'Улица Скобелевская-Бунинская аллея': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Улица Скобелевская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            text: string;
                            ofsVer: number;
                            ofsHor: number;
                        };
                    };
                    'Бульвар Адмирала Ушакова': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            text: string;
                            ofsVer: number;
                            ofsHor: number;
                        };
                    };
                    'Улица Горчакова': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            text: string;
                            ofsVer: number;
                            ofsHor: number;
                        };
                    };
                    'Бунинская аллея': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            text: string;
                            ofsVer: number;
                            ofsHor: number;
                        };
                    };
                };
            };
        };
    };
}

declare namespace $.$$ {
    const $nl_metro_data_nekrasovskaya: {
        style: string;
        type: string;
        code: string;
        segments: {
            'Косино': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Косино': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                        label: {
                            alignHor: $me_align;
                        };
                    };
                    'Улица Дмитриевского': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            text: string;
                        };
                    };
                    'Лухмановская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                    'Некрасовка': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {};
                    };
                };
            };
        };
    };
}

declare namespace $.$$ {
    const $nl_metro_data_kahovskaya: {
        style: string;
        type: string;
        code: string;
        segments: {
            'Каширская-Варшавская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                dist: number;
                points: {
                    'Каширская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        transit: string;
                    };
                    'Варшавская': {
                        code: string;
                        anchor: string;
                        dist: number;
                        label: {
                            alignVer: $me_align;
                            alignHor: $me_align;
                            ofsVer: number;
                        };
                    };
                };
            };
        };
    };
}

declare namespace $.$$ {
    type $nl_metro_ofs_default_fn = (alignHor: $me_align, alignVer: $me_align) => number;
    const $nl_metro_data: {
        settings: {
            scale_max: number;
            width: number;
            height: number;
            root: $me_point_intf;
            label: {
                fontSize: number;
                alignHor: $me_align;
                alignVer: $me_align;
                ofsHor: number;
                ofsVer: number;
            };
            circle_radius: number;
            circle_thick: number;
            thick_line: number;
            thick_transit: number;
        };
        'Кольцевая': {
            type: string;
            radius: number;
            center: string;
            code: string;
            style: string;
            points: {
                'Курская': {
                    angle: number;
                    code: string;
                    label: {
                        alignVer: $me_align;
                        ofsHor: number;
                    };
                };
                'Таганская': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                    };
                };
                'Павелецкая': {
                    angle: number;
                    code: string;
                    label: {};
                };
                'Добрынинская': {
                    angle: number;
                    code: string;
                    label: {
                        alignVer: $me_align;
                    };
                };
                'Октябрьская': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                    };
                };
                'Парк культуры': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                    };
                };
                'Киевская': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                    };
                };
                'Краснопресненская': {
                    angle: number;
                    code: string;
                    label: {
                        text: string;
                        ofsVer: number;
                    };
                };
                'Белорусская': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                    };
                };
                'Новослободская': {
                    angle: number;
                    code: string;
                    label: {
                        alignVer: $me_align;
                    };
                };
                'Проспект Мира': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                    };
                };
                'Комсомольская': {
                    angle: number;
                    code: string;
                };
            };
        };
        'МЦК': {
            type: string;
            radius: number;
            center: string;
            code: string;
            style: {
                type: $nl_line_style_type_enum;
                color: string;
                thickLine: number;
                thickStyle: number;
            };
            points: {
                'Верхние котлы': {
                    angle: number;
                    code: string;
                    label: {
                        alignVer: $me_align;
                    };
                };
                'Крымская': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                    };
                };
                'Площадь Гагарина': {
                    angle: number;
                    code: string;
                    label: {
                        text: string;
                        alignHor: $me_align;
                        alignVer: $me_align;
                    };
                };
                'Лужники': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                        ofsHor: number;
                    };
                };
                'Кутузовская': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                    };
                };
                'Деловой центр МЦК': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        text: string;
                        ofsVer: number;
                        textAlign: string;
                    };
                };
                'Шелепиха': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        ofsHor: number;
                        ofsVer: number;
                    };
                };
                'Хорошёво': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                    };
                };
                'Зорге': {
                    angle: number;
                    code: string;
                    label: {};
                };
                'Панфиловская': {
                    angle: number;
                    code: string;
                    label: {
                        alignVer: $me_align;
                        ofsHor: number;
                        ofsVer: number;
                    };
                };
                'Стрешнево': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                    };
                };
                'Балтийская': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                    };
                };
                'Коптево': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                    };
                };
                'Лихоборы': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                    };
                };
                'Окружная': {
                    angle: number;
                    code: string;
                };
                'Владыкино': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                        ofsHor: number;
                        ofsVer: number;
                    };
                };
                'Ботанический сад': {
                    angle: number;
                    code: string;
                };
                'Ростокино': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                    };
                };
                'Белокаменная': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                    };
                };
                'Бульвар Рокоссовского': {
                    angle: number;
                    code: string;
                };
                'Локомотив': {
                    angle: number;
                    code: string;
                    label: {};
                };
                'Измайлово': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                    };
                };
                'Соколиная гора': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                        text: string;
                    };
                };
                'Шоссе Энтузиастов': {
                    angle: number;
                    code: string;
                    label: {
                        alignVer: $me_align;
                        ofsHor: number;
                        ofsVer: number;
                    };
                };
                'Андроновка': {
                    angle: number;
                    code: string;
                    label: {};
                };
                'Нижегородская': {
                    angle: number;
                    code: string;
                    label: {};
                };
                'Новохохловская': {
                    angle: number;
                    code: string;
                    label: {
                        alignVer: $me_align;
                    };
                };
                'Угрешская': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                        ofsVer: number;
                        ofsHor: number;
                    };
                };
                'Дубровка': {
                    angle: number;
                    code: string;
                };
                'Автозаводская': {
                    angle: number;
                    code: string;
                };
                'ЗИЛ': {
                    angle: number;
                    code: string;
                    label: {
                        alignHor: $me_align;
                        alignVer: $me_align;
                        ofsHor: number;
                        ofsVer: number;
                    };
                };
            };
        };
        'Сокольническая': {
            style: string;
            type: string;
            code: string;
            segments: {
                'Охотный ряд-Сокольники': {
                    type: string;
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    dist: number;
                    points: {
                        'Охотный ряд': {
                            code: string;
                            anchor: string;
                            label: {
                                alignHor: $me_align;
                                ofsHor: number;
                                ofsVer: number;
                            };
                            dist: number;
                        };
                        'Лубянка': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                ofsHor: number;
                                ofsVer: number;
                            };
                        };
                        'Чистые пруды': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                            };
                        };
                        'Красные ворота': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                                alignVer: $me_align;
                            };
                        };
                        'Комсомольская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {
                                alignVer: $me_align;
                            };
                        };
                        'Красносельская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                            };
                        };
                        'Сокольники': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
                'Преображенская площадь-Бульвар Рокоссовского': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Преображенская площадь': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                            };
                        };
                        'Черкизовская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                            };
                            transit: string;
                        };
                        'Бульвар Рокоссовского': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                                alignVer: $me_align;
                                ofsHor: number;
                            };
                            transit: string;
                        };
                    };
                };
                'Охотный ряд-Библиотека им.Ленина': {
                    type: string;
                    from: {
                        anchor: string;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    dist: number;
                    points: {
                        'Библиотека им.Ленина': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                                ofsVer: number;
                            };
                        };
                    };
                };
                'Кропоткинская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsHor: number;
                    };
                    points: {
                        'Кропоткинская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                                alignVer: $me_align;
                                ofsVer: number;
                            };
                        };
                    };
                };
                'Парк культуры-Спортивная': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        link: string;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Парк культуры': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                        'Фрунзенская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                            };
                        };
                        'Спортивная': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {};
                        };
                    };
                };
                'Юг': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Воробьевы горы': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                            };
                        };
                        'Университет': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Проспект Вернадского': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                            };
                        };
                        'Юго-Западная': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Тропарево': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Румянцево': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Саларьево': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Филатов луг': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Прокшино': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Ольховая': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Коммунарка': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
            };
        };
        'Замоскворецкая': {
            style: string;
            type: string;
            code: string;
            segments: {
                'Театральная': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsHor: number;
                    };
                    points: {
                        'Театральная': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {
                                alignVer: $me_align;
                            };
                        };
                    };
                };
                'Новокузнецкая': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Новокузнецкая': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                            };
                        };
                    };
                };
                'Павелецкая-Домодедовская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Павелецкая': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                        'Автозаводская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {
                                ofsVer: number;
                            };
                        };
                        'Технопарк': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Коломенская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Каширская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Кантемировская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Царицыно': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Орехово': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Домодедовская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
                'Красногвардейская-Алма-Атинская': {
                    from: {
                        anchor: string;
                        dist: number;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    to: {
                        anchor: string;
                        ofsHor: number;
                    };
                    points: {
                        'Красногвардейская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                alignHor: $me_align;
                                ofsHor: number;
                                ofsVer: number;
                            };
                        };
                        'Алма-Атинская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                alignHor: $me_align;
                                ofsHor: number;
                                ofsVer: number;
                            };
                        };
                    };
                };
                'Тверская-Динамо': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                        link: string;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Тверская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                            };
                        };
                        'Маяковская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Белорусская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                        'Динамо': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
                'Аэропорт-Ховрино': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Аэропорт': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Сокол': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Войковская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                            transit: string;
                        };
                        'Водный стадион': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Речной вокзал': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Беломорская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Ховрино': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
            };
        };
        'Калужско-Рижская': {
            style: string;
            type: string;
            code: string;
            segments: {
                'Тургеневская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    dist: number;
                    points: {
                        'Тургеневская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                            };
                            transit: string;
                        };
                    };
                };
                'Сухаревская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Сухаревская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                            };
                        };
                    };
                };
                'Проспект Мира': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Проспект Мира': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                    };
                };
                'Рижская-Медведково': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Рижская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Алексеевская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'ВДНХ': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Ботанический сад': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {
                                text: string;
                                ofsVer: number;
                            };
                        };
                        'Свиблово': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Бабушкинская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Медведково': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
                'Китай-город': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        link: string;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Китай-город': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                alignHor: $me_align;
                                ofsHor: number;
                            };
                        };
                    };
                };
                'Третьяковская': {
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    from: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                        link: string;
                    };
                    dist: number;
                    points: {
                        'Третьяковская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                alignHor: $me_align;
                                ofsVer: number;
                                ofsHor: number;
                            };
                            transit: string;
                        };
                    };
                };
                'Около-Третьяковской': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsHor: number;
                    };
                };
                'Октябрьская-Шаболовская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Октябрьская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                        'Шаболовская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
                'Ленинский-проспект-Ясенево': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Ленинский проспект': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {
                                text: string;
                            };
                        };
                        'Академическая': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Профсоюзная': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Новые Черёмушки': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Калужская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Беляево': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Коньково': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Тёплый стан': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Ясенево': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
                'Новоясеневская': {
                    from: {
                        anchor: string;
                        dist: number;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    to: {
                        anchor: string;
                        ofsHor: number;
                    };
                    points: {
                        'Новоясеневская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
            };
        };
        'Таганско-Краспресненская': {
            style: string;
            type: string;
            code: string;
            segments: {
                'Баррикадная-Кузнецкий мост': {
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    from: {
                        anchor: string;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Баррикадная': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {
                                alignVer: $me_align;
                                ofsVer: number;
                            };
                        };
                        'Пушкинская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                alignHor: $me_align;
                            };
                            transit: string;
                        };
                        'Кузнецкий мост': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                                alignVer: $me_align;
                            };
                            transit: string;
                        };
                    };
                };
                'Улица 1905 года-Полежаевская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    dist: number;
                    points: {
                        'Улица 1905 года': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                alignHor: $me_align;
                                ofsHor: number;
                                ofsVer: number;
                            };
                        };
                        'Беговая': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                alignHor: $me_align;
                            };
                        };
                        'Полежаевская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
                'Север': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Октябрьское Поле': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {
                                alignHor: $me_align;
                                text: string;
                                textAlign: string;
                                ofsVer: number;
                            };
                        };
                        'Щукинская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Спартак': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Тушинская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Сходненская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Планерная': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
                'Китай-город-Текстильщики': {
                    through: {
                        anchor: string;
                        ofsHor: number;
                    };
                    from: {
                        link: string;
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Китай-город': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                        'Таганская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                        'Пролетарская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Волгоградский проспект': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Текстильщики': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                            };
                        };
                    };
                };
                'Юг': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Кузьминки': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Рязанский проспект': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                            };
                        };
                        'Выхино': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Лермонтовский проспект': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                            };
                        };
                        'Жулебино': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Котельники': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
            };
        };
        'Люблинско-Дмитровская': {
            style: string;
            type: string;
            code: string;
            segments: {
                'Сретенский бульвар': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsHor: number;
                    };
                    points: {
                        'Сретенский бульвар': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                alignHor: $me_align;
                                text: string;
                                textAlign: string;
                            };
                            transit: string[];
                        };
                    };
                };
                'Сретенский бульвар-Трубная': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    dist: number;
                };
                'Трубная-Бутырская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Трубная': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Достоевская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Марьина Роща': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Бутырская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
                'Фонвизинская-Окружная': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    dist: number;
                    points: {
                        'Фонвизинская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Петровско-Разумовская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                text: string;
                                ofsVer: number;
                                ofsHor: number;
                            };
                        };
                        'Окружная': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {
                                alignVer: $me_align;
                                ofsHor: number;
                                ofsVer: number;
                            };
                        };
                    };
                };
                'Лихоборы-Селигерская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    dist: number;
                    points: {
                        'Верхние Лихоборы': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                            };
                        };
                        'Селигерская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
                'Чкаловская-Римская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        link: string;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Чкаловская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                        'Римская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                                alignVer: $me_align;
                                ofsHor: number;
                            };
                        };
                    };
                };
                'Римская-Крестьянская Застава': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                };
                'Крестьянская Застава': {
                    through: {
                        anchor: string;
                        ofsHor: number;
                    };
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                        link: string;
                    };
                    dist: number;
                    points: {
                        'Крестьянская Застава': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {
                                text: string;
                                textAlign: string;
                                alignVer: $me_align;
                                alignHor: $me_align;
                                ofsHor: number;
                                ofsVer: number;
                            };
                        };
                    };
                };
                'Юг': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Дубровка': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                            };
                            transit: string;
                        };
                        'Кожуховская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Печатники': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Волжская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Люблино': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Братиславская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Марьино': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Борисово': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Шипиловская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Зябликово': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                            transit: string;
                        };
                    };
                };
            };
        };
        'Арбатско-Покровская': {
            style: string;
            type: string;
            code: string;
            segments: {
                'Пл. Революции': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsHor: number;
                    };
                    points: {
                        'Пл. Революции': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {
                                alignVer: $me_align;
                            };
                        };
                    };
                };
                'Курская': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    to: {
                        link: string;
                    };
                    points: {
                        'Курская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string[];
                        };
                    };
                };
                'Бауманская-Партизанская': {
                    from: string;
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Партизанская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                            transit: string;
                        };
                    };
                };
                'Измайловская-Щёлковская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Измайловская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Первомайская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Щёлковская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
                'Арбатская-Славянский бульвар': {
                    from: string;
                    to: {
                        anchor: string;
                        ofsHor: number;
                    };
                    points: {
                        'Арбатская': {
                            code: string;
                            color: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {
                                alignVer: $me_align;
                                alignHor: $me_align;
                                ofsHor: number;
                            };
                        };
                        'Смоленская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                alignHor: $me_align;
                            };
                        };
                        'Киевская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                        'Парк Победы': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                ofsHor: number;
                            };
                        };
                        'Славянский бульвар': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                                textAlign: string;
                                alignVer: $me_align;
                                alignHor: $me_align;
                            };
                        };
                    };
                };
                'Кунцевская-Пятницкое-Шоссе': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Кунцевская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                            };
                        };
                        'Молодёжная': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Крылатское': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Строгино': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Мякинино': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Волоколамская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Митино': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Пятницкое шоссе': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
            };
        };
        'Серпуховско-Тимирязевская': {
            style: string;
            type: string;
            code: string;
            segments: {
                'Боровицкая': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Боровицкая': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string[];
                            label: {
                                alignHor: $me_align;
                            };
                        };
                    };
                };
                'Чеховская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Чеховская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                            transit: string[];
                        };
                    };
                };
                'Чеховская-Цветной бульвар': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                };
                'Цветной бульвар-Менделеевская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    dist: number;
                    points: {
                        'Цветной бульвар': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                                ofsVer: number;
                                textAlign: string;
                                text: string;
                            };
                            transit: string;
                        };
                        'Менделеевская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                                alignVer: $me_align;
                            };
                            transit: string;
                        };
                    };
                };
                'Савёловская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Савёловская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
                'Дмитровская-Владыкино': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Дмитровская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                            };
                        };
                        'Тимирязевская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                alignHor: $me_align;
                                ofsHor: number;
                            };
                        };
                        'Петровско-Разумовская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                        'Владыкино': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                    };
                };
                'Отрадное-Алтуфьево': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Отрадное': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Бибирево': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Алтуфьево': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
                'Чеховская-Боровицкая': {
                    from: {
                        anchor: string;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        link: string;
                    };
                    dist: number;
                };
                'Боровицкая-Полянка': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    dist: number;
                    points: {
                        'Полянка': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                                alignVer: $me_align;
                            };
                        };
                    };
                };
                'Серпуховская-Бульвар-Дмитрия-Донского': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    dist: number;
                    points: {
                        'Серпуховскaя': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {};
                        };
                        'Тульская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Нагатинская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Нагорная': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Нахимовский проспект': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                            };
                        };
                        'Севастопольская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Чертановская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Южная': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Пражская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Улица Академика Янгеля': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                            };
                        };
                        'Аннино': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Бульвар Дмитрия Донского': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                            };
                        };
                    };
                };
            };
        };
        'Филевская': {
            style: string;
            type: string;
            code: string;
            segments: {
                'Александровский сад-Арбатская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Александровский сад': {
                            title: string;
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                            transit: string[];
                        };
                        'Арбатская': {
                            title: string;
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                color: string;
                                alignVer: $me_align;
                            };
                        };
                    };
                };
                'Смоленская-Киевская': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    to: {
                        anchor: string;
                        ofsHor: number;
                    };
                    points: {
                        'Смоленская': {
                            code: string;
                            color: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                alignHor: $me_align;
                            };
                        };
                        'Киевская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string[];
                        };
                    };
                };
                'Выставочная': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    dist: number;
                    points: {
                        'Выставочная': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
                'Международная': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    to: {
                        anchor: string;
                        ofsHor: number;
                    };
                    points: {
                        'Международная': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                                alignVer: $me_align;
                                ofsHor: number;
                                ofsVer: number;
                            };
                            transit: string;
                        };
                    };
                };
                'Студенческая': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    dist: number;
                    points: {
                        'Студенческая': {
                            code: string;
                            anchor: string;
                            label: {};
                            dist: number;
                        };
                    };
                };
                'Кутузовская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsHor: number;
                    };
                    points: {
                        'Кутузовская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                    };
                };
                'Фили-Кунцевская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Фили': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                            };
                        };
                        'Багратионовская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                            };
                        };
                        'Филёвский парк': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                            };
                        };
                        'Пионерская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignHor: $me_align;
                            };
                        };
                        'Кунцевская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                    };
                };
            };
        };
        'Калининская': {
            style: string;
            type: string;
            code: string;
            segments: {
                'Третьяковская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsHor: number;
                    };
                    points: {
                        'Третьяковская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string[];
                        };
                    };
                };
                'Марксистская-Новокосино': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        link: string;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    dist: number;
                    points: {
                        'Марксистская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                alignHor: $me_align;
                                ofsHor: number;
                            };
                            transit: string[];
                        };
                        'Площадь Ильича': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {
                                text: string;
                                ofsVer: number;
                            };
                        };
                        'Авиамоторная': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                            };
                        };
                        'Шоссе Энтузиастов': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                        'Перово': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                            };
                        };
                        'Новогиреево': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                            };
                        };
                        'Новокосино': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                            };
                        };
                    };
                };
            };
        };
        'Солнцевская-Бирюзовая': {
            style: string;
            code: string[];
            segments: {
                'Савёловская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    to: {
                        anchor: string;
                        ofsHor: number;
                    };
                    points: {
                        'Савёловская': {
                            code: string;
                            anchor: string;
                            transit: string;
                            dist: number;
                        };
                    };
                };
                'Петровский парк-Хорошёвская': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    dist: number;
                    points: {
                        'Петровский парк': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {};
                        };
                        'ЦСКА': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Хорошёвская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {};
                        };
                    };
                };
                'Шелепиха': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Шелепиха': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                    };
                };
            };
        };
        'Солнцевская': {
            style: string;
            code: string;
            segments: {
                'Шелепиха-Парк Победы': {
                    from: {
                        anchor: string;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                };
                'Парк Победы': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    through: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    dist: number;
                    points: {
                        'Парк Победы': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                    };
                };
                'Юг': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    to: {
                        anchor: string;
                        ofsVer: number;
                    };
                    points: {
                        'Минская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Ломоносовский проспект': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                            };
                        };
                        'Раменки': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Мичуринский проспект': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                            };
                        };
                        'Озерная': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Говорово': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Солнцево': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Боровское шоссе': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                            };
                        };
                        'Новопеределкино': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Рассказовка': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
            };
        };
        'Бирюзовая': {
            style: string;
            code: string;
            segments: {
                'Деловой центр': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                        link: string;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Деловой центр': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {
                                text: string;
                                alignHor: $me_align;
                                alignVer: $me_align;
                            };
                        };
                    };
                };
            };
        };
        'Бутовская': {
            type: string;
            style: string;
            code: string;
            segments: {
                'Улица Старокачаловская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Улица Старокачаловская': {
                            code: string;
                            anchor: string;
                            transit: string;
                            dist: number;
                            label: {
                                text: string;
                                alignHor: $me_align;
                                textAlign: string;
                            };
                        };
                    };
                };
                'Лесопарковая-Битцевский парк': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    to: {
                        anchor: string;
                        ofsHor: number;
                    };
                    points: {
                        'Лесопарковая': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                alignHor: $me_align;
                            };
                        };
                        'Битцевский парк': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {
                                text: string;
                                alignVer: $me_align;
                                alignHor: $me_align;
                                textAlign: string;
                            };
                        };
                    };
                };
                'Улица Скобелевская-Бунинская аллея': {
                    from: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    to: {
                        anchor: string;
                        ofsHor: number;
                    };
                    points: {
                        'Улица Скобелевская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                text: string;
                                ofsVer: number;
                                ofsHor: number;
                            };
                        };
                        'Бульвар Адмирала Ушакова': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                text: string;
                                ofsVer: number;
                                ofsHor: number;
                            };
                        };
                        'Улица Горчакова': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                text: string;
                                ofsVer: number;
                                ofsHor: number;
                            };
                        };
                        'Бунинская аллея': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                text: string;
                                ofsVer: number;
                                ofsHor: number;
                            };
                        };
                    };
                };
            };
        };
        'Некрасовская': {
            style: string;
            type: string;
            code: string;
            segments: {
                'Косино': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Косино': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                            label: {
                                alignHor: $me_align;
                            };
                        };
                        'Улица Дмитриевского': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                text: string;
                            };
                        };
                        'Лухмановская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                        'Некрасовка': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {};
                        };
                    };
                };
            };
        };
        'Каховская': {
            style: string;
            type: string;
            code: string;
            segments: {
                'Каширская-Варшавская': {
                    from: {
                        anchor: string;
                        ofsHor: number;
                        ofsVer: number;
                    };
                    through: {
                        anchor: string;
                        ofsVer: number;
                        ofsHor: number;
                    };
                    dist: number;
                    points: {
                        'Каширская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            transit: string;
                        };
                        'Варшавская': {
                            code: string;
                            anchor: string;
                            dist: number;
                            label: {
                                alignVer: $me_align;
                                alignHor: $me_align;
                                ofsVer: number;
                            };
                        };
                    };
                };
            };
        };
    };
}

declare namespace $.$$ {
    const $nl_metro_bolshaya_kolcevaya: {
        style: string;
        code: string;
        segments: {
            'Савёловская': {
                from: {
                    anchor: string;
                    ofsVer: number;
                    ofsHor: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Савёловская': {
                        anchor: string;
                        transit: string;
                    };
                };
            };
            'Петровский парк-ЦСКА': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                through: {
                    anchor: string;
                    ofsVer: number;
                };
                dist: number;
                points: {
                    'Петровский парк': {
                        anchor: string;
                        transit: string;
                    };
                    'ЦСКА': {
                        anchor: string;
                        dist: number;
                        label: {
                            alignHor: $me_align;
                            alignVer: $me_align;
                        };
                    };
                };
            };
            'Хорошёвская': {
                from: {
                    anchor: string;
                    ofsHor: number;
                    ofsVer: number;
                };
                to: {
                    anchor: string;
                    ofsHor: number;
                };
                points: {
                    'Хорошёвская': {
                        anchor: string;
                        dist: number;
                        transit: string[];
                    };
                };
            };
        };
    };
}
