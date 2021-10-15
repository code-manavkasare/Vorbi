import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colorpicker } from '../../utilities';

const example = [
  {
    data: "Pfizer has made a new development in fighting the pandemic, they've successfully tested a new vaccine with an efficacy of 95%.",
    name: 'Manoj',
    type: 'health',
    id: '0',
  },
  {
    data: 'Results of the 2020 US election are here and Joe Biden is our new president!',
    name: 'srinivas',
    type: 'social',
    id: '1',
  },
];

const Post = ({ data, name, type }) => {
  const [fillheart, setfillheart] = useState('#6D7187');
  const [fillbookmark, setfillbookmark] = useState('#6D7187');

  return (
    <View style={[styles.outer]}>
      <View style={[styles.left]}>
        <View
          style={[{ backgroundColor: colorpicker(type) }, styles.leftin]}
        ></View>
      </View>
      <View style={styles.right}>
        <View style={[styles.upper]}>
          <View style={[styles.name]}>
            <Text style={[styles.nametext]}>{name}</Text>
          </View>
          <View style={[styles.data]}>
            <Text style={[styles.datatext]}>{data}</Text>
          </View>
        </View>
        <View style={[styles.lower]}>
          <View style={[styles.icon]}>
            <TouchableOpacity
              onPress={() => {
                if (fillheart == '#6D7187') {
                  setfillheart('#FF729F');
                } else {
                  setfillheart('#6D7187');
                }
              }}
            >
              <Svg width="17" height="17" viewBox="0 0 41 36" fill="none">
                <Path
                  d="M20.1608 6.28975C19.6162 5.51194 19.0717 4.73412 18.4182 3.95631C16.6756 1.73398 14.3884 0.289469 11.6655 0.0672361C7.52676 -0.377229 4.36824 1.40063 1.97213 4.84524C0.556241 7.06757 -0.0972449 9.51213 0.0116694 12.1789C0.120584 14.8457 0.77407 17.1792 2.40778 19.2904C3.60584 20.7349 4.8039 22.1794 6.11087 23.5128C10.2496 27.6241 14.824 31.2909 19.5073 34.8467C20.0519 35.2911 20.2697 35.2911 20.8143 34.8467C22.5569 33.5133 24.1906 32.1799 25.9333 30.8465C29.4185 28.0686 32.686 25.1795 35.7356 21.9572C36.9336 20.6238 38.1317 19.2904 39.003 17.7347C40.9635 13.7345 40.9635 9.73436 38.8941 5.84529C37.0425 2.40068 34.1019 0.289469 30.1809 0.178352C27.2402 0.0672361 24.8441 1.1784 22.7748 3.28961C21.7945 4.06742 21.0321 5.17859 20.1608 6.28975Z"
                  fill={fillheart == '#6D7187' ? 'none' : fillheart}
                />
                <Path
                  d="M18.5225 7.43682L20.0698 9.64696L21.7347 7.52387C21.94 7.262 22.1264 7.01955 22.2994 6.79449C22.9647 5.92919 23.4321 5.32115 24.0179 4.8563L24.1157 4.77873L24.2031 4.6896C25.9367 2.92093 27.8067 2.09007 30.1054 2.17693L30.1148 2.17728L30.1243 2.17755C33.222 2.26534 35.5645 3.87743 37.1305 6.78858C38.8743 10.0683 38.8973 13.3733 37.2314 16.8046C36.4925 18.1079 35.4675 19.2629 34.2653 20.6011C31.3055 23.7264 28.1228 26.5429 24.702 29.2702C23.8242 29.9422 22.9753 30.6127 22.14 31.2725L22.1341 31.2771C21.473 31.7993 20.8203 32.3148 20.1575 32.8282C15.6992 29.4275 11.409 25.9555 7.52992 22.1034C6.30212 20.8497 5.16566 19.4827 3.96982 18.0408C2.66452 16.3424 2.10601 14.4482 2.01 12.0973C1.91809 9.84674 2.45893 7.81757 3.63734 5.95382C5.69178 3.01748 8.18192 1.70463 11.4519 2.0558L11.4773 2.05853L11.5028 2.06061C13.5609 2.22858 15.3718 3.31246 16.8444 5.19042L16.8652 5.21699L16.8869 5.24283C17.4753 5.94323 17.972 6.65061 18.5225 7.43682Z"
                  stroke={fillheart}
                  strokeOpacity="1"
                  strokeWidth="4"
                />
              </Svg>
            </TouchableOpacity>
            <Text
              style={[
                {
                  color: '#6D7187',
                  paddingHorizontal: 4,
                  fontSize: 10,
                  paddingTop: 3,
                },
              ]}
            >
              12k
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (fillbookmark == '#6D7187') {
                  setfillbookmark('#5762D5');
                } else {
                  setfillbookmark('#6D7187');
                }
              }}
            >
              <Svg width="17" height="17" viewBox="0 0 28 36" fill="none">
                <Path
                  d="M14.6121 23.9351L13.4097 23.1622L12.2891 24.0496C11.2875 24.8428 10.3048 25.6352 9.33002 26.4212L9.3269 26.4237C8.3489 27.2123 7.37878 27.9945 6.39212 28.7759L6.38356 28.7826L6.37509 28.7895C4.93132 29.9587 3.49865 31.1189 2.03158 32.2764V32.2451V32.1833V32.1215V32.0597V31.9978V31.936V31.8742V31.8124V31.7506V31.6888V31.627V31.5652V31.5034V31.4416V31.3798V30.3909V29.402V27.4241V27.3623V27.3005V27.2387V27.1769V27.1151V27.0533V26.9915V26.9297V26.8679V26.8061V26.7442V26.6824V26.6206V26.5588V26.497V26.4352V26.3734V26.3116V26.2498V26.188V26.1262V26.0644V26.0026V25.9408V25.879V25.8171V25.7553V25.6935V25.6317V25.5699V25.5081V25.4463V25.3845V25.3227V25.2609V25.1991V25.1373V25.0755V25.0137V24.9518V24.89V24.8282V24.7664V24.7046V24.6428V24.581V24.5192V24.4574V24.3956V24.3338V24.272V24.2102V24.1484V24.0865V24.0247V23.9629V23.9011V23.8393V23.7775V23.7157V23.6539V23.5921V23.5303V23.4685V23.4067V23.3449V23.2831V23.2212V23.1594V23.0976V23.0358V22.974V22.9122V22.8504V22.7886V22.7268V22.665V22.6032V22.5414V22.4796V22.4178V22.3559V22.2941V22.2323V22.1705V22.1087V22.0469V21.9851V21.9233V21.8615V21.7997V21.7379V21.6761V21.6143V21.5525V21.4907V21.4288V21.367V21.3052V21.2434V21.1816V21.1198V21.058V20.9962V20.9344V20.8726V20.8108V20.749V20.6872V20.6254V20.5635V20.5017V20.4399V20.3781V20.3163V20.2545V20.1927V20.1309V20.0691V20.0073V19.9455V19.8837V19.8219V19.7601V19.6982V19.6364V19.5746V19.5128V19.451V19.3892V19.3274V19.2656V19.2038V19.142V19.0802V19.0184V18.9566V18.8948V18.8329V18.7711V18.7093V18.6475V18.5857V18.5239V18.4621V18.4003V18.3385V18.2767V18.2149V18.1531V18.0913V18.0295V17.9677V17.9058V17.844V17.7822V17.7204V17.6586V17.5968V17.535V17.4732V17.4114V17.3496V17.2878V17.226V17.1642V17.1024V17.0405V16.9787V16.9169V16.8551V16.7933V16.7315V16.6697V16.6079V16.5461V16.4843V16.4225V16.3607V16.2989V16.2371V16.1752V16.1134V16.0516V15.9898V15.928V15.8662V15.8044V15.7426V15.6808V15.619V15.5572V15.4954V15.4336V15.3718V15.3099V15.2481V15.1863V15.1245V15.0627V15.0009V14.9391V14.8773V14.8155V14.7537V14.6919V14.6301V14.5683V14.5065V14.4447V14.3828V14.321V14.2592V14.1974V14.1356V14.0738V14.012V13.9502V13.8884V13.8266V13.7648V13.703V13.6412V13.5794V9.6237V9.56189V9.50009V9.43828V9.37647V9.31467V9.25286V9.19105V9.12925V9.06744V9.00563V8.94382V8.88202V8.82021V8.7584V8.6966V8.63479V8.57298V8.51118V8.44937V8.38756V8.32575V8.26395V8.20214V8.14033V8.07853V8.01672V7.95491V7.89311V7.8313V7.76949V7.70768V7.64588V7.58407V7.52226V7.46046V7.39865V7.33684V7.27503V7.21323V7.15142V7.08961V7.02781V6.966V6.90419V6.84239V6.78058V6.71877V6.65696V6.59516V6.53335V6.47154V6.40974V6.34793V6.28612V6.22432V6.16251V6.1007V6.03889V5.97709V5.91528V5.85347V5.79167V5.72986V5.66805V5.60625V5.54444V5.48263V5.42082V5.35902V5.29721V5.2354V5.1736V5.11179V5.04998V4.98817V4.92637V4.86456V4.80275V4.74095V4.67914V4.61733V4.55553V4.49372V4.43191V4.3701V4.3083V4.24649V4.18468V4.12288V4.06107V3.99926V3.93746V3.87565V3.81384V3.75203V3.69023V3.62842V3.56661V3.50481V3.443V3.38119V3.31939V3.25758V3.19577V3.13396V3.07216V3.01035V2.94854V2.88674V2.82493V2.76312V2.70131V2.63951V2.5777V2.51589V2.45409V2.39228V2.33047V2.26867V2.20686V2.14505V2.08324V2.02144V2H2.03677H2.08258H2.12838H2.17418H2.21999H2.2658H2.31161H2.35742H2.40323H2.44905H2.49486H2.54068H2.5865H2.63232H2.67814H2.72397H2.76979H2.81562H2.86144H2.90727H2.9531H2.99894H3.04477H3.09061H3.13644H3.18228H3.22812H3.27396H3.3198H3.36565H3.41149H3.45734H3.50319H3.54904H3.59489H3.64074H3.68659H3.73245H3.77831H3.82416H3.87002H3.91588H3.96174H4.00761H4.05347H4.09934H4.14521H4.19107H4.23694H4.28281H4.32869H4.37456H4.42043H4.46631H4.51219H4.55807H4.60395H4.64983H4.69571H4.74159H4.78748H4.83336H4.87925H4.92514H4.97103H5.01692H5.06281H5.1087H5.1546H5.20049H5.24639H5.29229H5.33818H5.38408H5.42999H5.47589H5.52179H5.5677H5.6136H5.65951H5.70542H5.75132H5.79723H5.84315H5.88906H5.93497H5.98088H6.0268H6.07272H6.11863H6.16455H6.21047H6.25639H6.30231H6.34823H6.39416H6.44008H6.48601H6.53193H6.57786H6.62379H6.66972H6.71565H6.76158H6.80751H6.85344H6.89938H6.94531H6.99125H7.03719H7.08312H7.12906H7.175H7.22094H7.26688H7.31282H7.35877H7.40471H7.45065H7.4966H7.54255H7.58849H7.63444H7.68039H7.72634H7.77229H7.81824H7.86419H7.91015H7.9561H8.00205H8.04801H8.09396H8.13992H8.18588H8.23184H8.27779H8.32375H8.36971H8.41568H8.46164H8.5076H8.55356H8.59953H8.64549H8.69145H8.73742H8.78339H8.82935H8.87532H8.92129H8.96726H9.01323H9.0592H9.10517H9.15114H9.19711H9.24309H9.28906H9.33503H9.38101H9.42698H9.47296H9.51894H9.56491H9.61089H9.65687H9.70285H9.74883H9.7948H9.84079H9.88677H9.93275H9.97873H10.0247H10.0707H10.1167H10.1627H10.2086H10.2546H10.3006H10.3466H10.3926H10.4386H10.4846H10.5305H10.5765H10.6225H10.6685H10.7145H10.7605H10.8065H10.8525H10.8985H10.9444H10.9904H11.0364H11.0824H11.1284H11.1744H11.2204H11.2664H11.3124H11.3584H11.4044H11.4504H11.4964H11.5424H11.5883H11.6343H11.6803H11.7263H11.7723H11.8183H11.8643H11.9103H11.9563H12.0023H12.0483H12.0943H12.1403H12.1863H12.2323H12.2783H12.3243H12.3703H12.4163H12.4623H12.5083H12.5543H12.6003H12.6463H12.6923H12.7383H12.7843H12.8303H12.8763H12.9223H12.9683H13.0143H13.0603H13.1063H13.1523H13.1983H13.2443H13.2903H13.3363H13.3823H13.4283H13.4743H13.5203H13.5663H13.6123H13.6583H13.7043H13.7503H13.7963H13.8423H13.8883H13.9343H13.9803H14.0263H14.0723H14.1183H14.1643H14.2103H14.2563H14.3023H14.3483H14.3943H14.4403H14.4863H14.5323H14.5783H14.6243H14.6703H14.7163H14.7623H14.8083H14.8543H14.9003H14.9463H14.9923H15.0383H15.0843H15.1303H15.1763H15.2223H15.2683H15.3143H15.3603H15.4063H15.4523H15.4983H15.5443H15.5903H15.6363H15.6823H15.7283H15.7742H15.8202H15.8662H15.9122H15.9582H16.0042H16.0502H16.0962H16.1422H16.1882H16.2342H16.2802H16.3262H16.3721H16.4181H16.4641H16.5101H16.5561H16.6021H16.6481H16.6941H16.74H16.786H16.832H16.878H16.924H16.97H17.0159H17.0619H17.1079H17.1539H17.1999H17.2459H17.2918H17.3378H17.3838H17.4298H17.4758H17.5217H17.5677H17.6137H17.6597H17.7056H17.7516H17.7976H17.8436H17.8895H17.9355H17.9815H18.0275H18.0734H18.1194H18.1654H18.2113H18.2573H18.3033H18.3492H18.3952H18.4412H18.4871H18.5331H18.5791H18.625H18.671H18.7169H18.7629H18.8089H18.8548H18.9008H18.9467H18.9927H19.0387H19.0846H19.1306H19.1765H19.2225H19.2684H19.3144H19.3603H19.4063H19.4522H19.4982H19.5441H19.5901H19.636H19.682H19.7279H19.7739H19.8198H19.8657H19.9117H19.9576H20.0036H20.0495H20.0954H20.1414H20.1873H20.2332H20.2792H20.3251H20.371H20.417H20.4629H20.5088H20.5548H20.6007H20.6466H20.6925H20.7385H20.7844H20.8303H20.8762H20.9222H20.9681H21.014H21.0599H21.1058H21.1517H21.1977H21.2436H21.2895H21.3354H21.3813H21.4272H21.4731H21.519H21.5649H21.6108H21.6567H21.7026H21.7485H21.7944H21.8403H21.8862H21.9321H21.978H22.0239H22.0698H22.1157H22.1616H22.2075H22.2534H22.2993H22.3451H22.391H22.4369H22.4828H22.5287H22.5746H22.6204H22.6663H22.7122H22.7581H22.8039H22.8498H22.8957H22.9416H22.9874H23.0333H23.0792H23.125H23.1709H23.2167H23.2626H23.3085H23.3543H23.4002H23.446H23.4919H23.5377H23.5836H23.6294H23.6753H23.7211H23.767H23.8128H23.8587H23.9045H23.9503H23.9962H24.042H24.0879H24.1337H24.1795H24.2253H24.2712H24.317H24.3628H24.4087H24.4545H24.5003H24.5461H24.5919H24.6378H24.6836H24.7294H24.7752H24.821H24.8668H24.9126H24.9584H25.0042H25.03V2.02146V2.08327V2.14509V2.20691V2.26873V2.33055V2.39237V2.4542V2.51602V2.57785V2.63968V2.70151V2.76334V2.82518V2.88701V2.94885V3.01069V3.07253V3.13437V3.19621V3.25805V3.3199V3.38174V3.44359V3.50544V3.56729V3.62914V3.691V3.75285V3.81471V3.87656V3.93842V4.00028V4.06215V4.12401V4.18587V4.24774V4.3096V4.37147V4.43334V4.49521V4.55709V4.61896V4.68083V4.74271V4.80459V4.86646V4.92834V4.99022V5.05211V5.11399V5.17587V5.23776V5.29965V5.36154V5.42343V5.48532V5.54721V5.6091V5.671V5.73289V5.79479V5.85668V5.91858V5.98048V6.04239V6.10429V6.16619V6.2281V6.29V6.35191V6.41382V6.47572V6.53763V6.59955V6.66146V6.72337V6.78529V6.8472V6.90912V6.97104V7.03295V7.09487V7.1568V7.21872V7.28064V7.34256V7.40449V7.46641V7.52834V7.59027V7.6522V7.71413V7.77606V7.83799V7.89992V7.96186V8.02379V8.08573V8.14766V8.2096V8.27154V8.33348V8.39542V8.45736V8.5193V8.58124V8.64319V8.70513V8.76708V8.82902V8.89097V8.95292V9.01487V9.07682V9.13877V9.20072V9.26267V9.32463V9.38658V9.44853V9.51049V9.57245V9.6344V9.69636V9.75832V9.82028V9.88224V9.9442V10.0062V10.0681V10.1301V10.1921V10.254V10.316V10.3779V10.4399V10.5019V10.5639V10.6258V10.6878V10.7498V10.8117V10.8737V10.9357V10.9976V11.0596V11.1216V11.1836V11.2455V11.3075V11.3695V11.4315V11.4935V11.5554V11.6174V11.6794V11.7414V11.8034V11.8653V11.9273V11.9893V12.0513V12.1133V12.1753V12.2372V12.2992V12.3612V12.4232V12.4852V12.5472V12.6092V12.6711V12.7331V12.7951V12.8571V12.9191V12.9811V13.0431V13.1051V13.1671V13.2291V13.2911V13.353V13.415V13.477V13.539V13.601V13.663V13.725V13.787V13.849V13.911V13.973V14.035V14.097V14.159V14.221V14.283V14.345V14.407V14.469V14.531V14.593V14.655V14.717V14.779V14.841V14.903V14.965V15.027V15.089V15.151V15.213V15.275V15.337V15.399V15.461V15.523V15.585V15.647V15.709V15.7711V15.8331V15.8951V15.9571V16.0191V16.0811V16.1431V16.2051V16.2671V16.3291V16.3911V16.4531V16.5151V16.5771V16.6391V16.7011V16.7632V16.8252V16.8872V16.9492V17.0112V17.0732V17.1352V17.1972V17.2592V17.3212V17.3832V17.4452V17.5072V17.5692V17.6313V17.6933V17.7553V17.8173V17.8793V17.9413V18.0033V18.0653V18.1273V18.1893V18.2513V18.3133V18.3753V18.4374V18.4994V18.5614V18.6234V18.6854V18.7474V18.8094V18.8714V18.9334V18.9954V19.0574V19.1194V19.1814V19.2434V19.3054V19.3674V19.4295V19.4915V19.5535V19.6155V19.6775V19.7395V19.8015V19.8635V19.9255V19.9875V20.0495V20.1115V20.1735V20.2355V20.2975V20.3595V20.4215V20.4835V20.5455V20.6075V20.6695V20.7315V20.7935V20.8555V20.9175V20.9795V21.0415V21.1035V21.1655V21.2275V21.2895V21.3515V21.4135V21.4755V21.5375V21.5995V21.6615V21.7235V21.7854V21.8474V21.9094V21.9714V22.0334V22.0954V22.1574V22.2194V22.2814V22.3434V22.4054V22.4674V22.5293V22.5913V22.6533V22.7153V22.7773V22.8393V22.9013V22.9632V23.0252V23.0872V23.1492V23.2112V23.2732V23.3351V23.3971V23.4591V23.5211V23.5831V23.645V23.707V23.769V23.831V23.893V23.9549V24.0169V24.0789V24.1408V24.2028V24.2648V24.3268V24.3887V24.4507V24.5127V24.5746V24.6366V24.6986V24.7605V24.8225V24.8845V24.9464V25.0084V25.0704V25.1323V25.1943V25.2563V25.3182V25.3802V25.4421V25.5041V25.566V25.628V25.69V25.7519V25.8139V25.8758V25.9378V25.9997V26.0617V26.1236V26.1856V26.2475V26.3095V26.3714V26.4334V26.4953V26.5573V26.6192V26.6811V26.7431V26.805V26.867V26.9289V26.9908V27.0528V27.1147V27.1766V27.2386V27.3005V27.3624V27.4244V27.4863V27.5482V27.6102V27.6721V27.734V27.7959V27.8579V27.9198V27.9817V28.0436V28.1055V28.1675V28.2294V28.2913V28.3532V28.4151V28.477V28.5389V28.6009V28.6628V28.7247V28.7866V28.8485V28.9104V28.9723V29.0342V29.0961V29.158V29.2199V29.2818V29.3437V29.4056V29.4675V29.5294V29.5913V29.6532V29.7151V29.777V29.8388V29.9007V29.9626V30.0245V30.0864V30.1483V30.2102V30.272V30.3339V30.3958V30.4577V30.5195V30.5814V30.6433V30.7052V30.767V30.8289V30.8908V30.9526V31.0145V31.0764V31.1382V31.2001V31.2619V31.3238V31.3856V31.4475V31.5094V31.5712V31.6331V31.6949V31.7568V31.8186V31.8804V31.9423V32.0041V32.066V32.1278V32.1896V32.1991L21.0357 28.9901L15.9202 24.8803L15.9047 24.8679L15.889 24.8558L15.8698 24.841C15.5236 24.5739 15.111 24.2557 14.6121 23.9351ZM0.939665 33.1252C0.939678 33.125 0.942076 33.1236 0.946837 33.1213C0.942032 33.1241 0.939653 33.1253 0.939665 33.1252Z"
                  fill={'#6D7187'}
                  stroke={'#6D7187'}
                  strokeWidth="4"
                />
              </Svg>
            </TouchableOpacity>
          </View>
          <View style={[styles.button]}>
            <Text style={[{ fontSize: 14, fontWeight: '500' }]}>
              Submit Feedback
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Saved = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={example}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Post name={item.name} data={item.data} type={item.type} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2E42',
    flex: 1,
  },
  outer: {
    paddingVertical: 20,
    flex: 3.5,
    backgroundColor: '#2A2E42',
    flexDirection: 'row',
    marginTop: 10,
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftin: {
    flex: 1,
    marginLeft: 10,
    width: 23,
  },
  right: {
    flex: 6,
    paddingHorizontal: 10,
  },
  upper: {
    flex: 6,
  },
  lower: {
    flex: 1,
    flexDirection: 'row',
  },
  nametext: {
    color: 'white',
    marginBottom: 3,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  datatext: {
    color: 'white',
    paddingRight: 20,
    textAlign: 'justify',
    marginRight: 10,
    fontSize: 13,
    lineHeight: 14.5,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    marginTop: 6,
    flexDirection: 'row',
    textAlign: 'justify',
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#ffb30f',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Saved;