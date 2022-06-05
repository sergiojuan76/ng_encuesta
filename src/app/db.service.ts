import { Injectable } from '@angular/core';
import { BatchExecuteStatementCommand, BatchExecuteStatementCommandOutput, BatchExecuteStatementInput, DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { environment } from 'src/environments/environment';

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

  constructor() { }

  getEncuesta(
    idEncuesta: string,
    callback: any) {
 
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
}