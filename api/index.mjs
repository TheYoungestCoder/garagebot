import { myQApi } from "@hjdhjd/myq"

let api = new myQApi(process.env.MYQ_USERNAME, process.env.MYQ_PASSWORD)

export default async (req, res) => {
    try {
        let params = new URL(req.url, "http://example.com").searchParams
        if (params.get("password") !== process.env.PASSWORD) return
        await api.refreshDevices()
        await api.execute(api.devices[0], params.get("command"))
    } catch { }
    finally { res.end() }
}