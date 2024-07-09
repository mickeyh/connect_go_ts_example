# Setup

```bash
npm install
```

# Protobuf Codegen

buf:

```bash
PATH=$PATH:`pwd`/node_modules/.bin buf lint
PATH=$PATH:`pwd`/node_modules/.bin buf generate
```

protoc (from root dir):

```bash
PATH=$PATH:`pwd`/node_modules/.bin \
protoc --es_out=gen --es_opt=target=ts \
    --connect-es_out=gen --connect-es_opt=target=ts \
    --go_out=gen --go_opt=paths=source_relative \
    --connect-go_out=gen --connect-go_opt=paths=source_relative \
    greet/v1/greet.proto
```

# Application Exectution

go:

```bash
go run ./cmd/server/main.go
go run ./cmd/client/main.go
```

deno:

```bash
deno run --unstable-sloppy-imports --unstable-byonm --allow-env --allow-net cmd/client/main.ts
```