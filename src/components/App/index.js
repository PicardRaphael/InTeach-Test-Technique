/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import Header from 'src/components/Header';
import Module from 'src/components/Module';
import Form from 'src/components/Form';
import Footer from 'src/components/Footer';
import Field from 'src/components/Field';

// Data
import inputData from 'src/data/input-data';

// Styles et assets
import './app.sass';

/**
 * Code
 */
class App extends React.Component {
  state = {};

  handleInputChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value
    });
  }

  fields = () => {
    return inputData.map(field => {
      return (
        <Field
          key={field.name}
          {...field}
          value={this.state[field.name]}
          onChange={this.handleInputChange}
        />
      );
    });
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Module />
        <Form fields={this.fields}/>
        <Footer />
      </div>
    );
  }
}

/**
 * Export
 */
export default App;
