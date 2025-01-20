import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaEllipsisH } from "react-icons/fa";

export default function WorkInProgress() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <Card className="bg-card">
        <CardContent className="p-6 flex items-center">
          <FaEllipsisH className="h-6 w-6 mr-8" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Work in Progress</h3>
            <p className="text-muted-foreground">
              Stay tuned for more updates coming soon!
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
