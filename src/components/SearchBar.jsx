import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function BasicExample({onAnalysis , setUrl}) {
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="p-4 shadow-lg" style={{ width: '400px', borderRadius: '12px' }}>
        <h4 className="mb-3 text-center">AI Readiness Audit</h4>

        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter website URL..."
              className="p-2"
              onChange={(e)=> setUrl(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="button" className="w-100" onClick={onAnalysis}>
            Analyze
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default BasicExample;