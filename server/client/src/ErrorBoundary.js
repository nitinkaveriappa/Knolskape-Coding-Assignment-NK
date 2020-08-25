import React, { Component } from 'react';
import { ErrorComponent } from './Common';

/* 
Note:
Error boundaries do not catch errors for:
  - Event handlers (learn more)
  - Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
  - Server side rendering
  - Errors thrown in the error boundary itself (rather than its children)
*/
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorComponent errorMessage="Error Caught by Error Boundary" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
