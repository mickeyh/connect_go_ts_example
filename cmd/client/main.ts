import { GreetRequest, GreetResponse } from "../../gen/greet/v1/greet_pb";
import { GreetService } from "../../gen/greet/v1/greet_connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { createPromiseClient } from "@connectrpc/connect";

const transport = createConnectTransport({ baseUrl: "http://localhost:8081" })
const client = createPromiseClient(GreetService, transport)
const response = await client.greet(GreetRequest.fromJson({ name: "World" }))
console.log("Got response: ", response)