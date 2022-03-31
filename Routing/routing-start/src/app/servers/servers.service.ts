export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'ProductionServer',
      status: 'online',
    },
    {
      id: 2,
      name: 'TestServer5Exceptions',
      status: 'offline',
    },
    {
      id: 3,
      name: 'DevServer5Exceptions',
      status: 'offline',
    },
    {
      id: 4,
      name: 'AngularServer',
      status: 'online',
    },
  ]

  getServers() {
    return this.servers
  }

  getServer(id: number) {
    const server = this.servers.find((s) => {
      return s.id === id
    })
    return server
  }

  updateServer(id: number, serverInfo: { name: string; status: string }) {
    const server = this.servers.find((s) => {
      return s.id === id
    })
    if (server) {
      server.name = serverInfo.name
      server.status = serverInfo.status
    }
  }
}
