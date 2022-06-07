import { Injectable } from '@angular/core';
import { BatchExecuteStatementCommand, BatchExecuteStatementInput, DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb'
import { environment } from 'src/environments/environment';
import { Encuesta } from './model/encuesta';
import { opciones1 } from './model/opcion';

@Injectable({
  providedIn: 'root'
})

export class DbService {

  private client: DynamoDBClient = new DynamoDBClient({
    region : environment.aws.region,
    credentials: {
      accessKeyId: environment.aws.accessKeyId,
      secretAccessKey: environment.aws.secretAccessKey
    }
  });

  private documentClient: DynamoDBDocumentClient = DynamoDBDocumentClient.from(this.client);

  constructor() { }

  getEncuesta(
    idEncuesta: string,
    callback: any): void {
 
    const input: BatchExecuteStatementInput = {
      Statements: [
        {Statement: `SELECT opciones FROM \"encuesta.encuesta\" WHERE id = '${idEncuesta}'`}
      ],
    }
    console.log(`SQL -> ${input.Statements![0].Statement}`);
    const command = new BatchExecuteStatementCommand(input);
    this.client.send(command).
      then(callback).
      catch((err) => {console.log("Error"); console.log(err)});
  }

  putItem = async (
    idEncuesta: string,
    opciones: any) => {

    try {
      const data = await this.documentClient.send(
        new PutCommand({
          TableName: "encuesta.encuesta",
          Item: {
            id: idEncuesta,
            opciones: opciones
          },
          
        })
      );
      console.log("Insertado", data);
    } catch (err) {
      console.log("Error insertando ", err);
    }
  }

  getItem = async (
    idEncuesta: string,
    callback: any): Promise<any> => {

    try {
      const data = await this.documentClient.send(
        new GetCommand({
          TableName: "encuesta.encuesta",
          Key: {
            id: idEncuesta
          }
        })
      );
      console.log("Recuperado ", data);
      callback(data);
      return data;
    } catch (err) {
      console.log("Error recuperando");
    }
  }
}