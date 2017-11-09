import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';
import Input from '../components/Input';
import Textarea from '../components/Textarea';

storiesOf('Button', module)
  .add('Simple', () => <Button onClick={action('onClick')}>Simple</Button>)
  .add('Focused', () => <Button autoFocus onClick={action('onClick')}>Focused</Button>)
  .add('Disabled', () => <Button disabled onClick={action('onClick')}>Disabled</Button>)

storiesOf('ButtonGroup', module)
  .add('Simple', () => (
    <ButtonGroup>
      <Button autoFocus onClick={action('onClick')}>One</Button>
      <Button onClick={action('onClick')}>Two</Button>
      <Button onClick={action('onClick')}>Three</Button>
      <Button disabled onClick={action('onClick')}>Four</Button>
    </ButtonGroup>
  ))

storiesOf('Input', module)
  .add('Simple', () => <Input onChange={action('onChange')} />)
  .add('Focused', () => <Input autoFocus onChange={action('onChange')} />)
  .add('Placeholder', () => <Input placeholder="Enter text..." onChange={action('onChange')} />)
  .add('Value', () => <Input defaultValue="Something text" onChange={action('onChange')} />)
  .add('Disabled', () => <Input disabled defaultValue="Something text" onChange={action('onChange')} />)

storiesOf('Textarea', module)
  .add('Simple', () => <Textarea cols={60} rows={6} onChange={action('onChange')} />)
  .add('Autosize', () => <Textarea cols={60} minRows={6} autoSize onChange={action('onChange')} />)
  .add('Focused', () => <Textarea cols={60} rows={6} autoFocus onChange={action('onChange')} />)
  .add('Placeholder', () => <Textarea cols={60} rows={6} placeholder="Enter text..." onChange={action('onChange')} />)
  .add('Value', () => <Textarea cols={60} rows={6} defaultValue="Something text" onChange={action('onChange')} />)
  .add('Disabled', () => <Textarea cols={60} rows={6} disabled defaultValue="Something text" onChange={action('onChange')} />)
