'use client';
import { subscriptionRef } from "@/lib/converters/Subscription";
import { useSubscriptionStore } from "@/store/store";
import { error } from "console";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { Children, useEffect } from "react";
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

  return <>{Children}</>;
  }

export default SubscribtionProvider

