import { authOptions } from '@/auth'
import { chatMembersCollectionGroupRef } from '@/lib/converters/ChatMembers';
import { getDocs } from 'firebase/firestore';
import { getServerSession } from 'next-auth';

async function ChatList() {
    const session = await getServerSession(authOptions);

    const chatSnapshot = await getDocs(
      chatMembersCollectionGroupRef(session?.user.id!)
    );

  return <div>ChatList</div>;
}

export default ChatList;
