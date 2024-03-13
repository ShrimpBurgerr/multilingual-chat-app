import { db } from "@/firebase";
import { Subscription } from "@/types/Subscription";
import {
    DocumentData,
    FirestoreDataConverter,
    QueryDocumentSnapshot,
    SnapshotOptions,
    collection,
} from "firebase/firestore";

export interface ChatMembers {
    userId: string;
    name: string;
    email: string;
    photoURL: string;
    role: string;
}
const subscriptionConverter: FirestoreDataConverter<Subscription> = {
    toFirestore: function (Subscription: Subscription): DocumentData {
        return {
            ...Subscription
        };
    },
    fromFirestore: function (
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): Subscription {
        const data = snapshot.data(options);

        const sub: Subscription = {
            id: snapshot.id,
            cancel_at_period_end: data.cancel_at_period_end,
            created: data.created,
            current_period_start: data.current_period_start,
            items: data.items,
            latest_invoice: data.latest_invoice,
            metadata: data.metadata,
            payment_method: data.payment_method,
            price: data.price,
            prices: data.prices,
            product: data.product,
            quantity: data.quantity,
            status: data.status,
            stripeLink: data.stripeLink,
            cancel_at: data.cancel_at,
            ended_at: data.ended_at,
            canceled_at: data.canceled_at,
            current_period_end: data.current_period_end,
            trial_start: data.trial_start,
            trial_end: data.trial_end,
            role: data.role,
            canceld_at: null
        };

        return sub;
    },
};

export const subscriptionRef = (userId: string) => collection(db, 'customers', userId, "subscriptions").withConverter(
    subscriptionConverter
);
