const NewsItem = ({ item }) => {
    const { title, date } = item
    return (
        <div className="card w-full card-compact bg-white rounded-none shadow-sm">
            <figure><img src="https://img.freepik.com/free-photo/close-up-coffee-cup-wooden-table-steam-rising-generative-ai_188544-8921.jpg?size=626&ext=jpg&uid=R86799529&ga=GA1.1.459985010.1704129856&semt=sph" alt="Menu Image"/></figure>
            <div className="card-body">
                <h2 className="text-3xl font-semibold">{title}</h2>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default NewsItem;