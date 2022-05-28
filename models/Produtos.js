const Produtos = (sequelize, DataTypes) => {
    const produtos = sequelize.define('Produtos', {
        nome_produto: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        mililitros: {
            type: DataTypes.SMALLINT,
            allowNull: false
        },
        preco: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        }
    }, {
        tableName:"produtos",
        timestamps: false
    })
    return produtos
}

module.exports = Produtos