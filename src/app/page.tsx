import { Button } from 'components/Button';

export default function Home() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Button className="w-full mt-6" variant="destructive" type="submit">
        Default button
      </Button>
    </div>
  );
}
