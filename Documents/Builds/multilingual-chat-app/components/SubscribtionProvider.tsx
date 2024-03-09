'use client';
import { subscriptionRef } from "@/lib/converters/Subscription";
import { useSubscriptionStore } from "@/store/store";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
function SubscribtionProvider({
    children,
} : {
    children: React.ReactNode;
}) { 
    const { data: session } = useSession();
    const setSubscription = useSubscriptionStore(
        (state) => state.setSubscription
    );

    useEffect(() => {
        if (!session) return;

        return onSnapshot(subscriptionRef(session?.user.id), (snapshot) => {
            if (snapshot.empty) {
                console.log("User has NO subscription");
                setSubscription(null);
            } else {
                console.log("User has subscribtion");
                setSubscription(snapshot.docs[0].data());
            }
        }, (error) => {
            console.log("Error getting documents:", error);

        });
    }, [session, setSubscription]);

  return <>{children}</>;
  }

export default SubscribtionProvider

