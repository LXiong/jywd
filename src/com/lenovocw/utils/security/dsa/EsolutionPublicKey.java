package com.lenovocw.utils.security.dsa;

import java.math.*;

// Referenced classes of package com.todayeasy.esolution.license:
//            PortableDSAPublicKey

public class EsolutionPublicKey
    extends PortableDSAPublicKey {

  public EsolutionPublicKey() {
    super("DSA",
          new BigInteger("178011905478542266528237562450159990145232156369120674273274450314442865788737020770612695252123463079567156784778466449970650770920727857050009668388144034129745221171818506047231150039301079959358067395348717066319802262019714966524135060945913707594956514672855690606794135837542707371727429551343320695239"),
          new BigInteger("864205495604807476120572616017955259175325408501"),
          new BigInteger("174068207532402095185811980123523436538604490794561350978495831040599953488455823147851597408940950725307797094915759492368300574252438761037084473467180148876118103083043754985190983472601550494691329488083395492313850000361646482644608492304078721818959999056496097769368017749273708962006689187956744210730"),
          new BigInteger("90822115133161082565219910436275418791901219532216454783192681235755172290453415475516525113358445880876382953567672277597446598932367275842181291902044681251633020620982135764008902679679812204871718350272467815145493842710572322210777639559157141037311672258499800356421360307249192276419627078931115086839")
          );
  }

  public static void main(String args[]) {
    String p="fd7f53811d75122952df4a9c2eece4e7f611b7523cef4400c31e3f80b6512669455d402251fb593d8d58fabfc5f5ba30f6cb9b556cd7813b801d346ff26660b76b9950a5a49f9fe8047b1022c24fbba9d7feb7c61bf83b57e7c6a8a6150f04fb83f6d3c51ec3023554135a169132f675f3ae2b61d72aeff22203199dd14801c7";
    String q="9760508f15230bccb292b982a2eb840bf0581cf5";
    String g="f7e1a085d69b3ddecbbcab5c36b857b97994afbbfa3aea82f9574c0b3d0782675159578ebad4594fe67107108180b449167123e84c281613b7cf09328cc8a6e13c167a8b547c8d28e0a3ae1e2bb3a675916ea37f0bfa213562f1fb627a01243bcca4f1bea8519089a883dfe15ae59f06928b665e807b552564014c3bfecf492a";
    String y="8155c194b7c3170700e909c01b8aa913cc0b0365cced621989a1239e90537d60d6eba90863ee6bfd121681841bca6cc483b5c300647a855648d65d1cb42940a1f687056868d77a53f4b14dd01feaefcd0dca57670f137d9b25d6912de8f6f8324316986ea7af14ac5565c812b1e9dbc92cf69ff13d4163f807e739174c6b13f7";

    {
      BigInteger bigInteger = new BigInteger(p, 16);
      System.out.println("p=" + bigInteger.toString()); // public key
    }
    {
      BigInteger bigInteger = new BigInteger(q, 16);
      System.out.println("q=" + bigInteger.toString()); // public key
    }
    {
      BigInteger bigInteger = new BigInteger(g, 16);
      System.out.println("g=" + bigInteger.toString()); // public key
    }
    {
      BigInteger bigInteger = new BigInteger(y, 16);
      System.out.println("y=" + bigInteger.toString()); // public key
    }
  }
}