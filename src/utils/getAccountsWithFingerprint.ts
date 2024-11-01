import { PoolConnection } from "mariadb";

export default async function (
	connection: PoolConnection,
	fingerprint: string,
): Promise<
	{
		discord_id: string;
		claims_cache: {
			preferred_username: string;
			sub: number;
		};
		public_fingerprint: string;
	}[]
> {
	const accounts = await connection.query(
		"SELECT discord_id, claims_cache, public_fingerprint FROM `roblox_oauth_data` WHERE `private_fingerprint` = ?",
		[fingerprint],
	);
	return accounts;
}
