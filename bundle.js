!function(a) {
    var i = {};
    function n(e) {
        if (i[e])
            return i[e].exports;
        var t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return a[e].call(t.exports, t, t.exports, n),
        t.l = !0,
        t.exports
    }
    n.m = a,
    n.c = i,
    n.d = function(a, i, e) {
        n.o(a, i) || Object.defineProperty(a, i, {
            enumerable: !0,
            get: e
        })
    }
    ,
    n.r = function(a) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(a, i) {
        if (1 & i && (a = n(a)),
        8 & i)
            return a;
        if (4 & i && "object" == typeof a && a && a.__esModule)
            return a;
        var e = Object.create(null);
        if (n.r(e),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: a
        }),
        2 & i && "string" != typeof a)
            for (var t in a)
                n.d(e, t, function(i) {
                    return a[i]
                }
                .bind(null, t));
        return e
    }
    ,
    n.n = function(a) {
        var i = a && a.__esModule ? function() {
            return a.default
        }
        : function() {
            return a
        }
        ;
        return n.d(i, "a", i),
        i
    }
    ,
    n.o = function(a, i) {
        return Object.prototype.hasOwnProperty.call(a, i)
    }
    ,
    n.p = "",
    n(n.s = 3)
}([function(a, i) {
    document.querySelector("body").addEventListener("click", (function(a) {
        var i = document.querySelector(".modal")
          , n = a.target;
        n.classList.contains("main__btn_first") && !n.classList.contains("main__btn_link") ? (i.classList.add("modal_show"),
        document.querySelector(".modal__wrapper_first").classList.add("show")) : n.classList.contains("main__btn_second") ? (i.classList.add("modal_show"),
        document.querySelector(".modal__wrapper_second").classList.add("show")) : n.classList.contains("main__btn_third") || n.classList.contains("main__btn_fourth") || n.classList.contains("main__btn_fifth") ? (i.classList.add("modal_show"),
        document.querySelector(".modal__wrapper_first").classList.add("show")) : n.classList.contains("icon-close") && (i.classList.remove("modal_show"),
        document.querySelectorAll(".modal__wrapper").forEach((function(a) {
            a.classList.remove("show")
        }
        )))
    }
    ));
    var n = function() {
        document.body.clientWidth < 479 ? (document.querySelector("body").style.minHeight = "".concat(window.innerHeight, "px"),
        document.querySelector(".main").style.minHeight = "".concat(window.innerHeight, "px"),
        document.querySelector(".main__container").style.minHeight = "".concat(window.innerHeight, "px")) : (document.querySelector("body").style.minHeight = "100vh",
        document.querySelector(".main").style.minHeight = "100vh",
        document.querySelector(".main__container").style.minHeight = "100vh")
    };
    window.addEventListener("resize", n),
    n()
}
, function(a, i) {
    var n = document.querySelector(".email-form__password-input")
      , e = document.querySelector(".email-form__view-icon");
    n && "password" === n.getAttribute("type") && e.classList.add("email-form__view-icon_close"),
    e.onclick = function() {
        n && "password" === n.getAttribute("type") ? (n.setAttribute("type", "text"),
        e.classList.add("email-form__view-icon_open"),
        e.classList.remove("email-form__view-icon_close")) : (n.setAttribute("type", "password"),
        e.classList.add("email-form__view-icon_close"),
        e.classList.remove("email-form__view-icon_open"))
    }
}
, function(a, i) {
    function n(a, i) {
        for (var n = 0; n < i.length; n++) {
            var e = i[n];
            e.enumerable = e.enumerable || !1,
            e.configurable = !0,
            "value"in e && (e.writable = !0),
            Object.defineProperty(a, e.key, e)
        }
    }
    var e = function() {
        function a() {
            !function(a, i) {
                if (!(a instanceof i))
                    throw new TypeError("Cannot call a class as a function")
            }(this, a),
            this._notif = document.querySelector(".alert"),
            this._notif && (this._text = document.querySelector(".alert__text"),
            this._closeBtn = this._notif.querySelector(".alert__close"),
            this._initCloseBtn())
        }
        var i, e, t;
        return i = a,
        (e = [{
            key: "closeNotif",
            value: function() {
                this._notif.classList.remove("alert_active"),
                clearInterval(this._timer)
            }
        }, {
            key: "_initCloseBtn",
            value: function() {
                var a = this;
                this._closeBtn.addEventListener("click", (function() {
                    a.closeNotif()
                }
                ))
            }
        }, {
            key: "show",
            value: function(a) {
                var i = this;
                clearInterval(this._timer),
                this._text.innerText = a,
                this._notif.classList.add("alert_active"),
                this._timer = setTimeout((function() {
                    i.closeNotif()
                }
                ), 3e3)
            }
        }]) && n(i.prototype, e),
        t && n(i, t),
        a
    }();
    window.formNotif = new e
}
, function(a, i, n) {
    "use strict";
    n.r(i);
    n(4),
    n(0);
    var e = {
        russian: {
            UAH: "Украинская гривна",
            RUB: "Российский рубль",
            TRY: "Турецкая лира",
            BRL: "Бразильский реал",
            PLN: "Польский злотый",
            INR: "Индийская рупия",
            UZS: "Узбекский сум",
            BGN: "Болгарский лев",
            MDL: "Молдавский лей",
            AZN: "Азербайджанский манат",
            IDR: "Индонезийская рупия",
            COP: "Колумбийское песо",
            ARS: "Аргентинское песо",
            KZT: "Казахстанский тенге",
            USD: "Доллар США",
            EUR: "Евро"
        },
        english: {
            UAH: "Ukrainian Hryvnya",
            RUB: "Russian Ruble",
            TRY: "Turkish lira",
            BRL: "Brazilian real",
            PLN: "Polish złoty",
            INR: "Indian rupiah",
            UZS: "Uzbekistani soʻm",
            BGN: "Bulgarian lev",
            MDL: "Moldovan leu",
            AZN: "Azerbaijani manat",
            IDR: "Indonesian rupiah",
            COP: "Colombian peso",
            ARS: "Argentine peso",
            KZT: "Kazakh Tenge",
            USD: "US Dollar",
            EUR: "Euro"
        },
        portuguese: {
            EUR: "Euro",
            RUB: "Rublo Russo",
            UAH: "Grívnia Ucraniana",
            BRL: "Reais",
            TRY: "Lira Turca",
            INR: "Rupia indiana",
            PLN: "Zloty polonês",
            UZS: "Som uzbeque",
            BGN: "Lev búlgaro",
            MDL: "Leu moldávio",
            AZN: "Manat azeri do azerbaijão",
            IDR: "Rúpia Indonésia",
            COP: "Peso Colombiano",
            ARS: "Peso Argentino",
            KZT: "Tenge Cazaque",
            USD: "Dólar Americano"
        },
        turkish: {
            EUR: "Euro",
            RUB: "Rus rublesi",
            UAH: "Ukrayna Grivnası",
            BRL: "Brezilya reali",
            TRY: "Türk lirası",
            INR: "Indian Rupiah",
            PLN: "Polonya Zlotisi",
            UZS: "Özbekistan Somu",
            BGN: "Bulgar Levası",
            MDL: "Moldova Leyi",
            AZN: "Azerbaycan Manatı",
            IDR: "Endonezya Rupiahı",
            COP: "Kolombiya pesosu",
            ARS: "Arjantin pesosu",
            KZT: "Kazak Tengesi",
            USD: "ABD doları"
        },
        ukrainian: {
            EUR: "Євро",
            RUB: "Російський рубль",
            UAH: "Українська гривня",
            BRL: "Бразильський реал",
            TRY: "Турецька ліра",
            INR: "Індійська рупія",
            PLN: "Польський злотий",
            UZS: "Узбецький сум",
            BGN: "Болгарський лев",
            MDL: "Молдавський лей",
            AZN: "Азербайджанський манат",
            IDR: "Індонезійська рупія",
            COP: "Колумбійське песо",
            ARS: "Аргентинське песо",
            KZT: "Казахстанський теньге",
            USD: "Долар США"
        },
        kazakh: {
            EUR: "Еуро",
            RUB: "Ресей рублі",
            UAH: "Украин гривнасы",
            BRL: "Бразилия реалы",
            TRY: "Түрік лирасы",
            INR: "Үнді рупиясы",
            PLN: "Поляк злотыйы",
            UZS: "Өзбек сомы",
            BGN: "Болгария леві",
            MDL: "Молдавия леві",
            AZN: "Әзірбайжан манаты",
            IDR: "Индонезия рупиясы",
            COP: "Колумбия песосы",
            ARS: "Аргентиналық песо",
            KZT: "Қазақстан теңгесі",
            USD: "АҚШ доллары"
        },
        azerbaijani: {
            EUR: "Avro",
            RUB: "Rus rublu",
            UAH: "Ukrayna qrivnası",
            BRL: "Braziliya realı",
            TRY: "Türk lirəsi",
            INR: "Hindistan rupisi",
            PLN: "Polşa zlotı",
            UZS: "Özbək sumu",
            BGN: "Bolqar levi",
            MDL: "Moldova leyi",
            AZN: "Azərbaycan manatı",
            IDR: "İndoneziya rupisi",
            COP: "Kolumbiya pesosu",
            ARS: "Argentina pesosu",
            KZT: "Qazaxstan təngəsi",
            USD: "ABŞ dolları"
        },
        uzbek: {
            UZS: "O'zbek so'mi"
        },
        spanish: {
            PEN: "Sol",
            UAH: "Hryvnya Ucraniano",
            RUB: "Rublo ruso",
            TRY: "Lira turca",
            BRL: "Reales brasileños",
            PLN: "Zloty polaco",
            INR: "Rupia india",
            UZS: "Suma uzbeca",
            BGN: "León búlgaro",
            MDL: "Leu moldavo",
            AZN: "Manat azerbaiyano",
            IDR: "Rupia indonesia",
            COP: "Pesos colombianos",
            ARS: "Pesos argentinos",
            KZT: "Tenge Kazajo",
            USD: "Dólar estadounidense",
            EUR: "Euro"
        }
    }
      , t = {
        PEN: {
            icon: "icon-Sol",
            abbreviation: "PEN"
        },
        UAH: {
            icon: "icon-uah",
            abbreviation: "UAH"
        },
        RUB: {
            icon: "icon-rub",
            abbreviation: "RUB"
        },
        TRY: {
            icon: "icon-try",
            abbreviation: "TRY"
        },
        BRL: {
            icon: "icon-brl",
            abbreviation: "BRL"
        },
        PLN: {
            icon: "icon-pln",
            abbreviation: "PLN"
        },
        INR: {
            icon: "icon-inr",
            abbreviation: "INR"
        },
        UZS: {
            icon: "icon-uzs",
            abbreviation: "UZS"
        },
        BGN: {
            icon: "icon-bgn",
            abbreviation: "BGN"
        },
        MDL: {
            icon: "icon-mdl",
            abbreviation: "MDL"
        },
        AZN: {
            icon: "icon-azn",
            abbreviation: "AZN"
        },
        IDR: {
            icon: "icon-idr",
            abbreviation: "IDR"
        },
        COP: {
            icon: "icon-cop",
            abbreviation: "COP"
        },
        ARS: {
            icon: "icon-ars",
            abbreviation: "ARS"
        },
        KZT: {
            icon: "icon-kzt",
            abbreviation: "KZT"
        },
        USD: {
            icon: "icon-usd",
            abbreviation: "USD"
        },
        EUR: {
            icon: "icon-eur",
            abbreviation: "EUR"
        }
    }
      , r = window.landingConfig.forms.currency.list
      , o = [];
    r.forEach((function(a) {
        var i = {
            title: e[window.landingConfig.forms.locale][a],
            icon: t[a].icon,
            abbreviation: t[a].abbreviation
        };
        o.push(i)
    }
    ));
    for (var s = document.querySelectorAll(".select-currency__placeholder .select-currency__text"), l = 0; l < s.length; l++)
        s[l].innerText = o[0].title;
    for (var u = document.querySelectorAll(".select-currency__icon-font"), m = 0; m < u.length; m++)
        u[m].classList.add(o[0].icon);
    for (var c = document.querySelectorAll(".select-currency__placeholder .select-currency__name"), g = 0; g < c.length; g++)
        c[g].innerText = o[0].abbreviation;
    for (var d = document.querySelectorAll(".select-currency__default-input"), b = 0; b < c.length; b++)
        d[b].value = o[0].abbreviation;
    document.addEventListener("click", (function(a) {
        var i, n;
        a.target.classList.contains("js--currency") && o.length > 1 && (i = a.target.parentElement.parentElement,
        "block" !== (n = i.querySelector(".select-currency__list")).style.display ? (n.style.display = "block",
        n.innerHTML = "",
        o.forEach((function(a) {
            var i = document.createElement("li");
            i.className = "select-currency__item",
            i.dataset.value = a.abbreviation,
            i.dataset.icon = a.icon,
            i.dataset.abbreviation = a.abbreviation,
            i.dataset.title = a.title,
            i.innerHTML = '\n      <div class="select-currency__icon">\n        <i class="'.concat(a.icon, '"></i>\n      </div>\n      <div class="select-currency__name">').concat(a.abbreviation, '</div>\n      <div class="select-currency__text">').concat(a.title, "</div>\n    "),
            n.appendChild(i)
        }
        )),
        n.addEventListener("click", (function(a) {
            a.target.classList.contains("select-currency__item") && (i.querySelector(".select-currency__default-input").value = a.target.dataset.abbreviation,
            i.querySelector(".select-currency__placeholder .select-currency__icon").innerHTML = '<i class="'.concat(a.target.dataset.icon, '"></i>'),
            i.querySelector(".select-currency__placeholder .select-currency__name").innerText = a.target.dataset.abbreviation,
            i.querySelector(".select-currency__placeholder .select-currency__text").innerText = a.target.dataset.title,
            n.style.display = "none")
        }
        )),
        document.addEventListener("click", (function(a) {
            i.contains(a.target) || (n.style.display = "none")
        }
        ))) : n.style.display = "none")
    }
    )),
    r.length <= 1 && document.querySelectorAll(".select-currency").forEach((function(a) {
        a.classList.add("no-select-currency")
    }
    ));
    var p = {
        russian: {
            ukraine: "Украина",
            russia: "Россия",
            turkey: "Турция",
            brazil: "Бразилия",
            kazakhstan: "Казахстан",
            belarus: "Беларусь",
            andorra: "Андорра",
            "antigua and barbuda": "Антигуа и Барбуда",
            armenia: "Армения",
            argentina: "Аргентина",
            australia: "Австралия",
            austria: "Австрия",
            azerbaijan: "Азербайджан",
            bangladesh: "Бангладеш",
            bahamas: "Багамы",
            bahrain: "Бахрейн",
            barbados: "Барбадос",
            belize: "Белиз",
            belgium: "Бельгия",
            benin: "Бенин",
            bulgaria: "Болгария",
            bolivia: "Боливия",
            botswana: "Ботсвана",
            "bosnia and herzegovina": "Босния и Герцеговина",
            butane: "Бутан",
            burundi: "Бурунди",
            brunei: "Бруней",
            "burkina faso": "Буркина-Фасо",
            vanuatu: "Вануату",
            "united kingdom": "Великобритания",
            hungary: "Венгрия",
            venezuela: "Венесуэла",
            vietnam: "Вьетнам",
            gabon: "Габон",
            gambia: "Гамбия",
            guinea: "Гвинея",
            "guinea bissau": "Гвинея-Бисау",
            honduras: "Гондурас",
            haiti: "Гаити",
            guatemala: "Гватемала",
            ghana: "Гана",
            grenada: "Гренада",
            denmark: "Дания",
            "democratic republic of the congo": "Демократическая Республика Конго",
            dominica: "Доминика",
            "dominican republic": "Доминиканская Республика",
            djibouti: "Джибути",
            "equatorial guinea": "Экваториальная Гвинея",
            eritrea: "Эритрея",
            estonia: "Эстония",
            ethiopia: "Эфиопия",
            egypt: "Египет",
            germany: "Германия",
            greece: "Греция",
            georgia: "Грузия",
            zambia: "Замбия",
            israel: "Израиль",
            spain: "Испания",
            india: "Индия",
            indonesia: "Индонезия",
            jordan: "Иордания",
            iran: "Иран",
            ireland: "Ирландия",
            iceland: "Исландия",
            italy: "Италия",
            "cape verde": "Кабо-Верде",
            qatar: "Катар",
            Cameroon: "Камерун",
            kenya: "Кения",
            kiribati: "Кирибати",
            colombia: "Колумбия",
            "costa rica": "Коста-Рика",
            cuba: "Куба",
            "prc (people's republic of china)": "КНР (Китайская Народная Республика)",
            kyrgyzstan: "Киргизия",
            latvia: "Латвия",
            lesotho: "Лесото",
            libya: "Ливия",
            liberia: "Либерия",
            lebanon: "Ливан",
            lithuania: "Литва",
            liechtenstein: "Лихтенштейн",
            luxembourg: "Люксембург",
            mauritius: "Маврикий",
            mauritania: "Мавритания",
            madagascar: "Мадагаскар",
            macedonia: "Македония",
            mozambique: "Мозамбик",
            morocco: "Марокко",
            malawi: "Малави",
            malta: "Мальта",
            malaysia: "Малайзия",
            mali: "Мали",
            "marshall islands": "Маршалловы Острова",
            mexico: "Мексика",
            mongolia: "Монголия",
            moldova: "Молдавия",
            monaco: "Монако",
            nauru: "Науру",
            nepal: "Непал",
            netherlands: "Нидерланды",
            niger: "Нигер",
            nigeria: "Нигерия",
            norway: "Норвегия",
            "new zealand": "Новая Зеландия",
            oman: "Оман",
            pakistan: "Пакистан",
            palau: "Палау",
            paraguay: "Парагвай",
            peru: "Перу",
            poland: "Польша",
            portugal: "Португалия",
            rwanda: "Руанда",
            romania: "Румыния",
            "saint vincent and the grenadines": "Сент-Винсент и Гренадины",
            "saint kitts and nevis": "Сент-Китс и Невис",
            "saint lucia": "Сент-Люсия",
            "sao tome and principe": "Сан-Томе и Принсипи",
            salvador: "Сальвадор",
            samoa: "Самоа",
            "saudi arabia": "Саудовская Аравия",
            swaziland: "Свазиленд",
            seychelles: "Сейшельские Острова",
            senegal: "Сенегал",
            serbia: "Сербия",
            "solomon islands": "Соломоновы Острова",
            slovakia: "Словакия",
            slovenia: "Словения",
            somalia: "Сомали",
            montenegro: "Черногория",
            switzerland: "Швейцария",
            sweden: "Швеция",
            "sierra leone": "Сьерра-Леоне",
            suriname: "Суринам",
            tajikistan: "Таджикистан",
            turkmenistan: "Туркменистан",
            tanzania: "Танзания",
            thailand: "Таиланд",
            togo: "Того",
            tonga: "Тонга",
            "trinidad and tobago": "Тринидад и Тобаго",
            tuvalu: "Тувалу",
            tunisia: "Тунис",
            fiji: "Фиджи",
            philippines: "Филиппины",
            finland: "Финляндия",
            france: "Франция",
            chad: "Чад",
            "czech republic": "Чехия",
            chile: "Чили",
            "south africa": "ЮАР",
            croatia: "Хорватия",
            uruguay: "Уругвай",
            uzbekistan: "Узбекистан",
            "sri lanka": "Шри-Ланка",
            jamaica: "Ямайка",
            japan: "Япония"
        },
        english: {
            ukraine: "Ukraine",
            russia: "Russia",
            turkey: "Turkey",
            brazil: "Brazil",
            kazakhstan: "Kazakhstan",
            belarus: "Belarus",
            andorra: "Andorra",
            "antigua and barbuda": "Antigua and Barbuda",
            armenia: "Armenia",
            argentina: "Argentina",
            australia: "Australia",
            austria: "Austria",
            azerbaijan: "Azerbaijan",
            bangladesh: "Bangladesh",
            bahamas: "Bahamas",
            bahrain: "Bahrain",
            barbados: "Barbados",
            belize: "Belize",
            belgium: "Belgium",
            benin: "Benin",
            bulgaria: "Bulgaria",
            bolivia: "Bolivia",
            botswana: "Botswana",
            "bosnia and herzegovina": "Bosnia and Herzegovina",
            butane: "Butane",
            burundi: "Burundi",
            brunei: "Brunei",
            "burkina faso": "Burkina Faso",
            vanuatu: "Vanuatu",
            "united kingdom": "United Kingdom",
            hungary: "Hungary",
            venezuela: "Venezuela",
            vietnam: "Vietnam",
            gabon: "Gabon",
            gambia: "Gambia",
            guinea: "Guinea",
            "guinea bissau": "Guinea Bissau",
            honduras: "Honduras",
            haiti: "Haiti",
            guatemala: "Guatemala",
            ghana: "Ghana",
            grenada: "Grenada",
            denmark: "Denmark",
            "democratic republic of the congo": "Democratic republic of the Congo",
            dominica: "Dominica",
            "dominican republic": "Dominican republic",
            djibouti: "Djibouti",
            "equatorial guinea": "Equatorial Guinea",
            eritrea: "Eritrea",
            estonia: "Estonia",
            ethiopia: "Ethiopia",
            egypt: "Egypt",
            germany: "Germany",
            greece: "Greece",
            georgia: "Georgia",
            zambia: "Zambia",
            israel: "Israel",
            spain: "Spain",
            india: "India",
            indonesia: "Indonesia",
            jordan: "Jordan",
            iran: "Iran",
            ireland: "Ireland",
            iceland: "Iceland",
            italy: "Italy",
            "cape verde": "Cape Verde",
            qatar: "Qatar",
            Cameroon: "Cameroon",
            kenya: "Kenya",
            kiribati: "Kiribati",
            colombia: "Colombia",
            "costa rica": "Costa Rica",
            cuba: "Cuba",
            "prc (people's republic of china)": "PRC (people's republic of China)",
            kyrgyzstan: "Kyrgyzstan",
            latvia: "Latvia",
            lesotho: "Lesotho",
            libya: "Libya",
            liberia: "Liberia",
            lebanon: "Lebanon",
            lithuania: "Lithuania",
            liechtenstein: "Liechtenstein",
            luxembourg: "Luxembourg",
            mauritius: "Mauritius",
            mauritania: "Mauritania",
            madagascar: "Madagascar",
            macedonia: "Macedonia",
            mozambique: "Mozambique",
            morocco: "Morocco",
            malawi: "Malawi",
            malta: "Malta",
            malaysia: "Malaysia",
            mali: "Mali",
            "marshall islands": "Marshall islands",
            mexico: "Mexico",
            mongolia: "Mongolia",
            moldova: "Moldova",
            monaco: "Monaco",
            nauru: "Nauru",
            nepal: "Nepal",
            netherlands: "Netherlands",
            niger: "Niger",
            nigeria: "Nigeria",
            norway: "Norway",
            "new zealand": "New Zealand",
            oman: "Oman",
            pakistan: "Pakistan",
            palau: "Palau",
            paraguay: "Paraguay",
            peru: "Peru",
            poland: "Poland",
            portugal: "Portugal",
            rwanda: "Rwanda",
            romania: "Romania",
            "saint vincent and the grenadines": "Saint Vincent and the Grenadines",
            "saint kitts and nevis": "Saint Kitts and Nevis",
            "saint lucia": "Saint Lucia",
            "sao tome and principe": "Sao Tome and Principe",
            salvador: "Salvador",
            samoa: "Samoa",
            "saudi arabia": "Saudi Arabia",
            swaziland: "Swaziland",
            seychelles: "Seychelles",
            senegal: "Senegal",
            serbia: "Serbia",
            "solomon islands": "Solomon islands",
            slovakia: "Slovakia",
            slovenia: "Slovenia",
            somalia: "Somalia",
            montenegro: "Montenegro",
            switzerland: "Switzerland",
            sweden: "Sweden",
            "sierra leone": "Sierra Leone",
            suriname: "Suriname",
            tajikistan: "Tajikistan",
            turkmenistan: "Turkmenistan",
            tanzania: "Tanzania",
            thailand: "Thailand",
            togo: "Togo",
            tonga: "Tonga",
            "trinidad and tobago": "Trinidad and Tobago",
            tuvalu: "Tuvalu",
            tunisia: "Tunisia",
            fiji: "Fiji",
            philippines: "Philippines",
            finland: "Finland",
            france: "France",
            chad: "Chad",
            "czech republic": "Czech republic",
            chile: "Chile",
            "south africa": "South africa",
            croatia: "Croatia",
            uruguay: "Uruguay",
            uzbekistan: "Uzbekistan",
            "sri lanka": "Sri Lanka",
            jamaica: "Jamaica",
            japan: "Japan"
        },
        portuguese: {
            ukraine: "Ucrânia",
            russia: "Federação Russa",
            turkey: "República da Turquia",
            brazil: "Brasil",
            kazakhstan: "Cazaquistão",
            belarus: "Bielorrússia",
            andorra: "Andorra",
            "antigua and barbuda": "Antígua e Barbuda",
            armenia: "Armênia",
            argentina: "Argentina",
            australia: "Austrália",
            austria: "Áustria",
            azerbaijan: "Azerbaijão",
            bangladesh: "Bangladesh",
            bahamas: "Bahamas",
            bahrain: "Barém",
            barbados: "Barbados",
            belize: "Belize",
            belgium: "Bélgica",
            benin: "Benin",
            bulgaria: "Bulgária",
            bolivia: "Bolívia",
            botswana: "Botsuana",
            "bosnia and herzegovina": "Bósnia e Herzegovina",
            butane: "Butão",
            burundi: "Burundi",
            brunei: "Brunei",
            "burkina faso": "Burkina Faso",
            vanuatu: "Vanuatu",
            "united kingdom": "Reino Unido",
            hungary: "Hungria",
            venezuela: "Venezuela",
            vietnam: "Vietnã",
            gabon: "Gabão",
            gambia: "Gâmbia",
            guinea: "Guiné",
            "guinea bissau": "Guiné-Bissau",
            honduras: "Honduras",
            haiti: "Haiti",
            guatemala: "Guatemala",
            ghana: "Gana",
            grenada: "Granada",
            denmark: "Dinamarca",
            "democratic republic of the congo": "República Democrática do Congo",
            dominica: "Dominica",
            "dominican republic": "República Dominicana",
            djibouti: "Djibuti",
            "equatorial guinea": "Guiné Equatorial",
            eritrea: "Eritreia",
            estonia: "Estônia",
            ethiopia: "Etiópia",
            egypt: "Egito",
            germany: "Alemanha",
            greece: "Grécia",
            georgia: "Geórgia",
            zambia: "Zâmbia",
            israel: "Israel",
            spain: "Espanha",
            india: "Índia",
            indonesia: "Indonésia",
            jordan: "Jordânia",
            iran: "Irão",
            ireland: "Irlanda",
            iceland: "Islândia",
            italy: "Itália",
            "cape verde": "Cabo Verde",
            qatar: "Catar",
            Cameroon: "Camarões",
            kenya: "Quênia",
            kiribati: "Kiribati",
            colombia: "Colômbia",
            "costa rica": "Costa Rica",
            cuba: "Cuba",
            "prc (people's republic of china)": "República Popular da China",
            kyrgyzstan: "Quirguistão",
            latvia: "Letônia",
            lesotho: "Lesoto",
            libya: "Líbia",
            liberia: "Libéria",
            lebanon: "Líbano",
            lithuania: "Lituânia",
            liechtenstein: "Liechtenstein",
            luxembourg: "Luxemburgo",
            mauritius: "Maurícia",
            mauritania: "Mauritânia",
            madagascar: "Madagáscar",
            macedonia: "Macedônia",
            mozambique: "Moçambique",
            morocco: "Marrocos",
            malawi: "Malawi",
            malta: "Malta",
            malaysia: "Malásia",
            mali: "Mali",
            "marshall islands": "Ilhas Marshall",
            mexico: "México",
            mongolia: "Mongólia",
            moldova: "Moldova",
            monaco: "Mônaco",
            nauru: "Nauru",
            nepal: "Nepal",
            netherlands: "Países Baixos",
            niger: "Níger",
            nigeria: "Nigéria",
            norway: "Noruega",
            "new zealand": "Nova Zelândia",
            oman: "Omã",
            pakistan: "Paquistão",
            palau: "Palau",
            paraguay: "Paraguai",
            peru: "Peru",
            poland: "Polônia",
            portugal: "Portugal",
            rwanda: "Ruanda",
            romania: "Romênia",
            "saint vincent and the grenadines": "São Vicente e Granadinas",
            "saint kitts and nevis": "São Cristóvão e Nevis",
            "saint lucia": "Santa Lúcia",
            "sao tome and principe": "São Tomé e Príncipe",
            salvador: "Salvador",
            samoa: "Samoa",
            "saudi arabia": "Arábia Saudita",
            swaziland: "Suazilândia",
            seychelles: "Seychelles",
            senegal: "Senegal",
            serbia: "Sérvia",
            "solomon islands": "Ilhas Salomão",
            slovakia: "Eslováquia",
            slovenia: "Eslovênia",
            somalia: "Somália",
            montenegro: "Montenegro",
            switzerland: "Suíça",
            sweden: "Suécia",
            "sierra leone": "Serra Leoa",
            suriname: "Suriname",
            tajikistan: "Tajiquistão",
            turkmenistan: "Turquemenistão",
            tanzania: "Tanzânia",
            thailand: "Tailândia",
            togo: "Togo",
            tonga: "Tonga",
            "trinidad and tobago": "Trindade e Tobago",
            tuvalu: "Tuvalu",
            tunisia: "Tunísia",
            fiji: "Fiji",
            philippines: "Filipinas",
            finland: "Finlândia",
            france: "França",
            chad: "Chade",
            "czech republic": "República Checa",
            chile: "Chile",
            "south africa": "África do Sul",
            croatia: "Croácia",
            uruguay: "Uruguai",
            uzbekistan: "Usbequistão",
            "sri lanka": "Sri Lanka",
            jamaica: "Jamaica",
            japan: "Japão"
        },
        turkish: {
            ukraine: "Ukrayna",
            russia: "Rusya",
            turkey: "Türkiye",
            brazil: "Brezilya",
            kazakhstan: "Kazakistan",
            belarus: "Belarus",
            andorra: "Andorra",
            "antigua and barbuda": "Antigua ve Barbuda",
            armenia: "Ermenistan",
            argentina: "Arjantin",
            australia: "Avustralya",
            austria: "Avusturya",
            azerbaijan: "Azerbaycan",
            bangladesh: "Bangladeş",
            bahamas: "Bahamalar",
            bahrain: "Bahreyn",
            barbados: "Barbados",
            belize: "Belize",
            belgium: "Belçika",
            benin: "Benin",
            bulgaria: "Bulgaristan",
            bolivia: "Bolivya",
            botswana: "Botsvana",
            "bosnia and herzegovina": "Bosna-Hersek",
            butane: "Butan",
            burundi: "Burundi",
            brunei: "Brunei",
            "burkina faso": "Burkina Faso",
            vanuatu: "Vanuatu",
            "united kingdom": "Birleşik Krallık",
            hungary: "Macaristan",
            venezuela: "Venezuela",
            vietnam: "Vietnam",
            gabon: "Gabon",
            gambia: "Gambiya",
            guinea: "Gine",
            "guinea bissau": "Gine-Bissau",
            honduras: "Honduras",
            haiti: "Haiti",
            guatemala: "Guatemala",
            ghana: "Gana",
            grenada: "Grenada",
            denmark: "Danimarka",
            "democratic republic of the congo": "Demokratik Kongo Cumhuriyeti",
            dominica: "Dominika",
            "dominican republic": "Dominik Cumhuriyeti",
            djibouti: "Cibuti",
            "equatorial guinea": "Ekvator Ginesi",
            eritrea: "Eritre",
            estonia: "Estonya",
            ethiopia: "Etiyopya",
            egypt: "Mısır",
            germany: "Almanya",
            greece: "Yunanistan",
            georgia: "Gürcistan",
            zambia: "Zambiya",
            israel: "İsrail",
            spain: "İspanya",
            india: "Hindistan",
            indonesia: "Endonezya",
            jordan: "Ürdün",
            iran: "İran",
            ireland: "İrlanda",
            iceland: "İzlanda",
            italy: "İtalya",
            "cape verde": "Yeşil Burun Adaları",
            qatar: "Katar",
            Cameroon: "Kamerun",
            kenya: "Kenya",
            kiribati: "Kiribati",
            colombia: "Kolombiya",
            "costa rica": "Kosta Rika",
            cuba: "Küba",
            "prc (people's republic of china)": "PRC (Çin Halk Cumhuriyeti)",
            kyrgyzstan: "Kırgızistan",
            latvia: "Letonya",
            lesotho: "Lesotho",
            libya: "Libya",
            liberia: "Liberya",
            lebanon: "Lübnan",
            lithuania: "Litvanya",
            liechtenstein: "Lihtenştayn",
            luxembourg: "Lüksemburg",
            mauritius: "Mauritius",
            mauritania: "Moritanya",
            madagascar: "Madagaskar",
            macedonia: "Makedonya",
            mozambique: "Mozambik",
            morocco: "Fas",
            malawi: "Malavi",
            malta: "Malta",
            malaysia: "Malezya",
            mali: "Mali",
            "marshall islands": "Marshall Adaları",
            mexico: "Meksika",
            mongolia: "Moğolistan",
            moldova: "Moldova",
            monaco: "Monako",
            nauru: "Nauru",
            nepal: "Nepal",
            netherlands: "Hollanda",
            niger: "Nijer",
            nigeria: "Nijerya",
            norway: "Norveç",
            "new zealand": "Yeni Zelanda",
            oman: "Umman",
            pakistan: "Pakistan",
            palau: "Palau",
            paraguay: "Paraguay",
            peru: "Peru",
            poland: "Polonya",
            portugal: "Portekiz",
            rwanda: "Ruanda",
            romania: "Romanya",
            "saint vincent and the grenadines": "Aziz Vincent ve Grenadinler",
            "saint kitts and nevis": "Saint Kitts ve Nevis",
            "saint lucia": "Saint Lucia",
            "sao tome and principe": "Sao Tome ve Principe",
            salvador: "Salvador",
            samoa: "Samoa",
            "saudi arabia": "Suudi Arabistan",
            swaziland: "Svaziland",
            seychelles: "Seychelles",
            senegal: "Senegal",
            serbia: "Sırbistan",
            "solomon islands": "Solomon Adaları",
            slovakia: "Slovakya",
            slovenia: "Slovenya",
            somalia: "Somali",
            montenegro: "Karadağ",
            switzerland: "İsviçre",
            sweden: "İsveç",
            "sierra leone": "Sierra Leone",
            suriname: "Surinam",
            tajikistan: "Tacikistan",
            turkmenistan: "Türkmenistan",
            tanzania: "Tanzanya",
            thailand: "Tayland",
            togo: "Togo",
            tonga: "Tonga",
            "trinidad and tobago": "Trinidad ve Tobago",
            tuvalu: "Tuvalu",
            tunisia: "Tunus",
            fiji: "Fiji",
            philippines: "Filipinler",
            finland: "Finlandiya",
            france: "Fransa",
            chad: "Çad",
            "czech republic": "Çek Cumhuriyeti",
            chile: "Şili",
            "south africa": "Güney Afrika",
            croatia: "Hırvatistan",
            uruguay: "Uruguay",
            uzbekistan: "Özbekistan",
            "sri lanka": "Sri Lanka",
            jamaica: "Jamaika",
            japan: "Japonya"
        },
        ukrainian: {
            ukraine: "Україна",
            russia: "Росія",
            turkey: "Туреччина",
            brazil: "Бразилія",
            kazakhstan: "Казахстан",
            belarus: "Білорусь",
            andorra: "Андорра",
            "antigua and barbuda": "Антигуа і Барбуда",
            armenia: "Вірменія",
            argentina: "Аргентина",
            australia: "Австралія",
            austria: "Австрія",
            azerbaijan: "Азербайджан",
            bangladesh: "Бангладеш",
            bahamas: "Багами",
            bahrain: "Бахрейн",
            barbados: "Барбадос",
            belize: "Беліз",
            belgium: "Бельгія",
            benin: "Бенін",
            bulgaria: "Болгарія",
            bolivia: "Болівія",
            botswana: "Ботсвана",
            "bosnia and herzegovina": "Боснія і Герцеговина",
            butane: "Бутан",
            burundi: "Бурунді",
            brunei: "Бруней",
            "burkina faso": "Буркіна-Фасо",
            vanuatu: "Вануату",
            "united kingdom": "Великобританія",
            hungary: "Угорщина",
            venezuela: "Венесуела",
            vietnam: "В’єтнам",
            gabon: "Габон",
            gambia: "Гамбія",
            guinea: "Гвінея",
            "guinea bissau": "Гвінея-Бісау",
            honduras: "Гондурас",
            haiti: "Гаїті",
            guatemala: "Гватемала",
            ghana: "Гана",
            grenada: "Гренада",
            denmark: "Данія",
            "democratic republic of the congo": "Демократична Республіка Конго",
            dominica: "Домініка",
            "dominican republic": "Домініканська Республіка",
            djibouti: "Джибуті",
            "equatorial guinea": "Екваторіальна Гвінея",
            eritrea: "Еритрея",
            estonia: "Естонія",
            ethiopia: "Ефіопія",
            egypt: "Єгипет",
            germany: "Німеччина",
            greece: "Греція",
            georgia: "Грузія",
            zambia: "Замбія",
            israel: "Ізраїль",
            spain: "Іспанія",
            india: "Індія",
            indonesia: "Індонезія",
            jordan: "Йорданія",
            iran: "Іран",
            ireland: "Ірландія",
            iceland: "Ісландія",
            italy: "Італія",
            "cape verde": "Кабо-Верде",
            qatar: "Катар",
            Cameroon: "Камерун",
            kenya: "Кенія",
            kiribati: "Кірібаті",
            colombia: "Колумбія",
            "costa rica": "Коста-Ріка",
            cuba: "Куба",
            "prc (people's republic of china)": "КНР (Китайська Народна Республіка)",
            kyrgyzstan: "Киргизія",
            latvia: "Латвія",
            lesotho: "Лесото",
            libya: "Лівія",
            liberia: "Ліберія",
            lebanon: "Ліван",
            lithuania: "Литва",
            liechtenstein: "Ліхтенштейн",
            luxembourg: "Люксембург",
            mauritius: "Маврикій",
            mauritania: "Мавританія",
            madagascar: "Мадагаскар",
            macedonia: "Македонія",
            mozambique: "Мозамбік",
            morocco: "Марокко",
            malawi: "Малаві",
            malta: "Мальта",
            malaysia: "Малайзія",
            mali: "Малі",
            "marshall islands": "Маршаллові Острови",
            mexico: "Мексика",
            mongolia: "Монголія",
            moldova: "Молдова",
            monaco: "Монако",
            nauru: "Науру",
            nepal: "Непал",
            netherlands: "Нідерланди",
            niger: "Нігер",
            nigeria: "Нігерія",
            norway: "Норвегія",
            "new zealand": "Нова Зеландія",
            oman: "Оман",
            pakistan: "Пакистан",
            palau: "Палау",
            paraguay: "Парагвай",
            peru: "Перу",
            poland: "Польща",
            portugal: "Португалія",
            rwanda: "Руанда",
            romania: "Румунія",
            "saint vincent and the grenadines": "Сент-Вінсент і Гренадіни",
            "saint kitts and nevis": "Сент-Кітс і Невіс",
            "saint lucia": "Сент-Люсія",
            "sao tome and principe": "Сан-Томе і Прінсіпі",
            salvador: "Сальвадор",
            samoa: "Самоа",
            "saudi arabia": "Саудівська Аравія",
            swaziland: "Свазіленд",
            seychelles: "Сейшельські Острови",
            senegal: "Сенегал",
            serbia: "Сербія",
            "solomon islands": "Соломонові Острови",
            slovakia: "Словаччина",
            slovenia: "Словенія",
            somalia: "Сомалі",
            montenegro: "Чорногорія",
            switzerland: "Швейцарія",
            sweden: "Швеція",
            "sierra leone": "Сьєрра-Леоне",
            suriname: "Суринам",
            tajikistan: "Таджикистан",
            turkmenistan: "Туркменистан",
            tanzania: "Танзанія",
            thailand: "Таїланд",
            togo: "Того",
            tonga: "Тонга",
            "trinidad and tobago": "Тринідад і Тобаго",
            tuvalu: "Тувалу",
            tunisia: "Туніс",
            fiji: "Фіджі",
            philippines: "Філіппіни",
            finland: "Фінляндія",
            france: "Франція",
            chad: "Чад",
            "czech republic": "Чехія",
            chile: "Чилі",
            "south africa": "ПАР",
            croatia: "Хорватія",
            uruguay: "Уругвай",
            uzbekistan: "Узбекистан",
            "sri lanka": "Шрі-Ланка",
            jamaica: "Ямайка",
            japan: "Японія"
        },
        kazakh: {
            ukraine: "Украина",
            russia: "Ресей",
            turkey: "Түркия",
            brazil: "Бразилия",
            kazakhstan: "Қазақстан",
            belarus: "Беларусь",
            andorra: "Андорра",
            "antigua and barbuda": "Антигуа және Барбуда",
            armenia: "Армения",
            argentina: "Аргентина",
            australia: "Аустралия",
            austria: "Аустрия",
            azerbaijan: "Әзірбайжан",
            bangladesh: "Бангладеш",
            bahamas: "Багам аралдары",
            bahrain: "Бахрейн",
            barbados: "Барбадос",
            belize: "Белиз",
            belgium: "Бельгия",
            benin: "Бенин",
            bulgaria: "Болгария",
            bolivia: "Боливия",
            botswana: "Ботсвана",
            "bosnia and herzegovina": "Босния және Герцеговина",
            butane: "Бутан",
            burundi: "Бурунди",
            brunei: "Бруней",
            "burkina faso": "Буркина-Фасо",
            vanuatu: "Вануату",
            "united kingdom": "Ұлыбритания",
            hungary: "Мажарстан",
            venezuela: "Венесуэла",
            vietnam: "Вьетнам",
            gabon: "Габон",
            gambia: "Гамбия",
            guinea: "Гвинея",
            "guinea bissau": "Гвинея-Бисау",
            honduras: "Гондурас",
            haiti: "Гаити",
            guatemala: "Гватемала",
            ghana: "Гана",
            grenada: "Гренада",
            denmark: "Дания",
            "democratic republic of the congo": "Конго Демократиялық Республикасы",
            dominica: "Доминика",
            "dominican republic": "Доминикан Республикасы",
            djibouti: "Джибути",
            "equatorial guinea": "Экваторлық Гвинея",
            eritrea: "Эритрея",
            estonia: "Эстония",
            ethiopia: "Эфиопия",
            egypt: "Мысыр",
            germany: "Германия",
            greece: "Грекия",
            georgia: "Грузия",
            zambia: "Замбия",
            israel: "Израиль",
            spain: "Испания",
            india: "Үндістан",
            indonesia: "Индонезия",
            jordan: "Иордания",
            iran: "Иран",
            ireland: "Ирландия",
            iceland: "Исландия",
            italy: "Италия",
            "cape verde": "Кабо-Верде",
            qatar: "Катар",
            Cameroon: "Камерун",
            kenya: "Кения",
            kiribati: "Кирибати",
            colombia: "Колумбия",
            "costa rica": "Коста-Рика",
            cuba: "Куба",
            "prc (people's republic of china)": "ҚХР (Қытай Халық Республикасы)",
            kyrgyzstan: "Қырғызстан",
            latvia: "Латвия",
            lesotho: "Лесото",
            libya: "Ливия",
            liberia: "Либерия",
            lebanon: "Ливан",
            lithuania: "Литва",
            liechtenstein: "Лихтенштейн",
            luxembourg: "Люксембург",
            mauritius: "Маврикий",
            mauritania: "Мавритания",
            madagascar: "Мадагаскар",
            macedonia: "Солтүстік Македония",
            mozambique: "Мозамбик",
            morocco: "Марокко",
            malawi: "Малави",
            malta: "Мальта",
            malaysia: "Малайзия",
            mali: "Мали",
            "marshall islands": "Маршал Аралдары",
            mexico: "Мексика",
            mongolia: "Моңғолия",
            moldova: "Молдова",
            monaco: "Монако",
            nauru: "Науру",
            nepal: "Непал",
            netherlands: "Нидерланд",
            niger: "Нигер",
            nigeria: "Нигерия",
            norway: "Норвегия",
            "new zealand": "Жаңа Зеландия",
            oman: "Оман",
            pakistan: "Пәкістан",
            palau: "Палау",
            paraguay: "Парагвай",
            peru: "Перу",
            poland: "Польша",
            portugal: "Португалия",
            rwanda: "Руанда",
            romania: "Румыния",
            "saint vincent and the grenadines": "Сент-Винсент және Гренадиндер",
            "saint kitts and nevis": "Сент-Китс және Невис",
            "saint lucia": "Сент-Люсия",
            "sao tome and principe": "Сан-Томе және Принсипи",
            salvador: "Сальвадор",
            samoa: "Самоа",
            "saudi arabia": "Сауд Арабиясы",
            swaziland: "Свазиленд",
            seychelles: "Сейшел Аралдары",
            senegal: "Сенегал",
            serbia: "Сербия",
            "solomon islands": "Соломон Аралдары",
            slovakia: "Словакия",
            slovenia: "Словения",
            somalia: "Сомали",
            montenegro: "Черногория",
            switzerland: "Швейцария",
            sweden: "Швеция",
            "sierra leone": "Сьерра-Леоне",
            suriname: "Суринам",
            tajikistan: "Тәжікстан",
            turkmenistan: "Түрікменстан",
            tanzania: "Танзания",
            thailand: "Тайланд",
            togo: "Того",
            tonga: "Тонга",
            "trinidad and tobago": "Тринидад және Тобаго",
            tuvalu: "Тувалу",
            tunisia: "Тунис",
            fiji: "Фиджи",
            philippines: "Филиппиндер",
            finland: "Финляндия",
            france: "Франция",
            chad: "Чад",
            "czech republic": "Чехія",
            chile: "Чилі",
            "south africa": "ОАР",
            croatia: "Хорватия",
            uruguay: "Уругвай",
            uzbekistan: "Өзбекстан",
            "sri lanka": "Шри-Ланка",
            jamaica: "Ямайка",
            japan: "Жапония"
        },
        azerbaijani: {
            ukraine: "Ukrayna",
            russia: "Rusiya",
            turkey: "Türkiyə",
            brazil: "Braziliya",
            kazakhstan: "Qazaxıstan",
            belarus: "Belarusiya",
            andorra: "Andorra",
            "antigua and barbuda": "Antigua and Barbuda",
            armenia: "Ermənistan",
            argentina: "Argentina",
            australia: "Avstraliya",
            austria: "Avstriya",
            azerbaijan: "Azərbaycan",
            bangladesh: "Banqladeş",
            bahamas: "Baham adaları",
            bahrain: "Bəxreyn",
            barbados: "Barbados",
            belize: "Beliz",
            belgium: "Belçika",
            benin: "Benin",
            bulgaria: "Bolqarıstan",
            bolivia: "Boliviya",
            botswana: "Botsvana",
            "bosnia and herzegovina": "Bosniya və Herseqovina",
            butane: "Butan",
            burundi: "Burundi",
            brunei: "Bruney",
            "burkina faso": "Burkina-Faso",
            vanuatu: "Vanuatu",
            "united kingdom": "Virciniya adaları (Böyük Britaniya)",
            hungary: "Macarıstan",
            venezuela: "Venesuela",
            vietnam: "Vyetnam",
            gabon: "Qabon",
            gambia: "Qambiya",
            guinea: "Qvineya",
            "guinea bissau": "Qvineya-Bisau",
            honduras: "Honduras",
            haiti: "Haiti",
            guatemala: "Qvatemala",
            ghana: "Qana",
            grenada: "Qrenada",
            denmark: "Danimarka",
            "democratic republic of the congo": "Konqo Demokratik Respublikası",
            dominica: "Dominika",
            "dominican republic": "Dominikan Respublikası",
            djibouti: "Cibuti",
            "equatorial guinea": "Ekvatorial Qvineya",
            eritrea: "Eritreya",
            estonia: "Estoniya",
            ethiopia: "Efiopiya",
            egypt: "Misir",
            germany: "Almaniya",
            greece: "Yunanıstan",
            georgia: "Gürcüstan",
            zambia: "Zambiya",
            israel: "İsrail",
            spain: "İspaniya",
            india: "Hindistan",
            indonesia: "İndoneziya",
            jordan: "İordaniya",
            iran: "İran",
            ireland: "İrlandiya",
            iceland: "İslandiya",
            italy: "İtaliya",
            "cape verde": "Kabo-Verde",
            qatar: "Qətər",
            Cameroon: "Kamerun",
            kenya: "Keniya",
            kiribati: "Kiribati",
            colombia: "Kolumbiya",
            "costa rica": "Kosta-Rika",
            cuba: "Kuba",
            "prc (people's republic of china)": "ÇXR (Çin Xalq Respublikası)",
            kyrgyzstan: "Qırğızıstan",
            latvia: "Latviya",
            lesotho: "Lesoto",
            libya: "Liviya",
            liberia: "Liberiy",
            lebanon: "Livan",
            lithuania: "Litva",
            liechtenstein: "Lixtenşteyn",
            luxembourg: "Lüksemburq",
            mauritius: "Mavrikiy",
            mauritania: "Mavritaniya",
            madagascar: "Madaqaskar",
            macedonia: "Şimali Makedoniya",
            mozambique: "Mozambik",
            morocco: "Marokko",
            malawi: "Malavi",
            malta: "Malta",
            malaysia: "Malayziya",
            mali: "Somali",
            "marshall islands": "Marşal adaları",
            mexico: "Meksika",
            mongolia: "Monqolustan",
            moldova: "Moldova",
            monaco: "Monako",
            nauru: "Nauru",
            nepal: "Nepal",
            netherlands: "Niderland",
            niger: "Niger",
            nigeria: "Nigeriya",
            norway: "Norveç",
            "new zealand": "Yeni Zelandiya",
            oman: "Oman",
            pakistan: "Pakistan",
            palau: "Palau",
            paraguay: "Paraqvay",
            peru: "Peru",
            poland: "Polşa",
            portugal: "Portuqaliya",
            rwanda: "Ruanda",
            romania: "Rumıniya",
            "saint vincent and the grenadines": "Sen-Vinsent və Qrenadin",
            "saint kitts and nevis": "Sent-Kits vı Nevis",
            "saint lucia": "Sent-Lüsiya",
            "sao tome and principe": "San-Tome və Prinsipi",
            salvador: "Salvador",
            samoa: "Samoa",
            "saudi arabia": "Səudiyyə Ərəbistanı",
            swaziland: "Esvatini",
            seychelles: "Seyşel adaları",
            senegal: "Sineqal",
            serbia: "Serbiya",
            "solomon islands": "Solomon Adaları",
            slovakia: "Slovakiya",
            slovenia: "Sloveniya",
            somalia: "Somali",
            montenegro: "Monteneqro",
            switzerland: "İsveçrə",
            sweden: "Bir daha fırlat",
            "sierra leone": "Syerra-Leone",
            suriname: "Surinam",
            tajikistan: "Tacikistan",
            turkmenistan: "Türkmənistan",
            tanzania: "Tanzaniya",
            thailand: "Tayland",
            togo: "Toqo",
            tonga: "Tonqa",
            "trinidad and tobago": "Trinidad və Tobaqo",
            tuvalu: "Tuvalu",
            tunisia: "Tunis",
            fiji: "Fici",
            philippines: "Filippin adaları",
            finland: "Finlandiya",
            france: "Fransa",
            chad: "Çad",
            "czech republic": "Çexiya",
            chile: "Çili",
            "south africa": "CAR",
            croatia: "Xorvatiya",
            uruguay: "Uruqvay",
            uzbekistan: "Özbəkistan",
            "sri lanka": "Şri-Lanka",
            jamaica: "Yamayka",
            japan: "Yaponiya"
        },
        uzbek: {
            uzbekistan: "O'zbekiston"
        },
        spanish: {
            ukraine: "Ucrania",
            russia: "Federación Rusa",
            turkey: "Turquía",
            brazil: "Brasil",
            kazakhstan: "Kazajstán",
            belarus: "Bielorrusia",
            andorra: "Andorra",
            "antigua and barbuda": "Antigua y Barbuda",
            armenia: "Armenia",
            argentina: "Argentina",
            australia: "Australia",
            austria: "Austria",
            azerbaijan: "Azerbaiyán",
            bangladesh: "Bangladesh",
            bahamas: "Las Bahamas",
            bahrain: "Bahréin",
            barbados: "Barbados",
            belize: "Belice",
            belgium: "Bélgica",
            benin: "Benin",
            bulgaria: "Bulgaria",
            bolivia: "Bolivia",
            botswana: "Botswana",
            "bosnia and herzegovina": "Bosnia y Herzegovina",
            butane: "Bután",
            burundi: "Burundi",
            brunei: "Brunéi",
            "burkina faso": "Burkina Faso",
            vanuatu: "Vanuatu",
            "united kingdom": "Gran Bretaña",
            hungary: "Hungría",
            venezuela: "Venezuela",
            vietnam: "Vietnam",
            gabon: "Gabón",
            gambia: "Gambia",
            guinea: "Guinea",
            "guinea bissau": "Guinea-Bisáu",
            honduras: "Honduras",
            haiti: "Haití",
            guatemala: "Guatemala",
            ghana: "Ghana",
            grenada: "Granada",
            denmark: "Dinamarca",
            "democratic republic of the congo": "República Democrática del Congo",
            dominica: "Dominica",
            "dominican republic": "República Dominicana",
            djibouti: "Djibouti",
            "equatorial guinea": "Guinea Ecuatorial",
            eritrea: "Eritrea",
            estonia: "Estonia",
            ethiopia: "Etiopía",
            egypt: "Egipto",
            germany: "Alemania",
            greece: "Grecia",
            georgia: "Georgia",
            zambia: "Zambia",
            israel: "Israel",
            spain: "España",
            india: "India",
            indonesia: "Indonesia",
            jordan: "Jordán",
            iran: "Irán",
            ireland: "Irlanda",
            iceland: "Islandia",
            italy: "Italia",
            "cape verde": "Cabo Verde",
            qatar: "Catar",
            Cameroon: "Camerún",
            kenya: "Kenia",
            kiribati: "Kiribati",
            colombia: "Columbia",
            "costa rica": "Costa Rica",
            cuba: "Cuba",
            "prc (people's republic of china)": "República Popular China",
            kyrgyzstan: "Kirguizstán",
            latvia: "Letonia",
            lesotho: "Lesoto",
            libya: "Libia",
            liberia: "Liberia",
            lebanon: "Líbano",
            lithuania: "Lituania",
            liechtenstein: "Liechtenstein",
            luxembourg: "Luxemburgo",
            mauritius: "Mauricio",
            mauritania: "Mauritania",
            madagascar: "Madagascar",
            macedonia: "Macedonia del Norte",
            mozambique: "Mozambique",
            morocco: "Marruecos",
            malawi: "Malawi",
            malta: "Malta",
            malaysia: "Malasia",
            mali: "Mali",
            "marshall islands": "República de las Islas Marshall",
            mexico: "México",
            mongolia: "Mongolia",
            moldova: "Moldavia",
            monaco: "Mónaco",
            nauru: "Nauru",
            nepal: "Nepal",
            netherlands: "Países Bajos",
            niger: "Níger",
            nigeria: "Nigeria",
            norway: "Noruega",
            "new zealand": "Nueva Zelanda",
            oman: "Omán",
            pakistan: "Pakistán",
            palau: "Palau",
            paraguay: "Paraguay",
            peru: "Perú",
            poland: "Polonia",
            portugal: "Portugal",
            rwanda: "Ruanda",
            romania: "Rumania",
            "saint vincent and the grenadines": "San Vicente y las Granadinas",
            "saint kitts and nevis": "San Cristóbal y Nieves",
            "saint lucia": "Santa Lucía",
            "sao tome and principe": "Santo Tomé y Príncipe",
            salvador: "El Salvador",
            samoa: "Samoa",
            "saudi arabia": "Arabia Saudita",
            swaziland: "Swazilandia",
            seychelles: "Seychelles",
            senegal: "Senegal",
            serbia: "Serbia",
            "solomon islands": "Islas Salomón",
            slovakia: "Eslovaquia",
            slovenia: "Eslovenia",
            somalia: "Somalia",
            montenegro: "Montenegro",
            switzerland: "Suiza",
            sweden: "Suecia",
            "sierra leone": "Sierra Leona",
            suriname: "Surinam",
            tajikistan: "Tayikistan",
            turkmenistan: "Turkmenistán",
            tanzania: "Tanzania",
            thailand: "Tailandia",
            togo: "Togo",
            tonga: "Tonga",
            "trinidad and tobago": "República de Trinidad y Tobago",
            tuvalu: "Tuvalu",
            tunisia: "Túnez",
            fiji: "Fiyi",
            philippines: "Filipinas",
            finland: "Finlandia",
            france: "Francia",
            chad: "Chad",
            "czech republic": "República Checa",
            chile: "Chile",
            "south africa": "Republica Sudafricana",
            croatia: "Croacia",
            uruguay: "Uruguay",
            uzbekistan: "Uzbekistán",
            "sri lanka": "Sri Lanka",
            jamaica: "Jamaica",
            japan: "Japón"
        }
    }
      , h = {
        ukraine: {
            mask: "+380",
            img: "img/country/ukraine.png"
        },
        russia: {
            mask: "+7",
            img: "img/country/russia.png"
        },
        turkey: {
            mask: "+90",
            img: "img/country/turkey.png"
        },
        brazil: {
            mask: "+55",
            img: "img/country/brazil.png"
        },
        kazakhstan: {
            mask: "+77",
            img: "img/country/kazakhstan.png"
        },
        belarus: {
            mask: "+375",
            img: "img/country/belarus.png"
        },
        andorra: {
            mask: "+376",
            img: "img/country/andorra.png"
        },
        "antigua and barbuda": {
            mask: "+268",
            img: "img/country/antigua-and-barbuda.png"
        },
        armenia: {
            mask: "+374",
            img: "img/country/armenia.png"
        },
        argentina: {
            mask: "+54",
            img: "img/country/argentina.png"
        },
        australia: {
            mask: "+61",
            img: "img/country/australia.png"
        },
        austria: {
            mask: "+43",
            img: "img/country/austria.png"
        },
        azerbaijan: {
            mask: "+994",
            img: "img/country/azerbaijan.png"
        },
        bangladesh: {
            mask: "+880",
            img: "img/country/bangladesh.png"
        },
        bahamas: {
            mask: "+242",
            img: "img/country/bahamas.png"
        },
        bahrain: {
            mask: "+973",
            img: "img/country/bahrain.png"
        },
        barbados: {
            mask: "+246",
            img: "img/country/barbados.png"
        },
        belize: {
            mask: "+501",
            img: "img/country/belize.png"
        },
        belgium: {
            mask: "+32",
            img: "img/country/belgium.png"
        },
        benin: {
            mask: "+229",
            img: "img/country/benin.png"
        },
        bulgaria: {
            mask: "+359",
            img: "img/country/bulgaria.png"
        },
        bolivia: {
            mask: "+591",
            img: "img/country/bolivia.png"
        },
        botswana: {
            mask: "+267",
            img: "img/country/botswana.png"
        },
        "bosnia and herzegovina": {
            mask: "+387",
            img: "img/country/bosnia-and-herzegovina.png"
        },
        butane: {
            mask: "+975",
            img: "img/country/bhutan.png"
        },
        burundi: {
            mask: "+257",
            img: "img/country/burundi.png"
        },
        brunei: {
            mask: "+673",
            img: "img/country/brunei.png"
        },
        "burkina faso": {
            mask: "+226",
            img: "img/country/burkina-faso.png"
        },
        vanuatu: {
            mask: "+678",
            img: "img/country/vanuatu.png"
        },
        "united kingdom": {
            mask: "+44",
            img: "img/country/great-britain.png"
        },
        hungary: {
            mask: "+36",
            img: "img/country/hungary.png"
        },
        venezuela: {
            mask: "+58",
            img: "img/country/venezuela.png"
        },
        vietnam: {
            mask: "+84",
            img: "img/country/vietnam.png"
        },
        gabon: {
            mask: "+241",
            img: "img/country/gabon.png"
        },
        gambia: {
            mask: "+220",
            img: "img/country/gambia.png"
        },
        guinea: {
            mask: "+224",
            img: "img/country/guinea.png"
        },
        "guinea bissau": {
            mask: "+245",
            img: "img/country/guinea-bissau.png"
        },
        honduras: {
            mask: "+504",
            img: "img/country/honduras.png"
        },
        haiti: {
            mask: "+509",
            img: "img/country/haiti.png"
        },
        guatemala: {
            mask: "+502",
            img: "img/country/guatemala.png"
        },
        ghana: {
            mask: "+233",
            img: "img/country/ghana.png"
        },
        grenada: {
            mask: "+473",
            img: "img/country/grenada.png"
        },
        denmark: {
            mask: "+45",
            img: "img/country/denmark.png"
        },
        "democratic republic of the congo": {
            mask: "+243",
            img: "img/country/congodr.png"
        },
        dominica: {
            mask: "+767",
            img: "img/country/dominica.png"
        },
        "dominican republic": {
            mask: "+809",
            img: "img/country/dominican-republic.png"
        },
        djibouti: {
            mask: "+253",
            img: "img/country/djibouti.png"
        },
        "equatorial guinea": {
            mask: "+240",
            img: "img/country/equatorial-guinea.png"
        },
        eritrea: {
            mask: "+291",
            img: "img/country/eritrea.png"
        },
        estonia: {
            mask: "+372",
            img: "img/country/estonia.png"
        },
        ethiopia: {
            mask: "+251",
            img: "img/country/ethiopia.png"
        },
        egypt: {
            mask: "+20",
            img: "img/country/egypt.png"
        },
        germany: {
            mask: "+49",
            img: "img/country/germany.png"
        },
        greece: {
            mask: "+30",
            img: "img/country/greece.png"
        },
        georgia: {
            mask: "+995",
            img: "img/country/georgia.png"
        },
        zambia: {
            mask: "+260",
            img: "img/country/zambia.png"
        },
        israel: {
            mask: "+972",
            img: "img/country/israel.png"
        },
        spain: {
            mask: "+34",
            img: "img/country/spain.png"
        },
        india: {
            mask: "+91",
            img: "img/country/india.png"
        },
        indonesia: {
            mask: "+62",
            img: "img/country/indonesia.png"
        },
        jordan: {
            mask: "+962",
            img: "img/country/jordan.png"
        },
        iran: {
            mask: "+98",
            img: "img/country/iran.png"
        },
        ireland: {
            mask: "+353",
            img: "img/country/ireland.png"
        },
        iceland: {
            mask: "+354",
            img: "img/country/iceland.png"
        },
        italy: {
            mask: "+39",
            img: "img/country/italy.png"
        },
        "cape verde": {
            mask: "+238",
            img: "img/country/cape-verde.png"
        },
        qatar: {
            mask: "+974",
            img: "img/country/quatar.png"
        },
        Cameroon: {
            mask: "+237",
            img: "img/country/cameroon.png"
        },
        kenya: {
            mask: "+254",
            img: "img/country/kenya.png"
        },
        kiribati: {
            mask: "+686",
            img: "img/country/kiribati.png"
        },
        colombia: {
            mask: "+57",
            img: "img/country/colombia.png"
        },
        "costa rica": {
            mask: "+506",
            img: "img/country/costa-rica.png"
        },
        cuba: {
            mask: "+53",
            img: "img/country/cuba.png"
        },
        "prc (people's republic of china)": {
            mask: "+86",
            img: "img/country/china.png"
        },
        kyrgyzstan: {
            mask: "+996",
            img: "img/country/kyrgyzstan.png"
        },
        latvia: {
            mask: "+371",
            img: "img/country/latvia.png"
        },
        lesotho: {
            mask: "+266",
            img: "img/country/lesotho.png"
        },
        libya: {
            mask: "+218",
            img: "img/country/libya.png"
        },
        liberia: {
            mask: "+231",
            img: "img/country/liberia.png"
        },
        lebanon: {
            mask: "+961",
            img: "img/country/lebanon.png"
        },
        lithuania: {
            mask: "+370",
            img: "img/country/lithuania.png"
        },
        liechtenstein: {
            mask: "+423",
            img: "img/country/liechtenstein.png"
        },
        luxembourg: {
            mask: "+352",
            img: "img/country/luxembourg.png"
        },
        mauritius: {
            mask: "+230",
            img: "img/country/mauritius.png"
        },
        mauritania: {
            mask: "+222",
            img: "img/country/mauritania.png"
        },
        madagascar: {
            mask: "+261",
            img: "img/country/madagascar.png"
        },
        macedonia: {
            mask: "+389",
            img: "img/country/macedonia.png"
        },
        mozambique: {
            mask: "+258",
            img: "img/country/mozambique.png"
        },
        morocco: {
            mask: "+212",
            img: "img/country/morocco.png"
        },
        malawi: {
            mask: "+265",
            img: "img/country/malawi.png"
        },
        malta: {
            mask: "+356",
            img: "img/country/malta.png"
        },
        malaysia: {
            mask: "+60",
            img: "img/country/malaysia.png"
        },
        mali: {
            mask: "+223",
            img: "img/country/mali.png"
        },
        "marshall islands": {
            mask: "+692",
            img: "img/country/marshall-islands.png"
        },
        mexico: {
            mask: "+52",
            img: "img/country/mexico.png"
        },
        mongolia: {
            mask: "+976",
            img: "img/country/mongolia.png"
        },
        moldova: {
            mask: "+373",
            img: "img/country/moldova.png"
        },
        monaco: {
            mask: "+377",
            img: "img/country/monaco.png"
        },
        nauru: {
            mask: "+674",
            img: "img/country/nauru.png"
        },
        nepal: {
            mask: "+977",
            img: "img/country/nepal.png"
        },
        netherlands: {
            mask: "+31",
            img: "img/country/netherlands.png"
        },
        niger: {
            mask: "+227",
            img: "img/country/niger.png"
        },
        nigeria: {
            mask: "+234",
            img: "img/country/nigeria.png"
        },
        norway: {
            mask: "+47",
            img: "img/country/norway.png"
        },
        "new zealand": {
            mask: "+64",
            img: "img/country/new-zealand.png"
        },
        oman: {
            mask: "+968",
            img: "img/country/oman.png"
        },
        pakistan: {
            mask: "+92",
            img: "img/country/pakistan.png"
        },
        palau: {
            mask: "+680",
            img: "img/country/palau.png"
        },
        paraguay: {
            mask: "+595",
            img: "img/country/paraguay.png"
        },
        peru: {
            mask: "+51",
            img: "img/country/peru.png"
        },
        poland: {
            mask: "+48",
            img: "img/country/poland.png"
        },
        portugal: {
            mask: "+351",
            img: "img/country/portugal.png"
        },
        rwanda: {
            mask: "+250",
            img: "img/country/rwanda.png"
        },
        romania: {
            mask: "+40",
            img: "img/country/romania.png"
        },
        "saint vincent and the grenadines": {
            mask: "+784",
            img: "img/country/saint-vincent-and-the-grenadines.png"
        },
        "saint kitts and nevis": {
            mask: "+869",
            img: "img/country/saint-kitts-and-nevis.png"
        },
        "saint lucia": {
            mask: "+758",
            img: "img/country/saint-lucia.png"
        },
        "sao tome and principe": {
            mask: "+239",
            img: "img/country/sao-tome-and-principe.png"
        },
        salvador: {
            mask: "+503",
            img: "img/country/salvador.png"
        },
        samoa: {
            mask: "+685",
            img: "img/country/samoa.png"
        },
        "saudi arabia": {
            mask: "+966",
            img: "img/country/saudi-arabia.png"
        },
        swaziland: {
            mask: "+268",
            img: "img/country/swaziland.png"
        },
        seychelles: {
            mask: "+248",
            img: "img/country/seychelles.png"
        },
        senegal: {
            mask: "+221",
            img: "img/country/senegal.png"
        },
        serbia: {
            mask: "+381",
            img: "img/country/serbia.png"
        },
        "solomon islands": {
            mask: "+677",
            img: "img/country/solomon-islands.png"
        },
        slovakia: {
            mask: "+421",
            img: "img/country/slovakia.png"
        },
        slovenia: {
            mask: "+386",
            img: "img/country/slovenia.png"
        },
        somalia: {
            mask: "+252",
            img: "img/country/somalia.png"
        },
        montenegro: {
            mask: "+382",
            img: "img/country/montenegro.png"
        },
        switzerland: {
            mask: "+41",
            img: "img/country/switzerland.png"
        },
        sweden: {
            mask: "+46",
            img: "img/country/sweden.png"
        },
        "sierra leone": {
            mask: "+232",
            img: "img/country/sierra-leone.png"
        },
        suriname: {
            mask: "+597",
            img: "img/country/suriname.png"
        },
        tajikistan: {
            mask: "+992",
            img: "img/country/tajikistan.png"
        },
        turkmenistan: {
            mask: "+993",
            img: "img/country/turkmenistan.png"
        },
        tanzania: {
            mask: "+255",
            img: "img/country/tanzania.png"
        },
        thailand: {
            mask: "+66",
            img: "img/country/thailand.png"
        },
        togo: {
            mask: "+228",
            img: "img/country/togo.png"
        },
        tonga: {
            mask: "+676",
            img: "img/country/tonga.png"
        },
        "trinidad and tobago": {
            mask: "+868",
            img: "img/country/trinidad-and-tobago.png"
        },
        tuvalu: {
            mask: "+688",
            img: "img/country/tuvalu.png"
        },
        tunisia: {
            mask: "+216",
            img: "img/country/tunisia.png"
        },
        fiji: {
            mask: "+679",
            img: "img/country/fiji.png"
        },
        philippines: {
            mask: "+63",
            img: "img/country/philippines.png"
        },
        finland: {
            mask: "+358",
            img: "img/country/finland.png"
        },
        france: {
            mask: "+33",
            img: "img/country/france.png"
        },
        chad: {
            mask: "+235",
            img: "img/country/chad.png"
        },
        "czech republic": {
            mask: "+420",
            img: "img/country/czechia.png"
        },
        chile: {
            mask: "+56",
            img: "img/country/chile.png"
        },
        "south africa": {
            mask: "+27",
            img: "img/country/republic-of-south-africa.png"
        },
        croatia: {
            mask: "+385",
            img: "img/country/croatia.png"
        },
        uruguay: {
            mask: "+598",
            img: "img/country/uruguay.png"
        },
        uzbekistan: {
            mask: "+998",
            img: "img/country/uzbekistan.png"
        },
        "sri lanka": {
            mask: "+94",
            img: "img/country/sri-lanka.png"
        },
        jamaica: {
            mask: "+876",
            img: "img/country/jamaica.png"
        },
        japan: {
            mask: "+81",
            img: "img/country/japan.png"
        }
    };
    function y(a) {
        switch (a) {
        case "+380":
            window.phonePattern = /^([0-9]{12})?(\+[0-9]{12})?$/i;
            break;
        case "+7":
            window.phonePattern = /^([0-9]{11})?(\+[0-9]{11})?$/i;
            break;
        case "+90":
            window.phonePattern = /^([0-9]{12})?(\+[0-9]{12})?$/i;
            break;
        case "+55":
        case "+351":
            window.phonePattern = /^([0-9]{12,13})?(\+[0-9]{12,13})?$/i;
            break;
        case "+994":
        case "+998":
            window.phonePattern = /^([0-9]{12})?(\+[0-9]{12})?$/i;
            break;
        case "+51":
            window.phonePattern = /^([0-9]{11})?(\+[0-9]{11})?$/i;
            break;
        case "+91":
            window.phonePattern = /^([0-9]{12})?(\+[0-9]{12})?$/i;
            break;
        case "+77":
            window.phonePattern = /^([0-9]{11})?(\+[0-9]{11})?$/i;
            break;
        default:
            window.phonePattern = /^([0-9]{9,13})?(\+[0-9]{9,13})?$/i
        }
    }
    var k, v = window.landingConfig.forms.phone.list, f = [], w = document.querySelector(".js--phoneInput");
    v.forEach((function(a) {
        var i = {
            country: p[window.landingConfig.forms.locale][a],
            mask: h[a].mask,
            img: h[a].img
        };
        f.push(i)
    }
    )),
    document.querySelector(".select-phone__placeholder-logo").src = f[0].img,
    document.querySelector(".select-phone__placeholder-input").value = f[0].mask;
    function _(a) {
        k = w.getAttribute("data-number").length + 1;
        for (var i = w.getAttribute("data-number"), n = !1, e = 0; e < a; e++)
            if (i += 0,
            window.phonePattern.test(Number(i)) || !1 !== n) {
                if (!window.phonePattern.test(Number(i + 1))) {
                    !0 === n && k++,
                    w.setAttribute("maxLength", "".concat(k));
                    break
                }
                n = !0,
                k++
            } else
                k++
    }
    function z(a, i) {
        if (a.selectionStart) {
            var n = a.selectionStart;
            a.value = a.value.slice(0, n) + i + a.value.slice(a.selectionEnd),
            a.selectionStart = a.selectionEnd = n + i.length
        } else if (void 0 !== document.selection) {
            var e = document.selection.createRange();
            e.text = i,
            e.collapse(!1),
            e.select()
        }
    }
    document.addEventListener("click", (function(a) {
        a.target.classList.contains("js--phone") && f.length > 1 && function(a) {
            var i = "true" === a.dataset.open
              , n = document.querySelector(".select-phone__placeholder-input");
            document.querySelector(".select-phone__list").style.display = "block";
            var e = a.querySelector(".select-phone__list");
            e.innerHTML = "",
            f.forEach((function(a) {
                var i = document.createElement("li");
                i.className = "select-phone__item",
                i.dataset.value = a.mask,
                i.dataset.srcs = a.img,
                i.innerHTML = '\n      <img class="select-phone__item-logo" src="'.concat(a.img, '">\n      <span class="select-phone__item-text">').concat(a.mask, " ").concat(a.country, "</span>\n    "),
                a.mask === n.value && i.classList.add("select-phone__item_active"),
                e.appendChild(i)
            }
            )),
            e.addEventListener("click", (function(i) {
                i.target.classList.contains("select-phone__item") && (a.querySelector(".select-phone__placeholder-logo").setAttribute("src", i.target.dataset.srcs),
                a.querySelector(".select-phone__placeholder-input").value = i.target.dataset.value,
                a.dataset.open = !1,
                document.querySelector(".select-phone__list").style.display = "none",
                y(i.target.dataset.value),
                w.setAttribute("data-number", "".concat(i.target.dataset.value)),
                w.focus())
            }
            )),
            a.querySelector(".select-phone__placeholder-input").addEventListener("focus", (function() {
                a.dataset.open = !1,
                document.querySelector(".select-phone__list").style.display = "none"
            }
            )),
            document.addEventListener("click", (function(i) {
                a.contains(i.target) || (a.dataset.open = !1,
                document.querySelector(".select-phone__list").style.display = "none")
            }
            )),
            a.dataset.open = !i
        }(a.target.parentElement.parentElement),
        setTimeout((function() {
            _(30)
        }
        ))
    }
    )),
    function() {
        function a(a, i) {
            i || (i = window.location.href),
            a = a.replace(/[\[\]]/g, "\\$&");
            var n = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)").exec(i);
            return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
        }
        document.getElementById("lang").value = a("lang"),
        document.getElementById("st").value = a("st"),
        document.getElementById("s1").value = a("s1"),
        document.getElementById("s2").value = a("s2"),
        document.getElementById("s3").value = a("s3"),
        document.getElementById("s4").value = a("s4"),
        document.getElementById("s5").value = a("s5"),
        document.getElementById("pc").value = a("pc"),
        document.getElementById("form_email").value = a("form_email"),
        document.getElementById("form_phone").value = a("form_phone"),
        console.log(a('form_email'));
        document.getElementById("form_key").value = a("form_key"),
        document.getElementById("e-lang").value = a("lang"),
        document.getElementById("e-st").value = a("st"),
        document.getElementById("e-s1").value = a("s1"),
        document.getElementById("e-s2").value = a("s2"),
        document.getElementById("e-s3").value = a("s3"),
        document.getElementById("e-s4").value = a("s4"),
        document.getElementById("e-s5").value = a("s5"),
        document.getElementById("e-pc").value = a("pc"),
        document.getElementById("e-form_email").value = a("form_email"),
        document.getElementById("e-form_phone").value = a("form_phone"),
        document.getElementById("e-form_key").value = a("form_key")
    }(),
    v.length <= 1 && document.querySelector(".select-phone").classList.add("no-list-phone"),
    w && (w.setAttribute("data-number", "".concat(w.value)),
    y(w.getAttribute("data-number")),
    setTimeout((function() {
        _(30)
    }
    ))),
    w.addEventListener("keypress", (function(a) {
        (a.keyCode < 48 || a.keyCode > 58) && (a.returnValue = !1)
    }
    )),
    w.addEventListener("input", (function() {
        var a = this.getAttribute("data-number");
        this.value = (a + this.value.slice(a.length)).replace(/[^+\d]/g, "")
    }
    )),
    w.addEventListener("paste", (function(a) {
        for (var i = (a.clipboardData || window.clipboardData).getData("text").split(" ").join(""), n = "", e = 0; e < i.length; e++)
            isNaN(+i[e]) || (n += i[e]);
        w.getAttribute("maxlength") - w.value.length < w.getAttribute("maxlength") && (n = n.substr(0, w.getAttribute("maxlength") - w.value.length)),
        i && w.getAttribute("maxlength") - w.value.length < w.getAttribute("maxlength") ? (a.preventDefault(),
        z(this, n)) : z(this, "")
    }
    ));
    n(1);
    var S = new Date((new Date).setFullYear((new Date).getFullYear() + 1)).toUTCString();
    function L(a) {
        if (!a)
            return "";
        var i = document.cookie.match(new RegExp("(?:^|; )" + a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return i ? decodeURIComponent(i[1]) : ""
    }
    function B() {
        document.cookie = "siteWasVisited=true; expires=" + S
    }
    function R(a, i) {
        if (!(a instanceof i))
            throw new TypeError("Cannot call a class as a function")
    }
    function E(a, i) {
        for (var n = 0; n < i.length; n++) {
            var e = i[n];
            e.enumerable = e.enumerable || !1,
            e.configurable = !0,
            "value"in e && (e.writable = !0),
            Object.defineProperty(a, e.key, e)
        }
    }
    function A(a, i, n) {
        return i && E(a.prototype, i),
        n && E(a, n),
        a
    }
    var T, q = window.landingConfig;
    window.links = {
        site: q.links[q.prodLink].site,
        phone: q.links[q.prodLink].phone,
        email: q.links[q.prodLink].email,
        terms: q.links[q.prodLink].terms
    },
    window.pageState = {
        warnings: {
            rules: q.forms.warning.rules,
            inputCorrectPhone: q.forms.warning.inputCorrectPhone,
            inputCorrectEmail: q.forms.warning.inputCorrectEmail,
            inputPassword: q.forms.warning.inputPassword,
            passwordShort: q.forms.warning.passwordShort,
            passwordLong: q.forms.warning.passwordLong
        }
    },
    T = q.oldCookieName,
    (L("siteWasVisited") || L(T)) && (window.location.href = window.links.site + window.location.search),
    y(document.querySelector(".js--phoneInput").value),
    new (function() {
        function a() {
            R(this, a),
            this._navs = {
                email: document.getElementById("reg-btn-email"),
                phone: document.getElementById("reg-btn-tel")
            },
            this._forms = {
                email: document.getElementById("email-form"),
                phone: document.getElementById("phone-form")
            },
            this._buttons = {
                email: this._forms.email.querySelector(".submit-btn"),
                phone: this._forms.phone.querySelector(".submit-btn")
            },
            this._inputs = {
                phone: this._forms.phone.querySelector(".js--phoneInput"),
                email: this._forms.email.querySelector(".email-form__email-input"),
                password: this._forms.email.querySelector(".email-form__password-input")
            },
            this._checkboxes = {
                phone: document.getElementById("check-rules-p"),
                email: document.getElementById("check-rules-e")
            },
            this._emailPattern = /^[a-zA-Z0-9_.-]{1,99}@{1}[a-zA-Z_-]{1,}\.{1}[A-Za-z]{2,4}$/i,
            this._initNavSwitchers(),
            this._initReg(),
            this._setClassActive()
        }
        return A(a, [{
            key: "_initNavSwitchers",
            value: function() {
                var a = this;
                this._navs.email.addEventListener("click", (function() {
                    a._switchForm("email")
                }
                )),
                this._navs.phone.addEventListener("click", (function() {
                    a._switchForm("phone")
                }
                ))
            }
        }, {
            key: "_classSwitcher",
            value: function(a) {
                "phone" === a ? (this._forms.email.classList.remove("active"),
                this._navs.email.classList.remove("active"),
                this._forms.phone.classList.add("active"),
                this._navs.phone.classList.add("active")) : "email" === a && (this._forms.email.classList.add("active"),
                this._navs.email.classList.add("active"),
                this._forms.phone.classList.remove("active"),
                this._navs.phone.classList.remove("active"))
            }
        }, {
            key: "_switchForm",
            value: function(a) {
                this._classSwitcher(a)
            }
        }, {
            key: "_setClassActive",
            value: function() {
                this._classSwitcher("phone")
            }
        }, {
            key: "_checkPhone",
            value: function() {
                return !!(window.phonePattern.test(this._inputs.phone.value) && this._inputs.phone.value.length > 3) || (window.formNotif.show(window.pageState.warnings.inputCorrectPhone),
                !1)
            }
        }, {
            key: "_checkRules",
            value: function(a) {
                return !!a.checked || (window.formNotif.show(window.pageState.warnings.rules),
                !1)
            }
        }, {
            key: "_checkEmail",
            value: function() {
                return !!this._emailPattern.test(this._inputs.email.value) || (window.formNotif.show(window.pageState.warnings.inputCorrectEmail),
                !1)
            }
        }, {
            key: "_checkPassword",
            value: function() {
                return this._inputs.password.value.length > 200 ? (this._inputs.password.focus(),
                window.formNotif.show(window.pageState.warnings.passwordLong),
                !1) : this._inputs.password.value.length < 6 ? (window.formNotif.show(window.pageState.warnings.passwordShort),
                this._inputs.password.focus(),
                !1) : !(this._inputs.password.value.length < 1) || void window.formNotif.show(window.pageState.warnings.inputPassword)
            }
        }, {
            key: "_submitForm",
            value: function(a) {
                B(),
                a.submit()
            }
        }, {
            key: "checkForm",
            value: function(a) {
                a === this._forms.phone ? this._checkPhone() && this._checkRules(this._checkboxes.phone) && this._submitForm(this._forms.phone) : a === this._forms.email && this._checkEmail() && this._checkPassword() && this._checkRules(this._checkboxes.email) && this._submitForm(this._forms.email)
            }
        }, {
            key: "_initReg",
            value: function() {
                var a = this;
                this._buttons.phone.addEventListener("click", (function() {
                    a.checkForm(a._forms.phone)
                }
                )),
                this._buttons.email.addEventListener("click", (function() {
                    a.checkForm(a._forms.email)
                }
                )),
                this._inputs.phone.addEventListener("keydown", (function(i) {
                    13 === i.which && a.checkForm(a._forms.phone)
                }
                )),
                this._inputs.email.addEventListener("keydown", (function(i) {
                    13 === i.which && a._inputs.password.focus()
                }
                )),
                this._inputs.password.addEventListener("keydown", (function(i) {
                    13 === i.which && a.checkForm(a._forms.email)
                }
                ))
            }
        }]),
        a
    }()),
    new (function() {
        function a() {
            R(this, a),
            this._siteLink = window.links.site,
            this._siteTermsLink = window.links.terms,
            this._hash = window.location.search,
            this._reddirectLinks = document.querySelectorAll(".redirectlink"),
            this._reddirectLinksTerms = document.querySelectorAll(".redirectlinkTerms"),
            this._formEmail = document.getElementById("email-form"),
            this._formPhone = document.getElementById("phone-form"),
            this._initLiks(),
            this._initForms()
        }
        return A(a, [{
            key: "_initLiks",
            value: function() {
                for (var a = 0; a < this._reddirectLinks.length; a++)
                    this._reddirectLinks[a].addEventListener("click", (function() {
                        B()
                    }
                    )),
                    this._reddirectLinks[a].href = this._siteLink + this._hash;
                for (var i = 0; i < this._reddirectLinksTerms.length; i++)
                    this._reddirectLinksTerms[i].addEventListener("click", (function() {
                        B()
                    }
                    )),
                    this._reddirectLinksTerms[i].href = this._siteTermsLink + this._hash
            }
        }, {
            key: "_initForms",
            value: function() {
                this._formEmail.action = window.links.email + this._hash,
                this._formPhone.action = window.links.phone + this._hash
            }
        }]),
        a
    }());
    n(2)
}
, function(a, i) {}
]);
