import { AmplifyData } from '@aws-amplify/data-construct';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { MonitoringFacade } from 'cdk-monitoring-constructs';

export type AdditionalResources = {
  functions?: IFunction[];
};

export type AmplifyMonitoringProps = {
  data?: AmplifyData;
  additionalResources?: AdditionalResources;
};

export class AmplifyMonitoring extends Construct {
  private monitoring: MonitoringFacade;

  constructor(scope: Construct, id: string, props: AmplifyMonitoringProps) {
    super(scope, id);

    this.monitoring = new MonitoringFacade(scope, 'MonitoringFacade');

    this.monitoring.addMediumHeader('Amplify Backend');
    if (props.data) this.setupDataMonitoring(props.data);
    if (props.additionalResources) this.setupAdditionalResourceMonitoring(props.additionalResources);
  }

  setupDataMonitoring(data: AmplifyData) {
    this.monitoring.addMediumHeader('Data Construct');
    this.monitoring.monitorAppSyncApi({
      api: data.resources.graphqlApi,
      humanReadableName: data.resources.cfnResources.cfnGraphqlApi.name,
      alarmFriendlyName: data.resources.cfnResources.cfnGraphqlApi.name,
    });
    Object.values(data.resources.tables).forEach((table) => this.monitoring.monitorDynamoTable({
      table,
      humanReadableName: table.tableName,
      alarmFriendlyName: table.tableName,
    })); // TODO: Support for both ddb and amplifytable resources
    Object.values(data.resources.functions).forEach((lambdaFunction) => this.monitoring.monitorLambdaFunction({
      lambdaFunction,
      humanReadableName: lambdaFunction.functionName,
      alarmFriendlyName: lambdaFunction.functionName,
    }));
  }

  setupAdditionalResourceMonitoring(additionalResources: AdditionalResources) {
    const { functions } = additionalResources;

    this.monitoring.addMediumHeader('Additional Resources');
    (functions ?? []).forEach((lambdaFunction) => this.monitoring.monitorLambdaFunction({
      lambdaFunction,
      humanReadableName: lambdaFunction.functionName,
      alarmFriendlyName: lambdaFunction.functionName,
    }));
  }
}
