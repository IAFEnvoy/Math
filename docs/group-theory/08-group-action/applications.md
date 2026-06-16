---
sidebar_position: 5
---

# 群作用的进一步应用

## 共轭作用与 Sylow 定理的联系

$G$ 共轭作用于全体 Sylow $p$-子群的集合 $\operatorname{Syl}_p(G)$：

$$g \cdot P = gPg^{-1}$$

- Sylow 第二定理本质上说：这个作用是**传递**的（所有 Sylow $p$-子群互相共轭）
- Sylow 第三定理：$n_p = |\operatorname{Syl}_p(G)| = [G : N_G(P)] \equiv 1 \pmod{p}$

通过群作用视角，Sylow 定理的证明变得更加清晰和统一。

## 群作用视角下的 Cayley 定理

群 $G$ 在自身上的左乘作用给出单同态 $\varphi: G \to \operatorname{Sym}(G) \cong S_{|G|}$：

$$\varphi(g)(x) = gx$$

这就是 Cayley 定理的群作用证明：

> **Cayley 定理**：任意群 $G$ 同构于某个置换群的子群。若 $|G| = n$，则 $G$ 可嵌入 $S_n$。

### 推广

若 $G$ 有指数为 $n$ 的子群 $H$，则 $G$ 作用于 $G/H$ 给出同态 $G \to S_n$，其核包含在 $H$ 中。此事实常用于证明群的非单性——若能找到指数较小的子群，则可推断群不是单群。

## 半直积的群作用视角

群作用提供了半直积的自然定义。设 $N$ 和 $H$ 为群，$\varphi: H \to \operatorname{Aut}(N)$ 为同态（即 $H$ 作用于 $N$），则在 $N \times H$ 上定义乘法：

$$(n_1, h_1)(n_2, h_2) = (n_1 \cdot \varphi(h_1)(n_2), h_1h_2)$$

得到**半直积** $N \rtimes_\varphi H$。

### 经典例子

- $D_{2n} \cong \mathbb{Z}_n \rtimes \mathbb{Z}_2$，其中 $\mathbb{Z}_2$ 作用于 $\mathbb{Z}_n$ 取逆
- $S_n \cong A_n \rtimes \mathbb{Z}_2$（当 $n \geq 2$）

**直积 vs 半直积**：直积是半直积的特例（$\varphi$ 为平凡作用）。半直积的"半"正体现在第二个因子不必是正规子群——它只是"作用"在第一个正规因子上。

## 群作用的应用总览

| 应用领域 | 群作用视角 |
|---|---|
| 计数组合学 | Burnside 引理 / Pólya 计数定理 |
| 有限群结构 | 类方程、Sylow 定理 |
| 表示论 | 群在线性空间上的作用（线性表示） |
| Galois 理论 | Galois 群作用于多项式的根 |
| 几何 | 拓扑群作用于流形（齐性空间） |
| 组合设计 | 群作用于区组设计（block design） |
