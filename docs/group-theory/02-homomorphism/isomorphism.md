---
sidebar_position: 3
---

# 群同构

## 定义

若存在群同态 $\varphi: G \to H$ 是**双射**，则称 $\varphi$ 为**群同构**（Group Isomorphism），称 $G$ 与 $H$ **同构**，记作 $G \cong H$。

同构映射的逆映射也是同构。

**直观理解**：同构的群具有**完全相同的群结构**，只是元素的"名字"不同。在群论中，同构的群被视为"本质上相同"。

## 同构判定

### 同构不变量

若 $G \cong H$，则以下量必须相等：

| 不变量 | 说明 |
|---|---|
| $|G|$ | 群的阶 |
| 交换性 | $G$ 交换 $\iff$ $H$ 交换 |
| 元素的阶的分布 | 各阶元素个数相同 |
| 循环性 | $G$ 循环 $\iff$ $H$ 循环 |
| 生成元个数 | 最小生成元集合大小 |
| 中心的大小 | $|Z(G)| = |Z(H)|$ |
| 是否有特定阶的子群 | 子群结构 |

### Cayley 定理

> 任意群 $G$ 同构于某个对称群的一个子群。即 $G$ 可嵌入 $S_{|G|}$。

Cayley 定理说明置换群是"最一般"的群。

## 自同构

$G$ 到自身的同构称为**自同构**。$G$ 的所有自同构在映射合成下构成群，记作 $\operatorname{Aut}(G)$。

### 内自同构

对固定的 $g \in G$，映射

$$i_g: G \to G, \quad i_g(x) = gxg^{-1}$$

称为 $g$ 诱导的**内自同构**。所有内自同构构成 $\operatorname{Inn}(G) \trianglelefteq \operatorname{Aut}(G)$。

### 外自同构群

$$\operatorname{Out}(G) = \operatorname{Aut}(G) / \operatorname{Inn}(G)$$

## 常见同构

| 同构 | 说明 |
|---|---|
| $\mathbb{Z}_n \cong \mathbb{Z}/n\mathbb{Z}$ | 循环群同构 |
| $\mathbb{R}^+ \cong \mathbb{R}$ | 指数映射 |
| $\mathbb{C}^* \cong \mathbb{R}^+ \times S^1$ | 极坐标分解 |
| $S_n / A_n \cong \{\pm 1\}$ | 商群同构 |
| $G / \ker \varphi \cong \operatorname{im} \varphi$ | 第一同构定理 |

## 同构类

群论的一个重要目标是 **对有限群进行分类**（即找出所有不同构的群）。例如：

- 阶为素数的群只有 $\mathbb{Z}_p$（同构意义下唯一）
- 阶为 4 的群：$\mathbb{Z}_4$ 和 $V_4$（Klein 四元群）
- 阶为 6 的群：$\mathbb{Z}_6$ 和 $S_3$（非交换群）
