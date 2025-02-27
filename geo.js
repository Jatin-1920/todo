const geoData = [
    {
        ques: "Brightest star in orion constellation",
        bop: "proxima",
        ans: "rigel",
        aop: "sirius(dog star)",
        cop: "hydra",
    },
    {
        ques: "Brightest star in night sky",
        bop: "proxima",
        ans: "sirius dog star",
        aop: "rigel",
        cop: "hydra",
    },
    {
        ques: "closest star to sun",
        bop: "rigel",
        ans: "proxima centuri",
        aop: "sirius(dog star)",
        cop: "hydra",
    },
    {
        ques: "who carries 99% mass of our solar system",
        bop: "earth",
        ans: "sun",
        aop: "saturn",
        cop: "jupiter",
    },
    {
        ques: "sun temperature at surface",
        bop: "5600k/5800c",
        ans: "5800k/5600c",
        aop: "4000k/4000c",
        cop: "6000k/5600c",
    },
    {
        ques: "sun temperature at center",
        bop: "15m k",
        ans: "15.7m k",
        aop: "16.5m k",
        cop: "15.4m k",
    },
    {
        ques: "outer layer of sun",
        bop: "cerena",
        ans: "corona",
        aop: "heli",
        cop: "hydra",
    },
    {
        ques: "sun is how many times bigger than earth",
        bop: "105",
        ans: "109",
        aop: "110",
        cop: "103",
    },
    {
        ques: "in how much time moon light comes to earth",
        bop: "1.75 sec",
        ans: "1.26 sec",
        aop: "1 sec",
        cop: "2 sec",
    },
    {
        ques: "radii of moon",
        bop: "1.724 * 10^6",
        ans: "1.74 * 10^6",
        aop: "1.5 * 10^5",
        cop: "1.4 * 10^6",
    },
    {
        ques: "who give nebula theory ",
        bop: "immaeul john",
        ans: "immaeul kant",
        aop: "einstien",
        cop: "william herschel",
    },
    {
        ques: "when nebula theory given by immauel kant",
        bop: "1756",
        ans: "1755",
        aop: "1754",
        cop: "1752",
    },
    {
        ques: "when nebula theory modified by laplace",
        bop: "1756",
        ans: "1796",
        aop: "1754",
        cop: "1752",
    },
    {
        ques: "diameter of mercury in km",
        bop: "4800",
        ans: "4900",
        aop: "5000",
        cop: "4500",
    },
    {
        ques: "in how many days mercury complete its revolution",
        bop: "87",
        ans: "88",
        aop: "90",
        cop: "85",
    },
    {
        ques: "which planet rotate clockwise",
        bop: "uranus",
        ans: "both venus or uranus",
        aop: "venus",
        cop: "neptune",
    },
    {
        ques: "which planet is denser in our solar system",
        bop: "uranus",
        ans: "earth",
        aop: "jupiter",
        cop: "saturn",
    },
    {
        ques: "which planet have largest mountain or volcano",
        bop: "uranus",
        ans: "mars",
        aop: "venus",
        cop: "neptune",
    },
    {
        ques: "what is name of largest mountain of our solar system",
        bop: "Mt everest",
        ans: "olympus mons",
        aop: "k2",
        cop: "godwin austin",
    },
    {
        ques: "which planet have shortest rotation in our solar system",
        bop: "uranus",
        ans: "jupiter",
        aop: "earth",
        cop: "saturn",
    },
    {
        ques: "in how much time jupiter complete its rotation",
        bop: "8 hr",
        ans: "10 hr",
        aop: "9 hr",
        cop: "6 hr",
    },
    {
        ques: "who discovered lo,europa,ganymede,callisto",
        bop: "huygens",
        ans: "galileo",
        aop: "cassini",
        cop: "none of these",
    },
    {
        ques: "largest satellite of our solar system",
        bop: "phebos",
        ans: "ganymede",
        aop: "deimos",
        cop: "titan",
    },
    {
        ques: "which planet is least denser",
        bop: "uranus",
        ans: "saturn",
        aop: "earth",
        cop: "jupiter",
    },
    {
        ques: "who saturn ring",
        bop: "laplace",
        ans: "huygenes",
        aop: "cassini",
        cop: "galileo",
    },
    {
        ques: "when saturn ring discovered",
        bop: "1654",
        ans: "1655",
        aop: "1674",
        cop: "1665",
    },
    {
        ques: "who discover saturn ring division",
        bop: "laplace",
        ans: "cassini",
        aop: "huygenes",
        cop: "galileo",
    },
    {
        ques: "when saturn ring division discovered",
        bop: "1654",
        ans: "1675",
        aop: "1655",
        cop: "1665",
    },
    {
        ques: "when uranus discovered",
        bop: "1761",
        ans: "1781",
        aop: "1756",
        cop: "1754",
    },
    {
        ques: "who discover uranus",
        bop: "laplace",
        ans: "william herscel",
        aop: "huygenes",
        cop: "galileo",
    },
    {
        ques: "at how much degree uranus is tilted",
        bop: "100",
        ans: "98",
        aop: "99",
        cop: "97",
    },
    {
        ques: "which planet is known as rolling or loopside planet",
        bop: "venus",
        ans: "uranus",
        aop: "neptune",
        cop: "earth",
    },
    {
        ques: "when neptune discovered",
        bop: "1761",
        ans: "1846",
        aop: "1856",
        cop: "1854",
    },
    {
        ques: "who discover neptune",
        bop: "william  herscel",
        ans: "urban or galle",
        aop: "huygenes",
        cop: "galileo",
    },
    {
        ques: "which planet found by mathematical prediction",
        bop: "venus",
        ans: "neptune",
        aop: "uranus",
        cop: "earth",
    },
    {
        ques: " belt name between mars or jupiter",
        bop: "jovian",
        ans: "asteroid",
        aop: "rock",
        cop: "terrestial",
    },
    {
        ques: " belt name between neptune or pluto",
        bop: "jovian",
        ans: "kuiper",
        aop: "asteroid",
        cop: "terrestial",
    },
    {
        ques: " at what degree international date line is or zig zag line",
        bop: "181 deg",
        ans: "180 deg",
        aop: "175 deg",
        cop: "170 deg",
    },
    {
        ques: " total longitude",
        bop: "180",
        ans: "360",
        aop: "181",
        cop: "190",
    },
    {
        ques: " total latitude",
        bop: "181",
        ans: "180",
        aop: "360",
        cop: "190",
    },
    {
        ques: " 1 deg latitude",
        bop: "110 km",
        ans: "111 km",
        aop: "112 km",
        cop: "109 km",
    },
    {
        ques: "max distance of longitude",
        bop: "111 km",
        ans: "111.32 km",
        aop: "109 km",
        cop: "110 km",
    },
    {
        ques: "crust made up of what",
        bop: "silica or nickle",
        ans: "silica or aluminium",
        aop: "nickle or iron",
        cop: "silica or magnesium",
    },
    {
        ques: "mantle made up of what",
        bop: "silica or nickle",
        ans: "silica or magnesium",
        aop: "nickle or iron",
        cop: "silica or aluminium",
    },
    {
        ques: "mantle made up of what",
        bop: "silica or nickle",
        ans: "nickle or iron",
        aop: "silica or magnesium",
        cop: "silica or aluminium",
    },
    {
        ques: "thickness of crust",
        bop: "5-65 km",
        ans: "5-70 km",
        aop: "6-50 km",
        cop: "7-80 km",
    },
    {
        ques: "thickness of crust continental",
        bop: "25 km denser/lighter",
        ans: "30 km thicker/lighter",
        aop: "35 km denser/thicker",
        cop: "20 km lighter/denser",
    },
    {
        ques: "thickness of crust oceanic",
        bop: "11 km denser/lighter",
        ans: "5 km thick/denser",
        aop: "6 km denser/thicker",
        cop: "8 km lighter/denser",
    },
    {
        ques: "thickness of mantle",
        bop: "2200 km",
        ans: "2900 km",
        aop: "3000 km",
        cop: "2300 km",
    },
    {
        ques: "thickness of inner core",
        bop: "2400 km",
        ans: "2200 km",
        aop: "3000 km",
        cop: "2300 km",
    },
    {
        ques: "thickness of outer core",
        bop: "2300 km",
        ans: "1300 km",
        aop: "1400 km",
        cop: "2300 km",
    },
    {
        ques: "total major plates",
        bop: "4",
        ans: "7",
        aop: "8",
        cop: "9",
    },
    {
        ques: "thickness of lithosphere",
        bop: "4-100km",
        ans: "10-200km",
        aop: "5-100km",
        cop: "10-100km",
    },
    {
        ques: "in which form sedimentary rock are found ",
        bop: "layer ",
        ans: "layer or strata",
        aop: "strata",
        cop: "sediments",
    },
    {
        ques: "minor relief feature",
        bop: "attoll",
        ans: "all of these",
        aop: "guyot",
        cop: "sea mount",
    },
    {
        ques: "where pertroleum  is extracted",
        bop: "continental slope",
        ans: "continental shelf",
        aop: "submarine canyon",
        cop: "continental rise",
    },
    {
        ques: "longest or largest landform on earth",
        bop: "ridge",
        ans: "mid atlantic ridge",
        aop: "continental ridge",
        cop: "none of these",
    },
    {
        ques: "how mid atlantic ridge is formed",
        bop: "convergent plate boundary",
        ans: "divergent plate boundary",
        aop: "submerge plate boundary",
        cop: "none of these",
    },
    {
        ques: "who give sea floor spreading theory",
        bop: "alfred wegner",
        ans: "henry h hess",
        aop: "tansley",
        cop: "none of these",
    },
    {
        ques: "when sea floor spreading theory is given",
        bop: "1952",
        ans: "1962",
        aop: "1965",
        cop: "1956",
    },
    {
        ques: "when continental theory is given",
        bop: "1952",
        ans: "1912",
        aop: "1965",
        cop: "1956",
    },
    {
        ques: "who give continental drift theory",
        bop: "henry h hess",
        ans: "alfred wegner",
        aop: "tansley",
        cop: "none of these",
    },
    {
        ques: "evidence of continental drift",
        bop: "jig saw fit",
        ans: "all of these",
        aop: "fossil deposits",
        cop: "placer deposits",
    },
    {
        ques: "which reason of continental drift",
        bop: "convection cell",
        ans: "all of these",
        aop: "tidal force",
        cop: "polar fleeing force",
    },
    {
        ques: "most vicious lava",
        bop: "cinder",
        ans: "composite",
        aop: "shield",
        cop: "caldera",
    },
    {
        ques: "low vicious lava",
        bop: "cinder",
        ans: "shield",
        aop: "composite",
        cop: "caldera",
    },
    {
        ques: "most explosive lava",
        bop: "cinder",
        ans: "caldera",
        aop: "shield",
        cop: "composite",
    },
    {
        ques: "where weather phenonmenon happen",
        bop: "stratosphere",
        ans: "troposphere",
        aop: "mesosphere",
        cop: "thermosphere",
    },
    {
        ques: "troposphere height at poles",
        bop: "18km",
        ans: "8km",
        aop: "13 km",
        cop: "10km",
    },
    {
        ques: "troposphere height at equator",
        bop: "8km",
        ans: "18km",
        aop: "13 km",
        cop: "10km",
    },
    {
        ques: "lapse rate in 165m how much degree fall",
        bop: "1.2",
        ans: "1",
        aop: "2",
        cop: "1.25",
    },
    {
        ques: "lapse rate in 1kmm how much degree fall",
        bop: "5.2",
        ans: "6.5",
        aop: "6",
        cop: "5.5",
    },
    {
        ques: "vertical transfer of heat is known as",
        bop: "convection",
        ans: "conduction",
        aop: "advection",
        cop: "insulation",
    },
    {
        ques: "horizontal transfer of heat is known as",
        bop: "convection",
        ans: "advection",
        aop: "convection",
        cop: "insulation",
    },
    {
        ques: "in which layer jet fly",
        bop: "troposphere",
        ans: "stratosphere",
        aop: "mesosphere",
        cop: "thermosphere",
    },
    {
        ques: "ozone layer is seen in which area",
        bop: "30-32 km",
        ans: "30-35 km",
        aop: "40km",
        cop: "50 km",
    },
    {
        ques: "coldest layer of atmosphere",
        bop: "troposphere",
        ans: "mesosphere",
        aop: "stratosphere",
        cop: "thermosphere",
    },
    {
        ques: "hottest layer of atmosphere",
        bop: "troposphere",
        ans: "thermosphere",
        aop: "stratosphere",
        cop: "mesosphere",
    },
    {
        ques: "boundary b/w earth atmosphere or exosphere is known as",
        bop: "terrestial, 100km",
        ans: "karman,100km",
        aop: "isotherm,150km",
        cop: "tharman,50 km",
    },
    {
        ques: "how much is fresh water",
        bop: "2.4% ",
        ans: "2.8%",
        aop: "3%",
        cop: "4%",
    },
    {
        ques: "total fresh water in ground",
        bop: ".65% ",
        ans: ".68%",
        aop: "2.2%",
        cop: "4%",
    },
    {
        ques: "total fresh water in lake",
        bop: ".65% ",
        ans: ".4%",
        aop: ".68%",
        cop: "4%",
    },
    {
        ques: "low level cloud",
        bop: "cumulus ",
        ans: "nimbus or stratus",
        aop: "cirrus or nimbus",
        cop: "nimbus",
    },
    {
        ques: "high level cloud",
        bop: "cumulus ",
        aop: "cumulus or stratus",
        ans: "cirrus or cumulus",
        cop: "nimbus",
    },
    {
        ques: "what is true about nimbus",
        bop: "dark/black ",
        ans: "all of these",
        aop: "rain bearing",
        cop: "opaque to sunlight",
    },
    {
        ques: "what is true about cumulus",
        bop: "flat base wool shaped",
        ans: "all of these",
        aop: "no rain",
        cop: "4000-7000m",
    },
    {
        ques: "what is true cirrus",
        bop: "high altitude cloud",
        ans: "all of these",
        aop: "does not rain",
        cop: "feathery appearance",
    },
    {
        ques: "endogenic forms energy",
        bop: "radioactive decay",
        ans: "both radioactive or premodial heat",
        aop: "premodial heat",
        cop: "denudation",
    },
    {
        ques: "endogenic force collectively is known as",
        bop: "denudation",
        ans: "diastrophism",
        aop: "in situ",
        cop: "gradation",
    },
    {
        ques: "exogenic force collectively is known as",
        ans: "denudation",
        bop: "diastrophism",
        aop: "in situ",
        cop: "gradation",
    },
    {
        ques: "weathering is known as",
        ans: "denudation",
        bop: "in situ process",
        aop: "denudation",
        cop: "gradation",
    },
    {
        ques: "where wind is relatively calm or corrilois force is zero",
        bop: "horse latitude",
        ans: "doldrum zone",
        aop: "sub tropical high",
        cop: "poles",
    },
    {
        ques: "where corrilois force is max",
        ans: "doldrum zone",
        bop: "poles",
        aop: "equator",
        cop: "polar high",
    },
    {
        ques: "where corrilois force is zero",
        ans: "doldrum zone",
        bop: "equator",
        aop: "poles",
        cop: "polar high",
    },
    {
        ques: "corrilois force direction northern hemisphere",
        ans: "right",
        bop: "left",
        aop: "left or right",
        cop: "none of these",
    },
    {
        ques: "corrilois force direction southern hemisphere",
        ans: "left",
        bop: "right",
        aop: "left or right",
        cop: "none of these",
    },
    {
        ques: "hills of satpura",
        bop: "rajpeepla",
        ans: "all of these",
        aop: "mahadeo",
        cop: "maikal",
    },
    {
        ques: "highest peak of satpura",
        bop: "rajpeepla",
        ans: "dhupgarh",
        aop: "sadbhavna(peak of goodwills)",
        cop: "maikal",
    },
    {
        ques: "hill station of satpura",
        bop: "rajpeepla",
        ans: "panchmadi",
        aop: "sadbhavna(peak of goodwills)",
        cop: "maikal",
    },
    {
        ques: "highest peak of vindhaya",
        aop: "rajpeepla",
        bop: "panchmadi",
        ans: "sadbhavna(peak of goodwills)",
        cop: "maikal",
    },
    {
        ques: "highest peak of chota nagpur",
        aop: "rajpeepla",
        ans: "parsvanath",
        bop: "sadbhavna(peak of goodwills)",
        cop: "maikal",
    },

    {
        ques: "hills of chota nagpur",
        bop: "koderma",
        ans: "all of these",
        aop: "ranchi",
        cop: "hazaribagh",
    },
    {
        ques: "jadugada mines famour for",
        bop: "platinum",
        ans: "uranium",
        aop: "silver",
        cop: "coal",
    },
    {
        ques: "other name of chota nagpur",
        aop: "mineral",
        bop: "jadugada",
        ans: "ruhr",
        cop: "maikal",
    },
    {
        ques: "river flow in chota nagpur",
        aop: "shyok",
        bop: "ken",
        ans: "damodar",
        cop: "ganga",
    },
    {
        ques: "malda fault or gap seprate from",
        aop: "karbi anglong",
        bop: "meghalaya plateau",
        ans: "all of these",
        cop: "north chachar plateau",
    },
    {
        ques: "central highland plateau",
        aop: "malwa",
        bop: "deccan",
        ans: "malwa or chota nagpur",
        cop: "deccan or chota nagpur",
    },
    {
        ques: "name of trans himalayas range",
        aop: "karakoram",
        bop: "ladakh",
        ans: "all of these",
        cop: "zanskar",
    },
    {
        ques: "which river flow into karakoram and ladakh",
        aop: "indus",
        bop: "sutlej",
        ans: "shyok",
        cop: "brahamputra",
    },
    {
        ques: "which river flow into zanskar and ladakh",
        aop: "shyok",
        bop: "sutlej",
        ans: "indus",
        cop: "brahamputra",
    },
    {
        ques: "great himalyas other name",
        aop: "himadri",
        bop: "inner himalayas",
        ans: "both himadri and inner himalayas",
        cop: "none of these",
    },
    {
        ques: "great himalyas western most point",
        aop: "namcha barwa",
        bop: "sagarmatha",
        ans: "nanga parvat",
        cop: "dhaulagiri",
    },
    {
        ques: "great himalyas eastern most point",
        aop: "nanga parvat",
        bop: "sagarmatha",
        ans: "nambcha barwa",
        cop: "dhaulagiri",
    },
    {
        ques: "great himalyas avg. height",
        aop: "5500 m",
        bop: "5000 m",
        ans: "6000 m",
        cop: "6500 m",
    },
    {
        ques: "mt everest height",
        aop: "8852 m",
        bop: "8865 m",
        ans: "8848 m",
        cop: "8851 m",
    },
    {
        ques: "mt kanchenjunga height",
        aop: "8698 m",
        bop: "8788 m",
        ans: "8598 m",
        cop: "8600 m",
    },
    {
        ques: "nepal peaks",
        aop: "annapurna",
        bop: "dhualagiri",
        ans: "mt makalu, annapurna, dhaulagiri",
        cop: "both annapurna dhualagiri",
    },
    {
        ques: "middle himalyas other name",
        aop: "himachal",
        bop: "lesser himalayas",
        ans: "both himachal and lesser himalayas",
        cop: "none of these",
    },
    {
        ques: "middle/lesser himalyas avg. height",
        aop: "5500 m",
        bop: "5000 m",
        ans: "4000 m",
        cop: "6500 m",
    },
    {
        ques: "middle himalyas name in jammu and kashmir",
        aop: "dhualadhar",
        bop: "mahabharat range",
        ans: "pirpanjal",
        cop: "nagatibba",
    },
    {
        ques: "middle himalyas name in uttrakhand",
        aop: "dhualadhar",
        bop: "mahabharat range",
        ans: "nagatibba",
        cop: "pir panjal",
    },
    {
        ques: "middle himalyas name in nepal",
        aop: "dhualadhar",
        bop: "pir panjal",
        ans: "mahabharat range",
        cop: "nagatibba",
    },
    {
        ques: "middle himalyas name in himachal",
        aop: "pir panjal",
        bop: "mahabharat range",
        ans: "dhualadhar",
        cop: "nagatibba",
    },
    {
        ques: "kashmir valley is situated between",
        aop: "lesser himalayas or trans himalayas",
        bop: "greater himalyas or trans himalayas",
        ans: "lesser himalayas or greater himalayas",
        cop: "none of these",
    },
    {
        ques: "other name of shiwalik",
        aop: "lesser himalayas",
        bop: "greater himalayas",
        ans: "churiya hills",
        cop: "trans himalayas",
    },
    {
        ques: "avg height of shiwalik ",
        aop: "1200 m",
        bop: "1500 m",
        ans: "1000 m",
        cop: "2000 m",
    },
    {
        ques: "which passes join mumbai to thane",
        aop: "thalghat ",
        bop: "palghat",
        ans: "bhorghat",
        cop: "pulikat",
    },
    {
        ques: "which passes join mumbai to nasik",
        aop: "bhorghat ",
        bop: "palghat",
        ans: "thalghat",
        cop: "pulikat",
    },
    {
        ques: "which passes join annamalai to nilgiri",
        aop: "bhorghat ",
        bop: "thalghat",
        ans: "palghat",
        cop: "pulikat",
    },
    {
        ques: "lakshadweep total islands",
        aop: "32",
        bop: "35",
        ans: "36",
        cop: "38",
    },
    {
        ques: "andaman nicobar  total islands",
        aop: "532",
        bop: "475",
        ans: "572",
        cop: "538",
    },
    {
        ques: "lakshadweep largest islands",
        aop: "great nicobar",
        bop: "andaman",
        ans: "andrott",
        cop: "car nicobar",
    },
    {
        ques: "andaman largest islands",
        aop: "little nicobar",
        bop: "andaman",
        ans: "great nicobar",
        cop: "car nicobar",
    },
    {
        ques: "andaman great peak saddle peak situated in",
        aop: "middle andaman",
        bop: "south andaman",
        ans: "north andaman",
        cop: "car nicobar",
    },
    {
        ques: "narcondam volcano situated in between",
        aop: "middle andaman",
        bop: "south andaman or middle andaman",
        ans: "north andaman or middle andaman",
        cop: "car nicobar",
    },
    {
        ques: "barren volcano situated in between",
        aop: "middle andaman",
        ans: "south andaman or middle andaman",
        bop: "north andaman or middle andaman",
        cop: "car nicobar",
    },
    {
        ques: "port blair is situated in",
        aop: "middle andaman",
        bop: "south andaman or middle andaman",
        ans: "south andaman",
        cop: "car nicobar",
    },
    {
        ques: "which is dormant volcano",
        aop: "barren",
        bop: "kayob",
        ans: "narcondam",
        cop: "thullier",
    },
    {
        ques: "which is active volcano",
        aop: "narcondam",
        bop: "kayob",
        ans: "barren",
        cop: "thullier",
    },
    {
        ques: "by which passage south andaman is separated by little andaman ",
        aop: "10 degree",
        bop: "9 degree",
        ans: "duncan",
        cop: "none of these",
    },
    {
        ques: "by which passage/channel andaman and nicobar is separated ",
        aop: "duncan",
        bop: "9 degree",
        ans: "10 degree",
        cop: "none of these",
    },
    {
        ques: "second highes peak of andaman and nicobar or where is situated",
        aop: "mount thullier, middle andaman",
        bop: "car nicobar, saddle peak",
        ans: "great nicobar, mount thullier",
        cop: "mount kayob, north andaman",
    },
    {
        ques: "ancient name of jhelum",
        aop: "aksini",
        bop: "bipasha",
        ans: "vitasta",
        cop: "shuthudri",
    },
    {
        ques: "ancient name of chenab",
        aop: "vitasta",
        bop: "bipasha",
        ans: "aksini",
        cop: "shuthudri",
    },
    {
        ques: "ancient name of ravi",
        aop: "aksini",
        bop: "bipasha",
        ans: "purushni",
        cop: "shuthudri",
    },
    {
        ques: "ancient name of beas",
        aop: "aksini",
        bop: "purushni",
        ans: "bipasha",
        cop: "shuthudri",
    },
    {
        ques: "ancient name of sutlej",
        aop: "aksini",
        bop: "bipasha",
        ans: "shuthudri",
        cop: "vitasta",
    },
    {
        ques: "right bank tributaries of indus",
        aop: "hunzo,gilgit",
        bop: "bipasha,vitasta,shuthudri",
        ans: "shyok,gilgit,hunzo",
        cop: "shuthudri",
    },
    {
        ques: "from where indus river originate",
        aop: "singhi khamban",
        bop: "yarlong tsangpo",
        ans: "bokhar chu",
        cop: "gomukh",
    },
    {
        ques: "tibet name of indus river",
        aop: "siang / dibang",
        bop: "yarlong tsangpo",
        ans: "singhi khamban",
        cop: "gomukh",
    },
    {
        ques: "total length of indus river",
        aop: "2800 km",
        bop: "2900 km",
        ans: "2880 km",
        cop: "2700 km",
    },
    {
        ques: "total length of indus in india",
        aop: "1344 km",
        bop: "1240 km",
        ans: "1114 km",
        cop: "1200 km",
    },
    {
        ques: "singhi khamban meaning",
        aop: "horse mouth",
        bop: "tiger mouth",
        ans: "lion mouth",
        cop: "river of unfortunate",
    },

    {
        ques: "origin of bharamputra river",
        aop: "siang / dihang",
        bop: "bokhar chu",
        ans: "yarlong tsangpo",
        cop: "gomukh",
    },
    {
        ques: "on which river largest riverine island is situated",
        aop: "shyok",
        bop: "indus",
        ans: "bharamputra",
        cop: "son",
    },
    {
        ques: "origin glacier of bharamputra river",
        aop: "siang / dihang",
        bop: "bokhar chu",
        ans: "chemayungdung/angisi",
        cop: "yarlong tsangpo",
    },
    {
        ques: "left bank tributaries of bharamputra river",
        aop: "lohit , testa",
        bop: "dibang,kameng",
        ans: "lohit, dhansiri",
        cop: "manas,testa,subansiri",
    },
    {
        ques: "pre monsoon shower are",
        aop: "nor westers",
        bop: "blossom shower",
        ans: "both nor westers, blossom shower",
        cop: "mango shower",
    },
    {
        ques: "nor westers name in bengal ",
        aop: "bardoli cheerha",
        bop: "coffee shower",
        ans: "kal baishakh",
        cop: "mango shower",
    },
    {
        ques: "nor westers name in assam",
        aop: "kal baishakh",
        bop: "coffee shower",
        ans: "bardoli cheerha",
        cop: "mango shower",
    },
    {
        ques: "blossom shower seen in ",
        aop: "assam",
        bop: "assam,west bengal",
        ans: "kerala,karnatka",
        cop: "west bengal",
    },
    {
        ques: "mango shower seen in ",
        aop: "assam",
        bop: "assam,west bengal",
        ans: "kerala",
        cop: "west bengal",
    },
    {
        ques: "el nino meaning",
        aop: "small boy",
        bop: "small girl",
        ans: "christ/small boy",
        cop: "bad boy",
    },
    {
        ques: "la nino meaning",
        aop: "small boy",
        bop: "christ",
        ans: "small girl",
        cop: "bad boy",
    },
    {
        ques: "el nino tahiti darwin difference",
        aop: "+ve",
        bop: "neutral",
        ans: "-ve",
        cop: "0",
    },
    {
        ques: "la nino tahiti darwin difference",
        aop: "-ve",
        bop: "neutral",
        ans: "+ve",
        cop: "0",
    },
    {
        ques: "which are layered forest",
        aop: "tropical deciduous",
        bop: "coniferous",
        ans: "evergreen",
        cop: "montane",
    },
    {
        ques: "which is known as desert covered in forest",
        aop: "tropical deciduous",
        bop: "coniferous",
        ans: "evergreen",
        cop: "montane",
    },
    {
        ques: "which forest are seen in >30 c or >200cm rain",
        aop: "tropical deciduous",
        bop: "coniferous",
        ans: "evergreen",
        cop: "montane",
    },
    {
        ques: "which forest have high biodivesity",
        aop: "tropical deciduous",
        bop: "coniferous",
        ans: "evergreen",
        cop: "montane",
    },
    {
        ques: "which forest have rainfall of 70-200cm",
        aop: "evergreen",
        bop: "coniferous",
        ans: "tropical deciduous",
        cop: "montane",
    },
    {
        ques: "which have rainfall of 70-150 cm",
        aop: "tropical deciduous",
        bop: "coniferous",
        ans: "dry deciduous",
        cop: "montane",
    },

    {
        ques: "which forest are monsoon forest",
        aop: "evergreen",
        bop: "coniferous",
        ans: "tropical deciduous",
        cop: "montane",
    },
    {
        ques: "which have rainfall of 150-200 cm",
        aop: "dry deciduous",
        bop: "coniferous",
        ans: "moist deciduous",
        cop: "montane",
    },
    {
        ques: "where sholas is seen",
        aop: "montane forest , north india",
        bop: "evergreen forest, south india",
        ans: "montane forest, south india",
        cop: "coniferous , himachal",
    },
    {
        ques: "which forest are littoral / swamp forest",
        aop: "tropical deciduous",
        bop: "coniferous",
        ans: "mongroove",
        cop: "montane",
    },
    {
        ques: "which forest are living roots",
        aop: "tropical deciduous",
        bop: "coniferous",
        ans: "mongroove",
        cop: "montane",
    },
    {
        ques: "which forest are viviparous",
        aop: "tropical deciduous",
        bop: "coniferous",
        ans: "mongroove",
        cop: "montane",
    },
    {
        ques: "which forest seen in coastal areas",
        aop: "tropical deciduous",
        bop: "coniferous",
        ans: "mongroove",
        cop: "montane",
    },
    {
        ques: "other name of shifting cultivation",
        aop: "ash",
        bop: "burn",
        ans: "slash or burn",
        cop: "ash or slash",
    },
    {
        ques: "shifting cultivation name in brazil",
        aop: "ray",
        bop: "konuka",
        ans: "roca",
        cop: "chena",
    },
    {
        ques: "shifting cultivation name in indonesia",
        aop: "ray",
        bop: "konuka",
        ans: "ladang",
        cop: "chena",
    },
    {
        ques: "shifting cultivation name in mexico",
        aop: "ray",
        bop: "roca",
        ans: "mipa",
        cop: "chena",
    },
    {
        ques: "shifting cultivation name in venzuela",
        aop: "ray",
        bop: "roca",
        ans: "konuka",
        cop: "chena",
    },
    {
        ques: "shifting cultivation name in sri lanka",
        aop: "ray",
        bop: "konuka",
        ans: "chena",
        cop: "roca",
    },
    {
        ques: "shifting cultivation name in vietnam",
        aop: "roca",
        bop: "konuka",
        ans: "ray",
        cop: "chena",
    },
    {
        ques: "shifting cultivation name south india",
        aop: "pama dabi/bringa",
        bop: "jhum",
        ans: "kumari",
        cop: "chena",
    },
    {
        ques: "shifting cultivation name north east india",
        aop: "pama dabi/bringa",
        bop: "kumari",
        ans: "jhum",
        cop: "bewar/dahiya",
    },
    {
        ques: "shifting cultivation name odisha",
        ans: "pama dabi/bringa",
        bop: "jhum",
        aop: "kumari",
        cop: "bewar/dahiya",
    },
    {
        ques: "shifting cultivation name madhya pradesh",
        cop: "pama dabi/bringa",
        bop: "jhum",
        aop: "kumari",
        ans: "bewar/dahiya",
    },
    {
        ques: "shifting cultivation name andhra pradesh",
        ans: "penda/podu",
        bop: "jhum",
        aop: "kumari",
        cop: "bewar/dahiya",
    },
    {
        ques: "shifting cultivation name rajasthan",
        ans: "waltre",
        bop: "dipa",
        aop: "kumari",
        cop: "bewar/dahiya",
    },
    {
        ques: "shifting cultivation name chhatisgarh",
        ans: "dipa",
        bop: "kuruwa",
        aop: "kumari",
        cop: "bewar/dahiya",
    },
    {
        ques: "shifting cultivation name jharkhand",
        ans: "kuruwa",
        bop: "dipa",
        aop: "kumari",
        cop: "bewar/dahiya",
    },

    {
        ques: "tropical grassland name in brazil",
        ans: "campos",
        bop: "savannah",
        aop: "Llanos",
        cop: "pampas",
    },
    {
        ques: "tropical grassland name in venzuela",
        ans: "Llanos",
        bop: "savannah",
        aop: "campos",
        cop: "pampas",
    },
    {
        ques: "tropical grassland name in africa",
        ans: "savannah",
        bop: "campos",
        aop: "Llanos",
        cop: "pampas",
    },
    {
        ques: "temperate grassland name in north america",
        ans: "prairies",
        bop: "steppes",
        aop: "downs",
        cop: "pampas",
    },
    {
        ques: "temperate grassland name in new zealand",
        ans: "canterburry",
        bop: "steppes",
        aop: "downs",
        cop: "velds",
    },
    {
        ques: "temperate grassland name in asia/europe",
        ans: "steppes",
        bop: "velds",
        aop: "downs",
        cop: "pampas",
    },
    {
        ques: "temperate grassland name in africa",
        ans: "velds",
        bop: "steppes",
        aop: "downs",
        cop: "pampas",
    },
    {
        ques: "temperate grassland name in hungary",
        ans: "pustaj",
        bop: "steppes",
        aop: "downs",
        cop: "pampas",
    },
    {
        ques: "temperate grassland name in australia",
        ans: "downs",
        bop: "steppes",
        aop: "pustaj",
        cop: "pampas",
    },
    {
        ques: "temperate grassland name in argentina",
        ans: "pampas",
        bop: "steppes",
        aop: "downs",
        cop: "prairies",
    },
    {
        ques: "which soil cover 40% in india",
        ans: "alluvial",
        bop: "black",
        aop: "laterite",
        cop: "red",
    },
    {
        ques: "which soil rich in potash or poor in phosphorus",
        ans: "alluvial",
        bop: "black",
        aop: "laterite",
        cop: "red",
    },
    {
        ques: "which soil formed due to sediments deposits",
        ans: "alluvial",
        bop: "black",
        aop: "laterite",
        cop: "red",
    },
    {
        ques: "which soil cover 18% in india",
        ans: "red",
        bop: "black",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil formed by weathering of metamorphic rock in india",
        ans: "red",
        bop: "black",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil change colour in yellow by hydration in india",
        ans: "red",
        bop: "black",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil found water deficit region or low rainfall areas in india",
        ans: "red",
        bop: "black",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil have iron in india",
        ans: "red",
        bop: "black",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil cover 4.3% in india",
        ans: "laterite",
        bop: "black",
        aop: "red",
        cop: "alluvial",
    },
    {
        ques: "which soil formed by leaching process important minerals such as silica wash away",
        ans: "red",
        bop: "black",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil known as brick soil",
        ans: "red",
        bop: "black",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil good for cashew growth or cultivation",
        ans: "red",
        bop: "black",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil cover 15% in india",
        ans: "black",
        bop: "red",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil formed due to eruption of lava in india",
        ans: "black",
        bop: "red",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil cover 15% in india",
        ans: "black",
        bop: "red",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil known as regur in india",
        ans: "black",
        bop: "red",
        aop: "laterite",
        cop: "alluvial",
    },

    {
        ques: "which soil clayey in india",
        ans: "black",
        bop: "red",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil is self ploughing in india",
        ans: "black",
        bop: "red",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil impermeable in india",
        ans: "black",
        bop: "red",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil crack when dry in india",
        ans: "black",
        bop: "red",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil sticky when moist in india",
        ans: "black",
        bop: "red",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "which soil rich iron lime alumina in india",
        ans: "black",
        bop: "red",
        aop: "laterite",
        cop: "alluvial",
    },
    {
        ques: "how many frost free days cotton need",
        ans: "210",
        bop: "209",
        aop: "200",
        cop: "220",
    },
    {
        ques: "which soil has sand content more",
        ans: "loamy",
        bop: "red",
        aop: "laterite",
        cop: "alluvial",
    },



]

const geoHtml = geoData.map(e =>
    `<div class="quesCol">
    <div class="ques">${e.ques}</div>
     <div class="op">${e.aop}</div>
      <div class="ans">${e.ans}</div>
       <div class="op">${e.cop}</div>
        <div class="op">${e.bop}</div>
    </div>
    
    
    `
).join('')
const geo = document.querySelector(".geo")
geo.innerHTML = geoHtml

let ans = document.querySelectorAll(".ans")
ans.forEach(e => {
    e.addEventListener("click", (i) => {
        i.target.classList.add("green")
    })

})
