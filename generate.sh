#!/bin/bash

protoc --plugin="protoc-gen-ts=C:\Users\welat\Desktop\MyProject\AllDemloid\Demloid09-Beta\demweb\node_modules\.bin\protoc-gen-ts.cmd" --ts_out="service=true:./src" --js_out="import_style=commonjs,binary:./src"  proto/dem.proto