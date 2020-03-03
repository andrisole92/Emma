export const PERCENTILE_QUERY = "SELECT TE.\"userId\",\n" +
    "       TE.\"merchantId\",\n" +
    "       mer.display_name  merchant_name,\n" +
    "       mer.icon_url      merchant_logo,\n" +
    "       mer.funny_gif_url merchant_gif,\n" +
    "       TE.total_spent,\n" +
    "       TE.percent_rank\n" +
    "FROM (\n" +
    "         SELECT \"userId\",\n" +
    "                \"merchantId\",\n" +
    "                SUM(amount) total_spent,\n" +
    "                (1- PERCENT_RANK() OVER (\n" +
    "                    PARTITION BY \"merchantId\"\n" +
    "                    ORDER BY SUM(amount) DESC\n" +
    "                    ))       percent_rank\n" +
    "         FROM \"TransactionEntities\" t\n" +
    "         where t.\"createdAt\" > :from\n" +
    "         and t.\"createdAt\" < :to\n" +
    "         group by \"userId\", \"merchantId\") as TE\n" +
    "         INNER JOIN \"MerchantEntities\" mer ON mer.id = \"merchantId\"\n" +
    "where \"merchantId\" in\n" +
    "      (SELECT Distinct \"tr\".\"merchantId\"\n" +
    "       from \"TransactionEntities\" tr\n" +
    "       where TE.\"userId\" = :userId\n" +
    "         and tr.\"createdAt\" > :from\n" +
    "         and tr.\"createdAt\" < :to)\n" +
    "  and \"userId\" = :userId;";
