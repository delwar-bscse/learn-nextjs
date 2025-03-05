import Card from "@/components/Card";
import Link from "next/link";


export default function ArchivedNotifications() {
  return (
    <Card >
      <div>Archived Notifications</div>
      <div>
        <Link className="text-blue-500" href="/complex-dashboard/">Default</Link>
      </div>
    </Card>
  )
}
