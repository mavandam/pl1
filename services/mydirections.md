# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=Medieval+Times+Toronto&destination=Canadas+Wonderland&units=imperial&waypoints=place_id:ChIJ3flrK2IzK4gRsoLymGpVn1g|place_id:ChIJm8KGNas7K4gRzisvdic-RXI&alternatives=true&avoid=highways&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJPWn1Hgg1K4gRHRZxCH_uUCQ",
         "types" : [
            "establishment",
            "food",
            "point_of_interest",
            "restaurant",
            "tourist_attraction"
         ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ3flrK2IzK4gRsoLymGpVn1g",
         "types" : [ "neighborhood", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJm8KGNas7K4gRzisvdic-RXI",
         "types" : [ "establishment", "museum", "point_of_interest", "tourist_attraction" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJe3u5IUsvK4gR_PyyMgWDpoc",
         "types" : [
            "amusement_park",
            "establishment",
            "point_of_interest",
            "tourist_attraction"
         ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.8445288,
               "lng" : -79.3343052
            },
            "southwest" : {
               "lat" : 43.6326135,
               "lng" : -79.5345566
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "4.5 mi",
                  "value" : 7211
               },
               "duration" : {
                  "text" : "19 mins",
                  "value" : 1160
               },
               "end_address" : "Casa Loma, Toronto, ON, Canada",
               "end_location" : {
                  "lat" : 43.6768401,
                  "lng" : -79.41036149999999
               },
               "start_address" : "10 Dufferin St, Toronto, ON M6K 3C3, Canada",
               "start_location" : {
                  "lat" : 43.6326135,
                  "lng" : -79.42487489999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "2.6 mi",
                        "value" : 4146
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 704
                     },
                     "end_location" : {
                        "lat" : 43.6684595,
                        "lng" : -79.43901559999999
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e on \u003cb\u003eDufferin St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "y~hiGltwcNMDIBUHe@Ns@VSFQHWH_@JWHOBOFm@NE@MDODIBUHw@RqA`@y@TC?u@RyA`@a@JgBh@KB_AVe@LKBs@R_@Je@NeAXaAZKBUFMDw@RyDfAYFKDiCr@u@RMDe@Nq@RQDGBI@sBh@QDOFYHGBYH?@MBa@Lw@R[JMDe@Lq@Pa@Le@Lk@NKDg@L_@JMD{@TKDODm@No@Pi@NSFODA@k@NqA\\o@R{@Tq@Rk@Ne@Le@Le@Ng@Lc@LSFUDUHWH_@J]HUHQDUHYF]J[H_@JYJi@Ny@RGBo@PKDI@k@P_@JSFiAZYHSDaAXWHq@PiAZi@NKDMBSFE@[Hg@NQD_@JE@sA^gFxAm@Pa@Je@N[HWHYFQFE@IBSFc@LeBd@SFkBf@oA\\QDEBODg@PC@QDaA\\c@La@Nw@ViA^KBUHsAb@k@Ra@Lg@NMDMDg@PwBr@iDhAuAd@wAb@u@V_@LYH{@Xg@P]Jg@N}@Z_AXOF{CbA"
                     },
                     "start_location" : {
                        "lat" : 43.6326135,
                        "lng" : -79.42487489999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 mi",
                        "value" : 837
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 114
                     },
                     "end_location" : {
                        "lat" : 43.6700758,
                        "lng" : -79.4290172
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDupont St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{~oiGzlzcN?a@?GAEAQCWKy@MaAGe@]yCYoBq@yFUgB]mCo@qFq@oFm@mFQuA?AAMAG?E?E?C@I?C@G@CLe@Nm@@K@G@I"
                     },
                     "start_location" : {
                        "lat" : 43.6684595,
                        "lng" : -79.43901559999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 538
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 80
                     },
                     "end_location" : {
                        "lat" : 43.6747102,
                        "lng" : -79.4309495
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eOssington Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_ipiGjnxcNg@NWHE@_@LGBa@L_@La@J[JEBKBMDc@N}@XSFUFaDbAwExAw@VKBeA\\"
                     },
                     "start_location" : {
                        "lat" : 43.6700758,
                        "lng" : -79.4290172
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 mi",
                        "value" : 1690
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 262
                     },
                     "end_location" : {
                        "lat" : 43.6768401,
                        "lng" : -79.41036149999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDavenport Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}eqiGlzxcNAu@?q@?k@AeC?kDAmAAk@Au@Ag@Ag@A[AWCUEs@Gs@AMEa@Eg@Gm@C_@CSAMEa@Eg@Ks@Gk@[wBS{ASuAEYWyAGa@c@_CAAw@qEk@_DG[OaA?AAKEUCUEe@Co@Em@?G?SAY?AA]Ac@Ac@A_@A]?Q?W@[@m@B_A?M@w@?]?o@CsAA[EaBCiBCiB?U?K?U?kF?uA?{C?U?a@ASAQACAY"
                     },
                     "start_location" : {
                        "lat" : 43.6747102,
                        "lng" : -79.4309495
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "5.9 mi",
                  "value" : 9496
               },
               "duration" : {
                  "text" : "25 mins",
                  "value" : 1489
               },
               "end_address" : "770 Don Mills Rd., North York, ON M3C 1T3, Canada",
               "end_location" : {
                  "lat" : 43.7171603,
                  "lng" : -79.3385308
               },
               "start_address" : "Casa Loma, Toronto, ON, Canada",
               "start_location" : {
                  "lat" : 43.6768401,
                  "lng" : -79.41036149999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 162
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 43.67824479999999,
                        "lng" : -79.41080839999999
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e on \u003cb\u003eWalmer Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "gsqiGvytcNQFODUHoA^y@R[HMDC@I??@G?G?CAC?EC"
                     },
                     "start_location" : {
                        "lat" : 43.6768401,
                        "lng" : -79.41036149999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 183
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 43.6788745,
                        "lng" : -79.40875779999999
                     },
                     "html_instructions" : "\u003cb\u003eWalmer Rd\u003c/b\u003e turns slightly \u003cb\u003eright\u003c/b\u003e and becomes \u003cb\u003eAustin Terrace\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_|qiGp|tcNECEECEACAECIAAEQMw@E_@UsAEU?CAE?ESwAGa@EIAEAAAACA"
                     },
                     "start_location" : {
                        "lat" : 43.67824479999999,
                        "lng" : -79.41080839999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 mi",
                        "value" : 660
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 87
                     },
                     "end_location" : {
                        "lat" : 43.6845574,
                        "lng" : -79.4110946
                     },
                     "html_instructions" : "\u003cb\u003eAustin Terrace\u003c/b\u003e turns \u003cb\u003eleft\u003c/b\u003e and becomes \u003cb\u003eSpadina Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eParts of this road may be closed at certain times or on certain days\u003c/div\u003e",
                     "polyline" : {
                        "points" : "}_riGvotcNGAE@c@J_AXSFgBj@a@LcAZcBf@SHMD_@JeA\\QD]LoA^IBcA\\a@L]JiBh@g@PKDSFu@TWJYJIB"
                     },
                     "start_location" : {
                        "lat" : 43.6788745,
                        "lng" : -79.40875779999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.4 mi",
                        "value" : 2328
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 423
                     },
                     "end_location" : {
                        "lat" : 43.6903631,
                        "lng" : -79.3833039
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSt Clair Ave W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ocsiGh~tcNEW?GEUMaAAEMu@Gg@Gc@WgBWoBAIE[OmAIk@CSCSGk@Io@CSCMIm@COSeBGe@?A[kCAOC[QuACOE[ESUoBe@uDMiAIu@Gi@S_CC]EYK_AE_@g@aE]yCMiAEWQ_BOiAIo@E_@ACGi@M_AScBK}@]mCOqAE[UgBGYGg@K{@CKE[MMSmBi@}DGe@[kC?A_@uCEYIi@AOMy@CUKu@E_@G]u@_GKcAk@kEeAeIK{@Io@AKCMCOCUAGC]"
                     },
                     "start_location" : {
                        "lat" : 43.6845574,
                        "lng" : -79.4110946
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 372
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 51
                     },
                     "end_location" : {
                        "lat" : 43.69356639999999,
                        "lng" : -79.38462849999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMt Pleasant Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wgtiGrpocNuA`@gBj@_D`AKBMD}DnAkA^"
                     },
                     "start_location" : {
                        "lat" : 43.6903631,
                        "lng" : -79.3833039
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 mi",
                        "value" : 1480
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 197
                     },
                     "end_location" : {
                        "lat" : 43.6976532,
                        "lng" : -79.3672933
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMoore Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "y{tiG|xocNm@yEIo@OgAIq@Ik@OiAEc@OqAAKMWEIQWSYGIAC_@i@GMKSEIEIEMAGCEI]ESCKEOAMAC?MIk@S_BQkAEe@CGIo@cA_IM{@Kw@K}@Ku@AMSyAACIu@C[Ii@CSKq@Gq@Iu@Ee@CSC[C]C_@?WE[IgAI{@A]MuAG[EKIK?ACY?ACIAMIw@CUEYE_@CUAEIi@MaAM_Ac@_Dc@eDAO"
                     },
                     "start_location" : {
                        "lat" : 43.69356639999999,
                        "lng" : -79.38462849999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 mi",
                        "value" : 713
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 106
                     },
                     "end_location" : {
                        "lat" : 43.7024945,
                        "lng" : -79.36153899999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eSouthvale Dr\u003c/b\u003e",
                     "polyline" : {
                        "points" : "iuuiGpllcNCKCGWi@Y_@i@w@c@m@KOa@o@Ya@QWKQ[a@eBiCYa@EEc@o@KO[_@QUw@y@WYQOe@c@a@_@}B{BSSgAoAcAiAQQ"
                     },
                     "start_location" : {
                        "lat" : 43.6976532,
                        "lng" : -79.3672933
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "344 ft",
                        "value" : 105
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 23
                     },
                     "end_location" : {
                        "lat" : 43.703162,
                        "lng" : -79.3606257
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eMillwood Rd\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "qsviGrhkcNMKU]U[MMEGEIIQGICGGQSY"
                     },
                     "start_location" : {
                        "lat" : 43.7024945,
                        "lng" : -79.36153899999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 mi",
                        "value" : 677
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 76
                     },
                     "end_location" : {
                        "lat" : 43.7018532,
                        "lng" : -79.35294859999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eMillwood Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wwviG|bkcN^]d@c@NOHMJMJOLSFMHOHSHQTs@Ty@J[J]BKDMDUBQ@K?M@Y?SCSBiABU?K?]?c@Ai@?QAMAMCg@Cq@Co@Cg@Ce@B]Eu@EcAAo@?E?c@?c@?W?O?WBa@Bc@Hu@D[DW"
                     },
                     "start_location" : {
                        "lat" : 43.703162,
                        "lng" : -79.3606257
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 mi",
                        "value" : 1817
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 286
                     },
                     "end_location" : {
                        "lat" : 43.709962,
                        "lng" : -79.3344685
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eOverlea Blvd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qoviG|ricNBMDSUKWKMGMIWO_@UUQWU?Aw@y@w@{@UYc@c@YY_@a@w@{@Y[CC_@a@SUEC{@}@W]c@a@OOe@g@]]c@g@QUEGYc@S_@O[CGIQAEGQQg@Oo@CMACa@oCSuAAC_@gCIm@G_@QkAWeBG_@Ky@Ku@EWa@sCCKOeAG]Ic@Is@QeAE]U{ACQScACMI_@EYKe@Km@Ii@CKOu@_AwEQiAKs@Ko@Y}BAIKo@E[Ou@CGM[GQIK]y@ISEMEOKg@Ic@CW"
                     },
                     "start_location" : {
                        "lat" : 43.7018532,
                        "lng" : -79.35294859999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 mi",
                        "value" : 782
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 103
                     },
                     "end_location" : {
                        "lat" : 43.7165784,
                        "lng" : -79.3372081
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eDon Mills Rd.\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gbxiGl_fcNE_@QDqBl@a@Nc@LIBOFs@TMFuBp@e@Pk@RuAf@YJ[J{Bv@]JOFeA^WHgEvAeBl@uBr@"
                     },
                     "start_location" : {
                        "lat" : 43.709962,
                        "lng" : -79.3344685
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "135 ft",
                        "value" : 41
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 43.7164714,
                        "lng" : -79.3376906
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at \u003cb\u003eSt Dennis Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "skyiGppfcNF`@BF@JBNBX"
                     },
                     "start_location" : {
                        "lat" : 43.7165784,
                        "lng" : -79.3372081
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "364 ft",
                        "value" : 111
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 29
                     },
                     "end_location" : {
                        "lat" : 43.7174013,
                        "lng" : -79.33814599999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}jyiGpsfcNi@XC@cBj@E?E?E?G@CBC@CDAD"
                     },
                     "start_location" : {
                        "lat" : 43.7164714,
                        "lng" : -79.3376906
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "144 ft",
                        "value" : 44
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 43.717304,
                        "lng" : -79.3386659
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wpyiGlvfcNABAD?F@F@FHj@BHDN"
                     },
                     "start_location" : {
                        "lat" : 43.7174013,
                        "lng" : -79.33814599999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "39 ft",
                        "value" : 12
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 43.717198,
                        "lng" : -79.3386246
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cpyiGtyfcNBANG"
                     },
                     "start_location" : {
                        "lat" : 43.717304,
                        "lng" : -79.3386659
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "30 ft",
                        "value" : 9
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 43.7171603,
                        "lng" : -79.3385308
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "ooyiGjyfcNFM?C"
                     },
                     "start_location" : {
                        "lat" : 43.717198,
                        "lng" : -79.3386246
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "19.2 mi",
                  "value" : 30901
               },
               "duration" : {
                  "text" : "50 mins",
                  "value" : 2993
               },
               "end_address" : "1 Canada's Wonderland Drive, Vaughan, ON L6A 1S6, Canada",
               "end_location" : {
                  "lat" : 43.8384439,
                  "lng" : -79.5345566
               },
               "start_address" : "770 Don Mills Rd., North York, ON M3C 1T3, Canada",
               "start_location" : {
                  "lat" : 43.7171603,
                  "lng" : -79.3385308
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "95 ft",
                        "value" : 29
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 43.7172963,
                        "lng" : -79.3382307
                     },
                     "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e",
                     "polyline" : {
                        "points" : "goyiGxxfcN?C?EAEEKIQACACEE"
                     },
                     "start_location" : {
                        "lat" : 43.7171603,
                        "lng" : -79.3385308
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "341 ft",
                        "value" : 104
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 43.7164714,
                        "lng" : -79.3376906
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e towards \u003cb\u003eDon Mills Rd.\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cpyiG|vfcN@E@EBE@CHMbBk@BAh@Y"
                     },
                     "start_location" : {
                        "lat" : 43.7172963,
                        "lng" : -79.3382307
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "85 ft",
                        "value" : 26
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 30
                     },
                     "end_location" : {
                        "lat" : 43.716541,
                        "lng" : -79.3373788
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e towards \u003cb\u003eDon Mills Rd.\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}jyiGpsfcNCYCOAKCG"
                     },
                     "start_location" : {
                        "lat" : 43.7164714,
                        "lng" : -79.3376906
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "7.8 mi",
                        "value" : 12495
                     },
                     "duration" : {
                        "text" : "22 mins",
                        "value" : 1297
                     },
                     "end_location" : {
                        "lat" : 43.822273,
                        "lng" : -79.3699726
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at the 1st cross street onto \u003cb\u003eDon Mills Rd.\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kkyiGrqfcNGa@qDnAmBn@}Bx@c@Nu@TE@uCj@mBb@u@TMFYLC@E@A?SHMD[BK@aCTeBZq@Lu@Nu@Lo@LE?q@NUDKBo@JUDw@LOBYDg@H_@Fo@Nw@NkATWDc@HcBVIB}B^WDk@Lu@LUFUDSDMBYFSDm@NK@YF[HaARe@H]Fg@J_@H_@F_@FA@eBVG?i@J}AV{@NSByAXcAPk@LmAPu@NwAT}@PwATA?oCd@cARi@HkARy@NSD]DiDl@yAXUD[DoATm@L}@NqATkBZMDuDn@k@HYFa@HcAN[F_@Hu@Ly@NKBiBXcAPy@NcAPgAR{AVODcATE@iBXUDiARaBTe@Fi@H}Dp@qATKBSD[HG@_@JC@C@C@mBl@YJQDOBQBO@YBY@U@C?Q?SAi@CYEyBYYE{@KOCaAESAaAAc@?Q@q@?_@A_@@[?k@@c@?M@U?c@@C?[@oA@oA@wCBoA@{CBmABC?wBBY?wDDaA?[@U?cBB{BAg@?KA[AG?g@Ac@CcAGUAmBKM?gBK}AI_AGWAc@AgAEE?gAGcAEqCMeFYa@AgAGa@CY?{@EoBG_@CI?_AESAwAG]AO?UAU?o@?S?a@@g@Bk@DWBWBs@Ju@Lu@NKBUDUF}Ad@]JCBMD[JODSDgAZIBSDo@PKBa@Lc@LeCx@cAXUHE@KDC@_@PMDu@ZUJ[JQDgBj@YJMDWFWDWBQ?Q?E?YEQCUG{Ak@c@QKEQGSEQEOAA?MAS?S@SBUDIBIBGBMFULOJIFMJWTo@j@]Z]Z]Z[XA@WRQNQNUPIFKHOHEBEBKFGBIDUJE@OF_@Lg@LGBy@TQDw@TODMDGDSJCBKFQNEDGFIHIJCDKNCFGJINABw@hBUd@KVILEDILEHYVIFIFGFIDIDSFWHu@T[Ls@V{@Zc@No@RmA^WHKDUFKDKBMBYF_@FWDc@FOBUFQBg@HK@KBUDIBo@Hq@HO@MB]Fo@JiBXSDWDSDiBV_@FyAVg@He@HQBYFQ@MBUBQBW@U@a@?Y@E?SAY?WA_@CMAa@CIAUEMAKCUEmAYOCgAWeAWe@KUGOEME[I_Bc@q@QeAUQGUEkA]]GWGm@M_B_@{@S_@Kg@Ie@GI?QAK?U?OAi@BO@I@WBG@MBIBWFWFQF[LIDKDIDMHq@b@qChBy@h@]TYR_@Z_@Zq@n@WVOPMLGFSRsBbCo@t@KLMNcAjAyAfBQRKLWX}@bAY^e@f@a@d@}AhBSTOPONMLWT[VYRYP_@PMHGBIBSHG@YJG@k@PSFSHC@WHeBj@iA^qAb@kDjAu@Tc@NWJqAb@KDa@LKD_@NOFMDC@IJIDGBMDMDSFOFKBSHMDWHa@LOFIBQFQFKFMDIDKFIDKHKFEBABMHEDGDONIHONKLQTOTORKP?@EHINKTKRIRMZ_AvBOLA@A@Sd@INiAdCaAzBeAbCO^KRA@?@?@GTINGLU^QTSVKLUXKJGHWVKHMLMJQLQLYRIACAA@IBQHWLQHSF_@Lo@TUHUF"
                     },
                     "start_location" : {
                        "lat" : 43.716541,
                        "lng" : -79.3373788
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 mi",
                        "value" : 2832
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 235
                     },
                     "end_location" : {
                        "lat" : 43.8443225,
                        "lng" : -79.3822227
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eLeslie St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 12\u003c/b\u003e",
                     "polyline" : {
                        "points" : "e`njGh}lcNUHSHWHWHWFWFOBC@M@m@JI@]Fg@FOBq@Ja@FQD}@No@Ha@F]F_@DQ@_@Dm@Hg@FI@e@F{@Jq@H_ANiBV]DYDa@FCBSD[Fa@HKBIBMDSHe@TOJ_@T[TMJUTYTWXY\\QTIJc@r@S\\Wh@Uj@Uj@Md@Ux@IZMh@If@Id@Gd@q@dFQ`CEh@G`@G\\I^M\\M\\MZUd@Y`@GHMRWZ[Z[TKHYNYL[J_@JMBcAR}APgALc@Da@FqDn@iB\\w@NUF]FE?E@QDG@k@HE@OBi@JYD_AJyAPw@JeANeANeARyBb@iARA@cBV_C`@gAP{@Ns@LMBcBXcAPsB\\"
                     },
                     "start_location" : {
                        "lat" : 43.822273,
                        "lng" : -79.3699726
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.8 mi",
                        "value" : 7673
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 566
                     },
                     "end_location" : {
                        "lat" : 43.8234459,
                        "lng" : -79.4716636
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHwy 7\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 7\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_jrjGziocNSDUBFZVlBl@lEBPt@lFJn@b@bDHn@Jr@`AxGHl@n@fEl@dEt@`FHh@Jr@ZlBFh@V~A@Hf@pDh@zD\\fBLjAVhBRrAx@fGh@|Dn@jEFd@BZJx@Dd@DjADfA@dA?D?tA?p@?J?vAAzF?l@?|A@xD?B?\\?b@?@?B@\\?@?VHdG?\\@`@JnE@VLvEPjE@f@HlBJ`BFx@H|AFjABb@XtDZbEBZDf@Fr@f@xFBTDTBTJfALjARjBP~AfBjMV~A^dCb@fCf@vCH\\f@dDXtADTJd@Ln@@DPp@Nl@Ph@V|@Tj@Vn@Zp@Td@l@~@n@`AnA`Br@~@JNrA~Ad@r@@Bn@`ABBTd@Zt@@BL\\DJFR@BJZJ`@HXDNJd@Lt@Lv@XpB?BBRXzBHn@L`ADTDXFn@NjA?@n@`FX~BDRf@~DHn@^`Df@~DJx@ZbCHn@D\\VpBHn@@DFh@R~AD\\J`ARbBN|ABVRxBNjBDd@RhCNxBV~D@TJzAPlCBbA@N?VB\\Df@Jz@XnC@JFd@Fh@?@?B`@nCJr@Lv@DXRjAVvABRNn@Jh@Lj@Jf@n@fCl@dClAvENf@?@fAzDzArF@Fj@zBp@nCDRx@fDf@tBHXt@bDpAnF\\vAtA|FFVl@dCvAdGp@rC`AhE"
                     },
                     "start_location" : {
                        "lat" : 43.8443225,
                        "lng" : -79.3822227
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 mi",
                        "value" : 2774
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 292
                     },
                     "end_location" : {
                        "lat" : 43.8185888,
                        "lng" : -79.5039453
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLangstaff Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 72\u003c/b\u003e (signs for \u003cb\u003eLangstaff Road\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRegional Road 72\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eDufferin Street\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qgnjGzx`dNCVAPAPCJAL?LsAp@OJWPo@l@Yh@MTQ\\GVM`@Kj@G\\E^Ef@Aj@?n@?@@\\Df@Dl@F^NhARrA\\xBT~ARvA\\lCF^PpAFVLZPlA\\`Cd@hDL~@VnBHb@BRLz@Fd@BRBb@DZBVJr@N`ABXZpCZvBv@|FNr@BPT`Bf@tDFh@@\\@JFd@x@jGVxBJz@Fh@~@rGDRBJ@DL`ADXHh@r@rFFNR~Ad@bEFv@Hl@PzAXdCZrCVdBBNBR`@hCJd@ZxBHr@BNTfBNfAPrAVpBVxB"
                     },
                     "start_location" : {
                        "lat" : 43.8234459,
                        "lng" : -79.4716636
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 mi",
                        "value" : 2009
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 165
                     },
                     "end_location" : {
                        "lat" : 43.8364131,
                        "lng" : -79.50795549999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eKeele St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 6\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "eimjGtbgdNiBVC@gANYDw@N[Dg@HkAPaDd@K@_@HgAPYDC?o@L{B^kF~@iDl@mCd@[Ds@JeANk@Hs@J_@DgALo@Fc@FsARoDd@C?qANM@kAJc@Fs@HqDd@G@w@J}@Jw@JmAPq@JYGU@i@HkBTq@J{@LuATu@Hm@HeALuBV"
                     },
                     "start_location" : {
                        "lat" : 43.8185888,
                        "lng" : -79.5039453
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 mi",
                        "value" : 2086
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 243
                     },
                     "end_location" : {
                        "lat" : 43.8309757,
                        "lng" : -79.5326225
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRutherford Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 73\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qxpjGv{gdNYBHh@`@rCj@dEJp@BVn@`Fp@zFl@tE\\nCZlCXhBPfAJp@`@jE@Hj@`FRzARzAZlBT~A?B@DF`@VhBh@hDt@hF@Dj@|DNhALx@Jx@RxBPlAPxA@DT|AHn@Hf@@FHl@Hl@@@Hl@^`CHl@V~AF\\PnABNPhAJh@RnALp@DR`@jBZzA"
                     },
                     "start_location" : {
                        "lat" : 43.8364131,
                        "lng" : -79.50795549999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 mi",
                        "value" : 835
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 90
                     },
                     "end_location" : {
                        "lat" : 43.83839469999999,
                        "lng" : -79.5341916
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eJane St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 55\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "svojGzuldNgC`@aANm@HaALq@Jq@HcALSBaALoBVs@JYD_CXqAPqCVcD`@e@F_AJeBT"
                     },
                     "start_location" : {
                        "lat" : 43.8309757,
                        "lng" : -79.5326225
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "125 ft",
                        "value" : 38
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 20
                     },
                     "end_location" : {
                        "lat" : 43.8384439,
                        "lng" : -79.5345566
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at \u003cb\u003eSpringside Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}dqjGt_mdNSD@B?RBLBT?F"
                     },
                     "start_location" : {
                        "lat" : 43.83839469999999,
                        "lng" : -79.5341916
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "y~hiGltwcNoJvCsUrGie@vMoaAfXuS|FaKpCgIlCoZxJsMhEi@{FmHim@SgCf@aCqEtAgErA}LxDeA\\Au@?}AEkLGaDi@{GeAcJkD{SuA}IOwE@uGMoMCuSEkAAYQFe@NsDbAUBUEQS}@eFg@{CSC_FxAcJpCmKdDmBn@c@NE_@c@sC_AcH{@cHqDaZoAaMkCwTkBkOq@eFIg@a@{BmAqJq@iFyCsUkByNC]uA`@gGlBcHxBaCoRg@eA}@qAu@oBq@{EoEm]s@mHYwD]{CMi@SeB{AaLm@iE_CoDaGyIqAeBsByBeKkK{A}B[k@dAaAp@{@h@eA`A{CZmAFeA@_GWeGImHFmBXwBDSUKe@S{AaA{FgGwKqLaAgBe@qAwBaNwEu[mA{GeBcJs@kFe@iC}@sBa@yAM{@E_@QDsC|@m@PgEvAgKpDkKnDuBr@F`@DRFh@m@ZuBj@SLEVPdAHLVU?MSg@CUDIlBy@l@[Gi@ESGa@qDnAkFhByAd@_IfBq@X_AReH`AaDj@{FbA{KnBoPbD}UbEu~@~OkNbCeMrBwJjBoC|@cANmAFiBK_Fo@{DI}FDaNLyRPiJ?o]_BgZmAmCDoCXmCf@uC|@cFtAcIdCkDrAgDdAsAHgAQ}CkAw@MiABeBr@uEbEyBbBuAn@qF|AuAdAiBrDq@pAs@v@cDpAkInCcJ~AeTfDqDReDOqH_BmIuBsJ}BwB]s@AkCRkC`AuJxGgH|HmPnRgBrA_Ab@uC~@eWtIi@Z}@XyCbAwAv@sApAyAbCcBzDg@v@yFlMYt@gAzA{BxBk@`@MCu@\\kEzAoDv@{OxB_KrA{Cp@iB`AyAlAmAxAeBfDcAfDi@|CqArLm@xBeAlB}A`B{Ar@oEt@_IjAuE|@qCd@kFn@kIvAuNbCoHnAUBFZdAzHhBrM`BjLdFd]dFp^dBjM\\rF?`R@bJZdRj@xPd@dIvBdXb@~DdDvVhEzVp@tCvAbEnCxEbFpGzA|B`A|BbApDjBdNrBbPvGri@xBdYn@pLxA|LjBvK|G~WlHrYzL`h@`AhECVCb@Ef@cB|@gA~@aAtBg@jCGdCTrCvAvJjAvITr@n@nEtA|J\\hCdBpN`BdLr@hGdBfNpA|ItCrTxBdRrA|Iz@rGn@jFmBXuDj@gLdBeZbFa^jE{Ft@kAB_AJoHdA_Hx@YBHh@lAxIpBfP`C|Q`AnInCrSnE~ZdBdNhBxL|BtMZzAgC`@oBXiFp@yFt@}JhAoJjAQHB`@B\\"
         },
         "summary" : "Dufferin St",
         "warnings" : [],
         "waypoint_order" : [ 0, 1 ]
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
