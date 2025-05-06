import './styles.css'

export default function ConfigContainer() {
    return(
        <div className='config'>
            <div className="title-config">
               <h1 className="text-3xl text-neutral-800  font-bold">Configurações</h1>

                <p>Gerencie as configurações do sistema</p>
            </div>

            <div className='container-config'>

                <div className="box-config geral-config">
                    <h2>⚙️ Configurações Gerais</h2>

                    <div>
                        <span>Nome da Empresa <span className='red-span'>*</span></span>
                        <input type="text" placeholder="Nome da sua empresa" />
                    </div>

                    <div>
                        <span>Email de contato</span>
                        <input type="text" placeholder="contato@email.com" />
                    </div>
                </div>

                <div className="box-config notificacao">
                    <h2>🔔 Notificações</h2>

                    <div>
                        <div>
                            <h3>Notificações por Email</h3>
                            <p>Receba atualizações importantes por email</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>

                    <div>
                        <div>
                            <h3>Notificações do Sistema</h3>
                            <p>Notificações sobre atualizações do sistema</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>

                <div className="box-config backup-config">
                    <h3>⚙️ Backup e Restauração</h3>
                    <button className='btn-backup'>Fazer Backup</button>
                    <p className="last-backup">Último backup: Nunca</p>
                </div>
                
                
            </div>
            <div className="btn-group">
                <button className="btn-cancelar">Cancelar</button>
                <button className="btn-salvar">Salvar Alterações</button>
            </div>
        </div>
    )
}