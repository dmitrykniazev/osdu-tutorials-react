import { TrajectoryData, TrajectoryDataPoint, TrajectoryMockPoint } from 'lib/models/trajectory-data';

function toTrajectoryPoint(obj: TrajectoryMockPoint): TrajectoryDataPoint {
  return {
    measuredDepth: obj.md,
    azimuth: obj.azimuth,
    inclination: obj.inclination,
    x: obj.x,
    y: obj.y
  };
}

export function responseToTrajectoryPoints(resp: TrajectoryMockPoint[]): TrajectoryDataPoint[] {
  return resp.map(obj => toTrajectoryPoint(obj));
}

const trajectoryPointsMock: TrajectoryMockPoint[] = [
  { md: 150, inclination: 0.0, azimuth: 198.09, tvd: 150, ns: 0.0, ew: 0.0, x: 700000, y: 740000 },
  {
    md: 656.25,
    inclination: 0.087500000000008932,
    azimuth: 198.08999999999997,
    tvd: 656.24974491268847,
    ns: -0.47633087596322865,
    ew: -0.1555969169645299,
    x: 500,
    y: 1000
  },
  {
    md: 1312.5,
    inclination: 0.17500000000001786,
    azimuth: 198.08999999999997,
    tvd: 1312.4979593022217,
    ns: -1.905322392941343,
    ew: -0.62238730497084038,
    x: 500,
    y: 1000
  },
  {
    md: 1968.75,
    inclination: 0.26250000000002682,
    azimuth: 198.08999999999997,
    tvd: 1968.7431126490135,
    ns: -4.286971218202221,
    ew: -1.4003700753579409,
    x: 500,
    y: 1000
  },
  {
    md: 2625.0,
    inclination: 0.35000000000003573,
    azimuth: 198.08999999999997,
    tvd: 2624.9836744406184,
    ns: -7.6212717972009605,
    ew: -2.4895434136936681,
    x: 500,
    y: 1000
  },
  {
    md: 3281.25,
    inclination: 0.43750000000004458,
    azimuth: 198.08999999999997,
    tvd: 3281.2181141752967,
    ns: -11.908216353592831,
    ew: -3.8899047797789152,
    x: 500,
    y: 1000
  },
  {
    md: 3937.5,
    inclination: 0.52500000000005365,
    azimuth: 198.08999999999997,
    tvd: 3937.4449013655894,
    ns: -17.147794889251433,
    ew: -5.6014509076535663,
    x: 500,
    y: 1000
  },
  {
    md: 4593.75,
    inclination: 0.61250000000006266,
    azimuth: 198.08999999999997,
    tvd: 4593.6625055418835,
    ns: -23.339995184291968,
    ew: -7.6241778056040959,
    x: 500,
    y: 1000
  },
  {
    md: 5250.0,
    inclination: 0.7,
    azimuth: 198.09,
    tvd: 5249.8693962559819,
    ns: -30.484802797096663,
    ew: -9.9580807561718849,
    x: 500,
    y: 1000
  },
  {
    md: 5283.0769565217388,
    inclination: 1.3639433020901626,
    azimuth: 344.37935191916739,
    tvd: 5282.9437395934474,
    ns: -30.297720875346997,
    ew: -10.126837768805729,
    x: 500,
    y: 1000
  },
  {
    md: 5316.1539130434776,
    inclination: 3.3328853120378987,
    azimuth: 351.07690523662683,
    tvd: 5315.9913415606243,
    ns: -28.968600250409459,
    ew: -10.382001172665442,
    x: 500,
    y: 1000
  },
  {
    md: 5349.2308695652164,
    inclination: 5.31350632363437,
    azimuth: 352.79476827065804,
    tvd: 5348.9725552225609,
    ns: -26.49903545731307,
    ew: -10.723264850324252,
    x: 500,
    y: 1000
  },
  {
    md: 5382.3078260869561,
    inclination: 7.2963015327118148,
    azimuth: 353.5810608473758,
    tvd: 5381.8478132898035,
    ns: -22.891989212530024,
    ew: -11.150219390568497,
    x: 500,
    y: 1000
  },
  {
    md: 5415.3847826086949,
    inclination: 9.2798773775963888,
    azimuth: 354.03259618239679,
    tvd: 5414.5776755869529,
    ns: -18.151788859629207,
    ew: -11.662352579564871,
    x: 500,
    y: 1000
  },
  {
    md: 5448.4617391304337,
    inclination: 11.263821442181447,
    azimuth: 354.32618044606176,
    tvd: 5447.1228763687113,
    ns: -12.284121177797886,
    ew: -12.259050015359144,
    x: 500,
    y: 1000
  },
  {
    md: 5481.5386956521725,
    inclination: 13.247968288869577,
    azimuth: 354.53276651871323,
    tvd: 5479.4443714266763,
    ns: -5.2960255594597454,
    ew: -12.939595844969094,
    x: 500,
    y: 1000
  },
  {
    md: 5514.6156521739113,
    inclination: 15.232238663515398,
    azimuth: 354.68635177397164,
    tvd: 5511.5033849303518,
    ns: 2.804114434826078,
    ew: -13.703173623187412,
    x: 500,
    y: 1000
  },
  {
    md: 5547.69260869565,
    inclination: 17.216589843372262,
    azimuth: 354.80526498161458,
    tvd: 5543.2614559461945,
    ns: 12.006581134053251,
    ew: -14.548867292064253,
    x: 500,
    y: 1000
  },
  {
    md: 5580.76956521739,
    inclination: 19.20099676359575,
    azimuth: 354.90026017524337,
    tvd: 5574.6804845788756,
    ns: 22.300334414977939,
    ew: -15.475662279894438,
    x: 500,
    y: 1000
  },
  {
    md: 5613.8465217391285,
    inclination: 21.185443748412208,
    azimuth: 354.97806335939742,
    tvd: 5605.7227776794125,
    ns: 33.673024946863208,
    ew: -16.482446718390687,
    x: 500,
    y: 1000
  },
  {
    md: 5646.9234782608673,
    inclination: 23.169920490760607,
    azimuth: 355.04309714238912,
    tvd: 5636.3510940653268,
    ns: 46.111009006869338,
    ew: -17.5680127765829,
    x: 500,
    y: 1000
  },
  {
    md: 5680.0004347826061,
    inclination: 25.154419934699497,
    azimuth: 355.09838920421021,
    tvd: 5666.52868919858,
    ns: 59.599364848315076,
    ew: -18.7310581098429,
    x: 500,
    y: 1000
  },
  {
    md: 5713.0773913043449,
    inclination: 27.138937086779144,
    azimuth: 355.14608225933517,
    tvd: 5696.2193592677,
    ns: 74.12191060217404,
    ew: -19.9701874222964,
    x: 500,
    y: 1000
  },
  {
    md: 5746.1543478260837,
    inclination: 29.123468313331358,
    azimuth: 355.18773555714569,
    tvd: 5725.3874846211884,
    ns: 89.661223690329123,
    ew: -21.283914140748422,
    x: 500,
    y: 1000
  },
  {
    md: 5779.2313043478234,
    inclination: 31.108010906708195,
    azimuth: 355.22451099510931,
    tvd: 5753.9980725001224,
    ns: 106.19866172729527,
    ew: -22.670662198112264,
    x: 500,
    y: 1000
  },
  {
    md: 5812.3082608695622,
    inclination: 33.092562807579448,
    azimuth: 355.25729227532258,
    tvd: 5782.0167990186792,
    ns: 123.71438488533593,
    ew: -24.128767924204354,
    x: 500,
    y: 1000
  },
  {
    md: 5845.385217391301,
    inclination: 35.07712242148834,
    azimuth: 355.28676361836932,
    tvd: 5809.4100503422205,
    ns: 142.18737969613969,
    ew: -25.656482041636,
    x: 500,
    y: 1000
  },
  {
    md: 5878.46217391304,
    inclination: 37.061688494336877,
    azimuth: 355.313463192103,
    tvd: 5836.1449630135294,
    ns: 161.5954842605048,
    ew: -27.251971764406452,
    x: 500,
    y: 1000
  },
  {
    md: 5911.5391304347786,
    inclination: 39.046260025835608,
    azimuth: 355.33782025057587,
    tvd: 5862.189463378827,
    ns: 181.91541483578649,
    ew: -28.913322996681654,
    x: 500,
    y: 1000
  },
  {
    md: 5944.6160869565183,
    inclination: 41.030836208064308,
    azimuth: 355.36018149812821,
    tvd: 5887.5123060662754,
    ns: 203.122793769211,
    ew: -30.63854262911827,
    x: 500,
    y: 1000
  },
  {
    md: 5977.6930434782571,
    inclination: 43.015416381033681,
    azimuth: 355.38083015834007,
    tvd: 5912.0831114707871,
    ns: 225.19217874354334,
    ew: -32.425560929982211,
    x: 500,
    y: 1000
  },
  {
    md: 6010.77,
    inclination: 45.0,
    azimuth: 355.4,
    tvd: 5935.87240220019,
    ns: 248.09709330002872,
    ew: -34.272234028186809,
    x: 500,
    y: 1000
  },
  {
    md: 6067.6051428571427,
    inclination: 46.197348640111983,
    azimuth: 355.59137468684719,
    tvd: 5975.6381029161785,
    ns: 288.5771952905053,
    ew: -37.460456884205961,
    x: 500,
    y: 1000
  },
  {
    md: 6124.4402857142859,
    inclination: 47.395004056885625,
    azimuth: 355.77522702560964,
    tvd: 6014.5465096742228,
    ns: 329.88737492039718,
    ew: -40.5780389712163,
    x: 500,
    y: 1000
  },
  {
    md: 6181.2754285714291,
    inclination: 48.592942327496509,
    azimuth: 355.9521419096356,
    tvd: 6052.580409764535,
    ns: 372.00935695839655,
    ew: -43.623601100497957,
    x: 500,
    y: 1000
  },
  {
    md: 6238.1105714285723,
    inclination: 49.791141773119882,
    azimuth: 356.12264959203554,
    tvd: 6089.7229773507715,
    ns: 414.92450703951721,
    ew: -46.595795944276723,
    x: 500,
    y: 1000
  },
  {
    md: 6294.9457142857145,
    inclination: 50.989582694380921,
    azimuth: 356.28723209864984,
    tvd: 6125.95778091363,
    ns: 458.61383990875987,
    ew: -49.493308631768976,
    x: 500,
    y: 1000
  },
  {
    md: 6351.7808571428577,
    inclination: 52.188247142889168,
    azimuth: 356.4463287708802,
    tvd: 6161.2687905199937,
    ns: 503.0580278200095,
    ew: -52.314857330867945,
    x: 500,
    y: 1000
  },
  {
    md: 6408.6160000000009,
    inclination: 53.387118723227587,
    azimuth: 356.60034107335355,
    tvd: 6195.6403849144253,
    ns: 548.23740908644606,
    ew: -55.059193815214556,
    x: 500,
    y: 1000
  },
  {
    md: 6465.4511428571432,
    inclination: 54.5861824207447,
    azimuth: 356.74963677808586,
    tvd: 6229.0573584298545,
    ns: 594.13199677868886,
    ew: -57.725104016400238,
    x: 500,
    y: 1000
  },
  {
    md: 6522.2862857142864,
    inclination: 55.785424451289508,
    azimuth: 356.89455361793796,
    tvd: 6261.504927714428,
    ns: 640.72148756682338,
    ew: -60.311408561059615,
    x: 500,
    y: 1000
  },
  {
    md: 6579.1214285714295,
    inclination: 56.984832129671929,
    azimuth: 357.03540248678684,
    tvd: 6292.9687382715229,
    ns: 687.985270702403,
    ew: -62.816963292614062,
    x: 500,
    y: 1000
  },
  {
    md: 6635.9565714285718,
    inclination: 58.184393754156595,
    azimuth: 357.17247025127409,
    tvd: 6323.434870810036,
    ns: 735.90243713644679,
    ew: -65.240659777435937,
    x: 500,
    y: 1000
  },
  {
    md: 6692.791714285715,
    inclination: 59.384098504728165,
    azimuth: 357.30602222867441,
    tvd: 6352.88984740215,
    ns: 784.45178876940565,
    ew: -67.581425795208844,
    x: 500,
    y: 1000
  },
  {
    md: 6749.6268571428582,
    inclination: 60.583936353221091,
    azimuth: 357.43630437692326,
    tvd: 6381.3206374458387,
    ns: 833.61184782900023,
    ew: -69.838225813267144,
    x: 500,
    y: 1000
  },
  {
    md: 6806.4619999999995,
    inclination: 61.78389798369961,
    azimuth: 357.5635452358008,
    tvd: 6408.7146634294822,
    ns: 883.36086637178164,
    ew: -72.010061444706764,
    x: 500,
    y: 1000
  },
  {
    md: 6863.2971428571418,
    inclination: 62.983974721717246,
    azimuth: 357.6879576524226,
    tvd: 6435.0598064960386,
    ns: 933.67683590421882,
    ew: -74.095971890062344,
    x: 500,
    y: 1000
  },
  {
    md: 6920.1322857142841,
    inclination: 64.18415847128729,
    azimuth: 357.80974031931044,
    tvd: 6460.3444118043135,
    ns: 984.53749711904391,
    ew: -76.095034362354284,
    x: 500,
    y: 1000
  },
  {
    md: 6976.9674285714264,
    inclination: 65.3844416585655,
    azimuth: 357.9290791492362,
    tvd: 6484.5572936849458,
    ns: 1035.9203497425592,
    ew: -78.0063644953218,
    x: 500,
    y: 1000
  },
  {
    md: 7033.8025714285686,
    inclination: 66.5848171813877,
    azimuth: 358.04614850761038,
    tvd: 6507.6877405888463,
    ns: 1087.8026624885458,
    ew: -79.829116734658925,
    x: 500,
    y: 1000
  },
  {
    md: 7090.6377142857109,
    inclination: 67.78527836392503,
    azimuth: 358.16111232030352,
    tvd: 6529.7255198258836,
    ns: 1140.1614831143675,
    ew: -81.562484712078259,
    x: 500,
    y: 1000
  },
  {
    md: 7147.4728571428532,
    inclination: 68.985818915819536,
    azimuth: 358.27412507235493,
    tvd: 6550.6608820917309,
    ns: 1192.9736485748263,
    ew: -83.205701602041984,
    x: 500,
    y: 1000
  },
  {
    md: 7204.3079999999945,
    inclination: 70.186432895248842,
    azimuth: 358.38533271096594,
    tvd: 6570.4845657808619,
    ns: 1246.2157952692714,
    ew: -84.758040460996526,
    x: 500,
    y: 1000
  },
  {
    md: 7261.1431428571368,
    inclination: 71.387114675440088,
    azimuth: 358.49487346442254,
    tvd: 6589.1878010838,
    ns: 1299.8643693774377,
    ew: -86.218814548967487,
    x: 500,
    y: 1000
  },
  {
    md: 7317.9782857142791,
    inclination: 72.58785891421546,
    azimuth: 358.60287858711024,
    tvd: 6606.7623138667986,
    ns: 1353.8956372794289,
    ew: -87.587377633365435,
    x: 500,
    y: 1000
  },
  {
    md: 7374.8134285714214,
    inclination: 73.788660526203529,
    azimuth: 358.70947303951328,
    tvd: 6623.20032933224,
    ns: 1408.2856960552492,
    ew: -88.86312427487384,
    x: 500,
    y: 1000
  },
  {
    md: 7431.6485714285636,
    inclination: 74.9895146573954,
    azimuth: 358.81477611100968,
    tvd: 6638.4945754581267,
    ns: 1463.0104840592246,
    ew: -90.045490095289153,
    x: 500,
    y: 1000
  },
  {
    md: 7488.4837142857059,
    inclination: 76.190416661762711,
    azimuth: 358.91890199234814,
    tvd: 6652.6382862151631,
    ns: 1518.0457915646484,
    ew: -91.133952027196756,
    x: 500,
    y: 1000
  },
  {
    md: 7545.3188571428482,
    inclination: 77.391362079687426,
    azimuth: 359.02196030390172,
    tvd: 6665.62520455998,
    ns: 1573.3672714739357,
    ew: -92.12802854537135,
    x: 500,
    y: 1000
  },
  {
    md: 7602.1539999999895,
    inclination: 78.592346617981079,
    azimuth: 359.12405658511557,
    tvd: 6677.4495852031851,
    ns: 1628.9504500895441,
    ew: -93.027279879796922,
    x: 500,
    y: 1000
  },
  {
    md: 7658.9891428571318,
    inclination: 79.793366131294846,
    azimuth: 359.22529274998323,
    tvd: 6688.1061971510326,
    ns: 1684.770737940911,
    ew: -93.831308210221181,
    x: 500,
    y: 1000
  },
  {
    md: 7715.8242857142741,
    inclination: 80.994416604742867,
    azimuth: 359.32576751289434,
    tvd: 6697.590326019561,
    ns: 1740.8034406625964,
    ew: -94.539757842142677,
    x: 500,
    y: 1000
  },
  {
    md: 7772.6594285714164,
    inclination: 82.1954941375779,
    azimuth: 359.42557678876869,
    tvd: 6705.89777612019,
    ns: 1797.0237699188381,
    ew: -95.15231536416978,
    x: 500,
    y: 1000
  },
  {
    md: 7829.4945714285586,
    inclination: 83.396594927773762,
    azimuth: 359.5248140710334,
    tvd: 6713.024872315862,
    ns: 1853.406854369679,
    ew: -95.6687097866692,
    x: 500,
    y: 1000
  },
  {
    md: 7886.3297142857009,
    inclination: 84.597715257381381,
    azimuth: 359.62357079069568,
    tvd: 6718.9684616468758,
    ns: 1909.9277506738053,
    ew: -96.088712661651314,
    x: 500,
    y: 1000
  },
  {
    md: 7943.1648571428432,
    inclination: 85.798851478535767,
    azimuth: 359.72193665950653,
    tvd: 6723.7259147257346,
    ns: 1966.56145452325,
    ew: -96.4121381838319,
    x: 500,
    y: 1000
  },
  {
    md: 8000.0,
    inclination: 87.0,
    azimuth: 359.82,
    tvd: 6727.29512690036,
    ns: 2023.2829117050728,
    ew: -96.638843272828581,
    x: 500,
    y: 1000
  },
];

export const trajectoryMock: TrajectoryData = {
  points: responseToTrajectoryPoints(trajectoryPointsMock),
};
