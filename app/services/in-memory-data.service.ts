export class InMemoryDataService {
    createDb() {
        let activities = {
            "_embedded" : {
                "activities" : [ {
                    "name" : "trainer",
                    "date" : "2016-03-21 21:22",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 251.99998,
                    "totalDistance" : 10637.868,
                    "totalTime" : 1727.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/1"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/1{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/1/data"
                        }
                    }
                }, {
                    "name" : "trainer",
                    "date" : "2014-02-25 20:35",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 312.59857,
                    "totalDistance" : 12606.274,
                    "totalTime" : 1800.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/2"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/2{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/2/data"
                        }
                    }
                }, {
                    "name" : "trainer]",
                    "date" : "2014-02-08 12:21",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 999.9989,
                    "totalDistance" : 39153.09,
                    "totalTime" : 5588.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/3"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/3{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/3/data"
                        }
                    }
                }, {
                    "name" : "Thepointfromboston",
                    "date" : "2014-12-14 09:30",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 3450.9744,
                    "totalDistance" : 73197.83,
                    "totalTime" : 14810.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/4"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/4{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/4/data"
                        }
                    }
                }, {
                    "name" : "trainer",
                    "date" : "2015-01-28 20:54",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 324.99988,
                    "totalDistance" : 13478.751,
                    "totalTime" : 1777.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/5"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/5{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/5/data"
                        }
                    }
                }, {
                    "name" : "Trainer",
                    "date" : "2014-05-04 04:55",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 311.00037,
                    "totalDistance" : 12378.568,
                    "totalTime" : 1800.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/6"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/6{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/6/data"
                        }
                    }
                }, {
                    "name" : "trainer",
                    "date" : "2014-01-07 20:13",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 1094.0029,
                    "totalDistance" : 30500.584,
                    "totalTime" : 5497.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/7"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/7{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/7/data"
                        }
                    }
                }, {
                    "name" : "trainer",
                    "date" : "2014-01-09 20:23",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 625.9999,
                    "totalDistance" : 19279.676,
                    "totalTime" : 3401.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/8"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/8{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/8/data"
                        }
                    }
                }, {
                    "name" : "montour",
                    "date" : "2014-12-27 09:00",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 1725.988,
                    "totalDistance" : 40379.906,
                    "totalTime" : 8695.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/9"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/9{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/9/data"
                        }
                    }
                }, {
                    "name" : "montourtoomuchsnow",
                    "date" : "2015-03-08 10:55",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 265.00003,
                    "totalDistance" : 2951.2258,
                    "totalTime" : 1040.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/10"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/10{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/10/data"
                        }
                    }
                }, {
                    "name" : "trainer",
                    "date" : "2015-05-04 18:11",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 550.00055,
                    "totalDistance" : 20107.482,
                    "totalTime" : 2683.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/11"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/11{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/11/data"
                        }
                    }
                }, {
                    "name" : "Trainer",
                    "date" : "2014-04-03 18:17",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 346.99994,
                    "totalDistance" : 13078.682,
                    "totalTime" : 1780.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/12"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/12{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/12/data"
                        }
                    }
                }, {
                    "name" : "trainer",
                    "date" : "2014-11-09 21:20",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 300.9999,
                    "totalDistance" : 10871.949,
                    "totalTime" : 1686.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/13"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/13{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/13/data"
                        }
                    }
                }, {
                    "name" : "trainer",
                    "date" : "2014-01-31 21:10",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 601.0001,
                    "totalDistance" : 22341.883,
                    "totalTime" : 3089.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/14"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/14{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/14/data"
                        }
                    }
                }, {
                    "name" : "trainer",
                    "date" : "2014-01-25 20:47",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 1034.0006,
                    "totalDistance" : 34109.73,
                    "totalTime" : 4931.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/15"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/15{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/15/data"
                        }
                    }
                }, {
                    "name" : "trainer",
                    "date" : "2014-11-24 21:12",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 752.0014,
                    "totalDistance" : 24784.818,
                    "totalTime" : 3660.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/16"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/16{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/16/data"
                        }
                    }
                }, {
                    "name" : "Trainer",
                    "date" : "2014-03-19 18:08",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 314.33157,
                    "totalDistance" : 12248.764,
                    "totalTime" : 1707.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/17"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/17{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/17/data"
                        }
                    }
                }, {
                    "name" : "Trainer",
                    "date" : "2015-07-08 21:56",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 502.0,
                    "totalDistance" : 20433.053,
                    "totalTime" : 2692.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/18"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/18{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/18/data"
                        }
                    }
                }, {
                    "name" : "trainer",
                    "date" : "2014-06-04 21:13",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 326.00006,
                    "totalDistance" : 13706.439,
                    "totalTime" : 2082.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/19"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/19{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/19/data"
                        }
                    }
                }, {
                    "name" : "Trainer",
                    "date" : "2014-05-13 16:08",
                    "person" : null,
                    "type" : "Cycling",
                    "totalCalories" : 702.0004,
                    "totalDistance" : 26536.176,
                    "totalTime" : 3700.0,
                    "_links" : {
                        "self" : {
                            "href" : "http://localhost:8080/activities/20"
                        },
                        "activity" : {
                            "href" : "http://localhost:8080/activities/20{?projection}",
                            "templated" : true
                        },
                        "data" : {
                            "href" : "http://localhost:8080/activities/20/data"
                        }
                    }
                } ]
            },
            "_links" : {
                "first" : {
                    "href" : "http://localhost:8080/activities?page=0&size=20"
                },
                "self" : {
                    "href" : "http://localhost:8080/activities"
                },
                "next" : {
                    "href" : "http://localhost:8080/activities?page=1&size=20"
                },
                "last" : {
                    "href" : "http://localhost:8080/activities?page=8&size=20"
                },
                "profile" : {
                    "href" : "http://localhost:8080/profile/activities"
                },
                "search" : {
                    "href" : "http://localhost:8080/activities/search"
                }
            },
            "page" : {
                "size" : 20,
                "totalElements" : 163,
                "totalPages" : 9,
                "number" : 0
            }
        }
        
        
        return {activities};
    }
}