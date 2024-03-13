type Props = {
    params: {};
    searchParams: {
        error: string;
    };
};

function ChatsPage({ searchParams: { error } }: Props) {
    return (
    <div>
    {/* Chat Perimision chat */}

    {/* ChatList */}
    <ChatList />
</div>
    );
}

export default ChatsPage;
