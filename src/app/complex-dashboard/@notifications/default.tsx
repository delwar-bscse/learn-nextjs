import Card from "@/components/Card";
import Link from "next/link";


export default function DefaultNotifications() {
  return (
    <Card>
      <div>Default Notifications</div>
      <div>
        <Link className="text-blue-500" href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  )
}
