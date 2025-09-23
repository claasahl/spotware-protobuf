# clean up previous import
rm -rf ./protobuf
mkdir protobuf

# download latest proto files
wget -O proto.zip https://github.com/spotware/openapi-proto-messages/archive/refs/tags/91.zip
unzip proto.zip -d protobuf
mv protobuf/openapi-proto-messages*/*.proto protobuf

# remove unnecessary files
rm -rf protobuf/openapi-proto-messages*
rm proto.zip