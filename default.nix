with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "npm";
  builder = "${bash}/bin/bash";
  buildInputs = [nodejs-10_x];

}
