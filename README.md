Buf:

```bash
PATH=$PATH:`pwd`/node_modules/.bin buf lint
PATH=$PATH:`pwd`/node_modules/.bin buf generate
```

Go:

```bash
go run ./cmd/server/main.go
go run ./cmd/client/main.go
```

Deno:

```bash
deno run --unstable-sloppy-imports --unstable-byonm --allow-env --allow-net cmd/client/main.ts
```