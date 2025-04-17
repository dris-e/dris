import ComponentContainer from "@/components/component-container";
import { Button } from "../button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";

export function Card2Example() {
  return (
    <ComponentContainer>
      <Card variant="lime" size="sm">
        <CardHeader>
          <CardTitle>Create Deployment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">10.0.0.1</p>
          <p className="font-semibold">Northeast 1</p>
          <p className="text-xs text-muted-foreground">Your account will be charged $14.99 monthly.</p>
        </CardContent>
        <CardFooter className="justify-between">
          <Button variant="minimal" size="sm" rounded="md" className="font-semibold">
            Cancel
          </Button>
          <Button variant="lime" size="sm" rounded="md" className="font-semibold">
            Create
          </Button>
        </CardFooter>
      </Card>
    </ComponentContainer>
  );
}
