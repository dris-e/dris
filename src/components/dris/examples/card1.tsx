import ComponentContainer from "@/components/component-container";
import { Button } from "../button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../card";

export function Card1Example() {
  return (
    <ComponentContainer>
      <Card>
        <CardHeader>
          <CardTitle>Account Details</CardTitle>
          <CardDescription>Manage your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-semibold">Dris Elamri</p>
          <p className="text-xs text-muted-foreground">elamri@dris.llc</p>
        </CardContent>
        <CardFooter>
          <Button variant="daisy" size="sm" rounded="md" className="font-semibold">
            See More
          </Button>
        </CardFooter>
      </Card>
    </ComponentContainer>
  );
}
