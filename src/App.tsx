import { generateClient } from 'aws-amplify/api';
import type { Schema } from '../iac/schema';
import { Flex, Heading, Button, Input } from '@aws-amplify/ui-react';
import { useState } from 'react';
import { Echo, Reverse } from './graphql/queries';

const client = generateClient<Schema>();

const createABlog = async (): Promise<void> => {
  const createResponse = await client.models.Blog.create({ title: 'Test' });
  console.log(createResponse.data.id);
};

function App() {
  const [message, setMessage] = useState<string>('');

  const echoMessage = async (): Promise<void> => {
    if (message === '') return;
    const echoResponse = await client.graphql({
      query: Echo,
      variables: { message },
    });
    if (echoResponse.errors) console.warn(`Got echo errors: ${JSON.stringify(echoResponse.errors)}`);
    console.log(`Got echo response: ${echoResponse.data.Echo?.echoedMessage}`);
  };

  const reverseMessage = async (): Promise<void> => {
    if (message === '') return;
    const reverseResponse = await client.graphql({
      query: Reverse,
      variables: { message },
    });
    if (reverseResponse.errors) console.warn(`Got reverse errors: ${JSON.stringify(reverseResponse.errors)}`);
    console.log(`Got reverse response: ${reverseResponse.data.Reverse?.reversedMessage}`);
  };

  return (
    <Flex direction={'column'}>
      <Heading level={1}>Some Typed Samples</Heading>
      <Flex direction={'row'}>
        <Button onClick={createABlog}>Click Me</Button> 
      </Flex>
      <Heading level={2}>Custom Mutations/Queries</Heading>
      <Flex direction={'row'}>
        <Input type='text' value={message} onChange={(e) => setMessage(e.target.value)}></Input>
        <Button onClick={echoMessage}>Echo</Button>
        <Button onClick={reverseMessage}>Reverse</Button>
      </Flex>
    </Flex>
  );
}

export default App;
