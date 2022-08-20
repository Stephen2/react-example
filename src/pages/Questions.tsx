import { Button, Card, Col, Row } from "antd";
import { Heading } from "../components/Heading";
import { InputNumber } from 'antd';
import { useState } from "react";
import axios from "axios";

type Person = {
  name: string;
}

export function Questions() {
  const [q1, setQ1] = useState<number>();
  const [person, setPerson] = useState<Person>();

  const q1IsValid = q1 !== undefined && q1.toString().length <= 2;

  return (
    <Card style={{ width: 300 }}>
      <Heading text="1. What is your zip code?" />

      <p>This will help us show you eligibile services near you.</p>
      <p>You have typed: {q1}</p>
      <p>You found person: {person?.name}</p>

      <Row style={{ marginBottom: 20 }}>
        <Col>
          <InputNumber value={q1} onChange={(value) => setQ1(value)} />
        </Col>
      </Row>

      <Row>
        {q1IsValid === false && (
          <div>Please enter 5 characters</div>
        )}
      </Row>

      <Row>
        <Col>
          <Button type="primary" onClick={async () => {
            if (!q1IsValid) {
              return;
            }

            // Send "q1" to the backend
            const response = await axios.get<Person>(`https://swapi.dev/api/people/${q1}`);

            setPerson(response.data);
          }}>Next</Button>
        </Col>
      </Row>
    </Card>
  )
}